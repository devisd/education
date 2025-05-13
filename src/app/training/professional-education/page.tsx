'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfessionalEducationPage() {
    // Преимущества профессионального обучения
    const benefits = [
        {
            title: 'Получение профессии',
            description: 'Возможность получить востребованную рабочую профессию за короткий срок.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'Документ установленного образца',
            description: 'По окончании обучения выдается свидетельство о профессии рабочего, должности служащего.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: 'Практические навыки',
            description: 'Большое внимание уделяется практическим занятиям для формирования профессиональных навыков.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            )
        },
        {
            title: 'Быстрое трудоустройство',
            description: 'Выпускники программ профессионального обучения быстро находят работу по полученной профессии.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Повышение разряда',
            description: 'Возможность повысить квалификационный разряд, что ведет к повышению заработной платы.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'Гибкий график обучения',
            description: 'Возможность выбрать удобный график и формат обучения (очный, очно-заочный, заочный).',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    // Популярные программы
    const popularPrograms = [
        {
            title: 'Оператор котельной',
            hours: '240 часов',
            price: 'от 9 000 ₽',
            description: 'Подготовка операторов котельной для обслуживания водогрейных и паровых котлов.'
        },
        {
            title: 'Электромонтер по ремонту и обслуживанию электрооборудования',
            hours: '320 часов',
            price: 'от 11 000 ₽',
            description: 'Обучение навыкам по ремонту и обслуживанию электрооборудования.'
        },
        {
            title: 'Стропальщик',
            hours: '160 часов',
            price: 'от 8 500 ₽',
            description: 'Подготовка стропальщиков для обеспечения безопасности при выполнении погрузочно-разгрузочных работ.'
        },
        {
            title: 'Слесарь-сантехник',
            hours: '240 часов',
            price: 'от 9 000 ₽',
            description: 'Обучение навыкам монтажа, ремонта и обслуживания систем отопления, водоснабжения и канализации.'
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
                        Освоение рабочих профессий
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ПРОФЕССИОНАЛЬНОЕ <span className="font-extrabold text-primary-600">ОБУЧЕНИЕ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Получите востребованную рабочую профессию и официальное свидетельство для успешного трудоустройства
                    </p>
                </div>

                {/* Основная информация */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">О профессиональном обучении</h3>
                        <p className="text-gray-600 mb-4">
                            Профессиональное обучение — это вид образования, который направлен на приобретение обучающимися знаний, умений, навыков и формирование компетенций, необходимых для выполнения определенных трудовых функций (определенных видов трудовой деятельности, профессий).
                        </p>
                        <p className="text-gray-600 mb-4">
                            Программы профессионального обучения позволяют в короткие сроки получить востребованную рабочую профессию или должность служащего, а также повысить квалификационный разряд по уже имеющейся профессии.
                        </p>
                        <p className="text-gray-600 mb-4">
                            По окончании обучения выдается свидетельство о профессии рабочего, должности служащего установленного образца, которое подтверждает квалификацию и дает право на ведение профессиональной деятельности.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Виды программ профессионального обучения:</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Программы профессиональной подготовки по профессиям рабочих и должностям служащих</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Программы переподготовки рабочих и служащих</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Программы повышения квалификации рабочих и служащих</span>
                            </li>
                        </ul>
                    </div>

                    {/* Изображение */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-center">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            {/* Здесь можно добавить реальное изображение */}
                            {/* <Image src="/images/professional-education.jpg" layout="fill" objectFit="cover" alt="Профессиональное обучение" /> */}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Для кого подходит профессиональное обучение?</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Для лиц, ищущих работу и желающих получить новую профессию</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Для работников, желающих повысить квалификационный разряд</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Для выпускников школ, не планирующих поступать в вуз или колледж</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Для тех, кто хочет освоить новую профессию для подработки</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Преимущества */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Преимущества профессионального обучения</h3>

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
                </div>

                {/* Популярные программы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Популярные программы профессионального обучения</h3>

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
                            Смотреть все программы профессионального обучения
                        </a>
                    </div>
                </div>

                {/* Как проходит обучение */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Как проходит обучение</h3>

                    <div className="relative">
                        {/* Линия прогресса */}
                        <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Теоретическое обучение</h4>
                                <p className="text-sm text-gray-600">Изучение теоретического материала в очном или дистанционном формате</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    3
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Практические занятия</h4>
                                <p className="text-sm text-gray-600">Прохождение практики для формирования профессиональных навыков</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                    4
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Получение свидетельства</h4>
                                <p className="text-sm text-gray-600">Сдача квалификационного экзамена и получение свидетельства</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Часто задаваемые вопросы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Часто задаваемые вопросы</h3>

                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Какие документы нужны для зачисления на программу профессионального обучения?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Для зачисления потребуются: заявление, копия паспорта, документ об образовании (при наличии), медицинская справка (для некоторых профессий), фотографии 3x4, копия трудовой книжки (при наличии).
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Нужно ли иметь среднее профессиональное или высшее образование для обучения?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Нет, на программы профессионального обучения можно поступить без предварительного профессионального образования. Достаточно иметь основное общее образование (9 классов) или среднее общее образование (11 классов).
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Какой документ выдается по окончании обучения?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    По окончании обучения и успешной сдачи квалификационного экзамена выдается свидетельство о профессии рабочего, должности служащего установленного образца с присвоением квалификационного разряда, класса, категории.
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Можно ли пройти обучение дистанционно?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Теоретическая часть обучения может проходить дистанционно, однако для большинства рабочих профессий практическая часть требует очного присутствия. Мы предлагаем гибкие форматы обучения: очный, очно-заочный и заочный с применением дистанционных технологий.
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
                </div>

                {/* Призыв к действию */}
                <div className="bg-primary-600 rounded-lg shadow-md p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Готовы получить новую профессию?</h3>
                    <p className="text-white/80 max-w-2xl mx-auto mb-6">
                        Начните обучение прямо сейчас и получите востребованную рабочую профессию для успешного трудоустройства
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            Подать заявку
                        </a>
                        <a href="/main/contacts" className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
                            Получить консультацию
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}