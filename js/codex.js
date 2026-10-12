class SlavicCodex {
    constructor() {
        this.entries = [
            { id: 'domovoy', name: 'Домовой-Хранитель', icon: '🏡', region: 'Усадьба', desc: 'Добродушный дедушка, стерегущий покой избы и усадьбы. Приносит достаток и уют.', unlocked: true },
            { id: 'leshy', name: 'Леший-Хозяин Чащи', icon: '🌲', region: 'Дубрава', desc: 'Дух древнего леса. Путает тропы, насылает чары и защищает лесных зверей.', unlocked: true },
            { id: 'vodyanoy', name: 'Водяной Омутень', icon: '🐸', region: 'Топи', desc: 'Владыка речных глубин и мельничных омутов. Любит тишину и дары рыбаков.', unlocked: false },
            { id: 'babayaga', name: 'Баба-Яга Костяная Нога', icon: '🧙‍♀️', region: 'Дремучий Бор', desc: 'Могучая чародейка в избушке на курьих ножках. Знает тайны трав и живой воды.', unlocked: false },
            { id: 'gorynych', name: 'Змей Горыныч', icon: '🐉', region: 'Калинов Мост', desc: 'Трехглавый исполин, охраняющий реку Смородину и огненные пределы.', unlocked: false },
            { id: 'gamayun', name: 'Птица Гамаюн', icon: '🦚', region: 'Лукоморье', desc: 'Вещая птица с дивным голосом, поющая сказания о подвигах богатырей.', unlocked: false }
        ];
    }

    render(containerEl, playerLevel = 1) {
        containerEl.innerHTML = '';
        this.entries.forEach((e, idx) => {
            const isUnlocked = e.unlocked || (playerLevel >= (idx + 1) * 5);
            const card = document.createElement('div');
            card.className = `card codex-card ${isUnlocked ? 'unlocked' : 'locked'}`;

            card.innerHTML = `
                <div class="card-icon">${isUnlocked ? e.icon : '❓'}</div>
                <div class="card-info">
                    <div class="card-name">${isUnlocked ? e.name : 'Тайная Былина (Заблокировано)'}</div>
                    <div class="card-desc">${isUnlocked ? e.desc : `Откроется на уровне ${(idx + 1) * 5}`}</div>
                    <div style="font-size:0.8rem; color:#D4AF37; margin-top:4px;">Регион: ${e.region}</div>
                </div>
            `;

            containerEl.appendChild(card);
        });
    }
}

window.SlavicCodex = SlavicCodex;
