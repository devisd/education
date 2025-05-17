// 'use client';

// import React from 'react';
// import { CONTACT_LINKS, SOCIAL_LINKS } from '@/constants/footer';

export default function MainInfoPage() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОСНОВНЫЕ <span className="font-extrabold text-primary-600">СВЕДЕНИЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основное содержимое страницы */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Полное наименование</h3>
                            <p className="text-gray-600 mb-6">
                                Федеральное государственное бюджетное образовательное учреждение высшего образования «[Название университета]»
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Дата создания</h3>
                            <p className="text-gray-600 mb-6">Университет основан в [год] году</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Учредитель</h3>
                            <p className="text-gray-600 mb-6">Министерство науки и высшего образования Российской Федерации</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Местонахождение</h3>
                            <p className="text-gray-600 mb-6">
                                <strong>Адрес:</strong> {CONTACT_LINKS[0].name}<br />
                                <strong>Телефон:</strong> {CONTACT_LINKS[1].name}, {CONTACT_LINKS[2].name}<br />
                                <strong>Email:</strong> {CONTACT_LINKS[3].name}<br />
                                <strong>Соцсети:</strong> {SOCIAL_LINKS.map((link, index) => (
                                    <React.Fragment key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-600 hover:text-primary-900"
                                        >
                                            {link.name}
                                        </a>
                                        {index < SOCIAL_LINKS.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Режим и график работы</h3>
                            <p className="text-gray-600 mb-6">
                                <strong>Пн-Пт:</strong> 9:00-18:00<br />
                                <strong>Сб-Вс:</strong> выходные дни
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Контактные телефоны */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Контактные телефоны</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-gray-800">Приемная ректора</p>
                            <p className="text-primary-600 font-bold">{CONTACT_LINKS[1].name}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-gray-800">Приемная комиссия</p>
                            <p className="text-primary-600 font-bold">{CONTACT_LINKS[2].name}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-gray-800">Учебный отдел</p>
                            <p className="text-primary-600 font-bold">{CONTACT_LINKS[1].name}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
