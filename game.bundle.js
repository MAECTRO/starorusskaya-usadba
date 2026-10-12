// === i18n.js ===
const I18N_DATA = {
    ru: {
        game_title: "Старорусская Усадьба: Три в Ряд",
        player_title: "Богатырь",
        auth_btn: "Войти",
        auth_success: "🎉 Успешная авторизация! Прогресс синхронизирован.",
        auth_local: "Профиль Богатыря сохранен локально!",
        res_wood_tip: "Древесина для построек",
        res_gold_tip: "Золотые монеты",
        res_resin_tip: "Смола для оберегов",
        res_energy_tip: "Богатырская Энергия",
        top_riddles_tip: "Загадки Скомороха",
        top_achievements_tip: "Зал Славы и Достижения",
        top_music_tip: "Сменить мелодию",
        top_sound_tip: "Звук",
        top_fullscreen_tip: "На весь экран",
        top_rewards_btn: "🎁 Награды",
        top_lang_tip: "Сменить язык (RU / EN / TR)",
        
        season_prefix: "Сезон: ",
        season_autumn: "Золотая Осень",
        season_winter: "Морозная Зима",
        season_spring: "Цветущая Весна",
        season_summer: "Знойное Лето",
        weather_autumn: "Тихий Листопад",
        weather_winter: "Легкий Снежок",
        weather_spring: "Весеннее Цветение",
        weather_summer: "Солнечные Блики",
        btn_season_toggle: "🔄 Сменить",
        
        story_volhv_author: "Волхв Радогор",
        story_volhv_init: "«Добро пожаловать в Усадьбу, Богатырь! Восстанови постройки, приручи питомцев и прогони лесную нечисть!»",
        story_smith_author: "Кузнец Вакула",
        story_smith_upgraded: "«Любо-дорого глядеть! Здание \"{name}\" подняли до уровня {level}! Усадьба богатеет!»",
        
        btn_fishing: "🎣 Рыбалка",
        btn_siege: "🌙 Осада (60с)",
        btn_campaign: "⚔️ В Поход (Ур. {lvl})",
        btn_back_to_manor: "⬅️ В Село",
        
        nav_manor: "Село",
        nav_campaign: "Поход",
        nav_pets: "Питомцы",
        nav_market: "Ярмарка",
        nav_heroes: "Герои",
        nav_wheel: "Колесо",
        nav_codex: "Летопись",
        
        map_title: "🗺️ Карта Богатырского Пути",
        map_chapter: "Глава",
        map_level: "Ур.",
        map_locked: "Пройдите предыдущие уровни!",
        
        m3_moves: "Ходы",
        m3_time: "Время",
        m3_targets: "Цели",
        m3_score: "Очки",
        m3_siege_title: "🌙 Осада Нечисти!",
        m3_booster_hammer: "🔨 Молот",
        m3_booster_shuffle: "🌪️ Вихрь",
        m3_booster_moves: "+5 Ходов (📺)",
        m3_need_energy: "Недостаточно энергии! Подождите или пополните запас в Колесе Велеса.",
        m3_need_energy_siege: "Для ночной вылазки требуется 2 единицы энергии ⚡!",
        
        combo_good: "Добро!",
        combo_great: "Славно!",
        combo_bogatyr: "Богатырский Удар!",
        combo_perun: "Мощь Перуна!",
        combo_epic: "Былинное Комбо!",
        
        win_title: "Победа Богатыря!",
        win_desc: "Победа в бою! Добыты ресурсы для Усадьбы:",
        win_double_btn: "📺 Удвоить Награду (x2)",
        win_continue_btn: "Продолжить",
        win_double_alert: "🎉 Награда удвоена! Получено еще +{wood} 🪵 и +{gold} 🪙",
        
        loss_title: "Нечисть одолела...",
        loss_desc: "Закончились ходы! Возьмите +5 ходов или попробуйте снова.",
        
        siege_win_title: "🌙 Ночная Осада Отбита!",
        siege_win_desc: "Нечисть бежала! Вы добыли богатырский сундук за ночной бой:",
        
        heroes_title: "🛡️ Дружина Богатырей",
        heroes_level: "Уровень: ",
        heroes_bonus: "Бонус: ",
        heroes_upgrade_btn: "🔨 Улучшить ({cost} 🪙)",
        heroes_max_lvl: "⭐ Максимальный уровень",
        heroes_not_enough_gold: "Недостаточно золота для найма!",
        
        pets_title: "🐺 Сказочные Питомцы",
        pets_active_badge: "✨ В походе",
        pets_choose_btn: "🐾 Взять в бой",
        pets_upgrade_btn: "🔨 Прокачать ({cost} 🪙)",
        pets_upgraded_alert: "✨ Питомец {name} прокачан до уровня {level}!",
        pets_chosen_alert: "🐾 Питомец {name} теперь сопровождает вас в боях!",
        
        market_title: "🏪 Ярмарка Садко",
        market_free_gift_btn: "📺 Получить Дар (Бесплатно)",
        market_trade_btn: "Купить / Обменять",
        market_deal_done: "🎉 Сделка совершена! Вы успешно обменяли товары у Садко.",
        market_gift_done: "🎉 Дар странников получен: +300 🪙, +30 🪵, +10 💧!",
        market_not_enough: "Недостаточно ресурсов для сделки!",
        
        craft_title: "⚒️ Ремесленная Палата",
        
        wheel_title: "🎡 Колесо Велеса",
        wheel_free_ready: "✨ Бесплатное вращение доступно!",
        wheel_cooldown: "⏳ До бесплатного вращения: {h}ч {m}м",
        wheel_spin_free_btn: "Испытать Удачу",
        wheel_spin_ad_btn: "📺 Крутить за Рекламу",
        wheel_reward_alert: "🎉 Велесово Колесо одарило вас: {label}!",
        
        codex_title: "📜 Летопись Нечисти",
        codex_region: "Обитель: ",
        codex_locked: "🔒 Откроется на уровне {lvl}",
        
        leaderboard_title: "👑 Зал Славы",
        lb_col_rank: "#",
        lb_col_hero: "Богатырь",
        lb_col_level: "Уровень",
        lb_col_score: "Очки",
        lb_you: "Богатырь (Вы)",
        
        riddles_title: "🎭 Загадки Скомороха",
        riddles_correct: "🎉 Верно! Скоморох вручает награду: +{gold} 🪙",
        riddles_wrong: "❌ Не угадал! Попробуй другую былинную загадку.",
        
        bldg_req_lvl: "Требуется для уровня {lvl}:",
        bldg_upgrade_btn: "🔨 Улучшить",
        bldg_not_enough_res: "Недостаточно ресурсов! Соберите дерево и золото в бою.",
        bldg_max_level: "Постройка достигла максимального уровня!",
        
        fishing_title: "🎣 Рыбалка на Волхове",
        fishing_strike_btn: "⚡ ПОДСЕЧЬ РЫБУ!",
        fishing_bite: "⚡ КЛЮЁТ! ПОДСЕКАЙ!",
        fishing_waiting: "Ожидание поклёвки...",
        fishing_catch_alert: "🎉 УДАЧНЫЙ УЛОВ!\nВы поймали: {name}\nДобыча: +{gold} 🪙 {wood}",
        
        achievements_title: "🏆 Зал Славы",
        ach_claim_btn: "Забрать ({gold} 🪙)",
        ach_completed: "✅ Завершено",
        ach_claimed_alert: "🎉 Достижение \"{title}\" получено! Награда: +{gold} 🪙",
        
        daily_title: "🎁 Дары и Подвиги",
        daily_rewards_subtitle: "Ежедневные Подарки",
        daily_quests_subtitle: "Богатырские Подвиги",
        daily_day: "День {day}",
        daily_claimed_badge: "Получено",
        daily_claim_btn: "Забрать",
        daily_claimed_alert: "🎉 Награда за День {day} получена: {label}!",
        quest_claimed_alert: "🎉 Подвиг выполнен! Получено +{gold} 🪙",
        
        scroll_header: "📜 ДРЕВНЯЯ ЛЕТОПИСЬ РУСИ 📜",
        scroll_close_btn: "Свернуть Летопись",
        
        music_now_playing: "🎵 Сейчас играет: {name}",

        // Hero Village Interactive Dialogues & Daily Gifts
        hero_ilya_gift: "Илья Муромец: «Земля русская под нашей защитой! Прими богатырский дар: +50 🪙»",
        hero_ilya_idle: "Илья Муромец: «Честь и слава защитникам Усадьбы! (Приходи за даром завтра)»",
        hero_dobrynya_gift: "Добрыня Никитич: «Солнце сияет над Русью! Держи отборную древесину: +25 🪵»",
        hero_dobrynya_idle: "Добрыня Никитич: «Порядок и закон в наших землях нерушимы! (Приходи за даром завтра)»",
        hero_alesha_gift: "Алёша Попович: «Глаз меток, а лук верен! Вот тебе звонкие червонцы: +35 🪙»",
        hero_alesha_idle: "Алёша Попович: «Лес спокоен, ни одна злая нечисть не пройдет! (Приходи за даром завтра)»",
        hero_vasilisa_gift: "Василиса Премудрая: «Мудрость веков хранит село. Дар тайных трав: +10 💧 Смолы»",
        hero_vasilisa_idle: "Василиса Премудрая: «Тайны природы раскрываются терпеливым. (Приходи за даром завтра)»",
        hero_vakula_gift: "Кузнец Вакула: «Жар в горне пылает! Держи бревна для строек: +30 🪵»",
        hero_vakula_idle: "Кузнец Вакула: «Куй железо, пока горячо! Усадьба богатеет. (Приходи за даром завтра)»",
        hero_radogor_gift: "Волхв Радогор: «Сила Перуна с тобой! Дар духов предков: +2 Энергии ⚡»",
        hero_radogor_idle: "Волхв Радогор: «Звезды сулят великие победы в походах! (Приходи за даром завтра)»",
        hero_peasant_talk: "Селянин: «Слава труду! Урожай в этом году богатый выдался!»",
        hero_maiden_talk: "Красна девица: «Хоровод водили, песни пели — благодать на Руси!»",
        hero_dog_talk: "Пес Дружок: «Гав-гав! *радостно виляет хвостом*»"
    },
    
    en: {
        game_title: "Old Russian Manor: Match-3",
        player_title: "Bogatyr",
        auth_btn: "Sign In",
        auth_success: "🎉 Successfully signed in! Progress synced.",
        auth_local: "Hero progress saved locally!",
        res_wood_tip: "Wood for buildings",
        res_gold_tip: "Gold coins",
        res_resin_tip: "Resin for amulets",
        res_energy_tip: "Heroic Energy",
        top_riddles_tip: "Skomorokh Riddles",
        top_achievements_tip: "Hall of Fame & Achievements",
        top_music_tip: "Change melody",
        top_sound_tip: "Sound",
        top_fullscreen_tip: "Fullscreen",
        top_rewards_btn: "🎁 Rewards",
        top_lang_tip: "Change language (RU / EN / TR)",
        
        season_prefix: "Season: ",
        season_autumn: "Golden Autumn",
        season_winter: "Frosty Winter",
        season_spring: "Blooming Spring",
        season_summer: "Sunny Summer",
        weather_autumn: "Gentle Leaf Fall",
        weather_winter: "Light Snowfall",
        weather_spring: "Spring Blossom",
        weather_summer: "Sunbeam Shimmer",
        btn_season_toggle: "🔄 Change",
        
        story_volhv_author: "Magi Radogor",
        story_volhv_init: "«Welcome to the Manor, Hero! Rebuild the village, tame fairytale beasts, and drive away evil forest spirits!»",
        story_smith_author: "Blacksmith Vakula",
        story_smith_upgraded: "«Splendid work! Building \"{name}\" upgraded to Level {level}! The Manor prospers!»",
        
        btn_fishing: "🎣 Fishing",
        btn_siege: "🌙 Siege (60s)",
        btn_campaign: "⚔️ Campaign (Lvl {lvl})",
        btn_back_to_manor: "⬅️ To Manor",
        
        nav_manor: "Manor",
        nav_campaign: "Campaign",
        nav_pets: "Pets",
        nav_market: "Market",
        nav_heroes: "Heroes",
        nav_wheel: "Wheel",
        nav_codex: "Codex",
        
        map_title: "🗺️ Map of the Hero's Journey",
        map_chapter: "Chapter",
        map_level: "Lvl",
        map_locked: "Complete previous levels first!",
        
        m3_moves: "Moves",
        m3_time: "Time",
        m3_targets: "Targets",
        m3_score: "Score",
        m3_siege_title: "🌙 Night Spirits Siege!",
        m3_booster_hammer: "🔨 Hammer",
        m3_booster_shuffle: "🌪️ Whirlwind",
        m3_booster_moves: "+5 Moves (📺)",
        m3_need_energy: "Not enough energy! Wait or spin the Veles Wheel.",
        m3_need_energy_siege: "Night siege requires 2 Energy units ⚡!",
        
        combo_good: "Good!",
        combo_great: "Great!",
        combo_bogatyr: "Bogatyr Strike!",
        combo_perun: "Perun's Might!",
        combo_epic: "Legendary Combo!",
        
        win_title: "Heroic Victory!",
        win_desc: "Battle won! Resources gathered for the Manor:",
        win_double_btn: "📺 Double Reward (x2)",
        win_continue_btn: "Continue",
        win_double_alert: "🎉 Reward doubled! Gained +{wood} 🪵 and +{gold} 🪙",
        
        loss_title: "Defeated by dark spirits...",
        loss_desc: "Out of moves! Take +5 moves or try again.",
        
        siege_win_title: "🌙 Night Siege Repelled!",
        siege_win_desc: "The spirits fled! You earned a heroic loot chest:",
        
        heroes_title: "🛡️ Bogatyr Squad",
        heroes_level: "Level: ",
        heroes_bonus: "Bonus: ",
        heroes_upgrade_btn: "🔨 Upgrade ({cost} 🪙)",
        heroes_max_lvl: "⭐ Max Level",
        heroes_not_enough_gold: "Not enough gold to recruit!",
        
        pets_title: "🐺 Fairytale Companions",
        pets_active_badge: "✨ In Battle",
        pets_choose_btn: "🐾 Take to Battle",
        pets_upgrade_btn: "🔨 Upgrade ({cost} 🪙)",
        pets_upgraded_alert: "✨ Pet {name} upgraded to Level {level}!",
        pets_chosen_alert: "🐾 Pet {name} is now accompanying you in battles!",
        
        market_title: "🏪 Sadko's Fair",
        market_free_gift_btn: "📺 Claim Gift (Free)",
        market_trade_btn: "Buy / Trade",
        market_deal_done: "🎉 Deal completed! Goods traded successfully.",
        market_gift_done: "🎉 Travelers' gift received: +300 🪙, +30 🪵, +10 💧!",
        market_not_enough: "Not enough resources for trade!",
        
        craft_title: "⚒️ Crafting Guild",
        
        wheel_title: "🎡 Veles Fortune Wheel",
        wheel_free_ready: "✨ Free spin available!",
        wheel_cooldown: "⏳ Next free spin in: {h}h {m}m",
        wheel_spin_free_btn: "Spin the Wheel",
        wheel_spin_ad_btn: "📺 Spin with Ad",
        wheel_reward_alert: "🎉 Veles Wheel gifted you: {label}!",
        
        codex_title: "📜 Folklore Lore & Bestiary",
        codex_region: "Habitat: ",
        codex_locked: "🔒 Unlocks at Level {lvl}",
        
        leaderboard_title: "👑 Hall of Fame",
        lb_col_rank: "#",
        lb_col_hero: "Hero",
        lb_col_level: "Level",
        lb_col_score: "Score",
        lb_you: "Bogatyr (You)",
        
        riddles_title: "🎭 Skomorokh Riddles",
        riddles_correct: "🎉 Correct! Skomorokh rewards you: +{gold} 🪙",
        riddles_wrong: "❌ Incorrect! Try another folklore riddle.",
        
        bldg_req_lvl: "Required for Level {lvl}:",
        bldg_upgrade_btn: "🔨 Upgrade",
        bldg_not_enough_res: "Not enough resources! Collect wood and gold in battles.",
        bldg_max_level: "Building has reached maximum level!",
        
        fishing_title: "🎣 River Fishing on the Volkhov",
        fishing_strike_btn: "⚡ HOOK FISH!",
        fishing_bite: "⚡ BITE! HOOK NOW!",
        fishing_waiting: "Waiting for a bite...",
        fishing_catch_alert: "🎉 LUCKY CATCH!\nYou caught: {name}\nLoot: +{gold} 🪙 {wood}",
        
        achievements_title: "🏆 Hall of Fame",
        ach_claim_btn: "Claim ({gold} 🪙)",
        ach_completed: "✅ Completed",
        ach_claimed_alert: "🎉 Achievement \"{title}\" claimed! Reward: +{gold} 🪙",
        
        daily_title: "🎁 Daily Gifts & Deeds",
        daily_rewards_subtitle: "Daily Login Gifts",
        daily_quests_subtitle: "Heroic Deeds",
        daily_day: "Day {day}",
        daily_claimed_badge: "Claimed",
        daily_claim_btn: "Claim",
        daily_claimed_alert: "🎉 Day {day} reward claimed: {label}!",
        quest_claimed_alert: "🎉 Heroic deed finished! Received +{gold} 🪙",
        
        scroll_header: "📜 ANCIENT FOLK CHRONICLE 📜",
        scroll_close_btn: "Close Chronicle",
        
        music_now_playing: "🎵 Now playing: {name}",

        // Hero Village Interactive Dialogues & Daily Gifts
        hero_ilya_gift: "Ilya Muromets: «The realm is protected! Accept the hero's gift: +50 🪙»",
        hero_ilya_idle: "Ilya Muromets: «Honor to the defenders of the Manor! (Come back tomorrow for a gift)»",
        hero_dobrynya_gift: "Dobrynya Nikitich: «The sun shines upon our lands! Here is quality timber: +25 🪵»",
        hero_dobrynya_idle: "Dobrynya Nikitich: «Law and peace remain unshaken! (Come back tomorrow for a gift)»",
        hero_alesha_gift: "Alyosha Popovich: «My bow is true! Take these shiny coins: +35 🪙»",
        hero_alesha_idle: "Alyosha Popovich: «The forest is peaceful today! (Come back tomorrow for a gift)»",
        hero_vasilisa_gift: "Vasilisa the Wise: «Ancient wisdom guides us. Take sacred resin: +10 💧»",
        hero_vasilisa_idle: "Vasilisa the Wise: «Nature reveals its secrets to the patient. (Come back tomorrow for a gift)»",
        hero_vakula_gift: "Blacksmith Vakula: «The forge burns hot! Here are sturdy logs for building: +30 🪵»",
        hero_vakula_idle: "Blacksmith Vakula: «Strike while the iron is hot! (Come back tomorrow for a gift)»",
        hero_radogor_gift: "Magi Radogor: «Perun's blessing upon you! Spirit gift: +2 Energy ⚡»",
        hero_radogor_idle: "Magi Radogor: «The stars foretell great victories! (Come back tomorrow for a gift)»",
        hero_peasant_talk: "Villager: «Glory to honest work! The harvest is plentiful this year!»",
        hero_maiden_talk: "Fair Maiden: «Singing songs and weaving wreaths under the golden sun!»",
        hero_dog_talk: "Druzhok the Dog: «Woof-woof! *happily wags tail*»"
    },
    
    tr: {
        game_title: "Eski Rus Malikanesi: 3'lü Eşleştirme",
        player_title: "Cengaver",
        auth_btn: "Giriş Yap",
        auth_success: "🎉 Başarıyla giriş yapıldı! İlerleme eşitlendi.",
        auth_local: "Kahraman profili yerel olarak kaydedildi!",
        res_wood_tip: "Binalar için Ahşap",
        res_gold_tip: "Altın Paralar",
        res_resin_tip: "Tılsımlar için Reçine",
        res_energy_tip: "Kahramanlık Enerjisi",
        top_riddles_tip: "Skomorokh Bilmeceleri",
        top_achievements_tip: "Şeref Salonu ve Başarımlar",
        top_music_tip: "Melodiyi Değiştir",
        top_sound_tip: "Ses",
        top_fullscreen_tip: "Tam Ekran",
        top_rewards_btn: "🎁 Ödüller",
        top_lang_tip: "Dili değiştir (RU / EN / TR)",
        
        season_prefix: "Mevsim: ",
        season_autumn: "Altın Sonbahar",
        season_winter: "Karlı Kış",
        season_spring: "Çiçekli Bahar",
        season_summer: "Güneşli Yaz",
        weather_autumn: "Yaprak Dökümü",
        weather_winter: "Hafif Kar Yağışı",
        weather_spring: "Bahar Çiçeklenmesi",
        weather_summer: "Güneş Işıltısı",
        btn_season_toggle: "🔄 Değiştir",
        
        story_volhv_author: "Bilge Radogor",
        story_volhv_init: "«Konağa hoş geldin, Cengaver! Köyü yeniden kur, masalsı yoldaşları eğit ve orman canavarlarını defet!»",
        story_smith_author: "Demirci Vakula",
        story_smith_upgraded: "«Göz kamaştırıcı! \"{name}\" binası Seviye {level}'e yükseltildi! Konak zenginleşiyor!»",
        
        btn_fishing: "🎣 Balık Tutma",
        btn_siege: "🌙 Kuşatma (60s)",
        btn_campaign: "⚔️ Sefere Çık (Sev. {lvl})",
        btn_back_to_manor: "⬅️ Konağa",
        
        nav_manor: "Köy",
        nav_campaign: "Sefer",
        nav_pets: "Yoldaşlar",
        nav_market: "Pazar",
        nav_heroes: "Kahramanlar",
        nav_wheel: "Çark",
        nav_codex: "Tarihçe",
        
        map_title: "🗺️ Cengaver Yol Haritası",
        map_chapter: "Bölüm",
        map_level: "Sev.",
        map_locked: "Önce önceki seviyeleri tamamlayın!",
        
        m3_moves: "Hamleler",
        m3_time: "Süre",
        m3_targets: "Hedefler",
        m3_score: "Puan",
        m3_siege_title: "🌙 Gece Canavarları Kuşatması!",
        m3_booster_hammer: "🔨 Çekiç",
        m3_booster_shuffle: "🌪️ Kasırga",
        m3_booster_moves: "+5 Hamle (📺)",
        m3_need_energy: "Yetersiz enerji! Bekleyin veya Veles Çarkı'nı çevirin.",
        m3_need_energy_siege: "Gece saldırısı için 2 Enerji ⚡ gereklidir!",
        
        combo_good: "Güzel!",
        combo_great: "Harika!",
        combo_bogatyr: "Cengaver Darbesi!",
        combo_perun: "Perun'un Kudreti!",
        combo_epic: "Efsanevi Kombo!",
        
        win_title: "Cengaver Zaferi!",
        win_desc: "Savaş kazanıldı! Konak için kaynaklar toplandı:",
        win_double_btn: "📺 Ödülü İkiye Katla (x2)",
        win_continue_btn: "Devam Et",
        win_double_alert: "🎉 Ödül ikiye katlandı! +{wood} 🪵 ve +{gold} 🪙 kazanıldı",
        
        loss_title: "Karanlık güçler galip geldi...",
        loss_desc: "Hamleler bitti! +5 hamle alın veya tekrar deneyin.",
        
        siege_win_title: "🌙 Gece Kuşatması Püskürtüldü!",
        siege_win_desc: "Canavarlar kaçtı! Gece ganimet sandığı kazandınız:",
        
        heroes_title: "🛡️ Cengaver Birliği",
        heroes_level: "Seviye: ",
        heroes_bonus: "Bonus: ",
        heroes_upgrade_btn: "🔨 Yükselt ({cost} 🪙)",
        heroes_max_lvl: "⭐ Maksimum Seviye",
        heroes_not_enough_gold: "Asker toplamak için yetersiz altın!",
        
        pets_title: "🐺 Masalsı Yoldaşlar",
        pets_active_badge: "✨ Savaşta",
        pets_choose_btn: "🐾 Savaşa Al",
        pets_upgrade_btn: "🔨 Geliştir ({cost} 🪙)",
        pets_upgraded_alert: "✨ Yoldaş {name} Seviye {level}'e yükseltildi!",
        pets_chosen_alert: "🐾 {name} artık savaşlarda size eşlik ediyor!",
        
        market_title: "🏪 Sadko Pazarı",
        market_free_gift_btn: "📺 Hediyeyi Al (Ücretsiz)",
        market_trade_btn: "Satın Al / Takas",
        market_deal_done: "🎉 Takas tamamlandı! Ürünler başarıyla değiş tokuş edildi.",
        market_gift_done: "🎉 Gezginlerin hediyesi alındı: +300 🪙, +30 🪵, +10 💧!",
        market_not_enough: "Takas için yetersiz kaynak!",
        
        craft_title: "⚒️ Zanaatkarlar Loncası",
        
        wheel_title: "🎡 Veles Çarkı",
        wheel_free_ready: "✨ Ücretsiz çevirme hazır!",
        wheel_cooldown: "⏳ Sonraki ücretsiz çevirme: {h}sa {m}dk",
        wheel_spin_free_btn: "Şansını Dene",
        wheel_spin_ad_btn: "📺 Reklamla Çevir",
        wheel_reward_alert: "🎉 Veles Çarkı size armağan etti: {label}!",
        
        codex_title: "📜 Halk Masalları ve Canavarlar",
        codex_region: "Bölge: ",
        codex_locked: "🔒 Seviye {lvl}'de açılır",
        
        leaderboard_title: "👑 Şeref Salonu",
        lb_col_rank: "#",
        lb_col_hero: "Kahraman",
        lb_col_level: "Seviye",
        lb_col_score: "Puan",
        lb_you: "Cengaver (Sen)",
        
        riddles_title: "🎭 Skomorokh Bilmeceleri",
        riddles_correct: "🎉 Doğru! Skomorokh ödülünü veriyor: +{gold} 🪙",
        riddles_wrong: "❌ Yanlış! Başka bir halk bilmecesi dene.",
        
        bldg_req_lvl: "Seviye {lvl} için gerekli:",
        bldg_upgrade_btn: "🔨 Yükselt",
        bldg_not_enough_res: "Yetersiz kaynak! Savaşlarda ahşap ve altın toplayın.",
        bldg_max_level: "Bina maksimum seviyeye ulaştı!",
        
        fishing_title: "🎣 Volkhov Nehrinde Balıkçılık",
        fishing_strike_btn: "⚡ BALIĞI ÇEK!",
        fishing_bite: "⚡ ISIRDI! HEMEN ÇEK!",
        fishing_waiting: "Isırık bekleniyor...",
        fishing_catch_alert: "🎉 ŞANSLI AV!\nYakalanan: {name}\nGanimet: +{gold} 🪙 {wood}",
        
        achievements_title: "🏆 Şeref Salonu",
        ach_claim_btn: "Ödülü Al ({gold} 🪙)",
        ach_completed: "✅ Tamamlandı",
        ach_claimed_alert: "🎉 \"{title}\" başarımı tamamlandı! Ödül: +{gold} 🪙",
        
        daily_title: "🎁 Günlük Hediyeler ve Görevler",
        daily_rewards_subtitle: "Günlük Giriş Hediyeleri",
        daily_quests_subtitle: "Kahramanlık Görevleri",
        daily_day: "{day}. Gün",
        daily_claimed_badge: "Alındı",
        daily_claim_btn: "Al",
        daily_claimed_alert: "🎉 {day}. Gün ödülü alındı: {label}!",
        quest_claimed_alert: "🎉 Görev tamamlandı! +{gold} 🪙 kazanıldı",
        
        scroll_header: "📜 KADİM DESTANLAR VE TARİHÇE 📜",
        scroll_close_btn: "Tarihçeyi Kapat",
        
        music_now_playing: "🎵 Şu an çalan: {name}",

        // Hero Village Interactive Dialogues & Daily Gifts
        hero_ilya_gift: "İlya Muromets: «Diyarımız koruma altında! Cengaver hediyeni kabul et: +50 🪙»",
        hero_ilya_idle: "İlya Muromets: «Konağın muhafızlarına şan olsun! (Yarın yeni hediye için gel)»",
        hero_dobrynya_gift: "Dobrynya Nikitiç: «Topraklarımızın üstünde güneş parlıyor! İşte keresteler: +25 🪵»",
        hero_dobrynya_idle: "Dobrynya Nikitiç: «Huzur ve nizam sarsılmaz! (Yarın yeni hediye için gel)»",
        hero_alesha_gift: "Alyoşa Popoviç: «Gözüm keskin, yayım sağlam! İşte parlak altınlar: +35 🪙»",
        hero_alesha_idle: "Alyoşa Popoviç: «Orman bugün çok sakin! (Yarın yeni hediye için gel)»",
        hero_vasilisa_gift: "Bilge Vasilisa: «Kadim bilgelik bizi koruyor. Kutsal reçine: +10 💧»",
        hero_vasilisa_idle: "Bilge Vasilisa: «Doğa sırlarını sabırlı olanlara açar. (Yarın yeni hediye için gel)»",
        hero_vakula_gift: "Demirci Vakula: «Ocak alev alev yanıyor! İşte sağlam kütükler: +30 🪵»",
        hero_vakula_idle: "Demirci Vakula: «Demir tavında dövülür! Konak büyüyor. (Yarın yeni hediye için gel)»",
        hero_radogor_gift: "Bilge Radogor: «Perun'un bereketi seninle olsun! Ruhların hediyesi: +2 Enerji ⚡»",
        hero_radogor_idle: "Bilge Radogor: «Yıldızlar büyük zaferler vadediyor! (Yarın yeni hediye için gel)»",
        hero_peasant_talk: "Köylü: «Emeğe saygı! Bu yıl hasat çok bereketli!»",
        hero_maiden_talk: "Güzel Kız: «Güneşin altında şarkılar söylüyor ve dans ediyoruz!»",
        hero_dog_talk: "Drujok: «Hav-hav! *sevinçle kuyruk sallar*»"
    }
};

