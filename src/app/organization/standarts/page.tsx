// 'use client';

// import React from 'react';

export default function StandartsPage() {
    // Моковые данные образовательных стандартов
    // const standards = [
    //     {
    //         code: '01.00.00',
    //         name: 'Математика и механика',
    //         link: '#'
    //     },
    //     {
    //         code: '09.00.00',
    //         name: 'Информатика и вычислительная техника',
    //         link: '#'
    //     },
    //     {
    //         code: '38.00.00',
    //         name: 'Экономика и управление',
    //         link: '#'
    //     },
    //     {
    //         code: '40.00.00',
    //         name: 'Юриспруденция',
    //         link: '#'
    //     },
    //     {
    //         code: '44.00.00',
    //         name: 'Образование и педагогические науки',
    //         link: '#'
    //     },
    //     {
    //         code: '45.00.00',
    //         name: 'Языкознание и литературоведение',
    //         link: '#'
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
                        ОБРАЗОВАТЕЛЬНЫЕ <span className="font-extrabold text-primary-600">СТАНДАРТЫ И ТРЕБОВАНИЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Информация о ФГОС */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Федеральные государственные образовательные стандарты</h3>

                    <p className="text-gray-700 mb-6">
                        Образовательная деятельность в университете осуществляется в соответствии с федеральными государственными образовательными стандартами (ФГОС), которые представляют собой совокупность требований, обязательных при реализации основных образовательных программ.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Код
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Наименование укрупненной группы специальностей/направлений
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Документы
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {standards.map((standard, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {standard.code}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {standard.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                                            <a href={standard.link} className="hover:underline flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                ФГОС
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> */}

                {/* Собственные образовательные стандарты */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Собственные образовательные стандарты</h3>

                    <div className="flex p-4 mb-6 bg-blue-50 rounded-lg border border-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-blue-700">
                            В соответствии с частью 10 статьи 11 Федерального закона от 29.12.2012 №273-ФЗ "Об образовании в Российской Федерации" образовательная организация не реализует образовательные программы на основе собственных образовательных стандартов.
                        </p>
                    </div>
                </div> */}

                {/* Требования к результатам освоения образовательных программ */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Требования к результатам освоения образовательных программ</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 font-bold">1</span>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Универсальные компетенции</h4>
                            </div>
                            <p className="text-gray-600">
                                Универсальные компетенции отражают запросы общества и личности к общекультурным и социально-личностным качествам выпускника.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Системное и критическое мышление</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Разработка и реализация проектов</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Командная работа и лидерство</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 font-bold">2</span>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Общепрофессиональные компетенции</h4>
                            </div>
                            <p className="text-gray-600">
                                Общепрофессиональные компетенции отражают запросы рынка труда в части владения выпускниками основами профессиональной деятельности.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Применение фундаментальных знаний</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Проектная деятельность</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Решение стандартных задач</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 font-bold">3</span>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Профессиональные компетенции</h4>
                            </div>
                            <p className="text-gray-600">
                                Профессиональные компетенции отражают запросы рынка труда в части готовности выпускника к выполнению конкретных профессиональных задач.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Производственно-технологическая деятельность</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Организационно-управленческая деятельность</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Научно-исследовательская деятельность</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
