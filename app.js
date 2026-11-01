const copy = {
  ru: {
    title: "Владислав Ходарев",
    description: "Четыре сделанных проекта Владислава Ходарева: приложение для собак, панель оттока, магазин и мост чатов.",
    themeLabel: "Сменить тему",
    langLabel: "Язык",
    navLabel: "Проекты",
    navHow: "О подходе",
    skip: "К работам",
    kicker: "проектов",
    name: "Владислав Ходарев",
    lead: "Учусь в ДГТУ на системной аналитике. Люблю и хорошо беру на себя эту роль в реальных кейсах: разложить сложную систему по полочкам, перевести задачи бизнеса на язык архитектуры и вместе с командой довести разработку до результата. Также имею практический опыт в техническом SEO и GEO-оптимизации под Яндекс Нейро. Ниже — пять сделанных проектов.",
    locationStatus: "Ростов-на-Дону · Удалёнка / Гибрид · Полный день / Стажировка",
    downloadCv: "PDF Резюме",
    printCompactTitle: "Краткое резюме (2 стр.)",
    printCompactDesc: "Для HR: контакты, ДГТУ, навыки и выжимка 5 проектов",
    printFullTitle: "Полное портфолио",
    printFullDesc: "Все 5 кейсов целиком: архитектура, схемы, код и ТЗ",
    copiedToast: "Скопировано в буфер!",
    skillsTitle: "Ключевые компетенции",
    skillsAnalyticsTitle: "Системная аналитика",
    skillsAnalyticsTags: [
      "Сбор и формализация требований",
      "Спецификации REST API (OpenAPI / Swagger)",
      "Проектирование схем БД (ERD)",
      "Use Cases & User Stories",
      "Декомпозиция и оценка задач",
      "Анализ продуктовых метрик и оттока"
    ],
    skillsDevTitle: "Стек и разработка",
    skillsDevTags: [
      "Python (FastAPI, asyncio, Pydantic, SQLAlchemy)",
      "Flutter & Dart (Offline-first, Firebase)",
      "React, TypeScript, Vite, Tailwind",
      "SQL (PostgreSQL, SQLite), Docker Compose",
      "Linux, Git, сокетные протоколы"
    ],
    skillsSeoTitle: "SEO & GEO оптимизация",
    skillsSeoTags: [
      "Технический аудит сайтов и краулинг",
      "Generative Engine Optimization (GEO): выдача Яндекс Нейро и Алисы",
      "Локальное SEO и гармонизация NAP (Яндекс Карты, 2ГИС, Яндекс Бизнес)",
      "Микроразметка Schema.org (LegalService, Organization)",
      "Семантическое ядро и кластеризация в Топвизоре",
      "301-редиректы, canonical, sitemap.xml, Яндекс Вебмастер"
    ],
    howTitle: "Как я подхожу к работе",
    howSubtitle: "Просто и по делу: про команду, код и ответственность",
    howCards: [
      {
        num: "01",
        title: "Системная аналитика и команда",
        lead: "Вникнуть в требования бизнеса и разложить всё по полочкам",
        text: "В ДГТУ учусь на системной аналитике и отлично принимаю эту роль в реальной командной разработке. Мне комфортно разбираться в бизнес-логике, задавать точные вопросы, выявлять неочевидные сценарии и проектировать систему до того, как писать код. В команде ценю открытость, прозрачные задачи и продуктивное код-ревью."
      },
      {
        num: "02",
        title: "Сначала рабочий черновик",
        lead: "Меньше теории — больше практики",
        text: "Если задача новая или требования размыты, не закапываюсь на недели в споры. Быстро собираю черновой прототип (MVP), чтобы пощупать вживую, найти подводные камни и сразу показать ребятам: «Вот так работает, куда двигаемся дальше?»."
      },
      {
        num: "03",
        title: "Без оверинжиниринга",
        lead: "Код должен решать реальную задачу",
        text: "Не горожу сложные абстракции там, где хватит пяти понятных строк. Выбираю инструменты под задачу, а не ради моды: нужен легкий скрипт — пишу на Python, нужен надежный сервис — беру FastAPI. Код должен быть читаемым и простым в поддержке."
      },
      {
        num: "04",
        title: "Честно и без сюрпризов",
        lead: "Прямо о сроках и проблемах",
        text: "Если что-то пошло не так, отвалилась внешняя апишка или задача оказалась сложнее — скажу сразу, а не за пару часов до дедлайна. Оставляю после себя понятный код и README, чтобы коллегам не приходилось гадать, как это запустить."
      }
    ],
    footerTitle: "Всегда на связи",
    footerLead: "Буду рад пообщаться по работе, проектам или просто обсудить технологии:",
    canTitle: "Что из этого уже делал",
    can: [
      {
        badge: "Flutter · Firebase",
        title: "Собачники",
        desc: "Мобильное приложение для владельцев собак с мультипрофилем питомцев, расчетом суточной нормы калорий и рациона BARF, трекером прогулок и экстренной ветпомощью по картам.",
        highlights: "Офлайн-режим · Калькулятор BARF · OpenStreetMap · Локальные уведомления",
        url: "cases/dogs.html",
        linkLabel: "Подробный разбор кейса"
      },
      {
        badge: "FastAPI · React · Docker",
        title: "Risk Desk · Анализ рисков оттока",
        desc: "Аналитическая веб-панель для retention-маркетинга хостинга: составной скоринг риска оттока, настройка весов модели ползунками, оценка денежных потерь и прогноз непродлений на 30 дней.",
        highlights: "Скоринг 0-100 · Ползунки весов в реальном времени · Прогноз непродлений · Keycloak SSO",
        url: "cases/churn.html",
        linkLabel: "Подробный разбор кейса"
      },
      {
        badge: "WordPress · WooCommerce",
        title: "Интернет-магазин «Прованс»",
        desc: "Полная миграция каталога косметики с Tilda на автономный WordPress: перенос 1 888 товаров со свойствами и вариациями, 365 категорий, 90 SEO-редиректов и тема витрины.",
        highlights: "1888 товаров · 365 категорий · 90 301-редиректов · Фасетные фильтры",
        url: "cases/provans.html",
        linkLabel: "Подробный разбор кейса"
      },
      {
        badge: "Python · asyncio",
        title: "Мост Max ↔ Telegram",
        desc: "Асинхронный протокольный шлюз для двусторонней пересылки текстовых сообщений, фото и голосовых заметок между мессенджером Max и парными чатами Telegram с сохранением тредов.",
        highlights: "PyMax сокет-клиент · Изоляция пар чатов · Отключена телеметрия · SQLite сессия",
        url: "cases/bridge.html",
        linkLabel: "Подробный разбор кейса"
      },
      {
        badge: "SEO · GEO · Яндекс Нейро",
        title: "SEO & GEO: АНВ Гарант",
        desc: "Комплексный технический аудит и поисковая оптимизация агентства недвижимости: перенос контента из JS в первичный HTML, микроразметка Schema.org, устранение дублей www, кластеризация семантики в Топвизоре и подготовка страниц под прямое цитирование нейросетью (Яндекс Нейро, Алиса).",
        highlights: "10/10 пунктов ТЗ · Generative Engine Optimization · Топвизор · Яндекс Бизнес · Schema.org",
        url: "cases/anvgarant.html",
        linkLabel: "Подробный разбор кейса"
      }
    ],
    cases: [
      {
        id: "dogs",
        nav: "Собачники",
        title: "Собачники",
        kind: "gallery",
        lede: "Телефон для человека, у которого одна или несколько собак.",
        text: "В одном аккаунте живут питомцы, задачи на сегодня, питание, вес, медкарта и прогулки. Вход по почте, данные в Firebase. Фото прогулок остаются на телефоне, напоминания приходят локально. Тема светлая, тёмная или как в системе.",
        stack: "Flutter · Firebase · карты · уведомления на телефоне",
        facts: [
          ["Питомцы", "Несколько собак: порода, вес, пол, возраст"],
          ["Питание", "Калории, BARF, приёмы пищи и подсказка по породе"],
          ["Прогулка", "Таймер, точка на карте и фотоотчёт"],
          ["Рядом", "Ветклиники, аптеки и зоомагазины по OpenStreetMap"],
          ["Срочно", "Ближайшая круглосуточная клиника: звонок и маршрут"],
          ["Помощник", "Отвечает по карточке питомца, без сети"]
        ],
        shots: [
          { src: "img/dogs-home.png", alt: "Главный экран Собачников: задачи на день и карта мест рядом", cap: "Главная: задачи на сегодня и места рядом", frame: "phone" },
          { src: "img/dogs-food.png", alt: "Экран питания: суточная норма и баланс BARF", cap: "Питание: норма калорий и баланс BARF", frame: "phone" },
          { src: "img/dogs-pets.png", alt: "Список питомцев в тёмной теме", cap: "Питомцы. Тёмная тема", frame: "phone" },
          { src: "img/dogs-walk.png", alt: "Экран идущей прогулки с таймером и картой", cap: "Прогулка: таймер и точка на карте", frame: "phone" },
          { src: "img/dogs-map.png", alt: "Карта ветклиник, аптек и зоомагазинов в Москве", cap: "Полезное рядом: клиники, аптеки, зоомагазины", frame: "phone" },
          { src: "img/dogs-vet.png", alt: "Карточка ближайшей круглосуточной ветклиники", cap: "Скорая ветпомощь: звонок и маршрут", frame: "phone" },
          { src: "img/dogs-help.png", alt: "Помощник отвечает, сколько корма нужно собаке", cap: "Помощник смотрит вес, режим и число приёмов", frame: "phone" }
        ]
      },
      {
        id: "churn",
        nav: "Отток",
        title: "Анализатор рисков оттока",
        kind: "gallery",
        wide: true,
        lede: "Панель для тех, кто удерживает клиентов хостинга.",
        text: "Она отвечает на три вопроса: кому писать первым, почему человек может не продлить услугу и сколько денег в этом риске. Счёт идёт от срока, автопродления, цены и баланса. Это оценка, не обещание, что клиент уйдёт. Веса причин меняются в настройках, список уходит в CSV, на телефоне остаётся та же работа.",
        stack: "FastAPI · React · Docker · SQLite",
        facts: [
          ["Кому", "Рейтинг клиентов и фильтр по срочности"],
          ["Почему", "Вклад услуги, баланса и автопродления в балл"],
          ["Сколько", "Оценка потерь в евро, не гарантия убытка"],
          ["Дальше", "Прогноз продления, экспорт CSV, модель с ползунками"]
        ],
        shots: [
          { src: "img/churn-overview.png", alt: "Обзор риска: ожидаемые потери и прогноз продления", cap: "Обзор: потери, доля платежей под риском, прогноз", frame: "desk" },
          { src: "img/churn-clients.png", alt: "Список клиентов с фильтром срочности на 7 дней", cap: "Клиенты: поиск, срочность, сортировка по риску", frame: "desk" },
          { src: "img/churn-client.png", alt: "Карточка клиента с разбором балла риска", cap: "Карточка: из чего сложился балл и какие услуги болят", frame: "desk" },
          { src: "img/churn-forecast.png", alt: "График прогноза продления услуг", cap: "Прогноз: факт непродления и оценка на 30 дней", frame: "desk" },
          { src: "img/churn-settings.png", alt: "Настройки весов модели риска", cap: "Модель: веса причин двигаются ползунками", frame: "desk" },
          { src: "img/churn-mobile.png", alt: "Список клиентов на узком экране", cap: "Тот же список клиентов на узком экране", frame: "phone" }
        ]
      },
      {
        id: "provans",
        nav: "Прованс",
        title: "Прованс",
        kind: "gallery",
        wide: true,
        lede: "Магазин натуральной косметики, переехавший с Тильды на WordPress.",
        text: "Собрал выгрузку каталога, файл для WooCommerce, редиректы со старых адресов и тему витрины. На главной остались поиск, разделы, обещание доставки по России и полка новинок. Магазин открыт на хостинге, публичный домен на него не переключал.",
        url: "http://vladkhodar.temp.swtest.ru",
        urlLabel: "Открыть магазин",
        stack: "WordPress · WooCommerce · перенос каталога",
        facts: [
          ["Товары", "1888 позиций в выгрузке"],
          ["Категории", "365 разделов каталога"],
          ["Адреса", "90 редиректов со старых ссылок Тильды"],
          ["Витрина", "Тема магазина: поиск, меню, новинки"]
        ],
        shots: [
          { src: "img/provans-home.jpg", alt: "Главная магазина Прованс: меню, лавандовое поле и новинки", cap: "Главная: поиск, меню и новинки", frame: "desk" },
          { src: "img/provans-catalog.jpg", alt: "Каталог: фильтры по цене и бренду, 1847 товаров", cap: "Каталог: фильтры и 1847 товаров", frame: "desk" },
          { src: "img/provans-product.jpg", alt: "Карточка товара: фото, состав, цена и кнопка в корзину", cap: "Карточка товара: цена и кнопка в корзину", frame: "desk" }
        ]
      },
      {
        id: "bridge",
        nav: "Мост",
        title: "Мост Max и Telegram",
        kind: "bridge",
        lede: "Сообщение из чата Max приходит в парный чат Telegram и может вернуться обратно.",
        text: "Пары чатов задаются списком. В Telegram уходят название чата, имя и текст. Если мессенджер отдал ссылку на файл, уходят ещё фото и голос. Ответ из парного чата возвращается в тот же чат Max. Сессия сохраняется после первого входа. Телеметрия библиотеки выключена: она не шлёт id пользователя и чатов.",
        stack: "Python",
        facts: [
          ["Куда", "Только в парный чат, не во все сразу"],
          ["Что", "Текст, а по ссылке ещё фото и голос"],
          ["Обратно", "Ответ из Telegram идёт в тот же чат Max"],
          ["Сессия", "Код просят один раз, потом вход помнится"]
        ],
        bridge: ["Чат в Max", "Мост на Python", "Чат в Telegram"],
        bridgeBack: "Ответ идёт обратно тем же путём",
        note: "Отдельного экрана нет: мост работает в терминале."
      },
      {
        id: "anvgarant",
        nav: "SEO & GEO",
        title: "SEO & GEO: АНВ Гарант",
        kind: "geo",
        wide: true,
        lede: "Технический аудит, гео-привязка и подготовка сайта к поисковой выдаче и блоку «Нейро» Яндекса.",
        text: "Собрал техническое ТЗ из 10 пунктов для gk-anvgarant.ru: перенос контента из JS в первый HTML для индексации ботами, канонические адреса и 301-редиректы с www, 5 посадочных страниц услуг, устранение фактологических расхождений для доверия поисковиков. Настроил 100 запросов в Топвизоре по Новороссийску и Геленджику и описал требования GEO (Generative Engine Optimization), чтобы Яндекс Нейро и Алиса цитировали сайт как надежный первоисточник.",
        url: "https://gk-anvgarant.ru",
        urlLabel: "Сайт компании",
        stack: "SEO · GEO · Schema.org · Топвизор · Яндекс Вебмастер · Яндекс Бизнес",
        facts: [
          ["Аудит", "10 из 10 пунктов ТЗ успешно внедрены и проверены"],
          ["GEO", "Оптимизация под AI-ответы Нейро и голосовую Алису"],
          ["Семантика", "100 запросов в Топвизоре (Новороссийск, Геленджик)"],
          ["Тех. часть", "Первичный HTML без JS, Schema.org, 301-редиректы"]
        ],
        shots: [
          { src: "img/anvgarant-preview.svg", alt: "Технический аудит и GEO оптимизация gk-anvgarant.ru", cap: "Аудит 10/10, Schema.org и GEO-оптимизация под Яндекс Нейро", frame: "desk" }
        ],
        geoTitle: "Факторы ранжирования и AI-цитирования",
        geoStatus: "10 / 10 сдано",
        geoRows: [
          { badge: "SSR / HTML", text: "Услуги, цены и FAQ перенесены в первичный HTML (без JS)" },
          { badge: "301 Redirect", text: "Сквозная канонизация: www → без www с сохранением query-параметров" },
          { badge: "Schema.org", text: "Микроразметка LegalService с адресом, телефоном и вилкой цен" },
          { badge: "GEO / AI", text: "Первые 4–6 предложений дают прямой ответ для блока Нейро и Алисы" },
          { badge: "Локальный NAP", text: "Синхронизация адреса и реквизитов: сайт, Яндекс Карты, 2ГИС" }
        ],
        note: "Все 10 пунктов проверены через cURL и консоль Яндекс Вебмастера."
      }
    ]
  },
  en: {
    title: "Vladislav Khodarev",
    description: "Five finished projects by Vladislav Khodarev: a dog app, a churn desk, a shop move, a chat bridge, and technical SEO & GEO for Yandex Neuro.",
    themeLabel: "Toggle theme",
    langLabel: "Language",
    navLabel: "Projects",
    navHow: "Approach",
    skip: "Skip to the work",
    kicker: "projects",
    name: "Vladislav Khodarev",
    lead: "Studying Systems Analysis at DSTU (09.03.02). I naturally embrace this role in real projects: breaking down complex domains, turning business needs into clear architecture, and shipping solid code with the team. I also have hands-on experience in technical SEO and GEO optimization for Yandex Neuro and Maps. Below are five finished projects.",
    locationStatus: "Rostov-on-Don · Remote / Hybrid · Full-time / Internship",
    downloadCv: "PDF Resume",
    printCompactTitle: "Compact Resume (2 pages)",
    printCompactDesc: "For HR: contacts, DSTU education, skills & 5 project briefs",
    printFullTitle: "Full Portfolio",
    printFullDesc: "All 5 complete case studies: architecture, diagrams & code",
    copiedToast: "Copied to clipboard!",
    skillsTitle: "Core Competencies",
    skillsAnalyticsTitle: "Systems Analysis",
    skillsAnalyticsTags: [
      "Requirements gathering & specs",
      "REST API design (OpenAPI / Swagger)",
      "Database schema modeling (ERD)",
      "Use Cases & User Stories",
      "Task breakdown & estimation",
      "Product metrics & churn analysis"
    ],
    skillsDevTitle: "Tech Stack & Engineering",
    skillsDevTags: [
      "Python (FastAPI, asyncio, Pydantic, SQLAlchemy)",
      "Flutter & Dart (Offline-first, Firebase)",
      "React, TypeScript, Vite, Tailwind",
      "SQL (PostgreSQL, SQLite), Docker Compose",
      "Linux, Git, socket protocols"
    ],
    skillsSeoTitle: "SEO & GEO Optimization",
    skillsSeoTags: [
      "Technical SEO audit & web crawling",
      "Generative Engine Optimization (GEO): Yandex Neuro & Alice citations",
      "Local SEO & NAP consistency (Yandex Maps, 2GIS, Yandex Business)",
      "Schema.org structured data (LegalService, Organization)",
      "Semantic keyword clustering in Topvisor",
      "301 redirects, canonical tags, sitemap.xml, Yandex Webmaster"
    ],
    howTitle: "How I Work",
    howSubtitle: "Straightforward and honest: teamwork, code, and ownership",
    howCards: [
      {
        num: "01",
        title: "Systems Analysis & Teamwork",
        lead: "Understand business needs and structure the system early",
        text: "I study Systems Analysis at DSTU and genuinely thrive in this role on real engineering teams. I'm comfortable digging into business logic, asking the right questions, mapping edge cases, and designing architecture before coding. In a team, I value transparency, well-scoped tasks, and collaborative code reviews."
      },
      {
        num: "02",
        title: "Working prototype first",
        lead: "Less talk, more tangible progress",
        text: "When a problem is new or requirements are fuzzy, I don't stall in theoretical debates. I quickly put together a rough working prototype to test the waters, catch edge cases early, and ask the team: 'Here it is in action, where do we go next?'"
      },
      {
        num: "03",
        title: "No overengineering",
        lead: "Code exists to solve problems",
        text: "I don't pile up complex abstractions where a few clean lines will do. I pick tools for the problem, not for hype: if a task needs a straightforward Python script, I write a script; if it needs a solid service, I bring in FastAPI. Simple and maintainable wins."
      },
      {
        num: "04",
        title: "Honest and no surprises",
        lead: "Upfront about blockers and timing",
        text: "If an external API breaks or something proves trickier than expected, I say so right away — not two hours before deadline. I leave behind clear code and helpful READMEs so teammates never have to guess how to run things."
      }
    ],
    footerTitle: "Let's talk",
    footerLead: "Always happy to chat about work, interesting projects, or just talk tech:",
    canTitle: "What this work already shows",
    can: [
      {
        badge: "Flutter · Firebase",
        title: "Sobachniki",
        desc: "A mobile assistant for dog owners featuring multiple pet profiles, daily calorie & BARF diet balancing, walk tracking, and emergency vet routing via OpenStreetMap.",
        highlights: "Offline-first · BARF calculator · OpenStreetMap · Local notifications",
        url: "cases/dogs.html",
        linkLabel: "Detailed case breakdown"
      },
      {
        badge: "FastAPI · React · Docker",
        title: "Risk Desk · Churn Analyzer",
        desc: "An analytical retention desk for hosting providers: composite churn risk scoring, live weight adjustment sliders, financial loss estimation, and 30-day renewal forecasting.",
        highlights: "0-100 score · Live sliders · Renewal forecast · Keycloak SSO",
        url: "cases/churn.html",
        linkLabel: "Detailed case breakdown"
      },
      {
        badge: "WordPress · WooCommerce",
        title: "Provans Cosmetics Store",
        desc: "Full e-commerce migration from Tilda to standalone WordPress: 1,888 products with variations, 365 categories, 90 SEO redirects, and a custom storefront theme.",
        highlights: "1,888 products · 365 categories · 90 301 redirects · Faceted filters",
        url: "cases/provans.html",
        linkLabel: "Detailed case breakdown"
      },
      {
        badge: "Python · asyncio",
        title: "Max ↔ Telegram Bridge",
        desc: "Asynchronous protocol gateway for bidirectional forwarding of text, photos, and voice notes between Max messenger and Telegram chats with strict pair isolation.",
        highlights: "PyMax socket client · Isolated chat pairs · Telemetry disabled · SQLite session",
        url: "cases/bridge.html",
        linkLabel: "Detailed case breakdown"
      },
      {
        badge: "SEO · GEO · Yandex Neuro",
        title: "SEO & GEO: ANV Garant",
        desc: "Technical SEO audit and search engine optimization for a real estate agency: extracting content from JS templates into root HTML, Schema.org LegalService, resolving www mirrors, semantic clustering in Topvisor, and optimizing content for direct AI citations (Yandex Neuro & Alice).",
        highlights: "10/10 audit points passed · Generative Engine Optimization · Topvisor · Yandex Business · Schema.org",
        url: "cases/anvgarant.html",
        linkLabel: "Detailed case breakdown"
      }
    ],
    cases: [
      {
        id: "dogs",
        nav: "Sobachniki",
        title: "Sobachniki",
        kind: "gallery",
        lede: "A phone app for a person with one dog or several.",
        text: "One account holds the pets, today's tasks, feeding, weight, a medical card, and walks. Email sign-in, data in Firebase. Walk photos stay on the phone. Reminders are local. The theme is light, dark, or the same as the system.",
        stack: "Flutter · Firebase · maps · phone reminders",
        facts: [
          ["Pets", "Several dogs: breed, weight, sex, age"],
          ["Feeding", "Calories, BARF, meals, and a breed note"],
          ["Walk", "A timer, a point on the map, and a photo report"],
          ["Nearby", "Clinics, pharmacies, and pet shops on OpenStreetMap"],
          ["Urgent", "The nearest 24-hour clinic: call and route"],
          ["Helper", "Answers from the pet's card, with no network"]
        ],
        shots: [
          { src: "img/dogs-home.png", alt: "Sobachniki home: today's tasks and a map of nearby places", cap: "Home: today's tasks and places nearby", frame: "phone" },
          { src: "img/dogs-food.png", alt: "Feeding screen: daily calories and BARF balance", cap: "Feeding: calorie target and BARF balance", frame: "phone" },
          { src: "img/dogs-pets.png", alt: "Pet list in the dark theme", cap: "Pets. Dark theme", frame: "phone" },
          { src: "img/dogs-walk.png", alt: "An active walk with a timer and a map", cap: "Walk: timer and a point on the map", frame: "phone" },
          { src: "img/dogs-map.png", alt: "Map of clinics, pharmacies, and pet shops in Moscow", cap: "Nearby: clinics, pharmacies, pet shops", frame: "phone" },
          { src: "img/dogs-vet.png", alt: "Card for the nearest 24-hour vet clinic", cap: "Emergency vet: call and route", frame: "phone" },
          { src: "img/dogs-help.png", alt: "Helper answering how much food a dog needs", cap: "The helper reads weight, diet, and meals per day", frame: "phone" }
        ]
      },
      {
        id: "churn",
        nav: "Churn",
        title: "Churn risk desk",
        kind: "gallery",
        wide: true,
        lede: "A desk for people who keep hosting customers.",
        text: "It answers three questions: who to contact first, why they might not renew, and how much money sits in that risk. The score uses the due date, auto-renewal, price, and balance. It is an estimate, not a promise that the customer will leave. The weights move in settings, the list exports to CSV, and the same work fits a phone.",
        stack: "FastAPI · React · Docker · SQLite",
        facts: [
          ["Who", "A customer ranking and an urgency filter"],
          ["Why", "How the service, balance, and auto-renewal build the score"],
          ["How much", "Estimated loss in euros, not a guaranteed loss"],
          ["Next", "A renewal forecast, CSV export, and sliders for the model"]
        ],
        shots: [
          { src: "img/churn-overview.png", alt: "Risk overview: expected loss and a renewal forecast", cap: "Overview: loss, payments at risk, forecast", frame: "desk" },
          { src: "img/churn-clients.png", alt: "Customer list filtered to the next 7 days", cap: "Customers: search, urgency, sort by risk", frame: "desk" },
          { src: "img/churn-client.png", alt: "Customer card breaking down the risk score", cap: "Card: what built the score, and which services hurt", frame: "desk" },
          { src: "img/churn-forecast.png", alt: "Chart of the renewal forecast", cap: "Forecast: missed renewals and a 30-day estimate", frame: "desk" },
          { src: "img/churn-settings.png", alt: "Risk model weight settings", cap: "Model: the reason weights are sliders", frame: "desk" },
          { src: "img/churn-mobile.png", alt: "Customer list on a narrow screen", cap: "The same customer list on a narrow screen", frame: "phone" }
        ]
      },
      {
        id: "provans",
        nav: "Provans",
        title: "Provans",
        kind: "gallery",
        wide: true,
        lede: "A natural-cosmetics shop moved off Tilda onto WordPress.",
        text: "The move includes the catalog export, a WooCommerce import file, redirects from the old URLs, and the storefront theme. The home page keeps search, sections, delivery across Russia, and a shelf of new products. The shop is open on the hosting address. The public domain was not switched over.",
        url: "http://vladkhodar.temp.swtest.ru",
        urlLabel: "Open the shop",
        stack: "WordPress · WooCommerce · catalog move",
        facts: [
          ["Products", "1,888 rows in the export"],
          ["Categories", "365 catalog sections"],
          ["URLs", "90 redirects from the old Tilda links"],
          ["Storefront", "Shop theme: search, menu, new arrivals"]
        ],
        shots: [
          { src: "img/provans-home.jpg", alt: "Provans home: menu, lavender field, and new products", cap: "Home: search, menu, and new arrivals", frame: "desk" },
          { src: "img/provans-catalog.jpg", alt: "Catalog with price and brand filters, 1,847 products", cap: "Catalog: filters and 1,847 products", frame: "desk" },
          { src: "img/provans-product.jpg", alt: "Product page: photo, details, price, and add to cart", cap: "Product page: price and add to cart", frame: "desk" }
        ]
      },
      {
        id: "bridge",
        nav: "Bridge",
        title: "Max and Telegram bridge",
        kind: "bridge",
        lede: "A message from a Max chat lands in the paired Telegram chat, and can come back.",
        text: "Chat pairs come from a list. Telegram receives the chat name, the sender, and the text. Photos and voice go too, when the messenger returns a file link. A reply from the paired chat returns to the same Max chat. The session stays after the first sign-in. The library's telemetry is off, so it does not send the user id or the chat ids.",
        stack: "Python",
        facts: [
          ["Where", "Only the paired chat, not every chat"],
          ["What", "Text, plus a photo or voice when there is a file link"],
          ["Back", "A Telegram reply returns to the same Max chat"],
          ["Session", "The code is asked once, then the sign-in is remembered"]
        ],
        bridge: ["Max chat", "Python bridge", "Telegram chat"],
        bridgeBack: "The reply comes back the same way",
        note: "There is no screen of its own. The bridge runs in a terminal."
      },
      {
        id: "anvgarant",
        nav: "SEO & GEO",
        title: "SEO & GEO: ANV Garant",
        kind: "geo",
        wide: true,
        lede: "Technical audit, geo-targeting, and site optimization for search rankings and Yandex Neuro AI Overviews.",
        text: "Delivered a 10-point technical spec for gk-anvgarant.ru: moving content from client-side JS into root HTML for crawler indexing, 301 www canonicalization, 5 dedicated service landing pages, and eliminating factual mismatches for search trust. Configured 100 geo-targeted queries in Topvisor across Novorossiysk & Gelendzhik, and defined GEO (Generative Engine Optimization) rules to make Yandex Neuro and Alice cite the site as an authoritative source.",
        url: "https://gk-anvgarant.ru",
        urlLabel: "Company website",
        stack: "SEO · GEO · Schema.org · Topvisor · Yandex Webmaster · Yandex Business",
        facts: [
          ["Audit", "10 out of 10 spec items successfully shipped & verified"],
          ["GEO", "Optimized for Yandex Neuro AI Overviews & Alice voice"],
          ["Semantics", "100 queries in Topvisor (Novorossiysk & Gelendzhik)"],
          ["Technical", "No-JS root HTML, Schema.org, 301 redirects"]
        ],
        shots: [
          { src: "img/anvgarant-preview.svg", alt: "SEO and GEO technical audit for gk-anvgarant.ru", cap: "10/10 audit, Schema.org, and GEO optimization for Yandex Neuro", frame: "desk" }
        ],
        geoTitle: "Ranking & AI-Citation Factors",
        geoStatus: "10 / 10 passed",
        geoRows: [
          { badge: "SSR / HTML", text: "Services, prices, and FAQ extracted into root HTML without JS" },
          { badge: "301 Redirect", text: "Full canonicalization: www → non-www preserving query params" },
          { badge: "Schema.org", text: "LegalService structured data with address, phone, and price ranges" },
          { badge: "GEO / AI", text: "Initial 4–6 sentences provide direct answers for Neuro and Alice" },
          { badge: "Local NAP", text: "Unified address and business details: website, Yandex Maps, 2GIS" }
        ],
        note: "All 10 checks verified via cURL and Yandex Webmaster console."
      }
    ]
  }
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function sameShape(a, b, path) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) throw new Error("i18n " + path);
    a.forEach((item, i) => sameShape(item, b[i], path + "." + i));
    return;
  }
  if (a && typeof a === "object") {
    const ak = Object.keys(a).sort().join();
    const bk = Object.keys(b).sort().join();
    if (ak !== bk) throw new Error("i18n " + path + " " + ak + " vs " + bk);
    Object.keys(a).forEach((key) => sameShape(a[key], b[key], path + "." + key));
  }
}