class I18nManager {
    constructor() {
        this.currentLang = 'ru';
        this.supportedLangs = ['ru', 'en', 'tr'];
    }

    init() {
        const savedLang = localStorage.getItem('slavic_manor_lang');
        if (savedLang && this.supportedLangs.includes(savedLang)) {
            this.currentLang = savedLang;
        } else if (window.vkSDK && window.vkSDK.lang) {
            this.currentLang = window.vkSDK.lang;
        } else {
            let detected = '';
            try {
                const params = new URLSearchParams(window.location.search || '');
                detected = params.get('vk_language') || params.get('lang') || '';
            } catch (e) {}

            if (!detected) {
                detected = (navigator.language || 'ru').toLowerCase();
            }

            if (detected.startsWith('tr')) this.currentLang = 'tr';
            else if (detected.startsWith('en')) this.currentLang = 'en';
            else this.currentLang = 'ru';
        }

        this.applyLanguage(this.currentLang);
    }

    setLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) return;
        this.currentLang = lang;
        localStorage.setItem('slavic_manor_lang', lang);
        this.applyLanguage(lang);
    }

    nextLanguage() {
        const idx = this.supportedLangs.indexOf(this.currentLang);
        const nextLang = this.supportedLangs[(idx + 1) % this.supportedLangs.length];
        this.setLanguage(nextLang);
        return nextLang;
    }

    t(key, params = {}) {
        const dict = I18N_DATA[this.currentLang] || I18N_DATA['ru'];
        let str = dict[key] || (I18N_DATA['ru'] && I18N_DATA['ru'][key]) || key;
        for (let param in params) {
            str = str.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
        }
        return str;
    }

    applyLanguage(lang) {
        document.documentElement.lang = lang;
        const dict = I18N_DATA[lang] || I18N_DATA['ru'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key]) {
                el.title = dict[key];
            }
        });

        const langBadge = document.getElementById('lang-switch-badge');
        if (langBadge) {
            langBadge.textContent = lang === 'ru' ? '🇷🇺 RU' : (lang === 'en' ? '🇬🇧 EN' : '🇹🇷 TR');
        }

        if (window.app && typeof window.app.updateLocalizedUI === 'function') {
            window.app.updateLocalizedUI();
        }
    }
}

window.I18nManager = I18nManager;
window.i18n = new I18nManager();

// === vk-sdk.js ===
/**
 * VK Games & VK Play Universal SDK Adapter
 * Conforms 100% to VK Mini Apps & VK Play Guidelines and Moderation Requirements
 * Handles VK Bridge (vkBridge) & VK Play (iframeApi) & Safe Mock Fallback
 */
class VKSDKWrapper {
    constructor() {
        this.platform = 'mock'; // 'vk_mini_apps' | 'vk_play' | 'mock'
        this.isInitialized = false;
        this.isMock = false;
        this.isShowingAd = false;
        this.isGameplayActive = false;
        this.lastFullscreenAdTime = 0;
        this.fullscreenCooldownMs = 65000; // 65 seconds strict cooldown (requirement >= 60s)
        this.user = null;
        this.lang = 'ru';
        this.flags = { difficulty: 'normal', extra_moves: '0', bonus_gold_rate: '1' };
        
        // Cache & debounce queue for saves
        this.lastSavedJson = null;
        this.isSavingStorage = false;
        this.pendingSaveData = null;

        // Leaderboard throttling
        this.lastLeaderboardScore = -1;
        this.lastLeaderboardTime = 0;
    }

    async init() {
        // Detect launch environment
        let urlParams = null;
        try {
            urlParams = new URLSearchParams(window.location.search || '');
        } catch (e) {
            urlParams = new URLSearchParams('');
        }

        const hasVkParams = urlParams.has('vk_user_id') || urlParams.has('vk_app_id') || urlParams.has('vk_platform');
        const isVkBridgeAvailable = typeof window.vkBridge !== 'undefined' && typeof window.vkBridge.send === 'function';
        const isVkPlay = typeof window.iframeApi !== 'undefined' || 
            (typeof window.location !== 'undefined' && window.location.hostname && (window.location.hostname.includes('vkplay.ru') || window.location.hostname.includes('mail.ru')));

        // Language detection from URL
        const vkLang = urlParams.get('vk_language') || urlParams.get('lang');
        if (vkLang) {
            const l = vkLang.toLowerCase();
            if (l.startsWith('ru') || l.startsWith('be') || l.startsWith('kk') || l.startsWith('uk')) {
                this.lang = 'ru';
            } else if (l.startsWith('tr')) {
                this.lang = 'tr';
            } else {
                this.lang = 'en';
            }
            if (window.i18n && typeof window.i18n.setLanguage === 'function') {
                window.i18n.setLanguage(this.lang);
            }
        }

        // 1. VK Mini Apps initialization
        if (isVkBridgeAvailable && (hasVkParams || window.vkBridge.isEmbedded?.() || window.self !== window.top)) {
            try {
                this.platform = 'vk_mini_apps';
                // Official init call
                await window.vkBridge.send('VKWebAppInit');
                this.isInitialized = true;
                this.isMock = false;

                // Subscribe to VK Bridge lifecycle events (VK moderation Rule 2.2.5 - instant mute on hide)
                window.vkBridge.subscribe((e) => {
                    if (!e || !e.detail) return;
                    const type = e.detail.type;
                    if (type === 'VKWebAppViewHide') {
                        if (window.gameAudio) window.gameAudio.mute();
                    } else if (type === 'VKWebAppViewRestore') {
                        if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                            window.gameAudio.unmute();
                        }
                    }
                });

                // Get User Info if available
                try {
                    const userInfo = await window.vkBridge.send('VKWebAppGetUserInfo');
                    if (userInfo) {
                        this.user = userInfo;
                    }
                } catch (e) {
                    // Not fatal, guest mode
                }

                console.log('[VK-SDK] Initialized successfully with VK Bridge (VK Mini Apps)');
            } catch (err) {
                console.warn('[VK-SDK] VKWebAppInit failed, falling back to mock mode:', err);
                this.setupMock();
            }
        } else if (isVkPlay) {
            // 2. VK Play initialization
            try {
                this.platform = 'vk_play';
                this.isInitialized = true;
                this.isMock = false;
                if (typeof window.iframeApi === 'function') {
                    window.iframeApi({
                        appid: urlParams.get('appid') || '',
                        onReady: (api) => {
                            this.vkPlayApi = api;
                            if (api && api.user) {
                                this.user = api.user;
                            }
                        }
                    });
                } else if (typeof window.iframeApi === 'object') {
                    this.vkPlayApi = window.iframeApi;
                    if (window.iframeApi.user) {
                        this.user = window.iframeApi.user;
                    }
                }
                console.log('[VK-SDK] Initialized successfully with VK Play (iframeApi)');
            } catch (err) {
                console.warn('[VK-SDK] VK Play init failed, falling back to mock:', err);
                this.setupMock();
            }
        } else {
            // 3. Local browser / Mock fallback
            this.setupMock();
        }

