// 'use client';

// import React from 'react';

export default function ManagementPage() {
    // Моковые данные о руководстве
    // const managementTeam = [
    //     {
    //         id: 1,
    //         position: 'Проректор по учебной работе',
    //         name: 'Смирнова Елена Александровна',
    //         degree: 'Доктор педагогических наук, профессор',
    //         phone: '+7 (495) 123-45-67',
    //         email: 'smirnova.e@university.ru',
    //         hours: 'Вторник, четверг: 14:00-16:00',
    //         photo: '/images/placeholder-person.jpg',
    //     },
    //     {
    //         id: 2,
    //         position: 'Проректор по научной работе',
    //         name: 'Иванов Михаил Петрович',
    //         degree: 'Доктор физико-математических наук, профессор',
    //         phone: '+7 (495) 123-45-68',
    //         email: 'ivanov.m@university.ru',
    //         hours: 'Понедельник, среда: 14:00-16:00',
    //         photo: '/images/placeholder-person.jpg',
    //     },
    //     {
    //         id: 3,
    //         position: 'Проректор по инновационной деятельности',
    //         name: 'Петров Сергей Иванович',
    //         degree: 'Доктор технических наук, профессор',
    //         phone: '+7 (495) 123-45-69',
    //         email: 'petrov.s@university.ru',
    //         hours: 'Вторник, пятница: 14:00-16:00',
    //         photo: '/images/placeholder-person.jpg',
    //     },
    //     {
    //         id: 4,
    //         position: 'Проректор по международным связям',
    //         name: 'Андреева Ольга Викторовна',
    //         degree: 'Доктор экономических наук, профессор',
    //         phone: '+7 (495) 123-45-70',
    //         email: 'andreeva.o@university.ru',
    //         hours: 'Понедельник, четверг: 14:00-16:00',
    //         photo: '/images/placeholder-person.jpg',
    //     },
    //     {
    //         id: 5,
    //         position: 'Проректор по административно-хозяйственной работе',
    //         name: 'Кузнецов Алексей Николаевич',
    //         degree: 'Кандидат технических наук, доцент',
    //         phone: '+7 (495) 123-45-71',
    //         email: 'kuznetsov.a@university.ru',
    //         hours: 'Среда, пятница: 14:00-16:00',
    //         photo: '/images/placeholder-person.jpg',
    //     },
    //     {
    //         id: 6,
    //         position: 'Проректор по воспитательной работе',
    //         name: 'Соколова Наталья Андреевна',
    //         degree: 'Кандидат педагогических наук, доцент',
    //         phone: '+7 (495) 123-45-72',
    //         email: 'sokolova.n@university.ru',
    //         hours: 'Понедельник, пятница: 14:00-16:00',
    //         photo: '/images/placeholder-person.jpg',
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
                        <span className="font-extrabold">РУКОВОДСТВО</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Ректор университета */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                            <div className="w-64 h-64 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3 md:pl-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ректор университета</h3>
                            <h4 className="text-xl font-semibold text-primary-600 mb-4">Александров Александр Александрович</h4>

                            <div className="mb-4">
                                <p className="text-gray-600 mb-2">Доктор технических наук, профессор</p>
                                <p className="text-gray-600 mb-2">Заслуженный деятель науки Российской Федерации</p>
                                <p className="text-gray-600 mb-2">Лауреат Государственной премии в области науки и техники</p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-700"><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                                        <p className="text-gray-700"><strong>Email:</strong> rector@university.ru</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-700"><strong>Часы приема:</strong></p>
                                        <p className="text-gray-700">Вторник: 10:00-12:00</p>
                                        <p className="text-gray-700">Четверг: 15:00-17:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Проректоры */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Проректоры университета</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {managementTeam.map((member) => (
                            <div key={member.id} className="border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all p-4 flex">
                                <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-primary-600 mb-1">{member.position}</h4>
                                    <p className="font-medium text-gray-800">{member.name}</p>
                                    <p className="text-sm text-gray-600 mb-2">{member.degree}</p>
                                    <p className="text-sm text-gray-700"><strong>Телефон:</strong> {member.phone}</p>
                                    <p className="text-sm text-gray-700"><strong>Email:</strong> {member.email}</p>
                                    <p className="text-sm text-gray-700"><strong>Часы приема:</strong> {member.hours}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Структура управления */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Структура управления университетом</h3>

                    <div className="flex justify-center mb-6">
                        <a href="#" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Скачать схему организационной структуры университета
                        </a>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <p className="text-gray-700">
                            Управление университетом осуществляется в соответствии с законодательством Российской Федерации и Уставом университета на основе сочетания принципов единоначалия и коллегиальности.
                        </p>
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Органы управления университетом:</h4>
                            <ul className="list-disc list-inside space-y-1 pl-4 text-gray-700">
                                <li>Конференция работников и обучающихся университета</li>
                                <li>Ученый совет университета</li>
                                <li>Ректор университета</li>
                                <li>Попечительский совет</li>
                                <li>Студенческий совет</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
