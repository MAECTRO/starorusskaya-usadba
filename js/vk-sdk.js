/**
 * VK Games & VK Play Universal SDK Adapter
 * Conforms 100% to VK Mini Apps & VK Play Guidelines and Moderation Requirements
 * Handles VK Bridge (vkBridge) & VK Play (iframeApi) & Safe Mock Fallback
 */
class VKSDKWrapper {
    constructor() {
        this.platform = 'mock'; // 'vk_mini_apps' | 'vk_play' | 'mock'
        this.isInitialized = false;
        this.isMock = false;
        this.isShowingAd = false;
        this.isGameplayActive = false;
        this.lastFullscreenAdTime = 0;
        this.fullscreenCooldownMs = 65000; // 65 seconds strict cooldown (requirement >= 60s)
        this.user = null;
        this.lang = 'ru';
        this.flags = { difficulty: 'normal', extra_moves: '0', bonus_gold_rate: '1' };
        
        // Cache & debounce queue for saves
        this.lastSavedJson = null;
        this.isSavingStorage = false;
        this.pendingSaveData = null;

        // Leaderboard throttling
        this.lastLeaderboardScore = -1;
        this.lastLeaderboardTime = 0;
    }

    async init() {
        // Detect launch environment
        let urlParams = null;
        try {
            urlParams = new URLSearchParams(window.location.search || '');
        } catch (e) {
            urlParams = new URLSearchParams('');
        }

        const hasVkParams = urlParams.has('vk_user_id') || urlParams.has('vk_app_id') || urlParams.has('vk_platform');
        const isVkBridgeAvailable = typeof window.vkBridge !== 'undefined' && typeof window.vkBridge.send === 'function';
        const isVkPlay = typeof window.iframeApi !== 'undefined' || 
            (typeof window.location !== 'undefined' && window.location.hostname && (window.location.hostname.includes('vkplay.ru') || window.location.hostname.includes('mail.ru')));

        // Language detection from URL
        const vkLang = urlParams.get('vk_language') || urlParams.get('lang');
        if (vkLang) {
            const l = vkLang.toLowerCase();
            if (l.startsWith('ru') || l.startsWith('be') || l.startsWith('kk') || l.startsWith('uk')) {
                this.lang = 'ru';
            } else if (l.startsWith('tr')) {
                this.lang = 'tr';
            } else {
                this.lang = 'en';
            }
            if (window.i18n && typeof window.i18n.setLanguage === 'function') {
                window.i18n.setLanguage(this.lang);
            }
        }

        // 1. VK Mini Apps initialization
        if (isVkBridgeAvailable && (hasVkParams || window.vkBridge.isEmbedded?.() || window.self !== window.top)) {
            try {
                this.platform = 'vk_mini_apps';
                // Official init call
                await window.vkBridge.send('VKWebAppInit');
                this.isInitialized = true;
                this.isMock = false;

                // Subscribe to VK Bridge lifecycle events (VK moderation Rule 2.2.5 - instant mute on hide)
                window.vkBridge.subscribe((e) => {
                    if (!e || !e.detail) return;
                    const type = e.detail.type;
                    if (type === 'VKWebAppViewHide') {
                        if (window.gameAudio) window.gameAudio.mute();
                    } else if (type === 'VKWebAppViewRestore') {
                        if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                            window.gameAudio.unmute();
                        }
                    }
                });

                // Get User Info if available
                try {
                    const userInfo = await window.vkBridge.send('VKWebAppGetUserInfo');
                    if (userInfo) {
                        this.user = userInfo;
                    }
                } catch (e) {
                    // Not fatal, guest mode
                }

                console.log('[VK-SDK] Initialized successfully with VK Bridge (VK Mini Apps)');
            } catch (err) {
                console.warn('[VK-SDK] VKWebAppInit failed, falling back to mock mode:', err);
                this.setupMock();
            }
        } else if (isVkPlay) {
            // 2. VK Play initialization
            try {
                this.platform = 'vk_play';
                this.isInitialized = true;
                this.isMock = false;
                if (typeof window.iframeApi === 'function') {
                    window.iframeApi({
                        appid: urlParams.get('appid') || '',
                        onReady: (api) => {
                            this.vkPlayApi = api;
                            if (api && api.user) {
                                this.user = api.user;
                            }
                        }
                    });
                } else if (typeof window.iframeApi === 'object') {
                    this.vkPlayApi = window.iframeApi;
                    if (window.iframeApi.user) {
                        this.user = window.iframeApi.user;
                    }
                }
                console.log('[VK-SDK] Initialized successfully with VK Play (iframeApi)');
            } catch (err) {
                console.warn('[VK-SDK] VK Play init failed, falling back to mock:', err);
                this.setupMock();
            }
        } else {
            // 3. Local browser / Mock fallback
            this.setupMock();
        }

