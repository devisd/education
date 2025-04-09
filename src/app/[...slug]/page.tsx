import { Header, Footer, Placeholder } from '@/components/common';
import { Metadata } from 'next';

// Avoid static generation for all possible dynamic routes
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

type Props = {
    params: {
        slug: string[];
    };
};

export function generateMetadata({ params }: Props): Metadata {
    const path = params.slug.join('/');
    const title = getPageTitle(path);

    return {
        title: `${title} - Образовательный терминал в Иркутске`,
        description: `Информация о ${title.toLowerCase()} будет доступна в ближайшее время.`
    };
}

export default function CatchAllPage({ params }: Props) {
    const path = params.slug.join('/');
    const title = getPageTitle(path);
    const description = getPageDescription(path);

    return (
        <div>
            <Header />
            <main>
                <Placeholder title={title} description={description} />
            </main>
            <Footer />
        </div>
    );
}

// Функция для получения заголовка страницы на основе пути
function getPageTitle(path: string): string {
    // Словарь соответствия путей и заголовков
    const pathTitles: Record<string, string> = {
        // Главное меню
        'price': 'Прайс-лист образовательных услуг',
        'partners': 'Наши партнеры',
        'testimonials': 'Отзывы о нас',
        'contacts': 'Контактная информация',

        // Образовательные услуги
        'training/labor-protection': 'Обучение по охране труда',
        'training/fire-safety': 'Пожарная безопасность',
        'training/industrial-safety': 'Промышленная безопасность',
        'training/electrical-safety': 'Электробезопасность',
        'training/civil-defense': 'Гражданская оборона',
        'training/anti-terrorism': 'Антитеррористическая защищенность',
        'training/professional-retraining': 'Профессиональная переподготовка',
        'training/worker-professions': 'Обучение рабочим профессиям',
        'environmental-projects': 'Экологические проекты',
        'labor-protection-outsourcing': 'Аутсорсинг по охране труда',
        'training/ecological-safety': 'Экологическая безопасность',

        // Сведения об организации
        'structure': 'Структура и органы управления',
        'documents': 'Документы',
        'education': 'Образование',
        'staff': 'Руководство и педагогический состав',
        'facilities': 'Материально-техническое обеспечение',
        'paid-services': 'Платные образовательные услуги',
        'financial': 'Финансово-хозяйственная деятельность',
        'vacancies': 'Вакантные места для приема',
        'accessibility': 'Доступная среда',
        'international': 'Международное сотрудничество',

        // Дополнительные страницы
        'about': 'О компании',
        'licenses': 'Лицензии',
        'faq': 'Вопросы и ответы',
        'privacy-policy': 'Политика конфиденциальности',
        'offer': 'Договор оферты',
        'payment-rules': 'Правила оплаты',
    };

    // Возвращаем заголовок для указанного пути или генерируем из последнего сегмента пути
    return pathTitles[path] ||
        (path.split('/').pop() || 'Страница')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

// Функция для получения описания страницы на основе пути
function getPageDescription(path: string): string {
    // Словарь соответствия путей и описаний
    const pathDescriptions: Record<string, string> = {
        // Главное меню
        'price': 'Страница с актуальными ценами на обучение и программами курсов скоро будет доступна. Для получения информации о стоимости обучения, пожалуйста, свяжитесь с нами по телефону или через форму на главной странице.',
        'partners': 'Информация о наших партнерах и совместных образовательных проектах скоро будет доступна.',
        'testimonials': 'Отзывы наших клиентов и учащихся будут опубликованы в ближайшее время.',
        'contacts': 'Полная контактная информация, схема проезда и форма обратной связи скоро будут доступны.',

        // Образовательные услуги
        'training/labor-protection': 'Программы обучения по охране труда находятся в разработке. Скоро здесь появится подробная информация о курсах, стоимости и графике занятий.',
        'training/fire-safety': 'Курсы повышения квалификации по пожарной безопасности скоро будут доступны. Следите за обновлениями.',
        'training/industrial-safety': 'Программы обучения по промышленной безопасности в разработке. Информация о курсах появится в ближайшее время.',
        'training/electrical-safety': 'Курсы по электробезопасности для различных групп допуска скоро будут доступны на нашем сайте.',
        'training/civil-defense': 'Программы обучения по гражданской обороне и защите от чрезвычайных ситуаций в процессе разработки.',
        'training/anti-terrorism': 'Курсы по антитеррористической защищенности объектов скоро появятся на сайте.',
    };

    // Возвращаем описание для указанного пути или стандартное описание
    return pathDescriptions[path] || 'Данная страница находится в разработке и будет доступна в ближайшее время.';
} 