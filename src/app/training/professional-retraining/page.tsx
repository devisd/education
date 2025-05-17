// 'use client';

// import React from 'react';

export default function ProfessionalRetrainingPage() {
    // Преимущества профессиональной переподготовки
    // const benefits = [
    //     {
    //         title: 'Новая профессия',
    //         description: 'Возможность получить новую специальность без получения второго высшего образования.',
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    //             </svg>
    //         )
    //     },
    //     {
    //         title: 'Сжатые сроки',
    //         description: 'Обучение длится от 3 до 9 месяцев в зависимости от программы и объема часов.',
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //             </svg>
    //         )
    //     },
    //     {
    //         title: 'Диплом установленного образца',
    //         description: 'По окончании обучения выдается диплом о профессиональной переподготовке.',
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    //             </svg>
    //         )
    //     },
    //     {
    //         title: 'Удобный формат',
    //         description: 'Обучение проводится дистанционно, что позволяет учиться без отрыва от работы.',
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //             </svg>
    //         )
    //     },
    //     {
    //         title: 'Современные программы',
    //         description: 'Учебные программы разработаны с учетом требований профессиональных стандартов и рынка труда.',
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //             </svg>
    //         )
    //     },
    //     {
    //         title: 'Возможность трудоустройства',
    //         description: 'Диплом дает право на ведение профессиональной деятельности в новой сфере.',
    //         icon: (
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //             </svg>
    //         )
    //     }
    // ];

    // Популярные программы
    // const popularPrograms = [
    //     {
    //         title: 'Управление персоналом',
    //         hours: '256 часов',
    //         price: 'от 18 500 ₽',
    //         description: 'Программа формирует компетенции для ведения профессиональной деятельности в области управления персоналом организации.'
    //     },
    //     {
    //         title: 'Бухгалтерский учет и налогообложение',
    //         hours: '320 часов',
    //         price: 'от 22 000 ₽',
    //         description: 'Подготовка к ведению профессиональной деятельности в сфере бухгалтерского учета, анализа и налогообложения.'
    //     },
    //     {
    //         title: 'Охрана труда',
    //         hours: '256 часов',
    //         price: 'от 18 500 ₽',
    //         description: 'Программа формирует профессиональные компетенции, необходимые для осуществления деятельности в области охраны труда.'
    //     },
    //     {
    //         title: 'Специалист по пожарной безопасности',
    //         hours: '256 часов',
    //         price: 'от 18 500 ₽',
    //         description: 'Подготовка специалистов, ответственных за пожарную безопасность организаций и учреждений.'
    //     }
    // ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Услуги
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ПРОФЕССИОНАЛЬНАЯ <span className="font-extrabold text-primary-600">ПЕРЕПОДГОТОВКА</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основная информация */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">О профессиональной переподготовке</h3>
                        <p className="text-gray-600 mb-4">
                            Профессиональная переподготовка — это получение дополнительных компетенций (знаний, умений, навыков), необходимых для выполнения функций нового направления профессиональной деятельности или получения дополнительной квалификации.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Программы профессиональной переподготовки позволяют за короткий срок освоить новую профессию без получения второго высшего образования. По окончании обучения выдается диплом о профессиональной переподготовке, который дает право на ведение нового вида профессиональной деятельности.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Обучение по программам профессиональной переподготовки могут пройти лица, имеющие среднее профессиональное или высшее образование, а также получающие его в настоящий момент.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Направления профессиональной переподготовки:</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Управление персоналом</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Бухгалтерский учет и налогообложение</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Охрана труда и техника безопасности</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Пожарная безопасность</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Экологическая безопасность</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Управление государственными и муниципальными закупками</span>
                            </li>
                        </ul>
                    </div> */}

                {/* Изображение */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-center">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6"> */}
                {/* <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div> */}
                {/* Здесь можно добавить реальное изображение */}
                {/* <Image src="/images/professional-retraining.jpg" layout="fill" objectFit="cover" alt="Профессиональная переподготовка" /> */}
                {/* </div> */}
                {/* <h4 className="text-xl font-semibold text-gray-800 mb-4">Для кого подходит профессиональная переподготовка?</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Специалистам, желающим сменить сферу деятельности</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Руководителям для расширения управленческих компетенций</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Выпускникам вузов и колледжей для повышения конкурентоспособности</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Специалистам для соответствия требованиям профстандартов</span>
                            </li>
                        </ul> */}
                {/* </div> */}
                {/* </div> */}

                {/* Преимущества */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Преимущества профессиональной переподготовки</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Популярные программы */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Популярные программы переподготовки</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {popularPrograms.map((program, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                                <div className="mb-4 pb-4 border-b border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-800">{program.title}</h4>
                                    <div className="flex flex-wrap mt-2">
                                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-2 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {program.hours}
                                        </span>
                                        <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {program.price}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600">{program.description}</p>
                                <div className="mt-4">
                                    <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a href="/main/price" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                            Смотреть все программы переподготовки
                        </a>
                    </div>
                </div> */}

                {/* Этапы обучения */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Как проходит профессиональная переподготовка</h3> */}

                {/* <div className="relative"> */}
                {/* Линия прогресса */}
                {/* <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div> */}

                {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    1
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Подача заявки</h4>
                                <p className="text-sm text-gray-600">Заполните заявку на обучение и предоставьте необходимые документы</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    2
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Заключение договора</h4>
                                <p className="text-sm text-gray-600">Заключение договора и оплата выбранной программы обучения</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    3
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Обучение</h4>
                                <p className="text-sm text-gray-600">Изучение материалов, выполнение заданий, прохождение тестов</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    4
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Итоговая аттестация</h4>
                                <p className="text-sm text-gray-600">Защита итоговой аттестационной работы и/или итоговое тестирование</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    5
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Получение диплома</h4>
                                <p className="text-sm text-gray-600">Выдача диплома о профессиональной переподготовке</p>
                            </div>
                        </div> */}
                {/* </div> */}
                {/* </div> */}

                {/* Часто задаваемые вопросы */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Часто задаваемые вопросы</h3>

                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Чем отличается профессиональная переподготовка от второго высшего образования?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Профессиональная переподготовка — более короткий путь получения новой профессии. Программы переподготовки длятся от 3 до 9 месяцев в зависимости от направления, в то время как получение второго высшего образования занимает 3-5 лет. При этом диплом о профессиональной переподготовке дает право на ведение нового вида профессиональной деятельности.
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Какие документы нужны для поступления на программу профессиональной переподготовки?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Для зачисления на программу профессиональной переподготовки потребуются: заявление, копия паспорта, копия диплома о среднем профессиональном или высшем образовании (или справка из учебного заведения для студентов), копия документа о смене фамилии (если фамилия в дипломе отличается от фамилии в паспорте).
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Признается ли диплом о профессиональной переподготовке при трудоустройстве?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Да, диплом о профессиональной переподготовке является документом установленного образца и признается работодателями. Он дает право на ведение нового вида профессиональной деятельности и/или получение новой квалификации. В ряде случаев такой диплом является обязательным для соответствия требованиям профессиональных стандартов.
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Можно ли пройти профессиональную переподготовку дистанционно?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Да, все наши программы профессиональной переподготовки доступны в дистанционном формате. Обучение проходит на современной образовательной платформе, которая содержит все необходимые учебные материалы, видеолекции, тесты и задания. Это позволяет учиться в удобное время без отрыва от работы и личных дел.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="/main/faq" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                            Все вопросы и ответы
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div> */}

                {/* Призыв к действию */}
                {/* <div className="bg-primary-600 rounded-lg shadow-md p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Готовы освоить новую профессию?</h3>
                    <p className="text-white/80 max-w-2xl mx-auto mb-6">
                        Начните обучение уже сегодня и получите диплом о профессиональной переподготовке, открывающий новые карьерные возможности
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            Подать заявку
                        </a>
                        <a href="/main/contacts" className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
                            Получить консультацию
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    );
}