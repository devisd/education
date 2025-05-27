import type { ICont, IData, IImageResponse, ILetter, ISlideResponse, ITrainingResponse } from '@/types';
import { request } from './request';


// ======= HOME PAGE ========
// Слайдер
export const getSlides = () => {
    return request<ISlideResponse[]>({ path: '/slajders?populate=*' });
}


// ========== ORGANIZATION ===============
// Страница 'Основные сведения'
export const getMainInfo = () => {
    return request<ICont>({ path: '/osnovnye-svedeni-ya' });
}

// Страница 'Структура и органы управления образовательной организацией'
export const getStructure = () => {
    return request<ICont>({ path: '/struktura-i-organy-upravleni-ya' });
}

// Страница 'Документы'
export const getDocs = () => {
    return request<ICont>({ path: '/dokumenty' });
}

// Страница 'Образование'
export const getEdu = () => {
    return request<ICont>({ path: '/obrazovanie' });
}

// Страница 'Образовательные стандарты и требования'
export const getStandarts = () => {
    return request<ICont>({ path: '/obrazovatelnye-standarty-i-trebovaniya' });
}

// Страница 'Руководство'
export const getManagement = () => {
    return request<ICont>({ path: '/rukovodstvo' });
}

// Страница 'Педагогический состав'
export const getProfessors = () => {
    return request<ICont>({ path: '/pedagogicheskij-sostav' });
}

// Страница 'Материально-техническое обеспечение и оснащенность образовательного процесса. Досупная среда'
export const getMTS = () => {
    return request<ICont>({ path: '/materialno-tehnicheskoe-obespechenie-i-osnashhennost-obrazovatelnogo-proczessa-dostupnaya-sreda' });
}

// Страница 'Платные образовательные услуги'
export const getPaidEdu = () => {
    return request<ICont>({ path: '/platnye-obrazovatelnye-uslugi' });
}

// Страница 'Финансово-хозяйственная деятельность'
export const getFinance = () => {
    return request<ICont>({ path: '/finansovo-hozyajstvennaya-deyatelnost' });
}

// Страница 'Вакантные места для приема (перевода) обучающихся'
export const getVacantPlaces = () => {
    return request<ICont>({ path: '/vakantnye-mesta-dlya-priema-perevoda-obuchayushhihsya' });
}

// Страница 'Стипендии и меры поддержки обучающихся'
export const getStudentSupport = () => {
    return request<ICont>({ path: '/stipendii-i-mery-podderzhki-obuchayushhihsya' });
}

// Страница 'Международное сотрудничество'
export const getInternationalCooperation = () => {
    return request<ICont>({ path: '/mezhdunarodnoe-sotrudnichestvo' });
}

// Страница 'Организация питания в образовательной организации'
export const getCatering = () => {
    return request<ICont>({ path: '/organizacziya-pitaniya-v-obrazovatelnoj-organizaczii' });
}


// ======== MAIN ==========
// Страница 'Отзывы'
export const getReviews = () => {
    return request<IImageResponse[]>({
        path: '/otzyvies',
        params: {
            populate: 'image'
        }
    });
}

// Страница 'Отзывы (Благодарственные письма)'
export const getGratitudeLetters = () => {
    return request<ILetter[]>({
        path: '/blagodarstvennye-pismas?populate=*'
    });
}

// Страница 'Прайс'
export const getPrice = () => {
    return request<ICont>({ path: '/stoimost' });
}

// Страница 'Вопрос-ответ'
export const getFAQ = () => {
    return request<IData[]>({ path: '/vopros-otvets' });
}

// ======== ABOUT ==========
// Страница 'Новости'
export const getNews = () => {
    return request<ICont>({ path: '/novostis' });
}


// ========= TRAINING ========
// Страница
export const getTraining = () => {
    return request<ITrainingResponse[]>({
        path: '/uslugis?populate=image'
    });
}


// ========= POST REQUESTS =========
// Страница 'Отзывы'
export const postReview = (data: any) => {
    console.log("🚀 ~ postReview ~ data:", data)
    return request<any>({
        path: '/otzyvies',
        method: 'POST',
        data
    });
}