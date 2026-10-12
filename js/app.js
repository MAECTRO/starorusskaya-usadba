window.showToast = function(text, duration = 2400) {
    let toast = document.getElementById('game-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'game-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
};

class SlavicManorApp {
    constructor() {
        this.gameState = {
            version: '0.0.1',
            level: 1,
            levelStars: {},
            wood: 50,
            gold: 300,
            resin: 20,
            energy: 10,
            maxEnergy: 10,
            buildings: {},
            heroes: {},
            petsState: {},
            lastWheelSpinTime: 0,
            dailyLoginDay: 1,
            lastDailyClaimTime: 0,
            questsState: {},
            achievementsState: {},
            scoreTotal: 0,
            boosters: { hammer: 2, shuffle: 2 }
        };

        this.m3Engine = null;
        this.manorEngine = null;
        this.levelMapEngine = null;
        this.wheelEngine = null;
        this.heroesSystem = null;
        this.petsSystem = null;
        this.marketSystem = null;
        this.riddlesSystem = null;
        this.nightSiegeEngine = null;
        this.codexSystem = null;
        this.questsSystem = null;
        this.achievementsSystem = null;
        this.fishingEngine = null;
        this.selectedBuildingForModal = null;
        this.lastRewards = { wood: 0, gold: 0 };
        this.isNightSiegeMode = false;
    }

    async init() {
        if (window.i18n) {
            window.i18n.init();
        }

        await window.vkSDK.init();

        const savedData = await window.vkSDK.loadData();
        if (savedData) {
            this.gameState = { ...this.gameState, ...savedData };
            if (!this.gameState.levelStars) this.gameState.levelStars = {};
            if (!this.gameState.buildings) this.gameState.buildings = {};
            if (!this.gameState.heroes) this.gameState.heroes = {};
            if (!this.gameState.petsState) this.gameState.petsState = {};
            if (!this.gameState.questsState) this.gameState.questsState = {};
            if (!this.gameState.achievementsState) this.gameState.achievementsState = {};
            if (!this.gameState.heroGiftsLastClaimed) this.gameState.heroGiftsLastClaimed = {};
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            if (this.gameState.boosters.hammer === undefined) this.gameState.boosters.hammer = 2;
            if (this.gameState.boosters.shuffle === undefined) this.gameState.boosters.shuffle = 2;
        }

        this.updateUIResources();

        const manorCanvas = document.getElementById('manor-canvas');
        const weatherCanvas = document.getElementById('weather-canvas');
        this.manorEngine = new window.ManorEngine(manorCanvas, weatherCanvas, {
            onBuildingClick: (bldg) => {
                if (bldg.id === 'pier') {
                    if (bldg.level === 0) {
                        this.openBuildingModal(bldg);
                    } else {
                        const marketTab = document.querySelector('.nav-tab[data-target="view-market"]');
                        if (marketTab) marketTab.click();
                    }
                } else if (bldg.id === 'fisherman') {
                    if (bldg.level === 0) {
                        this.openBuildingModal(bldg);
                    } else {
                        this.openFishingModal();
                    }
                } else {
                    this.openBuildingModal(bldg);
                }
            },
            onCollectIdle: (res) => this.handleCollectIdle(res),
            onCitizenClick: (c) => this.handleCitizenClick(c)
        });
        this.manorEngine.setBuildingsState(this.gameState.buildings);

        const m3Canvas = document.getElementById('match3-canvas');
        this.m3Engine = new window.MatchThreeEngine(m3Canvas, {
            onStateChange: () => this.updateMatch3Header(),
            onLevelWin: (res) => this.handleLevelWin(res),
            onLevelLoss: () => this.handleLevelLoss(),
            onBoosterUsed: (boosterId) => {
                if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                if (this.gameState.boosters[boosterId] > 0) {
                    this.gameState.boosters[boosterId]--;
                    this.updateBoosterUI();
                    this.saveProgress();
                }
            },
            onRuneMaster: () => {
                if (!this.gameState.achievementsState) this.gameState.achievementsState = {};
                this.gameState.achievementsState['rune_master'] = (this.gameState.achievementsState['rune_master'] || 0) + 1;
                this.saveProgress();
            },
            onComboKing: (combo) => {
                if (!this.gameState.achievementsState) this.gameState.achievementsState = {};
                this.gameState.achievementsState['combo_king'] = (this.gameState.achievementsState['combo_king'] || 0) + 1;
                this.saveProgress();
            }
        });

        const levelsContainer = document.getElementById('levels-container');
        this.levelMapEngine = new window.LevelMapEngine(levelsContainer, {
            onSelectLevel: (lvl) => this.startSelectedLevel(lvl)
        });
        this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);

        const wheelCanvas = document.getElementById('wheel-canvas');
        this.wheelEngine = new window.VelesWheel(wheelCanvas, {
            onReward: (prize) => this.handleWheelReward(prize)
        });

        this.heroesSystem = new window.HeroesSystem();
        if (this.gameState.heroes) {
            this.heroesSystem.setHeroesState(this.gameState.heroes);
        }

        this.petsSystem = new window.SlavicPetsSystem();
        if (this.gameState.petsState) {
            this.petsSystem.loadState(this.gameState.petsState);
        }

        this.marketSystem = new window.SlavicMarketSystem();
        this.riddlesSystem = new window.SlavicRiddlesSystem();
        this.nightSiegeEngine = new window.NightSiegeEngine(m3Canvas, {
            onFinish: (loot) => this.handleNightSiegeFinish(loot)
        });

        this.codexSystem = new window.SlavicCodex();
        this.questsSystem = new window.QuestsSystem();
        this.achievementsSystem = new window.AchievementsSystem();

        const fCanvas = document.getElementById('fishing-canvas');
        this.fishingEngine = new window.SlavicFishing(fCanvas, {
            onCatch: (loot) => this.handleFishCatch(loot)
        });

        this.bindEvents();
        this.updateWheelButtonState();

        if (window.vkSDK && typeof window.vkSDK.notifyLoadingReady === 'function') {
            window.vkSDK.notifyLoadingReady();
        }

        setInterval(() => {
            if (this.gameState.energy < this.gameState.maxEnergy) {
                this.gameState.energy++;
                this.updateUIResources();
                this.saveProgress();
            }
            this.updateWheelButtonState();
        }, 60000);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (window.gameAudio) window.gameAudio.mute();
                if (this.manorEngine) this.manorEngine.stopRenderLoop();
                if (window.vkSDK && window.vkSDK.isGameplayActive) {
                    window.vkSDK.stopGameplay();
                }
            } else {
                if (window.gameAudio && !window.vkSDK?.isShowingAd && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
                const activeView = document.querySelector('.view.active');
                if (activeView && activeView.id === 'view-manor' && this.manorEngine) {
                    this.manorEngine.startRenderLoop();
                }
                if (activeView && (activeView.id === 'view-match3' || this.isNightSiegeMode)) {
                    if (window.vkSDK && (!this.m3Engine || !this.m3Engine.levelFinished)) {
                        window.vkSDK.startGameplay();
                    }
                }
            }
        });

        window.addEventListener('resize', () => {
            if (this.manorEngine) this.manorEngine.resize();
            if (this.m3Engine) this.m3Engine.resize();
            if (this.wheelEngine) this.wheelEngine.render();
            if (this.fishingEngine) this.fishingEngine.resize();
        });

        setTimeout(() => {
            if (this.manorEngine) this.manorEngine.resize();
            if (this.wheelEngine) this.wheelEngine.render();
            if (this.fishingEngine) this.fishingEngine.resize();

            if (typeof window !== 'undefined' && window.location && window.location.search) {
                const urlParams = new URLSearchParams(window.location.search);
                const initialView = urlParams.get('view');
                const initialLvl = parseInt(urlParams.get('level') || '4', 10);

                if (initialView === 'match3') {
                    this.openMatch3Screen(initialLvl);
                    this.m3Engine.score = 5840;
                    this.updateMatch3Header();
                } else if (initialView === 'boss') {
                    this.openMatch3Screen(5);
                    this.m3Engine.score = 11200;
                    this.m3Engine.bossCurrentHp = 16;
                    this.updateMatch3Header();
                } else if (initialView === 'heroes') {
                    const tab = document.querySelector('.nav-tab[data-target="view-heroes"]');
                    if (tab) tab.click();
                } else if (initialView === 'market') {
                    const tab = document.querySelector('.nav-tab[data-target="view-market"]');
                    if (tab) tab.click();
                } else if (initialView === 'pets') {
                    const tab = document.querySelector('.nav-tab[data-target="view-pets"]');
                    if (tab) tab.click();
                } else if (initialView === 'wheel') {
                    const tab = document.querySelector('.nav-tab[data-target="view-wheel"]');
                    if (tab) tab.click();
                }
            }
        }, 100);

        const startAudioOnGesture = () => {
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.startMusic();
            }
            document.removeEventListener('click', startAudioOnGesture);
            document.removeEventListener('touchstart', startAudioOnGesture);
        };
        document.addEventListener('click', startAudioOnGesture);
        document.addEventListener('touchstart', startAudioOnGesture);
    }

    t(key, params = {}) {
        return window.i18n ? window.i18n.t(key, params) : key;
    }

    updateLocalizedUI() {
        this.updateUIResources();
        if (this.manorEngine) {
            const season = this.manorEngine.getCurrentSeason();
            const seasonName = this.t(`season_${season.id}`);
            const weatherDesc = this.t(`weather_${season.id}`);
            document.getElementById('season-name').textContent = `${this.t('season_prefix')}${seasonName}`;
            document.getElementById('weather-desc').textContent = weatherDesc;
        }

        const activeView = document.querySelector('.view.active');
        if (activeView) {
            if (activeView.id === 'view-pets') this.renderPetsView();
            else if (activeView.id === 'view-market') this.renderMarketView();
            else if (activeView.id === 'view-leaderboard') this.renderLeaderboard();
            else if (activeView.id === 'view-levels' && this.levelMapEngine) {
                this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);
            }
        }
        this.updateWheelButtonState();
    }

    updateUIResources() {
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };
        setTxt('res-wood', this.gameState.wood);
        setTxt('res-gold', this.gameState.gold);
        setTxt('res-resin', this.gameState.resin);
        setTxt('res-energy', `${this.gameState.energy}/${this.gameState.maxEnergy}`);
        setTxt('current-level-num', this.gameState.level);
    }

    setStoryDialogue(author, avatar, text) {
        const box = document.getElementById('story-dialogue-banner');
        if (box) {
            box.querySelector('.dialogue-author').textContent = author;
            box.querySelector('.dialogue-avatar').textContent = avatar;
            box.querySelector('.dialogue-text').textContent = text;
        }
    }

    handleCollectIdle(res) {
        if (res.type === 'gold') this.gameState.gold += res.val;
        else if (res.type === 'wood') this.gameState.wood += res.val;
        else if (res.type === 'resin') this.gameState.resin += res.val;

        this.gameState.achievementsState['easter_finder'] = (this.gameState.achievementsState['easter_finder'] || 0) + 1;

        this.updateUIResources();
        this.saveProgress();
    }

    handleCitizenClick(c) {
        if (!this.gameState.heroGiftsLastClaimed) this.gameState.heroGiftsLastClaimed = {};
        const now = Date.now();
        const lastClaim = this.gameState.heroGiftsLastClaimed[c.id] || 0;
        const cooldown = 86400000;
        const isGiftReady = (now - lastClaim >= cooldown);

        let author = c.label;
        let avatar = '🛡️';
        let speech = '';
        let bubbleText = '';
        let floatingText = '';

        if (c.id === 'ilya') avatar = '⚔️';
        else if (c.id === 'dobrynya') avatar = '🛡️';
        else if (c.id === 'alesha') avatar = '🏹';
        else if (c.id === 'vasilisa') avatar = '👑';
        else if (c.id === 'vakula') avatar = '🔨';
        else if (c.id === 'radogor') avatar = '🧙‍♂️';
        else if (c.id === 'peasant') avatar = '🌾';
        else if (c.id === 'maiden') avatar = '🌸';
        else if (c.id === 'dog') avatar = '🐕';

        if (isGiftReady) {
            this.gameState.heroGiftsLastClaimed[c.id] = now;
            window.gameAudio.playWin();

            if (c.id === 'ilya') {
                this.gameState.gold += 50;
                floatingText = '+50 🪙';
                speech = this.t('hero_ilya_gift');
                bubbleText = '«Земля русская под нашей защитой! Прими богатырский дар: +50 🪙»';
            } else if (c.id === 'dobrynya') {
                this.gameState.wood += 25;
                floatingText = '+25 🪵';
                speech = this.t('hero_dobrynya_gift');
                bubbleText = '«Солнце сияет над Русью! Держи древесину: +25 🪵»';
            } else if (c.id === 'alesha') {
                this.gameState.gold += 35;
                floatingText = '+35 🪙';
                speech = this.t('hero_alesha_gift');
                bubbleText = '«Глаз меток, а лук верен! Вот тебе червонцы: +35 🪙»';
            } else if (c.id === 'vasilisa') {
                this.gameState.resin += 10;
                floatingText = '+10 💧';
                speech = this.t('hero_vasilisa_gift');
                bubbleText = '«Мудрость веков хранит село. Дар тайных трав: +10 💧»';
            } else if (c.id === 'vakula') {
                this.gameState.wood += 30;
                floatingText = '+30 🪵';
                speech = this.t('hero_vakula_gift');
                bubbleText = '«Жар в горне пылает! Держи бревна: +30 🪵»';
            } else if (c.id === 'radogor') {
                this.gameState.energy = Math.min(this.gameState.maxEnergy, this.gameState.energy + 2);
                floatingText = '+2 ⚡';
                speech = this.t('hero_radogor_gift');
                bubbleText = '«Сила Перуна с тобой! Дар духов: +2 Энергии ⚡»';
            } else if (c.id === 'peasant') {
                this.gameState.gold += 10;
                floatingText = '+10 🪙';
                speech = this.t('hero_peasant_talk');
                bubbleText = '«Слава честному труду! Урожай богатый!»';
            } else if (c.id === 'maiden') {
                this.gameState.gold += 10;
                floatingText = '+10 🪙';
                speech = this.t('hero_maiden_talk');
                bubbleText = '«Хоровод водим, песни поем — благодать!»';
            } else if (c.id === 'dog') {
                this.gameState.gold += 5;
                floatingText = '❤️ +5 🪙';
                speech = this.t('hero_dog_talk');
                bubbleText = '«Гав-гав! *радостно виляет хвостом*»';
            }

            this.updateUIResources();
            this.saveProgress();
        } else {
            window.gameAudio.playSwap();
            floatingText = '✨';

            if (c.id === 'ilya') {
                speech = this.t('hero_ilya_idle');
                bubbleText = '«Честь и слава защитникам! (Приходи за даром завтра)»';
            } else if (c.id === 'dobrynya') {
                speech = this.t('hero_dobrynya_idle');
                bubbleText = '«Порядок и закон нерушимы! (Приходи за даром завтра)»';
            } else if (c.id === 'alesha') {
                speech = this.t('hero_alesha_idle');
                bubbleText = '«Лес спокоен, нечисть не пройдет! (Приходи за даром завтра)»';
            } else if (c.id === 'vasilisa') {
                speech = this.t('hero_vasilisa_idle');
                bubbleText = '«Тайны природы ждут терпеливых. (Приходи завтра)»';
            } else if (c.id === 'vakula') {
                speech = this.t('hero_vakula_idle');
                bubbleText = '«Куй железо, пока горячо! (Приходи за даром завтра)»';
            } else if (c.id === 'radogor') {
                speech = this.t('hero_radogor_idle');
                bubbleText = '«Звезды сулят победы в походах! (Приходи завтра)»';
            } else if (c.id === 'peasant') {
                speech = this.t('hero_peasant_talk');
                bubbleText = '«Работа спорится, село цветет!»';
            } else if (c.id === 'maiden') {
                speech = this.t('hero_maiden_talk');
                bubbleText = '«Солнышко греет, душа поет!»';
            } else if (c.id === 'dog') {
                speech = this.t('hero_dog_talk');
                bubbleText = '«Тявк! *верный страж села*»';
            }
        }

        this.setStoryDialogue(author, avatar, speech);
        if (this.manorEngine) {
            if (floatingText) this.manorEngine.addFloatingText(floatingText, c.x, c.y - 25);
            this.manorEngine.showSpeechBubble(c.id, `${avatar} ${author}`, bubbleText, 4500);
        }
    }

    updateWheelButtonState() {
        const now = Date.now();
        const lastSpin = this.gameState.lastWheelSpinTime || 0;
        const cooldown = 86400000;
        const timePassed = now - lastSpin;

        const btnFree = document.getElementById('btn-spin-wheel');
        const btnAd = document.getElementById('btn-spin-wheel-ad');
        const timerText = document.getElementById('wheel-timer-text');

        if (timePassed >= cooldown) {
            btnFree.style.display = 'inline-flex';
            btnFree.disabled = false;
            btnAd.style.display = 'none';
            timerText.textContent = this.t('wheel_free_ready');
        } else {
            const remainingMs = cooldown - timePassed;
            const hours = Math.floor(remainingMs / (1000 * 60 * 60));
            const mins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

            btnFree.style.display = 'none';
            btnAd.style.display = 'inline-flex';
            timerText.textContent = this.t('wheel_cooldown', { h: hours, m: mins });
        }
    }

    bindEvents() {
        document.getElementById('btn-lang-switch').addEventListener('click', () => {
            if (window.i18n) {
                window.i18n.nextLanguage();
            }
        });

        document.getElementById('btn-open-riddles').addEventListener('click', () => {
            this.openRiddlesModal();
        });

        document.getElementById('btn-open-siege').addEventListener('click', () => {
            this.openNightSiegeScreen();
        });

        document.getElementById('btn-open-fishing').addEventListener('click', () => {
            this.openFishingModal();
        });

        document.getElementById('btn-strike-rod').addEventListener('click', () => {
            if (this.fishingEngine) this.fishingEngine.strike();
        });

        document.getElementById('btn-open-achievements').addEventListener('click', () => {
            this.openAchievementsModal();
        });

        document.getElementById('btn-music-track').addEventListener('click', () => {
            const nextTrack = window.gameAudio.nextTrack();
            window.showToast(this.t('music_now_playing', { name: nextTrack.name }));
        });

        document.getElementById('btn-fullscreen').addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        });

        document.getElementById('btn-daily-rewards').addEventListener('click', () => {
            this.openDailyModal();
        });

        document.getElementById('btn-close-scroll').addEventListener('click', () => {
            document.getElementById('modal-story-scroll').classList.add('hidden');
        });

        document.getElementById('btn-toggle-season').addEventListener('click', () => {
            window.gameAudio.playSwap();
            if (this.manorEngine) {
                const season = this.manorEngine.nextSeason();
                document.getElementById('season-icon').textContent = season.icon;
                const seasonName = this.t(`season_${season.id}`);
                const weatherDesc = this.t(`weather_${season.id}`);
                document.getElementById('season-name').textContent = `${this.t('season_prefix')}${seasonName}`;
                document.getElementById('weather-desc').textContent = weatherDesc;
            }
        });

        document.querySelectorAll('.btn-back-manor').forEach(btn => {
            btn.addEventListener('click', () => {
                const manorTab = document.querySelector('.nav-tab[data-target="view-manor"]');
                if (manorTab) manorTab.click();
            });
        });

        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                window.gameAudio.playSwap();
                navTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetId = tab.dataset.target;
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                const targetView = document.getElementById(targetId);
                if (targetView) targetView.classList.add('active');

                if (targetId === 'view-manor') {
                    this.manorEngine.startRenderLoop();
                    this.manorEngine.resize();
                } else {
                    this.manorEngine.stopRenderLoop();
                }

                if (targetId === 'view-levels') {
                    this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);
                } else if (targetId === 'view-pets') {
                    this.renderPetsView();
                } else if (targetId === 'view-market') {
                    this.renderMarketView();
                } else if (targetId === 'view-wheel') {
                    this.wheelEngine.render();
                    this.updateWheelButtonState();
                } else if (targetId === 'view-heroes') {
                    this.heroesSystem.renderHeroes(
                        document.getElementById('heroes-list'),
                        this.gameState.gold,
                        (h, costPaid) => {
                            window.gameAudio.playUpgrade();
                            this.gameState.gold -= costPaid;
                            this.gameState.heroes[h.id] = h.level;
                            this.updateUIResources();
                            this.saveProgress();
                        }
                    );
                } else if (targetId === 'view-codex') {
                    this.codexSystem.render(document.getElementById('codex-list'), this.gameState.level);
                } else if (targetId === 'view-leaderboard') {
                    this.renderLeaderboard();
                }
            });
        });

        document.getElementById('btn-sound').addEventListener('click', (e) => {
            const active = window.gameAudio.toggleSound();
            e.target.textContent = active ? '🔊' : '🔇';
        });

        document.getElementById('btn-open-levels').addEventListener('click', () => {
            const levelsTab = document.querySelector('.nav-tab[data-target="view-levels"]');
            if (levelsTab) levelsTab.click();
        });

        document.getElementById('btn-spin-wheel').addEventListener('click', () => {
            this.wheelEngine.spin();
            this.gameState.lastWheelSpinTime = Date.now();
            this.gameState.achievementsState['wheel_spinner'] = (this.gameState.achievementsState['wheel_spinner'] || 0) + 1;
            this.saveProgress();
            this.updateWheelButtonState();
        });

        document.getElementById('btn-spin-wheel-ad').addEventListener('click', () => {
            window.vkSDK.showRewardedVideo({
                onRewarded: () => {
                    this.wheelEngine.spin();
                    this.gameState.achievementsState['wheel_spinner'] = (this.gameState.achievementsState['wheel_spinner'] || 0) + 1;
                    this.saveProgress();
                }
            });
        });

        document.getElementById('btn-exit-match3').addEventListener('click', () => {
            if (this.isNightSiegeMode && this.nightSiegeEngine) {
                this.nightSiegeEngine.stop();
            }
            this.isNightSiegeMode = false;
            this.closeMatch3Screen();
        });

        document.getElementById('btn-booster-hammer').addEventListener('click', () => {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            if (this.gameState.boosters.hammer <= 0) {
                window.showToast && window.showToast('🔨 Запас Молотов исчерпан! Выиграйте в Колесе Велеса!');
                return;
            }
            if (this.m3Engine.animating || this.m3Engine.levelFinished) return;
            this.m3Engine.useBooster('hammer');
        });
        document.getElementById('btn-booster-shuffle').addEventListener('click', () => {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            if (this.gameState.boosters.shuffle <= 0) {
                window.showToast && window.showToast('🌪️ Запас Вихрей исчерпан! Выиграйте в Колесе Велеса!');
                return;
            }
            if (this.m3Engine.animating || this.m3Engine.levelFinished) return;
            this.m3Engine.useBooster('shuffle');
        });
        document.getElementById('btn-booster-ad-moves').addEventListener('click', () => {
            window.vkSDK.showRewardedVideo({
                onRewarded: () => {
                    this.m3Engine.useBooster('addMoves');
                }
            });
        });

        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const overlay = e.target.closest('.modal-overlay');
                if (overlay) {
                    overlay.classList.add('hidden');
                    if (overlay.id === 'modal-fishing') {
                        if (this.fishingEngine) this.fishingEngine.stopLoop();
                        if (window.vkSDK) window.vkSDK.stopGameplay();
                    }
                }
            });
        });

        document.getElementById('btn-confirm-upgrade').addEventListener('click', () => {
            if (!this.selectedBuildingForModal) return;
            const b = this.selectedBuildingForModal;

            if (b.maxLevel && b.level >= b.maxLevel) {
                window.showToast(this.t('bldg_max_level') || 'Постройка уже улучшена до максимума!');
                return;
            }

            if (this.gameState.wood >= b.costWood && this.gameState.gold >= b.costGold) {
                window.gameAudio.playUpgrade();
                this.gameState.wood -= b.costWood;
                this.gameState.gold -= b.costGold;
                b.level++;
                b.costWood = Math.floor(b.baseCostWood * Math.pow(1.6, b.level));
                b.costGold = Math.floor(b.baseCostGold * Math.pow(1.6, b.level));

                this.gameState.buildings[b.id] = b.level;

                if (b.id === 'terem') {
                    this.gameState.maxEnergy = 10 + b.level * 2;
                }

                this.gameState.questsState['upgrade'] = (this.gameState.questsState['upgrade'] || 0) + 1;

                this.updateUIResources();
                this.manorEngine.setBuildingsState(this.gameState.buildings);
                this.saveProgress();

                this.setStoryDialogue(
                    this.t('story_smith_author'),
                    '🔨',
                    this.t('story_smith_upgraded', { name: b.name, level: b.level })
                );

                document.getElementById('modal-building').classList.add('hidden');
            } else {
                window.showToast(this.t('bldg_not_enough_res'));
            }
        });

        document.getElementById('btn-continue-result').addEventListener('click', () => {
            document.getElementById('modal-result').classList.add('hidden');
            this.closeMatch3Screen();
            if (this.lastWonLevel && this.lastWonLevel % 25 === 0) {
                const scrollLvl = this.lastWonLevel;
                this.lastWonLevel = null;
                this.openStoryScroll(scrollLvl);
            } else {
                window.vkSDK.showFullscreenAdv({}, this.gameState.level);
            }
        });

        document.getElementById('btn-double-reward').addEventListener('click', () => {
            window.vkSDK.showRewardedVideo({
                onRewarded: () => {
                    window.gameAudio.playUpgrade();
                    const extraWood = this.lastRewards.wood;
                    const extraGold = this.lastRewards.gold;
                    this.gameState.wood += extraWood;
                    this.gameState.gold += extraGold;
                    this.updateUIResources();
                    this.saveProgress();
                    window.showToast(this.t('win_double_alert', { wood: extraWood, gold: extraGold }));
                    document.getElementById('btn-double-reward').style.display = 'none';
                    const resRewardsEl = document.getElementById('result-rewards');
                    if (resRewardsEl) {
                        resRewardsEl.innerHTML = `
                            <div class="res-item">🪵 +${extraWood * 2}</div>
                            <div class="res-item">🪙 +${extraGold * 2}</div>
                        `;
                    }
                }
            });
        });

        const lossMovesBtn = document.getElementById('btn-loss-ad-moves');
        if (lossMovesBtn) {
            lossMovesBtn.addEventListener('click', () => {
                window.vkSDK.showRewardedVideo({
                    onRewarded: () => {
                        this.m3Engine.useBooster('addMoves');
                    }
                });
            });
        }

        const upgradeFishBtn = document.getElementById('btn-upgrade-fisherman');
        if (upgradeFishBtn) {
            upgradeFishBtn.addEventListener('click', () => {
                document.getElementById('modal-fishing').classList.add('hidden');
                if (this.fishingEngine) this.fishingEngine.stopLoop();
                if (window.vkSDK) window.vkSDK.stopGameplay();
                const fishBldg = this.manorEngine?.buildings?.find(b => b.id === 'fisherman');
                if (fishBldg) this.openBuildingModal(fishBldg);
            });
        }
    }

    openRiddlesModal() {
        const modalEl = document.getElementById('modal-riddles');
        this.riddlesSystem.renderRiddleModal(modalEl, (rewardGold) => {
            this.gameState.gold += rewardGold;
            this.updateUIResources();
            this.saveProgress();
        });
        modalEl.classList.remove('hidden');
    }

    openNightSiegeScreen() {
        if (this.gameState.energy < 2) {
            window.showToast(this.t('m3_need_energy_siege'));
            return;
        }
        this.gameState.energy -= 2;
        this.updateUIResources();

        window.vkSDK.startGameplay();
        this.isNightSiegeMode = true;
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-match3').classList.add('active');
        document.getElementById('bottom-nav').style.display = 'none';

        if (this.manorEngine) this.manorEngine.stopRenderLoop();

        const heroBonuses = this.heroesSystem ? this.heroesSystem.getBonuses() : {};
        this.m3Engine.startLevel(1, heroBonuses);
        this.m3Engine.targetTypes = { score: 999999 };
        this.m3Engine.movesLeft = 999;
        document.getElementById('m3-timer-label').textContent = this.t('m3_time');
        document.getElementById('m3-moves').textContent = '60s';

        this.nightSiegeEngine.startSiege(
            (score) => {},
            (timeLeft) => {
                document.getElementById('m3-moves').textContent = `${timeLeft}s`;
            }
        );
    }

    handleNightSiegeFinish(loot) {
        this.isNightSiegeMode = false;
        if (window.vkSDK) window.vkSDK.stopGameplay();
        document.getElementById('m3-timer-label').textContent = this.t('m3_moves');

        this.gameState.gold += loot.gold;
        this.gameState.wood += loot.wood;
        this.gameState.resin += loot.resin;
        this.gameState.scoreTotal += loot.score;
        this.lastRewards = { wood: loot.wood, gold: loot.gold };

        this.updateUIResources();
        this.saveProgress();

        document.getElementById('result-title').textContent = this.t('siege_win_title');
        document.getElementById('result-stars').textContent = '⭐⭐⭐';
        document.getElementById('result-desc').textContent = this.t('siege_win_desc');
        document.getElementById('result-rewards').innerHTML = `
            <div class="res-item">🪵 +${loot.wood}</div>
            <div class="res-item">🪙 +${loot.gold}</div>
            <div class="res-item">💧 +${loot.resin}</div>
        `;
        document.getElementById('btn-double-reward').style.display = 'inline-block';
        document.getElementById('modal-result').classList.remove('hidden');
    }

    renderPetsView() {
        const container = document.getElementById('pets-list');
        this.petsSystem.renderPets(
            container,
            this.gameState.gold,
            (pet, costPaid) => {
                window.gameAudio.playUpgrade();
                this.gameState.gold -= costPaid;
                if (!this.gameState.petsState.petsLevels) this.gameState.petsState.petsLevels = {};
                this.gameState.petsState.petsLevels[pet.id] = pet.level;
                this.updateUIResources();
                this.saveProgress();
                this.renderPetsView();
                window.showToast(this.t('pets_upgraded_alert', { name: pet.name, level: pet.level }));
            },
            (pet) => {
                window.gameAudio.playSwap();
                this.gameState.petsState.activePetId = pet.id;
                this.saveProgress();
                this.renderPetsView();
                window.showToast(this.t('pets_chosen_alert', { name: pet.name }));
            }
        );
    }

    renderMarketView() {
        const container = document.getElementById('market-list');
        this.marketSystem.renderMarket(
            container,
            this.gameState,
            (deal) => {
                window.gameAudio.playUpgrade();
                this.gameState.wood -= deal.costWood;
                this.gameState.gold -= deal.costGold;
                this.gameState.gold += deal.giveGold || 0;
                this.gameState.resin += deal.giveResin || 0;
                if (deal.giveHammer) {
                    if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                    this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + deal.giveHammer;
                    this.updateBoosterUI();
                }
                this.updateUIResources();
                this.saveProgress();
                this.renderMarketView();
                window.showToast(this.t('market_deal_done'));
            },
            () => {
                window.vkSDK.showRewardedVideo({
                    onRewarded: () => {
                        window.gameAudio.playWin();
                        this.gameState.gold += 300;
                        this.gameState.wood += 30;
                        this.gameState.resin += 10;
                        this.updateUIResources();
                        this.saveProgress();
                        this.renderMarketView();
                        window.showToast(this.t('market_gift_done'));
                    }
                });
            },
            () => {
                const pierBldg = this.manorEngine?.buildings?.find(b => b.id === 'pier');
                if (pierBldg) this.openBuildingModal(pierBldg);
            }
        );
    }

    openFishingModal() {
        if (window.vkSDK) window.vkSDK.startGameplay();
        const fishBldg = this.manorEngine?.buildings?.find(b => b.id === 'fisherman');
        const upBtn = document.getElementById('btn-upgrade-fisherman');
        if (upBtn && fishBldg) {
            if (fishBldg.level >= fishBldg.maxLevel) {
                upBtn.textContent = '🔨 Стан: Максимальный уровень ✓';
                upBtn.disabled = true;
                upBtn.style.opacity = '0.6';
            } else {
                upBtn.textContent = `🔨 Улучшить Стан (Ур. ${fishBldg.level}/${fishBldg.maxLevel})`;
                upBtn.disabled = false;
                upBtn.style.opacity = '1.0';
            }
        }
        document.getElementById('modal-fishing').classList.remove('hidden');
        if (this.fishingEngine) {
            this.fishingEngine.startLoop();
            this.fishingEngine.resize();
        }
    }

    handleFishCatch(loot) {
        this.gameState.gold += loot.gold;
        this.gameState.wood += loot.wood;
        this.gameState.resin += loot.resin;
        this.gameState.achievementsState['fisherman_pro'] = (this.gameState.achievementsState['fisherman_pro'] || 0) + 1;
        this.updateUIResources();
        this.saveProgress();
        const woodStr = loot.wood ? `+${loot.wood} 🪵` : '';
        window.showToast(this.t('fishing_catch_alert', { name: loot.name, gold: loot.gold, wood: woodStr }));
    }

    openAchievementsModal() {
        const container = document.getElementById('achievements-container');
        this.achievementsSystem.render(
            container,
            this.gameState,
            (ach) => {
                window.gameAudio.playWin();
                this.gameState.gold += ach.rewardGold;
                if (ach.rewardHammers) {
                    if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                    this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + ach.rewardHammers;
                    this.updateBoosterUI();
                }
                this.gameState.achievementsState[`${ach.id}_claimed`] = true;
                this.updateUIResources();
                this.saveProgress();
                window.showToast(this.t('ach_claimed_alert', { title: ach.title, gold: ach.rewardGold }));
                this.openAchievementsModal();
            }
        );
        document.getElementById('modal-achievements').classList.remove('hidden');
    }

    openStoryScroll(levelWon) {
        const bossChapter = Math.floor(levelWon / 25);
        const stories = [
            { title: 'Освобождение Дубравы', text: '«И бежал Леший в чащобу непроглядную, и засияло солнце над дубравою вековой. Возликовали селяне, неся богатырям дары земли русской!»' },
            { title: 'Тайна Болотных Глубин', text: '«Укрощен Водяной владыка! Расступились тина и топи, и открылся путь к древним серебряным рудникам предков.»' },
            { title: 'Чары Дремучего Бора', text: '«Повержена Баба-Яга! Рассеялись злые чары, а избушка на курьих ножках открыла тайники с целебным зельем.»' },
            { title: 'Битва на Калиновом Мосту', text: '«Срублены все три головы Змея Горыныча! Чиста река Смородина, и свободен путь богатырям на вольные просторы!»' },
            { title: 'Покорение Соловьиной Чащи', text: '«Смолк свист Соловья-Разбойника! Вновь безопасны торговые пути, а купцы новгородские везут товары на Усадьбу.»' },
            { title: 'Сказки Синего Лукоморья', text: '«Успокоился Кот Баюн, замурлыкал былины древние. Море синее дарует рыбакам богатые уловы и жемчуга.»' },
            { title: 'Благословение Ирийского Сада', text: '«Птица Сирин спела песнь радости! Зацвели яблони молодильные, возвращая силы и здоровье всему роду славянскому.»' },
            { title: 'Рассвет над Перуновыми Скалами', text: '«Пали козни Чернобога под ударами Перуновых молний! Свет правды озарил горные вершины Руси.»' },
            { title: 'Тепло в Ледяном Царстве', text: '«Смягчился суровый Морозко, подарив богатырям сундуки самоцветов и снежную защиту для родного села.»' },
            { title: 'Падение Кощеевых Чертогов', text: '«Сломана игла заветная, рухнули чары темные! Старорусская Усадьба процветает во веки веков во славу Земли Русской!»' },
            { title: 'Сокровища Медной Горы', text: '«Хозяйка Медной Горы признала силу богатырскую и открыла недра с малахитом да золотой рудой!»' },
            { title: 'Перо Жар-Птицы', text: '«Поймана Жар-Птица дивная! Огненный свет ее пера согревает усадьбу в самые темные ночи.»' },
            { title: 'Изобилие Золотых Полей', text: '«Полевик одарил землю тучным колосом! Амбары ломятся от зерна, и не будет голода в крае нашем.»' },
            { title: 'Укрощение Стрибожьих Ветров', text: '«Стрибог направил попутные ветры на мельницы усадьбы! Колеса крутятся, мука сыплется рекою.»' },
            { title: 'Рассеянный Морок Нави', text: '«Не смог Вий поднять тяжелые веки перед светом богатырской доблести! Навьи тропы заросли цветами.»' },
            { title: 'Сила Мирового Древа', text: '«Змей Велес склонил главу, даровав мудрость предков и нерушимую связь с корнями родной земли.»' },
            { title: 'Слава Богатырской Заставы', text: '«Разбит Тугарин Змей! Стоит застава крепко, ни один ворог не ступит на святую землю русскую.»' },
            { title: 'Мудрость Рифейских Гор', text: '«Святогор-богатырь передал силушку былинную молодому поколению защитников Усадьбы.»' },
            { title: 'Огонь Сварожьей Кузницы', text: '«Сварог сковал небесный щит для Усадьбы! Ни стрела, ни колдовство теперь не страшны селу.»' },
            { title: 'Торжество Беловодья', text: '«Чудо-Юдо повержено навеки! Открылись врата в легендарное Беловодье — землю вечного мира, счастья и изобилия!»' }
        ];
        const storyIdx = Math.max(0, Math.min(bossChapter - 1, stories.length - 1));
        const story = stories[storyIdx] || stories[0];

        document.getElementById('scroll-title').textContent = story.title;
        document.getElementById('scroll-text').textContent = story.text;
        document.getElementById('scroll-rewards').innerHTML = `
            <div class="res-item">🪙 +1000</div>
            <div class="res-item">💧 +50</div>
        `;
        this.gameState.gold += 1000;
        this.gameState.resin += 50;
        this.updateUIResources();
        this.saveProgress();

        document.getElementById('modal-story-scroll').classList.remove('hidden');
    }

    openDailyModal() {
        const calContainer = document.getElementById('daily-calendar-container');
        const questsContainer = document.getElementById('quests-container');

        this.questsSystem.renderCalendar(
            calContainer,
            this.gameState.dailyLoginDay || 1,
            this.gameState.lastDailyClaimTime || 0,
            (reward, dayNum) => {
                window.gameAudio.playWin();
                this.gameState.gold += reward.gold;
                this.gameState.wood += reward.wood;
                this.gameState.resin += reward.resin;
                if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                if (reward.hammer) {
                    this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + reward.hammer;
                }
                if (reward.shuffle) {
                    this.gameState.boosters.shuffle = (this.gameState.boosters.shuffle || 0) + reward.shuffle;
                }
                this.updateBoosterUI();
                this.gameState.lastDailyClaimTime = Date.now();
                this.gameState.dailyLoginDay = (dayNum % 7) + 1;
                this.updateUIResources();
                this.saveProgress();
                window.showToast(this.t('daily_claimed_alert', { day: dayNum, label: reward.label }));
                this.openDailyModal();
            }
        );

        this.questsSystem.renderQuests(
            questsContainer,
            this.gameState.questsState,
            (quest) => {
                window.gameAudio.playUpgrade();
                this.gameState.gold += quest.rewardGold;
                this.gameState.questsState[`${quest.id}_claimed`] = true;
                this.updateUIResources();
                this.saveProgress();
                window.showToast(this.t('quest_claimed_alert', { gold: quest.rewardGold }));
                this.openDailyModal();
            }
        );

        document.getElementById('modal-daily').classList.remove('hidden');
    }

    startSelectedLevel(lvl) {
        if (this.gameState.energy < 1) {
            window.showToast(this.t('m3_need_energy'));
            return;
        }
        this.gameState.energy--;
        this.updateUIResources();
        this.openMatch3Screen(lvl);
    }

    openMatch3Screen(lvl = 1) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-match3').classList.add('active');
        document.getElementById('bottom-nav').style.display = 'none';

        if (this.manorEngine) this.manorEngine.stopRenderLoop();

        const heroBonuses = this.heroesSystem ? this.heroesSystem.getBonuses() : {};
        
        const activePet = this.petsSystem ? this.petsSystem.getActivePet() : null;
        if (activePet && activePet.level > 0) {
            if (activePet.id === 'firebird' && lvl % 5 === 0) {
                heroBonuses.startWithSun = true;
            } else if (activePet.id === 'cat_bayun') {
                heroBonuses.catBayunActive = true;
            }
        }

        this.currentPlayingLevel = lvl;
        window.vkSDK.startGameplay();
        this.m3Engine.startLevel(lvl, heroBonuses);
        this.updateMatch3Header();
        this.updateBoosterUI();
    }

    updateBoosterUI() {
        if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
        const hammerCount = this.gameState.boosters.hammer !== undefined ? this.gameState.boosters.hammer : 2;
        const shuffleCount = this.gameState.boosters.shuffle !== undefined ? this.gameState.boosters.shuffle : 2;
        const hammerBtn = document.getElementById('btn-booster-hammer');
        const shuffleBtn = document.getElementById('btn-booster-shuffle');
        if (hammerBtn) {
            hammerBtn.innerHTML = `🔨 ${this.t('m3_booster_hammer')} <span class="booster-badge">(${hammerCount})</span>`;
        }
        if (shuffleBtn) {
            shuffleBtn.innerHTML = `🌪️ ${this.t('m3_booster_shuffle')} <span class="booster-badge">(${shuffleCount})</span>`;
        }
    }

    closeMatch3Screen() {
        window.vkSDK.stopGameplay();
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-manor').classList.add('active');
        document.getElementById('bottom-nav').style.display = 'flex';
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.target === 'view-manor'));
        
        if (this.manorEngine) {
            this.manorEngine.startRenderLoop();
            this.manorEngine.resize();
        }
        this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);
    }

    updateMatch3Header() {
        if (!this.isNightSiegeMode) {
            document.getElementById('m3-moves').textContent = this.m3Engine.movesLeft;
        }
        document.getElementById('m3-score').textContent = this.m3Engine.score;
        if (this.isNightSiegeMode && this.nightSiegeEngine) {
            this.nightSiegeEngine.score = this.m3Engine.score;
        }

        const targetContainer = document.getElementById('m3-targets');
        targetContainer.innerHTML = '';

        if (this.isNightSiegeMode) {
            targetContainer.innerHTML = `<span style="color:#FFD700; font-family:'Russo One';">${this.t('m3_siege_title')}</span>`;
            return;
        }

        if (this.m3Engine.isBossLevel) {
            const hpPercent = Math.max(0, Math.min(100, Math.round((this.m3Engine.bossCurrentHp / this.m3Engine.bossMaxHp) * 100)));
            const bossItem = document.createElement('div');
            bossItem.className = 'boss-health-bar-container';
            const badge = this.m3Engine.isChapterBoss ? '👑' : '💀';
            bossItem.innerHTML = `
                <div style="font-size:0.75rem; color:#FFD700; margin-bottom:2px; font-weight:bold;">${badge} ${this.m3Engine.bossName}: ${this.m3Engine.bossCurrentHp}/${this.m3Engine.bossMaxHp} HP</div>
                <div style="width:110px; height:8px; background:#333; border-radius:4px; overflow:hidden; border:1px solid #FFD700;">
                    <div style="width:${hpPercent}%; height:100%; background:linear-gradient(90deg, #E63946, #FF4D6D); transition: width 0.2s;"></div>
                </div>
            `;
            targetContainer.appendChild(bossItem);
        } else {
            for (let key in this.m3Engine.targetTypes) {
                const cur = this.m3Engine.targetProgress[key] || 0;
                const req = this.m3Engine.targetTypes[key];
                let icon = '🍓';
                if (key === 'wood') icon = '🍃';
                else if (key === 'grain') icon = '🌾';
                else if (key === 'gem') icon = '💎';
                else if (key === 'bramble') icon = '🌿';

                const item = document.createElement('div');
                item.className = 'target-item';
                item.innerHTML = `${icon} ${cur}/${req}`;
                targetContainer.appendChild(item);
            }
        }
    }

    handleLevelWin({ score }) {
        if (this.isNightSiegeMode) return;

        const lvl = this.currentPlayingLevel || this.gameState.level;
        const heroBonuses = this.heroesSystem ? this.heroesSystem.getBonuses() : {};
        
        let woodMult = heroBonuses.woodMultiplier || 1.0;
        const activePet = this.petsSystem ? this.petsSystem.getActivePet() : null;
        if (activePet && activePet.level > 0 && activePet.id === 'grey_wolf') {
            woodMult *= 1.25;
        }

        const rewardWood = Math.floor((15 + Math.floor(lvl / 2)) * woodMult);
        const rewardGold = Math.floor((50 + lvl * 5) * (activePet && activePet.level > 0 && activePet.id === 'grey_wolf' ? 1.25 : 1.0));

        this.lastRewards = { wood: rewardWood, gold: rewardGold };

        this.gameState.wood += rewardWood;
        this.gameState.gold += rewardGold;
        this.gameState.scoreTotal += score;

        if (this.m3Engine.isBossLevel) {
            this.gameState.questsState['boss'] = (this.gameState.questsState['boss'] || 0) + 1;
        }
        if (this.m3Engine.targetProgress['berry']) {
            this.gameState.questsState['berries'] = (this.gameState.questsState['berries'] || 0) + this.m3Engine.targetProgress['berry'];
        }

        const stars = Math.min(3, Math.max(1, Math.floor(this.m3Engine.movesLeft / 4) + 1));
        this.gameState.levelStars[lvl] = Math.max(this.gameState.levelStars[lvl] || 0, stars);

        if (lvl === this.gameState.level && this.gameState.level < 500) {
            this.gameState.level++;
        }

        this.lastWonLevel = lvl;

        if (this.gameState.level % 3 === 0 && this.manorEngine) {
            const season = this.manorEngine.nextSeason();
            document.getElementById('season-icon').textContent = season.icon;
            const seasonName = this.t(`season_${season.id}`);
            const weatherDesc = this.t(`weather_${season.id}`);
            document.getElementById('season-name').textContent = `${this.t('season_prefix')}${seasonName}`;
            document.getElementById('weather-desc').textContent = weatherDesc;
        }

        this.updateUIResources();
        this.saveProgress();

        document.getElementById('result-title').textContent = this.t('win_title');
        document.getElementById('result-stars').textContent = '⭐'.repeat(stars);
        document.getElementById('result-desc').textContent = this.t('win_desc');
        document.getElementById('result-rewards').innerHTML = `
            <div class="res-item">🪵 +${rewardWood}</div>
            <div class="res-item">🪙 +${rewardGold}</div>
        `;
        document.getElementById('btn-double-reward').style.display = 'inline-block';
        const lossMovesBtn = document.getElementById('btn-loss-ad-moves');
        if (lossMovesBtn) lossMovesBtn.style.display = 'none';
        document.getElementById('modal-result').classList.remove('hidden');

        window.vkSDK.stopGameplay();
        window.vkSDK.submitLeaderboardScore(this.gameState.scoreTotal);
    }

    handleLevelLoss() {
        if (this.isNightSiegeMode) return;
        this.lastWonLevel = null;
        window.vkSDK.stopGameplay();
        document.getElementById('result-title').textContent = this.t('loss_title');
        document.getElementById('result-stars').textContent = '💔';
        document.getElementById('result-desc').textContent = this.t('loss_desc');
        document.getElementById('result-rewards').innerHTML = '';
        document.getElementById('btn-double-reward').style.display = 'none';
        const lossMovesBtn = document.getElementById('btn-loss-ad-moves');
        if (lossMovesBtn) lossMovesBtn.style.display = 'block';
        document.getElementById('modal-result').classList.remove('hidden');
    }

    handleWheelReward(prize) {
        if (prize.type === 'gold') {
            this.gameState.gold += prize.val;
        } else if (prize.type === 'wood') {
            this.gameState.wood += prize.val;
        } else if (prize.type === 'resin') {
            this.gameState.resin += prize.val;
        } else if (prize.type === 'energy') {
            this.gameState.energy = Math.min(this.gameState.maxEnergy, this.gameState.energy + prize.val);
        } else if (prize.type === 'hammer') {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + prize.val;
            this.updateBoosterUI();
        } else if (prize.type === 'shuffle') {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            this.gameState.boosters.shuffle = (this.gameState.boosters.shuffle || 0) + prize.val;
            this.updateBoosterUI();
        }
        this.updateUIResources();
        this.saveProgress();
        window.showToast(this.t('wheel_reward_alert', { label: prize.label }));
    }

    openBuildingModal(building) {
        this.selectedBuildingForModal = building;
        document.getElementById('bldg-modal-title').textContent = building.name;
        
        const previewContainer = document.getElementById('bldg-modal-img-container');
        previewContainer.innerHTML = `<canvas id="bldg-preview-canvas" width="160" height="130" style="margin: 6px auto; display: block; border-radius: 12px; background: #2C1810; border: 1px solid #D4AF37;"></canvas>`;
        const prevCanvas = document.getElementById('bldg-preview-canvas');
        if (prevCanvas && window.SlavicArt) {
            const pctx = prevCanvas.getContext('2d');
            window.SlavicArt.drawBuilding(pctx, building.id, 80, 75, 120, 120, building.level, 0, 'autumn');
        }

        document.getElementById('bldg-modal-desc').textContent = `${building.desc} (${this.t('heroes_level')} ${building.level} / ${building.maxLevel})`;
        const costWoodEl = document.getElementById('bldg-cost-wood');
        const costGoldEl = document.getElementById('bldg-cost-gold');
        const upgradeBtn = document.getElementById('btn-confirm-upgrade');

        if (building.maxLevel && building.level >= building.maxLevel) {
            if (costWoodEl) costWoodEl.textContent = '—';
            if (costGoldEl) costGoldEl.textContent = '—';
            if (upgradeBtn) {
                upgradeBtn.textContent = this.t('bldg_max_level') || 'Максимальный уровень ✓';
                upgradeBtn.disabled = true;
                upgradeBtn.style.opacity = '0.6';
            }
        } else {
            if (costWoodEl) costWoodEl.textContent = building.costWood;
            if (costGoldEl) costGoldEl.textContent = building.costGold;
            if (upgradeBtn) {
                upgradeBtn.textContent = `🔨 ${this.t('bldg_upgrade_btn') || 'Улучшить'}`;
                upgradeBtn.disabled = false;
                upgradeBtn.style.opacity = '1.0';
            }
        }

        document.getElementById('modal-building').classList.remove('hidden');
    }

    renderLeaderboard() {
        const listEl = document.getElementById('lb-list');
        listEl.innerHTML = `
            <div class="lb-row my-row">
                <span>1</span>
                <span>${this.t('lb_you')}</span>
                <span>${this.gameState.level}</span>
                <span>${this.gameState.scoreTotal}</span>
            </div>
            <div class="lb-row">
                <span>2</span>
                <span>Yaroslav the Great</span>
                <span>${this.gameState.level + 3}</span>
                <span>${this.gameState.scoreTotal + 4500}</span>
            </div>
            <div class="lb-row">
                <span>3</span>
                <span>Princess Olga</span>
                <span>${this.gameState.level + 1}</span>
                <span>${this.gameState.scoreTotal + 2100}</span>
            </div>
            <div class="lb-row">
                <span>4</span>
                <span>Vakula</span>
                <span>${Math.max(1, this.gameState.level - 1)}</span>
                <span>${Math.max(0, this.gameState.scoreTotal - 500)}</span>
            </div>
        `;
    }

    saveProgress() {
        window.vkSDK.saveData(this.gameState);
    }
}

window.SlavicManorApp = SlavicManorApp;

const startApp = () => {
    if (!window.app && typeof document !== 'undefined' && document.getElementById('game-container')) {
        window.app = new SlavicManorApp();
        window.app.init();
    }
};

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startApp);
    } else {
        startApp();
    }
}
