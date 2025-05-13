'use client';

import React from 'react';

export default function StructurePage() {
    // Моковые данные о структурных подразделениях
    const departments = [
        {
            id: 1,
            name: 'Институт экономики и управления',
            head: 'Иванов Иван Иванович',
            position: 'Директор института',
            contact: '+7 (999) 123-45-67'
        },
        {
            id: 2,
            name: 'Институт технических наук',
            head: 'Петров Петр Петрович',
            position: 'Директор института',
            contact: '+7 (999) 123-45-68'
        },
        {
            id: 3,
            name: 'Институт гуманитарных наук',
            head: 'Сидорова Мария Ивановна',
            position: 'Директор института',
            contact: '+7 (999) 123-45-69'
        },
        {
            id: 4,
            name: 'Управление международного сотрудничества',
            head: 'Кузнецов Сергей Александрович',
            position: 'Начальник управления',
            contact: '+7 (999) 123-45-70'
        },
        {
            id: 5,
            name: 'Учебно-методическое управление',
            head: 'Николаева Елена Владимировна',
            position: 'Начальник управления',
            contact: '+7 (999) 123-45-71'
        },
        {
            id: 6,
            name: 'Управление научных исследований',
            head: 'Смирнов Алексей Константинович',
            position: 'Начальник управления',
            contact: '+7 (999) 123-45-72'
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
                        СТРУКТУРА И <span className="font-extrabold text-primary-600">ОРГАНЫ УПРАВЛЕНИЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Управление университетом осуществляется в соответствии с законодательством Российской Федерации и Уставом на принципах сочетания единоначалия и коллегиальности.
                    </p>
                </div>

                {/* Блок с ректоратом */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Ректорат</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-primary-600 mb-2">Ректор</h4>
                            <p className="text-gray-800 font-medium mb-1">[ФИО ректора]</p>
                            <p className="text-gray-600 mb-3">Доктор [отрасль] наук, профессор</p>
                            <p className="text-gray-700"><strong>Телефон:</strong> [номер телефона]</p>
                            <p className="text-gray-700"><strong>Email:</strong> [email]</p>
                            <p className="text-gray-700"><strong>Часы приема:</strong> [дни и часы приема]</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-primary-600 mb-2">Ученый совет</h4>
                            <p className="text-gray-600 mb-2">
                                Ученый совет является коллегиальным органом управления университетом, осуществляющим общее руководство университетом.
                            </p>
                            <p className="text-gray-700"><strong>Председатель:</strong> [ФИО ректора]</p>
                            <p className="text-gray-700"><strong>Ученый секретарь:</strong> [ФИО]</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-primary-600 mb-2">Проректор по учебной работе</h4>
                            <p className="text-gray-800 font-medium mb-1">[ФИО]</p>
                            <p className="text-gray-600 mb-2">Доктор [отрасль] наук, профессор</p>
                            <p className="text-gray-700 text-sm"><strong>Телефон:</strong> [номер телефона]</p>
                            <p className="text-gray-700 text-sm"><strong>Email:</strong> [email]</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-primary-600 mb-2">Проректор по научной работе</h4>
                            <p className="text-gray-800 font-medium mb-1">[ФИО]</p>
                            <p className="text-gray-600 mb-2">Доктор [отрасль] наук, профессор</p>
                            <p className="text-gray-700 text-sm"><strong>Телефон:</strong> [номер телефона]</p>
                            <p className="text-gray-700 text-sm"><strong>Email:</strong> [email]</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-primary-600 mb-2">Проректор по международным связям</h4>
                            <p className="text-gray-800 font-medium mb-1">[ФИО]</p>
                            <p className="text-gray-600 mb-2">Доктор [отрасль] наук, профессор</p>
                            <p className="text-gray-700 text-sm"><strong>Телефон:</strong> [номер телефона]</p>
                            <p className="text-gray-700 text-sm"><strong>Email:</strong> [email]</p>
                        </div>
                    </div>
                </div>

                {/* Структурные подразделения */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Структура университета</h3>

                    <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Основные структурные подразделения:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Институты и факультеты</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Кафедры</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Научно-исследовательские институты и центры</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Административные подразделения</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Общежития</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                <p className="text-gray-700">Объекты социальной инфраструктуры</p>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Руководители структурных подразделений</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Подразделение
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Руководитель
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Должность
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Контакты
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {departments.map((dept) => (
                                    <tr key={dept.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {dept.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {dept.head}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {dept.position}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {dept.contact}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Документы о структуре */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Положения о структурных подразделениях</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <a href="#" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-gray-800 font-medium text-center">Положение об институтах и факультетах</p>
                        </a>
                        <a href="#" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-gray-800 font-medium text-center">Положение о кафедрах</p>
                        </a>
                        <a href="#" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-gray-800 font-medium text-center">Положение об ученом совете</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