function factsHtml(facts) {
  return "<dl class='facts'>" + facts.map((row) => {
    const isStat = /^\d/.test(String(row[1]));
    return "<div><dt>" + esc(row[0]) + "</dt><dd" + (isStat ? " class='stat'" : "") + ">" + esc(row[1]) + "</dd></div>";
  }).join("") + "</dl>";
}

function galleryHtml(item) {
  const first = item.shots[0];
  const thumbs = item.shots.length < 2 ? "" : "<div class='thumbs'>" + item.shots.map((shot, index) =>
    "<button type='button' class='thumb' aria-label='" + esc(shot.cap) + "' aria-pressed='" + (index === 0 ? "true" : "false") +
    "' data-src='" + esc(shot.src) + "' data-alt='" + esc(shot.alt) + "' data-cap='" + esc(shot.cap) +
    "' data-frame='" + esc(shot.frame) + "'><img src='" + esc(shot.src) + "' alt='' loading='lazy'></button>"
  ).join("") + "</div>";
  return "<div class='gallery'><div class='stage " + esc(first.frame) + "' tabindex='0'><img src='" +
    esc(first.src) + "' alt='" + esc(first.alt) + "'></div><p class='stage-cap'>" + esc(first.cap) +
    "</p>" + thumbs + "</div>";
}