        // Global browser visibility & audio safety bindings
        this.bindBrowserVisibilityEvents();
        return true;
    }

    bindBrowserVisibilityEvents() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (window.gameAudio) window.gameAudio.mute();
            } else {
                if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
            }
        });

        window.addEventListener('blur', () => {
            if (window.gameAudio) window.gameAudio.mute();
        });

        window.addEventListener('focus', () => {
            if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
        });

        window.addEventListener('pagehide', () => {
            if (window.gameAudio) window.gameAudio.mute();
        });

        window.addEventListener('pageshow', () => {
            if (window.gameAudio && !this.isShowingAd && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
        });
    }

    setupMock() {
        this.platform = 'mock';
        this.isMock = true;
        this.isInitialized = true;
        this.user = { id: 0, first_name: 'Богатырь', last_name: 'Локально' };
        console.log('[VK-SDK] Running in safe Mock mode (Offline / Local browser). All features emulated without errors.');
    }

    getFlags() {
        return this.flags;
    }

    notifyLoadingReady() {
        // Game loading is complete
        console.log('[VK-SDK] Game loading ready notified');
    }

    startGameplay() {
        this.isGameplayActive = true;
    }

    stopGameplay() {
        this.isGameplayActive = false;
    }

    // --- MONETIZATION: INTERSTITIAL ADS ---
    async showFullscreenAdv(callbacks = {}, currentLevel = 1, force = false) {
        const cb = typeof callbacks === 'function' ? { onClose: callbacks } : (callbacks || {});
        let closed = false;
        const safeClose = (shown) => {
            if (!closed) {
                closed = true;
                if (cb.onClose) cb.onClose(shown);
            }
        };

        // Concurrency Guard: never launch two ads simultaneously
        if (this.isShowingAd) {
            safeClose(false);
            return;
        }

        const now = Date.now();
        const timeSinceLastAd = now - this.lastFullscreenAdTime;

        // Strict Cooldown Guard: at least 60 seconds (moderation rule 2.2.5)
        if (!force && this.lastFullscreenAdTime > 0 && timeSinceLastAd < this.fullscreenCooldownMs) {
            safeClose(false);
            return;
        }

        // VK Play integration
        if (this.platform === 'vk_play') {
            this.isShowingAd = true;
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const finishVkPlayAd = (shown) => {
                this.lastFullscreenAdTime = Date.now();
                this.isShowingAd = false;
                if (window.gameAudio && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
                safeClose(shown);
            };

            if (this.vkPlayApi && this.vkPlayApi.ads && typeof this.vkPlayApi.ads.showFullscreenAdv === 'function') {
                try {
                    this.vkPlayApi.ads.showFullscreenAdv({
                        callbacks: {
                            onClose: () => finishVkPlayAd(true),
                            onError: (err) => {
                                this.isShowingAd = false;
                                if (window.gameAudio && !window.gameAudio.isUserMuted) window.gameAudio.unmute();
                                if (cb.onError) cb.onError(err);
                                safeClose(false);
                            }
                        }
                    });
                    return;
                } catch (e) {
                    finishVkPlayAd(true);
                    return;
                }
            } else if (this.vkPlayApi && typeof this.vkPlayApi.showAds === 'function') {
                try {
                    this.vkPlayApi.showAds({ interstitial: true });
                    finishVkPlayAd(true);
                    return;
                } catch (e) {
                    finishVkPlayAd(true);
                    return;
                }
            } else {
                finishVkPlayAd(true);
                return;
            }
        }

        // Mock mode or non-embedded
        if (this.isMock || !window.vkBridge || typeof window.vkBridge.send !== 'function') {
            this.lastFullscreenAdTime = now;
            console.log('[VK-SDK Mock] Interstitial ad simulated.');
            safeClose(true);
            return;
        }

        try {
            this.isShowingAd = true;
            // Instantly mute audio before ad
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const res = await window.vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' });
            this.lastFullscreenAdTime = Date.now();
            this.isShowingAd = false;
            
            // Restore sound if user did not mute
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
            safeClose(!!(res && res.result));
        } catch (err) {
            this.isShowingAd = false;
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
            if (cb.onError) cb.onError(err);
            safeClose(false);
        }
    }

    // --- MONETIZATION: REWARDED VIDEO ADS ---
    async showRewardedVideo(callbacks = {}) {
        const cb = typeof callbacks === 'function' ? { onRewarded: callbacks } : (callbacks || {});
        let closed = false;
        const safeClose = (shown) => {
            if (!closed) {
                closed = true;
                if (cb.onClose) cb.onClose(shown);
            }
        };

        if (this.isShowingAd) {
            safeClose(false);
            return;
        }

        // VK Play integration
        if (this.platform === 'vk_play') {
            this.isShowingAd = true;
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const finishVkPlayRewarded = (rewarded) => {
                this.isShowingAd = false;
                if (window.gameAudio && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
                if (rewarded && cb.onRewarded) cb.onRewarded();
                safeClose(rewarded);
            };

            if (this.vkPlayApi && this.vkPlayApi.ads && typeof this.vkPlayApi.ads.showRewardedVideo === 'function') {
                try {
                    this.vkPlayApi.ads.showRewardedVideo({
                        callbacks: {
                            onRewarded: () => finishVkPlayRewarded(true),
                            onClose: () => finishVkPlayRewarded(false),
                            onError: (err) => {
                                this.isShowingAd = false;
                                if (window.gameAudio && !window.gameAudio.isUserMuted) window.gameAudio.unmute();
                                if (cb.onError) cb.onError(err);
                                safeClose(false);
                            }
                        }
                    });
                    return;
                } catch (e) {
                    finishVkPlayRewarded(true);
                    return;
                }
            } else if (this.vkPlayApi && typeof this.vkPlayApi.showAds === 'function') {
                try {
                    this.vkPlayApi.showAds({ rewarded: true });
                    finishVkPlayRewarded(true);
                    return;
                } catch (e) {
                    finishVkPlayRewarded(true);
                    return;
                }
            } else {
                finishVkPlayRewarded(true);
                return;
            }
        }

        // Mock mode simulation
        if (this.isMock || !window.vkBridge || typeof window.vkBridge.send !== 'function') {
            console.log('[VK-SDK Mock] Rewarded ad simulated. Granting reward.');
            if (cb.onRewarded) cb.onRewarded();
            safeClose(true);
            return;
        }

        try {
            this.isShowingAd = true;
            if (window.gameAudio) window.gameAudio.mute();
            if (cb.onOpen) cb.onOpen();

            const res = await window.vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' });
            this.isShowingAd = false;
            
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }

            const rewarded = !!(res && res.result);
            if (rewarded && cb.onRewarded) {
                cb.onRewarded();
            }
            safeClose(rewarded);
        } catch (err) {
            this.isShowingAd = false;
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.unmute();
            }
            if (cb.onError) cb.onError(err);
            safeClose(false);
        }
    }

    // --- PERSISTENCE: CLOUD STORAGE (VKWebAppStorageSet / Get) + LOCALSTORAGE ---
    async loadData() {
        let cloudData = null;
        if (this.platform === 'vk_mini_apps' && window.vkBridge && typeof window.vkBridge.send === 'function') {
            try {
                const res = await window.vkBridge.send('VKWebAppStorageGet', { keys: ['slavic_manor_save'] });
                if (res && Array.isArray(res.keys)) {
                    const item = res.keys.find(k => k.key === 'slavic_manor_save');
                    if (item && item.value) {
                        cloudData = JSON.parse(item.value);
                    }
                }
            } catch (e) {
                console.warn('[VK-SDK] VKWebAppStorageGet notification:', e);
            }
        }

        let localData = null;
        try {
            const local = localStorage.getItem('slavic_manor_save');
            if (local) localData = JSON.parse(local);
        } catch (e) {
            console.warn('[VK-SDK] LocalStorage load notification:', e);
        }

        let result = null;
        if (cloudData && localData) {
            result = {
                ...cloudData,
                ...localData,
                level: Math.max(localData.level || 1, cloudData.level || 1),
                scoreTotal: Math.max(localData.scoreTotal || 0, cloudData.scoreTotal || 0),
                gold: Math.max(localData.gold || 0, cloudData.gold || 0),
                wood: Math.max(localData.wood || 0, cloudData.wood || 0),
                resin: Math.max(localData.resin || 0, cloudData.resin || 0)
            };
        } else {
            result = cloudData || localData || null;
        }

        if (result) {
            this.lastSavedJson = JSON.stringify(result);
        }
        return result;
    }

    async saveData(data) {
        if (!data) return;
        try {
            const currentJson = JSON.stringify(data);

            // 1. Always duplicate to localStorage immediately
            localStorage.setItem('slavic_manor_save', currentJson);

            // 2. Deduplication: skip redundant identical saves
            if (this.lastSavedJson === currentJson) {
                return;
            }

            // 3. Concurrency queue
            if (this.isSavingStorage) {
                this.pendingSaveData = data;
                return;
            }

            if (this.platform === 'vk_mini_apps' && window.vkBridge && typeof window.vkBridge.send === 'function') {
                this.isSavingStorage = true;
                try {
                    // Value size check (VK storage max 4096 bytes per key)
                    if (currentJson.length <= 4096) {
                        await window.vkBridge.send('VKWebAppStorageSet', {
                            key: 'slavic_manor_save',
                            value: currentJson
                        });
                        this.lastSavedJson = currentJson;
                    } else {
                        console.warn('[VK-SDK] Save size exceeds 4KB VK storage limit:', currentJson.length);
                    }
                } catch (e) {
                    console.warn('[VK-SDK] VKWebAppStorageSet notice:', e);
                } finally {
                    this.isSavingStorage = false;
                    if (this.pendingSaveData) {
                        const nextData = this.pendingSaveData;
                        this.pendingSaveData = null;
                        setTimeout(() => this.saveData(nextData), 1000);
                    }
                }
            } else {
                this.lastSavedJson = currentJson;
            }
        } catch (err) {
            console.warn('[VK-SDK] SaveData error:', err);
        }
    }

    // --- LEADERBOARDS ---
    async submitLeaderboardScore(score) {
        const validScore = Math.max(0, Math.floor(score || 0));
        const now = Date.now();
        if (validScore <= this.lastLeaderboardScore && (now - this.lastLeaderboardTime) < 3000) {
            return;
        }

        this.lastLeaderboardScore = validScore;
        this.lastLeaderboardTime = now;
        try {
            localStorage.setItem('slavic_manor_high_score', String(validScore));
            if (this.platform === 'vk_mini_apps' && window.vkBridge && typeof window.vkBridge.send === 'function') {
                try {
                    await window.vkBridge.send('VKWebAppShowLeaderBoardBox', { user_result: validScore });
                } catch (e) {
                    // Non-fatal if leaderboard not configured in app settings
                }
            }
        } catch (e) {
            console.warn('[VK-SDK] Leaderboard notice:', e);
        }
    }
}

window.VKSDKWrapper = VKSDKWrapper;
window.vkSDK = new VKSDKWrapper();

// === audio.js ===
class SlavicAudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.isUserMuted = false;
        this.musicPlaying = false;
        this.currentTrackIdx = 0;
        this.musicInterval = null;
        this.unlocked = false;

        this.tracks = [
            {
                id: 'gusli',
                name: '«Былинные Гусли»',
                scale: [220, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25], // Pentatonic Folk A/C
                tempo: 450
            },
            {
                id: 'fair',
                name: '«Ярмарочная Сказка»',
                scale: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25], // C Folk Pentatonic
                tempo: 360
            },
            {
                id: 'evening',
                name: '«Вечерний Посад»',
                scale: [196.00, 220.00, 261.63, 293.66, 329.63, 392.00], // G Soft Folk
                tempo: 520
            }
        ];

        this.bindMobileUnlock();
    }

    bindMobileUnlock() {
        const unlock = () => {
            this.unlockAudio();
            if (this.unlocked) {
                ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click'].forEach(evt => {
                    window.removeEventListener(evt, unlock, true);
                    document.removeEventListener(evt, unlock, true);
                });
            }
        };

        ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click'].forEach(evt => {
            window.addEventListener(evt, unlock, { passive: true, capture: true });
            document.addEventListener(evt, unlock, { passive: true, capture: true });
        });
    }

    initContext() {
        if (!this.unlocked) return;
        if (!this.ctx) {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            } catch (e) {}
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            try {
                const res = this.ctx.resume();
                if (res && typeof res.catch === 'function') res.catch(() => {});
            } catch (e) {}
        }
    }

    unlockAudio() {
        this.unlocked = true;
        try {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                try {
                    const res = this.ctx.resume();
                    if (res && typeof res.catch === 'function') res.catch(() => {});
                } catch (e) {}
            }
            if (this.ctx) {
                const buffer = this.ctx.createBuffer(1, 1, 22050);
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                source.connect(this.ctx.destination);
                source.start(0);
            }
        } catch (e) {}

        if (!this.isUserMuted && !this.musicPlaying) {
            this.startMusic();
        }
    }

    startMusic() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.musicPlaying || this.isMuted || this.isUserMuted) return;
        this.musicPlaying = true;
        this.playMelodyLoop();
    }

    stopMusic() {
        this.musicPlaying = false;
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
    }

    nextTrack() {
        this.currentTrackIdx = (this.currentTrackIdx + 1) % this.tracks.length;
        if (this.musicInterval) clearInterval(this.musicInterval);
        if (this.musicPlaying && !this.isUserMuted && !this.isMuted) this.playMelodyLoop();
        return this.tracks[this.currentTrackIdx];
    }

    playMelodyLoop() {
        if (this.musicInterval) clearInterval(this.musicInterval);
        const track = this.tracks[this.currentTrackIdx];
        let step = 0;

        this.musicInterval = setInterval(() => {
            if (this.isMuted || this.isUserMuted || !this.musicPlaying || !this.ctx) return;
            const melodyPattern = [0, 2, 4, 3, 5, 4, 2, 1, 3, 2, 0, 4];
            const noteIdx = melodyPattern[step % melodyPattern.length];
            const freq = track.scale[noteIdx % track.scale.length];
            
            // Soft warm plucked gusli sound
            this.playGusliPluck(freq, 0.045);
            step++;
        }, track.tempo);
    }

    playGusliPluck(freq, vol = 0.06) {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            gain.gain.setValueAtTime(vol, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.9);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.9);
        } catch (e) {}
    }

    playSwap() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.08);
        } catch (e) {}
    }

    playMatch() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1046.5, this.ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.15);
        } catch (e) {}
    }

    playSpecial() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.25);
        } catch (e) {}
    }

    playWin() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                try {
                    if (this.isMuted || this.isUserMuted || !this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.2);
                } catch (e) {}
            }, i * 70);
        });
    }

    playUpgrade() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(330, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(660, this.ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.2);
        } catch (e) {}
    }

    playExplosion() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || this.isUserMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.35);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.35);
        } catch (e) {}
    }

    playBomb() {
        this.playExplosion();
    }

    playSpecial() {
        this.playExplosion();
    }

    mute() {
        this.isMuted = true;
        if (this.ctx && this.ctx.state === 'running') {
            try { this.ctx.suspend(); } catch (e) {}
        }
    }

    unmute() {
        if (this.isUserMuted) {
            this.isMuted = true;
            return;
        }
        this.isMuted = false;
        if (this.ctx && this.ctx.state === 'suspended') {
            try { this.ctx.resume(); } catch (e) {}
        }
        if (this.unlocked && !this.musicPlaying) {
            this.startMusic();
        }
    }

    toggleSound() {
        return this.toggleUserMute();
    }

    toggleUserMute() {
        this.isUserMuted = !this.isUserMuted;
        if (this.isUserMuted) {
            this.mute();
            this.stopMusic();
        } else {
            const isAdShowing = (window.vkSDK && window.vkSDK.isShowingAd) || false;
            if (!isAdShowing) {
                this.unmute();
            }
        }
        return !this.isUserMuted;
    }
}

window.SlavicAudioEngine = SlavicAudioEngine;
window.gameAudio = new SlavicAudioEngine();

// Rule 2.2.5 VK Moderation: Immediate sound muting on view hide and visibility change
if (typeof window !== 'undefined') {
    const handleAudioHide = () => {
        if (window.gameAudio) window.gameAudio.mute();
    };

    const handleAudioRestore = () => {
        const isAdShowing = (window.vkSDK && window.vkSDK.isShowingAd) || false;
        if (window.gameAudio && !isAdShowing && !window.gameAudio.isUserMuted) {
            window.gameAudio.unmute();
        }
    };

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) handleAudioHide();
        else handleAudioRestore();
    });

    window.addEventListener('blur', handleAudioHide);
    window.addEventListener('focus', handleAudioRestore);
    window.addEventListener('pagehide', handleAudioHide);
    window.addEventListener('pageshow', handleAudioRestore);

    if (window.vkBridge && typeof window.vkBridge.subscribe === 'function') {
        window.vkBridge.subscribe((e) => {
            if (!e || !e.detail) return;
            if (e.detail.type === 'VKWebAppViewHide') handleAudioHide();
            else if (e.detail.type === 'VKWebAppViewRestore') handleAudioRestore();
        });
    }

    window.addEventListener('game-mute-toggle', (e) => {
        if (window.gameAudio) {
            if (e && e.detail && e.detail.muted) {
                window.gameAudio.mute();
            } else {
                handleAudioRestore();
            }
        }
    });
}