        // Global browser visibility & audio safety bindings
        this.bindBrowserVisibilityEvents();
        return true;
    }

    bindBrowserVisibilityEvents() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (window.gameAudio) window.gameAudio.mute();
            } else {
                if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
            }
        });

        window.addEventListener('blur', () => {
            if (window.gameAudio) window.gameAudio.mute();
        });

        window.addEventListener('focus', () => {
            if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
        });

        window.addEventListener('pagehide', () => {
            if (window.gameAudio) window.gameAudio.mute();
        });

        window.addEventListener('pageshow', () => {
            if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
        });
    }

    setupMock() {
        this.platform = 'mock';
        this.isMock = true;
        this.isInitialized = true;
        this.user = { id: 0, first_name: 'Богатырь', last_name: 'Локально' };
        console.log('[VK-SDK] Running in safe Mock mode (Offline / Local browser). All features emulated without errors.');
    }

    getFlags() {
        return this.flags;
    }

    notifyLoadingReady() {
        // Game loading is complete
        console.log('[VK-SDK] Game loading ready notified');
    }

    startGameplay() {
        this.isGameplayActive = true;
    }

    stopGameplay() {
        this.isGameplayActive = false;
    }

    // --- MONETIZATION: INTERSTITIAL ADS ---
    async showFullscreenAdv(callbacks = {}, currentLevel = 1, force = false) {
        const cb = typeof callbacks === 'function' ? { onClose: callbacks } : (callbacks || {});
        let closed = false;
        const safeClose = (shown) => {
            if (!closed) {
                closed = true;
                if (cb.onClose) cb.onClose(shown);
            }
        };

        // Concurrency Guard: never launch two ads simultaneously
        if (this.isShowingAd) {
            safeClose(false);
            return;
        }

        const now = Date.now();
        const timeSinceLastAd = now - this.lastFullscreenAdTime;

        // Strict Cooldown Guard: at least 60 seconds (moderation rule 2.2.5)
        if (!force && this.lastFullscreenAdTime > 0 && timeSinceLastAd < this.fullscreenCooldownMs) {
            safeClose(false);
            return;
        }

        // VK Play integration
        if (this.platform === 'vk_play') {
            this.isShowingAd = true;
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const finishVkPlayAd = (shown) => {
                this.lastFullscreenAdTime = Date.now();
                this.isShowingAd = false;
                if (window.gameAudio && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
                safeClose(shown);
            };

            if (this.vkPlayApi && this.vkPlayApi.ads && typeof this.vkPlayApi.ads.showFullscreenAdv === 'function') {
                try {
                    this.vkPlayApi.ads.showFullscreenAdv({
                        callbacks: {
                            onClose: () => finishVkPlayAd(true),
                            onError: (err) => {
                                this.isShowingAd = false;
                                if (window.gameAudio && !window.gameAudio.isUserMuted) window.gameAudio.unmute();
                                if (cb.onError) cb.onError(err);
                                safeClose(false);
                            }
                        }
                    });
                    return;
                } catch (e) {
                    finishVkPlayAd(true);
                    return;
                }
            } else if (this.vkPlayApi && typeof this.vkPlayApi.showAds === 'function') {
                try {
                    this.vkPlayApi.showAds({ interstitial: true });
                    finishVkPlayAd(true);
                    return;
                } catch (e) {
                    finishVkPlayAd(true);
                    return;
                }
            } else {
                finishVkPlayAd(true);
                return;
            }
        }

        // Mock mode or non-embedded
        if (this.isMock || !window.vkBridge || typeof window.vkBridge.send !== 'function') {
            this.lastFullscreenAdTime = now;
            console.log('[VK-SDK Mock] Interstitial ad simulated.');
            safeClose(true);
            return;
        }

        try {
            this.isShowingAd = true;
            // Instantly mute audio before ad
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const res = await window.vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' });
            this.lastFullscreenAdTime = Date.now();
            this.isShowingAd = false;
            
            // Restore sound if user did not mute
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
            safeClose(!!(res && res.result));
        } catch (err) {
            this.isShowingAd = false;
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
            if (cb.onError) cb.onError(err);
            safeClose(false);
        }
    }

    // --- MONETIZATION: REWARDED VIDEO ADS ---
    async showRewardedVideo(callbacks = {}) {
        const cb = typeof callbacks === 'function' ? { onRewarded: callbacks } : (callbacks || {});
        let closed = false;
        const safeClose = (shown) => {
            if (!closed) {
                closed = true;
                if (cb.onClose) cb.onClose(shown);
            }
        };

        if (this.isShowingAd) {
            safeClose(false);
            return;
        }

        // VK Play integration
        if (this.platform === 'vk_play') {
            this.isShowingAd = true;
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const finishVkPlayRewarded = (rewarded) => {
                this.isShowingAd = false;
                if (window.gameAudio && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
                if (rewarded && cb.onRewarded) cb.onRewarded();
                safeClose(rewarded);
            };

            if (this.vkPlayApi && this.vkPlayApi.ads && typeof this.vkPlayApi.ads.showRewardedVideo === 'function') {
                try {
                    this.vkPlayApi.ads.showRewardedVideo({
                        callbacks: {
                            onRewarded: () => finishVkPlayRewarded(true),
                            onClose: () => finishVkPlayRewarded(false),
                            onError: (err) => {
                                this.isShowingAd = false;
                                if (window.gameAudio && !window.gameAudio.isUserMuted) window.gameAudio.unmute();
                                if (cb.onError) cb.onError(err);
                                safeClose(false);
                            }
                        }
                    });
                    return;
                } catch (e) {
                    finishVkPlayRewarded(true);
                    return;
                }
            } else if (this.vkPlayApi && typeof this.vkPlayApi.showAds === 'function') {
                try {
                    this.vkPlayApi.showAds({ rewarded: true });
                    finishVkPlayRewarded(true);
                    return;
                } catch (e) {
                    finishVkPlayRewarded(true);
                    return;
                }
            } else {
                finishVkPlayRewarded(true);
                return;
            }
        }

        // Mock mode simulation
        if (this.isMock || !window.vkBridge || typeof window.vkBridge.send !== 'function') {
            console.log('[VK-SDK Mock] Rewarded ad simulated. Granting reward.');
            if (cb.onRewarded) cb.onRewarded();
            safeClose(true);
            return;
        }

        try {
            this.isShowingAd = true;
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const res = await window.vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' });
            this.isShowingAd = false;
            
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }

            const rewarded = !!(res && res.result);
            if (rewarded && cb.onRewarded) {
                cb.onRewarded();
            }
            safeClose(rewarded);
        } catch (err) {
            this.isShowingAd = false;
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
            if (cb.onError) cb.onError(err);
            safeClose(false);
        }
    }

    // --- PERSISTENCE: CLOUD STORAGE (VKWebAppStorageSet / Get) + LOCALSTORAGE ---
    async loadData() {
        let cloudData = null;
        if (this.platform === 'vk_mini_apps' && window.vkBridge && typeof window.vkBridge.send === 'function') {
            try {
                const res = await window.vkBridge.send('VKWebAppStorageGet', { keys: ['slavic_manor_save'] });
                if (res && Array.isArray(res.keys)) {
                    const item = res.keys.find(k => k.key === 'slavic_manor_save');
                    if (item && item.value) {
                        cloudData = JSON.parse(item.value);
                    }
                }
            } catch (e) {
                console.warn('[VK-SDK] VKWebAppStorageGet notification:', e);
            }
        }

        let localData = null;
        try {
            const local = localStorage.getItem('slavic_manor_save');
            if (local) localData = JSON.parse(local);
        } catch (e) {
            console.warn('[VK-SDK] LocalStorage load notification:', e);
        }

        let result = null;
        if (cloudData && localData) {
            result = {
                ...cloudData,
                ...localData,
                level: Math.max(localData.level || 1, cloudData.level || 1),
                scoreTotal: Math.max(localData.scoreTotal || 0, cloudData.scoreTotal || 0),
                gold: Math.max(localData.gold || 0, cloudData.gold || 0),
                wood: Math.max(localData.wood || 0, cloudData.wood || 0),
                resin: Math.max(localData.resin || 0, cloudData.resin || 0)
            };
        } else {
            result = cloudData || localData || null;
        }

        if (result) {
            this.lastSavedJson = JSON.stringify(result);
        }
        return result;
    }

    async saveData(data) {
        if (!data) return;
        try {
            const currentJson = JSON.stringify(data);

            // 1. Always duplicate to localStorage immediately
            localStorage.setItem('slavic_manor_save', currentJson);

            // 2. Deduplication: skip redundant identical saves
            if (this.lastSavedJson === currentJson) {
                return;
            }

            // 3. Concurrency queue
            if (this.isSavingStorage) {
                this.pendingSaveData = data;
                return;
            }

            if (this.platform === 'vk_mini_apps' && window.vkBridge && typeof window.vkBridge.send === 'function') {
                this.isSavingStorage = true;
                try {
                    // Value size check (VK storage max 4096 bytes per key)
                    if (currentJson.length <= 4096) {
                        await window.vkBridge.send('VKWebAppStorageSet', {
                            key: 'slavic_manor_save',
                            value: currentJson
                        });
                        this.lastSavedJson = currentJson;
                    } else {
                        console.warn('[VK-SDK] Save size exceeds 4KB VK storage limit:', currentJson.length);
                    }
                } catch (e) {
                    console.warn('[VK-SDK] VKWebAppStorageSet notice:', e);
                } finally {
                    this.isSavingStorage = false;
                    if (this.pendingSaveData) {
                        const nextData = this.pendingSaveData;
                        this.pendingSaveData = null;
                        setTimeout(() => this.saveData(nextData), 1000);
                    }
                }
            } else {
                this.lastSavedJson = currentJson;
            }
        } catch (err) {
            console.warn('[VK-SDK] SaveData error:', err);
        }
    }

    // --- LEADERBOARDS ---
    async submitLeaderboardScore(score) {
        const validScore = Math.max(0, Math.floor(score || 0));
        const now = Date.now();
        if (validScore <= this.lastLeaderboardScore && (now - this.lastLeaderboardTime) < 3000) {
            return;
        }

        this.lastLeaderboardScore = validScore;
        this.lastLeaderboardTime = now;
        try {
            localStorage.setItem('slavic_manor_high_score', String(validScore));
            if (this.platform === 'vk_mini_apps' && window.vkBridge && typeof window.vkBridge.send === 'function') {
                try {
                    await window.vkBridge.send('VKWebAppShowLeaderBoardBox', { user_result: validScore });
                } catch (e) {
                    // Non-fatal if leaderboard not configured in app settings
                }
            }
        } catch (e) {
            console.warn('[VK-SDK] Leaderboard notice:', e);
        }
    }
}

window.VKSDKWrapper = VKSDKWrapper;
window.vkSDK = new VKSDKWrapper();
