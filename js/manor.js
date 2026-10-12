class ManorEngine {
    constructor(manorCanvas, weatherCanvas, options = {}) {
        this.canvas = manorCanvas;
        this.ctx = manorCanvas.getContext('2d');
        this.wCanvas = weatherCanvas;
        this.wCtx = weatherCanvas.getContext('2d');

        this.onBuildingClick = options.onBuildingClick || null;
        this.onCollectIdle = options.onCollectIdle || null;
        this.onCitizenClick = options.onCitizenClick || null;

        this.worldWidth = 1600;
        this.worldHeight = 1100;
        this.cameraX = 350;
        this.cameraY = 250;

        this.buildings = [
            { id: 'terem', name: 'Княжеский Терем', icon: '🏰', level: 1, maxLevel: 3, x: 800, y: 300, baseCostWood: 20, baseCostGold: 100, desc: 'Главный княжеский терем. Увеличивает запас энергии!', idleType: 'gold', idleVal: 100, idleReady: true },
            { id: 'mill', name: 'Ветряная Мельница', icon: '🌾', level: 0, maxLevel: 3, x: 440, y: 200, baseCostWood: 15, baseCostGold: 50, desc: 'Мелет пшеницу на холме. Дает пассивный доход золота!', idleType: 'gold', idleVal: 50, idleReady: false },
            { id: 'watermill', name: 'Водяная Мельница', icon: '🌊', level: 0, maxLevel: 3, x: 180, y: 640, baseCostWood: 20, baseCostGold: 70, desc: 'Крутится речным потоком. Ускоряет сбор урожая!', idleType: 'gold', idleVal: 60, idleReady: false },
            { id: 'forge', name: 'Кузница Вакулы', icon: '⚒️', level: 0, maxLevel: 3, x: 1300, y: 620, baseCostWood: 25, baseCostGold: 150, desc: 'Кует богатырские доспехи. Открывает новые рецепты ремесла!', idleType: 'wood', idleVal: 30, idleReady: false },
            { id: 'apiary', name: 'Пасека Медовара', icon: '🐝', level: 0, maxLevel: 3, x: 600, y: 190, baseCostWood: 10, baseCostGold: 40, desc: 'Липовые борти и ульи. Увеличивает силу богатырей в бою!', idleType: 'gold', idleVal: 40, idleReady: false },
            { id: 'granary', name: 'Лабаз и Житница', icon: '🪵', level: 0, maxLevel: 3, x: 1180, y: 280, baseCostWood: 30, baseCostGold: 80, desc: 'Хранилище запасов. Увеличивает сбор дерева за победы!', idleType: 'wood', idleVal: 40, idleReady: false },
            { id: 'banya', name: 'Русская Баня', icon: '🧖', level: 0, maxLevel: 3, x: 550, y: 580, baseCostWood: 18, baseCostGold: 60, desc: 'Парная на дровах у реки. Ускоряет регенерацию энергии!', idleType: 'resin', idleVal: 10, idleReady: false },
            { id: 'stables', name: 'Богатырская Конюшня', icon: '🐴', level: 0, maxLevel: 3, x: 1060, y: 540, baseCostWood: 35, baseCostGold: 120, desc: 'Конюшня богатырских коней. Дает бонусные ходы в бою!', idleType: 'gold', idleVal: 80, idleReady: false },
            { id: 'chapel', name: 'Звонница-Часовня', icon: '🔔', level: 0, maxLevel: 3, x: 800, y: 740, baseCostWood: 40, baseCostGold: 200, desc: 'Священный оберег села. Защищает от ловушек нечисти!', idleType: 'gold', idleVal: 120, idleReady: false },
            { id: 'pier', name: 'Пристань и Ладья', icon: '⛵', level: 0, maxLevel: 3, x: 180, y: 920, baseCostWood: 25, baseCostGold: 90, desc: 'Торговая ладья и ярмарка. Привозит товары и смолу!', idleType: 'resin', idleVal: 15, idleReady: false },
            { id: 'watchtower', name: 'Сторожевая Вежа', icon: '🛡️', level: 0, maxLevel: 3, x: 1380, y: 900, baseCostWood: 30, baseCostGold: 110, desc: 'Дозорная башня. Увеличивает очки комбо в Match-3!', idleType: 'gold', idleVal: 70, idleReady: false },
            { id: 'garden', name: 'Княжеский Огород', icon: '🎃', level: 0, maxLevel: 3, x: 600, y: 390, baseCostWood: 12, baseCostGold: 45, desc: 'Тыквы, капуста и подсолнухи. Дополнительная еда для усадьбы!', idleType: 'gold', idleVal: 45, idleReady: false },
            { id: 'sawmill', name: 'Лесопилка', icon: '🪓', level: 0, maxLevel: 3, x: 1360, y: 380, baseCostWood: 22, baseCostGold: 85, desc: 'Распил кедровых бревен. Увеличивает добычу древесины!', idleType: 'wood', idleVal: 50, idleReady: false },
            { id: 'fisherman', name: 'Рыбацкий Стан', icon: '🐟', level: 0, maxLevel: 3, x: 480, y: 900, baseCostWood: 16, baseCostGold: 55, desc: 'Сушка сетей и рыбалка на реке. Приносит золото каждый день!', idleType: 'gold', idleVal: 65, idleReady: false }
        ];

        this.recalculateCosts();

        this.seasons = [
            { id: 'autumn', name: 'Золотая Осень', icon: '🍂', weather: 'Тихий Листопад', groundStart: '#C27D38', groundEnd: '#5C3A21', river: '#2A9D8F' },
            { id: 'winter', name: 'Морозная Зима', icon: '❄️', weather: 'Легкий Снежок', groundStart: '#D8E2DC', groundEnd: '#90A4AE', river: '#607D8B' },
            { id: 'spring', name: 'Цветущая Весна', icon: '🌸', weather: 'Весеннее Цветение', groundStart: '#52B788', groundEnd: '#1B4332', river: '#2A9D8F' },
            { id: 'summer', name: 'Знойное Лето', icon: '☀️', weather: 'Солнечные Блики', groundStart: '#74C69D', groundEnd: '#2D6A4F', river: '#264653' }
        ];

        this.currentSeasonIdx = 0;
        this.weatherParticles = [];
        this.floatingTexts = [];
        this.speechBubbles = [];
        this.animTime = 0;
        this.isRunning = false;
        this.animFrameId = null;

        // Tree Props List
        this.trees = [
            // Sawmill Pine & Spruce Forest (around x: 1360, y: 380)
            { type: 'pine', x: 1260, y: 240, size: 95 },
            { type: 'pine', x: 1330, y: 190, size: 100 },
            { type: 'pine', x: 1400, y: 170, size: 105 },
            { type: 'pine', x: 1480, y: 210, size: 110 },
            { type: 'pine', x: 1540, y: 260, size: 115 },
            { type: 'pine', x: 1520, y: 350, size: 105 },
            { type: 'pine', x: 1460, y: 430, size: 100 },
            { type: 'pine', x: 1540, y: 480, size: 105 },
            { type: 'pine', x: 1460, y: 570, size: 100 },
            { type: 'pine', x: 1330, y: 470, size: 95 },
            { type: 'pine', x: 1270, y: 410, size: 90 },
            { type: 'pine', x: 1490, y: 760, size: 100 },
            { type: 'pine', x: 1450, y: 840, size: 95 },

            // Northern Birch Hill Forest
            { type: 'birch', x: 660, y: 140, size: 85 },
            { type: 'birch', x: 740, y: 120, size: 90 },
            { type: 'birch', x: 820, y: 130, size: 85 },
            { type: 'birch', x: 900, y: 150, size: 90 },
            { type: 'birch', x: 980, y: 170, size: 85 },
            { type: 'birch', x: 1060, y: 190, size: 85 },
            { type: 'birch', x: 680, y: 260, size: 80 },
            { type: 'birch', x: 940, y: 260, size: 85 },
            { type: 'birch', x: 700, y: 680, size: 75 },
            { type: 'birch', x: 1140, y: 820, size: 80 },

            // Western River Pines
            { type: 'pine', x: 60, y: 120, size: 90 },
            { type: 'pine', x: 70, y: 360, size: 85 },
            { type: 'pine', x: 80, y: 760, size: 90 },

            // Sacred Ancient Oak
            { type: 'oak', x: 670, y: 750, size: 115 }
        ];

        this.logPiles = [
            { x: 1290, y: 395, size: 28 },
            { x: 1435, y: 395, size: 30 }
        ];

        this.mushrooms = [
            { x: 1280, y: 250, size: 12 },
            { x: 1340, y: 220, size: 14 },
            { x: 1470, y: 450, size: 13 },
            { x: 1510, y: 370, size: 14 },
            { x: 1340, y: 490, size: 12 }
        ];

        this.bushes = [
            { x: 540, y: 280, size: 32 },
            { x: 620, y: 360, size: 30 },
            { x: 890, y: 430, size: 34 },
            { x: 1020, y: 500, size: 32 },
            { x: 1160, y: 620, size: 30 },
            { x: 760, y: 760, size: 32 },
            { x: 1260, y: 720, size: 34 },
            { x: 620, y: 640, size: 28 }
        ];

        this.reeds = [
            { x: 240, y: 160 },
            { x: 310, y: 340 },
            { x: 380, y: 510 },
            { x: 420, y: 710 },
            { x: 320, y: 850 },
            { x: 220, y: 980 }
        ];

        // Dedicated natural dry-land open patrol paths
        this.citizens = [
            { id: 'ilya', x: 800, y: 480, targetX: 800, targetY: 480, speed: 0.45, pauseTimer: 25, minX: 760, maxX: 840, minY: 450, maxY: 510, dir: 1, isWalking: false, label: 'Илья Муромец' },
            { id: 'dobrynya', x: 960, y: 640, targetX: 960, targetY: 640, speed: 0.45, pauseTimer: 30, minX: 920, maxX: 1000, minY: 610, maxY: 670, dir: 1, isWalking: false, label: 'Добрыня Никитич' },
            { id: 'alesha', x: 490, y: 470, targetX: 490, targetY: 470, speed: 0.5, pauseTimer: 20, minX: 470, maxX: 530, minY: 440, maxY: 500, dir: 1, isWalking: false, label: 'Алёша Попович' },
            { id: 'vasilisa', x: 710, y: 635, targetX: 710, targetY: 635, speed: 0.35, pauseTimer: 40, minX: 690, maxX: 750, minY: 610, maxY: 660, dir: -1, isWalking: false, label: 'Василиса Премудрая' },
            { id: 'vakula', x: 1220, y: 665, targetX: 1220, targetY: 665, speed: 0.35, pauseTimer: 50, minX: 1200, maxX: 1250, minY: 650, maxY: 690, dir: 1, isWalking: false, label: 'Кузнец Вакула' },
            { id: 'radogor', x: 710, y: 230, targetX: 710, targetY: 230, speed: 0.35, pauseTimer: 55, minX: 680, maxX: 740, minY: 210, maxY: 250, dir: 1, isWalking: false, label: 'Волхв Радогор' },
            { id: 'peasant', x: 670, y: 485, targetX: 670, targetY: 485, speed: 0.45, pauseTimer: 20, minX: 640, maxX: 710, minY: 460, maxY: 510, dir: 1, isWalking: false, label: 'Селянин' },
            { id: 'maiden', x: 860, y: 565, targetX: 860, targetY: 565, speed: 0.4, pauseTimer: 35, minX: 830, maxX: 890, minY: 540, maxY: 590, dir: -1, isWalking: false, label: 'Красна девица' },
            { id: 'horse', x: 1130, y: 640, targetX: 1130, targetY: 640, speed: 0.55, pauseTimer: 60, minX: 1100, maxX: 1160, minY: 620, maxY: 660, dir: 1, isWalking: false, label: 'Конь Бурушка' },
            { id: 'sheep', x: 570, y: 345, targetX: 570, targetY: 345, speed: 0.25, pauseTimer: 80, minX: 540, maxX: 610, minY: 320, maxY: 370, dir: 1, isWalking: false, label: 'Овечка' },
            { id: 'dog', x: 770, y: 515, targetX: 770, targetY: 515, speed: 0.75, pauseTimer: 15, minX: 740, maxX: 800, minY: 490, maxY: 540, dir: 1, isWalking: false, label: 'Пес Дружок' }
        ];

        this.easterEggs = [
            { id: 'cat', x: 720, y: 430, label: 'Кот Баюн', rewardGold: 10, msg: 'Мяу! (+10 🪙)' },
            { id: 'bonfire', x: 880, y: 500, label: 'Костёр', rewardGold: 15, msg: 'Искры взлетели! (+15 🪙)' },
            { id: 'fish', x: 340, y: 500, label: 'Щука', rewardGold: 20, msg: 'Всплеск рыбы! (+20 🪙)' }
        ];

        setInterval(() => {
            this.buildings.forEach(b => {
                if (b.level > 0 && Math.random() < 0.6) {
                    b.idleReady = true;
                }
            });
        }, 20000);

        this.initInput();
        this.startRenderLoop();
    }

    isInsideBuildingFootprint(x, y) {
        for (let i = 0; i < this.buildings.length; i++) {
            const b = this.buildings[i];
            const dx = Math.abs(x - b.x);
            const dy = Math.abs(y - (b.y + 10));
            if (dx < 62 && dy < 50) {
                return true;
            }
        }
        return false;
    }

    isInsideTreeTrunk(x, y) {
        for (let i = 0; i < this.trees.length; i++) {
            const t = this.trees[i];
            const dx = x - t.x;
            const dy = y - t.y;
            if (dx * dx + dy * dy < 25 * 25) {
                return true;
            }
        }
        return false;
    }

    isInsideRiver(x, y) {
        // Bridge over river allows walking
        if (x >= 280 && x <= 440 && y >= 570 && y <= 630) return false;
        // Pier area for fisherman
        if (x <= 210 && y >= 880 && y <= 960) return false;

        const t = Math.max(0, Math.min(1, y / 1100));
        const inv = 1 - t;
        const rx = inv * inv * inv * 120 + 3 * inv * inv * t * 340 + 3 * inv * t * t * 480 + t * t * t * 240;
        const riverHalfWidth = 72;
        return Math.abs(x - rx) < riverHalfWidth;
    }

    isInsideObstacle(x, y) {
        return this.isInsideBuildingFootprint(x, y) || this.isInsideTreeTrunk(x, y) || this.isInsideRiver(x, y);
    }

    recalculateCosts() {
        this.buildings.forEach(b => {
            b.costWood = Math.floor(b.baseCostWood * Math.pow(1.6, b.level));
            b.costGold = Math.floor(b.baseCostGold * Math.pow(1.6, b.level));
        });
    }

    setBuildingsState(savedBuildings) {
        if (savedBuildings) {
            this.buildings.forEach(b => {
                if (savedBuildings[b.id] !== undefined) {
                    b.level = savedBuildings[b.id];
                }
            });
            this.recalculateCosts();
        }
    }

    getCurrentSeason() {
        return this.seasons[this.currentSeasonIdx];
    }

    nextSeason() {
        this.currentSeasonIdx = (this.currentSeasonIdx + 1) % this.seasons.length;
        this.weatherParticles = [];
        return this.getCurrentSeason();
    }

    resize() {
        const parent = this.canvas.parentElement;
        if (!parent) return;
        const w = parent.clientWidth;
        const h = parent.clientHeight;

        if (w > 0 && h > 0) {
            this.canvas.width = w;
            this.canvas.height = h;
            this.wCanvas.width = w;
            this.wCanvas.height = h;

            this.worldWidth = Math.max(1600, w);
            this.worldHeight = Math.max(1100, h);

            this.cameraX = Math.max(0, Math.min(this.worldWidth - this.canvas.width, this.cameraX));
            this.cameraY = Math.max(0, Math.min(this.worldHeight - this.canvas.height, this.cameraY));
        }
    }

    initInput() {
        let isDragging = false;
        let startX = 0, startY = 0;
        let camStartX = 0, camStartY = 0;
        let dragDistance = 0;

        const onDown = (clientX, clientY) => {
            isDragging = true;
            startX = clientX;
            startY = clientY;
            camStartX = this.cameraX;
            camStartY = this.cameraY;
            dragDistance = 0;
        };

        const onMove = (clientX, clientY) => {
            if (!isDragging) return;
            const dx = clientX - startX;
            const dy = clientY - startY;
            dragDistance += Math.abs(dx) + Math.abs(dy);

            this.cameraX = Math.max(0, Math.min(this.worldWidth - this.canvas.width, camStartX - dx));
            this.cameraY = Math.max(0, Math.min(this.worldHeight - this.canvas.height, camStartY - dy));
        };

        const onUp = (clientX, clientY) => {
            if (isDragging && dragDistance < 14) {
                const rect = this.canvas.getBoundingClientRect();
                const worldClickX = (clientX - rect.left) + this.cameraX;
                const worldClickY = (clientY - rect.top) + this.cameraY;

                // 1. Check Citizens / Heroes Click First
                let clickedCitizen = false;
                this.citizens.forEach(c => {
                    const dx = worldClickX - c.x;
                    const dy = worldClickY - c.y;
                    if (Math.sqrt(dx * dx + dy * dy) < 40) {
                        clickedCitizen = true;
                        if (this.onCitizenClick) this.onCitizenClick(c);
                    }
                });

                if (clickedCitizen) {
                    isDragging = false;
                    return;
                }

                // 2. Check Easter Eggs Click
                let clickedEgg = false;
                this.easterEggs.forEach(egg => {
                    const dx = worldClickX - egg.x;
                    const dy = worldClickY - egg.y;
                    if (Math.sqrt(dx * dx + dy * dy) < 38) {
                        clickedEgg = true;
                        window.gameAudio.playSwap();
                        this.addFloatingText(egg.msg, egg.x, egg.y);
                        if (this.onCollectIdle) this.onCollectIdle({ type: 'gold', val: egg.rewardGold });
                    }
                });

                if (clickedEgg) {
                    isDragging = false;
                    return;
                }

                // 3. Check Buildings Click
                this.buildings.forEach(b => {
                    const dx = worldClickX - b.x;
                    const dy = worldClickY - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 75) {
                        if (b.level > 0 && b.idleReady) {
                            b.idleReady = false;
                            window.gameAudio.playUpgrade();
                            const icon = b.idleType === 'gold' ? '🪙' : (b.idleType === 'wood' ? '🪵' : '💧');
                            this.addFloatingText(`+${b.idleVal} ${icon}`, b.x, b.y - 60);
                            if (this.onCollectIdle) this.onCollectIdle({ type: b.idleType, val: b.idleVal });
                        } else {
                            window.gameAudio.playSwap();
                            if (this.onBuildingClick) this.onBuildingClick(b);
                        }
                    }
                });
            }
            isDragging = false;
        };

        this.canvas.addEventListener('mousedown', (e) => onDown(e.clientX, e.clientY));
        window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
        window.addEventListener('mouseup', (e) => onUp(e.clientX, e.clientY));

        this.canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) onDown(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });
        this.canvas.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) onMove(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });
        this.canvas.addEventListener('touchend', (e) => {
            if (e.changedTouches.length > 0) onUp(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        });
    }

    addFloatingText(text, x, y) {
        this.floatingTexts.push({
            text, x, y, alpha: 1.0, scale: 0.9
        });
    }

    showSpeechBubble(citizenId, title, text, duration = 4000) {
        this.speechBubbles = this.speechBubbles.filter(b => b.citizenId !== citizenId);
        this.speechBubbles.push({
            citizenId,
            title,
            text,
            expiresAt: Date.now() + duration,
            totalDuration: duration,
            alpha: 1.0
        });
    }

    stopRenderLoop() {
        this.isRunning = false;
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
    }

    startRenderLoop() {
        if (this.isRunning) return;
        this.isRunning = true;
        const loop = (time) => {
            if (!this.isRunning) return;
            this.animTime = time;
            this.renderLandscape();
            this.updateWeather();
            this.animFrameId = requestAnimationFrame(loop);
        };
        this.animFrameId = requestAnimationFrame(loop);
    }

    renderLandscape() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        if (!w || !h) return;

        this.ctx.clearRect(0, 0, w, h);

        this.ctx.save();
        this.ctx.translate(-this.cameraX, -this.cameraY);

        const curSeason = this.getCurrentSeason();

        // 1. Base Ground Landscape
        const groundGrad = this.ctx.createLinearGradient(0, 0, 0, this.worldHeight);
        groundGrad.addColorStop(0, curSeason.groundStart);
        groundGrad.addColorStop(1, curSeason.groundEnd);
        this.ctx.fillStyle = groundGrad;
        this.ctx.fillRect(0, 0, this.worldWidth, this.worldHeight);

        // 2. River & Sandy Banks
        this.ctx.save();
        this.ctx.strokeStyle = curSeason.id === 'winter' ? '#B0BEC5' : 'rgba(212, 163, 115, 0.75)';
        this.ctx.lineWidth = 150;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(120, 0);
        this.ctx.bezierCurveTo(340, 360, 480, 720, 240, this.worldHeight);
        this.ctx.stroke();

        this.ctx.strokeStyle = curSeason.river;
        this.ctx.lineWidth = 120;
        this.ctx.beginPath();
        this.ctx.moveTo(120, 0);
        this.ctx.bezierCurveTo(340, 360, 480, 720, 240, this.worldHeight);
        this.ctx.stroke();

        // River Animated Waves
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
        this.ctx.lineWidth = 3.5;
        for (let i = 0; i < 7; i++) {
            const waveY = 120 + i * 130;
            const t = waveY / 1100;
            const inv = 1 - t;
            const rx = inv * inv * inv * 120 + 3 * inv * inv * t * 340 + 3 * inv * t * t * 480 + t * t * t * 240;
            const waveX = rx + Math.sin(this.animTime * 0.003 + i * 1.5) * 20;
            this.ctx.beginPath();
            this.ctx.arc(waveX, waveY, 18, 0.2, Math.PI - 0.2);
            this.ctx.stroke();
        }
        this.ctx.restore();

        // 3. Wooden Bridge
        this.drawWoodenBridge(this.ctx, 360, 600, 150, 50);

        // 4. Village Dirt Roads
        this.ctx.save();
        this.ctx.strokeStyle = 'rgba(235, 215, 185, 0.65)';
        this.ctx.lineWidth = 28;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(800, 380); this.ctx.lineTo(800, 800); this.ctx.lineTo(1060, 580);
        this.ctx.moveTo(800, 480); this.ctx.lineTo(550, 600);
        this.ctx.moveTo(800, 480); this.ctx.lineTo(1180, 340); this.ctx.lineTo(1300, 660);
        this.ctx.moveTo(500, 300); this.ctx.lineTo(800, 380);
        this.ctx.stroke();
        this.ctx.restore();

        // 5. River Reeds & Small Bushes on Ground Layer
        if (window.SlavicArt) {
            this.reeds.forEach(r => window.SlavicArt.drawReeds(this.ctx, r.x, r.y, this.animTime));
            this.bushes.forEach(b => window.SlavicArt.drawBush(this.ctx, b.x, b.y, b.size, curSeason.id));
            this.mushrooms.forEach(m => window.SlavicArt.drawMushroom(this.ctx, m.x, m.y, m.size));
            this.logPiles.forEach(lp => window.SlavicArt.drawLogPile(this.ctx, lp.x, lp.y, lp.size));
        }

        // 6. Update Citizens Positions
        this.citizens.forEach(c => {
            if (c.pauseTimer > 0) {
                c.pauseTimer--;
                c.isWalking = false;
            } else {
                const dx = c.targetX - c.x;
                const dy = c.targetY - c.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 3) {
                    c.pauseTimer = Math.floor(Math.random() * 80) + 30;
                    let tries = 0;
                    let tx = c.x, ty = c.y;
                    do {
                        tx = c.minX + Math.random() * (c.maxX - c.minX);
                        ty = c.minY + Math.random() * (c.maxY - c.minY);
                        tries++;
                    } while (this.isInsideObstacle(tx, ty) && tries < 15);
                    c.targetX = tx;
                    c.targetY = ty;
                    c.isWalking = false;
                } else {
                    const stepX = (dx / dist) * c.speed;
                    const stepY = (dy / dist) * c.speed;
                    const nextX = c.x + stepX;
                    const nextY = c.y + stepY;

                    if (!this.isInsideObstacle(nextX, nextY)) {
                        c.isWalking = true;
                        c.x = nextX;
                        c.y = nextY;
                        if (Math.abs(dx) > 0.15) {
                            c.dir = dx >= 0 ? 1 : -1;
                        }
                    } else {
                        c.pauseTimer = 30;
                        c.isWalking = false;
                        c.targetX = c.minX + Math.random() * (c.maxX - c.minX);
                        c.targetY = c.minY + Math.random() * (c.maxY - c.minY);
                    }
                }
            }
        });

        // 7. Y-SORTED DEPTH RENDERING PIPELINE (2.5D Isometric Sorting)
        // Everything with depth (Trees, Buildings, Citizens, Easter Eggs) is sorted by Y coordinate!
        const bldgSize = 135;
        const depthQueue = [];

        // A. Add Trees to Depth Queue (Footprint at trunk base y)
        if (window.SlavicArt) {
            this.trees.forEach(t => {
                depthQueue.push({
                    y: t.y,
                    render: () => {
                        if (t.type === 'pine') window.SlavicArt.drawPineTree(this.ctx, t.x, t.y, t.size, curSeason.id);
                        else if (t.type === 'birch') window.SlavicArt.drawBirchTree(this.ctx, t.x, t.y, t.size, curSeason.id);
                        else if (t.type === 'oak') window.SlavicArt.drawOakTree(this.ctx, t.x, t.y, t.size, curSeason.id);
                    }
                });
            });
        }

        // B. Add Buildings to Depth Queue (Footprint base at y + 30)
        this.buildings.forEach(b => {
            depthQueue.push({
                y: b.y + 30,
                render: () => {
                    if (window.SlavicArt) {
                        window.SlavicArt.drawBuilding(this.ctx, b.id, b.x, b.y, bldgSize, bldgSize, b.level, this.animTime, curSeason.id);
                    }
                }
            });
        });

        // C. Add Citizens / Heroes to Depth Queue (Footprint at feet c.y)
        if (window.SlavicArt) {
            this.citizens.forEach(c => {
                depthQueue.push({
                    y: c.y,
                    render: () => {
                        if (c.id === 'ilya') window.SlavicArt.drawIlya(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'dobrynya') window.SlavicArt.drawDobrynya(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'alesha') window.SlavicArt.drawAlesha(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'vasilisa') window.SlavicArt.drawVasilisa(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'vakula') window.SlavicArt.drawVakula(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'radogor') window.SlavicArt.drawRadogor(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'peasant') window.SlavicArt.drawPeasantMan(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'maiden') window.SlavicArt.drawPeasantMaiden(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'horse') window.SlavicArt.drawHorse(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'sheep') window.SlavicArt.drawSheep(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                        else if (c.id === 'dog') window.SlavicArt.drawDog(this.ctx, c.x, c.y, c.dir, c.isWalking, this.animTime);
                    }
                });
            });
        }

        // D. Add Easter Eggs to Depth Queue
        if (window.SlavicArt) {
            this.easterEggs.forEach(egg => {
                depthQueue.push({
                    y: egg.y,
                    render: () => {
                        if (egg.id === 'cat') window.SlavicArt.drawCatBayun(this.ctx, egg.x, egg.y, this.animTime);
                        else if (egg.id === 'bonfire') window.SlavicArt.drawBonfire(this.ctx, egg.x, egg.y, this.animTime);
                        else if (egg.id === 'fish') window.SlavicArt.drawJumpingPike(this.ctx, egg.x, egg.y, this.animTime);
                    }
                });
            });
        }

        // SORT BY Y COORDINATE: Low Y (back/north) is drawn first, High Y (front/south) is drawn on top!
        depthQueue.sort((a, b) => a.y - b.y);
        depthQueue.forEach(item => item.render());

        // 8. Top-Level UI Overlays (Building Labels, Floating Text, Speech Bubbles)
        this.buildings.forEach(b => {
            this.ctx.save();
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';

            const badgeY = b.y - bldgSize * 0.52;
            this.ctx.fillStyle = b.level > 0 ? '#1B4332' : '#780000';
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.roundRect(b.x - 34, badgeY - 10, 68, 20, [10]);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.font = 'bold 11px "Russo One", sans-serif';
            this.ctx.fillStyle = '#FFD700';
            this.ctx.fillText(b.level > 0 ? `Ур. ${b.level} ⭐` : 'Руины 🔨', b.x, badgeY);

            this.ctx.font = '13px "Russo One", sans-serif';
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.shadowColor = '#000000';
            this.ctx.shadowBlur = 4;
            this.ctx.fillText(b.name, b.x, b.y + bldgSize * 0.42);

            if (b.level > 0 && b.idleReady) {
                const bounceY = Math.sin(this.animTime * 0.006 + b.x) * 6;
                const bubbleY = b.y - bldgSize * 0.75 + bounceY;

                this.ctx.fillStyle = '#FFD700';
                this.ctx.strokeStyle = '#2C1810';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.arc(b.x, bubbleY, 18, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();

                this.ctx.font = '16px sans-serif';
                const bubbleIcon = b.idleType === 'gold' ? '🪙' : (b.idleType === 'wood' ? '🪵' : '💧');
                this.ctx.fillText(bubbleIcon, b.x, bubbleY);
            }

            this.ctx.restore();
        });

        // Speech Bubbles Rendering
        const now = Date.now();
        for (let i = this.speechBubbles.length - 1; i >= 0; i--) {
            const bubble = this.speechBubbles[i];
            const remaining = bubble.expiresAt - now;

            if (remaining <= 0) {
                this.speechBubbles.splice(i, 1);
                continue;
            }

            const citizen = this.citizens.find(c => c.id === bubble.citizenId);
            if (!citizen) continue;

            const bx = citizen.x;
            const by = citizen.y - 42;
            const alpha = Math.min(1.0, remaining / 400);

            this.drawSpeechBubble(this.ctx, bx, by, bubble.title, bubble.text, alpha);
        }

        // Floating Texts (+50 🪙 etc.)
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            this.ctx.save();
            this.ctx.translate(ft.x, ft.y);
            this.ctx.font = 'bold 16px "Russo One", sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#FFD700';
            this.ctx.shadowColor = '#000';
            this.ctx.shadowBlur = 6;
            this.ctx.globalAlpha = ft.alpha;
            this.ctx.fillText(ft.text, 0, 0);
            this.ctx.restore();

            ft.y -= 1.2;
            ft.alpha -= 0.02;
            if (ft.alpha <= 0) this.floatingTexts.splice(i, 1);
        }

        this.ctx.restore();
    }

    drawSpeechBubble(ctx, cx, cy, title, text, alpha = 1.0) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = '12px "Russo One", sans-serif';

        const maxWidth = 200;
        const words = text.split(' ');
        const lines = [];
        let curLine = '';

        for (let w of words) {
            const testLine = curLine ? curLine + ' ' + w : w;
            if (ctx.measureText(testLine).width > maxWidth && curLine) {
                lines.push(curLine);
                curLine = w;
            } else {
                curLine = testLine;
            }
        }
        if (curLine) lines.push(curLine);

        const lineHeight = 16;
        const padX = 14;
        const padY = 10;
        const titleHeight = title ? 18 : 0;
        const bubbleWidth = Math.max(140, Math.min(240, ...lines.map(l => ctx.measureText(l).width + padX * 2)));
        const bubbleHeight = padY * 2 + titleHeight + lines.length * lineHeight;

        const left = cx - bubbleWidth / 2;
        const top = cy - bubbleHeight - 12;

        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 3;

        ctx.fillStyle = '#FFFDF0';
        ctx.beginPath();
        ctx.roundRect(left, top, bubbleWidth, bubbleHeight, [12]);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(cx - 8, top + bubbleHeight);
        ctx.lineTo(cx, top + bubbleHeight + 10);
        ctx.lineTo(cx + 8, top + bubbleHeight);
        ctx.closePath();
        ctx.fill();

        ctx.shadowColor = 'transparent';

        ctx.strokeStyle = '#5C3A21';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(left, top, bubbleWidth, bubbleHeight, [12]);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 8, top + bubbleHeight);
        ctx.lineTo(cx, top + bubbleHeight + 10);
        ctx.lineTo(cx + 8, top + bubbleHeight);
        ctx.stroke();

        let textY = top + padY + 10;
        if (title) {
            ctx.fillStyle = '#780000';
            ctx.font = 'bold 12px "Russo One", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(title, cx, textY);
            textY += titleHeight;
        }

        ctx.fillStyle = '#212121';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        for (let l of lines) {
            ctx.fillText(l, cx, textY);
            textY += lineHeight;
        }

        ctx.restore();
    }

    drawWoodenBridge(ctx, cx, cy, width, height) {
        ctx.save();
        ctx.translate(cx, cy);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.ellipse(0, height * 0.4, width * 0.52, height * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();

        const planksCount = 10;
        const plankW = width / planksCount;

        for (let i = 0; i < planksCount; i++) {
            const px = -width / 2 + i * plankW;
            const isAlt = i % 2 === 0;
            ctx.fillStyle = isAlt ? '#6D4C41' : '#5C3A21';
            ctx.fillRect(px, -height / 2, plankW - 2, height);

            ctx.strokeStyle = '#3E2723';
            ctx.lineWidth = 1;
            ctx.strokeRect(px, -height / 2, plankW - 2, height);
        }

        ctx.fillStyle = '#8D6E63';
        ctx.fillRect(-width / 2 - 4, -height / 2 - 4, width + 8, 7);
        ctx.fillRect(-width / 2 - 4, height / 2 - 3, width + 8, 7);

        const posts = [-width / 2, -width * 0.25, 0, width * 0.25, width / 2];
        posts.forEach(px => {
            ctx.fillStyle = '#3E2723';
            ctx.fillRect(px - 3, -height / 2 - 8, 6, height + 16);
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(px, -height / 2 - 8, 3, 0, Math.PI * 2);
            ctx.arc(px, height / 2 + 8, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    }

    updateWeather() {
        const w = this.wCanvas.width;
        const h = this.wCanvas.height;
        if (!w || !h) return;

        this.wCtx.clearRect(0, 0, w, h);

        const season = this.getCurrentSeason().id;
        const maxParticles = (season === 'winter') ? 25 : 20;

        if (this.weatherParticles.length < maxParticles) {
            this.weatherParticles.push({
                x: Math.random() * w,
                y: -15,
                vx: (Math.random() - 0.5) * 1.5,
                vy: Math.random() * 1.2 + 0.8,
                size: Math.random() * 4 + 2,
                rot: Math.random() * Math.PI * 2,
                vRot: (Math.random() - 0.5) * 0.04
            });
        }

        this.weatherParticles.forEach((p, idx) => {
            this.wCtx.save();
            this.wCtx.translate(p.x, p.y);
            this.wCtx.rotate(p.rot);

            if (season === 'winter') {
                this.wCtx.fillStyle = 'rgba(255, 255, 255, 0.45)';
                this.wCtx.beginPath();
                this.wCtx.arc(0, 0, p.size, 0, Math.PI * 2);
                this.wCtx.fill();
            } else if (season === 'autumn') {
                this.wCtx.fillStyle = idx % 2 === 0 ? 'rgba(231, 111, 81, 0.65)' : 'rgba(244, 162, 97, 0.65)';
                this.wCtx.beginPath();
                this.wCtx.ellipse(0, 0, p.size * 1.2, p.size * 0.5, 0, 0, Math.PI * 2);
                this.wCtx.fill();
            } else if (season === 'spring') {
                this.wCtx.fillStyle = 'rgba(255, 198, 255, 0.65)';
                this.wCtx.beginPath();
                this.wCtx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
                this.wCtx.fill();
            } else {
                this.wCtx.fillStyle = 'rgba(255, 230, 109, 0.5)';
                this.wCtx.beginPath();
                this.wCtx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
                this.wCtx.fill();
            }

            this.wCtx.restore();

            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vRot;

            if (p.y > h + 15) {
                this.weatherParticles[idx] = {
                    x: Math.random() * w,
                    y: -10,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: Math.random() * 1.2 + 0.8,
                    size: Math.random() * 4 + 2,
                    rot: Math.random() * Math.PI * 2,
                    vRot: (Math.random() - 0.5) * 0.04
                };
            }
        });
    }
}

window.ManorEngine = ManorEngine;
