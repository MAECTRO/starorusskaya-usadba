class HeroesSystem {
    constructor() {
        this.heroes = [
            {
                id: 'ilya',
                name: 'Илья Муромец',
                title: 'Старший Богатырь',
                level: 1,
                maxLevel: 5,
                costGold: 150,
                bonusDesc: '+10% к очкам за комбо',
                effect: { scoreMultiplier: 1.1 }
            },
            {
                id: 'dobrynya',
                name: 'Добрыня Никитич',
                title: 'Змееборец',
                level: 0,
                maxLevel: 5,
                costGold: 200,
                bonusDesc: '+1 дополнительный ход во всех боях',
                effect: { extraMoves: 1 }
            },
            {
                id: 'alesha',
                name: 'Алёша Попович',
                title: 'Меткий Лучник',
                level: 0,
                maxLevel: 5,
                costGold: 250,
                bonusDesc: 'Начинает бой с активной Бомбой 💣',
                effect: { startWithBomb: true }
            },
            {
                id: 'radogor',
                name: 'Волхв Радогор',
                title: 'Хранитель Знаний',
                level: 0,
                maxLevel: 5,
                costGold: 300,
                bonusDesc: '+15% к добыче Древесины 🪵',
                effect: { woodMultiplier: 1.15 }
            },
            {
                id: 'vasilisa',
                name: 'Василиса Премудрая',
                title: 'Чародейка',
                level: 0,
                maxLevel: 5,
                costGold: 400,
                bonusDesc: 'Ускоряет появление бонусов на доске',
                effect: { bonusDropRate: 1.2 }
            },
            {
                id: 'vakula',
                name: 'Кузнец Вакула',
                title: 'Мастер Огня',
                level: 0,
                maxLevel: 5,
                costGold: 350,
                bonusDesc: 'Удваивает силу взрывов Руны Бомбы 💣',
                effect: { bombAreaBoost: true }
            }
        ];

        this.heroes.forEach(h => {
            this.heroes[h.id] = h.level;
        });

        this.crafts = [
            {
                id: 'amulet_perun',
                name: 'Оберег Перуна',
                icon: '⚡',
                desc: 'Громовой амулет. Дарует защиту от ловушек нечисти.',
                costWood: 30,
                costResin: 15,
                crafted: false
            },
            {
                id: 'solar_shield',
                name: 'Солнечный Щит Сварога',
                icon: '☀️',
                desc: 'Озаряет поле боя и повышает урон по боссам.',
                costWood: 50,
                costResin: 25,
                crafted: false
            },
            {
                id: 'water_chalice',
                name: 'Живая Вода Даждьбога',
                icon: '🌊',
                desc: 'Восстанавливает всю богатырскую энергию.',
                costWood: 20,
                costResin: 40,
                crafted: false
            }
        ];
    }

    setHeroesState(savedState) {
        if (savedState) {
            this.heroes.forEach(h => {
                if (savedState[h.id] !== undefined) {
                    h.level = savedState[h.id];
                    this.heroes[h.id] = h.level;
                }
            });
        }
    }

    getBonuses() {
        const bonuses = {
            scoreMultiplier: 1.0,
            extraMoves: 0,
            startWithBomb: false,
            woodMultiplier: 1.0,
            bonusDropRate: 1.0,
            bombRadiusMultiplier: this.heroes['vakula'] > 0 ? 2 : 1
        };

        this.heroes.forEach(h => {
            if (h.level > 0) {
                if (h.id === 'ilya') bonuses.scoreMultiplier += 0.1 * h.level;
                if (h.id === 'dobrynya') bonuses.extraMoves += h.level;
                if (h.id === 'alesha') bonuses.startWithBomb = true;
                if (h.id === 'radogor') bonuses.woodMultiplier += 0.15 * h.level;
                if (h.id === 'vasilisa') bonuses.bonusDropRate += 0.1 * h.level;
                if (h.id === 'vakula') bonuses.bombRadiusMultiplier = 2;
            }
        });

        return bonuses;
    }

    renderHeroes(container, playerGold, onUpgrade) {
        if (!container) return;
        container.innerHTML = '';

        this.heroes.forEach(h => {
            const card = document.createElement('div');
            card.className = `card ${h.level > 0 ? 'unlocked' : ''}`;
            const upgradeCost = Math.floor(h.costGold * Math.pow(1.5, h.level));
            const canAfford = playerGold >= upgradeCost;

            card.innerHTML = `
                <div class="card-portrait-wrapper" style="width:64px; height:64px; flex-shrink:0;">
                    <canvas class="hero-canvas" id="hero-canvas-${h.id}" width="64" height="64" style="border-radius:50%; box-shadow:0 0 8px #FFD700;"></canvas>
                </div>
                <div class="card-info">
                    <div class="card-name">${h.name} <span style="font-size: 0.8rem; color: #AAA;">(${h.title})</span></div>
                    <div class="card-desc">${h.bonusDesc}</div>
                    <div style="font-size: 0.85rem; color: #FFD700; margin-top: 4px;">
                        Уровень: ${h.level} / ${h.maxLevel}
                    </div>
                </div>
                <div class="card-action">
                    ${h.level < h.maxLevel ? `
                        <button class="gold-btn btn-upgrade-hero" style="font-size: 0.85rem; padding: 6px 10px;" ${!canAfford ? 'disabled style="opacity: 0.5;"' : ''}>
                            🪙 ${upgradeCost}
                        </button>
                    ` : '<span style="color: #FFD700; font-weight: bold; font-size: 0.85rem;">МАКС</span>'}
                </div>
            `;

            const btn = card.querySelector('.btn-upgrade-hero');
            if (btn) {
                btn.addEventListener('click', () => {
                    if (canAfford) {
                        h.level++;
                        this.heroes[h.id] = h.level;
                        if (onUpgrade) onUpgrade(h, upgradeCost);
                        this.renderHeroes(container, playerGold - upgradeCost, onUpgrade);
                    } else {
                        window.showToast && window.showToast('Недостаточно золота для найма или улучшения богатыря!');
                    }
                });
            }

            container.appendChild(card);

            // Draw Custom Vector Portrait on Canvas
            const cvs = card.querySelector(`#hero-canvas-${h.id}`);
            if (cvs && window.SlavicArt) {
                const ctx = cvs.getContext('2d');
                window.SlavicArt.drawHeroPortrait(ctx, h.id, 64);
            }
        });
    }

    renderCrafts(container, playerWood, playerResin, onCraft) {
        if (!container) return;
        container.innerHTML = '';

        this.crafts.forEach(c => {
            const card = document.createElement('div');
            card.className = 'card';
            const canAfford = (playerWood >= c.costWood) && (playerResin >= c.costResin);

            card.innerHTML = `
                <div class="card-icon">${c.icon}</div>
                <div class="card-info">
                    <div class="card-name">${c.name}</div>
                    <div class="card-desc">${c.desc}</div>
                    <div class="cost-items" style="justify-content: flex-start; margin: 4px 0;">
                        <div class="res-item">🪵 ${c.costWood}</div>
                        <div class="res-item">💧 ${c.costResin}</div>
                    </div>
                </div>
                <div class="card-action">
                    <button class="gold-btn btn-craft" style="font-size: 0.85rem; padding: 6px 10px;" ${!canAfford ? 'disabled style="opacity: 0.5;"' : ''}>
                        Создать
                    </button>
                </div>
            `;

            const btn = card.querySelector('.btn-craft');
            if (btn) {
                btn.addEventListener('click', () => {
                    if (canAfford) {
                        if (onCraft) onCraft(c);
                    } else {
                        window.showToast && window.showToast('Недостаточно дерева или смолы для создания оберега!');
                    }
                });
            }

            container.appendChild(card);
        });
    }
}

window.HeroesSystem = HeroesSystem;
