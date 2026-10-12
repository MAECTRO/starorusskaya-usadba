class QuestsSystem {
    constructor() {
        this.dailyRewards = [
            { day: 1, label: '200 🪙', gold: 200, wood: 20, resin: 0, hammer: 0 },
            { day: 2, label: '350 🪙 + 1 🔨', gold: 350, wood: 30, resin: 0, hammer: 1 },
            { day: 3, label: '500 🪙 + 15 💧', gold: 500, wood: 40, resin: 15, hammer: 0 },
            { day: 4, label: '700 🪙 + 1 🔀', gold: 700, wood: 50, resin: 0, shuffle: 1 },
            { day: 5, label: '850 🪙 + 25 💧', gold: 850, wood: 60, resin: 25, hammer: 1 },
            { day: 6, label: '1000 🪙 + 2 🔨', gold: 1000, wood: 80, resin: 30, hammer: 2 },
            { day: 7, label: '👑 Супер-Сундук: 2000 🪙 + Реликвия', gold: 2000, wood: 150, resin: 50, hammer: 3, shuffle: 2 }
        ];

        this.quests = [
            { id: 'berries', title: 'Собрать лесные ягоды', target: 50, current: 0, rewardGold: 250, icon: '🍓' },
            { id: 'boss', title: 'Одолеть лесную нечисть', target: 1, current: 0, rewardGold: 400, icon: '👹' },
            { id: 'upgrade', title: 'Улучшить постройку в усадьбе', target: 1, current: 0, rewardGold: 300, icon: '🔨' }
        ];
    }

    renderCalendar(containerEl, currentDay = 1, lastClaimTime = 0, onClaim) {
        containerEl.innerHTML = '';
        const now = Date.now();
        const canClaim = (now - lastClaimTime) >= 86400000;

        const grid = document.createElement('div');
        grid.className = 'calendar-grid';

        this.dailyRewards.forEach((r, idx) => {
            const dayNum = idx + 1;
            const isClaimed = dayNum < currentDay || (dayNum === currentDay && !canClaim);
            const isToday = dayNum === currentDay;

            const card = document.createElement('div');
            card.className = `calendar-day-card ${isToday ? 'today' : ''} ${isClaimed ? 'claimed' : ''}`;
            card.innerHTML = `
                <div class="cal-day-title">День ${dayNum}</div>
                <div class="cal-reward-icon">${dayNum === 7 ? '👑' : '🎁'}</div>
                <div class="cal-reward-label">${r.label}</div>
                <button class="gold-btn cal-btn" ${(!isToday || !canClaim) ? 'disabled' : ''}>
                    ${isClaimed ? 'Забрано ✓' : (isToday && canClaim ? 'Забрать!' : 'Ждет')}
                </button>
            `;

            if (isToday && canClaim) {
                card.querySelector('.cal-btn').addEventListener('click', () => {
                    if (onClaim) onClaim(r, dayNum);
                });
            }

            grid.appendChild(card);
        });

        containerEl.appendChild(grid);
    }

    renderQuests(containerEl, questsState = {}, onClaimQuest) {
        containerEl.innerHTML = '';
        this.quests.forEach(q => {
            const cur = questsState[q.id] || 0;
            const isDone = cur >= q.target;
            const isClaimed = questsState[`${q.id}_claimed`] || false;

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-icon">${q.icon}</div>
                <div class="card-info">
                    <div class="card-name">${q.title}</div>
                    <div class="card-desc">Прогресс: ${Math.min(cur, q.target)} / ${q.target}</div>
                    <div style="font-size:0.85rem; color:#FFD700;">Награда: +${q.rewardGold} 🪙</div>
                </div>
                <button class="gold-btn btn-quest-claim" ${(!isDone || isClaimed) ? 'disabled' : ''}>
                    ${isClaimed ? 'Выполнено ✓' : (isDone ? 'Забрать!' : 'В процессе')}
                </button>
            `;

            if (isDone && !isClaimed) {
                card.querySelector('.btn-quest-claim').addEventListener('click', () => {
                    if (onClaimQuest) onClaimQuest(q);
                });
            }

            containerEl.appendChild(card);
        });
    }
}

window.QuestsSystem = QuestsSystem;
