const CURRENT_YEAR = new Date().getFullYear();

export const MAIN_LINKS = [
  { name: 'Главная', href: '/' },
  { name: 'О компании', href: '/about' },
  { name: 'Лицензии', href: '/licenses' },
  { name: 'Программы обучения', href: '/price' },
  { name: 'Вопросы и ответы', href: '/faq' },
  { name: 'Контакты', href: '/contacts' },
];
export const MENU_LINKS = [
  { name: 'Сведения об образовательной организации', href: '/organization/main-info' },
  { name: 'Услуги', href: '/#services' },
  { name: 'Прайс', href: '/main/price' },
  { name: 'Вопрос-ответ', href: '/main/faq' },
  { name: 'Отзывы', href: '/main/reviews' },
];

export const SERVICE_LINKS = [
  { name: 'Охрана труда', href: '/training/labor-protection' },
  { name: 'Пожарная безопасность', href: '/training/fire-safety' },
  { name: 'Электробезопасность', href: '/training/electrical-safety' },
  { name: 'Промышленная безопасность', href: '/training/industrial-safety' },
  { name: 'Гражданская оборона и ЧС', href: '/training/civil-defense' },
  { name: 'Экологическая безопасность', href: '/training/ecological-safety' },
];

export const LEGAL_LINKS = [
  { name: 'Политика конфиденциальности', href: '/privacy-policy' },
  { name: 'Договор оферты', href: '/offer' },
  { name: 'Правила оплаты', href: '/payment-rules' },
  { name: 'Документы', href: '/documents' },
];
export const EDU_LINKS = [{ name: 'Дистанционное обучение', href: 'https://sdo.от38.рус/' }];

export const CONTACT_LINKS = [
  { name: 'Иркутск, ул. Сергеева 3/1, офис. 325', href: 'https://yandex.ru/maps/-/CHr~qF9J' },
  { name: '+7 (3952) 43-43-12', href: 'tel:+73952434312' },
  { name: '+7 (914) 91-48-185', href: 'tel:+79149148185' },
  { name: 'terminal.38@mail.ru', href: 'mailto:terminal.38@mail.ru' },
];

export const SOCIAL_LINKS = [
  { name: 'Telegram', href: 'https://t.me/termedu38', icon: 'TelegramIcon' },
  { name: 'WhatsApp', href: 'https://wa.me/79149148185', icon: 'WhatsAppIcon' },
];

export { CURRENT_YEAR };

export interface LinkItem {
  name: string;
  href: string;
}
