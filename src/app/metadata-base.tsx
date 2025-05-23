import { Metadata } from 'next';

export const baseMetadata: Metadata = {
    title: {
        template: '%s | Образовательный терминал',
        default: 'Образовательный терминал в Иркутске',
    },
    description: 'Образовательный терминал в Иркутске - обучение в области охраны труда, пожарной безопасности, промышленной безопасности, электробезопасности и по другим направлениям.',
    keywords: [
        'образование',
        'обучение',
        'охрана труда',
        'пожарная безопасность',
        'промышленная безопасность',
        'электробезопасность',
        'Иркутск',
    ],
    authors: [{ name: 'Образовательный терминал' }],
    creator: 'Образовательный терминал',
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
        title: 'Образовательный терминал в Иркутске',
        description: 'Образовательный терминал в Иркутске - обучение в области охраны труда, пожарной безопасности, промышленной безопасности, электробезопасности и по другим направлениям.',
        url: 'https://yourdomain.com',
        siteName: 'Образовательный терминал',
        locale: 'ru_RU',
        type: 'website',
    },
} 