// === slavic-art.js ===
const SlavicArt = {
    palette: {
        woodDark: '#2C1810',
        woodMedium: '#5C3A21',
        woodLight: '#8B5A2B',
        roofRed: '#9E2A2B',
        goldBright: '#FFD700',
        goldDark: '#B8860B',
        stoneDark: '#3A3A3A',
        stoneLight: '#787878',
        waterBlue: '#2A9D8F',
        grassGreen: '#386641',
        grassLight: '#6A994E'
    },

    cache: {},
    cachedTileSize: 0,

    prepareTileCache(size) {
        if (this.cachedTileSize === Math.round(size)) return;
        this.cachedTileSize = Math.round(size);
        this.cache = {};

        const types = ['berry', 'grain', 'gem', 'wood', 'fire', 'gold'];
        types.forEach(typeId => {
            const offCanvas = document.createElement('canvas');
            offCanvas.width = this.cachedTileSize;
            offCanvas.height = this.cachedTileSize;
            const octx = offCanvas.getContext('2d');

            const cx = this.cachedTileSize / 2;
            const cy = this.cachedTileSize / 2;
            const radius = this.cachedTileSize * 0.44;

            switch (typeId) {
                case 'berry': this.drawBerryTile(octx, cx, cy, radius, false); break;
                case 'grain': this.drawWheatTile(octx, cx, cy, radius, false); break;
                case 'gem': this.drawSapphireTile(octx, cx, cy, radius, false); break;
                case 'wood': this.drawForestShieldTile(octx, cx, cy, radius, false); break;
                case 'fire': this.drawFireTile(octx, cx, cy, radius, false); break;
                case 'gold': this.drawRoyalCoinTile(octx, cx, cy, radius, false); break;
            }

            this.cache[typeId] = offCanvas;
        });
    },

    drawTile(ctx, typeId, x, y, size, isSelected = false, special = null, bramble = false) {
        if (!this.cache[typeId] || this.cachedTileSize !== Math.round(size)) {
            this.prepareTileCache(size);
        }

        const cx = x + size / 2;
        const cy = y + size / 2;
        const radius = size * 0.44;

        if (isSelected) {
            ctx.save();
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3.5;
            ctx.strokeRect(x + 2, y + 2, size - 4, size - 4);
            ctx.restore();
        }

        const cached = this.cache[typeId];
        if (cached) {
            ctx.drawImage(cached, x, y);
        }

        if (special === 'bomb') this.drawBombRune(ctx, cx, cy, radius);
        else if (special === 'lightning') this.drawLightningRune(ctx, cx, cy, radius);
        else if (special === 'sun') this.drawSunRune(ctx, cx, cy, radius);

        if (bramble) this.drawBrambleVines(ctx, x, y, size);
    },

    drawBerryTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#FF4D6D');
        baseGrad.addColorStop(0.5, '#C9184A');
        baseGrad.addColorStop(1, '#590D22');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy + r * 0.85);
        ctx.bezierCurveTo(cx - r * 1.0, cy + r * 0.3, cx - r * 0.85, cy - r * 0.65, cx, cy - r * 0.5);
        ctx.bezierCurveTo(cx + r * 0.85, cy - r * 0.65, cx + r * 1.0, cy + r * 0.3, cx, cy + r * 0.85);
        ctx.fill();

        ctx.strokeStyle = '#FFB3C1';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.beginPath();
        ctx.ellipse(cx - r * 0.3, cy - r * 0.15, r * 0.2, r * 0.1, -0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFE66D';
        const seedPos = [[-0.2, 0.1], [0.2, 0.1], [0, 0.3], [-0.25, 0.45], [0.25, 0.45]];
        seedPos.forEach(([ox, oy]) => {
            ctx.beginPath();
            ctx.ellipse(cx + ox * r, cy + oy * r, r * 0.05, r * 0.08, 0.2, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.fillStyle = '#38B000';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.45);
        ctx.lineTo(cx - r * 0.45, cy - r * 0.8);
        ctx.lineTo(cx - r * 0.15, cy - r * 0.6);
        ctx.lineTo(cx, cy - r * 0.85);
        ctx.lineTo(cx + r * 0.15, cy - r * 0.6);
        ctx.lineTo(cx + r * 0.45, cy - r * 0.8);
        ctx.closePath();
        ctx.fill();
    },

    drawWheatTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#FFF3B0');
        baseGrad.addColorStop(0.4, '#FFB703');
        baseGrad.addColorStop(1, '#B8860B');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
            const px = cx + Math.cos(a) * r * 0.95;
            const py = cy + Math.sin(a) * r * 0.95;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.strokeStyle = '#D48B00';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy + r * 0.65);
        ctx.quadraticCurveTo(cx - r * 0.1, cy, cx, cy - r * 0.55);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 3; i++) {
            const gy = cy + r * 0.25 - i * r * 0.25;
            ctx.beginPath();
            ctx.ellipse(cx - r * 0.2, gy, r * 0.16, r * 0.09, -0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx + r * 0.2, gy, r * 0.16, r * 0.09, 0.4, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    drawSapphireTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.3, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#CAF0F8');
        baseGrad.addColorStop(0.3, '#00B4D8');
        baseGrad.addColorStop(0.8, '#0077B6');
        baseGrad.addColorStop(1, '#03045E');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.95);
        ctx.lineTo(cx + r * 0.85, cy);
        ctx.lineTo(cx, cy + r * 0.95);
        ctx.lineTo(cx - r * 0.85, cy);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#90E0EF';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.95);
        ctx.lineTo(cx, cy + r * 0.95);
        ctx.moveTo(cx - r * 0.85, cy);
        ctx.lineTo(cx + r * 0.85, cy);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx - r * 0.25, cy - r * 0.25, r * 0.12, 0, Math.PI * 2);
        ctx.fill();
    },

    drawForestShieldTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#B7E4C7');
        baseGrad.addColorStop(0.4, '#40916C');
        baseGrad.addColorStop(1, '#081C15');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx - r * 0.75, cy - r * 0.75);
        ctx.lineTo(cx + r * 0.75, cy - r * 0.75);
        ctx.lineTo(cx + r * 0.75, cy + r * 0.2);
        ctx.quadraticCurveTo(cx + r * 0.4, cy + r * 0.75, cx, cy + r * 0.9);
        ctx.quadraticCurveTo(cx - r * 0.4, cy + r * 0.75, cx - r * 0.75, cy + r * 0.2);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#D8F3DC';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.5);
        ctx.bezierCurveTo(cx + r * 0.4, cy - r * 0.2, cx + r * 0.3, cy + r * 0.3, cx, cy + r * 0.5);
        ctx.bezierCurveTo(cx - r * 0.3, cy + r * 0.3, cx - r * 0.4, cy - r * 0.2, cx, cy - r * 0.5);
        ctx.fill();
    },

    drawFireTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx, cy + r * 0.1, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#FFFFFF');
        baseGrad.addColorStop(0.2, '#FFE66D');
        baseGrad.addColorStop(0.5, '#FF6B35');
        baseGrad.addColorStop(1, '#D00000');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.95);
        ctx.quadraticCurveTo(cx + r * 0.85, cy - r * 0.2, cx + r * 0.55, cy + r * 0.65);
        ctx.quadraticCurveTo(cx, cy + r * 0.95, cx - r * 0.55, cy + r * 0.65);
        ctx.quadraticCurveTo(cx - r * 0.85, cy - r * 0.2, cx, cy - r * 0.95);
        ctx.fill();

        ctx.strokeStyle = '#FFB703';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.45);
        ctx.quadraticCurveTo(cx + r * 0.3, cy, cx + r * 0.18, cy + r * 0.4);
        ctx.quadraticCurveTo(cx, cy + r * 0.55, cx - r * 0.18, cy + r * 0.4);
        ctx.quadraticCurveTo(cx - r * 0.3, cy, cx, cy - r * 0.45);
        ctx.fill();
    },

    drawRoyalCoinTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#E0AAFF');
        baseGrad.addColorStop(0.4, '#7B2CBF');
        baseGrad.addColorStop(1, '#240046');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.92, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.5);
        ctx.lineTo(cx, cy + r * 0.4);
        ctx.moveTo(cx - r * 0.35, cy - r * 0.25);
        ctx.quadraticCurveTo(cx - r * 0.35, cy + r * 0.3, cx, cy + r * 0.4);
        ctx.moveTo(cx + r * 0.35, cy - r * 0.25);
        ctx.quadraticCurveTo(cx + r * 0.35, cy + r * 0.3, cx, cy + r * 0.4);
        ctx.stroke();
    },

    drawBombRune(ctx, cx, cy, radius) {
        ctx.save();
        ctx.fillStyle = 'rgba(230, 57, 70, 0.85)';
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `bold ${radius * 0.65}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('💣', cx, cy);
        ctx.restore();
    },

    drawLightningRune(ctx, cx, cy, radius) {
        ctx.save();
        ctx.fillStyle = 'rgba(0, 180, 216, 0.85)';
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `bold ${radius * 0.65}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⚡', cx, cy);
        ctx.restore();
    },

    drawSunRune(ctx, cx, cy, radius) {
        ctx.save();
        ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `bold ${radius * 0.7}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('☀️', cx, cy);
        ctx.restore();
    },

    drawBrambleVines(ctx, x, y, size) {
        ctx.save();
        ctx.fillStyle = 'rgba(10, 25, 15, 0.55)';
        ctx.fillRect(x + 2, y + 2, size - 4, size - 4);

        ctx.strokeStyle = '#2D6A4F';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(x + 4, y + 4);
        ctx.quadraticCurveTo(x + size * 0.5, y + size * 0.35, x + size - 4, y + size - 4);
        ctx.moveTo(x + size - 4, y + 4);
        ctx.quadraticCurveTo(x + size * 0.5, y + size * 0.65, x + 4, y + size - 4);
        ctx.stroke();

        ctx.fillStyle = '#D8F3DC';
        const thornCoords = [
            [x + size * 0.3, y + size * 0.25],
            [x + size * 0.7, y + size * 0.75],
            [x + size * 0.7, y + size * 0.25],
            [x + size * 0.3, y + size * 0.75]
        ];
        thornCoords.forEach(([tx, ty]) => {
            ctx.beginPath();
            ctx.arc(tx, ty, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.font = '14px sans-serif';
        ctx.fillText('🔒', x + size - 16, y + 16);
        ctx.restore();
    },

    drawPeasantMan(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir, 1);

        const legSwing = isWalking ? Math.sin(t * 0.01) * 4 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;

        ctx.translate(0, -bodyBob);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 16 + bodyBob, 12, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#D4A373';
        ctx.fillRect(-6 + legSwing, 8, 4, 9);
        ctx.fillRect(2 - legSwing, 8, 4, 9);

        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.moveTo(-9, -4);
        ctx.lineTo(9, -4);
        ctx.lineTo(11, 9);
        ctx.lineTo(-11, 9);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-10, 2, 20, 2.5);

        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -10, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#780000';
        ctx.beginPath();
        ctx.arc(0, -13, 6.5, Math.PI, 0);
        ctx.fill();

        ctx.restore();
    },

    drawPeasantMaiden(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir, 1);

        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;
        const skirtSway = isWalking ? Math.sin(t * 0.01) * 2 : 0;

        ctx.translate(0, -bodyBob);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 16 + bodyBob, 12, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0077B6';
        ctx.beginPath();
        ctx.moveTo(-6, -4);
        ctx.lineTo(6, -4);
        ctx.lineTo(12 + skirtSway, 15);
        ctx.lineTo(-12 + skirtSway, 15);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-2, -4, 4, 19);

        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -10, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.moveTo(-7, -10);
        ctx.lineTo(0, -18);
        ctx.lineTo(7, -10);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFB703';
        ctx.fillRect(4, -8, 3, 16);

        ctx.restore();
    },

    drawIlya(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.05, 1.05);

        const legSwing = isWalking ? Math.sin(t * 0.011) * 5 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.011)) * 2.5 : 0;
        const capeWave = Math.sin(t * 0.008) * 3;

        ctx.translate(0, -bodyBob);

        // 1. Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 18 + bodyBob, 15, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. Flowing Red Cape
        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.moveTo(-9, -6);
        ctx.lineTo(9, -6);
        ctx.lineTo(13 + capeWave, 16);
        ctx.lineTo(-13 - capeWave, 16);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#780000';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 3. Legs & Leather Boots
        ctx.fillStyle = '#1D3557';
        ctx.fillRect(-8 + legSwing, 6, 5, 8);
        ctx.fillRect(3 - legSwing, 6, 5, 8);

        ctx.fillStyle = '#5C3A21';
        ctx.beginPath();
        ctx.roundRect(-9 + legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.roundRect(2 - legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.fill();

        // 4. Steel Chainmail Body & Breastplate
        ctx.fillStyle = '#90A4AE';
        ctx.beginPath();
        ctx.roundRect(-10, -6, 20, 15, [4]);
        ctx.fill();
        ctx.strokeStyle = '#37474F';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Golden Bear Crest Plate
        ctx.fillStyle = '#B8860B';
        ctx.beginPath();
        ctx.roundRect(-6, -3, 12, 8, [3]);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(0, 1, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Golden Belt
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-10, 6, 20, 3);
        ctx.fillStyle = '#B8860B';
        ctx.fillRect(-2.5, 5.5, 5, 4);

        // Bogatyr Sword on Belt
        ctx.save();
        ctx.rotate(-0.35);
        ctx.fillStyle = '#78909C';
        ctx.fillRect(-13, 5, 3, 16);
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-15, 4, 7, 2);
        ctx.beginPath();
        ctx.arc(-11.5, 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 5. Head & Friendly Face
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -12, 6.5, 0, Math.PI * 2);
        ctx.fill();

        // Warm Brown Beard & Moustache
        ctx.fillStyle = '#6D4C41';
        ctx.beginPath();
        ctx.arc(0, -9, 6.8, 0, Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(0, -10, 4, 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Cheerful Eyes & Smile
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.arc(-2, -13, 1, 0, Math.PI * 2);
        ctx.arc(2, -13, 1, 0, Math.PI * 2);
        ctx.fill();

        // 6. Conical Steel Helmet (Шлем-Шишак)
        ctx.fillStyle = '#B0BEC5';
        ctx.beginPath();
        ctx.moveTo(-7.5, -13);
        ctx.quadraticCurveTo(-6, -21, 0, -25);
        ctx.quadraticCurveTo(6, -21, 7.5, -13);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Golden Spire on Top of Helmet
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-1.5, -24);
        ctx.lineTo(0, -28);
        ctx.lineTo(1.5, -24);
        ctx.closePath();
        ctx.fill();

        // Red Pauldron Shoulders
        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.arc(-10, -5, 3.5, 0, Math.PI * 2);
        ctx.arc(10, -5, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawBogatyr(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        this.drawIlya(ctx, x, y, dir, isWalking, t);
    },

    drawDobrynya(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.05, 1.05);

        const legSwing = isWalking ? Math.sin(t * 0.011) * 5 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.011)) * 2.5 : 0;
        const capeWave = Math.sin(t * 0.008) * 3;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 18 + bodyBob, 15, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Royal Blue Cape
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.moveTo(-9, -6);
        ctx.lineTo(9, -6);
        ctx.lineTo(13 + capeWave, 16);
        ctx.lineTo(-13 - capeWave, 16);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Legs & Boots
        ctx.fillStyle = '#457B9D';
        ctx.fillRect(-8 + legSwing, 6, 5, 8);
        ctx.fillRect(3 - legSwing, 6, 5, 8);

        ctx.fillStyle = '#795548';
        ctx.beginPath();
        ctx.roundRect(-9 + legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.roundRect(2 - legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.fill();

        // Silver Scale Armor Body
        ctx.fillStyle = '#CFD8DC';
        ctx.beginPath();
        ctx.roundRect(-10, -6, 20, 15, [4]);
        ctx.fill();
        ctx.strokeStyle = '#90A4AE';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Golden Sun Belt
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-10, 6, 20, 3);

        // Golden Round Sun Shield on arm
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(8, 2, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#E63946';
        ctx.beginPath();
        ctx.arc(8, 2, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Head & Blond Beard
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -12, 6.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E9C46A';
        ctx.beginPath();
        ctx.arc(0, -9, 6.5, 0, Math.PI);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.arc(-2, -13, 1, 0, Math.PI * 2);
        ctx.arc(2, -13, 1, 0, Math.PI * 2);
        ctx.fill();

        // Golden Helmet
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-7.5, -13);
        ctx.quadraticCurveTo(-6, -21, 0, -25);
        ctx.quadraticCurveTo(6, -21, 7.5, -13);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
    },

    drawAlesha(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.0, 1.0);

        const legSwing = isWalking ? Math.sin(t * 0.013) * 5.5 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.013)) * 2.2 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 13, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Forest Green Brigandine Tunic
        ctx.fillStyle = '#2D6A4F';
        ctx.beginPath();
        ctx.moveTo(-8, -5);
        ctx.lineTo(8, -5);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.closePath();
        ctx.fill();

        // Belt
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-9, 3, 18, 2.5);

        // Legs & Green Boots
        ctx.fillStyle = '#52B788';
        ctx.fillRect(-7 + legSwing, 7, 4, 7);
        ctx.fillRect(2 - legSwing, 7, 4, 7);

        ctx.fillStyle = '#1B4332';
        ctx.beginPath();
        ctx.roundRect(-8 + legSwing, 12, 6, 6, [2]);
        ctx.roundRect(1 - legSwing, 12, 6, 6, [2]);
        ctx.fill();

        // Wooden Bow over Shoulder
        ctx.strokeStyle = '#8D6E63';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(-8, -4, 12, 0.4, 2.8);
        ctx.stroke();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-16, -1);
        ctx.lineTo(-4, -13);
        ctx.stroke();

        // Head & Youthful Face
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 6, 0, Math.PI * 2);
        ctx.fill();

        // Cheerful Smile
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.arc(-2, -12, 1, 0, Math.PI * 2);
        ctx.arc(2, -12, 1, 0, Math.PI * 2);
        ctx.fill();

        // Red Archer Cap with Golden Feather
        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.arc(0, -13, 6.5, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(3, -15);
        ctx.lineTo(8, -22);
        ctx.lineTo(5, -14);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawVasilisa(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.0, 1.0);

        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;
        const skirtSway = isWalking ? Math.sin(t * 0.01) * 2.5 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Emerald & Gold Sarafan Dress
        ctx.fillStyle = '#2A9D8F';
        ctx.beginPath();
        ctx.moveTo(-7, -5);
        ctx.lineTo(7, -5);
        ctx.lineTo(13 + skirtSway, 16);
        ctx.lineTo(-13 + skirtSway, 16);
        ctx.closePath();
        ctx.fill();

        // Golden Central Embroidery
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-2, -5, 4, 21);

        // Ruby Collar
        ctx.fillStyle = '#C1121F';
        ctx.fillRect(-7, -5, 14, 3);

        // Head & Beautiful Face
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 5.5, 0, Math.PI * 2);
        ctx.fill();

        // Long Golden Braid
        ctx.fillStyle = '#FFB703';
        ctx.beginPath();
        ctx.roundRect(4, -8, 3.5, 18, [2]);
        ctx.fill();

        // Crown Kokoshnik with Pearls
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-8, -11);
        ctx.lineTo(0, -22);
        ctx.lineTo(8, -11);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#9E2A2B';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Magic Glowing Crystal in hand
        const glow = Math.sin(t * 0.01) * 2;
        ctx.fillStyle = 'rgba(255, 215, 0, 0.7)';
        ctx.beginPath();
        ctx.arc(-8, 2, 4 + glow, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-8, 2, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawVakula(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.05, 1.05);

        const legSwing = isWalking ? Math.sin(t * 0.01) * 4 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Dark Trousers & Heavy Boots
        ctx.fillStyle = '#3E2723';
        ctx.fillRect(-7 + legSwing, 6, 4, 8);
        ctx.fillRect(2 - legSwing, 6, 4, 8);

        ctx.fillStyle = '#212121';
        ctx.beginPath();
        ctx.roundRect(-8 + legSwing, 12, 6, 6, [2]);
        ctx.roundRect(1 - legSwing, 12, 6, 6, [2]);
        ctx.fill();

        // Strong Torso & Leather Blacksmith Apron
        ctx.fillStyle = '#5C3A21';
        ctx.fillRect(-9, -5, 18, 14);

        ctx.fillStyle = '#8D6E63';
        ctx.fillRect(-6, -3, 12, 12);

        // Sledgehammer in Hand
        ctx.fillStyle = '#795548';
        ctx.fillRect(8, -8, 3, 20);
        ctx.fillStyle = '#546E7A';
        ctx.beginPath();
        ctx.roundRect(5, -12, 9, 6, [1]);
        ctx.fill();

        // Head & Dark Curly Beard
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#212121';
        ctx.beginPath();
        ctx.arc(0, -8, 6.5, 0, Math.PI);
        ctx.fill();

        // Red Headband
        ctx.fillStyle = '#C1121F';
        ctx.fillRect(-6.5, -14, 13, 2.5);

        ctx.restore();
    },

    drawRadogor(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.0, 1.0);

        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.008)) * 1.5 : 0;
        const robeSway = isWalking ? Math.sin(t * 0.008) * 2 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Long Starry Mage Robe
        ctx.fillStyle = '#03045E';
        ctx.beginPath();
        ctx.moveTo(-7, -6);
        ctx.lineTo(7, -6);
        ctx.lineTo(13 + robeSway, 16);
        ctx.lineTo(-13 + robeSway, 16);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-2, -6, 4, 22);

        // Wooden Staff with Glowing Crystal
        ctx.fillStyle = '#6D4C41';
        ctx.fillRect(8, -16, 2.5, 32);

        const gemPulse = Math.sin(t * 0.008) * 2;
        ctx.fillStyle = 'rgba(255, 183, 3, 0.7)';
        ctx.beginPath();
        ctx.arc(9, -17, 5 + gemPulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(9, -17, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Head & Flowing Snow-White Beard
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ECEFF1';
        ctx.beginPath();
        ctx.moveTo(-5, -9);
        ctx.quadraticCurveTo(0, 4, 5, -9);
        ctx.closePath();
        ctx.fill();

        // Magi Hood
        ctx.fillStyle = '#023E8A';
        ctx.beginPath();
        ctx.moveTo(-7, -10);
        ctx.lineTo(0, -20);
        ctx.lineTo(7, -10);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawHorse(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.1, 1.1);

        const legSwing = isWalking ? Math.sin(t * 0.012) * 5 : 0;

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 18, 20, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#5C3A21';
        ctx.fillRect(-14 + legSwing, 4, 4, 14);
        ctx.fillRect(-8 - legSwing, 4, 4, 14);
        ctx.fillRect(8 + legSwing, 4, 4, 14);
        ctx.fillRect(14 - legSwing, 4, 4, 14);

        ctx.fillStyle = '#795548';
        ctx.beginPath();
        ctx.ellipse(0, 2, 18, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(20, -16);
        ctx.lineTo(26, -10);
        ctx.lineTo(16, 6);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#2C1810';
        ctx.fillRect(12, -16, 4, 14);

        ctx.fillRect(-20, -2, 5, 14);

        ctx.restore();
    },

    drawSheep(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir, 1);

        const legSwing = isWalking ? Math.sin(t * 0.01) * 3 : 0;

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 12, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#3E2723';
        ctx.fillRect(-8 + legSwing, 4, 3, 8);
        ctx.fillRect(-3 - legSwing, 4, 3, 8);
        ctx.fillRect(3 + legSwing, 4, 3, 8);
        ctx.fillRect(8 - legSwing, 4, 3, 8);

        ctx.fillStyle = '#F5EBE0';
        ctx.beginPath();
        ctx.arc(-6, -2, 8, 0, Math.PI * 2);
        ctx.arc(0, -3, 9, 0, Math.PI * 2);
        ctx.arc(6, -2, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#3E2723';
        ctx.beginPath();
        ctx.arc(11, -4, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawDog(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 0.9, 0.9);

        const legSwing = isWalking ? Math.sin(t * 0.015) * 4 : 0;
        const tailWag = Math.sin(t * 0.02) * 6;

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 12, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#D4A373';
        ctx.fillRect(-8 + legSwing, 4, 3, 8);
        ctx.fillRect(-3 - legSwing, 4, 3, 8);
        ctx.fillRect(4 + legSwing, 4, 3, 8);
        ctx.fillRect(9 - legSwing, 4, 3, 8);

        ctx.fillStyle = '#E76F51';
        ctx.beginPath();
        ctx.ellipse(0, 0, 12, 7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(10, -5, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#264653';
        ctx.beginPath();
        ctx.arc(14, -4, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#E76F51';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-11, -2);
        ctx.lineTo(-17, -10 + tailWag);
        ctx.stroke();

        ctx.restore();
    },

    drawCatBayun(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 10, 12, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#F4A261';
        ctx.beginPath();
        ctx.ellipse(0, 0, 11, 8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(9, -6, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E76F51';
        ctx.beginPath();
        ctx.moveTo(6, -11); ctx.lineTo(9, -15); ctx.lineTo(11, -11);
        ctx.moveTo(11, -11); ctx.lineTo(13, -15); ctx.lineTo(15, -11);
        ctx.fill();

        const tailAngle = Math.sin(t * 0.005) * 0.3;
        ctx.strokeStyle = '#F4A261';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.quadraticCurveTo(-16, -8 + tailAngle * 8, -14, -14);
        ctx.stroke();

        ctx.restore();
    },

    drawBonfire(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = '#4A2A0C';
        ctx.fillRect(-14, 4, 28, 6);
        ctx.fillRect(-10, 8, 20, 5);

        ctx.fillStyle = '#FF4D6D';
        ctx.beginPath();
        ctx.arc(0, 4, 8, 0, Math.PI * 2);
        ctx.fill();

        const flicker = Math.sin(t * 0.015) * 4;
        ctx.fillStyle = '#FB8500';
        ctx.beginPath();
        ctx.moveTo(-10, 4);
        ctx.quadraticCurveTo(-4, -16 + flicker, 0, -26 + flicker);
        ctx.quadraticCurveTo(4, -16 - flicker, 10, 4);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-5, 4);
        ctx.quadraticCurveTo(-2, -8 + flicker, 0, -16 + flicker);
        ctx.quadraticCurveTo(2, -8 - flicker, 5, 4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawJumpingPike(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        const jumpY = Math.sin(t * 0.004) * 12;
        ctx.translate(0, jumpY);

        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 12 - jumpY, 14, 4, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#52B788';
        ctx.beginPath();
        ctx.ellipse(0, 0, 14, 5, -0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E76F51';
        ctx.beginPath();
        ctx.moveTo(-12, 0); ctx.lineTo(-18, -4); ctx.lineTo(-18, 4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawHeroPortrait(ctx, heroId, size = 64) {
        ctx.save();
        const cx = size / 2;
        const cy = size / 2;

        const bgGrad = ctx.createRadialGradient(cx, cy, size * 0.1, cx, cy, size * 0.48);
        bgGrad.addColorStop(0, '#5C3A21');
        bgGrad.addColorStop(1, '#2C1810');
        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.46, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        switch (heroId) {
            case 'ilya':
                // Red Cloak Shoulders
                ctx.fillStyle = '#C1121F';
                ctx.beginPath();
                ctx.arc(cx - size * 0.22, cy + 2, size * 0.14, 0, Math.PI * 2);
                ctx.arc(cx + size * 0.22, cy + 2, size * 0.14, 0, Math.PI * 2);
                ctx.fill();

                // Steel Chainmail & Bear Crest
                ctx.fillStyle = '#90A4AE';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.26, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(cx, cy + 6, size * 0.08, 0, Math.PI * 2);
                ctx.fill();

                // Friendly Face & Beard
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 2, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#6D4C41';
                ctx.beginPath();
                ctx.arc(cx, cy + 3, size * 0.17, 0, Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(cx, cy - 1, size * 0.1, size * 0.04, 0, 0, Math.PI * 2);
                ctx.fill();

                // Conical Steel Helmet with Golden Spire
                ctx.fillStyle = '#B0BEC5';
                ctx.beginPath();
                ctx.moveTo(cx - size * 0.18, cy - 6);
                ctx.quadraticCurveTo(cx - size * 0.12, cy - size * 0.32, cx, cy - size * 0.38);
                ctx.quadraticCurveTo(cx + size * 0.12, cy - size * 0.32, cx + size * 0.18, cy - 6);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.moveTo(cx - 2, cy - size * 0.38);
                ctx.lineTo(cx, cy - size * 0.44);
                ctx.lineTo(cx + 2, cy - size * 0.38);
                ctx.closePath();
                ctx.fill();
                break;

            case 'dobrynya':
                ctx.fillStyle = '#1D3557';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.25, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.moveTo(cx - size * 0.18, cy - 6);
                ctx.lineTo(cx, cy - size * 0.36);
                ctx.lineTo(cx + size * 0.18, cy - 6);
                ctx.closePath();
                ctx.fill();
                break;

            case 'alesha':
                ctx.fillStyle = '#2D6A4F';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.25, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#C1121F';
                ctx.beginPath();
                ctx.arc(cx, cy - 8, size * 0.18, Math.PI, 0);
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(cx + size * 0.12, cy - 12);
                ctx.lineTo(cx + size * 0.24, cy - size * 0.35);
                ctx.stroke();
                break;

            case 'radogor':
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ECEFF1';
                ctx.beginPath();
                ctx.arc(cx, cy + 6, size * 0.22, 0, Math.PI);
                ctx.fill();
                ctx.fillStyle = '#457B9D';
                ctx.beginPath();
                ctx.arc(cx, cy - 8, size * 0.2, Math.PI, 0);
                ctx.fill();
                break;

            case 'vasilisa':
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 2, size * 0.16, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#C1121F';
                ctx.beginPath();
                ctx.moveTo(cx - size * 0.2, cy - 4);
                ctx.lineTo(cx, cy - size * 0.38);
                ctx.lineTo(cx + size * 0.2, cy - 4);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.stroke();
                break;

            case 'vakula':
                ctx.fillStyle = '#4A2810';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.25, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#212121';
                ctx.beginPath();
                ctx.arc(cx, cy + 3, size * 0.16, 0, Math.PI);
                ctx.fill();
                break;
        }

        ctx.restore();
    },

    drawBuilding(ctx, bldgId, cx, cy, width, height, level = 0, animTime = 0, season = 'autumn') {
        ctx.save();
        ctx.translate(cx, cy);

        this.drawBuildingBase(ctx, width, height, level);

        switch (bldgId) {
            case 'terem': this.drawTerem(ctx, width, height, level, animTime); break;
            case 'mill': this.drawMill(ctx, width, height, level, animTime); break;
            case 'watermill': this.drawWaterMill(ctx, width, height, level, animTime); break;
            case 'forge': this.drawForge(ctx, width, height, level, animTime); break;
            case 'apiary': this.drawApiary(ctx, width, height, level, animTime); break;
            case 'granary': this.drawGranary(ctx, width, height, level, animTime); break;
            case 'banya': this.drawBanya(ctx, width, height, level, animTime); break;
            case 'stables': this.drawStables(ctx, width, height, level, animTime); break;
            case 'chapel': this.drawChapel(ctx, width, height, level, animTime); break;
            case 'pier': this.drawPier(ctx, width, height, level, animTime); break;
            case 'watchtower': this.drawWatchtower(ctx, width, height, level, animTime); break;
            case 'garden': this.drawGarden(ctx, width, height, level, animTime); break;
            case 'sawmill': this.drawSawmill(ctx, width, height, level, animTime); break;
            case 'fisherman': this.drawFisherman(ctx, width, height, level, animTime); break;
            default: this.drawTerem(ctx, width, height, level, animTime);
        }

        ctx.restore();
    },

    drawBuildingBase(ctx, w, h, level) {
        ctx.fillStyle = level > 0 ? 'rgba(212, 175, 55, 0.25)' : 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(0, h * 0.35, w * 0.5, h * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();
    },

    drawTerem(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.7;
        const bh = h * 0.55;

        ctx.fillStyle = isRuined ? '#3E2723' : '#795548';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.5);

        ctx.fillStyle = isRuined ? '#1A0C05' : '#FFD166';
        ctx.fillRect(-bw * 0.28, -bh * 0.1, bw * 0.2, bh * 0.25);
        ctx.fillRect(bw * 0.08, -bh * 0.1, bw * 0.2, bh * 0.25);

        const tw = bw * 0.65;
        ctx.fillStyle = isRuined ? '#4E342E' : '#8D6E63';
        ctx.fillRect(-tw / 2, -bh * 0.6, tw, bh * 0.45);

        ctx.fillStyle = isRuined ? '#37474F' : '#9E2A2B';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.95);
        ctx.lineTo(-tw * 0.65, -bh * 0.6);
        ctx.lineTo(tw * 0.65, -bh * 0.6);
        ctx.closePath();
        ctx.fill();

        if (level >= 1) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(0, -bh * 1.02, bw * 0.09, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    drawMill(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.55;

        ctx.fillStyle = isRuined ? '#3E2723' : '#6D4C41';
        ctx.beginPath();
        ctx.moveTo(-bw * 0.35, -bh * 0.4);
        ctx.lineTo(bw * 0.35, -bh * 0.4);
        ctx.lineTo(bw * 0.45, bh * 0.3);
        ctx.lineTo(-bw * 0.45, bh * 0.3);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = isRuined ? '#263238' : '#2A9D8F';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.75);
        ctx.lineTo(-bw * 0.45, -bh * 0.4);
        ctx.lineTo(bw * 0.45, -bh * 0.4);
        ctx.closePath();
        ctx.fill();

        const bladeAngle = isRuined ? 0.3 : (t * 0.0015);
        const bladeLen = w * 0.44;

        ctx.save();
        ctx.translate(0, -bh * 0.35);
        ctx.rotate(bladeAngle);

        for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.strokeStyle = '#4E342E';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, bladeLen);
            ctx.stroke();

            ctx.fillStyle = isRuined ? 'rgba(120, 100, 80, 0.4)' : '#F5EBE0';
            ctx.fillRect(2, bladeLen * 0.25, bw * 0.16, bladeLen * 0.7);
        }
        ctx.restore();
    },

    drawWaterMill(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.5;

        ctx.fillStyle = isRuined ? '#3E2723' : '#795548';
        ctx.fillRect(-bw * 0.3, -bh * 0.3, bw * 0.7, bh * 0.55);

        ctx.fillStyle = '#9E2A2B';
        ctx.beginPath();
        ctx.moveTo(bw * 0.05, -bh * 0.65);
        ctx.lineTo(-bw * 0.35, -bh * 0.3);
        ctx.lineTo(bw * 0.45, -bh * 0.3);
        ctx.closePath();
        ctx.fill();

        const wheelAngle = isRuined ? 0.2 : (t * 0.002);
        ctx.save();
        ctx.translate(-bw * 0.32, bh * 0.1);
        ctx.rotate(wheelAngle);

        ctx.strokeStyle = '#4E342E';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(0, 0, bw * 0.3, 0, Math.PI * 2);
        ctx.stroke();

        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(a) * bw * 0.3, Math.sin(a) * bw * 0.3);
            ctx.stroke();
        }
        ctx.restore();
    },

    drawForge(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.65;
        const bh = h * 0.5;

        ctx.fillStyle = isRuined ? '#37474F' : '#546E7A';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = '#263238';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = isRuined ? '#212121' : '#FB8500';
        ctx.beginPath();
        ctx.arc(0, bh * 0.05, bw * 0.16, 0, Math.PI * 2);
        ctx.fill();
    },

    drawApiary(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.45;

        const hiveX = [-bw * 0.28, 0, bw * 0.28];
        hiveX.forEach((hx, idx) => {
            ctx.fillStyle = isRuined ? '#4E342E' : '#A06E3B';
            ctx.fillRect(hx - bw * 0.12, -bh * 0.2 + (idx % 2) * 6, bw * 0.24, bh * 0.45);
        });
    },

    drawGranary(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.65;
        const bh = h * 0.5;

        ctx.fillStyle = isRuined ? '#3E2723' : '#8D6E63';
        ctx.fillRect(-bw * 0.45, -bh * 0.35, bw * 0.9, bh * 0.45);

        ctx.fillStyle = isRuined ? '#263238' : '#C1121F';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.7);
        ctx.lineTo(-bw * 0.55, -bh * 0.35);
        ctx.lineTo(bw * 0.55, -bh * 0.35);
        ctx.closePath();
        ctx.fill();
    },

    drawBanya(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.45;

        ctx.fillStyle = isRuined ? '#3E2723' : '#8D6E63';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = isRuined ? '#263238' : '#5C3A21';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawStables(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.7;
        const bh = h * 0.45;

        ctx.fillStyle = isRuined ? '#3E2723' : '#6D4C41';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = isRuined ? '#263238' : '#795548';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawChapel(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.55;
        const bh = h * 0.6;

        ctx.fillStyle = isRuined ? '#3E2723' : '#A06E3B';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.5);

        ctx.fillStyle = isRuined ? '#263238' : '#2A9D8F';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.95);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();

        if (!isRuined) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(0, -bh * 1.0, bw * 0.15, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    drawPier(ctx, w, h, level, t) {
        const bw = w * 0.7;
        const bh = h * 0.4;

        ctx.fillStyle = '#3E2723';
        ctx.fillRect(-bw * 0.4, bh * 0.1, bw * 0.8, bh * 0.2);

        if (level > 0) {
            ctx.fillStyle = '#795548';
            ctx.beginPath();
            ctx.moveTo(-bw * 0.35, bh * 0.2);
            ctx.lineTo(bw * 0.35, bh * 0.2);
            ctx.lineTo(bw * 0.25, bh * 0.4);
            ctx.lineTo(-bw * 0.25, bh * 0.4);
            ctx.closePath();
            ctx.fill();
        }
    },

    drawWatchtower(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.5;
        const bh = h * 0.7;

        ctx.fillStyle = isRuined ? '#3E2723' : '#5C3A21';
        ctx.fillRect(-bw * 0.35, -bh * 0.5, bw * 0.7, bh * 0.8);

        ctx.fillStyle = isRuined ? '#1A0C05' : '#9E2A2B';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.95);
        ctx.lineTo(-bw * 0.55, -bh * 0.65);
        ctx.lineTo(bw * 0.55, -bh * 0.65);
        ctx.closePath();
        ctx.fill();
    },

    drawGarden(ctx, w, h, level, t) {
        const bw = w * 0.7;
        const bh = h * 0.45;

        ctx.fillStyle = '#4A2A0C';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.5);

        ctx.fillStyle = '#FB8500';
        ctx.beginPath();
        ctx.arc(-bw * 0.25, bh * 0.1, 10, 0, Math.PI * 2);
        ctx.arc(bw * 0.15, bh * 0.05, 12, 0, Math.PI * 2);
        ctx.fill();
    },

    drawSawmill(ctx, w, h, level, t) {
        const bw = w * 0.65;
        const bh = h * 0.5;

        ctx.fillStyle = '#5C3A21';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = '#795548';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawFisherman(ctx, w, h, level, t) {
        const bw = w * 0.6;
        const bh = h * 0.45;

        ctx.fillStyle = '#6D4C41';
        ctx.fillRect(-bw * 0.3, -bh * 0.2, bw * 0.6, bh * 0.4);

        ctx.fillStyle = '#263238';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.5);
        ctx.lineTo(-bw * 0.35, -bh * 0.2);
        ctx.lineTo(bw * 0.35, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawBirchTree(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        // Ground shadow
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.35, size * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();

        // White Birch Trunk with black bark stripes
        ctx.strokeStyle = '#F8F9FA';
        ctx.lineWidth = size * 0.12;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(size * 0.05, -size * 0.3, 0, -size * 0.65);
        ctx.stroke();

        ctx.strokeStyle = '#212529';
        ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
            const by = -size * 0.15 - i * size * 0.12;
            ctx.beginPath();
            ctx.moveTo(-size * 0.05, by);
            ctx.lineTo(size * 0.05, by - 2);
            ctx.stroke();
        }

        // Lush Leaf Crown
        let foliageCol1 = '#52B788', foliageCol2 = '#40916C';
        if (season === 'autumn') { foliageCol1 = '#F4A261'; foliageCol2 = '#E76F51'; }
        else if (season === 'winter') { foliageCol1 = '#ECEFF1'; foliageCol2 = '#CFD8DC'; }
        else if (season === 'spring') { foliageCol1 = '#74C69D'; foliageCol2 = '#52B788'; }

        ctx.fillStyle = foliageCol2;
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.72, size * 0.38, size * 0.44, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = foliageCol1;
        ctx.beginPath();
        ctx.ellipse(-size * 0.08, -size * 0.76, size * 0.32, size * 0.36, -0.1, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawPineTree(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.42, size * 0.14, 0, 0, Math.PI * 2);
        ctx.fill();

        // Brown trunk
        ctx.fillStyle = '#4A2810';
        ctx.fillRect(-size * 0.08, -size * 0.3, size * 0.16, size * 0.3);

        // 4 Tier Spreading Fir Needles
        let c1 = '#1B4332', c2 = '#2D6A4F';
        if (season === 'winter') { c1 = '#2D6A4F'; c2 = '#B7E4C7'; }
        else if (season === 'autumn') { c1 = '#1B4332'; c2 = '#386641'; }

        for (let i = 0; i < 4; i++) {
            const py = -size * 0.25 - i * size * 0.2;
            const pw = size * (0.5 - i * 0.09);
            const ph = size * 0.32;

            ctx.fillStyle = c1;
            ctx.beginPath();
            ctx.moveTo(0, py - ph);
            ctx.lineTo(-pw, py);
            ctx.lineTo(pw, py);
            ctx.closePath();
            ctx.fill();

            // Layer highlight
            ctx.fillStyle = c2;
            ctx.beginPath();
            ctx.moveTo(0, py - ph);
            ctx.lineTo(0, py);
            ctx.lineTo(pw, py);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    },

    drawOakTree(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        // Large Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.55, size * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();

        // Massive Ancient Gnarled Oak Trunk
        ctx.fillStyle = '#3E2723';
        ctx.beginPath();
        ctx.moveTo(-size * 0.15, 0);
        ctx.lineTo(-size * 0.08, -size * 0.45);
        ctx.lineTo(size * 0.08, -size * 0.45);
        ctx.lineTo(size * 0.15, 0);
        ctx.closePath();
        ctx.fill();

        // Spreading Oak Branches & Foliage Clouds
        let col = '#2D6A4F';
        if (season === 'autumn') col = '#D97706';
        else if (season === 'winter') col = '#94A3B8';

        ctx.fillStyle = col;
        const clouds = [
            [-size * 0.25, -size * 0.6, size * 0.28],
            [size * 0.25, -size * 0.6, size * 0.28],
            [0, -size * 0.78, size * 0.35],
            [-size * 0.15, -size * 0.9, size * 0.24],
            [size * 0.15, -size * 0.9, size * 0.24]
        ];
        clouds.forEach(([cx, cy, cr]) => {
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    },

    drawBush(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = 'rgba(0,0,0,0.18)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.5, size * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();

        let bcol = '#40916C';
        if (season === 'autumn') bcol = '#E76F51';
        else if (season === 'winter') bcol = '#CFD8DC';

        ctx.fillStyle = bcol;
        ctx.beginPath();
        ctx.arc(-size * 0.22, -size * 0.25, size * 0.26, 0, Math.PI * 2);
        ctx.arc(size * 0.22, -size * 0.25, size * 0.26, 0, Math.PI * 2);
        ctx.arc(0, -size * 0.38, size * 0.32, 0, Math.PI * 2);
        ctx.fill();

        // Red wild berries on bush
        if (season !== 'winter') {
            ctx.fillStyle = '#E63946';
            const berries = [[-size * 0.15, -size * 0.3], [size * 0.18, -size * 0.28], [0, -size * 0.45]];
            berries.forEach(([bx, by]) => {
                ctx.beginPath();
                ctx.arc(bx, by, 3, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        ctx.restore();
    },

    drawLogPile(ctx, x, y, size = 30) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, size * 0.2, size * 0.7, size * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();

        const logPos = [
            [-size * 0.35, 0], [0, 0], [size * 0.35, 0],
            [-size * 0.18, -size * 0.32], [size * 0.18, -size * 0.32],
            [0, -size * 0.62]
        ];

        logPos.forEach(([lx, ly]) => {
            // Wood log end
            ctx.fillStyle = '#D4A373';
            ctx.beginPath();
            ctx.arc(lx, ly, size * 0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#5C3A21';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Tree annual ring
            ctx.beginPath();
            ctx.arc(lx, ly, size * 0.1, 0, Math.PI * 2);
            ctx.stroke();
        });

        ctx.restore();
    },

    drawMushroom(ctx, x, y, size = 12) {
        ctx.save();
        ctx.translate(x, y);

        // White stem
        ctx.fillStyle = '#F8F9FA';
        ctx.fillRect(-size * 0.2, -size * 0.6, size * 0.4, size * 0.6);

        // Cap (Porcini brown or Amanita red)
        ctx.fillStyle = (x % 2 === 0) ? '#8D6E63' : '#E63946';
        ctx.beginPath();
        ctx.arc(0, -size * 0.6, size * 0.55, Math.PI, 0);
        ctx.fill();

        if (x % 2 !== 0) {
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(-size * 0.2, -size * 0.8, 1.5, 0, Math.PI * 2);
            ctx.arc(size * 0.18, -size * 0.85, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    },

    drawReeds(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        const sway = Math.sin(t * 0.003 + x) * 4;

        ctx.strokeStyle = '#588157';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';

        // 3 stalks
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 5, 0);
            ctx.quadraticCurveTo(i * 3 + sway, -14, i * 4 + sway * 1.5, -28);
            ctx.stroke();

            // Cattail brown head
            ctx.fillStyle = '#3E2723';
            ctx.beginPath();
            ctx.roundRect(i * 4 + sway * 1.5 - 2, -26, 4, 10, [2]);
            ctx.fill();
        }

        ctx.restore();
    }
};

window.SlavicArt = SlavicArt;

// === level-map.js ===
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

// === match3.js ===
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

// === manor.js ===
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

// === heroes.js ===
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

// === pets.js ===
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

// === market.js ===
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

// === fishing.js ===
class SlavicFishing {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onCatch = options.onCatch || null;

        this.state = 'idle'; // idle, waiting, bite, success, escaped
        this.bobberX = 220;
        this.bobberY = 130;
        this.bobberBaseY = 130;
        this.biteTimer = null;
        this.biteWindowTimer = null;
        this.ripples = [];
        this.animTime = 0;

        this.lootTable = [
            { id: 'carp', name: 'Речной Карасик 🐟', gold: 50, wood: 0, resin: 0, rarity: 'common' },
            { id: 'pike', name: 'Царь-Щука 🎣', gold: 120, wood: 20, resin: 0, rarity: 'uncommon' },
            { id: 'goldfish', name: 'Золотая Рыбка 🐠', gold: 300, wood: 0, resin: 15, rarity: 'rare' },
            { id: 'chest', name: 'Затонувший Сундук 👑', gold: 600, wood: 50, resin: 30, rarity: 'legendary' }
        ];

        this.isRunning = false;
        this.animFrameId = null;
        this.retryTimers = [];
    }

    scheduleRetry(fn, delay) {
        const id = setTimeout(() => {
            if (this.retryTimers) {
                this.retryTimers = this.retryTimers.filter(t => t !== id);
            }
            fn();
        }, delay);
        if (!this.retryTimers) this.retryTimers = [];
        this.retryTimers.push(id);
        return id;
    }

    resize() {
        const parent = this.canvas.parentElement;
        if (!parent) return;
        this.canvas.width = parent.clientWidth || 440;
        this.canvas.height = parent.clientHeight || 240;
        this.bobberX = this.canvas.width / 2;
        this.bobberBaseY = this.canvas.height * 0.55;
        this.bobberY = this.bobberBaseY;
        this.castRod();
    }

    castRod() {
        if (!this.isRunning) return;
        this.state = 'waiting';
        this.ripples = [];
        if (this.biteTimer) clearTimeout(this.biteTimer);
        if (this.biteWindowTimer) clearTimeout(this.biteWindowTimer);
        if (this.retryTimers && this.retryTimers.length > 0) {
            this.retryTimers.forEach(id => clearTimeout(id));
            this.retryTimers = [];
        }

        // Fish bites in 2.5 to 5.5 seconds
        const delay = Math.floor(Math.random() * 3000) + 2500;
        this.biteTimer = setTimeout(() => {
            this.triggerBite();
        }, delay);
    }

    triggerBite() {
        this.state = 'bite';
        if (window.gameAudio) window.gameAudio.playMatch();
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            try { navigator.vibrate([40, 30, 40]); } catch (e) {}
        }

        for (let i = 0; i < 4; i++) {
            this.ripples.push({ r: 5 + i * 8, alpha: 1.0 });
        }

        // 1.4s window to strike!
        this.biteWindowTimer = setTimeout(() => {
            if (this.state === 'bite') {
                this.state = 'escaped';
                this.scheduleRetry(() => this.castRod(), 1500);
            }
        }, 1400);
    }

    strike() {
        if (this.state === 'bite') {
            this.state = 'success';
            if (this.biteWindowTimer) clearTimeout(this.biteWindowTimer);
            if (window.gameAudio) window.gameAudio.playWin();
            if (navigator.vibrate) navigator.vibrate([60, 40, 80]);

            const rand = Math.random();
            let loot;
            if (rand < 0.5) loot = this.lootTable[0];
            else if (rand < 0.8) loot = this.lootTable[1];
            else if (rand < 0.95) loot = this.lootTable[2];
            else loot = this.lootTable[3];

            if (this.onCatch) this.onCatch(loot);

            this.scheduleRetry(() => this.castRod(), 2000);
        } else if (this.state === 'waiting') {
            this.state = 'escaped';
            window.showToast && window.showToast('Рано подсекли! Рыба испугалась и уплыла.');
            this.scheduleRetry(() => this.castRod(), 1200);
        }
    }

    startLoop() {
        if (this.isRunning) return;
        this.isRunning = true;
        const loop = (time) => {
            if (!this.isRunning) return;
            this.animTime = time;
            this.render();
            this.animFrameId = requestAnimationFrame(loop);
        };
        this.animFrameId = requestAnimationFrame(loop);
    }

    stopLoop() {
        this.isRunning = false;
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
        if (this.biteTimer) {
            clearTimeout(this.biteTimer);
            this.biteTimer = null;
        }
        if (this.biteWindowTimer) {
            clearTimeout(this.biteWindowTimer);
            this.biteWindowTimer = null;
        }
        if (this.retryTimers && this.retryTimers.length > 0) {
            this.retryTimers.forEach(id => clearTimeout(id));
            this.retryTimers = [];
        }
        this.state = 'idle';
    }

    render() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        if (!w || !h) return;

        this.ctx.clearRect(0, 0, w, h);

        // Water Gradient
        const grad = this.ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#1D6F66');
        grad.addColorStop(0.5, '#2A9D8F');
        grad.addColorStop(1, '#0E443F');
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, w, h);

        // Gentle River Waves
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
            const wy = h * 0.3 + i * 35;
            this.ctx.beginPath();
            for (let x = 0; x < w; x += 15) {
                const y = wy + Math.sin(x * 0.04 + this.animTime * 0.003 + i) * 4;
                if (x === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
        }

        // Float / Bobber Motion
        let bobberY = this.bobberBaseY + Math.sin(this.animTime * 0.005) * 5;
        if (this.state === 'bite') {
            bobberY += Math.sin(this.animTime * 0.03) * 14 + 10;
        }

        // Ripples
        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const rip = this.ripples[i];
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${rip.alpha})`;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(this.bobberX, this.bobberBaseY + 6, rip.r * 1.6, rip.r * 0.6, 0, 0, Math.PI * 2);
            this.ctx.stroke();

            rip.r += 0.8;
            rip.alpha -= 0.015;
            if (rip.alpha <= 0) this.ripples.splice(i, 1);
        }

        // Fishing Line
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(w * 0.1, 0);
        this.ctx.quadraticCurveTo(w * 0.3, h * 0.3, this.bobberX, bobberY - 14);
        this.ctx.stroke();

        // Wooden Bobber / Поплавок
        this.ctx.save();
        this.ctx.translate(this.bobberX, bobberY);

        // Top Quill
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillRect(-2, -22, 4, 12);

        // Red & White Body
        this.ctx.fillStyle = '#E63946';
        this.ctx.beginPath();
        this.ctx.ellipse(0, -6, 9, 12, 0, 0, Math.PI);
        this.ctx.fill();

        this.ctx.fillStyle = '#F5EBE0';
        this.ctx.beginPath();
        this.ctx.ellipse(0, -6, 9, 12, 0, Math.PI, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();

        // Status Text
        this.ctx.font = 'bold 18px "Russo One", sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.shadowColor = '#000';
        this.ctx.shadowBlur = 6;

        if (this.state === 'waiting') {
            this.ctx.fillStyle = '#F5EBE0';
            this.ctx.fillText('⏳ Ждем поклевки...', w / 2, 40);
        } else if (this.state === 'bite') {
            this.ctx.fillStyle = '#FFD700';
            this.ctx.font = 'bold 22px "Russo One", sans-serif';
            this.ctx.fillText('⚡ КЛЮЁТ! ПОДСЕКАЙ! ⚡', w / 2, 40);
        } else if (this.state === 'success') {
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.fillText('🎉 ПОЙМАЛИ РЫБУ!', w / 2, 40);
        } else if (this.state === 'escaped') {
            this.ctx.fillStyle = '#FF4D6D';
            this.ctx.fillText('🐟 Сорвалась!', w / 2, 40);
        }
    }
}

