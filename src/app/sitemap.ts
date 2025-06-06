import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://терминал38.рф/'
    if (!baseUrl) {
        throw new Error('Environment variable NEXT_PUBLIC_BASE_URL is not set')
    }
    const currentDate = new Date()

    // Главные страницы
    const mainRoutes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Страницы основного раздела
    const mainSectionRoutes = [
        'main/reviews',
        'main/price',
        'main/faq',
        'main/distance-education',
        'main/contacts',
    ].map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Страницы обучения
    const trainingRoutes = [
        'training/skill-upgrading',
        'training/professional-retraining',
        'training/professional-education',
        'training/adults',
    ].map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Страницы раздела about
    const aboutRoutes = [
        'about/licenses',
    ].map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Страницы организации
    const organizationRoutes = [
        'organization/finance',
        'organization/vacant-places',
        'organization/student-support',
        'organization/structure',
        'organization/standarts',
        'organization/professors',
        'organization/paid-edu',
        'organization/mts',
        'organization/management',
        'organization/main-info',
        'organization/international-cooperation',
        'organization/edu',
        'organization/catering',
        'organization/docs',
    ].map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }))

    return [
        ...mainRoutes,
        ...mainSectionRoutes,
        ...trainingRoutes,
        ...aboutRoutes,
        ...organizationRoutes,
    ] as { url: string; lastModified?: string | Date; changeFrequency?: "weekly" | "monthly" | "always" | "hourly" | "daily" | "yearly" | "never"; priority?: number }[]
} 