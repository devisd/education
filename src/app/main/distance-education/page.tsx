'use client';

import React from 'react';
import Image from 'next/image';

export default function DistanceEducationPage() {
    // Преимущества дистанционного обучения
    const benefits = [
        {
            title: 'Гибкий график',
            description: 'Обучайтесь в удобное для вас время. Вы сами планируете свое расписание и темп изучения материала.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Доступность',
            description: 'Учитесь из любой точки мира. Всё, что вам нужно — компьютер или мобильное устройство с доступом в интернет.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Индивидуальный подход',
            description: 'Возможность выбора индивидуальной образовательной траектории и темпа обучения.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            title: 'Современные технологии',
            description: 'Применение современных образовательных технологий и интерактивных методов обучения.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'Экономия времени',
            description: 'Не нужно тратить время на дорогу до учебного заведения. Всё обучение происходит онлайн.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Доступ к материалам 24/7',
            description: 'Постоянный доступ к учебным материалам, лекциям и видеоурокам в любое время суток.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        }
    ];

    // Этапы обучения
    const learningSteps = [
        {
            number: 1,
            title: 'Подача заявки',
            description: 'Заполните заявку на обучение на сайте или свяжитесь с нами по телефону'
        },
        {
            number: 2,
            title: 'Заключение договора',
            description: 'Оформление всех необходимых документов для зачисления на обучение'
        },
        {
            number: 3,
            title: 'Оплата обучения',
            description: 'Выберите удобный способ оплаты: банковской картой, переводом или в рассрочку'
        },
        {
            number: 4,
            title: 'Доступ к платформе',
            description: 'Получение доступа к образовательной платформе и учебным материалам'
        },
        {
            number: 5,
            title: 'Прохождение обучения',
            description: 'Изучение материалов, выполнение заданий и тестов в удобном темпе'
        },
        {
            number: 6,
            title: 'Итоговая аттестация',
            description: 'Прохождение итогового тестирования или защита выпускной работы'
        },
        {
            number: 7,
            title: 'Получение документа',
            description: 'Выдача документа об образовании установленного образца'
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
                        Учитесь где угодно
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ДИСТАНЦИОННОЕ <span className="font-extrabold text-primary-600">ОБУЧЕНИЕ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Современное образование без географических ограничений. Учитесь в любое время и в любом месте.
                    </p>
                </div>

                {/* Основная информация */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">О дистанционном обучении</h3>
                        <p className="text-gray-600 mb-4">
                            Дистанционное обучение — это форма получения образования, при которой все или большая часть учебных процедур осуществляется с использованием современных информационных и телекоммуникационных технологий при территориальной удаленности преподавателя и студентов.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Наш учебный центр предлагает широкий спектр образовательных программ, которые можно пройти дистанционно, не выходя из дома или офиса. Это отличная возможность повысить квалификацию или получить новую профессию без отрыва от работы и повседневных дел.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Все программы разработаны опытными преподавателями и соответствуют современным требованиям рынка труда. По окончании обучения выдаются документы установленного образца.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Виды программ для дистанционного обучения:</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Программы профессиональной переподготовки (от 250 часов)</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Программы повышения квалификации (от 16 до 249 часов)</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Программы подготовки по рабочим профессиям (с дистанционно-очными модулями)</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Специализированные курсы и программы</span>
                            </li>
                        </ul>
                    </div>

                    {/* Образ платформы */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-center">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {/* Здесь можно добавить реальное изображение платформы */}
                            {/* <Image src="/images/platform.jpg" layout="fill" objectFit="cover" alt="Образовательная платформа" /> */}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Наша образовательная платформа</h4>
                        <p className="text-gray-600">
                            Обучение проходит на современной интерактивной платформе, которая включает в себя видеолекции, электронные учебные материалы, тесты, практические задания и возможность общения с преподавателями и другими студентами.
                        </p>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                Демо-доступ к платформе
                            </a>
                        </div>
                    </div>
                </div>

                {/* Преимущества */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Преимущества дистанционного обучения</h3>

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

                {/* Как проходит обучение */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Как проходит дистанционное обучение</h3>

                    <div className="relative">
                        {/* Линия прогресса */}
                        <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                            {learningSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                                        {step.number}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Отзывы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Отзывы о дистанционном обучении</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Анна И.</h4>
                                    <p className="text-sm text-gray-500">Прошла обучение по программе "Бухгалтерский учет"</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600">
                                Очень удобный формат обучения! Могла учиться вечерами после работы и в выходные. Преподаватели всегда отвечали на вопросы, материал подан очень понятно.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Сергей П.</h4>
                                    <p className="text-sm text-gray-500">Прошел курс "Web-разработка"</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600">
                                Отличная платформа и много практических заданий. Получил не только теоретические знания, но и реальные навыки, которые уже применяю в работе.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Ольга М.</h4>
                                    <p className="text-sm text-gray-500">Прошла переподготовку по HR-менеджменту</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[1, 2, 3, 4, 5].map((star, idx) => (
                                    <svg key={star} className={`h-5 w-5 ${idx < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600">
                                Благодаря гибкому графику я смогла совмещать обучение с работой и семейными делами. Хорошо структурированный материал, интересные вебинары.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="/main/reviews" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                            Смотреть все отзывы
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Часто задаваемые вопросы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Часто задаваемые вопросы</h3>

                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Как происходит общение с преподавателями при дистанционном обучении?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Общение с преподавателями происходит через образовательную платформу с помощью чата, форума, электронной почты или видеоконференций. Вы можете задавать вопросы и получать консультации на протяжении всего обучения.
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Какие документы я получу после окончания дистанционного обучения?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    После успешного завершения обучения и прохождения итоговой аттестации вы получите документ установленного образца в зависимости от программы: диплом о профессиональной переподготовке, удостоверение о повышении квалификации или свидетельство о профессии рабочего/должности служащего.
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Есть ли какие-то технические требования для дистанционного обучения?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Для комфортного обучения вам потребуется компьютер, ноутбук или планшет с доступом в интернет. Рекомендуется использовать современный браузер (Chrome, Firefox, Safari, Edge). Для некоторых программ может потребоваться установка дополнительного программного обеспечения.
                                </p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900">
                                Можно ли получить скидку на дистанционное обучение?
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-700">
                                    Да, мы предлагаем систему скидок для различных категорий слушателей: при групповом обучении, для постоянных клиентов, студентов и других категорий. Актуальную информацию о скидках можно узнать у менеджеров или на странице "Цены".
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
                    <h3 className="text-2xl font-bold text-white mb-4">Готовы начать обучение?</h3>
                    <p className="text-white/80 max-w-2xl mx-auto mb-6">
                        Заполните заявку на обучение прямо сейчас или свяжитесь с нами для получения подробной консультации
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            Подать заявку
                        </a>
                        <a href="/main/contacts" className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