window.SlavicFishing = SlavicFishing;

// === riddles.js ===
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

// === night-siege.js ===
class NightSiegeEngine {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.timeLeft = 60;
        this.score = 0;
        this.timerInterval = null;
        this.isRunning = false;
        this.m3 = null;

        this.onFinish = options.onFinish || null;
    }

    startSiege(onScoreUpdate, onTimeUpdate) {
        this.timeLeft = 60;
        this.score = 0;
        this.isRunning = true;

        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            if (!this.isRunning) return;
            this.timeLeft--;
            if (onTimeUpdate) onTimeUpdate(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.finishSiege();
            }
        }, 1000);
    }

    finishSiege() {
        this.isRunning = false;
        if (this.timerInterval) clearInterval(this.timerInterval);
        if (window.gameAudio) window.gameAudio.playWin();

        const rewardGold = Math.max(100, Math.floor(this.score * 0.5));
        const rewardWood = Math.max(20, Math.floor(this.score * 0.1));
        const rewardResin = Math.max(5, Math.floor(this.score * 0.05));

        if (this.onFinish) {
            this.onFinish({
                score: this.score,
                gold: rewardGold,
                wood: rewardWood,
                resin: rewardResin
            });
        }
    }

    stop() {
        this.isRunning = false;
        if (this.timerInterval) clearInterval(this.timerInterval);
    }
}

