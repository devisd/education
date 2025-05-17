// 'use client';

// import React from 'react';

export default function InternationalCooperationPage() {
    // Моковые данные о международном сотрудничестве
    // const partnerUniversities = [
    //     { id: 1, name: 'Берлинский технический университет', country: 'Германия', programTypes: ['Обмен студентами', 'Совместные исследования'] },
    //     { id: 2, name: 'Парижский университет Сорбонна', country: 'Франция', programTypes: ['Обмен студентами', 'Обмен преподавателями', 'Летние школы'] },
    //     { id: 3, name: 'Оксфордский университет', country: 'Великобритания', programTypes: ['Научные конференции', 'Стажировки'] },
    //     { id: 4, name: 'Токийский университет', country: 'Япония', programTypes: ['Совместные исследования', 'Обмен студентами'] },
    //     { id: 5, name: 'Пекинский университет', country: 'Китай', programTypes: ['Обмен студентами', 'Языковые курсы'] },
    //     { id: 6, name: 'Миланский технический университет', country: 'Италия', programTypes: ['Совместные программы', 'Стажировки'] },
    //     { id: 7, name: 'Барселонский университет', country: 'Испания', programTypes: ['Обмен студентами', 'Летние школы'] },
    //     { id: 8, name: 'Стэнфордский университет', country: 'США', programTypes: ['Научные проекты', 'Стажировки'] }
    // ];

    // // Моковые данные о международных программах
    // const internationalPrograms = [
    //     {
    //         id: 1,
    //         name: 'Программа двойных дипломов',
    //         description: 'Возможность получить два диплома: российский и зарубежного вуза-партнера',
    //         duration: '1-2 года',
    //         requirements: 'Владение иностранным языком (B2+), высокая успеваемость'
    //     },
    //     {
    //         id: 2,
    //         name: 'Программа академического обмена',
    //         description: 'Обучение в зарубежном вузе-партнере в течение 1-2 семестров',
    //         duration: '1-2 семестра',
    //         requirements: 'Владение иностранным языком (B1+), средний балл не ниже 4.0'
    //     },
    //     {
    //         id: 3,
    //         name: 'Летние школы',
    //         description: 'Краткосрочные образовательные программы в период летних каникул',
    //         duration: '2-8 недель',
    //         requirements: 'Базовое владение иностранным языком (A2+)'
    //     },
    //     {
    //         id: 4,
    //         name: 'Стажировки в зарубежных компаниях',
    //         description: 'Прохождение практики в международных компаниях и организациях',
    //         duration: '1-6 месяцев',
    //         requirements: 'Владение иностранным языком (B2+), профильные знания'
    //     }
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
                        МЕЖДУНАРОДНОЕ <span className="font-extrabold text-primary-600">СОТРУДНИЧЕСТВО</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Общая информация */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">О международном сотрудничестве</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">50+</span>
                            <span className="text-gray-700">Стран-партнеров</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">120+</span>
                            <span className="text-gray-700">Вузов-партнеров</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">30+</span>
                            <span className="text-gray-700">Программ академической мобильности</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-gray-700 mb-4">
                            Университет ведет активную международную деятельность, развивая сотрудничество с ведущими зарубежными университетами,
                            научными центрами и международными организациями. Основные направления международного сотрудничества включают:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Реализация совместных образовательных программ и программ двойных дипломов</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Академическая мобильность студентов и преподавателей</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Проведение совместных научных исследований</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Организация международных конференций и семинаров</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Участие в международных образовательных и научных проектах</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Привлечение иностранных преподавателей к образовательному процессу</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Зарубежные партнеры */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Зарубежные партнеры</h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Наименование университета
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Страна
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Направления сотрудничества
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {partnerUniversities.map((university) => (
                                    <tr key={university.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {university.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {university.country}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <div className="flex flex-wrap gap-2">
                                                {university.programTypes.map((type, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <a href="#" className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Полный список партнеров
                        </a>
                    </div>
                </div> */}

                {/* Международные программы */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Международные образовательные программы</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {internationalPrograms.map((program) => (
                            <div key={program.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-md transition-all">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{program.name}</h4>
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <div className="flex items-center text-sm text-gray-700 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span><strong>Продолжительность:</strong> {program.duration}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span><strong>Требования:</strong> {program.requirements}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Обучение иностранных граждан */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Обучение иностранных граждан</h3>

                    <p className="text-gray-700 mb-6">
                        Университет осуществляет подготовку иностранных граждан по всем реализуемым образовательным программам.
                        Обучение ведется на русском языке, а также на английском языке по отдельным образовательным программам.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Условия поступления</h4>
                            <p className="text-gray-600">
                                Информация о правилах приема, необходимых документах, экзаменах и сроках подачи заявлений для иностранных абитуриентов.
                            </p>
                            <div className="mt-4">
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center text-sm">
                                    Подробнее
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Языковая подготовка</h4>
                            <p className="text-gray-600">
                                Подготовительные курсы по русскому языку для иностранных граждан, планирующих обучение на русскоязычных программах.
                            </p>
                            <div className="mt-4">
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center text-sm">
                                    Подробнее
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656.126-1.283.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Поддержка иностранных студентов</h4>
                            <p className="text-gray-600">
                                Услуги по адаптации, визовой поддержке, медицинскому страхованию и другие сервисы для иностранных обучающихся.
                            </p>
                            <div className="mt-4">
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center text-sm">
                                    Подробнее
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