function visualHtml(item) {
  if (item.kind === "gallery") return galleryHtml(item);
  if (item.kind === "bridge") {
    const bits = item.bridge.map((label) => "<p>" + esc(label) + "</p>").join("<span aria-hidden='true'>→</span>");
    return "<div class='bridge'>" + bits + "<p class='bridge-back'>" + esc(item.bridgeBack) + "</p></div><p class='note'>" + esc(item.note) + "</p>";
  }
  if (item.kind === "geo") {
    const rows = item.geoRows.map((r) =>
      "<div class='geo-row'><span class='geo-badge'>" + esc(r.badge) + "</span><span class='geo-text'>" + esc(r.text) + "</span></div>"
    ).join("");
    return "<div class='geo-box'><div style='display:flex; justify-content:space-between; align-items:center;'><strong style='font-family:var(--display); font-size:15px;'>" + esc(item.geoTitle) + "</strong><span style='font-size:13px; font-weight:700; color:var(--accent);'>" + esc(item.geoStatus) + "</span></div>" + rows + "</div><p class='note'>" + esc(item.note) + "</p>";
  }
  const imgs = item.sprites.map((shot) => "<img src='" + esc(shot.src) + "' alt='" + esc(shot.alt) + "' loading='lazy'>").join("");
  return "<div class='sprites'>" + imgs + "</div><p class='note'>" + esc(item.note) + "</p>";
}

