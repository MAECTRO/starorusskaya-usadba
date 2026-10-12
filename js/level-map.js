class LevelMapEngine {
    constructor(containerEl, options = {}) {
        this.container = containerEl;
        this.onSelectLevel = options.onSelectLevel || null;
        this.totalLevels = 500;
        this.selectedRegionIdx = 0;

        this.regions = [
            { id: 1, name: '🌲 1. Зачарованная Дубрава', from: 1, to: 25, boss: 'Леший', bg: '#2D6A4F' },
            { id: 2, name: '🐸 2. Болота и Топи', from: 26, to: 50, boss: 'Водяной', bg: '#1B4332' },
            { id: 3, name: '🧙‍♀️ 3. Дремучий Бор', from: 51, to: 75, boss: 'Баба-Яга', bg: '#4A2A0C' },
            { id: 4, name: '🐉 4. Калинов Мост', from: 76, to: 100, boss: 'Змей Горыныч', bg: '#780000' },
            { id: 5, name: '🦅 5. Соловьиная Чаща', from: 101, to: 125, boss: 'Соловей-Разбойник', bg: '#5C3A21' },
            { id: 6, name: '🐱 6. Лукоморье Синее', from: 126, to: 150, boss: 'Кот Баюн', bg: '#0077B6' },
            { id: 7, name: '🦚 7. Ирийский Сад', from: 151, to: 175, boss: 'Птица Сирин', bg: '#7209B7' },
            { id: 8, name: '⚡ 8. Перуновы Скалы', from: 176, to: 200, boss: 'Чернобог', bg: '#37474F' },
            { id: 9, name: '❄️ 9. Ледяное Царство', from: 201, to: 225, boss: 'Морозко', bg: '#457B9D' },
            { id: 10, name: '💀 10. Кощеевы Чертоги', from: 226, to: 250, boss: 'Кощей Бессмертный', bg: '#2B2D42' },
            { id: 11, name: '⛰️ 11. Медная Гора', from: 251, to: 275, boss: 'Хозяйка Медной Горы', bg: '#1B4332' },
            { id: 12, name: '🔥 12. Огненное Царство', from: 276, to: 300, boss: 'Жар-Птица', bg: '#D00000' },
            { id: 13, name: '🌾 13. Золотые Поля', from: 301, to: 325, boss: 'Полевик', bg: '#E09F3E' },
            { id: 14, name: '🌬️ 14. Стрибожьи Ветры', from: 326, to: 350, boss: 'Стрибог', bg: '#4A90E2' },
            { id: 15, name: '🌌 15. Навьи Тропы', from: 351, to: 375, boss: 'Вий', bg: '#3D0066' },
            { id: 16, name: '🌳 16. Мировое Древо', from: 376, to: 400, boss: 'Змей Велес', bg: '#2D6A4F' },
            { id: 17, name: '🛡️ 17. Застава Богатырская', from: 401, to: 425, boss: 'Тугарин Змей', bg: '#8B5A2B' },
            { id: 18, name: '🏔️ 18. Рифейские Горы', from: 426, to: 450, boss: 'Святогор', bg: '#546E7A' },
            { id: 19, name: '☀️ 19. Сварожья Кузница', from: 451, to: 475, boss: 'Сварог', bg: '#FF6B35' },
            { id: 20, name: '👑 20. Царь-Град Беловодье', from: 476, to: 500, boss: 'Чудо-Юдо', bg: '#FFD700' }
        ];
    }

    static getBossInfo(levelNum) {
        const isBoss = (levelNum % 5 === 0);
        if (!isBoss) return null;

        const isChapterBoss = (levelNum % 25 === 0);
        const regionIdx = Math.min(Math.floor((levelNum - 1) / 25), 19);
        const stepInRegion = ((levelNum - 1) % 25) + 1; // 5, 10, 15, 20, 25

        const chapterBosses = [
            'Леший 🌲', 'Водяной 🐸', 'Баба-Яга 🧙‍♀️', 'Змей Горыныч 🐉',
            'Соловей-Разбойник 🦅', 'Кот Баюн 🐱', 'Птица Сирин 🦚', 'Чернобог 👹',
            'Морозко ❄️', 'Кощей Бессмертный 💀', 'Хозяйка Медной Горы ⛰️',
            'Жар-Птица 🔥', 'Полевик 🌾', 'Стрибог 🌬️', 'Вий 🌌',
            'Змей Велес 🌳', 'Тугарин Змей 🛡️', 'Святогор 🏔️',
            'Сварог ☀️', 'Чудо-Юдо 👑'
        ];

        if (isChapterBoss) {
            return {
                name: chapterBosses[regionIdx] || 'Чудо-Юдо 👑',
                isChapterBoss: true,
                badge: '👑',
                label: 'Босс Главы',
                hp: 250 + levelNum * 25
            };
        }

        const miniBossesTable = {
            0:  ['Кикимора 🌿', 'Моховик 🍄', 'Аука 🦉', 'Дворовой 🛖'],
            1:  ['Болотник 🌿', 'Ичетик 🌊', 'Омутница 🌀', 'Шишига 🐸'],
            2:  ['Лихо Одноглазое 👁️', 'Упырь 🦇', 'Вурдалак 🐺', 'Полуночница 🌑'],
            3:  ['Огненный Змей 🔥', 'Смородинский Страж ⚔️', 'Чудо-Юдо Трехглавое 🐍', 'Костяной Воин 💀'],
            4:  ['Лихой Разбойник 🗡️', 'Лесной Стрелок 🏹', 'Атаман Лиходеев 🪓', 'Буйный Ветер 🌪️'],
            5:  ['Русалка Морская 🧜‍♀️', 'Морской Царевич 🔱', 'Чудо-Рыба 🐋', 'Сон-Дрема 💤'],
            6:  ['Птица Алконост 🕊️', 'Гамаюн Вещая 🪶', 'Золотое Яблочко 🍏', 'Страж Сада 🌸'],
            7:  ['Бес Полуночный 🌑', 'Тень Нави 👻', 'Мрак Глубинный 🖤', 'Темный Ведун 🔮'],
            8:  ['Студенец 🧊', 'Ледяница 🌨️', 'Карачун 🥶', 'Снежный Вихрь ❄️'],
            9:  ['Меч-Кладенец ⚔️', 'Стальная Стража 🛡️', 'Сундук Заветный 📦', 'Утка с Яйцом 🦆'],
            10: ['Малахитовый Страж 💎', 'Ящерка Золотая 🦎', 'Рудокоп-Призрак ⛏️', 'Медный Великан 🗿'],
            11: ['Искряк 🔥', 'Огневица 🌋', 'Пламенный Вихрь 🌪️', 'Феникс-Огневик 🦅'],
            12: ['Полудница ☀️', 'Межевик 🌾', 'Ржаница 🌾', 'Колосковый Дух 🌾'],
            13: ['Ветерок-Свистун 💨', 'Позвизд 🌬️', 'Погода-Буран 🌪️', 'Ураган Свирепый 🌀'],
            14: ['Мара-Призрак 👻', 'Навий Воин 💀', 'Кощный Слуга 🕯️', 'Око Тьмы 👁️'],
            15: ['Корневой Змей 🐍', 'Древесный Дух 🌳', 'Хранитель Кроны 🦅', 'Золотой Олень 🦌'],
            16: ['Степной Наездник 🐎', 'Лихой Батыр 🏹', 'Воин Тьмы 🛡️', 'Змеиный Богатырь ⚔️'],
            17: ['Каменный Страж 🪨', 'Горный Великан 🗿', 'Лавинный Дух 🏔️', 'Гранитный Титан ⚒️'],
            18: ['Кузнечный Огонь 🔥', 'Горнило Пламени ⚒️', 'Искристый Молот 🔨', 'Небесный Кузнец ⚡'],
            19: ['Морской Глубинный Змей 🐉', 'Семиглавый Дракон 🐲', 'Пожиратель Солнца ☀️', 'Царь Морозов и Пламени 👑']
        };

        const miniIdx = Math.max(0, Math.min(3, Math.floor(stepInRegion / 5) - 1));
        const regionMinis = miniBossesTable[regionIdx] || ['Лесной Оборотень 🐺', 'Темный Дух 👻', 'Слуга Нечисти 💀', 'Воевода Тьмы 🛡️'];
        const bossName = regionMinis[miniIdx];

        return {
            name: bossName,
            isChapterBoss: false,
            badge: '💀',
            label: 'Мини-Босс',
            hp: 170 + levelNum * 18
        };
    }

    render(currentUnlockedLevel = 1, levelStars = {}) {
        this.container.innerHTML = '';

        // Auto-select current unlocked region
        this.regions.forEach((reg, idx) => {
            if (currentUnlockedLevel >= reg.from && currentUnlockedLevel <= reg.to) {
                this.selectedRegionIdx = idx;
            }
        });

        // 1. Region Selector Carousel / Dropdown
        const selectorEl = document.createElement('div');
        selectorEl.className = 'region-nav-bar';
        selectorEl.style.display = 'flex';
        selectorEl.style.alignItems = 'center';
        selectorEl.style.justifyContent = 'space-between';
        selectorEl.style.marginBottom = '12px';
        selectorEl.style.background = 'rgba(44, 24, 16, 0.9)';
        selectorEl.style.padding = '8px 12px';
        selectorEl.style.borderRadius = '12px';
        selectorEl.style.border = '1px solid #D4AF37';

        selectorEl.innerHTML = `
            <button id="btn-reg-prev" class="icon-btn" style="width:36px; height:36px;">◀</button>
            <div style="text-align:center;">
                <div id="reg-cur-name" style="font-family:'Russo One',sans-serif; color:#FFD700; font-size:1rem;">${this.regions[this.selectedRegionIdx].name}</div>
                <div id="reg-cur-boss" style="font-size:0.8rem; color:#aaa;">Босс Главы: ${this.regions[this.selectedRegionIdx].boss}</div>
            </div>
            <button id="btn-reg-next" class="icon-btn" style="width:36px; height:36px;">▶</button>
        `;

        const renderCurrentRegion = () => {
            const reg = this.regions[this.selectedRegionIdx];
            selectorEl.querySelector('#reg-cur-name').textContent = reg.name;
            selectorEl.querySelector('#reg-cur-boss').textContent = `Босс Главы: ${reg.boss}`;

            const gridContainer = this.container.querySelector('#active-region-grid');
            if (!gridContainer) return;
            gridContainer.innerHTML = '';

            for (let lvl = reg.from; lvl <= reg.to; lvl++) {
                const isUnlocked = lvl <= currentUnlockedLevel;
                const isCurrent = lvl === currentUnlockedLevel;
                const bossInfo = LevelMapEngine.getBossInfo(lvl);
                const isBoss = !!bossInfo;
                const stars = levelStars[lvl] || 0;

                const node = document.createElement('button');
                let bossClass = '';
                let nodeIcon = isUnlocked ? '⚔️' : '🔒';
                let nodeTitle = `Уровень ${lvl}`;

                if (bossInfo) {
                    if (bossInfo.isChapterBoss) {
                        bossClass = 'boss-node climax-boss';
                        nodeIcon = '👑';
                        nodeTitle = `${bossInfo.name} (${bossInfo.label})`;
                    } else {
                        bossClass = 'boss-node mini-boss';
                        nodeIcon = '💀';
                        nodeTitle = `${bossInfo.name} (${bossInfo.label})`;
                    }
                }

                node.className = `level-node ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''} ${bossClass}`;
                node.title = nodeTitle;
                
                let starsHtml = '';
                if (isUnlocked && stars > 0) {
                    starsHtml = `<div class="node-stars">${'⭐'.repeat(stars)}</div>`;
                }

                node.innerHTML = `
                    <div class="node-icon">${nodeIcon}</div>
                    <div class="node-num">${lvl}</div>
                    ${starsHtml}
                `;

                if (isUnlocked) {
                    node.addEventListener('click', () => {
                        window.gameAudio.playSwap();
                        if (this.onSelectLevel) this.onSelectLevel(lvl, isBoss, bossInfo ? bossInfo.name : null);
                    });
                }

                gridContainer.appendChild(node);
            }
        };

        selectorEl.querySelector('#btn-reg-prev').addEventListener('click', () => {
            window.gameAudio.playSwap();
            this.selectedRegionIdx = Math.max(0, this.selectedRegionIdx - 1);
            renderCurrentRegion();
        });

        selectorEl.querySelector('#btn-reg-next').addEventListener('click', () => {
            window.gameAudio.playSwap();
            this.selectedRegionIdx = Math.min(this.regions.length - 1, this.selectedRegionIdx + 1);
            renderCurrentRegion();
        });

        this.container.appendChild(selectorEl);

        const gridWrapper = document.createElement('div');
        gridWrapper.id = 'active-region-grid';
        gridWrapper.className = 'levels-path-grid';
        this.container.appendChild(gridWrapper);

        renderCurrentRegion();
    }
}

window.LevelMapEngine = LevelMapEngine;
