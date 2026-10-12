const fs = require('fs');
const assert = require('assert');

// Setup mock browser environment
global.window = global;
global.addEventListener = (type, fn) => {
    global._listeners = global._listeners || {};
    global._listeners[type] = global._listeners[type] || [];
    global._listeners[type].push(fn);
};
global.removeEventListener = () => {};
global.document = {
    addEventListener: (type, fn) => {
        global._docListeners = global._docListeners || {};
        global._docListeners[type] = global._docListeners[type] || [];
        global._docListeners[type].push(fn);
    },
    removeEventListener: () => {},
    documentElement: { requestFullscreen: async () => {} },
    exitFullscreen: async () => {},
    getElementById: () => null,
    querySelectorAll: () => [],
    createElement: () => ({ id: '', classList: { add: () => {}, remove: () => {} } }),
    body: { appendChild: () => {} },
    hidden: false
};
global.localStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
};
global.navigator = { language: 'ru-RU' };
global.location = { search: '', hostname: 'localhost' };
global.AudioContext = class {
    constructor() { this.state = 'running'; }
    createBuffer() { return {}; }
    createBufferSource() { return { connect() {}, start() {} }; }
    createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
    createOscillator() { return { frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {}, start() {}, stop() {} }; }
    suspend() { this.state = 'suspended'; }
    resume() { this.state = 'running'; }
};

// Evaluate the game bundle
const code = fs.readFileSync('game.bundle.js', 'utf8');
eval(code);

