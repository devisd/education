'use client';

import React from 'react';

export default function VacantPlacesPage() {
    // Моковые данные о вакантных местах
    const vacantPlacesData = [
        {
            id: 1,
            faculty: 'Институт информационных технологий',
            specialty: '09.03.01 Информатика и вычислительная техника',
            level: 'Бакалавриат',
            course: 1,
            budget: 5,
            paid: 10,
            target: 2
        },
        {
            id: 2,
            faculty: 'Институт информационных технологий',
            specialty: '09.03.01 Информатика и вычислительная техника',
            level: 'Бакалавриат',
            course: 2,
            budget: 3,
            paid: 7,
            target: 0
        },
        {
            id: 3,
            faculty: 'Институт информационных технологий',
            specialty: '09.03.04 Программная инженерия',
            level: 'Бакалавриат',
            course: 1,
            budget: 4,
            paid: 12,
            target: 1
        },
        {
            id: 4,
            faculty: 'Экономический факультет',
            specialty: '38.03.01 Экономика',
            level: 'Бакалавриат',
            course: 1,
            budget: 2,
            paid: 15,
            target: 0
        },
        {
            id: 5,
            faculty: 'Юридический факультет',
            specialty: '40.03.01 Юриспруденция',
            level: 'Бакалавриат',
            course: 1,
            budget: 3,
            paid: 8,
            target: 1
        },
        {
            id: 6,
            faculty: 'Институт информационных технологий',
            specialty: '09.04.01 Информатика и вычислительная техника',
            level: 'Магистратура',
            course: 1,
            budget: 2,
            paid: 5,
            target: 1
        },
        {
            id: 7,
            faculty: 'Экономический факультет',
            specialty: '38.04.01 Экономика',
            level: 'Магистратура',
            course: 1,
            budget: 1,
            paid: 7,
            target: 0
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
                        ВАКАНТНЫЕ МЕСТА ДЛЯ <span className="font-extrabold text-primary-600">ПРИЕМА (ПЕРЕВОДА)</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Информация о количестве вакантных мест для приема (перевода) обучающихся по каждой образовательной программе, профессии, специальности
                    </p>
                </div>

                {/* Информация о вакантных местах */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Вакантные места для приема (перевода)</h3>

                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-5 mb-8">
                        <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-primary-700">
                                Информация о количестве вакантных мест для приема (перевода) по каждой образовательной программе обновляется ежемесячно.
                                Данные представлены по состоянию на 01.05.2023.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Факультет/Институт
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Специальность/Направление
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Уровень
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Курс
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Бюджет
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Платное
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Целевое
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {vacantPlacesData.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {item.faculty}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {item.specialty}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {item.level}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                            {item.course}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                                                {item.budget}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <span className="bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">
                                                {item.paid}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <span className="bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                                                {item.target}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Условия перевода */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Правила перевода</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Условия перевода из других образовательных организаций</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                                    <p className="text-gray-700">Наличие вакантных мест для перевода по соответствующей образовательной программе</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                                    <p className="text-gray-700">Отсутствие академической задолженности</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                                    <p className="text-gray-700">Успешное прохождение аттестационных испытаний</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                                    <p className="text-gray-700">Соответствие уровня образования требованиям образовательной программы</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Необходимые документы</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Заявление о переводе</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Справка о периоде обучения</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Копия зачетной книжки</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Документ, удостоверяющий личность</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Иные документы, подтверждающие образовательные достижения</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Скачать форму заявления
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Контактная информация */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <p className="text-gray-700 mb-4">
                            По вопросам перевода можно обратиться в учебно-методическое управление университета:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium text-gray-800">Учебно-методическое управление</p>
                                <p className="text-gray-700">Адрес: Москва, ул. Университетская, д.1, каб. 205</p>
                                <p className="text-gray-700">Телефон: +7 (495) 123-45-67</p>
                                <p className="text-gray-700">Email: transfer@university.ru</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Часы приема документов:</p>
                                <p className="text-gray-700">Понедельник - пятница: 9:00 - 17:00</p>
                                <p className="text-gray-700">Перерыв: 13:00 - 14:00</p>
                                <p className="text-gray-700">Суббота, воскресенье: выходные дни</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
