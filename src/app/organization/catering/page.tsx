'use client';

import React from 'react';

export default function CateringPage() {
    // Моковые данные о пунктах питания
    const cateringPoints = [
        {
            id: 1,
            name: 'Столовая учебного корпуса №1',
            address: 'Москва, ул. Университетская, д.1',
            workingHours: 'Пн-Пт: 8:30 - 18:00, Сб: 9:00 - 15:00, Вс: выходной',
            seats: 200,
            options: ['Горячие блюда', 'Салат-бар', 'Выпечка', 'Напитки']
        },
        {
            id: 2,
            name: 'Столовая учебного корпуса №2',
            address: 'Москва, ул. Студенческая, д.5',
            workingHours: 'Пн-Пт: 9:00 - 17:00, Сб-Вс: выходной',
            seats: 150,
            options: ['Горячие блюда', 'Салаты', 'Десерты', 'Напитки']
        },
        {
            id: 3,
            name: 'Кафе "Студент"',
            address: 'Москва, ул. Университетская, д.1',
            workingHours: 'Пн-Пт: 8:00 - 20:00, Сб-Вс: 10:00 - 18:00',
            seats: 80,
            options: ['Кофе', 'Чай', 'Закуски', 'Десерты', 'Выпечка']
        },
        {
            id: 4,
            name: 'Буфет научной библиотеки',
            address: 'Москва, ул. Университетская, д.1',
            workingHours: 'Пн-Пт: 9:00 - 17:00, Сб-Вс: выходной',
            seats: 30,
            options: ['Закуски', 'Выпечка', 'Напитки']
        },
        {
            id: 5,
            name: 'Столовая в общежитии №1',
            address: 'Москва, ул. Студенческая, д.10',
            workingHours: 'Пн-Вс: 8:00 - 22:00',
            seats: 120,
            options: ['Горячие блюда', 'Салаты', 'Выпечка', 'Напитки']
        }
    ];

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
                        Сведения об образовательной организации
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОРГАНИЗАЦИЯ <span className="font-extrabold text-primary-600">ПИТАНИЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Информация об условиях питания обучающихся, в том числе инвалидов и лиц с ограниченными возможностями здоровья
                    </p>
                </div>

                {/* Общая информация о питании */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Организация питания</h3>

                    <p className="text-gray-700 mb-6">
                        В университете созданы все необходимые условия для организации питания обучающихся и сотрудников.
                        На территории университета функционируют столовые, кафе и буфеты, предлагающие разнообразное меню,
                        включая диетические и вегетарианские блюда. Все пункты питания оснащены современным оборудованием и
                        соответствуют санитарно-эпидемиологическим требованиям.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">5</span>
                            <span className="text-gray-700">Столовых и кафе</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">7</span>
                            <span className="text-gray-700">Буфетов</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">580+</span>
                            <span className="text-gray-700">Посадочных мест</span>
                        </div>
                    </div>
                </div>

                {/* Список пунктов питания */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Пункты питания</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {cateringPoints.map((point) => (
                            <div key={point.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{point.name}</h4>
                                <div className="flex items-center text-sm text-gray-700 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{point.address}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-700 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{point.workingHours}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-700 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>{point.seats} посадочных мест</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {point.options.map((option, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full text-xs">
                                                {option}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Примерное меню */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Примерное меню столовых</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Завтрак</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Каша (овсяная/гречневая/рисовая) - от 60 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Омлет/яичница - от 85 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Сырники/блины - от 90 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Чай/кофе - от 45 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Выпечка - от 50 ₽</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Обед</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Супы (борщ/солянка/щи/уха) - от 90 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Вторые блюда (мясные/рыбные) - от 140 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Гарниры - от 50 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Салаты - от 70 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Напитки (компот/сок/чай) - от 45 ₽</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Ужин</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Вторые блюда - от 120 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Гарниры - от 50 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Салаты - от 70 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Выпечка - от 50 ₽</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">Напитки - от 45 ₽</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <p className="text-gray-700 mb-4">
                            * Стоимость указана ориентировочно и может отличаться в разных пунктах питания.
                            Полное меню и актуальные цены представлены в столовых и кафе университета.
                        </p>
                        <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center inline-block">
                            Ознакомиться с полным меню
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Информация для лиц с ОВЗ */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Организация питания для лиц с ОВЗ и инвалидов</h3>

                    <p className="text-gray-700 mb-6">
                        Все пункты питания университета адаптированы для посещения лицами с ограниченными возможностями здоровья и инвалидами:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Доступность помещений</h4>
                                <p className="text-gray-600">
                                    Пункты питания оборудованы пандусами, широкими проходами для инвалидных колясок, имеются специально оборудованные места для приема пищи.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Специальное меню</h4>
                                <p className="text-gray-600">
                                    В столовых предлагается диетическое меню с учетом медицинских рекомендаций и особенностей здоровья обучающихся.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Помощь персонала</h4>
                                <p className="text-gray-600">
                                    Сотрудники столовых и кафе готовы оказать необходимую помощь в обслуживании лиц с ограниченными возможностями здоровья.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Информационная доступность</h4>
                                <p className="text-gray-600">
                                    Меню и информация о питании доступны в различных форматах, включая крупный шрифт и онлайн-версии.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
