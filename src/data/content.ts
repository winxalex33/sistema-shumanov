import { TrainingPillar, MethodCard, VideoDrill } from '../types';

export const CONTACT_INFO = {
  phone: '070 342 580',
  phoneFormatted: '+389 70 342 580',
  email: 'aleksandar.sumanov2@gmail.com',
  coachName: 'Александар Шуманов',
  coachNameLatin: 'Aleksandar Shumanov',
  city: 'Скопје, Македонија',
  primaryLocation: 'Кеј на Вардар / Спортски центар & Сала Скопје',
  outdoorBase: 'Street Workout Парк & Мост (Отворено борбено кондиционирање)',
  instagram: '@systema_shumanov',
  facebook: 'Combat Systema Shumanov'
};

export const CONTENT_MK = {
  brandTitle: 'Боева Система Шуманов',
  brandSubtitle: 'Combat Systema Shumanov',
  motto: 'Тренирај го телото. Разбери го умот. Запознај се себеси.',
  subMotto: 'Повеќе од борба. Методологија на движење, адаптација и самоспознавање.',
  leadBadge: 'Интегративен боречки систем',
  heroLead: 'Combat Systema Shumanov е интегративен систем на боречка обука и физички развој што ги поврзува природното движење, функционалната сила, мобилноста, ударната техника, живиот контакт, дишењето и менталната присебност.',
  heroTagline: 'Подготвен за предизвиците — слободен за животот.',
  
  ctaPrimary: 'Запознај се со Системата',
  ctaSecondary: 'Истражи ги методите на тренинг',
  ctaBook: 'Закажи бесплатен тренинг',

  stats: [
    { value: '100%', label: 'Природно Движење', desc: 'Без механичка вкочанетост' },
    { value: '3-во-1', label: 'Тело, Ум & Емоции', desc: 'Поврзана човечка целина' },
    { value: 'Под притисок', label: 'Присебност & Адаптација', desc: 'Смиреност во динамична ситуација' },
    { value: '1 на 1 / Група', label: 'Индивидуален Пристап', desc: 'Во сала и на отворено' }
  ],

  manifestoQuote: {
    lead: 'Не тренираме само техники.',
    highlight: 'Го тренираме човекот преку движењето.',
    body: 'Животот е за живеење — слободно, свесно и исправено. Со слободни раменици, крената глава и тело што може да се движи без непотребна вкочанетост.'
  },

  philosophyHeading: 'Филозофија и Принципи',
  philosophySubheading: 'Веруваме дека човекот е целина во која физичкото, менталното и емоционалното се нераскинливо поврзани.',
  
  methodsHeading: 'Методологија на Тренинг',
  methodsSubheading: 'Нашиот пристап не се заснова само на механичко повторување техники. Преку движење, контакт, отпор, игра, спаринг и реалистични тренажни ситуации, ги поврзуваме физичката подготвеност, перцепцијата, координацијата и способноста за одлучување.',

  showcaseHeading: 'Реални Тренинзи во Движење',
  showcaseSubheading: 'Преку специјално борбено кондиционирање, динамички задачи, партнерски вежби и работа со сопствена тежина.',

  faqHeading: 'Често Поставувани Прашања',
  contactHeading: 'Контактирајте нè и Закажете Термин',
  contactSubheading: 'Направете го првиот чекор кон целосна контрола на сопственото тело и ум.'
};

export const CONTENT_LATIN = {
  brandTitle: 'Combat Systema Shumanov',
  brandSubtitle: 'Боева Система Шуманов',
  motto: 'Train the body. Understand the mind. Know yourself.',
  subMotto: 'More than combat. Methodology of movement, adaptation, and self-knowledge.',
  leadBadge: 'Integrative Martial System',
  heroLead: 'Combat Systema Shumanov is an integrative system of martial training and physical development that combines natural biomechanics, functional strength, striking fluidity, live tactile contact, breath regulation, and acute mental presence.',
  heroTagline: 'Ready for challenges — free for life.',
  
  ctaPrimary: 'Discover the System',
  ctaSecondary: 'Explore Training Methods',
  ctaBook: 'Book First Free Session',

  stats: [
    { value: '100%', label: 'Natural Movement', desc: 'Zero artificial rigidity' },
    { value: '3-in-1', label: 'Body, Mind & Emotion', desc: 'Unified human system' },
    { value: 'Under Pressure', label: 'Composure & Adaptation', desc: 'Function in dynamic chaos' },
    { value: '1 on 1 / Groups', label: 'Individualized Guidance', desc: 'Indoor & outdoor conditioning' }
  ],

  manifestoQuote: {
    lead: 'We do not merely practice techniques.',
    highlight: 'We train the complete human being through movement.',
    body: 'Life is meant to be lived freely, consciously, and upright. With relaxed shoulders, head held high, and a body moving without excess tension.'
  },

  philosophyHeading: 'Philosophy & Tenets',
  philosophySubheading: 'We believe that man is a unified totality wherein physical, mental, and emotional faculties are inextricably linked.',

  methodsHeading: 'Training Methodology',
  methodsSubheading: 'Our approach is not rote mechanical drilling. Through movement, living contact, resistance, play, sparring, and realistic scenarios, we unify physical readiness, perception, coordination, and rapid decision-making.',

  showcaseHeading: 'Real Training in Action',
  showcaseSubheading: 'Through combat conditioning, dynamic tasks, partner drills, elastic band power development, and outdoor functional mastery.',

  faqHeading: 'Frequently Asked Questions',
  contactHeading: 'Contact & Training Booking',
  contactSubheading: 'Take the first decisive step toward complete mastery of your body and mind under pressure.'
};