function render(lang) {
  sameShape(copy.ru, copy.en, "root");
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector(".lang").setAttribute("aria-label", t.langLabel);
  document.getElementById("nav").setAttribute("aria-label", t.navLabel);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t[node.dataset.i18n];
  });
  document.querySelector(".kicker").textContent = t.cases.length + "\u00a0" + t.kicker;
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.setLang === lang ? "true" : "false");
  });
  document.getElementById("nav").innerHTML = t.cases.map((item) =>
    "<a href='#" + esc(item.id) + "'>" + esc(item.nav) + "</a>"
  ).join("") + "<a href='#how'>" + esc(t.navHow) + "</a>";
  document.getElementById("board").innerHTML = t.cases.map((item) => {
    const shot = item.shots ? item.shots[0] : (item.sprites ? item.sprites[0] : null);
    const pic = shot
      ? "<img src='" + esc(shot.src) + "' alt='' loading='lazy'>"
      : "<span class='board-fallback'>Max → Telegram</span>";
    return "<a class='board-card' href='#" + esc(item.id) + "'><span class='board-pic'>" + pic +
      "</span><span class='board-title'>" + esc(item.nav) + "</span><span class='board-lede'>" +
      esc(item.lede) + "</span></a>";
  }).join("");
  document.getElementById("cases").innerHTML = t.cases.map((item) => {
    const wide = item.wide ? " wide" : "";
    const mode = item.kind === "gallery" ? " gallery" : " plain";
    const detailBtn = "<a class='repo' href='cases/" + esc(item.id) + ".html'>" + (lang === "ru" ? "Подробный разбор кейса →" : "Full case breakdown →") + "</a>";
    const liveBtn = item.url ? "<a class='live' href='" + esc(item.url) + "' target='_blank' rel='noopener noreferrer'>" + esc(item.urlLabel) + "</a>" : "";
    return "<article class='chapter" + mode + wide + "' id='" + esc(item.id) + "'><div class='layout'><div class='copy'><h2>" +
      esc(item.title) + "</h2><p class='lede'>" + esc(item.lede) + "</p><p>" + esc(item.text) +
      "</p><p class='stack'>" + esc(item.stack) + "</p>" + factsHtml(item.facts) +
      "<div style='display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin-top:18px;'>" +
      liveBtn + detailBtn +
      "</div>" +
      "</div>" +
      visualHtml(item) + "</div></article>";
  }).join("");
  document.getElementById("can-list").innerHTML = t.can.map((item) =>
    "<li class='can-card'>" +
      "<div class='can-top'><span class='can-badge'>" + esc(item.badge) + "</span></div>" +
      "<h3 class='can-title'>" + esc(item.title) + "</h3>" +
      "<p class='can-desc'>" + esc(item.desc) + "</p>" +
      "<div class='can-meta'>" + esc(item.highlights) + "</div>" +
      "<a class='can-link' href='" + esc(item.url) + "'>" + esc(item.linkLabel) + " →</a>" +
    "</li>"
  ).join("");
  const howEl = document.getElementById("how-grid");
  if (howEl && t.howCards) {
    howEl.innerHTML = t.howCards.map((card) =>
      "<div class='how-card'>" +
        "<div class='how-num'>" + esc(card.num) + "</div>" +
        "<h3 class='how-card-title'>" + esc(card.title) + "</h3>" +
        "<p class='how-card-lead'>" + esc(card.lead) + "</p>" +
        "<p class='how-card-text'>" + esc(card.text) + "</p>" +
      "</div>"
    ).join("");
  }
  const matrixEl = document.getElementById("skills-matrix");
  if (matrixEl) {
    const iconAnalytics = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><line x1='18' y1='20' x2='18' y2='10'></line><line x1='12' y1='20' x2='12' y2='4'></line><line x1='6' y1='20' x2='6' y2='14'></line></svg>";
    const iconDev = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg>";
    const iconSeo = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='11' cy='11' r='8'></circle><line x1='21' y1='21' x2='16.65' y2='16.65'></line></svg>";
    matrixEl.innerHTML =
      "<div class='matrix-card'>" +
        "<div class='matrix-header'>" +
          "<span class='matrix-icon'>" + iconAnalytics + "</span>" +
          "<h3>" + esc(t.skillsAnalyticsTitle) + "</h3>" +
        "</div>" +
        "<div class='matrix-tags'>" +
          t.skillsAnalyticsTags.map((tag) => "<span class='matrix-tag'>" + esc(tag) + "</span>").join("") +
        "</div>" +
      "</div>" +
      "<div class='matrix-card'>" +
        "<div class='matrix-header'>" +
          "<span class='matrix-icon'>" + iconDev + "</span>" +
          "<h3>" + esc(t.skillsDevTitle) + "</h3>" +
        "</div>" +
        "<div class='matrix-tags'>" +
          t.skillsDevTags.map((tag) => "<span class='matrix-tag'>" + esc(tag) + "</span>").join("") +
        "</div>" +
      "</div>" +
      "<div class='matrix-card'>" +
        "<div class='matrix-header'>" +
          "<span class='matrix-icon'>" + iconSeo + "</span>" +
          "<h3>" + esc(t.skillsSeoTitle) + "</h3>" +
        "</div>" +
        "<div class='matrix-tags'>" +
          t.skillsSeoTags.map((tag) => "<span class='matrix-tag'>" + esc(tag) + "</span>").join("") +
        "</div>" +
      "</div>";
  }
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    const isDark = (document.documentElement.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    themeBtn.setAttribute("aria-label", t.themeLabel);
    themeBtn.setAttribute("title", isDark ? (lang === "ru" ? "Светлая тема" : "Light theme") : (lang === "ru" ? "Тёмная тема" : "Dark theme"));
  }
  localStorage.setItem("portfolio-lang", lang);
  watchNav();
}

