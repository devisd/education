// 'use client';

// import React, { useState } from 'react';

export default function DocsPage() {
    // Кастомные табы для документов
    // const [activeTab, setActiveTab] = useState<string>('founding');
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        <span className="font-extrabold text-gray-800">ДОКУМЕНТЫ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Табы для категорий документов */}
                {/* <div className="mb-8 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setActiveTab('founding')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'founding'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Учредительные документы
                    </button>
                    <button
                        onClick={() => setActiveTab('local')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'local'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Локальные нормативные акты
                    </button>
                    <button
                        onClick={() => setActiveTab('reports')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'reports'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Отчетная документация
                    </button>
                </div> */}

                {/* Учредительные документы */}
                {/* {activeTab === 'founding' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Учредительные документы</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Устав университета</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Основной документ, регламентирующий деятельность образовательной организации</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span>Открыть документ</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>

                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Лицензия</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Лицензия на осуществление образовательной деятельности №[номер] от [дата]</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span>Открыть документ</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>

                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Аккредитация</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Свидетельство о государственной аккредитации №[номер] от [дата]</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span>Открыть документ</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                )} */}

                {/* Локальные нормативные акты */}
                {/* {activeTab === 'local' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Локальные нормативные акты</h3>

                        <div className="grid grid-cols-1 gap-4">
                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Правила внутреннего распорядка обучающихся</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Правила внутреннего трудового распорядка</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Коллективный договор</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Положение о порядке оказания платных образовательных услуг</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Правила приема обучающихся</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Режим занятий обучающихся</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-800 font-medium">Положение о текущем контроле успеваемости и промежуточной аттестации</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                )} */}

                {/* Отчетная документация */}
                {/* {activeTab === 'reports' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Отчетная документация</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Отчет о результатах самообследования</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Ежегодный отчет о деятельности образовательной организации за [год] год</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span>Дата составления: [дата]</span>
                                </div>
                            </a>

                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Документы о порядке оказания платных образовательных услуг</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Образцы договоров, стоимость обучения, порядок оказания платных образовательных услуг</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span>Дата обновления: [дата]</span>
                                </div>
                            </a>

                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Предписания органов контроля</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Предписания органов, осуществляющих государственный контроль в сфере образования</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span className="text-gray-500 italic">Предписания отсутствуют</span>
                                </div>
                            </a>

                            <a href="#" className="flex flex-col p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800 ml-3">Отчеты об исполнении предписаний</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Отчеты образовательной организации об исполнении предписаний органов контроля</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                                    <span className="text-gray-500 italic">Отчеты отсутствуют</span>
                                </div>
                            </a>
                        </div>
                    </div>
                )} */}
            </div>
        </section>
    );
}