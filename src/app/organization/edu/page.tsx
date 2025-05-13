'use client';

import React, { useState } from 'react';

export default function EduPage() {
    // Для табов с образовательными программами
    const [activeTab, setActiveTab] = useState<string>('bachelor');

    // Моковые данные образовательных программ
    const educationPrograms = {
        bachelor: [
            { code: '01.03.01', name: 'Математика', accreditation: 'Да', form: 'Очная', duration: '4 года' },
            { code: '09.03.01', name: 'Информатика и вычислительная техника', accreditation: 'Да', form: 'Очная/Заочная', duration: '4/5 лет' },
            { code: '38.03.01', name: 'Экономика', accreditation: 'Да', form: 'Очная/Очно-заочная', duration: '4/4,5 года' },
            { code: '40.03.01', name: 'Юриспруденция', accreditation: 'Да', form: 'Очная/Заочная', duration: '4/5 лет' },
        ],
        master: [
            { code: '01.04.01', name: 'Математика', accreditation: 'Да', form: 'Очная', duration: '2 года' },
            { code: '09.04.01', name: 'Информатика и вычислительная техника', accreditation: 'Да', form: 'Очная', duration: '2 года' },
            { code: '38.04.01', name: 'Экономика', accreditation: 'Да', form: 'Очная/Очно-заочная', duration: '2/2,5 года' },
        ],
        specialty: [
            { code: '31.05.01', name: 'Лечебное дело', accreditation: 'Да', form: 'Очная', duration: '6 лет' },
            { code: '33.05.01', name: 'Фармация', accreditation: 'Да', form: 'Очная', duration: '5 лет' },
        ],
        postgraduate: [
            { code: '01.06.01', name: 'Математика и механика', accreditation: 'Да', form: 'Очная/Заочная', duration: '3/4 года' },
            { code: '09.06.01', name: 'Информатика и вычислительная техника', accreditation: 'Да', form: 'Очная/Заочная', duration: '3/4 года' },
        ]
    };

    const getPrograms = () => {
        switch (activeTab) {
            case 'bachelor':
                return educationPrograms.bachelor;
            case 'master':
                return educationPrograms.master;
            case 'specialty':
                return educationPrograms.specialty;
            case 'postgraduate':
                return educationPrograms.postgraduate;
            default:
                return [];
        }
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
                        Сведения об образовательной организации
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        <span className="font-extrabold text-primary-600">ОБРАЗОВАНИЕ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Информация о реализуемых уровнях образования, формах и сроках обучения, а также об описании образовательных программ
                    </p>
                </div>

                {/* Общая информация об образовании */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Общая информация</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Уровни образования</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Бакалавриат</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Магистратура</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Специалитет</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Аспирантура</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Докторантура</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Формы обучения</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Очная</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Очно-заочная</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Заочная</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Нормативные сроки обучения</h4>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Уровень образования
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Очная форма
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Очно-заочная форма
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Заочная форма
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Бакалавриат
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            4 года
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            4,5 года
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            5 лет
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Магистратура
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            2 года
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            2,5 года
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            2,5 года
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Специалитет
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            5-6 лет
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            6 лет
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            6 лет
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Аспирантура
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            3-4 года
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            -
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            4 года
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Образовательные программы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Образовательные программы</h3>

                    {/* Табы для переключения между уровнями образования */}
                    <div className="mb-8 flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setActiveTab('bachelor')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'bachelor'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            Бакалавриат
                        </button>
                        <button
                            onClick={() => setActiveTab('master')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'master'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            Магистратура
                        </button>
                        <button
                            onClick={() => setActiveTab('specialty')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'specialty'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            Специалитет
                        </button>
                        <button
                            onClick={() => setActiveTab('postgraduate')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'postgraduate'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            Аспирантура
                        </button>
                    </div>

                    {/* Таблица с образовательными программами */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Код
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Направление подготовки
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Аккредитация
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Форма обучения
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Срок обучения
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Документы
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {getPrograms().map((program, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {program.code}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {program.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {program.accreditation}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {program.form}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {program.duration}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600">
                                            <div className="flex space-x-2">
                                                <a href="#" className="hover:underline">Описание</a>
                                                <a href="#" className="hover:underline">Учебный план</a>
                                                <a href="#" className="hover:underline">График</a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Язык обучения */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Языки обучения</h3>
                    <p className="text-gray-700 mb-4">
                        Образовательная деятельность по образовательным программам осуществляется на государственном языке Российской Федерации – русском языке.
                    </p>
                    <p className="text-gray-700">
                        В рамках отдельных образовательных программ могут преподаваться дисциплины на иностранных языках в соответствии с образовательной программой и рабочей программой дисциплины.
                    </p>
                </div>
            </div>
        </section>
    );
}
