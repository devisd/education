// 'use client';

// import React, { useState } from 'react';

export default function MtsPage() {
    // Табы для разделов МТО
    // const [activeTab, setActiveTab] = useState<string>('facilities');

    // // Данные об учебных помещениях
    // const facilities = [
    //     {
    //         id: 1,
    //         name: 'Учебный корпус №1',
    //         address: 'г. Москва, ул. Университетская, д. 1',
    //         equipment: 'Лекционные аудитории с мультимедийным оборудованием, компьютерные классы, лаборатории',
    //         accessible: true,
    //     },
    //     {
    //         id: 2,
    //         name: 'Учебный корпус №2',
    //         address: 'г. Москва, ул. Студенческая, д. 5',
    //         equipment: 'Учебные аудитории, научно-исследовательские лаборатории, конференц-зал',
    //         accessible: true,
    //     },
    //     {
    //         id: 3,
    //         name: 'Научно-исследовательский комплекс',
    //         address: 'г. Москва, пр-т Науки, д. 12',
    //         equipment: 'Современные лаборатории, центр коллективного пользования научным оборудованием',
    //         accessible: true,
    //     },
    //     {
    //         id: 4,
    //         name: 'Спортивный комплекс',
    //         address: 'г. Москва, ул. Спортивная, д. 3',
    //         equipment: 'Спортивные залы, бассейн, стадион, тренажерный зал',
    //         accessible: true,
    //     },
    // ];

    // // Данные о библиотеках
    // const libraries = [
    //     {
    //         id: 1,
    //         name: 'Главная научная библиотека',
    //         address: 'г. Москва, ул. Университетская, д. 1',
    //         description: 'Фонд библиотеки насчитывает более 1,5 млн изданий. Читальные залы на 500 мест. Электронный каталог.',
    //         accessible: true,
    //     },
    //     {
    //         id: 2,
    //         name: 'Библиотека технических наук',
    //         address: 'г. Москва, ул. Студенческая, д. 5',
    //         description: 'Специализированный фонд по техническим наукам. Читальный зал на 100 мест.',
    //         accessible: true,
    //     },
    // ];

    // // Данные об электронной информационно-образовательной среде
    // const eios = [
    //     {
    //         id: 1,
    //         name: 'Система управления обучением (LMS)',
    //         description: 'Виртуальная образовательная среда для организации учебного процесса. Включает курсы, тесты, задания, форумы.',
    //         url: 'https://lms.university.ru',
    //     },
    //     {
    //         id: 2,
    //         name: 'Электронная библиотечная система',
    //         description: 'Доступ к полнотекстовым электронным версиям учебной, научной и художественной литературы.',
    //         url: 'https://library.university.ru',
    //     },
    //     {
    //         id: 3,
    //         name: 'Электронное портфолио обучающихся',
    //         description: 'Система для сбора, хранения и представления результатов образовательной и научной деятельности обучающихся.',
    //         url: 'https://portfolio.university.ru',
    //     },
    //     {
    //         id: 4,
    //         name: 'Система электронного документооборота',
    //         description: 'Система для электронного взаимодействия участников образовательного процесса.',
    //         url: 'https://docs.university.ru',
    //     },
    // ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        МАТЕРИАЛЬНО-ТЕХНИЧЕСКОЕ ОБЕСПЕЧЕНИЕ И ОСНАЩЕННОСТЬ ОБРАЗОВАТЕЛЬНОГО ПРОЦЕССА. <span className="font-extrabold text-primary-600">ДОСТУПНАЯ СРЕДА</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Табы для разделов */}
                {/* <div className="mb-8 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setActiveTab('facilities')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'facilities'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Учебные помещения
                    </button>
                    <button
                        onClick={() => setActiveTab('libraries')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'libraries'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Библиотеки
                    </button>
                    <button
                        onClick={() => setActiveTab('eios')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'eios'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        ЭИОС
                    </button>
                    <button
                        onClick={() => setActiveTab('accessible')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'accessible'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Доступная среда
                    </button>
                </div> */}

                {/* Учебные помещения */}
                {/* {activeTab === 'facilities' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Учебные помещения и лаборатории</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {facilities.map((facility) => (
                                <div key={facility.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h4>
                                    <p className="text-gray-600 mb-3">
                                        <strong>Адрес:</strong> {facility.address}
                                    </p>
                                    <p className="text-gray-600 mb-3">
                                        <strong>Оснащение:</strong> {facility.equipment}
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-700">
                                            {facility.accessible ? 'Обеспечен доступ для лиц с ОВЗ' : 'Доступ для лиц с ОВЗ ограничен'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Оснащение учебных аудиторий</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Мультимедийные проекторы и экраны</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Интерактивные доски</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Компьютеры с выходом в интернет</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Системы видеоконференцсвязи</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Лицензионное программное обеспечение</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Специализированное лабораторное оборудование</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )} */}

                {/* Библиотеки */}
                {/* {activeTab === 'libraries' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Библиотеки и информационные ресурсы</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {libraries.map((library) => (
                                <div key={library.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{library.name}</h4>
                                    <p className="text-gray-600 mb-3">
                                        <strong>Адрес:</strong> {library.address}
                                    </p>
                                    <p className="text-gray-600 mb-3">
                                        {library.description}
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-700">
                                            {library.accessible ? 'Обеспечен доступ для лиц с ОВЗ' : 'Доступ для лиц с ОВЗ ограничен'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Доступные электронные библиотечные системы</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span className="text-gray-800 font-medium">Университетская библиотека онлайн</span>
                                </a>
                                <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span className="text-gray-800 font-medium">Лань</span>
                                </a>
                                <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span className="text-gray-800 font-medium">eLibrary</span>
                                </a>
                                <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span className="text-gray-800 font-medium">Юрайт</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* ЭИОС */}
                {/* {activeTab === 'eios' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Электронная информационно-образовательная среда</h3>

                        <p className="text-gray-600 mb-6">
                            Электронная информационно-образовательная среда университета обеспечивает доступ к учебным планам, рабочим программам дисциплин, практик,
                            электронным учебным изданиям и ресурсам, а также фиксацию хода образовательного процесса, результатов промежуточной аттестации
                            и результатов освоения образовательных программ.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {eios.map((item) => (
                                <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
                                    <p className="text-gray-600 mb-3">
                                        {item.description}
                                    </p>
                                    <a href={item.url} className="text-primary-600 hover:text-primary-700 font-medium flex items-center mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Перейти в систему
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Доступ к ЭИОС</h4>
                            <p className="text-gray-600 mb-3">
                                Доступ к электронной информационно-образовательной среде университета предоставляется всем обучающимся и работникам университета.
                                Для доступа используется единая учетная запись, которая выдается при зачислении/приеме на работу.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium transition-colors hover:bg-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Вход в ЭИОС
                                </a>
                                <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 bg-white rounded-lg font-medium transition-colors hover:bg-primary-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Инструкция по использованию
                                </a>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Доступная среда */}
                {/* {activeTab === 'accessible' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Доступная среда</h3>

                        <p className="text-gray-600 mb-8">
                            Университет обеспечивает доступность для обучающихся с ограниченными возможностями здоровья и инвалидов всех форм образовательной,
                            социальной, культурной и бытовой сфер деятельности. Созданная среда отвечает нормативным требованиям и учитывает
                            индивидуальные потребности обучающихся с различными нозологиями.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Архитектурная доступность</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Пандусы и подъемники</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Широкие дверные проемы</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Специально оборудованные санитарно-гигиенические помещения</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Информационная доступность</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Версия сайта для слабовидящих</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Информационные таблички со шрифтом Брайля</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Визуальная система информирования и оповещения</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Специальное сопровождение</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Психолого-педагогическое сопровождение</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Медицинское сопровождение</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Социальное сопровождение</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Материально-техническое обеспечение для лиц с ОВЗ</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h5 className="text-lg font-medium text-gray-800 mb-2">Для лиц с нарушениями зрения</h5>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>- Специальные устройства для чтения «говорящих книг»</li>
                                        <li>- Компьютеры со специальными программами</li>
                                        <li>- Тактильные таблички</li>
                                        <li>- Увеличительные устройства</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h5 className="text-lg font-medium text-gray-800 mb-2">Для лиц с нарушениями слуха</h5>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>- Звукоусиливающая аппаратура</li>
                                        <li>- Мультимедийные средства</li>
                                        <li>- Визуальные средства информации</li>
                                        <li>- FM-системы</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h5 className="text-lg font-medium text-gray-800 mb-2">Для лиц с нарушениями опорно-двигательного аппарата</h5>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>- Специальные парты</li>
                                        <li>- Компьютеры с клавиатурой для лиц с ДЦП</li>
                                        <li>- Пандусы и поручни</li>
                                        <li>- Специальные стулья</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h5 className="text-lg font-medium text-gray-800 mb-2">Общие средства</h5>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>- Специализированное программное обеспечение</li>
                                        <li>- Электронные образовательные ресурсы</li>
                                        <li>- Адаптированные учебно-методические материалы</li>
                                        <li>- Система дистанционного обучения</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </section>
    );
}