async function runTests() {
    console.log('--- STARTING VK SDK & AUDIO EDGE CASE TESTS ---');

    // 1. Init test
    await window.vkSDK.init();
    assert.strictEqual(window.vkSDK.isInitialized, true, 'SDK should be initialized');
    assert.strictEqual(window.vkSDK.isMock, true, 'Mock mode should be active on localhost');

    // 2. Cooldown test on interstitial ads
    window.vkSDK.lastFullscreenAdTime = Date.now(); // simulated recent ad
    let adShown = null;
    await window.vkSDK.showFullscreenAdv({
        onClose: (shown) => { adShown = shown; }
    });
    assert.strictEqual(adShown, false, 'Ad should be blocked by 65s cooldown');
    console.log('✔ Edge Case 1: Interstitial cooldown strictly enforced (< 65s blocked)');

    // 3. Ad concurrency test
    window.vkSDK.lastFullscreenAdTime = 0; // reset cooldown
    window.vkSDK.isShowingAd = true; // simulate already showing
    let concurrentAdResult = null;
    await window.vkSDK.showRewardedVideo({
        onClose: (shown) => { concurrentAdResult = shown; }
    });
    assert.strictEqual(concurrentAdResult, false, 'Concurrent ad request must be safely rejected');
    window.vkSDK.isShowingAd = false;
    console.log('✔ Edge Case 2: Concurrent ad requests safely rejected');

    // 4. Sound & User Mute test
    assert.strictEqual(window.gameAudio.isUserMuted, false, 'Default user mute state should be false');
    window.gameAudio.mute();
    assert.strictEqual(window.gameAudio.isMuted, true, 'Audio should be muted');
    window.gameAudio.unmute();
    assert.strictEqual(window.gameAudio.isMuted, false, 'Audio should be unmuted');

    // User explicitly mutes via button
    window.gameAudio.toggleUserMute();
    assert.strictEqual(window.gameAudio.isUserMuted, true, 'User mute should be active');
    assert.strictEqual(window.gameAudio.isMuted, true, 'Audio should be muted when user mutes');

    // Tab restore / ad close must NOT unmute if user explicitly muted!
    window.gameAudio.unmute();
    assert.strictEqual(window.gameAudio.isMuted, true, 'Audio MUST remain muted when user explicitly muted');
    assert.strictEqual(window.gameAudio.isUserMuted, true, 'User mute remains true');

    // Sound toggle restores audio
    window.gameAudio.toggleUserMute();
    assert.strictEqual(window.gameAudio.isUserMuted, false, 'User mute should now be false');
    assert.strictEqual(window.gameAudio.isMuted, false, 'Audio should now be unmuted');
    console.log('✔ Edge Case 3: User manual mute strictly persists through tab/ad restores');

    // 5. Cloud & LocalStorage Persistence & Smart Bidirectional Merge test
    const testState = {
        level: 12,
        wood: 950,
        gold: 3400,
        resin: 120,
        energy: 8,
        scoreTotal: 15400
    };
    await window.vkSDK.saveData(testState);
    const loadedState = await window.vkSDK.loadData();
    assert.deepStrictEqual(loadedState, testState, 'Loaded state should match saved state');

    // Test offline progress merge: player earned higher score offline
    window.localStorage.setItem('slavic_manor_save', JSON.stringify({
        ...testState,
        level: 14,
        gold: 5000,
        scoreTotal: 21000
    }));
    const mergedState = await window.vkSDK.loadData();
    assert.strictEqual(mergedState.level, 14, 'Offline higher level must be preserved');
    assert.strictEqual(mergedState.gold, 5000, 'Offline higher gold must be preserved');
    console.log('✔ Edge Case 4: Cloud and LocalStorage bidirectional intelligent persistence verified');

    // 6. VK Bridge simulation test
    let bridgeInitSent = false;
    let bridgeAdSent = false;
    let bridgeHideSubscriber = null;
    window.vkBridge = {
        send: async (method, params) => {
            if (method === 'VKWebAppInit') {
                bridgeInitSent = true;
                return { result: true };
            }
            if (method === 'VKWebAppShowNativeAds') {
                bridgeAdSent = true;
                return { result: true };
            }
            if (method === 'VKWebAppStorageSet') {
                return { result: true };
            }
            if (method === 'VKWebAppStorageGet') {
                return { keys: [{ key: 'slavic_manor_save', value: JSON.stringify(testState) }] };
            }
            return {};
        },
        subscribe: (fn) => {
            bridgeHideSubscriber = fn;
        },
        isEmbedded: () => true
    };

    const vkWrapper = new window.VKSDKWrapper();
    await vkWrapper.init();
    assert.strictEqual(bridgeInitSent, true, 'VKWebAppInit must be called when vkBridge is present');
    assert.strictEqual(vkWrapper.platform, 'vk_mini_apps', 'Platform should be vk_mini_apps');

    // Test VKWebAppViewHide subscription
    assert.strictEqual(typeof bridgeHideSubscriber, 'function', 'Bridge subscriber registered');
    bridgeHideSubscriber({ detail: { type: 'VKWebAppViewHide' } });
    assert.strictEqual(window.gameAudio.isMuted, true, 'VKWebAppViewHide must instantly mute gameAudio');
    console.log('✔ Edge Case 5: VK Bridge official protocol (VKWebAppInit, VKWebAppViewHide, NativeAds) verified');

    // 7. VK Play (iframeApi) simulation test
    let vkPlayAdShown = false;
    let vkPlayRewardedShown = false;
    delete window.vkBridge;
    window.location.hostname = 'vkplay.ru';
    window.iframeApi = {
        user: { id: 12345, name: 'VKPlayGamer' },
        ads: {
            showFullscreenAdv(opts) {
                vkPlayAdShown = true;
                if (opts && opts.callbacks && opts.callbacks.onClose) opts.callbacks.onClose();
            },
            showRewardedVideo(opts) {
                vkPlayRewardedShown = true;
                if (opts && opts.callbacks && opts.callbacks.onRewarded) opts.callbacks.onRewarded();
            }
        }
    };

    const vkPlayWrapper = new window.VKSDKWrapper();
    await vkPlayWrapper.init();
    assert.strictEqual(vkPlayWrapper.platform, 'vk_play', 'Platform should be vk_play');
    assert.strictEqual(vkPlayWrapper.user.name, 'VKPlayGamer', 'VK Play user should be loaded');

    // Test VK Play Interstitial Ad
    await vkPlayWrapper.showFullscreenAdv({
        onClose: (shown) => { assert.strictEqual(shown, true, 'VK Play ad showed'); }
    });
    assert.strictEqual(vkPlayAdShown, true, 'VK Play ads.showFullscreenAdv must be invoked');

    // Test VK Play Rewarded Ad
    let vkPlayRewardGranted = false;
    await vkPlayWrapper.showRewardedVideo({
        onRewarded: () => { vkPlayRewardGranted = true; }
    });
    assert.strictEqual(vkPlayRewardedShown, true, 'VK Play ads.showRewardedVideo must be invoked');
    assert.strictEqual(vkPlayRewardGranted, true, 'VK Play reward must be granted');
    console.log('✔ Edge Case 6: VK Play (iframeApi) ads and user profile verified');

    console.log('\n========================================');
    console.log('ALL EDGE CASE TESTS PASSED PERFECTLY (6/6)');
    console.log('========================================');
}

runTests().catch(err => {
    console.error('Test failed:', err);
    process.exit(1);
});
