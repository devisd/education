export type IconType = 'team' | 'shield' | 'checklist' | 'currency';

export interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    link: string;
    iconType: IconType;
    gradient: string;
}

export const NEWS_ITEMS: NewsItem[] = [
    {
        id: 1,
        title: 'Открыты вакансии',
        date: '17.12.2024',
        excerpt: 'Ищем менеджера по продажам и методиста. Станьте частью нашей команды!',
        image: '/images/news1.jpg',
        link: '/news/open-vacancies',
        iconType: 'team',
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        id: 2,
        title: 'Охрана труда работников 2024: шпаргалка, как организовать и что нового',
        date: '11.06.2024',
        excerpt: 'Обзор изменений в законодательстве по охране труда в 2024 году и рекомендации по организации обучения.',
        image: '/images/news2.jpg',
        link: '/news/labor-protection-2024',
        iconType: 'shield',
        gradient: 'from-primary-500 to-primary-700'
    },
    {
        id: 3,
        title: 'Кому и когда проходить проверку знаний в ЕИСОТ?',
        date: '23.05.2024',
        excerpt: 'Разъяснения по вопросам прохождения проверки знаний в Единой информационной системе охраны труда.',
        image: '/images/news3.jpg',
        link: '/news/eisot-knowledge-check',
        iconType: 'checklist',
        gradient: 'from-green-500 to-teal-600'
    },
    {
        id: 4,
        title: 'Беспроцентная рассрочка на обучение',
        date: '15.04.2024',
        excerpt: 'Позвольте себе больше! Оформите рассрочку на обучение без процентов и первоначального взноса.',
        image: '/images/news4.jpg',
        link: '/news/installment-plan',
        iconType: 'currency',
        gradient: 'from-amber-500 to-orange-600'
    }
]; 