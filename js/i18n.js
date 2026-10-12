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
