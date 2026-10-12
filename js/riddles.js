class SlavicRiddlesSystem {
    constructor() {
        this.riddles = [
            {
                q: '«Красна девица сидит в темнице, а коса на улице. Что это за яство огородное?»',
                options: ['🥕 Морковь-девица', '🎃 Тыква золотая', '🧅 Лук репчатый'],
                correct: 0,
                rewardGold: 150,
                lore: 'Истинно так! Морковь да репа — главная сладость на богатырском столе!'
            },
            {
                q: '«Летит птица перната, без глаз, без крыл, сама свистит, сама бьет злого ворога. Что сие?»',
                options: ['🏹 Богатырская стрела', '🦅 Сокол ясный', '⚡ Перунова молния'],
                correct: 0,
                rewardGold: 150,
                lore: 'В яблочко! Каленая стрела богатыря бьет без промаха!'
            },
            {
                q: '«Стоит дуб-стародуб, на нем двенадцать ветвей, на каждой ветви по четыре гнезда. Что это?»',
                options: ['📅 Год, месяцы и недели', '🌳 Мировое древо Ирий', '🏰 Княжеский терем'],
                correct: 0,
                rewardGold: 150,
                lore: 'Мудро молвишь! Сменяются месяцы да недели, а Русь стоит вечно!'
            },
            {
                q: '«Сидит дед, во сто шуб одет, кто его раздевает — тот слезы проливает. Кто таков?»',
                options: ['🧅 Лук ядреный', '🧙‍♂️ Леший лесной', '🐻 Медведь в берлоге'],
                correct: 0,
                rewardGold: 150,
                lore: 'Верно! Лук от семи недуг силушку богатырскую хранит!'
            },
            {
                q: '«В воде родится, в огне крестится, на стол к князю просится. Что это?»',
                options: ['🍞 Хлеб каравай', '🐟 Царь-Рыба', '🍯 Мед липовый'],
                correct: 0,
                rewardGold: 150,
                lore: 'Хлеб — всему голова! Без хлеба и богатырь слаб!'
            },
            {
                q: '«Без рук, без топорища построена избища на речном затоне. Кто зодчий?»',
                options: ['🦫 Бобровая плотина', '🐸 Водяного хоромы', '🦆 Утиное гнездо'],
                correct: 0,
                rewardGold: 150,
                lore: 'Любо! Бобр — искусный строитель русских рек!'
            }
        ];
    }

    getRandomRiddle() {
        return this.riddles[Math.floor(Math.random() * this.riddles.length)];
    }

    renderRiddleModal(modalEl, onCorrectAnswer) {
        const rawRiddle = this.getRandomRiddle();
        const shuffled = rawRiddle.options.map((opt, i) => ({ opt, isCorrect: i === rawRiddle.correct }));
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        const correctIndex = shuffled.findIndex(item => item.isCorrect);
        const riddle = {
            ...rawRiddle,
            options: shuffled.map(item => item.opt),
            correct: correctIndex
        };
        const container = modalEl.querySelector('.riddle-content');
        if (!container) return;

        container.innerHTML = `
            <div class="dialogue-box" style="margin-bottom:12px;">
                <div class="dialogue-avatar">🎭</div>
                <div class="dialogue-content">
                    <div class="dialogue-author">Скоморох Еремей</div>
                    <div class="dialogue-text">«Ой вы, гой еси, добры люди! Отгадайте былинную загадку — одарю золотом звонким!»</div>
                </div>
            </div>
            <p style="font-family:'Marck Script', cursive; font-size:1.45rem; color:#FFD700; margin:14px 0; text-align:center; line-height:1.3;">
                ${riddle.q}
            </p>
            <div class="riddle-options-list" style="display:flex; flex-direction:column; gap:8px;">
                ${riddle.options.map((opt, idx) => `
                    <button class="gold-btn btn-riddle-option" data-idx="${idx}" style="text-align:left; justify-content:flex-start; padding:8px 14px; font-size:0.95rem;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div id="riddle-feedback" style="margin-top:12px; font-family:'Russo One', sans-serif; text-align:center; font-size:1rem;"></div>
        `;

        const buttons = container.querySelectorAll('.btn-riddle-option');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const chosenIdx = parseInt(btn.dataset.idx, 10);
                const feedbackEl = container.querySelector('#riddle-feedback');

                buttons.forEach(b => b.disabled = true);

                if (chosenIdx === riddle.correct) {
                    btn.style.background = '#2D6A4F';
                    btn.style.color = '#FFF';
                    feedbackEl.style.color = '#FFD700';
                    feedbackEl.innerHTML = `✨ ПРАВИЛЬНО! +${riddle.rewardGold} 🪙<br><span style="font-size:0.85rem; color:#DDD; font-family:'Yanone Kaffeesatz';">${riddle.lore}</span>`;
                    if (window.gameAudio) window.gameAudio.playWin();
                    if (onCorrectAnswer) onCorrectAnswer(riddle.rewardGold);
                } else {
                    btn.style.background = '#780000';
                    btn.style.color = '#FFF';
                    feedbackEl.style.color = '#FF4D6D';
                    feedbackEl.innerHTML = `Не угадали! Скоморох хитро улыбнулся и ушел на ярмарку.`;
                }
            });
        });
    }
}

window.SlavicRiddlesSystem = SlavicRiddlesSystem;
