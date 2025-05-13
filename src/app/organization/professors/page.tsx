'use client';

import React, { useState } from 'react';

export default function ProfessorsPage() {
    // Состояние для фильтрации по кафедрам
    const [activeTab, setActiveTab] = useState<string>('all');

    // Моковые данные о кафедрах
    const departments = [
        { id: 'all', name: 'Все кафедры' },
        { id: 'math', name: 'Кафедра математики' },
        { id: 'physics', name: 'Кафедра физики' },
        { id: 'it', name: 'Кафедра информационных технологий' },
        { id: 'economics', name: 'Кафедра экономики' },
        { id: 'law', name: 'Кафедра права' },
    ];

    // Моковые данные о преподавателях
    const professors = [
        {
            id: 1,
            name: 'Иванов Иван Иванович',
            department: 'math',
            position: 'Заведующий кафедрой',
            degree: 'Доктор физико-математических наук',
            rank: 'Профессор',
            subjects: 'Математический анализ, Дифференциальные уравнения',
            education: 'МГУ им. М.В. Ломоносова, 1995, Математика',
            experience: '25 лет',
            qualification: 'Современные методы преподавания математических дисциплин, 2021',
        },
        {
            id: 2,
            name: 'Петрова Анна Сергеевна',
            department: 'math',
            position: 'Доцент',
            degree: 'Кандидат физико-математических наук',
            rank: 'Доцент',
            subjects: 'Алгебра, Геометрия, Теория чисел',
            education: 'МГУ им. М.В. Ломоносова, 2000, Математика',
            experience: '20 лет',
            qualification: 'Цифровые технологии в образовании, 2020',
        },
        {
            id: 3,
            name: 'Сидоров Петр Алексеевич',
            department: 'physics',
            position: 'Заведующий кафедрой',
            degree: 'Доктор физико-математических наук',
            rank: 'Профессор',
            subjects: 'Общая физика, Теоретическая механика',
            education: 'МФТИ, 1998, Физика',
            experience: '23 года',
            qualification: 'Инновационные методы преподавания физики, 2019',
        },
        {
            id: 4,
            name: 'Кузнецова Елена Владимировна',
            department: 'physics',
            position: 'Доцент',
            degree: 'Кандидат физико-математических наук',
            rank: 'Доцент',
            subjects: 'Квантовая физика, Электродинамика',
            education: 'МИФИ, 2003, Физика',
            experience: '18 лет',
            qualification: 'Применение информационных технологий в преподавании физики, 2020',
        },
        {
            id: 5,
            name: 'Новиков Сергей Дмитриевич',
            department: 'it',
            position: 'Заведующий кафедрой',
            degree: 'Доктор технических наук',
            rank: 'Профессор',
            subjects: 'Программирование, Базы данных',
            education: 'МГТУ им. Н.Э. Баумана, 1997, Информатика и вычислительная техника',
            experience: '24 года',
            qualification: 'Современные технологии программирования, 2021',
        },
        {
            id: 6,
            name: 'Морозова Ольга Николаевна',
            department: 'it',
            position: 'Доцент',
            degree: 'Кандидат технических наук',
            rank: 'Доцент',
            subjects: 'Компьютерные сети, Информационная безопасность',
            education: 'МГТУ им. Н.Э. Баумана, 2005, Информационные системы и технологии',
            experience: '16 лет',
            qualification: 'Кибербезопасность и защита информации, 2022',
        },
        {
            id: 7,
            name: 'Соколов Александр Игоревич',
            department: 'economics',
            position: 'Заведующий кафедрой',
            degree: 'Доктор экономических наук',
            rank: 'Профессор',
            subjects: 'Макроэкономика, Мировая экономика',
            education: 'РЭУ им. Г.В. Плеханова, 1996, Экономика',
            experience: '25 лет',
            qualification: 'Актуальные проблемы экономики, 2021',
        },
        {
            id: 8,
            name: 'Федорова Наталья Андреевна',
            department: 'law',
            position: 'Заведующий кафедрой',
            degree: 'Доктор юридических наук',
            rank: 'Профессор',
            subjects: 'Теория государства и права, Конституционное право',
            education: 'МГУ им. М.В. Ломоносова, 1994, Юриспруденция',
            experience: '27 лет',
            qualification: 'Особенности преподавания юридических дисциплин, 2020',
        }
    ];

    // Функция для фильтрации преподавателей по кафедре
    const filteredProfessors = activeTab === 'all'
        ? professors
        : professors.filter(professor => professor.department === activeTab);

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
                        ПЕДАГОГИЧЕСКИЙ <span className="font-extrabold text-primary-600">СОСТАВ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Информация о персональном составе педагогических работников
                    </p>
                </div>

                {/* Общая статистика */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Общие сведения о педагогических работниках</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">435</span>
                            <span className="text-gray-700">Общее количество преподавателей</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">82%</span>
                            <span className="text-gray-700">Доля преподавателей с учеными степенями и званиями</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">25%</span>
                            <span className="text-gray-700">Доля докторов наук, профессоров</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <span className="text-4xl font-bold text-primary-600 block mb-2">48</span>
                            <span className="text-gray-700">Средний возраст преподавателей</span>
                        </div>
                    </div>
                </div>

                {/* Список преподавателей */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Персональный состав педагогических работников</h3>

                    {/* Фильтр по кафедрам */}
                    <div className="mb-8 overflow-x-auto">
                        <div className="flex gap-2 min-w-max">
                            {departments.map((department) => (
                                <button
                                    key={department.id}
                                    onClick={() => setActiveTab(department.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === department.id
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {department.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Таблица преподавателей */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ФИО
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Должность
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ученая степень, звание
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Преподаваемые дисциплины
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Образование
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Стаж
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProfessors.map((professor) => (
                                    <tr key={professor.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {professor.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {professor.position}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <div>{professor.degree}</div>
                                            <div>{professor.rank}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {professor.subjects}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {professor.education}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {professor.experience}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Пагинация */}
                    <nav className="flex justify-center mt-8">
                        <ul className="flex">
                            <li>
                                <a href="#" className="px-3 py-2 mr-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Назад
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 bg-primary-600 text-white border border-primary-600 text-sm font-medium hover:bg-primary-700">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    2
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    3
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-3 py-2 ml-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Вперед
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}
