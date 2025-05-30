import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SearchIcon } from '@/icons';
import { MAIN_MENU } from '../../constants/header';
import { TRAINING_CATEGORIES } from '../../constants/trainingCategories';
import { MENU_LINKS, EDU_LINKS } from '../../constants/footer';
import {
    getAllNews,
    getAllTraining,
    getFAQ,
    getMainInfo,
    getStructure,
    getDocs,
    getEdu,
    getStandarts,
    getManagement,
    getProfessors,
    getMTS,
    getPaidEdu,
    getFinance,
    getVacantPlaces,
    getStudentSupport,
    getInternationalCooperation,
    getCatering,
    getReviews,
    getGratitudeLetters,
    getStatistics,
    getPrice,
    getLicenses
} from '@/api/services';
import { useRouter } from 'next/navigation';

// Тип для поиска
export type SearchLink = {
    title: string;
    href: string;
    category: string;
    description?: string;
};

function flattenMenu(menu: any[]): SearchLink[] {
    let result: SearchLink[] = [];
    for (const item of menu) {
        if (item.href) result.push({
            title: item.title,
            href: item.href,
            category: 'Меню',
            description: item.description
        });
        if (item.children) result = result.concat(flattenMenu(item.children));
    }
    return result;
}

// Функция для извлечения текста из контента
function extractTextFromContent(content: any[]): string {
    if (!Array.isArray(content)) return '';

    return content.map(block => {
        if (block.children) {
            return block.children.map((child: any) => {
                if (child.text) return child.text;
                if (child.children) return extractTextFromContent(child.children);
                return '';
            }).join(' ');
        }
        return '';
    }).join(' ');
}