export const TRAINING_PILLARS: TrainingPillar[] = [
  {
    id: 'unity',
    number: '01',
    title: 'Човекот како Целина',
    subtitle: 'Физичко, ментално и емоционално единство',
    highlightText: 'Веруваме дека човекот е целина.',
    description: 'Физичкото тело, менталниот фокус и емоционалната состојба не можат да се раздвојат. Тренингот е процес на откривање на сопствените навики, автоматски реакции, физички ограничувања и вистински можности.',
    keyBenefits: [
      'Увидување на сопствените телесни навики и блокади',
      'Ослободување од хронична тензија и спазам',
      'Свесна контрола над емоционалните импулси'
    ],
    icon: 'Brain'
  },
  {
    id: 'limits',
    number: '02',
    title: 'Партнер & Адаптација',
    subtitle: 'Контрола под непредвидливи околности',
    highlightText: 'Кога ситуацијата станува непредвидлива.',
    description: 'Кога се соочуваме со напор, ги препознаваме своите граници. Кога работиме со партнер, учиме да ги контролираме реакциите наместо да реагираме панично. Вежбаме присебност и способност за инстантна адаптација.',
    keyBenefits: [
      'Препознавање на сопствените граници без страв',
      'Смирена реакција на напад и физички контакт',
      'Ефикасно приспособување на променливи ситуации'
    ],
    icon: 'ShieldAlert'
  },
  {
    id: 'breath',
    number: '03',
    title: 'Дишење и Смиреност',
    subtitle: 'Регулирање на напорот и стресот',
    highlightText: 'Смиреноста не е пасивност.',
    description: 'Дишењето е клучниот регулатор на нервниот систем. Учиме да ја препознаеме непотребната напнатост, да го регулираме напорот и да ја зачуваме способноста за рационално одлучување кога заморот се зголемува.',
    keyBenefits: [
      'Непрекинато дишење во текот на експлозивни удари',
      'Управување со стресот наместо негово потиснување',
      'Зачувување на бистар ум во критични моменти'
    ],
    icon: 'Wind'
  },
  {
    id: 'freedom',
    number: '04',
    title: 'Внатрешна Сила & Мир',
    subtitle: 'Да живееме во мир со себе',
    highlightText: 'Нашата цел не е да докажуваме супериорност.',
    description: 'Нашата цел е да ја запознаеме сопствената сила, да ја контролираме и свесно да го развиваме својот потенцијал. Животот не е само борба — тој е и радост, поврзаност и исполнетост. Тренираме за да бидеме подготвени за борба кога е неопходно, но и слободни да уживаме во животот.',
    keyBenefits: [
      'Развој на суштинска самодоверба без агресија',
      'Слободни раменици, крената глава, исправен став',
      'Подготвен за предизвиците — слободен за животот'
    ],
    icon: 'Zap'
  }
];

