const CURRENT_YEAR = new Date().getFullYear();

export const MAIN_LINKS = [
    { name: 'Главная', href: '/' },
    { name: 'О компании', href: '/about' },
    { name: 'Лицензии', href: '/licenses' },
    { name: 'Программы обучения', href: '/price' },
    { name: 'Вопросы и ответы', href: '/faq' },
    { name: 'Контакты', href: '/contacts' }
];

export const SERVICE_LINKS = [
    { name: 'Охрана труда', href: '/training/labor-protection' },
    { name: 'Пожарная безопасность', href: '/training/fire-safety' },
    { name: 'Электробезопасность', href: '/training/electrical-safety' },
    { name: 'Промышленная безопасность', href: '/training/industrial-safety' },
    { name: 'Гражданская оборона и ЧС', href: '/training/civil-defense' },
    { name: 'Экологическая безопасность', href: '/training/ecological-safety' }
];

export const LEGAL_LINKS = [
    { name: 'Политика конфиденциальности', href: '/privacy-policy' },
    { name: 'Договор оферты', href: '/offer' },
    { name: 'Правила оплаты', href: '/payment-rules' },
    { name: 'Документы', href: '/documents' }
];

export { CURRENT_YEAR };

export interface LinkItem {
    name: string;
    href: string;
} 