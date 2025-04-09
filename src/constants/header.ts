import { MenuItem } from "@/types";

// Константы для структуры меню
export const EDUCATIONAL_SERVICES: MenuItem = {
    title: 'Образовательные услуги',
    children: [
        { title: 'Обучение по охране труда', href: '/training/labor-protection' },
        {
            title: 'Курсы повышения квалификации',
            children: [
                { title: 'Пожарная безопасность', href: '/training/fire-safety' },
                { title: 'Промышленная безопасность', href: '/training/industrial-safety' },
                { title: 'Электробезопасность', href: '/training/electrical-safety' },
                { title: 'Гражданская оборона', href: '/training/civil-defense' },
                { title: 'Антитеррористическая защищенность', href: '/training/anti-terrorism' },
            ],
        },
        { title: 'Профессиональная переподготовка', href: '/training/professional-retraining' },
        { title: 'Обучение рабочим профессиям', href: '/training/worker-professions' },
        { title: 'Экологические проекты', href: '/environmental-projects' },
        { title: 'Аутсорсинг по охране труда', href: '/labor-protection-outsourcing' },
    ],
};

export const ORGANIZATION_INFO: MenuItem = {
    title: 'Сведения об организации',
    children: [
        { title: 'Структура и органы управления', href: '/structure' },
        { title: 'Документы', href: '/documents' },
        { title: 'Образование', href: '/education' },
        { title: 'Руководство и педагогический состав', href: '/staff' },
        { title: 'Материально-техническое обеспечение', href: '/facilities' },
        { title: 'Платные образовательные услуги', href: '/paid-services' },
        { title: 'Финансово-хозяйственная деятельность', href: '/financial' },
        { title: 'Вакантные места для приема', href: '/vacancies' },
        { title: 'Доступная среда', href: '/accessibility' },
        { title: 'Международное сотрудничество', href: '/international' },
    ],
};

export const MAIN_MENU: MenuItem[] = [
    EDUCATIONAL_SERVICES,
    { title: 'Прайс', href: '/price' },
    ORGANIZATION_INFO,
    { title: 'Партнеры', href: '/partners' },
    { title: 'Отзывы', href: '/testimonials' },
    { title: 'Контакты', href: '/contacts' },
]; 