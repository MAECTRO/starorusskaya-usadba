class SlavicPetsSystem {
    constructor() {
        this.pets = [
            {
                id: 'cat_bayun',
                name: 'Кот Баюн',
                avatar: '🐱',
                level: 1,
                maxLevel: 5,
                bonusDesc: 'Каждые 7 ходов в бою Match-3 дарует бесплатный удар Молнии ⚡!',
                costGold: 200,
                abilityType: 'lightning_interval',
                abilityInterval: 7
            },
            {
                id: 'grey_wolf',
                name: 'Серый Волк',
                avatar: '🐺',
                level: 0,
                maxLevel: 5,
                bonusDesc: 'Увеличивает добычу Дерева и Золота во всех боях на +25% 🪵🪙!',
                costGold: 350,
                abilityType: 'resource_multiplier',
                multiplier: 1.25
            },
            {
                id: 'firebird',
                name: 'Жар-Птица',
                avatar: '🪶',
                level: 0,
                maxLevel: 5,
                bonusDesc: 'Начинает битвы с Боссами с активным Солнцеворотом ☀️ на доске!',
                costGold: 600,
                abilityType: 'start_sun_boss',
                activeOnBoss: true
            }
        ];

        this.activePetId = 'cat_bayun';
    }

    loadState(saved) {
        if (saved) {
            if (saved.activePetId) this.activePetId = saved.activePetId;
            if (saved.petsLevels) {
                this.pets.forEach(p => {
                    if (saved.petsLevels[p.id] !== undefined) {
                        p.level = saved.petsLevels[p.id];
                    }
                });
            }
        }
    }

    getActivePet() {
        return this.pets.find(p => p.id === this.activePetId) || this.pets[0];
    }

    renderPets(container, playerGold, onUpgrade, onSelect) {
        if (!container) return;
        container.innerHTML = '';

        this.pets.forEach(p => {
            const card = document.createElement('div');
            card.className = `card pet-card ${p.id === this.activePetId ? 'active-pet' : ''}`;
            const isUnlocked = p.level > 0;
            const upgradeCost = Math.floor(p.costGold * Math.pow(1.5, p.level));
            const canAfford = playerGold >= upgradeCost;

            card.innerHTML = `
                <div class="card-icon">${p.avatar}</div>
                <div class="card-info">
                    <div class="card-name">${p.name} ${isUnlocked ? `<span style="font-size:0.8rem; color:#FFD700;">(Ур. ${p.level}/${p.maxLevel})</span>` : '<span style="font-size:0.75rem; color:#AAA;">(Не приручен)</span>'}</div>
                    <div class="card-desc">${p.bonusDesc}</div>
                    <div style="margin-top:6px; display:flex; gap:8px; align-items:center;">
                        ${isUnlocked ? `
                            <button class="gold-btn btn-select-pet" style="padding:4px 10px; font-size:0.8rem; ${p.id === this.activePetId ? 'background:#2D6A4F; color:#FFF;' : ''}">
                                ${p.id === this.activePetId ? '✨ Выбран' : 'Выбрать спутником'}
                            </button>
                            ${p.level < p.maxLevel ? `
                                <button class="gold-btn btn-upgrade-pet" style="padding:4px 10px; font-size:0.8rem;" ${!canAfford ? 'disabled style="opacity:0.5;"' : ''}>
                                    🪙 Улучшить (+${upgradeCost})
                                </button>
                            ` : '<span style="color:#FFD700; font-size:0.8rem;">🌟 Максимум</span>'}
                        ` : `
                            <button class="gold-btn btn-upgrade-pet" style="padding:4px 10px; font-size:0.8rem;" ${!canAfford ? 'disabled style="opacity:0.5;"' : ''}>
                                🪙 Приручить (${upgradeCost})
                            </button>
                        `}
                    </div>
                </div>
            `;

            const btnUpgrade = card.querySelector('.btn-upgrade-pet');
            if (btnUpgrade) {
                btnUpgrade.addEventListener('click', () => {
                    if (canAfford) {
                        p.level++;
                        if (onUpgrade) onUpgrade(p, upgradeCost);
                    } else {
                        window.showToast && window.showToast('Недостаточно золота для приручения или прокачки питомца!');
                    }
                });
            }

            const btnSelect = card.querySelector('.btn-select-pet');
            if (btnSelect) {
                btnSelect.addEventListener('click', () => {
                    this.activePetId = p.id;
                    if (onSelect) onSelect(p);
                });
            }

            container.appendChild(card);
        });
    }
}

window.SlavicPetsSystem = SlavicPetsSystem;
