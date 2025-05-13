'use client';

import React, { useState } from 'react';

export default function FAQPage() {
    // Состояние для отслеживания открытых аккордеонов
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    // Переключение состояния аккордеона
    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    // Моковые данные для вопросов и ответов
    const faqItems = [
        {
            question: 'Как подать заявку на обучение?',
            answer: 'Для подачи заявки на обучение вы можете заполнить форму на нашем сайте, позвонить по указанным телефонам или отправить заявку на электронную почту. После получения заявки, наш менеджер свяжется с вами для уточнения деталей и оформления документов.'
        },
        {
            question: 'Какие документы нужны для зачисления?',
            answer: 'Для зачисления необходимы следующие документы: паспорт, документ об образовании (аттестат, диплом), СНИЛС, 2 фотографии 3x4. В некоторых случаях могут потребоваться дополнительные документы в зависимости от выбранной программы обучения.'
        },
        {
            question: 'Можно ли учиться дистанционно?',
            answer: 'Да, мы предлагаем возможность дистанционного обучения по многим программам. Обучение проходит через нашу образовательную платформу, где вы получаете доступ к учебным материалам, видеолекциям, тестам и можете связываться с преподавателями онлайн.'
        },
        {
            question: 'Как получить документ об образовании?',
            answer: 'После успешного завершения обучения и прохождения итоговой аттестации, вы получаете документ об образовании установленного образца. Документ можно получить лично в нашем офисе или по почте (включая доставку курьерской службой).'
        },
        {
            question: 'Какие способы оплаты обучения существуют?',
            answer: 'Мы предлагаем различные способы оплаты: наличными в кассе, банковской картой, банковским переводом, через электронные платежные системы. Также доступна рассрочка платежа и кредит на обучение через банки-партнеры.'
        },
        {
            question: 'Есть ли скидки на обучение?',
            answer: 'Да, у нас действует гибкая система скидок. Предоставляются скидки при групповом обучении, для постоянных клиентов, для студентов и многодетных семей. Также мы регулярно проводим акции и специальные предложения, о которых можно узнать на нашем сайте или у менеджеров.'
        },
        {
            question: 'Можно ли прервать обучение и продолжить позже?',
            answer: 'Да, в случае необходимости вы можете взять академический отпуск и продолжить обучение позже. Для этого нужно написать заявление с указанием причины и предполагаемого срока возобновления обучения. Срок и условия академического отпуска оговариваются индивидуально.'
        },
        {
            question: 'Как проходит процесс обучения?',
            answer: 'Процесс обучения включает лекции, практические занятия, семинары, самостоятельную работу с учебными материалами и выполнение практических заданий. В зависимости от программы, могут проводиться мастер-классы, тренинги, деловые игры и другие интерактивные формы обучения. По окончании обучения проводится итоговая аттестация.'
        },
        {
            question: 'Кто преподает на курсах?',
            answer: 'Обучение проводят высококвалифицированные преподаватели с большим практическим опытом в соответствующей отрасли. Среди наших преподавателей есть кандидаты и доктора наук, практикующие специалисты, эксперты в своих областях. Более подробную информацию о преподавателях можно получить в описании конкретной программы обучения.'
        },
        {
            question: 'Выдаете ли вы лицензированные документы об образовании?',
            answer: 'Да, наша организация имеет государственную лицензию на осуществление образовательной деятельности (№ Л035-01220-38/00227206 от 19 октября 2021). После окончания обучения мы выдаем документы установленного образца: удостоверения о повышении квалификации, дипломы о профессиональной переподготовке, свидетельства о профессии рабочего/должности служащего.'
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
                        Часто задаваемые вопросы
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ВОПРОС - <span className="font-extrabold text-primary-600">ОТВЕТ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ответы на наиболее распространенные вопросы об образовательных программах и организации учебного процесса
                    </p>
                </div>

                {/* Секция с часто задаваемыми вопросами */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-primary-600 transform transition-transform ${openAccordion === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 bg-white">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Не нашли ответ? */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Не нашли ответ на свой вопрос?</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Если вы не нашли ответ на интересующий вас вопрос, вы можете связаться с нами любым удобным способом.
                            Мы с радостью ответим на все ваши вопросы.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:+73952434312" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Позвонить нам
                            </a>
                            <a href="mailto:terminal.38@mail.ru" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Написать письмо
                            </a>
                            <a href="/main/contacts" className="inline-flex items-center px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Контактная информация
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
