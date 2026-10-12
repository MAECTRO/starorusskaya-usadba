class SlavicMarketSystem {
    constructor() {
        this.deals = [
            {
                id: 'wood_to_gold',
                title: 'Продажа Леса Купцам',
                icon: '🪵➡️🪙',
                desc: 'Обменять 40 бревен на 100 золотых монет.',
                costWood: 40,
                costGold: 0,
                giveGold: 100,
                giveWood: 0,
                giveResin: 0
            },
            {
                id: 'gold_to_resin',
                title: 'Закупка Царской Смолы',
                icon: '🪙➡️💧',
                desc: 'Купить 25 капель волшебной смолы за 150 золотых монет.',
                costWood: 0,
                costGold: 150,
                giveGold: 0,
                giveWood: 0,
                giveResin: 25
            },
            {
                id: 'buy_hammer',
                title: 'Кузнечный Молот Вакулы',
                icon: '🔨',
                desc: 'Купить 1 богатырский молот для боя Match-3 за 200 золота.',
                costWood: 0,
                costGold: 200,
                giveHammer: 1
            }
        ];
    }

    renderMarket(container, gameState, onTrade, onAdGift, onUpgradePier) {
        if (!container) return;
        container.innerHTML = '';

        // 1. Merchant Sadko Greeting Header
        const header = document.createElement('div');
        header.className = 'dialogue-box';
        header.style.marginBottom = '12px';
        header.innerHTML = `
            <div class="dialogue-avatar">⛵</div>
            <div class="dialogue-content">
                <div class="dialogue-author">Купец Садко Новгородский</div>
                <div class="dialogue-text">«Здрав будь, боярин! Привез я товары заморские да злато новгородское. Меняй лес на червонцы, бери смолу да обереги!»</div>
            </div>
        `;
        container.appendChild(header);

        // 2. Free Daily Merchant Ad Gift
        const giftCard = document.createElement('div');
        giftCard.className = 'card';
        giftCard.style.border = '2px solid #FFD700';
        giftCard.style.background = 'linear-gradient(180deg, #3A2013 0%, #1A0E08 100%)';
        giftCard.innerHTML = `
            <div class="card-icon">🎁</div>
            <div class="card-info">
                <div class="card-name">Дар Заморских Странников</div>
                <div class="card-desc">Получить +300 🪙 Золота, +30 🪵 Дерева и +10 💧 Смолы!</div>
                <button class="reward-btn btn-ad-gift" style="margin-top:6px; font-size:0.85rem;">
                    📺 Забрать Дар (Реклама)
                </button>
            </div>
        `;
        giftCard.querySelector('.btn-ad-gift').addEventListener('click', () => {
            if (onAdGift) onAdGift();
        });
        container.appendChild(giftCard);

        // 3. Trade Deals List
        this.deals.forEach(deal => {
            const card = document.createElement('div');
            card.className = 'card';
            const canAfford = (gameState.wood >= deal.costWood) && (gameState.gold >= deal.costGold);

            card.innerHTML = `
                <div class="card-icon">${deal.icon}</div>
                <div class="card-info">
                    <div class="card-name">${deal.title}</div>
                    <div class="card-desc">${deal.desc}</div>
                    <div style="margin-top:6px;">
                        <button class="gold-btn btn-trade" style="padding:4px 12px; font-size:0.85rem;" ${!canAfford ? 'disabled style="opacity:0.5;"' : ''}>
                            Обменять
                        </button>
                    </div>
                </div>
            `;

            card.querySelector('.btn-trade').addEventListener('click', () => {
                if (canAfford) {
                    if (onTrade) onTrade(deal);
                } else {
                    window.showToast && window.showToast('Недостаточно ресурсов для обмена у купца!');
                }
            });

            container.appendChild(card);
        });

        // 4. Pier Upgrade Card (Allows leveling Pier from 1 to maxLevel 3)
        if (onUpgradePier) {
            const pierLevel = (gameState.buildings && gameState.buildings.pier) || 0;
            const pierCard = document.createElement('div');
            pierCard.className = 'card';
            pierCard.style.border = '1px solid #FFD700';
            pierCard.style.background = 'linear-gradient(180deg, #2D1808 0%, #170A02 100%)';
            pierCard.innerHTML = `
                <div class="card-icon">⛵</div>
                <div class="card-info">
                    <div class="card-name">Пристань и Ладья Садко</div>
                    <div class="card-desc">${pierLevel >= 3 ? 'Пристань обустроена до высшего 3 уровня!' : `Улучшите ладью и пристань до ${pierLevel + 1} уровня!`}</div>
                    <div style="margin-top:6px;">
                        <button class="gold-btn btn-upgrade-pier" style="padding:4px 12px; font-size:0.85rem;" ${pierLevel >= 3 ? 'disabled style="opacity:0.5;"' : ''}>
                            ${pierLevel >= 3 ? 'Максимальный уровень ✓' : `🔨 Улучшить (Ур. ${pierLevel}/3)`}
                        </button>
                    </div>
                </div>
            `;
            pierCard.querySelector('.btn-upgrade-pier').addEventListener('click', () => {
                if (pierLevel < 3) onUpgradePier();
            });
            container.appendChild(pierCard);
        }
    }
}

window.SlavicMarketSystem = SlavicMarketSystem;
