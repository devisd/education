// 'use client';

// import React from 'react';

export default function FinancialPage() {
    // Данные о годовом бюджете
    // const financialData = {
    //     totalBudget: '2 560 543 000',
    //     fromFederal: '1 853 624 000',
    //     fromServices: '706 919 000',
    //     year: '2023'
    // };

    // // Моковые данные о структуре расходов
    // const expenses = [
    //     { category: 'Оплата труда и начисления', amount: '1 325 642 000', percent: '51.8' },
    //     { category: 'Стипендиальное обеспечение', amount: '289 341 000', percent: '11.3' },
    //     { category: 'Содержание имущества', amount: '312 386 000', percent: '12.2' },
    //     { category: 'Коммунальные услуги', amount: '158 754 000', percent: '6.2' },
    //     { category: 'Приобретение оборудования', amount: '183 523 000', percent: '7.2' },
    //     { category: 'Капитальный ремонт', amount: '87 058 000', percent: '3.4' },
    //     { category: 'Прочие расходы', amount: '203 839 000', percent: '7.9' }
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
                        ФИНАНСОВО-ХОЗЯЙСТВЕННАЯ <span className="font-extrabold text-primary-600">ДЕЯТЕЛЬНОСТЬ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* План ФХД */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">План финансово-хозяйственной деятельности</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Информация о плане ФХД</h4>
                            <p className="text-gray-600 mb-4">
                                План финансово-хозяйственной деятельности образовательной организации составляется и утверждается в порядке,
                                определенном Министерством науки и высшего образования Российской Федерации.
                            </p>
                            <p className="text-gray-600 mb-6">
                                План содержит сведения о планируемых на финансовый год поступлениях, выплатах и остатках средств.
                            </p>

                            <div className="flex gap-4">
                                <a href="#" className="inline-flex items-center px-5 py-2 bg-primary-600 text-white rounded-lg font-medium transition-colors hover:bg-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    План ФХД на {financialData.year} год
                                </a>
                                <a href="#" className="inline-flex items-center px-5 py-2 border border-primary-600 text-primary-600 bg-white rounded-lg font-medium transition-colors hover:bg-primary-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                    </svg>
                                    Архив планов ФХД
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Объем средств на {financialData.year} год</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700 font-medium">Общий объем средств</span>
                                    <span className="text-xl font-bold text-primary-600">{financialData.totalBudget} ₽</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Субсидия на выполнение государственного задания</span>
                                    <span className="font-medium text-gray-900">{financialData.fromFederal} ₽</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Средства от приносящей доход деятельности</span>
                                    <span className="font-medium text-gray-900">{financialData.fromServices} ₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Структура доходов и расходов */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Структура доходов и расходов</h3> */}

                {/* <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Структура расходов на {financialData.year} год</h4>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Наименование расходов
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Сумма (руб.)
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            % от общих расходов
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {expenses.map((expense, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {expense.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {expense.amount} ₽
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {expense.percent}%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                {/* Доходы от образовательной деятельности */}
                {/* <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Доходы от образовательной деятельности</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-primary-600 font-bold text-2xl mb-1">1 432 543 000 ₽</div>
                                <div className="text-gray-600 text-sm">Общий объем</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-primary-600 font-bold text-2xl mb-1">912 375 000 ₽</div>
                                <div className="text-gray-600 text-sm">За счет бюджетных ассигнований</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-primary-600 font-bold text-2xl mb-1">518 421 000 ₽</div>
                                <div className="text-gray-600 text-sm">По договорам об образовании</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-primary-600 font-bold text-2xl mb-1">1 747 000 ₽</div>
                                <div className="text-gray-600 text-sm">От иностранных граждан</div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}

                {/* Отчеты */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Финансовая отчетность</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="#" className="flex flex-col p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Годовая бухгалтерская отчетность</h4>
                            </div>
                            <p className="text-gray-600 mb-4">Отчет о финансовых результатах деятельности учреждения за {financialData.year} год</p>
                            <div className="mt-auto pt-3 text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                Скачать отчет
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Отчет о выполнении государственного задания</h4>
                            </div>
                            <p className="text-gray-600 mb-4">Отчет о выполнении государственного задания на оказание государственных услуг</p>
                            <div className="mt-auto pt-3 text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                Скачать отчет
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Отчет о результатах деятельности</h4>
                            </div>
                            <p className="text-gray-600 mb-4">Отчет о результатах деятельности учреждения и об использовании закрепленного имущества</p>
                            <div className="mt-auto pt-3 text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                Скачать отчет
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Архив финансовых документов</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <span className="text-gray-800">Архив планов ФХД (2018-2022)</span>
                            </a>
                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <span className="text-gray-800">Архив бухгалтерской отчетности (2018-2022)</span>
                            </a>
                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <span className="text-gray-800">Архив отчетов о выполнении госзадания (2018-2022)</span>
                            </a>
                            <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-white transition-all bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <span className="text-gray-800">Сведения о контрольных мероприятиях и их результатах</span>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
} 