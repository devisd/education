'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MAIN_MENU } from '../constants/header';
import { TRAINING_CATEGORIES } from '../constants/trainingCategories';
import { MENU_LINKS, EDU_LINKS } from '../constants/footer';
import {
    getAllNews, getAllTraining, getFAQ, getMainInfo, getStructure, getDocs, getEdu,
    getStandarts, getManagement, getProfessors, getMTS, getPaidEdu, getFinance,
    getVacantPlaces, getStudentSupport, getInternationalCooperation, getCatering,
    getReviews, getGratitudeLetters, getStatistics, getLicenses
} from '@/api/services';
import type { SearchLink } from '../components/common/SiteSearch';
import { extractTextFromContent, flattenMenu } from './searchUtils';

type SearchDataContextType = {
    allLinks: SearchLink[];
    isLoading: boolean;
};

const SearchDataContext = createContext<SearchDataContextType>({
    allLinks: [],
    isLoading: true,
});

export const useSearchData = () => useContext(SearchDataContext);

export const SearchDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [allLinks, setAllLinks] = useState<SearchLink[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
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
                    getLicenses()
                ]);

                const menuLinks: SearchLink[] = flattenMenu(MAIN_MENU);
                const trainingLinks: SearchLink[] = TRAINING_CATEGORIES.map(c => ({
                    title: c.title,
                    href: c.href,
                    category: 'Обучение',
                    description: c.description
                }));

                const newsLinks: SearchLink[] = newsResponse.data?.map(n => ({
                    title: n.Title || 'Новость',
                    href: `/about/news/${n.documentId}`,
                    category: 'Новости',
                    description: n.Description || ''
                })) || [];

                const apiTrainingLinks: SearchLink[] = trainingResponse.data?.map(t => {
                    let title = '';
                    if (Array.isArray(t.content) && t.content.length > 0) {
                        const firstBlock = t.content[0];
                        if (firstBlock.children && Array.isArray(firstBlock.children) && firstBlock.children.length > 0) {
                            title = firstBlock.children[0].text || '';
                        }
                        if (!title) {
                            title = extractTextFromContent([firstBlock]);
                        }
                    }
                    if (!title) title = 'Услуга';
                    const description = extractTextFromContent(t.content || []);
                    return {
                        title,
                        href: `/training/${t.documentId}`,
                        category: 'Обучение',
                        description
                    };
                }) || [];

                const faqLinks: SearchLink[] = faqResponse.data?.map(f => {
                    let description = '';
                    if (Array.isArray(f.Description)) {
                        description = extractTextFromContent(f.Description);
                    } else if (typeof f.Description === 'string') {
                        description = f.Description;
                    }
                    return {
                        title: f.Title || 'Вопрос',
                        href: `/faq#${f.documentId}`,
                        category: 'FAQ',
                        description
                    };
                }) || [];

                const mainInfoLink: SearchLink | null = mainInfoResponse.data ? {
                    title: 'Основные сведения',
                    href: '/organization/main-info',
                    category: 'Организация',
                    description: extractTextFromContent(mainInfoResponse.data.content || [])
                } : null;

                const structureLink: SearchLink | null = structureResponse.data ? {
                    title: 'Структура и органы управления',
                    href: '/organization/structure',
                    category: 'Организация',
                    description: extractTextFromContent(structureResponse.data.content || [])
                } : null;

                const docsLink: SearchLink | null = docsResponse.data ? {
                    title: 'Документы',
                    href: '/organization/docs',
                    category: 'Организация',
                    description: extractTextFromContent(docsResponse.data.content || [])
                } : null;

                const eduLink: SearchLink | null = eduResponse.data ? {
                    title: 'Образование',
                    href: '/organization/edu',
                    category: 'Организация',
                    description: extractTextFromContent(eduResponse.data.content || [])
                } : null;

                const standartsLink: SearchLink | null = standartsResponse.data ? {
                    title: 'Образовательные стандарты',
                    href: '/organization/standarts',
                    category: 'Организация',
                    description: extractTextFromContent(standartsResponse.data.content || [])
                } : null;

                const managementLink: SearchLink | null = managementResponse.data ? {
                    title: 'Руководство',
                    href: '/organization/management',
                    category: 'Организация',
                    description: extractTextFromContent(managementResponse.data.content || [])
                } : null;

                const professorsLink: SearchLink | null = professorsResponse.data ? {
                    title: 'Педагогический состав',
                    href: '/organization/professors',
                    category: 'Организация',
                    description: extractTextFromContent(professorsResponse.data.content || [])
                } : null;

                const mtsLink: SearchLink | null = mtsResponse.data ? {
                    title: 'Материально-техническое обеспечение',
                    href: '/organization/mts',
                    category: 'Организация',
                    description: extractTextFromContent(mtsResponse.data.content || [])
                } : null;

                const paidEduLink: SearchLink | null = paidEduResponse.data ? {
                    title: 'Платные образовательные услуги',
                    href: '/organization/paid-edu',
                    category: 'Организация',
                    description: extractTextFromContent(paidEduResponse.data.content || [])
                } : null;

                const financeLink: SearchLink | null = financeResponse.data ? {
                    title: 'Финансово-хозяйственная деятельность',
                    href: '/organization/finance',
                    category: 'Организация',
                    description: extractTextFromContent(financeResponse.data.content || [])
                } : null;

                const vacantPlacesLink: SearchLink | null = vacantPlacesResponse.data ? {
                    title: 'Вакантные места',
                    href: '/organization/vacant-places',
                    category: 'Организация',
                    description: extractTextFromContent(vacantPlacesResponse.data.content || [])
                } : null;

                const studentSupportLink: SearchLink | null = studentSupportResponse.data ? {
                    title: 'Стипендии и меры поддержки',
                    href: '/organization/student-support',
                    category: 'Организация',
                    description: extractTextFromContent(studentSupportResponse.data.content || [])
                } : null;

                const internationalCooperationLink: SearchLink | null = internationalCooperationResponse.data ? {
                    title: 'Международное сотрудничество',
                    href: '/organization/international-cooperation',
                    category: 'Организация',
                    description: extractTextFromContent(internationalCooperationResponse.data.content || [])
                } : null;

                const cateringLink: SearchLink | null = cateringResponse.data ? {
                    title: 'Организация питания',
                    href: '/organization/catering',
                    category: 'Организация',
                    description: extractTextFromContent(cateringResponse.data.content || [])
                } : null;

                const reviewLinks: SearchLink[] = reviewsResponse.data?.map(r => ({
                    title: r.Name || 'Отзыв',
                    href: '/main/reviews',
                    category: 'Отзывы',
                    description: r.Content
                })) || [];

                const gratitudeLinks: SearchLink[] = gratitudeLettersResponse.data?.map(l => ({
                    title: l.Title || 'Благодарственное письмо',
                    href: '/main/reviews',
                    category: 'Отзывы',
                    description: ''
                })) || [];

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

                const all = [
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
                        cateringLink
                    ].filter((link): link is SearchLink => link !== null)
                ];

                if (isMounted) {
                    setAllLinks(all);
                }
            } catch (error) {
                console.error('Error loading search data:', error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        loadData();
        return () => { isMounted = false; };
    }, []);

    return (
        <SearchDataContext.Provider value={{ allLinks, isLoading }}>
            {children}
        </SearchDataContext.Provider>
    );
}; 