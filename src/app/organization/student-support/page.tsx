// 'use client';

// import React, { useState } from 'react';

export default function StudentSupportPage() {
    // Состояние для активного таба
    // const [activeTab, setActiveTab] = useState<string>('scholarships');

    // // Моковые данные о стипендиях
    // const scholarships = [
    //     {
    //         id: 1,
    //         name: 'Государственная академическая стипендия',
    //         amount: '2 200 ₽',
    //         criteria: 'Выплачивается студентам очной формы, обучающимся на бюджетной основе, не имеющим академической задолженности и оценок "удовлетворительно"',
    //     },
    //     {
    //         id: 2,
    //         name: 'Повышенная государственная академическая стипендия',
    //         amount: 'от 7 000 ₽',
    //         criteria: 'Выплачивается студентам за особые достижения в учебной, научно-исследовательской, общественной, культурно-творческой и спортивной деятельности',
    //     },
    //     {
    //         id: 3,
    //         name: 'Государственная социальная стипендия',
    //         amount: '3 300 ₽',
    //         criteria: 'Выплачивается студентам, относящимся к социально незащищенным категориям граждан',
    //     },
    //     {
    //         id: 4,
    //         name: 'Повышенная государственная социальная стипендия',
    //         amount: '10 000 ₽',
    //         criteria: 'Выплачивается студентам 1 и 2 курсов, имеющим оценки "хорошо" и "отлично" и относящимся к социально незащищенным категориям граждан',
    //     },
    //     {
    //         id: 5,
    //         name: 'Стипендия Президента РФ',
    //         amount: '2 200 ₽',
    //         criteria: 'Выплачивается студентам и аспирантам, достигшим выдающихся успехов в учебной и научной деятельности',
    //     },
    //     {
    //         id: 6,
    //         name: 'Стипендия Правительства РФ',
    //         amount: '1 440 ₽',
    //         criteria: 'Выплачивается студентам и аспирантам, проявившим выдающиеся способности в учебной и научной деятельности',
    //     },
    //     {
    //         id: 7,
    //         name: 'Именные стипендии',
    //         amount: 'от 3 000 ₽',
    //         criteria: 'Выплачиваются за достижения в определенной области научных знаний, учреждаемые федеральными государственными органами, органами власти субъектов РФ, юридическими и физическими лицами',
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
                        СТИПЕНДИИ И <span className="font-extrabold text-primary-600">МЕРЫ ПОДДЕРЖКИ ОБУЧАЮЩИХСЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Табы для разделов */}
                {/* <div className="mb-8 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setActiveTab('scholarships')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'scholarships'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Стипендии
                    </button>
                    <button
                        onClick={() => setActiveTab('support')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'support'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Материальная поддержка
                    </button>
                    <button
                        onClick={() => setActiveTab('dormitory')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'dormitory'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Общежития
                    </button>
                </div> */}

                {/* Стипендии */}
                {/* {activeTab === 'scholarships' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Стипендиальное обеспечение</h3>

                        <div className="bg-primary-50 border border-primary-100 rounded-lg p-5 mb-8">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-primary-700">
                                    Стипендия — денежная выплата, назначаемая обучающимся по очной форме обучения в целях стимулирования и (или) поддержки освоения ими образовательных программ.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Наименование стипендии
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Размер стипендии
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Критерии получения
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {scholarships.map((scholarship) => (
                                        <tr key={scholarship.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {scholarship.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                                                    {scholarship.amount}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {scholarship.criteria}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <a href="#" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Положение о стипендиальном обеспечении
                            </a>
                        </div>
                    </div>
                )} */}

                {/* Материальная поддержка */}
                {/* {activeTab === 'support' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Материальная поддержка обучающихся</h3>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Формы материальной поддержки</h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                    <div className="flex items-center mb-4">
                                        <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        <h5 className="text-lg font-semibold text-gray-800">Единовременная материальная помощь</h5>
                                    </div>
                                    <p className="text-gray-600">
                                        Выплачивается на основании заявления в случаях тяжелого материального положения, болезни, потери близких родственников и других сложных жизненных ситуациях.
                                    </p>
                                </div>

                                <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                    <div className="flex items-center mb-4">
                                        <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                        <h5 className="text-lg font-semibold text-gray-800">Социальная поддержка</h5>
                                    </div>
                                    <p className="text-gray-600">
                                        Предоставляется студентам-сиротам, инвалидам, студентам из многодетных семей, а также находящимся в трудной жизненной ситуации.
                                    </p>
                                </div>

                                <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                    <div className="flex items-center mb-4">
                                        <span className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </span>
                                        <h5 className="text-lg font-semibold text-gray-800">Социальные программы</h5>
                                    </div>
                                    <p className="text-gray-600">
                                        Льготное питание, бесплатное посещение культурных и спортивных мероприятий, компенсация транспортных расходов, оздоровительные программы.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Порядок оказания материальной поддержки</h4>
                            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                                <li>Подача заявления в деканат факультета/института или стипендиальную комиссию</li>
                                <li>Рассмотрение заявления комиссией по социальной поддержке</li>
                                <li>Принятие решения о предоставлении материальной помощи и ее размере</li>
                                <li>Издание приказа о выплате материальной помощи</li>
                                <li>Начисление и выплата материальной помощи</li>
                            </ol>
                            <div className="mt-4">
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                                    Скачать форму заявления на материальную помощь
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Общежития */}
                {/* {activeTab === 'dormitory' && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Общежития</h3>

                        <div className="bg-primary-50 border border-primary-100 rounded-lg p-5 mb-8">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-primary-700">
                                    Университет располагает 5 общежитиями на 2300 мест для иногородних и иностранных обучающихся. Все общежития расположены в шаговой доступности от учебных корпусов.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Информация об общежитиях</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <strong className="text-gray-800">Общежитие №1</strong>
                                            <p className="text-gray-700">Москва, ул. Студенческая, д. 10</p>
                                            <p className="text-gray-600 text-sm">Комнаты на 2-3 человека с удобствами на этаже</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <strong className="text-gray-800">Общежитие №2</strong>
                                            <p className="text-gray-700">Москва, ул. Студенческая, д. 12</p>
                                            <p className="text-gray-600 text-sm">Блоки на 2-3 комнаты с санузлом и кухней</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <strong className="text-gray-800">Общежитие №3</strong>
                                            <p className="text-gray-700">Москва, ул. Студенческая, д. 14</p>
                                            <p className="text-gray-600 text-sm">Комнаты на 2-3 человека с удобствами в комнате</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Стоимость проживания</h4>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Категория проживающих
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Стоимость в месяц
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    Студенты, обучающиеся за счет бюджетных средств
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    900 - 1 200 ₽
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    Студенты, обучающиеся с оплатой стоимости
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    1 200 - 1 500 ₽
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    Аспиранты
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    1 500 - 2 000 ₽
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    Иностранные обучающиеся
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    2 000 - 2 500 ₽
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                <h5 className="text-lg font-semibold text-gray-800 mb-3">Льготы по оплате</h5>
                                <p className="text-gray-600 mb-3">
                                    Предоставляются студентам-сиротам, инвалидам I и II групп, студентам из малообеспеченных семей и отдельных категорий социально незащищенных обучающихся.
                                </p>
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Подробнее о льготах</a>
                            </div>
                            <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                <h5 className="text-lg font-semibold text-gray-800 mb-3">Инфраструктура</h5>
                                <p className="text-gray-600 mb-3">
                                    Каждое общежитие оборудовано прачечной, Wi-Fi, комнатами отдыха, учебными комнатами, спортивными площадками. В непосредственной близости находятся магазины, аптеки.
                                </p>
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Посмотреть фотогалерею</a>
                            </div>
                            <div className="p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                <h5 className="text-lg font-semibold text-gray-800 mb-3">Как заселиться</h5>
                                <p className="text-gray-600 mb-3">
                                    Для заселения необходимо подать заявление в деканат, получить направление в общежитие, пройти медосмотр и оформить необходимые документы.
                                </p>
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Регламент заселения</a>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </section>
    );
}
