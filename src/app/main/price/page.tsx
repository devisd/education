'use client';

import React, { useState } from 'react';

export default function PricePage() {
    // Состояние для активного таба
    const [activeTab, setActiveTab] = useState<string>('professional');

    // Моковые данные о ценах на курсы
    const courses = [
        // Профессиональная переподготовка
        {
            id: 1,
            name: 'Управление персоналом',
            hours: 256,
            price: 18500,
            document: 'Диплом о профессиональной переподготовке',
            format: 'Дистанционно',
            period: '3 месяца',
            category: 'professional'
        },
        {
            id: 2,
            name: 'Бухгалтерский учет и налогообложение',
            hours: 320,
            price: 22000,
            document: 'Диплом о профессиональной переподготовке',
            format: 'Дистанционно',
            period: '4 месяца',
            category: 'professional'
        },
        {
            id: 3,
            name: 'Юриспруденция',
            hours: 520,
            price: 28000,
            document: 'Диплом о профессиональной переподготовке',
            format: 'Дистанционно',
            period: '6 месяцев',
            category: 'professional'
        },
        {
            id: 4,
            name: 'Педагогика и методика дошкольного образования',
            hours: 280,
            price: 20000,
            document: 'Диплом о профессиональной переподготовке',
            format: 'Дистанционно',
            period: '3 месяца',
            category: 'professional'
        },

        // Повышение квалификации
        {
            id: 5,
            name: 'Охрана труда для руководителей и специалистов',
            hours: 40,
            price: 3200,
            document: 'Удостоверение о повышении квалификации',
            format: 'Дистанционно',
            period: '2 недели',
            category: 'qualification'
        },
        {
            id: 6,
            name: 'Пожарно-технический минимум',
            hours: 28,
            price: 2500,
            document: 'Удостоверение о повышении квалификации',
            format: 'Дистанционно',
            period: '1 неделя',
            category: 'qualification'
        },
        {
            id: 7,
            name: 'Оказание первой помощи',
            hours: 16,
            price: 1800,
            document: 'Удостоверение о повышении квалификации',
            format: 'Дистанционно',
            period: '3 дня',
            category: 'qualification'
        },
        {
            id: 8,
            name: 'Противодействие коррупции',
            hours: 72,
            price: 4500,
            document: 'Удостоверение о повышении квалификации',
            format: 'Дистанционно',
            period: '3 недели',
            category: 'qualification'
        },

        // Рабочие профессии
        {
            id: 9,
            name: 'Электромонтер по ремонту и обслуживанию электрооборудования',
            hours: 160,
            price: 9800,
            document: 'Свидетельство о профессии рабочего',
            format: 'Очно-заочно',
            period: '1.5 месяца',
            category: 'worker'
        },
        {
            id: 10,
            name: 'Стропальщик',
            hours: 160,
            price: 8500,
            document: 'Свидетельство о профессии рабочего',
            format: 'Очно-заочно',
            period: '1.5 месяца',
            category: 'worker'
        },
        {
            id: 11,
            name: 'Слесарь-сантехник',
            hours: 160,
            price: 8200,
            document: 'Свидетельство о профессии рабочего',
            format: 'Очно-заочно',
            period: '1.5 месяца',
            category: 'worker'
        },
        {
            id: 12,
            name: 'Оператор котельной',
            hours: 160,
            price: 9000,
            document: 'Свидетельство о профессии рабочего',
            format: 'Очно-заочно',
            period: '1.5 месяца',
            category: 'worker'
        },

        // Специальные курсы
        {
            id: 13,
            name: 'Компьютерная грамотность',
            hours: 24,
            price: 4800,
            document: 'Сертификат',
            format: 'Очно',
            period: '2 недели',
            category: 'special'
        },
        {
            id: 14,
            name: 'Английский язык для начинающих',
            hours: 48,
            price: 8500,
            document: 'Сертификат',
            format: 'Очно / Онлайн',
            period: '2 месяца',
            category: 'special'
        },
        {
            id: 15,
            name: 'Основы бухгалтерского учета для начинающих',
            hours: 32,
            price: 6000,
            document: 'Сертификат',
            format: 'Онлайн',
            period: '1 месяц',
            category: 'special'
        },
        {
            id: 16,
            name: 'Web-дизайн и верстка',
            hours: 80,
            price: 12000,
            document: 'Сертификат',
            format: 'Онлайн',
            period: '2 месяца',
            category: 'special'
        }
    ];

    // Фильтрация курсов по категории
    const filteredCourses = courses.filter(course => course.category === activeTab);

    // Форматирование цены
    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽';
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-primary-300 opacity-5 blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-primary-300 opacity-5 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-primary-400 opacity-5 blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border-6 border-primary-300 opacity-5 blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Стоимость обучения
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ЦЕНЫ НА <span className="font-extrabold text-primary-600">ОБРАЗОВАТЕЛЬНЫЕ УСЛУГИ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Полный перечень образовательных программ с указанием стоимости и продолжительности обучения
                    </p>
                </div>

                {/* Табы для категорий курсов */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setActiveTab('professional')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'professional'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Профессиональная переподготовка
                    </button>
                    <button
                        onClick={() => setActiveTab('qualification')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'qualification'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Повышение квалификации
                    </button>
                    <button
                        onClick={() => setActiveTab('worker')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'worker'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Рабочие профессии
                    </button>
                    <button
                        onClick={() => setActiveTab('special')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'special'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Специальные курсы
                    </button>
                </div>

                {/* Таблица с ценами */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        {activeTab === 'professional' && 'Программы профессиональной переподготовки'}
                        {activeTab === 'qualification' && 'Программы повышения квалификации'}
                        {activeTab === 'worker' && 'Программы подготовки по рабочим профессиям'}
                        {activeTab === 'special' && 'Специальные курсы и программы'}
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Наименование программы
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Объем часов
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Выдаваемый документ
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Формат
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Срок обучения
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Стоимость
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredCourses.map((course) => (
                                    <tr key={course.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                            {course.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {course.hours} ч.
                                        </td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                                            {course.document}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {course.format}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {course.period}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                                                {formatPrice(course.price)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Информация об оплате */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Способы оплаты</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </span>
                                <h5 className="text-lg font-semibold text-gray-800">Банковской картой</h5>
                            </div>
                            <p className="text-gray-600">
                                Оплата банковской картой любого банка через личный кабинет или по ссылке. Поддерживаются карты Visa, MasterCard, МИР.
                            </p>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </span>
                                <h5 className="text-lg font-semibold text-gray-800">Банковский перевод</h5>
                            </div>
                            <p className="text-gray-600">
                                Оплата по счету через ваш банк. Для юридических лиц и индивидуальных предпринимателей.
                            </p>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <h5 className="text-lg font-semibold text-gray-800">Рассрочка</h5>
                            </div>
                            <p className="text-gray-600">
                                Возможна оплата обучения в рассрочку. Первый платеж - 30%, остальное в течение периода обучения.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Скидки */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Скидки и специальные предложения</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Система скидок</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5%</div>
                                    <p className="text-gray-700">При повторном обучении или обучении нескольким программам</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">7%</div>
                                    <p className="text-gray-700">При оплате полной стоимости обучения единовременно</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">10%</div>
                                    <p className="text-gray-700">При групповом обучении от 3-х человек</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">15%</div>
                                    <p className="text-gray-700">При групповом обучении от 5-ти человек</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Специальные категории</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Скидка 10% для студентов и выпускников ВУЗов</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Скидка 10% для многодетных семей</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Скидка 10% для инвалидов и лиц с ОВЗ</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Специальные условия для корпоративных клиентов</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Скачать полный прайс-лист
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