export const METHOD_CARDS: MethodCard[] = [
  {
    id: 'combat-conditioning',
    title: 'Специјално Борбено Кондиционирање',
    category: 'Сила & Издржливост',
    tagline: 'Контролирани физички предизвици и динамички задачи',
    description: 'Работа со отпорни еластични ленти, шипки, вежби со сопствена тежина и експлозивни биомеханички шеми на отворено и во сала за изградба на жилава, еластична сила што не се заморува.',
    focusAreas: ['Динамички задачи со еластични ленти', 'Работа со сопствена телесна тежина', 'Зачувување на квалитетот на движење под замор'],
    imagePlaceholderTitle: 'Борбено Кондиционирање'
  },
  {
    id: 'partner-drills',
    title: 'Партнерски Вежби & Жив Контакт',
    category: 'Адаптација & Сензитивност',
    tagline: 'Нема сува теорија — само реална интеракција',
    description: 'Вежби за читање на тежината, векторите на сила, водење на напаѓачот и пренасочување на ударите. Учиме како да не се спротивставуваме на силата директно, туку да ја искористиме против противникот.',
    focusAreas: ['Пренасочување на сила без вкочанетост', 'Ослободување од фатови и клинч', 'Чувствителност на контакт во реално време'],
    imagePlaceholderTitle: 'Жив Контакт & Партнери'
  },
  {
    id: 'striking-evasion',
    title: 'Ударна Техника & Евазија',
    category: 'Борбена Ефикасност',
    tagline: 'Флуидни удари од секоја позиција со целосно тело',
    description: 'Ударната техника во Системата не зависи од затегнати мускули, туку од брановидно движење, слободни раменици и тежина на телото. Евазиите се минимални, елегантни и инстантно создаваат контра-можност.',
    focusAreas: ['Брановидни удари со опуштено тело', 'Евазија и маневрирање под притисок', 'Ноќни и надворешни спаринг симулации'],
    imagePlaceholderTitle: 'Ударна Динамика & Спаринг'
  },
  {
    id: 'breath-mobility',
    title: 'Биомеханика, Мобилност & Дишење',
    category: 'Регенерација & Здравје',
    tagline: 'Тело што се движи без непотребна напнатост',
    description: 'Реставрација на природните функции на ' +
      'рбетот, карлицата и зглобовите. Практикување дијафрагмално дишење за брзо смирување на пулсот, отстранување на млечната киселина и ментален ресет.',
    focusAreas: ['Мобилност на зглобовите и рбетниот столб', 'Регулација на напор преку здив', 'Акутна ментална присебност'],
    imagePlaceholderTitle: 'Биомеханика & Дишење'
  }
];

export const VIDEO_DRILLS: VideoDrill[] = [
  {
    id: 'drill-1',
    title: 'Експлозивна Ударна Моќ со Еластични Ленти',
    category: 'Кондиционирање',
    duration: '0:45',
    description: 'Динамички отпор при исфрлање директи и крошеа со зачувување на олабавено рамо и правилна биомеханика на карлицата.',
    tags: ['Ластици', 'Експлозивност', 'Кеј Вардар'],
    difficulty: 'Сите нивоа',
    videoSrc: '/videos/hero_loop.mp4'
  },
  {
    id: 'drill-2',
    title: 'Партнерски Спаринг & Евазија на Мост',
    category: 'Реален Спаринг',
    duration: '0:50',
    description: 'Борбени симулации при ноќни услови: маневрирање, контрола на дистанца, минимални отклонувања и прецизни контра-удари.',
    tags: ['Ноќен Спаринг', 'Рефлекси', 'Дистанца'],
    difficulty: 'Напредни',
    videoSrc: '/videos/hero_loop.mp4'
  },
  {
    id: 'drill-3',
    title: 'Специјално Борбено Кондиционирање на Песок',
    category: 'Издржливост',
    duration: '1:00',
    description: 'Синхронизирана групна работа на нестабилна подлога за зајакнување на тетивите, колената и стабилноста на трупот.',
    tags: ['Песок', 'Стабилност', 'Труп'],
    difficulty: 'Средни',
    videoSrc: '/videos/hero_loop.mp4'
  },
  {
    id: 'drill-4',
    title: 'Одбрана од Удари со Нога & Влегување во Клинч',
    category: 'Самоодбрана',
    duration: '0:35',
    description: 'Флуидно прифаќање на нападот со нога, пренасочување на тежиштето на противникот и соборување со минимален напор.',
    tags: ['Удар со нога', 'Пренасочување', 'Рамнотежа'],
    difficulty: 'Сите нивоа',
    videoSrc: '/videos/hero_loop.mp4'
  }
];

export const FAQS = [
  {
    q: 'Дали ми е потребно претходно боречко искуство за да започнам?',
    a: 'Не. Боева Система Шуманов е дизајнирана според природната човечка биомеханика. Секој почетник започнува со сопствено темпо, учејќи како правилно да го опушти телото, да дише и постепено да развива координација.'
  },
  {
    q: 'Што треба да носам на првиот тренинг?',
    a: 'Удобна спортска облека (маица, тренерки или шорцеви) и чисти патики за сала (или соодветни обувки за надворешниот тренинг на Кеј). Сите останати реквизити и специјална опрема се обезбедени.'
  },
  {
    q: 'Како да се пријавам за бесплатен пробен тренинг?',
    a: 'Јавете се директно на телефонот 070 342 580 (Александар Шуманов), испратете е-пошта на aleksandar.sumanov2@gmail.com или пополнете ја онлајн формата на веб страницата со вашите податоци.'
  },
  {
    q: 'По што се разликува Системата од класичните боречки спортови?',
    a: 'Ние не се фокусираме само на бодување или вештачки спортски правила со механичко повторување. Нашата цел е целосна психофизичка подготвеност: слободно тело без вкочанетост, способност за дишење под притисок, и присебност во непредвидливи животни ситуации.'
  }
];
