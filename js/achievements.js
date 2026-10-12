class AchievementsSystem {
    constructor() {
        this.achievements = [
            { id: 'first_steps', title: 'Первые Шаги', desc: 'Пройти 5 уровней', icon: '⚔️', target: 5, rewardGold: 300, rewardHammers: 1 },
            { id: 'level_25', title: 'Освободитель Дубравы', desc: 'Пройти 25 уровней и одолеть Лешего', icon: '🌲', target: 25, rewardGold: 500, rewardHammers: 1 },
            { id: 'level_50', title: 'Покоритель Болот', desc: 'Пройти 50 уровней и одолеть Водяного', icon: '🐸', target: 50, rewardGold: 800, rewardHammers: 2 },
            { id: 'level_100', title: 'Победитель Горыныча', desc: 'Пройти 100 уровней', icon: '🐉', target: 100, rewardGold: 1500, rewardHammers: 3 },
            { id: 'level_250', title: 'Смерть Кощея', desc: 'Пройти 250 уровней', icon: '💀', target: 250, rewardGold: 3000, rewardHammers: 5 },
            { id: 'level_500', title: 'Царь Беловодья', desc: 'Пройти все 500 уровней', icon: '👑', target: 500, rewardGold: 10000, rewardHammers: 10 },
            { id: 'terem_builder', title: 'Княжеские Палаты', desc: 'Улучшить Терем до 3 уровня', icon: '🏰', target: 3, rewardGold: 400, rewardHammers: 1 },
            { id: 'all_buildings', title: 'Великое Село', desc: 'Восстановить все 14 построек', icon: '🏡', target: 14, rewardGold: 1000, rewardHammers: 2 },
            { id: 'hero_master', title: 'Богатырская Дружина', desc: 'Улучшить любого героя до 5 уровня', icon: '🛡️', target: 5, rewardGold: 600, rewardHammers: 1 },
            { id: 'craftsman', title: 'Древний Мастер', desc: 'Создать 3 славянских оберега', icon: '⚒️', target: 3, rewardGold: 500, rewardHammers: 1 },
            { id: 'fisherman_pro', title: 'Удачливый Рыбак', desc: 'Поймать 10 рыб на реке', icon: '🐟', target: 10, rewardGold: 400, rewardHammers: 1 },
            { id: 'wheel_spinner', title: 'Любимец Велеса', desc: 'Прокрутить Колесо Велеса 5 раз', icon: '☀️', target: 5, rewardGold: 350, rewardHammers: 1 },
            { id: 'rune_master', title: 'Перунов Гнев', desc: 'Создать 50 особых рун в Match-3', icon: '⚡', target: 50, rewardGold: 700, rewardHammers: 2 },
            { id: 'combo_king', title: 'Богатырский Удар', desc: 'Совершить 20 комбо 3x и выше', icon: '💥', target: 20, rewardGold: 500, rewardHammers: 1 },
            { id: 'easter_finder', title: 'Зоркий Глаз', desc: 'Собрать 15 пасхалок в селе', icon: '🐱', target: 15, rewardGold: 300, rewardHammers: 1 }
        ];
    }

    render(containerEl, gameState = {}, onClaimReward) {
        containerEl.innerHTML = '';
        const achState = gameState.achievementsState || {};

        this.achievements.forEach(ach => {
            let current = 0;
            if (ach.id.startsWith('level_') || ach.id === 'first_steps') {
                current = gameState.level || 1;
            } else if (ach.id === 'terem_builder') {
                current = (gameState.buildings && gameState.buildings.terem) || 0;
            } else if (ach.id === 'all_buildings') {
                current = Object.values(gameState.buildings || {}).filter(lvl => lvl > 0).length;
            } else if (ach.id === 'hero_master') {
                current = Math.max(0, ...Object.values(gameState.heroes || { d: 1 }));
            } else {
                current = achState[ach.id] || 0;
            }

            const isDone = current >= ach.target;
            const isClaimed = achState[`${ach.id}_claimed`] || false;
            const percent = Math.min(100, Math.round((current / ach.target) * 100));

            const card = document.createElement('div');
            card.className = `card achievement-card ${isDone ? 'done' : ''} ${isClaimed ? 'claimed' : ''}`;
            card.innerHTML = `
                <div class="card-icon">${ach.icon}</div>
                <div class="card-info">
                    <div class="card-name">${ach.title}</div>
                    <div class="card-desc">${ach.desc}</div>
                    <div class="ach-progress-bar">
                        <div class="ach-progress-fill" style="width: ${percent}%;"></div>
                    </div>
                    <div style="font-size:0.78rem; color:#aaa; margin-top:2px;">Прогресс: ${Math.min(current, ach.target)} / ${ach.target} • Награда: +${ach.rewardGold} 🪙 ${ach.rewardHammers ? `+${ach.rewardHammers} 🔨` : ''}</div>
                </div>
                <button class="gold-btn btn-claim-ach" ${(!isDone || isClaimed) ? 'disabled' : ''}>
                    ${isClaimed ? 'Получено ✓' : (isDone ? 'Забрать!' : `${percent}%`)}
                </button>
            `;

            if (isDone && !isClaimed) {
                card.querySelector('.btn-claim-ach').addEventListener('click', () => {
                    if (onClaimReward) onClaimReward(ach);
                });
            }

            containerEl.appendChild(card);
        });
    }
}

window.AchievementsSystem = AchievementsSystem;