window.NightSiegeEngine = NightSiegeEngine;

// === achievements.js ===
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

// === quests.js ===
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

// === wheel.js ===
class VelesWheel {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onReward = options.onReward || null;

        this.segments = [
            { label: '500 🪙', type: 'gold', val: 500, color: '#FFD700', textCol: '#2C1810' },
            { label: '50 🪵', type: 'wood', val: 50, color: '#8D6E63', textCol: '#FFFFFF' },
            { label: '⚡ +5 Энергии', type: 'energy', val: 5, color: '#00B4D8', textCol: '#FFFFFF' },
            { label: '25 💧 Смолы', type: 'resin', val: 25, color: '#7209B7', textCol: '#FFFFFF' },
            { label: '🔨 Молот', type: 'hammer', val: 1, color: '#E63946', textCol: '#FFFFFF' },
            { label: '1000 🪙 Джекпот', type: 'gold', val: 1000, color: '#FFAA00', textCol: '#2C1810' },
            { label: '🔀 Мельница', type: 'shuffle', val: 1, color: '#2A9D8F', textCol: '#FFFFFF' },
            { label: '100 🪵 Брус', type: 'wood', val: 100, color: '#5C3A21', textCol: '#FFFFFF' }
        ];

        this.currentAngle = 0;
        this.isSpinning = false;
        this.render();
    }

    render() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        if (!w || !h) return;

        this.ctx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) * 0.44;

        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(this.currentAngle);

        const segAngle = (Math.PI * 2) / this.segments.length;

        // Draw Segments
        this.segments.forEach((seg, i) => {
            const startA = i * segAngle;
            const endA = startA + segAngle;

            this.ctx.fillStyle = seg.color;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.arc(0, 0, radius, startA, endA);
            this.ctx.closePath();
            this.ctx.fill();

            // Segment Border
            this.ctx.strokeStyle = '#D4AF37';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Text Label
            this.ctx.save();
            this.ctx.rotate(startA + segAngle / 2);
            this.ctx.textAlign = 'right';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = seg.textCol;
            this.ctx.font = 'bold 13px "Russo One", sans-serif';
            this.ctx.fillText(seg.label, radius * 0.88, 0);
            this.ctx.restore();
        });

        // Golden Outer Rim
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
        this.ctx.stroke();

        this.ctx.restore();

        // Center Cap
        this.ctx.fillStyle = '#8B0000';
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.font = '16px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('☀️', cx, cy);

        // Top Pointer
        this.ctx.fillStyle = '#FFD700';
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - radius - 8);
        this.ctx.lineTo(cx - 12, cy - radius + 16);
        this.ctx.lineTo(cx + 12, cy - radius + 16);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    spin() {
        if (this.isSpinning) return;
        this.isSpinning = true;

        const winningIdx = Math.floor(Math.random() * this.segments.length);
        const segAngle = (Math.PI * 2) / this.segments.length;
        const targetRot = (Math.PI * 2 * 6) + ((Math.PI * 1.5) - (winningIdx * segAngle + segAngle / 2));
        
        let startAngle = this.currentAngle;
        let delta = targetRot - (startAngle % (Math.PI * 2));
        let duration = 4000;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1.0);
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            this.currentAngle = startAngle + delta * easeOut;
            this.render();

            if (progress < 1.0) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                window.gameAudio.playWin();
                const prize = this.segments[winningIdx];
                if (this.onReward) this.onReward(prize);
            }
        };

        requestAnimationFrame(animate);
    }
}

window.VelesWheel = VelesWheel;

// === codex.js ===
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

