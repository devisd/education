import { MenuItem } from "@/types";
import { TRAINING_CATEGORIES } from "./trainingCategories";

// Константы для структуры меню
export const EDUCATIONAL_SERVICES: MenuItem = {
    title: 'УСЛУГИ',
    children:
        TRAINING_CATEGORIES,
};

export const ORGANIZATION_INFO: MenuItem = {
    title: 'СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ',
    children: [
        { title: 'Основные сведения', href: '/organization/main-info' },
        { title: 'Структура и органы управления образовательной организацией', href: '/organization/structure' },
        { title: 'Документы', href: '/organization/docs' },
        { title: 'Образование', href: '/organization/edu' },
        { title: 'Образовательные стандарты и требования', href: '/organization/standarts' },
        { title: 'Руководство', href: '/organization/management' },
        { title: 'Педагогический состав', href: '/organization/professors' },
        { title: 'Материально-техническое обеспечение и оснащенность образовательного процесса. Досупная среда', href: '/organization/mts' },
        { title: 'Платные образовательные услуги', href: '/organization/paid-edu' },
        { title: 'Финансово-хозяйственная деятельность', href: '/organization/finance' },
        { title: 'Вакантные места для приема (перевода) обучающихся', href: '/organization/vacant-places' },
        { title: 'Стипендии и меры поддержки обучающихся', href: '/organization/student-support' },
        { title: 'Международное сотрудничество', href: '/organization/international-cooperation' },
        { title: 'Организация питания в образовательной организации', href: '/organization/catering' },
    ],
};

export const MAIN_MENU: MenuItem[] = [
    ORGANIZATION_INFO,
    EDUCATIONAL_SERVICES,
    { title: 'ПРАЙС', href: '/main/price' },
    { title: 'ВОПРОС-ОТВЕТ', href: '/main/faq' },
    { title: 'ОТЗЫВЫ', href: '/main/reviews' },
    { title: 'КОНТАКТЫ', href: '/main/contacts' },
    { title: 'ДИСТАНЦИОННОЕ ОБУЧЕНИЕ', href: 'https://sdo.от38.рус/' },
]; 