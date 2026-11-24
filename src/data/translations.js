// All visible text, in three languages. Edit here only.
// To give a client a custom description, add an entry under projects.items:
//   items: { "pizzeria-plus": { description: "..." } }

export const DEFAULT_LANG = "en";

export const LANGUAGES = [
  { code: "al", label: "AL", htmlLang: "sq" },
  { code: "mk", label: "MK", htmlLang: "mk" },
  { code: "en", label: "EN", htmlLang: "en" },
];

export const translations = {
  /* ───────────────────────── ENGLISH ───────────────────────── */
  en: {
    meta: {
      title: "GRAFIQ — Digital solutions for modern businesses",
      description:
        "Grafiq builds websites, POS systems, QR code menus, digital marketing and branding for businesses that want to grow.",
    },
    a11y: {
      skip: "Skip to content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      language: "Language",
      loading: "Loading",
    },
    loader: { tagline: "Digital solutions" },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Digital solutions studio",
      lines: ["WE TURN IDEAS", "INTO DIGITAL", "EXPERIENCES."],
      sub: "We build digital solutions that help businesses grow, connect, and stand out.",
      intro:
        "Grafiq is a digital solutions company. We design and build websites, POS systems, QR menus and brand identities for businesses ready to modernize.",
      cta1: "Explore Our Work",
      cta2: "Let's Talk",
      scroll: "Scroll",
      chips: ["Websites", "POS", "QR Menus", "Marketing", "Branding"],
    },
    about: {
      label: "About Grafiq",
      statement:
        "Grafiq is a digital solutions company founded by two ambitious co-founders. We combine creativity, technology, and strategy to help businesses grow.",
      pillars: {
        philosophy: {
          title: "Philosophy",
          text: "Good digital work is simple to use, honest in its design, and built around the business behind it.",
        },
        approach: {
          title: "Approach",
          text: "We listen first, then design and build tailored solutions — from the first sketch to the final launch.",
        },
        mission: {
          title: "Mission",
          text: "To help businesses modernize their presence, improve their operations, and attract more customers.",
        },
      },
      foundersLabel: "The founders",
      foundersTitle: "Two founders, one studio.",
      role: "Co-founder",
      bio: "Short bio placeholder — edit this text in src/data/translations.js.",
      photo: "Photo placeholder",
    },
    services: {
      label: "Services",
      title: "What we build.",
      items: {
        website: {
          title: "Website Development",
          text: "Modern, responsive, professional websites that present your business at its best on every screen.",
        },
        pos: {
          title: "POS Systems",
          text: "Digital point-of-sale solutions for restaurants, cafes, and other businesses.",
        },
        qr: {
          title: "QR Code Menus",
          text: "Interactive digital menus your customers open instantly by scanning a QR code.",
        },
        marketing: {
          title: "Digital Marketing",
          text: "Helping businesses improve their online presence and reach more customers.",
        },
        branding: {
          title: "Branding & Digital Identity",
          text: "Professional digital identities that make your business recognizable and memorable.",
        },
      },
    },
    projects: {
      label: "Selected work",
      title: "Businesses we've worked with.",
      intro: "The businesses we have already worked with.",
      hint: "Keep scrolling",
      types: { restaurant: "Restaurant", bistro: "Bistro", cafe: "Café", baguetteria: "Baguetteria" },
      defaultDescription:
        "Project description placeholder — replace this text in src/data/translations.js with a short summary of the work we did for {name}.",
      servicesLabel: "Services provided",
      servicesEmpty: "To be added",
      visit: "Visit website",
      soon: "Website link coming soon",
      items: {},
    },
    why: {
      label: "Why Grafiq",
      title: "Why choose Grafiq.",
      items: {
        tailored: {
          title: "Tailored digital solutions",
          text: "No templates for the sake of templates. Every solution is shaped around your business and your customers.",
        },
        modern: {
          title: "Modern technology",
          text: "We build with current, reliable tools so your website and systems are fast, stable and ready to grow.",
        },
        creative: {
          title: "Creative thinking",
          text: "Design with a point of view — memorable, distinctive and never generic.",
        },
        business: {
          title: "Business-focused approach",
          text: "Every decision serves a goal: more customers, smoother operations, a stronger brand.",
        },
        longterm: {
          title: "Long-term collaboration",
          text: "We don't disappear after launch. We're a partner that grows with your business.",
        },
      },
    },
    contact: {
      label: "Contact",
      lines: ["LET'S BUILD", "SOMETHING", "GREAT."],
      text: "Tell us about your business and what you need. We'll get back to you.",
      fields: {
        name: "Name",
        business: "Business name",
        email: "Email",
        phone: "Phone number",
        service: "Service interested in",
        servicePlaceholder: "Select a service",
        other: "Other / not sure yet",
        message: "Message",
      },
      submit: "Send message",
      sending: "Sending…",
      errors: {
        required: "This field is required.",
        email: "Please enter a valid email address.",
      },
      status: {
        success: "Thank you! Your message has been sent.",
        notConfigured:
          "The form is ready but not connected to an email service yet. Please use the email or phone below.",
        error: "Something went wrong. Please try again or contact us directly.",
      },
      details: "Direct contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      followLabel: "Follow us",
    },
    footer: {
      description:
        "Grafiq is a digital solutions company building websites, POS systems, QR menus and brand identities for businesses.",
      navTitle: "Navigate",
      servicesTitle: "Services",
      socialTitle: "Social",
      rights: "All rights reserved.",
      top: "Back to top",
    },
  },

  /* ───────────────────────── ALBANIAN ───────────────────────── */
  al: {
    meta: {
      title: "GRAFIQ — Zgjidhje digjitale për biznese moderne",
      description:
        "Grafiq ndërton faqe interneti, sisteme POS, menu me QR kod, marketing digjital dhe branding për biznese që duan të rriten.",
    },
    a11y: {
      skip: "Kalo te përmbajtja",
      menuOpen: "Hap menynë",
      menuClose: "Mbyll menynë",
      language: "Gjuha",
      loading: "Duke u ngarkuar",
    },
    loader: { tagline: "Zgjidhje digjitale" },
    nav: {
      home: "Ballina",
      services: "Shërbimet",
      projects: "Projektet",
      about: "Rreth Nesh",
      contact: "Kontakti",
    },
    hero: {
      eyebrow: "Studio e zgjidhjeve digjitale",
      lines: ["I KTHEJMË IDETË", "NË PËRVOJA", "DIGJITALE."],
      sub: "Ndërtojmë zgjidhje digjitale që i ndihmojnë bizneset të rriten, të lidhen me klientët dhe të dallohen.",
      intro:
        "Grafiq është kompani e zgjidhjeve digjitale. Dizajnojmë dhe ndërtojmë faqe interneti, sisteme POS, menu me QR kod dhe identitete vizuale për biznese që duan të modernizohen.",
      cta1: "Shiko Punët Tona",
      cta2: "Të Bisedojmë",
      scroll: "Zbrit",
      chips: ["Faqe interneti", "POS", "Menu QR", "Marketing", "Branding"],
    },
    about: {
      label: "Rreth Grafiq",
      statement:
        "Grafiq është një kompani e zgjidhjeve digjitale, e themeluar nga dy bashkëthemelues ambiciozë. Kombinojmë kreativitetin, teknologjinë dhe strategjinë për t'i ndihmuar bizneset të rriten.",
      pillars: {
        philosophy: {
          title: "Filozofia",
          text: "Puna e mirë digjitale është e thjeshtë për t'u përdorur, e ndershme në dizajn dhe e ndërtuar rreth biznesit që qëndron pas saj.",
        },
        approach: {
          title: "Qasja",
          text: "Fillimisht dëgjojmë, pastaj dizajnojmë dhe ndërtojmë zgjidhje të përshtatura — nga skica e parë deri te lansimi përfundimtar.",
        },
        mission: {
          title: "Misioni",
          text: "Të ndihmojmë bizneset të modernizojnë praninë e tyre, të përmirësojnë operacionet dhe të tërheqin më shumë klientë.",
        },
      },
      foundersLabel: "Themeluesit",
      foundersTitle: "Dy themelues, një studio.",
      role: "Bashkëthemelues",
      bio: "Biografi e shkurtër provizore — ndryshojeni këtë tekst te src/data/translations.js.",
      photo: "Vend për fotografi",
    },
    services: {
      label: "Shërbimet",
      title: "Çfarë ndërtojmë.",
      items: {
        website: {
          title: "Zhvillim Faqesh Interneti",
          text: "Faqe interneti moderne, responsive dhe profesionale që e paraqesin biznesin tuaj më së miri në çdo ekran.",
        },
        pos: {
          title: "Sisteme POS",
          text: "Zgjidhje digjitale të pikës së shitjes për restorante, kafene dhe biznese të tjera.",
        },
        qr: {
          title: "Menu me QR Kod",
          text: "Menu digjitale interaktive që klientët i hapin menjëherë duke skanuar një QR kod.",
        },
        marketing: {
          title: "Marketing Digjital",
          text: "Ndihmojmë bizneset të përmirësojnë praninë online dhe të arrijnë më shumë klientë.",
        },
        branding: {
          title: "Branding dhe Identitet Digjital",
          text: "Identitete digjitale profesionale që e bëjnë biznesin tuaj të njohur dhe të paharrueshëm.",
        },
      },
    },
    projects: {
      label: "Punë të përzgjedhura",
      title: "Bizneset me të cilat kemi punuar.",
      intro: "Bizneset me të cilat kemi bashkëpunuar deri tani.",
      hint: "Vazhdo me rrëshqitje",
      types: { restaurant: "Restorant", bistro: "Bistro", cafe: "Kafe", baguetteria: "Baguetteria" },
      defaultDescription:
        "Përshkrim provizor i projektit — zëvendësojeni këtë tekst te src/data/translations.js me një përmbledhje të shkurtër të punës që bëmë për {name}.",
      servicesLabel: "Shërbimet e ofruara",
      servicesEmpty: "Do të shtohet",
      visit: "Vizito faqen",
      soon: "Lidhja e faqes do të shtohet së shpejti",
      items: {},
    },
    why: {
      label: "Pse Grafiq",
      title: "Pse të zgjidhni Grafiq.",
      items: {
        tailored: {
          title: "Zgjidhje digjitale të përshtatura",
          text: "Pa shabllone të gatshme vetëm sa për t'i pasur. Çdo zgjidhje formësohet sipas biznesit dhe klientëve tuaj.",
        },
        modern: {
          title: "Teknologji moderne",
          text: "Ndërtojmë me mjete të sotme dhe të besueshme, që faqja dhe sistemet tuaja të jenë të shpejta, të qëndrueshme dhe gati për rritje.",
        },
        creative: {
          title: "Mendim kreativ",
          text: "Dizajn me personalitet — i paharrueshëm, i veçantë dhe asnjëherë i zakonshëm.",
        },
        business: {
          title: "Qasje e fokusuar te biznesi",
          text: "Çdo vendim shërben një qëllimi: më shumë klientë, operacione më të rrjedhshme, markë më e fortë.",
        },
        longterm: {
          title: "Bashkëpunim afatgjatë",
          text: "Nuk zhdukemi pas lansimit. Jemi partner që rritet bashkë me biznesin tuaj.",
        },
      },
    },
    contact: {
      label: "Kontakti",
      lines: ["LE TË NDËRTOJMË", "DIÇKA TË", "SHKËLQYER."],
      text: "Na tregoni për biznesin tuaj dhe çfarë ju nevojitet. Do t'ju kthejmë përgjigje.",
      fields: {
        name: "Emri",
        business: "Emri i biznesit",
        email: "Email",
        phone: "Numri i telefonit",
        service: "Shërbimi që ju intereson",
        servicePlaceholder: "Zgjidhni një shërbim",
        other: "Tjetër / ende pa vendosur",
        message: "Mesazhi",
      },
      submit: "Dërgo mesazhin",
      sending: "Duke dërguar…",
      errors: {
        required: "Kjo fushë është e detyrueshme.",
        email: "Ju lutem shkruani një adresë emaili të vlefshme.",
      },
      status: {
        success: "Faleminderit! Mesazhi juaj u dërgua.",
        notConfigured:
          "Formulari është gati, por ende nuk është lidhur me një shërbim emaili. Ju lutem përdorni emailin ose telefonin më poshtë.",
        error: "Diçka shkoi keq. Ju lutem provoni përsëri ose na kontaktoni drejtpërdrejt.",
      },
      details: "Kontakt i drejtpërdrejtë",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      followLabel: "Na ndiqni",
    },
    footer: {
      description:
        "Grafiq është kompani e zgjidhjeve digjitale që ndërton faqe interneti, sisteme POS, menu me QR kod dhe identitete vizuale për biznese.",
      navTitle: "Navigimi",
      servicesTitle: "Shërbimet",
      socialTitle: "Rrjetet sociale",
      rights: "Të gjitha të drejtat e rezervuara.",
      top: "Kthehu lart",
    },
  },

  /* ───────────────────────── MACEDONIAN ───────────────────────── */
  mk: {
    meta: {
      title: "GRAFIQ — Дигитални решенија за модерни бизниси",
      description:
        "Grafiq изработува веб-страници, POS системи, QR менија, дигитален маркетинг и брендирање за бизниси што сакаат да растат.",
    },
    a11y: {
      skip: "Прескокни до содржината",
      menuOpen: "Отвори мени",
      menuClose: "Затвори мени",
      language: "Јазик",
      loading: "Се вчитува",
    },
    loader: { tagline: "Дигитални решенија" },
    nav: {
      home: "Почетна",
      services: "Услуги",
      projects: "Проекти",
      about: "За нас",
      contact: "Контакт",
    },
    hero: {
      eyebrow: "Студио за дигитални решенија",
      lines: ["ГИ ПРЕТВОРАМЕ", "ИДЕИТЕ ВО", "ДИГИТАЛНИ", "ИСКУСТВА."],
      sub: "Градиме дигитални решенија кои им помагаат на бизнисите да растат, да се поврзат со клиентите и да се издвојат.",
      intro:
        "Grafiq е компанија за дигитални решенија. Дизајнираме и градиме веб-страници, POS системи, QR менија и визуелни идентитети за бизниси подготвени да се модернизираат.",
      cta1: "Погледнете ја нашата работа",
      cta2: "Да разговараме",
      scroll: "Скролај",
      chips: ["Веб-страници", "POS", "QR менија", "Маркетинг", "Брендирање"],
    },
    about: {
      label: "За Grafiq",
      statement:
        "Grafiq е компанија за дигитални решенија, основана од двајца амбициозни ко-основачи. Ги комбинираме креативноста, технологијата и стратегијата за да им помогнеме на бизнисите да растат.",
      pillars: {
        philosophy: {
          title: "Филозофија",
          text: "Добрата дигитална работа е едноставна за користење, искрена во дизајнот и изградена околу бизнисот што стои зад неа.",
        },
        approach: {
          title: "Пристап",
          text: "Прво слушаме, потоа дизајнираме и градиме решенија по мерка — од првата скица до финалното лансирање.",
        },
        mission: {
          title: "Мисија",
          text: "Да им помогнеме на бизнисите да го модернизираат своето присуство, да ги подобрат операциите и да привлечат повеќе клиенти.",
        },
      },
      foundersLabel: "Основачите",
      foundersTitle: "Двајца основачи, едно студио.",
      role: "Ко-основач",
      bio: "Привремена кратка биографија — изменете го овој текст во src/data/translations.js.",
      photo: "Место за фотографија",
    },
    services: {
      label: "Услуги",
      title: "Што градиме.",
      items: {
        website: {
          title: "Изработка на веб-страници",
          text: "Модерни, професионални веб-страници, прилагодени на сите уреди, што го претставуваат вашиот бизнис најдобро на секој екран.",
        },
        pos: {
          title: "POS системи",
          text: "Дигитални решенија за продажно место за ресторани, кафулиња и други бизниси.",
        },
        qr: {
          title: "QR менија",
          text: "Интерактивни дигитални менија што клиентите ги отвораат веднаш со скенирање на QR код.",
        },
        marketing: {
          title: "Дигитален маркетинг",
          text: "Им помагаме на бизнисите да го подобрат своето онлајн присуство и да допрат до повеќе клиенти.",
        },
        branding: {
          title: "Брендирање и дигитален идентитет",
          text: "Професионални дигитални идентитети што го прават вашиот бизнис препознатлив и незаборавен.",
        },
      },
    },
    projects: {
      label: "Избрани проекти",
      title: "Бизниси со кои работевме.",
      intro: "Бизнисите со кои веќе соработувавме.",
      hint: "Продолжете со скролање",
      types: { restaurant: "Ресторан", bistro: "Бистро", cafe: "Кафе", baguetteria: "Багетерија" },
      defaultDescription:
        "Привремен опис на проектот — заменете го овој текст во src/data/translations.js со кратко резиме на работата што ја направивме за {name}.",
      servicesLabel: "Понудени услуги",
      servicesEmpty: "Ќе биде додадено",
      visit: "Посети ја страницата",
      soon: "Врската до страницата наскоро",
      items: {},
    },
    why: {
      label: "Зошто Grafiq",
      title: "Зошто да го изберете Grafiq.",
      items: {
        tailored: {
          title: "Дигитални решенија по мерка",
          text: "Без готови шаблони само заради шаблони. Секое решение се обликува според вашиот бизнис и вашите клиенти.",
        },
        modern: {
          title: "Модерна технологија",
          text: "Градиме со современи и сигурни алатки за вашата страница и системи да бидат брзи, стабилни и подготвени за раст.",
        },
        creative: {
          title: "Креативно размислување",
          text: "Дизајн со став — запаметлив, оригинален и никогаш генеричен.",
        },
        business: {
          title: "Пристап фокусиран на бизнисот",
          text: "Секоја одлука има цел: повеќе клиенти, поедноставно работење, посилен бренд.",
        },
        longterm: {
          title: "Долгорочна соработка",
          text: "Не исчезнуваме по лансирањето. Сме партнер што расте заедно со вашиот бизнис.",
        },
      },
    },
    contact: {
      label: "Контакт",
      lines: ["АЈДЕ ДА", "ИЗГРАДИМЕ НЕШТО", "ОДЛИЧНО."],
      text: "Раскажете ни за вашиот бизнис и што ви треба. Ќе ви се јавиме.",
      fields: {
        name: "Име",
        business: "Име на бизнисот",
        email: "Е-пошта",
        phone: "Телефонски број",
        service: "Услуга што ве интересира",
        servicePlaceholder: "Изберете услуга",
        other: "Друго / сè уште не знам",
        message: "Порака",
      },
      submit: "Испрати порака",
      sending: "Се испраќа…",
      errors: {
        required: "Ова поле е задолжително.",
        email: "Внесете валидна адреса на е-пошта.",
      },
      status: {
        success: "Ви благодариме! Вашата порака е испратена.",
        notConfigured:
          "Формуларот е подготвен, но сè уште не е поврзан со сервис за е-пошта. Користете ја е-поштата или телефонот подолу.",
        error: "Нешто тргна наопаку. Обидете се повторно или контактирајте нè директно.",
      },
      details: "Директен контакт",
      emailLabel: "Е-пошта",
      phoneLabel: "Телефон",
      followLabel: "Следете нè",
    },
    footer: {
      description:
        "Grafiq е компанија за дигитални решенија што гради веб-страници, POS системи, QR менија и визуелни идентитети за бизниси.",
      navTitle: "Навигација",
      servicesTitle: "Услуги",
      socialTitle: "Социјални мрежи",
      rights: "Сите права се задржани.",
      top: "Назад горе",
    },
  },
};