let sectionWatch;

function clearNavActive() {
  document.querySelectorAll(".nav a").forEach((link) => link.removeAttribute("aria-current"));
}

function watchNav() {
  if (sectionWatch) sectionWatch.disconnect();
  const links = [...document.querySelectorAll(".nav a")];
  if (window.scrollY < 200) {
    clearNavActive();
  }
  sectionWatch = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.id === "top") {
        clearNavActive();
        return;
      }
      links.forEach((link) => {
        if (link.getAttribute("href") === "#" + entry.target.id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -55% 0px" });
  const hero = document.getElementById("top");
  if (hero) sectionWatch.observe(hero);
  document.querySelectorAll(".chapter").forEach((node) => sectionWatch.observe(node));
  const howSection = document.getElementById("how");
  if (howSection) sectionWatch.observe(howSection);
}

window.addEventListener("scroll", () => {
  if (window.scrollY < 150) {
    clearNavActive();
  }
}, { passive: true });

const brandLink = document.querySelector(".brand");
if (brandLink) {
  brandLink.addEventListener("click", () => {
    clearNavActive();
  });
}

function getEffectiveTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("portfolio-theme", theme);
  const lang = document.documentElement.lang || "ru";
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    const isDark = theme === "dark";
    btn.setAttribute("title", isDark ? (lang === "ru" ? "Светлая тема" : "Light theme") : (lang === "ru" ? "Тёмная тема" : "Dark theme"));
  }
}

