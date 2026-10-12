class MatchThreeEngine {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cols = options.cols || 8;
        this.rows = options.rows || 8;
        this.grid = [];
        this.tileSize = 60;
        this.animating = false;
        this.hammerActive = false;
        this.levelFinished = false;
        this.screenShake = 0;
        this.lightningBeams = [];
        
        // 6 High-Contrast Distinct Symbols
        this.TYPES = [
            { id: 'berry', name: 'Ягода', color: '#FF4D6D', icon: '🍓' },
            { id: 'grain', name: 'Колос', color: '#FFB703', icon: '🌾' },
            { id: 'gem', name: 'Самоцвет', color: '#00B4D8', icon: '💎' },
            { id: 'wood', name: 'Лист', color: '#40916C', icon: '🍃' },
            { id: 'fire', name: 'Огонь', color: '#FF6B35', icon: '🔥' },
            { id: 'gold', name: 'Червонец', color: '#7B2CBF', icon: '🪙' }
        ];

        this.selectedTile = null;
        this.movesLeft = 25;
        this.score = 0;
        this.level = 1;
        this.levelNum = 1;
        this.bombRadiusMultiplier = 1;
        this.currentCombo = 1;
        this.isBossLevel = false;
        this.bossName = 'Леший';
        this.bossMaxHp = 500;
        this.bossCurrentHp = 500;
        
        this.targetTypes = {};
        this.targetProgress = {};
        this.particles = [];
        this.confetti = [];
        this.comboTexts = [];
        this.damageTexts = [];
        
        // Smart Hint Timer
        this.hintPair = null;
        this.hintTimer = null;
        this.animTime = 0;

        this.onStateChange = options.onStateChange || null;
        this.onLevelWin = options.onLevelWin || null;
        this.onLevelLoss = options.onLevelLoss || null;
        this.onBoosterUsed = options.onBoosterUsed || null;
        this.onRuneMaster = options.onRuneMaster || null;
        this.onComboKing = options.onComboKing || null;
        this.catBayunActive = false;
        this.playerSwapMoves = 0;
        this.isBoosterShuffle = false;

        this.initInput();
        this.startParticleLoop();
    }

    safeSound(method) {
        try {
            if (window.gameAudio && typeof window.gameAudio[method] === 'function') {
                window.gameAudio[method]();
            }
        } catch (e) {}
    }

    startLevel(levelNum = 1, heroBonuses = {}) {
        this.level = levelNum;
        this.levelNum = levelNum;
        this.heroBonuses = heroBonuses;
        this.bombRadiusMultiplier = heroBonuses.bombRadiusMultiplier || 1;
        this.currentCombo = 1;
        this.hammerActive = false;
        this.levelFinished = false;
        this.selectedTile = null;
        this.particles = [];
        this.confetti = [];
        this.comboTexts = [];
        this.damageTexts = [];
        this.lightningBeams = [];
        this.clearHint();

        const flags = (window.vkSDK && window.vkSDK.getFlags) ? window.vkSDK.getFlags() : {};
        
        let baseMoves = 26;
        if (flags.difficulty === 'hard') {
            baseMoves = 18;
        } else if (flags.difficulty === 'easy') {
            baseMoves = 32;
        }

        const bonusMoves = (parseInt(flags.extra_moves, 10) || 0) + (heroBonuses.extraMoves || 0);
        this.movesLeft = Math.max(14, baseMoves + bonusMoves - Math.floor(levelNum / 25));
        this.score = 0;
        this.scoreMultiplier = heroBonuses.scoreMultiplier || 1.0;

        // Level Differentiation
        const bossInfo = (typeof window !== 'undefined' && window.LevelMapEngine && typeof window.LevelMapEngine.getBossInfo === 'function')
            ? window.LevelMapEngine.getBossInfo(levelNum)
            : null;

        this.isBossLevel = !!bossInfo || (levelNum % 5 === 0);
        if (this.isBossLevel) {
            if (bossInfo) {
                this.bossName = bossInfo.name;
                this.isChapterBoss = bossInfo.isChapterBoss;
                this.bossMaxHp = bossInfo.hp;
            } else {
                const isChapter = (levelNum % 25 === 0);
                const regIdx = Math.min(Math.floor((levelNum - 1) / 25), 19);
                const bossNames = [
                    'Леший 🌲', 'Водяной 🐸', 'Баба-Яга 🧙‍♀️', 'Змей Горыныч 🐉',
                    'Соловей-Разбойник 🦅', 'Кот Баюн 🐱', 'Птица Сирин 🦚', 'Чернобог 👹',
                    'Морозко ❄️', 'Кощей Бессмертный 💀', 'Хозяйка Медной Горы ⛰️',
                    'Жар-Птица 🔥', 'Полевик 🌾', 'Стрибог 🌬️', 'Вий 🌌',
                    'Змей Велес 🌳', 'Тугарин Змей 🛡️', 'Святогор 🏔️',
                    'Сварог ☀️', 'Чудо-Юдо 👑'
                ];
                this.isChapterBoss = isChapter;
                this.bossName = isChapter ? bossNames[regIdx] : 'Лесной Оборотень 🐺';
                this.bossMaxHp = isChapter ? (250 + levelNum * 25) : (170 + levelNum * 18);
            }
            this.bossCurrentHp = this.bossMaxHp;
            this.targetTypes = { boss: this.bossMaxHp };
            this.targetProgress = { boss: 0 };
        } else if (levelNum % 4 === 0) {
            this.targetTypes = { bramble: 6 + Math.floor(levelNum / 15) };
            this.targetProgress = { bramble: 0 };
        } else if (levelNum % 3 === 0) {
            this.targetTypes = {
                berry: 10 + Math.floor(levelNum / 10),
                grain: 10 + Math.floor(levelNum / 10),
                gem: 8 + Math.floor(levelNum / 12)
            };
            this.targetProgress = { berry: 0, grain: 0, gem: 0 };
        } else if (levelNum % 2 === 0) {
            this.targetTypes = {
                gem: 10 + Math.floor(levelNum / 8),
                grain: 12 + Math.floor(levelNum / 8)
            };
            this.targetProgress = { gem: 0, grain: 0 };
        } else {
            this.targetTypes = {
                wood: 10 + Math.floor(levelNum / 8),
                berry: 12 + Math.floor(levelNum / 8)
            };
            this.targetProgress = { wood: 0, berry: 0 };
        }

        this.catBayunActive = !!heroBonuses.catBayunActive;
        this.playerSwapMoves = 0;

        this.createBoard(heroBonuses.startWithBomb || false, heroBonuses.startWithSun || false);
        let boardTries = 0;
        while (!this.hasPossibleMoves() && boardTries < 15) {
            this.createBoard(heroBonuses.startWithBomb || false, heroBonuses.startWithSun || false);
            boardTries++;
        }
        this.resize();
        this.render();
        this.resetHintTimer();

        if (this.onStateChange) this.onStateChange();
    }

    createBoard(startWithBomb = false, startWithSun = false) {
        this.grid = [];
        const hasBrambles = (this.targetTypes.bramble !== undefined) || (Math.random() < 0.35);

        for (let r = 0; r < this.rows; r++) {
            const row = [];
            for (let c = 0; c < this.cols; c++) {
                let type;
                do {
                    type = this.TYPES[Math.floor(Math.random() * this.TYPES.length)];
                } while (
                    (c >= 2 && row[c-1].type.id === type.id && row[c-2].type.id === type.id) ||
                    (r >= 2 && this.grid[r-1][c].type.id === type.id && this.grid[r-2][c].type.id === type.id)
                );
                
                row.push({
                    r, c,
                    type,
                    x: c * this.tileSize,
                    y: r * this.tileSize,
                    special: null,
                    bramble: (hasBrambles && Math.random() < 0.16) ? true : false
                });
            }
            this.grid.push(row);
        }

        if (startWithSun && this.grid[3] && this.grid[3][3]) {
            this.grid[3][3].special = 'sun';
        } else if (startWithBomb && this.grid[3] && this.grid[3][3]) {
            this.grid[3][3].special = 'bomb';
        }
    }

    resetHintTimer() {
        this.clearHint();
        this.hintTimer = setTimeout(() => {
            this.findAndShowHint();
        }, 5000);
    }

    clearHint() {
        if (this.hintTimer) {
            clearTimeout(this.hintTimer);
            this.hintTimer = null;
        }
        this.hintPair = null;
    }

    findAndShowHint() {
        if (this.animating || this.levelFinished) return;

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.grid[r][c] && this.grid[r][c].bramble) continue;

                if (c < this.cols - 1 && (!this.grid[r][c+1] || !this.grid[r][c+1].bramble)) {
                    if (this.checkPotentialMatch({ r, c }, { r, c: c + 1 })) {
                        this.hintPair = [{ r, c }, { r, c: c + 1 }];
                        return;
                    }
                }
                if (r < this.rows - 1 && (!this.grid[r+1][c] || !this.grid[r+1][c].bramble)) {
                    if (this.checkPotentialMatch({ r, c }, { r: r + 1, c })) {
                        this.hintPair = [{ r, c }, { r: r + 1, c }];
                        return;
                    }
                }
            }
        }
    }

    checkPotentialMatch(t1, t2) {
        if (!this.grid[t1.r] || !this.grid[t1.r][t1.c] || !this.grid[t2.r] || !this.grid[t2.r][t2.c]) return false;

        const temp = this.grid[t1.r][t1.c].type;
        this.grid[t1.r][t1.c].type = this.grid[t2.r][t2.c].type;
        this.grid[t2.r][t2.c].type = temp;

        const matches = this.findMatchGroups();

        this.grid[t2.r][t2.c].type = this.grid[t1.r][t1.c].type;
        this.grid[t1.r][t1.c].type = temp;

        return matches.length > 0;
    }

    hasPossibleMoves() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const t1 = this.grid[r] ? this.grid[r][c] : null;
                if (!t1 || t1.bramble) continue;

                if (t1.special) return true;

                if (c < this.cols - 1) {
                    const t2 = this.grid[r][c + 1];
                    if (t2 && !t2.bramble) {
                        if (t2.special || this.checkPotentialMatch({ r, c }, { r, c: c + 1 })) {
                            return true;
                        }
                    }
                }
                if (r < this.rows - 1) {
                    const t3 = this.grid[r + 1][c];
                    if (t3 && !t3.bramble) {
                        if (t3.special || this.checkPotentialMatch({ r, c }, { r: r + 1, c })) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    async autoShuffle() {
        if (this.animating || this.levelFinished || this.movesLeft <= 0) return;
        this.animating = true;
        const fromBooster = this.isBoosterShuffle || false;
        this.isBoosterShuffle = false;
        try {
            this.clearHint();
            const text = fromBooster ? '🌪️ ВИХРЬ! ПЕРЕМЕШИВАНИЕ...' : '🔄 НЕТ ХОДОВ! ПЕРЕМЕШИВАНИЕ...';
            this.addComboText(text, this.canvas.width / 2, this.canvas.height / 2);
            this.safeSound('playSwap');
            this.screenShake = 12;
            await this.delay(500);

            const tiles = [];
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    if (this.grid[r][c] && !this.grid[r][c].bramble) {
                        tiles.push({ type: this.grid[r][c].type, special: this.grid[r][c].special });
                    }
                }
            }

            let attempts = 0;
            do {
                for (let i = tiles.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
                }

                let idx = 0;
                for (let r = 0; r < this.rows; r++) {
                    for (let c = 0; c < this.cols; c++) {
                        if (this.grid[r][c] && !this.grid[r][c].bramble) {
                            this.grid[r][c].type = tiles[idx].type;
                            this.grid[r][c].special = tiles[idx].special;
                            idx++;
                        }
                    }
                }
                attempts++;
            } while ((this.findMatchGroups().length > 0 || !this.hasPossibleMoves()) && attempts < 40);
        } finally {
            this.animating = false;
            this.render();
            this.resetHintTimer();
        }
    }

    resize() {
        const parent = this.canvas.parentElement;
        let size = 520;
        if (parent && parent.clientWidth > 100 && parent.clientHeight > 100) {
            size = Math.min(parent.clientWidth - 20, parent.clientHeight - 20, 1020);
        } else {
            size = Math.min(window.innerWidth - 24, window.innerHeight - 160, 1020);
        }
        if (size <= 0) size = 480;

        this.canvas.width = size;
        this.canvas.height = size;
        this.tileSize = size / this.cols;

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.grid[r] && this.grid[r][c]) {
                    this.grid[r][c].x = c * this.tileSize;
                    this.grid[r][c].y = r * this.tileSize;
                }
            }
        }
        this.render();
    }

    initInput() {
        let isInputDown = false;
        let startX = 0, startY = 0;
        let startTile = null;
        let dragThreshold = 18;

        const getTileFromCoords = (clientX, clientY) => {
            const rect = this.canvas.getBoundingClientRect();
            const c = Math.floor((clientX - rect.left) / this.tileSize);
            const r = Math.floor((clientY - rect.top) / this.tileSize);
            if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
                return { r, c };
            }
            return null;
        };

        const handleDown = (clientX, clientY) => {
            this.resetHintTimer();
            if (this.animating || this.levelFinished || this.movesLeft <= 0) return;
            const tile = getTileFromCoords(clientX, clientY);
            if (!tile) return;

            if (this.hammerActive) {
                this.hammerActive = false;
                this.canvas.style.cursor = 'default';
                if (this.onBoosterUsed) this.onBoosterUsed('hammer');
                this.destroyTile(tile.r, tile.c);
                return;
            }

            // Brambles cannot be selected or moved!
            if (this.grid[tile.r][tile.c] && this.grid[tile.r][tile.c].bramble) {
                this.addComboText('🌿 Опутано чарами!', tile.c * this.tileSize + this.tileSize / 2, tile.r * this.tileSize);
                return;
            }

            isInputDown = true;
            startX = clientX;
            startY = clientY;
            startTile = tile;
        };

        const handleMove = (clientX, clientY) => {
            if (!isInputDown || !startTile || this.animating || this.levelFinished || this.movesLeft <= 0) return;
            const dx = clientX - startX;
            const dy = clientY - startY;

            if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
                let targetR = startTile.r;
                let targetC = startTile.c;
                if (Math.abs(dx) > Math.abs(dy)) {
                    targetC += (dx > 0 ? 1 : -1);
                } else {
                    targetR += (dy > 0 ? 1 : -1);
                }

                if (targetR >= 0 && targetR < this.rows && targetC >= 0 && targetC < this.cols) {
                    if (this.grid[targetR][targetC] && this.grid[targetR][targetC].bramble) {
                        this.addComboText('🌿 Ячейка заблокирована!', targetC * this.tileSize + this.tileSize / 2, targetR * this.tileSize);
                    } else {
                        this.selectedTile = null;
                        this.trySwap(startTile, { r: targetR, c: targetC });
                    }
                }

                isInputDown = false;
                startTile = null;
            }
        };

        const handleUp = (clientX, clientY) => {
            if (isInputDown && startTile) {
                if (!this.selectedTile) {
                    this.selectedTile = startTile;
                    this.render();
                } else {
                    const dr = Math.abs(this.selectedTile.r - startTile.r);
                    const dc = Math.abs(this.selectedTile.c - startTile.c);
                    if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
                        this.trySwap(this.selectedTile, startTile);
                    }
                    this.selectedTile = null;
                    this.render();
                }
            }
            isInputDown = false;
            startTile = null;
        };

        this.canvas.addEventListener('mousedown', (e) => handleDown(e.clientX, e.clientY));
        window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
        window.addEventListener('mouseup', (e) => handleUp(e.clientX, e.clientY));

        this.canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) handleDown(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                if (isInputDown) {
                    try { e.preventDefault(); } catch (err) {}
                }
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: false });
        window.addEventListener('touchend', (e) => {
            if (e.changedTouches.length > 0) handleUp(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        });
        window.addEventListener('touchcancel', () => {
            isInputDown = false;
            startTile = null;
            this.render();
        });
    }

    async destroyTile(r, c) {
        if (!this.grid[r] || !this.grid[r][c]) return;
        this.animating = true;
        try {
            this.safeSound('playExplosion');
            this.screenShake = 15;
            const tile = this.grid[r][c];

            this.recordTileMatch(tile);
            this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, tile.type.color);
            this.grid[r][c] = null;

            if (this.onStateChange) this.onStateChange();
            await this.delay(180);
            await this.applyGravity();
            await this.processMatches();
            if (!this.levelFinished && this.movesLeft > 0 && !this.hasPossibleMoves()) {
                await this.autoShuffle();
            }
            this.checkLevelEnd();
        } finally {
            this.animating = false;
            this.render();
            this.resetHintTimer();
        }
    }

    recordTileMatch(tile, combo = 1) {
        if (!tile) return;
        if (this.targetProgress[tile.type.id] !== undefined) {
            this.targetProgress[tile.type.id]++;
        }
        if (tile.bramble) {
            if (this.targetProgress.bramble !== undefined) this.targetProgress.bramble++;
            tile.bramble = false;
        }
        if (this.isBossLevel) {
            const baseDmg = 15 + Math.floor(this.level * 0.8);
            const dmg = Math.floor(baseDmg * (1 + (combo - 1) * 0.35));
            this.bossCurrentHp = Math.max(0, this.bossCurrentHp - dmg);
            this.targetProgress.boss = this.bossMaxHp - this.bossCurrentHp;
            this.addDamageText(`-${dmg} HP`, tile.c * this.tileSize + this.tileSize / 2, tile.r * this.tileSize);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async trySwap(t1, t2) {
        if (!t1 || !t2) return;
        if (!this.grid[t1.r] || !this.grid[t1.r][t1.c] || !this.grid[t2.r] || !this.grid[t2.r][t2.c]) return;

        this.animating = true;
        this.clearHint();
        this.safeSound('playSwap');

        try {
            const tileA = this.grid[t1.r][t1.c];
            const tileB = this.grid[t2.r][t2.c];

            if (tileA.special && tileB.special) {
                this.movesLeft--;
                this.playerSwapMoves = (this.playerSwapMoves || 0) + 1;
                await this.triggerSpecialCombo(tileA, tileB);
                await this.checkPetSkill();
                return;
            }

            const isSunA = tileA.special === 'sun';
            const isSunB = tileB.special === 'sun';

            if ((isSunA && !tileB.special) || (isSunB && !tileA.special)) {
                this.movesLeft--;
                this.playerSwapMoves = (this.playerSwapMoves || 0) + 1;
                const sunTile = isSunA ? tileA : tileB;
                const regularTile = isSunA ? tileB : tileA;
                const targetTypeId = regularTile.type.id;

                if (this.onRuneMaster) this.onRuneMaster();
                this.screenShake = 22;
                this.safeSound('playExplosion');
                this.addComboText('☀️ СОЛНЦЕВОРОТ! ☀️', this.canvas.width / 2, this.canvas.height / 2);

                // Destroy the Sun Rune itself
                this.recordTileMatch(sunTile, 1);
                this.addExplosionParticles(sunTile.c * this.tileSize + this.tileSize / 2, sunTile.r * this.tileSize + this.tileSize / 2, '#FFD700');
                this.grid[sunTile.r][sunTile.c] = null;

                let destroyedCount = 1;
                // Destroy all tiles of that regular tile's type on the board
                for (let r = 0; r < this.rows; r++) {
                    for (let c = 0; c < this.cols; c++) {
                        const t = this.grid[r][c];
                        if (t && t.type && t.type.id === targetTypeId) {
                            this.recordTileMatch(t, 1);
                            this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, t.type.color || '#FFD700');
                            this.grid[r][c] = null;
                            destroyedCount++;
                        }
                    }
                }

                // Add points for destroyed tiles
                const points = Math.floor(destroyedCount * 25 * (this.scoreMultiplier || 1.0));
                this.score += points;

                if (this.onStateChange) this.onStateChange();
                await this.delay(260);
                await this.applyGravity();
                await this.processMatches();
                await this.checkPetSkill();
                if (!this.levelFinished && this.movesLeft > 0 && !this.hasPossibleMoves()) {
                    await this.autoShuffle();
                }
                return;
            }

            const temp = tileA.type;
            const tempSpecial = tileA.special;

            tileA.type = tileB.type;
            tileA.special = tileB.special;

            tileB.type = temp;
            tileB.special = tempSpecial;

            this.render();

            const matchGroups = this.findMatchGroups();
            if (matchGroups.length > 0) {
                this.movesLeft--;
                this.playerSwapMoves = (this.playerSwapMoves || 0) + 1;
                await this.delay(160);
                await this.processMatches(matchGroups, { r: t2.r, c: t2.c });
                await this.checkPetSkill();
                if (!this.levelFinished && this.movesLeft > 0 && !this.hasPossibleMoves()) {
                    await this.autoShuffle();
                }
            } else {
                await this.delay(180);
                tileB.type = tileA.type;
                tileB.special = tileA.special;

                tileA.type = temp;
                tileA.special = tempSpecial;
            }
        } finally {
            this.animating = false;
            this.render();
            this.checkLevelEnd();
            this.resetHintTimer();
        }
    }

    async checkPetSkill() {
        if (this.catBayunActive && !this.levelFinished && this.playerSwapMoves > 0 && this.playerSwapMoves % 7 === 0) {
            await this.triggerPetLightning();
        }
    }

    async triggerPetLightning() {
        if (this.levelFinished) return;
        const validTiles = [];
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.grid[r][c] && !this.grid[r][c].bramble) validTiles.push({ r, c });
            }
        }
        if (validTiles.length === 0) {
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    if (this.grid[r][c]) validTiles.push({ r, c });
                }
            }
        }
        if (validTiles.length === 0) return;
        const target = validTiles[Math.floor(Math.random() * validTiles.length)];
        const r = target.r;
        const c = target.c;

        this.screenShake = 18;
        this.safeSound('playExplosion');
        this.addComboText('⚡ КОТ БАЮН: МОЛНИЯ! ⚡', c * this.tileSize + this.tileSize / 2, r * this.tileSize);
        this.lightningBeams.push({
            type: 'cross', r, c, life: 1.0
        });

        const extraClearedTiles = [];
        for (let col = 0; col < this.cols; col++) {
            if (this.grid[r][col] && !extraClearedTiles.some(t => t.r === r && t.c === col)) {
                extraClearedTiles.push({ r, c: col });
            }
        }
        for (let row = 0; row < this.rows; row++) {
            if (this.grid[row][c] && !extraClearedTiles.some(t => t.r === row && t.c === c)) {
                extraClearedTiles.push({ r: row, c });
            }
        }

        extraClearedTiles.forEach(({ r: er, c: ec }) => {
            const extraTile = this.grid[er][ec];
            if (extraTile) {
                this.recordTileMatch(extraTile, 1);
                this.addExplosionParticles(ec * this.tileSize + this.tileSize / 2, er * this.tileSize + this.tileSize / 2, extraTile.type.color);
                this.grid[er][ec] = null;
            }
        });

        if (this.onRuneMaster) this.onRuneMaster();
        if (this.onStateChange) this.onStateChange();

        await this.delay(240);
        await this.applyGravity();
        await this.processMatches();
    }

    async triggerSpecialCombo(tileA, tileB) {
        if (this.onRuneMaster) this.onRuneMaster();
        this.screenShake = 25;
        this.safeSound('playExplosion');

        if (tileA.special === 'bomb' && tileB.special === 'bomb') {
            this.addComboText('МЕГА-ВЗРЫВ ПЕРУНА! 💣💥', this.canvas.width / 2, this.canvas.height / 2);
            for (let r = Math.max(0, tileA.r - 2); r <= Math.min(this.rows - 1, tileA.r + 2); r++) {
                for (let c = Math.max(0, tileA.c - 2); c <= Math.min(this.cols - 1, tileA.c + 2); c++) {
                    if (this.grid[r][c]) {
                        this.recordTileMatch(this.grid[r][c]);
                        this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, '#FF4D6D');
                        this.grid[r][c] = null;
                    }
                }
            }
        } else if ((tileA.special === 'bomb' && tileB.special === 'lightning') || (tileA.special === 'lightning' && tileB.special === 'bomb')) {
            this.addComboText('ГРОМОВОЙ ШТОРМ! ⚡💣', this.canvas.width / 2, this.canvas.height / 2);
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    if (Math.abs(r - tileA.r) <= 1 || Math.abs(c - tileA.c) <= 1) {
                        if (this.grid[r][c]) {
                            this.recordTileMatch(this.grid[r][c]);
                            this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, '#00B4D8');
                            this.grid[r][c] = null;
                        }
                    }
                }
            }
        } else {
            this.addComboText('СОЛНЦЕВОРОТ СВАРОГА! ☀️✨', this.canvas.width / 2, this.canvas.height / 2);
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    if (this.grid[r][c]) {
                        this.recordTileMatch(this.grid[r][c]);
                        this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, '#FFD700');
                        this.grid[r][c] = null;
                    }
                }
            }
        }

        if (this.onStateChange) this.onStateChange();
        await this.delay(260);
        await this.applyGravity();
        await this.processMatches();
        if (!this.levelFinished && this.movesLeft > 0 && !this.hasPossibleMoves()) {
            await this.autoShuffle();
        }
    }

    findMatchGroups() {
        const groups = [];

        // 1. Horizontal continuous scan
        for (let r = 0; r < this.rows; r++) {
            let startCol = 0;
            while (startCol < this.cols) {
                if (!this.grid[r] || !this.grid[r][startCol]) {
                    startCol++;
                    continue;
                }
                const currentType = this.grid[r][startCol].type.id;
                let endCol = startCol + 1;
                while (endCol < this.cols && this.grid[r][endCol] && this.grid[r][endCol].type.id === currentType) {
                    endCol++;
                }
                const len = endCol - startCol;
                if (len >= 3) {
                    const group = [];
                    for (let c = startCol; c < endCol; c++) {
                        group.push({ r, c });
                    }
                    groups.push(group);
                }
                startCol = endCol;
            }
        }

        // 2. Vertical continuous scan
        for (let c = 0; c < this.cols; c++) {
            let startRow = 0;
            while (startRow < this.rows) {
                if (!this.grid[startRow] || !this.grid[startRow][c]) {
                    startRow++;
                    continue;
                }
                const currentType = this.grid[startRow][c].type.id;
                let endRow = startRow + 1;
                while (endRow < this.rows && this.grid[endRow] && this.grid[endRow][c] && this.grid[endRow][c].type.id === currentType) {
                    endRow++;
                }
                const len = endRow - startRow;
                if (len >= 3) {
                    const group = [];
                    for (let r = startRow; r < endRow; r++) {
                        group.push({ r, c });
                    }
                    groups.push(group);
                }
                startRow = endRow;
            }
        }

        return groups;
    }

    async processMatches(initialGroups = null, spawnLocation = null) {
        let groups = initialGroups || this.findMatchGroups();
        let combo = 1;

        while (groups.length > 0) {
            this.currentCombo = combo;
            this.safeSound('playMatch');

            const matchMap = new Map();
            groups.forEach(group => {
                const len = group.length;
                let targetSpawn = group[0];
                if (spawnLocation) {
                    const found = group.find(t => t.r === spawnLocation.r && t.c === spawnLocation.c);
                    if (found) targetSpawn = found;
                }

                group.forEach(({ r, c }) => {
                    const key = `${r},${c}`;
                    const isSpawnPos = (r === targetSpawn.r && c === targetSpawn.c);
                    if (!matchMap.has(key)) {
                        matchMap.set(key, { r, c, isSpawnPos, groupLen: len });
                    } else {
                        const cur = matchMap.get(key);
                        cur.groupLen = Math.max(cur.groupLen, len);
                        if (isSpawnPos) cur.isSpawnPos = true;
                    }
                });
            });

            const uniqueMatches = Array.from(matchMap.values());
            const points = Math.floor(uniqueMatches.length * 25 * combo * (this.scoreMultiplier || 1.0));
            this.score += points;

            if (combo >= 2) {
                const phrases = ['💥 ЛЮТО!', '⚡ БОГАТЫРСКИЙ УДАР!', '👑 ПЕРУНОВА СИЛА!', '☀️ ВЕЛИКИЙ ПОДВИГ!', '✨ СЛАВА РУСИ!'];
                const text = phrases[Math.min(combo - 2, phrases.length - 1)];
                const mid = uniqueMatches[Math.floor(uniqueMatches.length / 2)];
                this.addComboText(text, mid.c * this.tileSize + this.tileSize / 2, mid.r * this.tileSize);
            }
            if (combo >= 3 && this.onComboKing) {
                this.onComboKing(combo);
            }

            // Snap adjacent bramble vines
            uniqueMatches.forEach(({ r, c }) => {
                const adjacents = [
                    { r: r - 1, c }, { r: r + 1, c },
                    { r, c: c - 1 }, { r, c: c + 1 }
                ];
                adjacents.forEach(adj => {
                    if (adj.r >= 0 && adj.r < this.rows && adj.c >= 0 && adj.c < this.cols) {
                        const target = this.grid[adj.r][adj.c];
                        if (target && target.bramble) {
                            target.bramble = false;
                            if (this.targetProgress.bramble !== undefined) this.targetProgress.bramble++;
                            this.addExplosionParticles(adj.c * this.tileSize + this.tileSize / 2, adj.r * this.tileSize + this.tileSize / 2, '#52B788');
                            this.addComboText('🌿 Путы сорваны!', adj.c * this.tileSize + this.tileSize / 2, adj.r * this.tileSize);
                        }
                    }
                });
            });

            // Process Active Rune Destruction
            const extraClearedTiles = [];

            uniqueMatches.forEach(({ r, c, isSpawnPos, groupLen }) => {
                const tile = this.grid[r][c];
                if (tile) {
                    this.recordTileMatch(tile, combo);

                    // 1. Trigger Existing Lightning Rune on Match
                    if (tile.special === 'lightning' && !isSpawnPos) {
                        if (this.onRuneMaster) this.onRuneMaster();
                        this.screenShake = 18;
                        this.safeSound('playExplosion');
                        this.addComboText('⚡ МОЛНИЯ ПЕРУНА! ⚡', c * this.tileSize + this.tileSize / 2, r * this.tileSize);
                        
                        this.lightningBeams.push({
                            type: 'cross', r, c, life: 1.0
                        });

                        // Clear entire row
                        for (let col = 0; col < this.cols; col++) {
                            if (this.grid[r][col] && !extraClearedTiles.some(t => t.r === r && t.c === col)) {
                                extraClearedTiles.push({ r, c: col });
                            }
                        }
                        // Clear entire column
                        for (let row = 0; row < this.rows; row++) {
                            if (this.grid[row][c] && !extraClearedTiles.some(t => t.r === row && t.c === c)) {
                                extraClearedTiles.push({ r: row, c });
                            }
                        }
                    }
                    // 2. Trigger Existing Bomb Rune on Match
                    else if (tile.special === 'bomb' && !isSpawnPos) {
                        if (this.onRuneMaster) this.onRuneMaster();
                        this.screenShake = 22;
                        this.safeSound('playExplosion');
                        this.addComboText('💣 ВЗРЫВ КУЗНИЦЫ! 💣', c * this.tileSize + this.tileSize / 2, r * this.tileSize);

                        const radius = (this.bombRadiusMultiplier && this.bombRadiusMultiplier > 1) ? 2 : 1;
                        for (let br = Math.max(0, r - radius); br <= Math.min(this.rows - 1, r + radius); br++) {
                            for (let bc = Math.max(0, c - radius); bc <= Math.min(this.cols - 1, c + radius); bc++) {
                                if (this.grid[br][bc] && !extraClearedTiles.some(t => t.r === br && t.c === bc)) {
                                    extraClearedTiles.push({ r: br, c: bc });
                                }
                            }
                        }
                    }
                    // 3. Trigger Existing Sun Rune on Match
                    else if (tile.special === 'sun' && !isSpawnPos) {
                        if (this.onRuneMaster) this.onRuneMaster();
                        this.screenShake = 20;
                        this.safeSound('playExplosion');
                        this.addComboText('☀️ СОЛНЦЕВОРОТ! ☀️', this.canvas.width / 2, this.canvas.height / 2);

                        const zapType = tile.type.id;
                        for (let sr = 0; sr < this.rows; sr++) {
                            for (let sc = 0; sc < this.cols; sc++) {
                                if (this.grid[sr][sc] && this.grid[sr][sc].type.id === zapType) {
                                    if (!extraClearedTiles.some(t => t.r === sr && t.c === sc)) {
                                        extraClearedTiles.push({ r: sr, c: sc });
                                    }
                                }
                            }
                        }
                    }

                    // Spawn New Runes or Explode
                    if (isSpawnPos && groupLen === 4) {
                        tile.special = 'lightning';
                        if (this.onRuneMaster) this.onRuneMaster();
                        this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, '#00B4D8');
                        this.addComboText('⚡ СОЗДАНА РУНА МОЛНИИ!', c * this.tileSize + this.tileSize / 2, r * this.tileSize);
                    } else if (isSpawnPos && groupLen >= 5) {
                        tile.special = 'sun';
                        if (this.onRuneMaster) this.onRuneMaster();
                        this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, '#FFD700');
                        this.addComboText('☀️ СОЗДАН СОЛНЦЕВОРОТ!', c * this.tileSize + this.tileSize / 2, r * this.tileSize);
                    } else {
                        this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, tile.type.color);
                        this.grid[r][c] = null;
                    }
                }
            });

            // Clean up extra rune cleared tiles
            extraClearedTiles.forEach(({ r, c }) => {
                const extraTile = this.grid[r][c];
                if (extraTile) {
                    this.recordTileMatch(extraTile, combo);
                    this.addExplosionParticles(c * this.tileSize + this.tileSize / 2, r * this.tileSize + this.tileSize / 2, extraTile.type.color);
                    this.grid[r][c] = null;
                }
            });

            if (this.onStateChange) this.onStateChange();
            
            await this.delay(240);
            await this.applyGravity();

            spawnLocation = null;
            groups = this.findMatchGroups();
            combo++;
            if (groups.length > 0) {
                await this.delay(180);
            }
        }
        this.currentCombo = 1;
    }

    applyGravity() {
        return new Promise(resolve => {
            for (let c = 0; c < this.cols; c++) {
                let emptyRow = this.rows - 1;
                for (let r = this.rows - 1; r >= 0; r--) {
                    if (this.grid[r][c] !== null) {
                        if (r !== emptyRow) {
                            this.grid[emptyRow][c] = this.grid[r][c];
                            this.grid[emptyRow][c].r = emptyRow;
                            this.grid[r][c] = null;
                        }
                        emptyRow--;
                    }
                }
                for (let r = emptyRow; r >= 0; r--) {
                    const type = this.TYPES[Math.floor(Math.random() * this.TYPES.length)];
                    this.grid[r][c] = {
                        r, c,
                        type,
                        x: c * this.tileSize,
                        y: r * this.tileSize,
                        special: (Math.random() < 0.04) ? 'bomb' : null,
                        bramble: false
                    };
                }
            }
            this.render();
            setTimeout(resolve, 260);
        });
    }

    addExplosionParticles(x, y, color) {
        for (let i = 0; i < 10; i++) {
            this.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 7,
                vy: (Math.random() - 0.5) * 7,
                size: Math.random() * 7 + 3,
                color,
                life: 1.0
            });
        }
    }

    spawnWinConfetti() {
        for (let i = 0; i < 60; i++) {
            this.confetti.push({
                x: Math.random() * this.canvas.width,
                y: -20,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 3 + 2,
                size: Math.random() * 6 + 4,
                color: ['#FFD700', '#FF4D6D', '#00B4D8', '#40916C', '#FF6B35', '#FFFFFF'][Math.floor(Math.random() * 6)],
                life: 1.0
            });
        }
    }

    addComboText(text, x, y) {
        this.comboTexts.push({
            text,
            x: Math.max(120, Math.min(this.canvas.width - 120, x)),
            y: Math.max(80, Math.min(this.canvas.height - 80, y)),
            alpha: 1.0,
            scale: 0.5,
            targetScale: 1.12,
            life: 50
        });
    }

    addDamageText(text, x, y) {
        this.damageTexts.push({
            text, x, y, alpha: 1.0, scale: 1.0, life: 40
        });
    }

    startParticleLoop() {
        let cleanupFrames = 0;
        const loop = (time) => {
            this.animTime = time;
            const hasActiveEffects = (
                this.particles.length > 0 ||
                this.confetti.length > 0 ||
                this.comboTexts.length > 0 ||
                this.damageTexts.length > 0 ||
                this.screenShake > 0 ||
                this.lightningBeams.length > 0 ||
                this.isSwapping ||
                this.isFalling ||
                this.hintPair != null
            );

            if (hasActiveEffects) {
                cleanupFrames = 3; // Keep rendering 3 extra clean frames when effects finish
                this.render();
            } else if (cleanupFrames > 0) {
                cleanupFrames--;
                this.render();
            }
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    checkLevelEnd() {
        if (this.levelFinished) return;

        let won = true;
        for (let key in this.targetTypes) {
            if ((this.targetProgress[key] || 0) < this.targetTypes[key]) {
                won = false;
                break;
            }
        }

        if (won) {
            this.levelFinished = true;
            this.safeSound('playWin');
            this.spawnWinConfetti();
            if (this.onLevelWin) this.onLevelWin({ score: this.score });
        } else if (this.movesLeft <= 0) {
            this.levelFinished = true;
            if (this.onLevelLoss) this.onLevelLoss();
        }
    }

    useBooster(boosterId) {
        if (this.animating || (this.levelFinished && boosterId !== 'addMoves')) return;

        if (boosterId === 'hammer') {
            if (this.hammerActive) {
                this.hammerActive = false;
                this.canvas.style.cursor = 'default';
                window.showToast && window.showToast('🔨 Режим молота отменен');
                return;
            }
            this.hammerActive = true;
            this.canvas.style.cursor = 'crosshair';
            window.showToast && window.showToast('🔨 Нажмите на любую фишку на доске, чтобы разбить ее!');
        } else if (boosterId === 'shuffle') {
            this.safeSound('playSwap');
            if (this.onBoosterUsed) this.onBoosterUsed('shuffle');
            this.isBoosterShuffle = true;
            this.autoShuffle();
        } else if (boosterId === 'addMoves') {
            this.movesLeft += 5;
            this.levelFinished = false;
            const resModal = document.getElementById('modal-result');
            if (resModal) resModal.classList.add('hidden');
            if (window.vkSDK) window.vkSDK.startGameplay();
            if (this.onStateChange) this.onStateChange();
            this.render();
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        if (this.screenShake > 0) {
            const shakeX = (Math.random() - 0.5) * this.screenShake;
            const shakeY = (Math.random() - 0.5) * this.screenShake;
            this.ctx.translate(shakeX, shakeY);
            this.screenShake *= 0.85;
            if (this.screenShake < 0.5) this.screenShake = 0;
        }

        // 1. Wooden Board Background
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const isEven = (r + c) % 2 === 0;
                this.ctx.fillStyle = isEven ? '#2C1810' : '#1A0E08';
                this.ctx.fillRect(c * this.tileSize, r * this.tileSize, this.tileSize, this.tileSize);

                this.ctx.strokeStyle = '#3E2415';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(c * this.tileSize, r * this.tileSize, this.tileSize, this.tileSize);
            }
        }

        // 2. Render Slavic Vector Tokens
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const tile = this.grid[r] ? this.grid[r][c] : null;
                if (!tile) continue;

                const isSelected = this.selectedTile && this.selectedTile.r === r && this.selectedTile.c === c;
                const isHinted = this.hintPair && this.hintPair.some(p => p.r === r && p.c === c);

                if (window.SlavicArt) {
                    window.SlavicArt.drawTile(
                        this.ctx,
                        tile.type.id,
                        c * this.tileSize,
                        r * this.tileSize,
                        this.tileSize,
                        isSelected,
                        tile.special,
                        tile.bramble
                    );
                }

                // Smart Inactivity Hint Glow
                if (isHinted && !isSelected) {
                    const pulse = Math.sin(this.animTime * 0.008) * 0.4 + 0.6;
                    this.ctx.strokeStyle = `rgba(255, 215, 0, ${pulse})`;
                    this.ctx.lineWidth = 3;
                    this.ctx.strokeRect(c * this.tileSize + 3, r * this.tileSize + 3, this.tileSize - 6, this.tileSize - 6);
                }
            }
        }

        // 3. Lightning Beams
        for (let i = this.lightningBeams.length - 1; i >= 0; i--) {
            const lb = this.lightningBeams[i];
            this.ctx.save();
            this.ctx.fillStyle = `rgba(0, 180, 216, ${lb.life * 0.7})`;
            // Vertical beam
            this.ctx.fillRect(lb.c * this.tileSize + this.tileSize * 0.2, 0, this.tileSize * 0.6, this.canvas.height);
            // Horizontal beam
            this.ctx.fillRect(0, lb.r * this.tileSize + this.tileSize * 0.2, this.canvas.width, this.tileSize * 0.6);
            this.ctx.restore();

            lb.life -= 0.1;
            if (lb.life <= 0) this.lightningBeams.splice(i, 1);
        }

        // 4. Floating Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.globalAlpha = 1.0;

            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.035;
            if (p.life <= 0) this.particles.splice(i, 1);
        }

        // 5. Confetti Particles
        for (let i = this.confetti.length - 1; i >= 0; i--) {
            const cf = this.confetti[i];
            this.ctx.fillStyle = cf.color;
            this.ctx.globalAlpha = cf.life;
            this.ctx.fillRect(cf.x, cf.y, cf.size, cf.size * 0.6);
            this.ctx.globalAlpha = 1.0;

            cf.x += cf.vx;
            cf.y += cf.vy;
            cf.life -= 0.015;
            if (cf.life <= 0) this.confetti.splice(i, 1);
        }

        // 6. Long-Lasting Animated Combo Text Banner
        for (let i = this.comboTexts.length - 1; i >= 0; i--) {
            const ct = this.comboTexts[i];
            if (ct.life <= 0 || ct.alpha <= 0) {
                this.comboTexts.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.globalAlpha = Math.max(0, Math.min(1, ct.alpha));
            this.ctx.translate(ct.x, ct.y);
            this.ctx.scale(ct.scale, ct.scale);

            this.ctx.fillStyle = 'rgba(26, 14, 8, 0.88)';
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            if (this.ctx.roundRect) {
                this.ctx.roundRect(-120, -22, 240, 44, [10]);
            } else {
                this.ctx.rect(-120, -22, 240, 44);
            }
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.font = 'bold 18px "Russo One", sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = '#FFD700';
            this.ctx.shadowColor = '#000000';
            this.ctx.shadowBlur = 8;
            this.ctx.fillText(ct.text, 0, 0);
            this.ctx.restore();

            ct.y -= 0.6;
            ct.scale = Math.min(ct.targetScale, ct.scale + 0.08);
            ct.life--;
            if (ct.life < 20) {
                ct.alpha -= 0.05;
            }
        }

        // 7. Floating Boss Damage Texts
        for (let i = this.damageTexts.length - 1; i >= 0; i--) {
            const dt = this.damageTexts[i];
            this.ctx.save();
            this.ctx.translate(dt.x, dt.y);
            this.ctx.font = 'bold 18px "Russo One", sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#E63946';
            this.ctx.shadowColor = '#000000';
            this.ctx.shadowBlur = 6;
            this.ctx.globalAlpha = dt.alpha;
            this.ctx.fillText(dt.text, 0, 0);
            this.ctx.restore();

            dt.y -= 0.8;
            dt.life--;
            if (dt.life < 20) {
                dt.alpha -= 0.05;
            }
            if (dt.life <= 0 || dt.alpha <= 0) this.damageTexts.splice(i, 1);
        }

        this.ctx.restore();
    }
}

window.MatchThreeEngine = MatchThreeEngine;