// === app.js ===
window.showToast = function(text, duration = 2400) {
    let toast = document.getElementById('game-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'game-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
};

class SlavicManorApp {
    constructor() {
        this.gameState = {
            version: '0.0.1',
            level: 1,
            levelStars: {},
            wood: 50,
            gold: 300,
            resin: 20,
            energy: 10,
            maxEnergy: 10,
            buildings: {},
            heroes: {},
            petsState: {},
            lastWheelSpinTime: 0,
            dailyLoginDay: 1,
            lastDailyClaimTime: 0,
            questsState: {},
            achievementsState: {},
            scoreTotal: 0,
            boosters: { hammer: 2, shuffle: 2 }
        };

        this.m3Engine = null;
        this.manorEngine = null;
        this.levelMapEngine = null;
        this.wheelEngine = null;
        this.heroesSystem = null;
        this.petsSystem = null;
        this.marketSystem = null;
        this.riddlesSystem = null;
        this.nightSiegeEngine = null;
        this.codexSystem = null;
        this.questsSystem = null;
        this.achievementsSystem = null;
        this.fishingEngine = null;
        this.selectedBuildingForModal = null;
        this.lastRewards = { wood: 0, gold: 0 };
        this.isNightSiegeMode = false;
    }

    async init() {
        if (window.i18n) {
            window.i18n.init();
        }

        await window.vkSDK.init();

        const savedData = await window.vkSDK.loadData();
        if (savedData) {
            this.gameState = { ...this.gameState, ...savedData };
            if (!this.gameState.levelStars) this.gameState.levelStars = {};
            if (!this.gameState.buildings) this.gameState.buildings = {};
            if (!this.gameState.heroes) this.gameState.heroes = {};
            if (!this.gameState.petsState) this.gameState.petsState = {};
            if (!this.gameState.questsState) this.gameState.questsState = {};
            if (!this.gameState.achievementsState) this.gameState.achievementsState = {};
            if (!this.gameState.heroGiftsLastClaimed) this.gameState.heroGiftsLastClaimed = {};
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            if (this.gameState.boosters.hammer === undefined) this.gameState.boosters.hammer = 2;
            if (this.gameState.boosters.shuffle === undefined) this.gameState.boosters.shuffle = 2;
        }

        this.updateUIResources();

        const manorCanvas = document.getElementById('manor-canvas');
        const weatherCanvas = document.getElementById('weather-canvas');
        this.manorEngine = new window.ManorEngine(manorCanvas, weatherCanvas, {
            onBuildingClick: (bldg) => {
                if (bldg.id === 'pier') {
                    if (bldg.level === 0) {
                        this.openBuildingModal(bldg);
                    } else {
                        const marketTab = document.querySelector('.nav-tab[data-target="view-market"]');
                        if (marketTab) marketTab.click();
                    }
                } else if (bldg.id === 'fisherman') {
                    if (bldg.level === 0) {
                        this.openBuildingModal(bldg);
                    } else {
                        this.openFishingModal();
                    }
                } else {
                    this.openBuildingModal(bldg);
                }
            },
            onCollectIdle: (res) => this.handleCollectIdle(res),
            onCitizenClick: (c) => this.handleCitizenClick(c)
        });
        this.manorEngine.setBuildingsState(this.gameState.buildings);

        const m3Canvas = document.getElementById('match3-canvas');
        this.m3Engine = new window.MatchThreeEngine(m3Canvas, {
            onStateChange: () => this.updateMatch3Header(),
            onLevelWin: (res) => this.handleLevelWin(res),
            onLevelLoss: () => this.handleLevelLoss(),
            onBoosterUsed: (boosterId) => {
                if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                if (this.gameState.boosters[boosterId] > 0) {
                    this.gameState.boosters[boosterId]--;
                    this.updateBoosterUI();
                    this.saveProgress();
                }
            },
            onRuneMaster: () => {
                if (!this.gameState.achievementsState) this.gameState.achievementsState = {};
                this.gameState.achievementsState['rune_master'] = (this.gameState.achievementsState['rune_master'] || 0) + 1;
                this.saveProgress();
            },
            onComboKing: (combo) => {
                if (!this.gameState.achievementsState) this.gameState.achievementsState = {};
                this.gameState.achievementsState['combo_king'] = (this.gameState.achievementsState['combo_king'] || 0) + 1;
                this.saveProgress();
            }
        });

        const levelsContainer = document.getElementById('levels-container');
        this.levelMapEngine = new window.LevelMapEngine(levelsContainer, {
            onSelectLevel: (lvl) => this.startSelectedLevel(lvl)
        });
        this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);

        const wheelCanvas = document.getElementById('wheel-canvas');
        this.wheelEngine = new window.VelesWheel(wheelCanvas, {
            onReward: (prize) => this.handleWheelReward(prize)
        });

        this.heroesSystem = new window.HeroesSystem();
        if (this.gameState.heroes) {
            this.heroesSystem.setHeroesState(this.gameState.heroes);
        }

        this.petsSystem = new window.SlavicPetsSystem();
        if (this.gameState.petsState) {
            this.petsSystem.loadState(this.gameState.petsState);
        }

        this.marketSystem = new window.SlavicMarketSystem();
        this.riddlesSystem = new window.SlavicRiddlesSystem();
        this.nightSiegeEngine = new window.NightSiegeEngine(m3Canvas, {
            onFinish: (loot) => this.handleNightSiegeFinish(loot)
        });

        this.codexSystem = new window.SlavicCodex();
        this.questsSystem = new window.QuestsSystem();
        this.achievementsSystem = new window.AchievementsSystem();

        const fCanvas = document.getElementById('fishing-canvas');
        this.fishingEngine = new window.SlavicFishing(fCanvas, {
            onCatch: (loot) => this.handleFishCatch(loot)
        });

        this.bindEvents();
        this.updateWheelButtonState();

        if (window.vkSDK && typeof window.vkSDK.notifyLoadingReady === 'function') {
            window.vkSDK.notifyLoadingReady();
        }

        setInterval(() => {
            if (this.gameState.energy < this.gameState.maxEnergy) {
                this.gameState.energy++;
                this.updateUIResources();
                this.saveProgress();
            }
            this.updateWheelButtonState();
        }, 60000);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (window.gameAudio) window.gameAudio.mute();
                if (this.manorEngine) this.manorEngine.stopRenderLoop();
                if (window.vkSDK && window.vkSDK.isGameplayActive) {
                    window.vkSDK.stopGameplay();
                }
            } else {
                if (window.gameAudio && !window.vkSDK?.isShowingAd && !window.gameAudio.isUserMuted) {
                    window.gameAudio.unmute();
                }
                const activeView = document.querySelector('.view.active');
                if (activeView && activeView.id === 'view-manor' && this.manorEngine) {
                    this.manorEngine.startRenderLoop();
                }
                if (activeView && (activeView.id === 'view-match3' || this.isNightSiegeMode)) {
                    if (window.vkSDK && (!this.m3Engine || !this.m3Engine.levelFinished)) {
                        window.vkSDK.startGameplay();
                    }
                }
            }
        });

        window.addEventListener('resize', () => {
            if (this.manorEngine) this.manorEngine.resize();
            if (this.m3Engine) this.m3Engine.resize();
            if (this.wheelEngine) this.wheelEngine.render();
            if (this.fishingEngine) this.fishingEngine.resize();
        });

        setTimeout(() => {
            if (this.manorEngine) this.manorEngine.resize();
            if (this.wheelEngine) this.wheelEngine.render();
            if (this.fishingEngine) this.fishingEngine.resize();

            if (typeof window !== 'undefined' && window.location && window.location.search) {
                const urlParams = new URLSearchParams(window.location.search);
                const initialView = urlParams.get('view');
                const initialLvl = parseInt(urlParams.get('level') || '4', 10);

                if (initialView === 'match3') {
                    this.openMatch3Screen(initialLvl);
                    this.m3Engine.score = 5840;
                    this.updateMatch3Header();
                } else if (initialView === 'boss') {
                    this.openMatch3Screen(5);
                    this.m3Engine.score = 11200;
                    this.m3Engine.bossCurrentHp = 16;
                    this.updateMatch3Header();
                } else if (initialView === 'heroes') {
                    const tab = document.querySelector('.nav-tab[data-target="view-heroes"]');
                    if (tab) tab.click();
                } else if (initialView === 'market') {
                    const tab = document.querySelector('.nav-tab[data-target="view-market"]');
                    if (tab) tab.click();
                } else if (initialView === 'pets') {
                    const tab = document.querySelector('.nav-tab[data-target="view-pets"]');
                    if (tab) tab.click();
                } else if (initialView === 'wheel') {
                    const tab = document.querySelector('.nav-tab[data-target="view-wheel"]');
                    if (tab) tab.click();
                }
            }
        }, 100);

        const startAudioOnGesture = () => {
            if (window.gameAudio && !window.gameAudio.isUserMuted) {
                window.gameAudio.startMusic();
            }
            document.removeEventListener('click', startAudioOnGesture);
            document.removeEventListener('touchstart', startAudioOnGesture);
        };
        document.addEventListener('click', startAudioOnGesture);
        document.addEventListener('touchstart', startAudioOnGesture);
    }

    t(key, params = {}) {
        return window.i18n ? window.i18n.t(key, params) : key;
    }

    updateLocalizedUI() {
        this.updateUIResources();
        if (this.manorEngine) {
            const season = this.manorEngine.getCurrentSeason();
            const seasonName = this.t(`season_${season.id}`);
            const weatherDesc = this.t(`weather_${season.id}`);
            document.getElementById('season-name').textContent = `${this.t('season_prefix')}${seasonName}`;
            document.getElementById('weather-desc').textContent = weatherDesc;
        }

        const activeView = document.querySelector('.view.active');
        if (activeView) {
            if (activeView.id === 'view-pets') this.renderPetsView();
            else if (activeView.id === 'view-market') this.renderMarketView();
            else if (activeView.id === 'view-leaderboard') this.renderLeaderboard();
            else if (activeView.id === 'view-levels' && this.levelMapEngine) {
                this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);
            }
        }
        this.updateWheelButtonState();
    }

    updateUIResources() {
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };
        setTxt('res-wood', this.gameState.wood);
        setTxt('res-gold', this.gameState.gold);
        setTxt('res-resin', this.gameState.resin);
        setTxt('res-energy', `${this.gameState.energy}/${this.gameState.maxEnergy}`);
        setTxt('current-level-num', this.gameState.level);
    }

    setStoryDialogue(author, avatar, text) {
        const box = document.getElementById('story-dialogue-banner');
        if (box) {
            box.querySelector('.dialogue-author').textContent = author;
            box.querySelector('.dialogue-avatar').textContent = avatar;
            box.querySelector('.dialogue-text').textContent = text;
        }
    }

    handleCollectIdle(res) {
        if (res.type === 'gold') this.gameState.gold += res.val;
        else if (res.type === 'wood') this.gameState.wood += res.val;
        else if (res.type === 'resin') this.gameState.resin += res.val;

        this.gameState.achievementsState['easter_finder'] = (this.gameState.achievementsState['easter_finder'] || 0) + 1;

        this.updateUIResources();
        this.saveProgress();
    }

    handleCitizenClick(c) {
        if (!this.gameState.heroGiftsLastClaimed) this.gameState.heroGiftsLastClaimed = {};
        const now = Date.now();
        const lastClaim = this.gameState.heroGiftsLastClaimed[c.id] || 0;
        const cooldown = 86400000;
        const isGiftReady = (now - lastClaim >= cooldown);

        let author = c.label;
        let avatar = '🛡️';
        let speech = '';
        let bubbleText = '';
        let floatingText = '';

        if (c.id === 'ilya') avatar = '⚔️';
        else if (c.id === 'dobrynya') avatar = '🛡️';
        else if (c.id === 'alesha') avatar = '🏹';
        else if (c.id === 'vasilisa') avatar = '👑';
        else if (c.id === 'vakula') avatar = '🔨';
        else if (c.id === 'radogor') avatar = '🧙‍♂️';
        else if (c.id === 'peasant') avatar = '🌾';
        else if (c.id === 'maiden') avatar = '🌸';
        else if (c.id === 'dog') avatar = '🐕';

        if (isGiftReady) {
            this.gameState.heroGiftsLastClaimed[c.id] = now;
            window.gameAudio.playWin();

            if (c.id === 'ilya') {
                this.gameState.gold += 50;
                floatingText = '+50 🪙';
                speech = this.t('hero_ilya_gift');
                bubbleText = '«Земля русская под нашей защитой! Прими богатырский дар: +50 🪙»';
            } else if (c.id === 'dobrynya') {
                this.gameState.wood += 25;
                floatingText = '+25 🪵';
                speech = this.t('hero_dobrynya_gift');
                bubbleText = '«Солнце сияет над Русью! Держи древесину: +25 🪵»';
            } else if (c.id === 'alesha') {
                this.gameState.gold += 35;
                floatingText = '+35 🪙';
                speech = this.t('hero_alesha_gift');
                bubbleText = '«Глаз меток, а лук верен! Вот тебе червонцы: +35 🪙»';
            } else if (c.id === 'vasilisa') {
                this.gameState.resin += 10;
                floatingText = '+10 💧';
                speech = this.t('hero_vasilisa_gift');
                bubbleText = '«Мудрость веков хранит село. Дар тайных трав: +10 💧»';
            } else if (c.id === 'vakula') {
                this.gameState.wood += 30;
                floatingText = '+30 🪵';
                speech = this.t('hero_vakula_gift');
                bubbleText = '«Жар в горне пылает! Держи бревна: +30 🪵»';
            } else if (c.id === 'radogor') {
                this.gameState.energy = Math.min(this.gameState.maxEnergy, this.gameState.energy + 2);
                floatingText = '+2 ⚡';
                speech = this.t('hero_radogor_gift');
                bubbleText = '«Сила Перуна с тобой! Дар духов: +2 Энергии ⚡»';
            } else if (c.id === 'peasant') {
                this.gameState.gold += 10;
                floatingText = '+10 🪙';
                speech = this.t('hero_peasant_talk');
                bubbleText = '«Слава честному труду! Урожай богатый!»';
            } else if (c.id === 'maiden') {
                this.gameState.gold += 10;
                floatingText = '+10 🪙';
                speech = this.t('hero_maiden_talk');
                bubbleText = '«Хоровод водим, песни поем — благодать!»';
            } else if (c.id === 'dog') {
                this.gameState.gold += 5;
                floatingText = '❤️ +5 🪙';
                speech = this.t('hero_dog_talk');
                bubbleText = '«Гав-гав! *радостно виляет хвостом*»';
            }

            this.updateUIResources();
            this.saveProgress();
        } else {
            window.gameAudio.playSwap();
            floatingText = '✨';

            if (c.id === 'ilya') {
                speech = this.t('hero_ilya_idle');
                bubbleText = '«Честь и слава защитникам! (Приходи за даром завтра)»';
            } else if (c.id === 'dobrynya') {
                speech = this.t('hero_dobrynya_idle');
                bubbleText = '«Порядок и закон нерушимы! (Приходи за даром завтра)»';
            } else if (c.id === 'alesha') {
                speech = this.t('hero_alesha_idle');
                bubbleText = '«Лес спокоен, нечисть не пройдет! (Приходи за даром завтра)»';
            } else if (c.id === 'vasilisa') {
                speech = this.t('hero_vasilisa_idle');
                bubbleText = '«Тайны природы ждут терпеливых. (Приходи завтра)»';
            } else if (c.id === 'vakula') {
                speech = this.t('hero_vakula_idle');
                bubbleText = '«Куй железо, пока горячо! (Приходи за даром завтра)»';
            } else if (c.id === 'radogor') {
                speech = this.t('hero_radogor_idle');
                bubbleText = '«Звезды сулят победы в походах! (Приходи завтра)»';
            } else if (c.id === 'peasant') {
                speech = this.t('hero_peasant_talk');
                bubbleText = '«Работа спорится, село цветет!»';
            } else if (c.id === 'maiden') {
                speech = this.t('hero_maiden_talk');
                bubbleText = '«Солнышко греет, душа поет!»';
            } else if (c.id === 'dog') {
                speech = this.t('hero_dog_talk');
                bubbleText = '«Тявк! *верный страж села*»';
            }
        }

        this.setStoryDialogue(author, avatar, speech);
        if (this.manorEngine) {
            if (floatingText) this.manorEngine.addFloatingText(floatingText, c.x, c.y - 25);
            this.manorEngine.showSpeechBubble(c.id, `${avatar} ${author}`, bubbleText, 4500);
        }
    }

    updateWheelButtonState() {
        const now = Date.now();
        const lastSpin = this.gameState.lastWheelSpinTime || 0;
        const cooldown = 86400000;
        const timePassed = now - lastSpin;

        const btnFree = document.getElementById('btn-spin-wheel');
        const btnAd = document.getElementById('btn-spin-wheel-ad');
        const timerText = document.getElementById('wheel-timer-text');

        if (timePassed >= cooldown) {
            btnFree.style.display = 'inline-flex';
            btnFree.disabled = false;
            btnAd.style.display = 'none';
            timerText.textContent = this.t('wheel_free_ready');
        } else {
            const remainingMs = cooldown - timePassed;
            const hours = Math.floor(remainingMs / (1000 * 60 * 60));
            const mins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

            btnFree.style.display = 'none';
            btnAd.style.display = 'inline-flex';
            timerText.textContent = this.t('wheel_cooldown', { h: hours, m: mins });
        }
    }

    bindEvents() {
        document.getElementById('btn-lang-switch').addEventListener('click', () => {
            if (window.i18n) {
                window.i18n.nextLanguage();
            }
        });

        document.getElementById('btn-open-riddles').addEventListener('click', () => {
            this.openRiddlesModal();
        });

        document.getElementById('btn-open-siege').addEventListener('click', () => {
            this.openNightSiegeScreen();
        });

        document.getElementById('btn-open-fishing').addEventListener('click', () => {
            this.openFishingModal();
        });

        document.getElementById('btn-strike-rod').addEventListener('click', () => {
            if (this.fishingEngine) this.fishingEngine.strike();
        });

        document.getElementById('btn-open-achievements').addEventListener('click', () => {
            this.openAchievementsModal();
        });

        document.getElementById('btn-music-track').addEventListener('click', () => {
            const nextTrack = window.gameAudio.nextTrack();
            window.showToast(this.t('music_now_playing', { name: nextTrack.name }));
        });

        document.getElementById('btn-fullscreen').addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        });

        document.getElementById('btn-daily-rewards').addEventListener('click', () => {
            this.openDailyModal();
        });

        document.getElementById('btn-close-scroll').addEventListener('click', () => {
            document.getElementById('modal-story-scroll').classList.add('hidden');
        });

        document.getElementById('btn-toggle-season').addEventListener('click', () => {
            window.gameAudio.playSwap();
            if (this.manorEngine) {
                const season = this.manorEngine.nextSeason();
                document.getElementById('season-icon').textContent = season.icon;
                const seasonName = this.t(`season_${season.id}`);
                const weatherDesc = this.t(`weather_${season.id}`);
                document.getElementById('season-name').textContent = `${this.t('season_prefix')}${seasonName}`;
                document.getElementById('weather-desc').textContent = weatherDesc;
            }
        });

        document.querySelectorAll('.btn-back-manor').forEach(btn => {
            btn.addEventListener('click', () => {
                const manorTab = document.querySelector('.nav-tab[data-target="view-manor"]');
                if (manorTab) manorTab.click();
            });
        });

        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                window.gameAudio.playSwap();
                navTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetId = tab.dataset.target;
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                const targetView = document.getElementById(targetId);
                if (targetView) targetView.classList.add('active');

                if (targetId === 'view-manor') {
                    this.manorEngine.startRenderLoop();
                    this.manorEngine.resize();
                } else {
                    this.manorEngine.stopRenderLoop();
                }

                if (targetId === 'view-levels') {
                    this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);
                } else if (targetId === 'view-pets') {
                    this.renderPetsView();
                } else if (targetId === 'view-market') {
                    this.renderMarketView();
                } else if (targetId === 'view-wheel') {
                    this.wheelEngine.render();
                    this.updateWheelButtonState();
                } else if (targetId === 'view-heroes') {
                    this.heroesSystem.renderHeroes(
                        document.getElementById('heroes-list'),
                        this.gameState.gold,
                        (h, costPaid) => {
                            window.gameAudio.playUpgrade();
                            this.gameState.gold -= costPaid;
                            this.gameState.heroes[h.id] = h.level;
                            this.updateUIResources();
                            this.saveProgress();
                        }
                    );
                } else if (targetId === 'view-codex') {
                    this.codexSystem.render(document.getElementById('codex-list'), this.gameState.level);
                } else if (targetId === 'view-leaderboard') {
                    this.renderLeaderboard();
                }
            });
        });

        document.getElementById('btn-sound').addEventListener('click', (e) => {
            const active = window.gameAudio.toggleSound();
            e.target.textContent = active ? '🔊' : '🔇';
        });

        document.getElementById('btn-open-levels').addEventListener('click', () => {
            const levelsTab = document.querySelector('.nav-tab[data-target="view-levels"]');
            if (levelsTab) levelsTab.click();
        });

        document.getElementById('btn-spin-wheel').addEventListener('click', () => {
            this.wheelEngine.spin();
            this.gameState.lastWheelSpinTime = Date.now();
            this.gameState.achievementsState['wheel_spinner'] = (this.gameState.achievementsState['wheel_spinner'] || 0) + 1;
            this.saveProgress();
            this.updateWheelButtonState();
        });

        document.getElementById('btn-spin-wheel-ad').addEventListener('click', () => {
            window.vkSDK.showRewardedVideo({
                onRewarded: () => {
                    this.wheelEngine.spin();
                    this.gameState.achievementsState['wheel_spinner'] = (this.gameState.achievementsState['wheel_spinner'] || 0) + 1;
                    this.saveProgress();
                }
            });
        });

        document.getElementById('btn-exit-match3').addEventListener('click', () => {
            if (this.isNightSiegeMode && this.nightSiegeEngine) {
                this.nightSiegeEngine.stop();
            }
            this.isNightSiegeMode = false;
            this.closeMatch3Screen();
        });

        document.getElementById('btn-booster-hammer').addEventListener('click', () => {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            if (this.gameState.boosters.hammer <= 0) {
                window.showToast && window.showToast('🔨 Запас Молотов исчерпан! Выиграйте в Колесе Велеса!');
                return;
            }
            if (this.m3Engine.animating || this.m3Engine.levelFinished) return;
            this.m3Engine.useBooster('hammer');
        });
        document.getElementById('btn-booster-shuffle').addEventListener('click', () => {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            if (this.gameState.boosters.shuffle <= 0) {
                window.showToast && window.showToast('🌪️ Запас Вихрей исчерпан! Выиграйте в Колесе Велеса!');
                return;
            }
            if (this.m3Engine.animating || this.m3Engine.levelFinished) return;
            this.m3Engine.useBooster('shuffle');
        });
        document.getElementById('btn-booster-ad-moves').addEventListener('click', () => {
            window.vkSDK.showRewardedVideo({
                onRewarded: () => {
                    this.m3Engine.useBooster('addMoves');
                }
            });
        });

        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const overlay = e.target.closest('.modal-overlay');
                if (overlay) {
                    overlay.classList.add('hidden');
                    if (overlay.id === 'modal-fishing') {
                        if (this.fishingEngine) this.fishingEngine.stopLoop();
                        if (window.vkSDK) window.vkSDK.stopGameplay();
                    }
                }
            });
        });

        document.getElementById('btn-confirm-upgrade').addEventListener('click', () => {
            if (!this.selectedBuildingForModal) return;
            const b = this.selectedBuildingForModal;

            if (b.maxLevel && b.level >= b.maxLevel) {
                window.showToast(this.t('bldg_max_level') || 'Постройка уже улучшена до максимума!');
                return;
            }

            if (this.gameState.wood >= b.costWood && this.gameState.gold >= b.costGold) {
                window.gameAudio.playUpgrade();
                this.gameState.wood -= b.costWood;
                this.gameState.gold -= b.costGold;
                b.level++;
                b.costWood = Math.floor(b.baseCostWood * Math.pow(1.6, b.level));
                b.costGold = Math.floor(b.baseCostGold * Math.pow(1.6, b.level));

                this.gameState.buildings[b.id] = b.level;

                if (b.id === 'terem') {
                    this.gameState.maxEnergy = 10 + b.level * 2;
                }

                this.gameState.questsState['upgrade'] = (this.gameState.questsState['upgrade'] || 0) + 1;

                this.updateUIResources();
                this.manorEngine.setBuildingsState(this.gameState.buildings);
                this.saveProgress();

                this.setStoryDialogue(
                    this.t('story_smith_author'),
                    '🔨',
                    this.t('story_smith_upgraded', { name: b.name, level: b.level })
                );

                document.getElementById('modal-building').classList.add('hidden');
            } else {
                window.showToast(this.t('bldg_not_enough_res'));
            }
        });

        document.getElementById('btn-continue-result').addEventListener('click', () => {
            document.getElementById('modal-result').classList.add('hidden');
            this.closeMatch3Screen();
            if (this.lastWonLevel && this.lastWonLevel % 25 === 0) {
                const scrollLvl = this.lastWonLevel;
                this.lastWonLevel = null;
                this.openStoryScroll(scrollLvl);
            } else {
                window.vkSDK.showFullscreenAdv({}, this.gameState.level);
            }
        });

        document.getElementById('btn-double-reward').addEventListener('click', () => {
            window.vkSDK.showRewardedVideo({
                onRewarded: () => {
                    window.gameAudio.playUpgrade();
                    const extraWood = this.lastRewards.wood;
                    const extraGold = this.lastRewards.gold;
                    this.gameState.wood += extraWood;
                    this.gameState.gold += extraGold;
                    this.updateUIResources();
                    this.saveProgress();
                    window.showToast(this.t('win_double_alert', { wood: extraWood, gold: extraGold }));
                    document.getElementById('btn-double-reward').style.display = 'none';
                    const resRewardsEl = document.getElementById('result-rewards');
                    if (resRewardsEl) {
                        resRewardsEl.innerHTML = `
                            <div class="res-item">🪵 +${extraWood * 2}</div>
                            <div class="res-item">🪙 +${extraGold * 2}</div>
                        `;
                    }
                }
            });
        });

        const lossMovesBtn = document.getElementById('btn-loss-ad-moves');
        if (lossMovesBtn) {
            lossMovesBtn.addEventListener('click', () => {
                window.vkSDK.showRewardedVideo({
                    onRewarded: () => {
                        this.m3Engine.useBooster('addMoves');
                    }
                });
            });
        }

        const upgradeFishBtn = document.getElementById('btn-upgrade-fisherman');
        if (upgradeFishBtn) {
            upgradeFishBtn.addEventListener('click', () => {
                document.getElementById('modal-fishing').classList.add('hidden');
                if (this.fishingEngine) this.fishingEngine.stopLoop();
                if (window.vkSDK) window.vkSDK.stopGameplay();
                const fishBldg = this.manorEngine?.buildings?.find(b => b.id === 'fisherman');
                if (fishBldg) this.openBuildingModal(fishBldg);
            });
        }
    }

    openRiddlesModal() {
        const modalEl = document.getElementById('modal-riddles');
        this.riddlesSystem.renderRiddleModal(modalEl, (rewardGold) => {
            this.gameState.gold += rewardGold;
            this.updateUIResources();
            this.saveProgress();
        });
        modalEl.classList.remove('hidden');
    }

    openNightSiegeScreen() {
        if (this.gameState.energy < 2) {
            window.showToast(this.t('m3_need_energy_siege'));
            return;
        }
        this.gameState.energy -= 2;
        this.updateUIResources();

        window.vkSDK.startGameplay();
        this.isNightSiegeMode = true;
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-match3').classList.add('active');
        document.getElementById('bottom-nav').style.display = 'none';

        if (this.manorEngine) this.manorEngine.stopRenderLoop();

        const heroBonuses = this.heroesSystem ? this.heroesSystem.getBonuses() : {};
        this.m3Engine.startLevel(1, heroBonuses);
        this.m3Engine.targetTypes = { score: 999999 };
        this.m3Engine.movesLeft = 999;
        document.getElementById('m3-timer-label').textContent = this.t('m3_time');
        document.getElementById('m3-moves').textContent = '60s';

        this.nightSiegeEngine.startSiege(
            (score) => {},
            (timeLeft) => {
                document.getElementById('m3-moves').textContent = `${timeLeft}s`;
            }
        );
    }

    handleNightSiegeFinish(loot) {
        this.isNightSiegeMode = false;
        if (window.vkSDK) window.vkSDK.stopGameplay();
        document.getElementById('m3-timer-label').textContent = this.t('m3_moves');

        this.gameState.gold += loot.gold;
        this.gameState.wood += loot.wood;
        this.gameState.resin += loot.resin;
        this.gameState.scoreTotal += loot.score;
        this.lastRewards = { wood: loot.wood, gold: loot.gold };

        this.updateUIResources();
        this.saveProgress();

        document.getElementById('result-title').textContent = this.t('siege_win_title');
        document.getElementById('result-stars').textContent = '⭐⭐⭐';
        document.getElementById('result-desc').textContent = this.t('siege_win_desc');
        document.getElementById('result-rewards').innerHTML = `
            <div class="res-item">🪵 +${loot.wood}</div>
            <div class="res-item">🪙 +${loot.gold}</div>
            <div class="res-item">💧 +${loot.resin}</div>
        `;
        document.getElementById('btn-double-reward').style.display = 'inline-block';
        document.getElementById('modal-result').classList.remove('hidden');
    }

    renderPetsView() {
        const container = document.getElementById('pets-list');
        this.petsSystem.renderPets(
            container,
            this.gameState.gold,
            (pet, costPaid) => {
                window.gameAudio.playUpgrade();
                this.gameState.gold -= costPaid;
                if (!this.gameState.petsState.petsLevels) this.gameState.petsState.petsLevels = {};
                this.gameState.petsState.petsLevels[pet.id] = pet.level;
                this.updateUIResources();
                this.saveProgress();
                this.renderPetsView();
                window.showToast(this.t('pets_upgraded_alert', { name: pet.name, level: pet.level }));
            },
            (pet) => {
                window.gameAudio.playSwap();
                this.gameState.petsState.activePetId = pet.id;
                this.saveProgress();
                this.renderPetsView();
                window.showToast(this.t('pets_chosen_alert', { name: pet.name }));
            }
        );
    }

    renderMarketView() {
        const container = document.getElementById('market-list');
        this.marketSystem.renderMarket(
            container,
            this.gameState,
            (deal) => {
                window.gameAudio.playUpgrade();
                this.gameState.wood -= deal.costWood;
                this.gameState.gold -= deal.costGold;
                this.gameState.gold += deal.giveGold || 0;
                this.gameState.resin += deal.giveResin || 0;
                if (deal.giveHammer) {
                    if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                    this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + deal.giveHammer;
                    this.updateBoosterUI();
                }
                this.updateUIResources();
                this.saveProgress();
                this.renderMarketView();
                window.showToast(this.t('market_deal_done'));
            },
            () => {
                window.vkSDK.showRewardedVideo({
                    onRewarded: () => {
                        window.gameAudio.playWin();
                        this.gameState.gold += 300;
                        this.gameState.wood += 30;
                        this.gameState.resin += 10;
                        this.updateUIResources();
                        this.saveProgress();
                        this.renderMarketView();
                        window.showToast(this.t('market_gift_done'));
                    }
                });
            },
            () => {
                const pierBldg = this.manorEngine?.buildings?.find(b => b.id === 'pier');
                if (pierBldg) this.openBuildingModal(pierBldg);
            }
        );
    }

    openFishingModal() {
        if (window.vkSDK) window.vkSDK.startGameplay();
        const fishBldg = this.manorEngine?.buildings?.find(b => b.id === 'fisherman');
        const upBtn = document.getElementById('btn-upgrade-fisherman');
        if (upBtn && fishBldg) {
            if (fishBldg.level >= fishBldg.maxLevel) {
                upBtn.textContent = '🔨 Стан: Максимальный уровень ✓';
                upBtn.disabled = true;
                upBtn.style.opacity = '0.6';
            } else {
                upBtn.textContent = `🔨 Улучшить Стан (Ур. ${fishBldg.level}/${fishBldg.maxLevel})`;
                upBtn.disabled = false;
                upBtn.style.opacity = '1.0';
            }
        }
        document.getElementById('modal-fishing').classList.remove('hidden');
        if (this.fishingEngine) {
            this.fishingEngine.startLoop();
            this.fishingEngine.resize();
        }
    }

    handleFishCatch(loot) {
        this.gameState.gold += loot.gold;
        this.gameState.wood += loot.wood;
        this.gameState.resin += loot.resin;
        this.gameState.achievementsState['fisherman_pro'] = (this.gameState.achievementsState['fisherman_pro'] || 0) + 1;
        this.updateUIResources();
        this.saveProgress();
        const woodStr = loot.wood ? `+${loot.wood} 🪵` : '';
        window.showToast(this.t('fishing_catch_alert', { name: loot.name, gold: loot.gold, wood: woodStr }));
    }

    openAchievementsModal() {
        const container = document.getElementById('achievements-container');
        this.achievementsSystem.render(
            container,
            this.gameState,
            (ach) => {
                window.gameAudio.playWin();
                this.gameState.gold += ach.rewardGold;
                if (ach.rewardHammers) {
                    if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                    this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + ach.rewardHammers;
                    this.updateBoosterUI();
                }
                this.gameState.achievementsState[`${ach.id}_claimed`] = true;
                this.updateUIResources();
                this.saveProgress();
                window.showToast(this.t('ach_claimed_alert', { title: ach.title, gold: ach.rewardGold }));
                this.openAchievementsModal();
            }
        );
        document.getElementById('modal-achievements').classList.remove('hidden');
    }

    openStoryScroll(levelWon) {
        const bossChapter = Math.floor(levelWon / 25);
        const stories = [
            { title: 'Освобождение Дубравы', text: '«И бежал Леший в чащобу непроглядную, и засияло солнце над дубравою вековой. Возликовали селяне, неся богатырям дары земли русской!»' },
            { title: 'Тайна Болотных Глубин', text: '«Укрощен Водяной владыка! Расступились тина и топи, и открылся путь к древним серебряным рудникам предков.»' },
            { title: 'Чары Дремучего Бора', text: '«Повержена Баба-Яга! Рассеялись злые чары, а избушка на курьих ножках открыла тайники с целебным зельем.»' },
            { title: 'Битва на Калиновом Мосту', text: '«Срублены все три головы Змея Горыныча! Чиста река Смородина, и свободен путь богатырям на вольные просторы!»' },
            { title: 'Покорение Соловьиной Чащи', text: '«Смолк свист Соловья-Разбойника! Вновь безопасны торговые пути, а купцы новгородские везут товары на Усадьбу.»' },
            { title: 'Сказки Синего Лукоморья', text: '«Успокоился Кот Баюн, замурлыкал былины древние. Море синее дарует рыбакам богатые уловы и жемчуга.»' },
            { title: 'Благословение Ирийского Сада', text: '«Птица Сирин спела песнь радости! Зацвели яблони молодильные, возвращая силы и здоровье всему роду славянскому.»' },
            { title: 'Рассвет над Перуновыми Скалами', text: '«Пали козни Чернобога под ударами Перуновых молний! Свет правды озарил горные вершины Руси.»' },
            { title: 'Тепло в Ледяном Царстве', text: '«Смягчился суровый Морозко, подарив богатырям сундуки самоцветов и снежную защиту для родного села.»' },
            { title: 'Падение Кощеевых Чертогов', text: '«Сломана игла заветная, рухнули чары темные! Старорусская Усадьба процветает во веки веков во славу Земли Русской!»' },
            { title: 'Сокровища Медной Горы', text: '«Хозяйка Медной Горы признала силу богатырскую и открыла недра с малахитом да золотой рудой!»' },
            { title: 'Перо Жар-Птицы', text: '«Поймана Жар-Птица дивная! Огненный свет ее пера согревает усадьбу в самые темные ночи.»' },
            { title: 'Изобилие Золотых Полей', text: '«Полевик одарил землю тучным колосом! Амбары ломятся от зерна, и не будет голода в крае нашем.»' },
            { title: 'Укрощение Стрибожьих Ветров', text: '«Стрибог направил попутные ветры на мельницы усадьбы! Колеса крутятся, мука сыплется рекою.»' },
            { title: 'Рассеянный Морок Нави', text: '«Не смог Вий поднять тяжелые веки перед светом богатырской доблести! Навьи тропы заросли цветами.»' },
            { title: 'Сила Мирового Древа', text: '«Змей Велес склонил главу, даровав мудрость предков и нерушимую связь с корнями родной земли.»' },
            { title: 'Слава Богатырской Заставы', text: '«Разбит Тугарин Змей! Стоит застава крепко, ни один ворог не ступит на святую землю русскую.»' },
            { title: 'Мудрость Рифейских Гор', text: '«Святогор-богатырь передал силушку былинную молодому поколению защитников Усадьбы.»' },
            { title: 'Огонь Сварожьей Кузницы', text: '«Сварог сковал небесный щит для Усадьбы! Ни стрела, ни колдовство теперь не страшны селу.»' },
            { title: 'Торжество Беловодья', text: '«Чудо-Юдо повержено навеки! Открылись врата в легендарное Беловодье — землю вечного мира, счастья и изобилия!»' }
        ];
        const storyIdx = Math.max(0, Math.min(bossChapter - 1, stories.length - 1));
        const story = stories[storyIdx] || stories[0];

        document.getElementById('scroll-title').textContent = story.title;
        document.getElementById('scroll-text').textContent = story.text;
        document.getElementById('scroll-rewards').innerHTML = `
            <div class="res-item">🪙 +1000</div>
            <div class="res-item">💧 +50</div>
        `;
        this.gameState.gold += 1000;
        this.gameState.resin += 50;
        this.updateUIResources();
        this.saveProgress();

        document.getElementById('modal-story-scroll').classList.remove('hidden');
    }

    openDailyModal() {
        const calContainer = document.getElementById('daily-calendar-container');
        const questsContainer = document.getElementById('quests-container');

        this.questsSystem.renderCalendar(
            calContainer,
            this.gameState.dailyLoginDay || 1,
            this.gameState.lastDailyClaimTime || 0,
            (reward, dayNum) => {
                window.gameAudio.playWin();
                this.gameState.gold += reward.gold;
                this.gameState.wood += reward.wood;
                this.gameState.resin += reward.resin;
                if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
                if (reward.hammer) {
                    this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + reward.hammer;
                }
                if (reward.shuffle) {
                    this.gameState.boosters.shuffle = (this.gameState.boosters.shuffle || 0) + reward.shuffle;
                }
                this.updateBoosterUI();
                this.gameState.lastDailyClaimTime = Date.now();
                this.gameState.dailyLoginDay = (dayNum % 7) + 1;
                this.updateUIResources();
                this.saveProgress();
                window.showToast(this.t('daily_claimed_alert', { day: dayNum, label: reward.label }));
                this.openDailyModal();
            }
        );

        this.questsSystem.renderQuests(
            questsContainer,
            this.gameState.questsState,
            (quest) => {
                window.gameAudio.playUpgrade();
                this.gameState.gold += quest.rewardGold;
                this.gameState.questsState[`${quest.id}_claimed`] = true;
                this.updateUIResources();
                this.saveProgress();
                window.showToast(this.t('quest_claimed_alert', { gold: quest.rewardGold }));
                this.openDailyModal();
            }
        );

        document.getElementById('modal-daily').classList.remove('hidden');
    }

    startSelectedLevel(lvl) {
        if (this.gameState.energy < 1) {
            window.showToast(this.t('m3_need_energy'));
            return;
        }
        this.gameState.energy--;
        this.updateUIResources();
        this.openMatch3Screen(lvl);
    }

    openMatch3Screen(lvl = 1) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-match3').classList.add('active');
        document.getElementById('bottom-nav').style.display = 'none';

        if (this.manorEngine) this.manorEngine.stopRenderLoop();

        const heroBonuses = this.heroesSystem ? this.heroesSystem.getBonuses() : {};
        
        const activePet = this.petsSystem ? this.petsSystem.getActivePet() : null;
        if (activePet && activePet.level > 0) {
            if (activePet.id === 'firebird' && lvl % 5 === 0) {
                heroBonuses.startWithSun = true;
            } else if (activePet.id === 'cat_bayun') {
                heroBonuses.catBayunActive = true;
            }
        }

        this.currentPlayingLevel = lvl;
        window.vkSDK.startGameplay();
        this.m3Engine.startLevel(lvl, heroBonuses);
        this.updateMatch3Header();
        this.updateBoosterUI();
    }

    updateBoosterUI() {
        if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
        const hammerCount = this.gameState.boosters.hammer !== undefined ? this.gameState.boosters.hammer : 2;
        const shuffleCount = this.gameState.boosters.shuffle !== undefined ? this.gameState.boosters.shuffle : 2;
        const hammerBtn = document.getElementById('btn-booster-hammer');
        const shuffleBtn = document.getElementById('btn-booster-shuffle');
        if (hammerBtn) {
            hammerBtn.innerHTML = `🔨 ${this.t('m3_booster_hammer')} <span class="booster-badge">(${hammerCount})</span>`;
        }
        if (shuffleBtn) {
            shuffleBtn.innerHTML = `🌪️ ${this.t('m3_booster_shuffle')} <span class="booster-badge">(${shuffleCount})</span>`;
        }
    }

    closeMatch3Screen() {
        window.vkSDK.stopGameplay();
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-manor').classList.add('active');
        document.getElementById('bottom-nav').style.display = 'flex';
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.target === 'view-manor'));
        
        if (this.manorEngine) {
            this.manorEngine.startRenderLoop();
            this.manorEngine.resize();
        }
        this.levelMapEngine.render(this.gameState.level, this.gameState.levelStars);
    }

    updateMatch3Header() {
        if (!this.isNightSiegeMode) {
            document.getElementById('m3-moves').textContent = this.m3Engine.movesLeft;
        }
        document.getElementById('m3-score').textContent = this.m3Engine.score;
        if (this.isNightSiegeMode && this.nightSiegeEngine) {
            this.nightSiegeEngine.score = this.m3Engine.score;
        }

        const targetContainer = document.getElementById('m3-targets');
        targetContainer.innerHTML = '';

        if (this.isNightSiegeMode) {
            targetContainer.innerHTML = `<span style="color:#FFD700; font-family:'Russo One';">${this.t('m3_siege_title')}</span>`;
            return;
        }

        if (this.m3Engine.isBossLevel) {
            const hpPercent = Math.max(0, Math.min(100, Math.round((this.m3Engine.bossCurrentHp / this.m3Engine.bossMaxHp) * 100)));
            const bossItem = document.createElement('div');
            bossItem.className = 'boss-health-bar-container';
            const badge = this.m3Engine.isChapterBoss ? '👑' : '💀';
            bossItem.innerHTML = `
                <div style="font-size:0.75rem; color:#FFD700; margin-bottom:2px; font-weight:bold;">${badge} ${this.m3Engine.bossName}: ${this.m3Engine.bossCurrentHp}/${this.m3Engine.bossMaxHp} HP</div>
                <div style="width:110px; height:8px; background:#333; border-radius:4px; overflow:hidden; border:1px solid #FFD700;">
                    <div style="width:${hpPercent}%; height:100%; background:linear-gradient(90deg, #E63946, #FF4D6D); transition: width 0.2s;"></div>
                </div>
            `;
            targetContainer.appendChild(bossItem);
        } else {
            for (let key in this.m3Engine.targetTypes) {
                const cur = this.m3Engine.targetProgress[key] || 0;
                const req = this.m3Engine.targetTypes[key];
                let icon = '🍓';
                if (key === 'wood') icon = '🍃';
                else if (key === 'grain') icon = '🌾';
                else if (key === 'gem') icon = '💎';
                else if (key === 'bramble') icon = '🌿';

                const item = document.createElement('div');
                item.className = 'target-item';
                item.innerHTML = `${icon} ${cur}/${req}`;
                targetContainer.appendChild(item);
            }
        }
    }

    handleLevelWin({ score }) {
        if (this.isNightSiegeMode) return;

        const lvl = this.currentPlayingLevel || this.gameState.level;
        const heroBonuses = this.heroesSystem ? this.heroesSystem.getBonuses() : {};
        
        let woodMult = heroBonuses.woodMultiplier || 1.0;
        const activePet = this.petsSystem ? this.petsSystem.getActivePet() : null;
        if (activePet && activePet.level > 0 && activePet.id === 'grey_wolf') {
            woodMult *= 1.25;
        }

        const rewardWood = Math.floor((15 + Math.floor(lvl / 2)) * woodMult);
        const rewardGold = Math.floor((50 + lvl * 5) * (activePet && activePet.level > 0 && activePet.id === 'grey_wolf' ? 1.25 : 1.0));

        this.lastRewards = { wood: rewardWood, gold: rewardGold };

        this.gameState.wood += rewardWood;
        this.gameState.gold += rewardGold;
        this.gameState.scoreTotal += score;

        if (this.m3Engine.isBossLevel) {
            this.gameState.questsState['boss'] = (this.gameState.questsState['boss'] || 0) + 1;
        }
        if (this.m3Engine.targetProgress['berry']) {
            this.gameState.questsState['berries'] = (this.gameState.questsState['berries'] || 0) + this.m3Engine.targetProgress['berry'];
        }

        const stars = Math.min(3, Math.max(1, Math.floor(this.m3Engine.movesLeft / 4) + 1));
        this.gameState.levelStars[lvl] = Math.max(this.gameState.levelStars[lvl] || 0, stars);

        if (lvl === this.gameState.level && this.gameState.level < 500) {
            this.gameState.level++;
        }

        this.lastWonLevel = lvl;

        if (this.gameState.level % 3 === 0 && this.manorEngine) {
            const season = this.manorEngine.nextSeason();
            document.getElementById('season-icon').textContent = season.icon;
            const seasonName = this.t(`season_${season.id}`);
            const weatherDesc = this.t(`weather_${season.id}`);
            document.getElementById('season-name').textContent = `${this.t('season_prefix')}${seasonName}`;
            document.getElementById('weather-desc').textContent = weatherDesc;
        }

        this.updateUIResources();
        this.saveProgress();

        document.getElementById('result-title').textContent = this.t('win_title');
        document.getElementById('result-stars').textContent = '⭐'.repeat(stars);
        document.getElementById('result-desc').textContent = this.t('win_desc');
        document.getElementById('result-rewards').innerHTML = `
            <div class="res-item">🪵 +${rewardWood}</div>
            <div class="res-item">🪙 +${rewardGold}</div>
        `;
        document.getElementById('btn-double-reward').style.display = 'inline-block';
        const lossMovesBtn = document.getElementById('btn-loss-ad-moves');
        if (lossMovesBtn) lossMovesBtn.style.display = 'none';
        document.getElementById('modal-result').classList.remove('hidden');

        window.vkSDK.stopGameplay();
        window.vkSDK.submitLeaderboardScore(this.gameState.scoreTotal);
    }

    handleLevelLoss() {
        if (this.isNightSiegeMode) return;
        this.lastWonLevel = null;
        window.vkSDK.stopGameplay();
        document.getElementById('result-title').textContent = this.t('loss_title');
        document.getElementById('result-stars').textContent = '💔';
        document.getElementById('result-desc').textContent = this.t('loss_desc');
        document.getElementById('result-rewards').innerHTML = '';
        document.getElementById('btn-double-reward').style.display = 'none';
        const lossMovesBtn = document.getElementById('btn-loss-ad-moves');
        if (lossMovesBtn) lossMovesBtn.style.display = 'block';
        document.getElementById('modal-result').classList.remove('hidden');
    }

    handleWheelReward(prize) {
        if (prize.type === 'gold') {
            this.gameState.gold += prize.val;
        } else if (prize.type === 'wood') {
            this.gameState.wood += prize.val;
        } else if (prize.type === 'resin') {
            this.gameState.resin += prize.val;
        } else if (prize.type === 'energy') {
            this.gameState.energy = Math.min(this.gameState.maxEnergy, this.gameState.energy + prize.val);
        } else if (prize.type === 'hammer') {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            this.gameState.boosters.hammer = (this.gameState.boosters.hammer || 0) + prize.val;
            this.updateBoosterUI();
        } else if (prize.type === 'shuffle') {
            if (!this.gameState.boosters) this.gameState.boosters = { hammer: 2, shuffle: 2 };
            this.gameState.boosters.shuffle = (this.gameState.boosters.shuffle || 0) + prize.val;
            this.updateBoosterUI();
        }
        this.updateUIResources();
        this.saveProgress();
        window.showToast(this.t('wheel_reward_alert', { label: prize.label }));
    }

    openBuildingModal(building) {
        this.selectedBuildingForModal = building;
        document.getElementById('bldg-modal-title').textContent = building.name;
        
        const previewContainer = document.getElementById('bldg-modal-img-container');
        previewContainer.innerHTML = `<canvas id="bldg-preview-canvas" width="160" height="130" style="margin: 6px auto; display: block; border-radius: 12px; background: #2C1810; border: 1px solid #D4AF37;"></canvas>`;
        const prevCanvas = document.getElementById('bldg-preview-canvas');
        if (prevCanvas && window.SlavicArt) {
            const pctx = prevCanvas.getContext('2d');
            window.SlavicArt.drawBuilding(pctx, building.id, 80, 75, 120, 120, building.level, 0, 'autumn');
        }

        document.getElementById('bldg-modal-desc').textContent = `${building.desc} (${this.t('heroes_level')} ${building.level} / ${building.maxLevel})`;
        const costWoodEl = document.getElementById('bldg-cost-wood');
        const costGoldEl = document.getElementById('bldg-cost-gold');
        const upgradeBtn = document.getElementById('btn-confirm-upgrade');

        if (building.maxLevel && building.level >= building.maxLevel) {
            if (costWoodEl) costWoodEl.textContent = '—';
            if (costGoldEl) costGoldEl.textContent = '—';
            if (upgradeBtn) {
                upgradeBtn.textContent = this.t('bldg_max_level') || 'Максимальный уровень ✓';
                upgradeBtn.disabled = true;
                upgradeBtn.style.opacity = '0.6';
            }
        } else {
            if (costWoodEl) costWoodEl.textContent = building.costWood;
            if (costGoldEl) costGoldEl.textContent = building.costGold;
            if (upgradeBtn) {
                upgradeBtn.textContent = `🔨 ${this.t('bldg_upgrade_btn') || 'Улучшить'}`;
                upgradeBtn.disabled = false;
                upgradeBtn.style.opacity = '1.0';
            }
        }

        document.getElementById('modal-building').classList.remove('hidden');
    }

    renderLeaderboard() {
        const listEl = document.getElementById('lb-list');
        listEl.innerHTML = `
            <div class="lb-row my-row">
                <span>1</span>
                <span>${this.t('lb_you')}</span>
                <span>${this.gameState.level}</span>
                <span>${this.gameState.scoreTotal}</span>
            </div>
            <div class="lb-row">
                <span>2</span>
                <span>Yaroslav the Great</span>
                <span>${this.gameState.level + 3}</span>
                <span>${this.gameState.scoreTotal + 4500}</span>
            </div>
            <div class="lb-row">
                <span>3</span>
                <span>Princess Olga</span>
                <span>${this.gameState.level + 1}</span>
                <span>${this.gameState.scoreTotal + 2100}</span>
            </div>
            <div class="lb-row">
                <span>4</span>
                <span>Vakula</span>
                <span>${Math.max(1, this.gameState.level - 1)}</span>
                <span>${Math.max(0, this.gameState.scoreTotal - 500)}</span>
            </div>
        `;
    }

    saveProgress() {
        window.vkSDK.saveData(this.gameState);
    }
}

window.SlavicManorApp = SlavicManorApp;

const startApp = () => {
    if (!window.app && typeof document !== 'undefined' && document.getElementById('game-container')) {
        window.app = new SlavicManorApp();
        window.app.init();
    }
};

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startApp);
    } else {
        startApp();
    }
}