const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || getEffectiveTheme();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("portfolio-theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

document.getElementById("cases").addEventListener("click", (event) => {
  const button = event.target.closest(".thumb");
  if (!button) return;
  const frame = button.closest(".layout");
  const stage = frame.querySelector(".stage");
  const image = stage.querySelector("img");
  image.src = button.dataset.src;
  image.alt = button.dataset.alt;
  frame.querySelector(".stage-cap").textContent = button.dataset.cap;
  stage.classList.remove("phone", "desk");
  stage.classList.add(button.dataset.frame);
  frame.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.setAttribute("aria-pressed", thumb === button ? "true" : "false");
  });
});

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".board, .chapter, .can, .how, .footer").forEach((el) => {
    el.classList.add("appear");
    obs.observe(el);
  });
}

function initClipboard() {
  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const text = el.getAttribute("data-copy");
      if (!text) return;
      const lang = document.documentElement.lang || "ru";
      const msg = lang === "ru" ? "Скопировано в буфер!" : "Copied to clipboard!";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast(msg)).catch(() => copyFallback(text, msg));
      } else {
        copyFallback(text, msg);
      }
    });
  });
}

function copyFallback(text, msg) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast(msg);
}

let toastTimer;
function showToast(msg) {
  let toast = document.getElementById("copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "copy-toast";
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

let savedPrintHash = "";
let savedPrintTitle = "";
let currentPrintMode = (typeof window !== "undefined" && window.location && new URLSearchParams(window.location.search).get("print") === "full") ? "full" : "compact";

function prepareForPrint(mode) {
  currentPrintMode = mode || currentPrintMode || "compact";
  document.body.classList.remove("print-mode-compact", "print-mode-full");
  document.body.classList.add("print-mode-" + currentPrintMode);

  document.querySelectorAll(".appear").forEach((el) => {
    el.classList.add("visible");
  });

  savedPrintHash = window.location.hash;
  savedPrintTitle = document.title;
  if (savedPrintHash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  const lang = document.documentElement.lang || "ru";
  if (currentPrintMode === "compact") {
    document.title = (lang === "en")
      ? "Vladislav Khodarev — Systems Analyst Resume"
      : "Владислав Ходарев — Резюме (Системный аналитик)";
  } else {
    document.title = (lang === "en")
      ? "Vladislav Khodarev — Systems Analyst Portfolio"
      : "Владислав Ходарев — Портфолио (Системный аналитик)";
  }
}

function restoreAfterPrint() {
  if (savedPrintHash) {
    history.replaceState(null, "", window.location.pathname + window.location.search + savedPrintHash);
  }
  if (savedPrintTitle) {
    document.title = savedPrintTitle;
  }
}

window.addEventListener("beforeprint", () => prepareForPrint(currentPrintMode));
window.addEventListener("afterprint", restoreAfterPrint);

const printBtn = document.getElementById("print-btn");
const printDropdown = document.getElementById("print-dropdown");
const printOptCompact = document.getElementById("print-opt-compact");
const printOptFull = document.getElementById("print-opt-full");

function closePrintDropdown() {
  if (printDropdown) {
    printDropdown.classList.remove("show");
  }
  if (printBtn) {
    printBtn.setAttribute("aria-expanded", "false");
  }
}

if (printBtn && printDropdown) {
  printBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = printDropdown.classList.toggle("show");
    printBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#print-menu-wrap")) {
      closePrintDropdown();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePrintDropdown();
    }
  });
}

if (printOptCompact) {
  printOptCompact.addEventListener("click", () => {
    prepareForPrint("compact");
    closePrintDropdown();
    window.print();
  });
}

if (printOptFull) {
  printOptFull.addEventListener("click", () => {
    prepareForPrint("full");
    closePrintDropdown();
    window.print();
  });
}

const saved = localStorage.getItem("portfolio-lang");
render(saved === "en" ? "en" : "ru");
initReveal();
initClipboard();

document.querySelectorAll("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.setLang));
});