export const SiteSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [searchResults, setSearchResults] = useState<SearchLink[]>([]);
    const [allLinks, setAllLinks] = useState<SearchLink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Загружаем данные при монтировании компонента
    useEffect(() => {
        const loadData = async () => {
            try {
                const [
                    newsResponse,
                    trainingResponse,
                    faqResponse,
                    mainInfoResponse,
                    structureResponse,
                    docsResponse,
                    eduResponse,
                    standartsResponse,
                    managementResponse,
                    professorsResponse,
                    mtsResponse,
                    paidEduResponse,
                    financeResponse,
                    vacantPlacesResponse,
                    studentSupportResponse,
                    internationalCooperationResponse,
                    cateringResponse,
                    reviewsResponse,
                    gratitudeLettersResponse,
                    statisticsResponse,
                    priceResponse,
                    licensesResponse
                ] = await Promise.all([
                    getAllNews(),
                    getAllTraining(),
                    getFAQ(),
                    getMainInfo(),
                    getStructure(),
                    getDocs(),
                    getEdu(),
                    getStandarts(),
                    getManagement(),
                    getProfessors(),
                    getMTS(),
                    getPaidEdu(),
                    getFinance(),
                    getVacantPlaces(),
                    getStudentSupport(),
                    getInternationalCooperation(),
                    getCatering(),
                    getReviews(),
                    getGratitudeLetters(),
                    getStatistics(),
                    getPrice(),
                    getLicenses()
                ]);

                const menuLinks: SearchLink[] = flattenMenu(MAIN_MENU);
                const trainingLinks: SearchLink[] = TRAINING_CATEGORIES.map(c => ({
                    title: c.title,
                    href: c.href,
                    category: 'Обучение',
                    description: c.description
                }));

                // Добавляем новости из API
                const newsLinks: SearchLink[] = newsResponse.data?.map(n => ({
                    title: n.Title || 'Новость',
                    href: `/about/news/${n.documentId}`,
                    category: 'Новости',
                    description: n.Description
                })) || [];

                // Добавляем услуги из API
                const apiTrainingLinks: SearchLink[] = trainingResponse.data?.map(t => {
                    const title = t.content?.[0]?.children?.text || 'Услуга';
                    const description = extractTextFromContent(t.content || []);
                    return {
                        title,
                        href: `/training/${t.documentId}`,
                        category: 'Обучение',
                        description
                    };
                }) || [];

                // Добавляем FAQ из API
                const faqLinks: SearchLink[] = faqResponse.data?.map(f => ({
                    title: f.Title || 'Вопрос',
                    href: `/faq#${f.documentId}`,
                    category: 'FAQ',
                    description: extractTextFromContent(f.Description || [])
                })) || [];

                // Добавляем основные сведения
                const mainInfoLink: SearchLink | null = mainInfoResponse.data ? {
                    title: 'Основные сведения',
                    href: '/organization/main-info',
                    category: 'Организация',
                    description: extractTextFromContent(mainInfoResponse.data.content || [])
                } : null;

                // Добавляем структуру
                const structureLink: SearchLink | null = structureResponse.data ? {
                    title: 'Структура и органы управления',
                    href: '/organization/structure',
                    category: 'Организация',
                    description: extractTextFromContent(structureResponse.data.content || [])
                } : null;

                // Добавляем документы
                const docsLink: SearchLink | null = docsResponse.data ? {
                    title: 'Документы',
                    href: '/organization/docs',
                    category: 'Организация',
                    description: extractTextFromContent(docsResponse.data.content || [])
                } : null;

                // Добавляем образование
                const eduLink: SearchLink | null = eduResponse.data ? {
                    title: 'Образование',
                    href: '/organization/edu',
                    category: 'Организация',
                    description: extractTextFromContent(eduResponse.data.content || [])
                } : null;

                // Добавляем стандарты
                const standartsLink: SearchLink | null = standartsResponse.data ? {
                    title: 'Образовательные стандарты',
                    href: '/organization/standarts',
                    category: 'Организация',
                    description: extractTextFromContent(standartsResponse.data.content || [])
                } : null;

                // Добавляем руководство
                const managementLink: SearchLink | null = managementResponse.data ? {
                    title: 'Руководство',
                    href: '/organization/management',
                    category: 'Организация',
                    description: extractTextFromContent(managementResponse.data.content || [])
                } : null;

                // Добавляем преподавателей
                const professorsLink: SearchLink | null = professorsResponse.data ? {
                    title: 'Педагогический состав',
                    href: '/organization/professors',
                    category: 'Организация',
                    description: extractTextFromContent(professorsResponse.data.content || [])
                } : null;

                // Добавляем МТО
                const mtsLink: SearchLink | null = mtsResponse.data ? {
                    title: 'Материально-техническое обеспечение',
                    href: '/organization/mts',
                    category: 'Организация',
                    description: extractTextFromContent(mtsResponse.data.content || [])
                } : null;

                // Добавляем платные услуги
                const paidEduLink: SearchLink | null = paidEduResponse.data ? {
                    title: 'Платные образовательные услуги',
                    href: '/organization/paid-edu',
                    category: 'Организация',
                    description: extractTextFromContent(paidEduResponse.data.content || [])
                } : null;

                // Добавляем финансы
                const financeLink: SearchLink | null = financeResponse.data ? {
                    title: 'Финансово-хозяйственная деятельность',
                    href: '/organization/finance',
                    category: 'Организация',
                    description: extractTextFromContent(financeResponse.data.content || [])
                } : null;

                // Добавляем вакантные места
                const vacantPlacesLink: SearchLink | null = vacantPlacesResponse.data ? {
                    title: 'Вакантные места',
                    href: '/organization/vacant-places',
                    category: 'Организация',
                    description: extractTextFromContent(vacantPlacesResponse.data.content || [])
                } : null;

                // Добавляем стипендии
                const studentSupportLink: SearchLink | null = studentSupportResponse.data ? {
                    title: 'Стипендии и меры поддержки',
                    href: '/organization/student-support',
                    category: 'Организация',
                    description: extractTextFromContent(studentSupportResponse.data.content || [])
                } : null;

                // Добавляем международное сотрудничество
                const internationalCooperationLink: SearchLink | null = internationalCooperationResponse.data ? {
                    title: 'Международное сотрудничество',
                    href: '/organization/international-cooperation',
                    category: 'Организация',
                    description: extractTextFromContent(internationalCooperationResponse.data.content || [])
                } : null;

                // Добавляем питание
                const cateringLink: SearchLink | null = cateringResponse.data ? {
                    title: 'Организация питания',
                    href: '/organization/catering',
                    category: 'Организация',
                    description: extractTextFromContent(cateringResponse.data.content || [])
                } : null;

                // Добавляем отзывы
                const reviewLinks: SearchLink[] = reviewsResponse.data?.map(r => ({
                    title: r.Name || 'Отзыв',
                    href: '/main/reviews',
                    category: 'Отзывы',
                    description: r.Content
                })) || [];

                // Добавляем благодарственные письма
                const gratitudeLinks: SearchLink[] = gratitudeLettersResponse.data?.map(l => ({
                    title: l.Title || 'Благодарственное письмо',
                    href: '/main/reviews',
                    category: 'Отзывы',
                    description: ''
                })) || [];

                // Добавляем прайс
                const priceLink: SearchLink | null = priceResponse.data ? {
                    title: 'Прайс',
                    href: '/main/price',
                    category: 'Цены',
                    description: extractTextFromContent(priceResponse.data.content || [])
                } : null;

                // Добавляем лицензии
                const licenseLinks: SearchLink[] = licensesResponse.data?.map(l => ({
                    title: l.Title || 'Лицензия',
                    href: '/organization/docs',
                    category: 'Документы',
                    description: ''
                })) || [];

                const footerLinks: SearchLink[] = MENU_LINKS.map(l => ({
                    title: l.name,
                    href: l.href,
                    category: 'Дополнительно'
                }));

                const eduLinks: SearchLink[] = EDU_LINKS.map(l => ({
                    title: l.name,
                    href: l.href,
                    category: 'Образование'
                }));

                setAllLinks([
                    ...menuLinks,
                    ...trainingLinks,
                    ...apiTrainingLinks,
                    ...newsLinks,
                    ...faqLinks,
                    ...footerLinks,
                    ...eduLinks,
                    ...reviewLinks,
                    ...gratitudeLinks,
                    ...licenseLinks,
                    ...[
                        mainInfoLink,
                        structureLink,
                        docsLink,
                        eduLink,
                        standartsLink,
                        managementLink,
                        professorsLink,
                        mtsLink,
                        paidEduLink,
                        financeLink,
                        vacantPlacesLink,
                        studentSupportLink,
                        internationalCooperationLink,
                        cateringLink,
                        priceLink
                    ].filter((link): link is SearchLink => link !== null)
                ]);
            } catch (error) {
                console.error('Error loading search data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    // Поиск
    useEffect(() => {
        if (!searchValue) {
            setSearchResults([]);
            return;
        }

        const searchTerm = searchValue.toLowerCase();
        const results = allLinks.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm);
            const descriptionMatch = item.description?.toLowerCase().includes(searchTerm);
            return titleMatch || descriptionMatch;
        });

        setSearchResults(results);
    }, [searchValue, allLinks]);

    // Закрытие при клике вне (десктоп)
    useEffect(() => {
        if (!searchOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (desktopRef.current && !desktopRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchOpen]);

    // Закрытие при клике вне (мобайл)
    useEffect(() => {
        if (!mobileSearchOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
                setMobileSearchOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileSearchOpen]);

    const renderSearchResults = () => {
        if (!searchValue) return null;

        if (isLoading) {
            return (
                <div className="px-4 py-2 text-gray-400 text-sm">
                    Загрузка...
                </div>
            );
        }

        if (searchResults.length === 0) {
            return (
                <div className="px-4 py-2 text-gray-400 text-sm">
                    Ничего не найдено. Попробуйте изменить запрос
                </div>
            );
        }

        // Группируем результаты по категориям
        const groupedResults = searchResults.reduce((acc, result) => {
            const category = result.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(result);
            return acc;
        }, {} as Record<string, SearchLink[]>);

        return (
            <div className="mt-2 bg-white rounded shadow max-h-96 overflow-y-auto border">
                {Object.entries(groupedResults).map(([category, results]) => (
                    <div key={category} className="border-b last:border-b-0">
                        <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700">
                            {category}
                        </div>
                        {results.map((result, idx) => (
                            <Link
                                key={`${category}-${result.title}-${idx}`}
                                href={result.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 text-sm"
                            >
                                <div className="font-medium">{result.title}</div>
                                {result.description && (
                                    <div className="text-gray-500 text-xs mt-1">
                                        {result.description}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const SearchInput = () => (
        <div className="relative">
            <input
                type="text"
                className="w-full px-3 py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Поиск по сайту..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                autoFocus
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
    );

    return <>
        {/* Десктоп */}
        <div className="hidden lg:block xl:hidden" ref={desktopRef}>
            <button
                className="p-0 ml-2 bg-transparent text-primary-600 hover:text-primary-900 focus:outline-none flex items-center justify-center"
                aria-label="Поиск"
                onClick={() => setSearchOpen(v => !v)}
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            {searchOpen && (
                <div className="fixed right-0 top-5 mt-2 p-3 w-96 bg-white rounded shadow border z-[1050]">
                    <SearchInput />
                    {renderSearchResults()}
                </div>
            )}
        </div>

        {/* Десктоп XL */}
        <div className="hidden xl:flex xl:items-center" ref={desktopRef}>
            <button
                className="p-0 ml-2 bg-transparent text-primary-600 hover:text-primary-900 focus:outline-none flex items-center justify-center"
                aria-label="Поиск"
                onClick={() => setSearchOpen(v => !v)}
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            {searchOpen && (
                <div className="fixed right-2 top-16 mt-2 p-3 w-96 bg-white rounded shadow border z-[1050]">
                    <SearchInput />
                    {renderSearchResults()}
                </div>
            )}
        </div>

        {/* Мобильные/планшеты */}
        <div className="flex lg:hidden items-center" ref={mobileRef}>
            <button
                className="bg-primary-600 text-white p-2 rounded-md"
                aria-label="Поиск"
                onClick={() => setMobileSearchOpen((v) => !v)}
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            {mobileSearchOpen && (
                <div className="fixed left-0 top-1 mt-2 p-3 w-[375px] bg-white rounded shadow border z-[1050]">
                    <SearchInput />
                    {renderSearchResults()}
                </div>
            )}
        </div>
    </>;
}; 