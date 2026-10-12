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
    getElementById: (id) => null,
    querySelectorAll: () => [],
    createElement: () => ({ id: '', classList: { add: () => {}, remove: () => {} } }),
    body: { appendChild: () => {} },
    hidden: false,
    readyState: 'complete'
};
global.localStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
};
global.navigator = { language: 'ru-RU', userAgent: 'test-agent' };
global.location = { search: '', hostname: 'localhost' };

let oscillatorCount = 0;
global.AudioContext = class {
    constructor() { this.state = 'running'; }
    createBuffer() { return {}; }
    createBufferSource() { return { connect() {}, start() {} }; }
    createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
    createOscillator() {
        oscillatorCount++;
        return {
            frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
            connect() {},
            start() {},
            stop() {}
        };
    }
    suspend() { this.state = 'suspended'; }
    resume() { this.state = 'running'; }
};

// Evaluate the game bundle
const code = fs.readFileSync('game.bundle.js', 'utf8');
eval(code);

async function runComprehensiveTests() {
    console.log('=== RUNNING COMPREHENSIVE VK INTEGRATION SUITE ===\n');

    // TEST 1: Audio Engine & Complete Mute Isolation
    console.log('Test 1: Testing Audio Engine & Complete Mute Isolation...');
    window.gameAudio.unlockAudio();
    assert.strictEqual(window.gameAudio.unlocked, true, 'Audio unlocked');
    
    // Play sound when unmuted
    oscillatorCount = 0;
    window.gameAudio.playSwap();
    assert.strictEqual(oscillatorCount, 1, 'Oscillator created when unmuted');

    // User mutes audio
    window.gameAudio.toggleUserMute();
    assert.strictEqual(window.gameAudio.isUserMuted, true, 'User mute active');
    assert.strictEqual(window.gameAudio.isMuted, true, 'Audio is muted');

    // Attempt to play sounds while user-muted
    oscillatorCount = 0;
    window.gameAudio.playSwap();
    window.gameAudio.playMatch();
    window.gameAudio.playSpecial();
    window.gameAudio.playWin();
    window.gameAudio.playUpgrade();
    window.gameAudio.playExplosion();
    window.gameAudio.playGusliPluck(440);
    assert.strictEqual(oscillatorCount, 0, 'Zero oscillators created while user-muted');

    // Simulate external ad finish or tab restore calling unmute()
    window.gameAudio.unmute();
    assert.strictEqual(window.gameAudio.isMuted, true, 'Audio MUST stay muted if user explicitly muted');
    assert.strictEqual(window.gameAudio.isUserMuted, true, 'User mute persists');

    // User unmutes via button
    window.gameAudio.toggleUserMute();
    assert.strictEqual(window.gameAudio.isUserMuted, false, 'User unmutes');
    assert.strictEqual(window.gameAudio.isMuted, false, 'Audio unmuted');
    window.gameAudio.playSwap();
    assert.strictEqual(oscillatorCount, 1, 'Audio plays normally after user un-mutes');
    console.log('  PASSED: Audio Engine guarantees zero sound leaks when muted.\n');

    // TEST 2: Ad Cooldown & Concurrency
    console.log('Test 2: Testing Ad Cooldown & Concurrency Rules...');
    const vkMock = new window.VKSDKWrapper();
    await vkMock.init();
    assert.strictEqual(vkMock.platform, 'mock', 'Mock mode active');

    // No ads shown yet
    assert.strictEqual(vkMock.lastFullscreenAdTime, 0, 'No ads at startup');

    // First ad
    let ad1 = null;
    await vkMock.showFullscreenAdv({ onClose: (res) => { ad1 = res; } });
    assert.strictEqual(ad1, true, 'First ad allowed');
    assert.ok(vkMock.lastFullscreenAdTime > 0, 'Ad timestamp updated');

    // Immediate second ad (cooldown test)
    let ad2 = null;
    await vkMock.showFullscreenAdv({ onClose: (res) => { ad2 = res; } });
    assert.strictEqual(ad2, false, 'Second ad blocked by cooldown');

    // Test after cooldown elapsed (simulate 66s elapsed)
    vkMock.lastFullscreenAdTime = Date.now() - 66000;
    let ad3 = null;
    await vkMock.showFullscreenAdv({ onClose: (res) => { ad3 = res; } });
    assert.strictEqual(ad3, true, 'Ad allowed after cooldown elapsed');

    // Concurrency test: rewarded ad while ad is showing
    vkMock.isShowingAd = true;
    let rewardedBlocked = null;
    await vkMock.showRewardedVideo({ onClose: (res) => { rewardedBlocked = res; } });
    assert.strictEqual(rewardedBlocked, false, 'Rewarded ad blocked when another ad is playing');
    vkMock.isShowingAd = false;
    console.log('  PASSED: Ad cooldown (>=65s) and concurrency guards strictly verified.\n');

    // TEST 3: Bidirectional Persistence & Data Safety
    console.log('Test 3: Testing Cloud & LocalStorage Persistence & Smart Merge...');
    const cloudSave = { level: 20, scoreTotal: 50000, gold: 1200, wood: 400, resin: 50 };
    const localSave = { level: 22, scoreTotal: 55000, gold: 2000, wood: 500, resin: 80 };

    window.vkBridge = {
        send: async (method, params) => {
            if (method === 'VKWebAppStorageGet') {
                return { keys: [{ key: 'slavic_manor_save', value: JSON.stringify(cloudSave) }] };
            }
            if (method === 'VKWebAppStorageSet') {
                return { result: true };
            }
            return { result: true };
        },
        subscribe: () => {},
        isEmbedded: () => true
    };

    const vkBridgeSDK = new window.VKSDKWrapper();
    await vkBridgeSDK.init();
    assert.strictEqual(vkBridgeSDK.platform, 'vk_mini_apps', 'Connected to VK Mini Apps');

    // Set offline local data
    window.localStorage.setItem('slavic_manor_save', JSON.stringify(localSave));
    const merged = await vkBridgeSDK.loadData();
    assert.strictEqual(merged.level, 22, 'Highest level preserved');
    assert.strictEqual(merged.scoreTotal, 55000, 'Highest score preserved');
    assert.strictEqual(merged.gold, 2000, 'Highest gold preserved');
    console.log('  PASSED: Offline progress safely merged without data loss.\n');

    // TEST 4: VK Play iframeApi Integration
    console.log('Test 4: Testing VK Play (iframeApi) Integration...');
    delete window.vkBridge;
    window.location.hostname = 'vkplay.ru';
    let vkPlayFullscreenCalled = false;
    let vkPlayRewardedCalled = false;
    window.iframeApi = {
        user: { id: 999, name: 'BogatyrVKPlay' },
        ads: {
            showFullscreenAdv(opts) {
                vkPlayFullscreenCalled = true;
                if (opts.callbacks?.onClose) opts.callbacks.onClose();
            },
            showRewardedVideo(opts) {
                vkPlayRewardedCalled = true;
                if (opts.callbacks?.onRewarded) opts.callbacks.onRewarded();
            }
        }
    };

    const vkPlaySDK = new window.VKSDKWrapper();
    await vkPlaySDK.init();
    assert.strictEqual(vkPlaySDK.platform, 'vk_play', 'Connected to VK Play');
    assert.strictEqual(vkPlaySDK.user.name, 'BogatyrVKPlay', 'VK Play user verified');

    await vkPlaySDK.showFullscreenAdv({ onClose: (shown) => assert.strictEqual(shown, true) });
    assert.strictEqual(vkPlayFullscreenCalled, true, 'VK Play fullscreen ad executed');

    let rewardGot = false;
    await vkPlaySDK.showRewardedVideo({ onRewarded: () => { rewardGot = true; } });
    assert.strictEqual(vkPlayRewardedCalled, true, 'VK Play rewarded ad executed');
    assert.strictEqual(rewardGot, true, 'VK Play reward granted');
    console.log('  PASSED: VK Play iframeApi fully supported.\n');

    // TEST 5: Codebase Hygiene (No other store mentions)
    console.log('Test 5: Testing Codebase Platform Decoupling...');
    const forbiddenPatterns = [
        /\byandex\b/i,
        /\byagames\b/i,
        /\bysdk\b/i,
        /\bcrazygames\b/i,
        /\bgoogle play\b/i
    ];
    const scannedFiles = ['index.html', 'style.css', 'game.bundle.js', 'js/vk-sdk.js', 'js/app.js', 'js/audio.js'];
    for (const f of scannedFiles) {
        const content = fs.readFileSync(f, 'utf8');
        for (const pat of forbiddenPatterns) {
            assert.strictEqual(pat.test(content), false, `Forbidden keyword ${pat} found in ${f}`);
        }
    }
    console.log('  PASSED: 100% clean decoupling, 0 references to third-party stores.\n');

    console.log('====================================================');
    console.log('ALL COMPREHENSIVE TESTS COMPLETED WITH 100% SUCCESS!');
    console.log('====================================================');
    process.exit(0);
}

runComprehensiveTests().catch(err => {
    console.error('Test Suite Failed:', err);
    process.exit(1);
});
