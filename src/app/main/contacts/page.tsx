'use client';

import React from 'react';
import {
    MapIcon,
    PhoneIcon,
    EmailIcon,
    CheckIcon,
    TelegramIcon,
    WhatsAppIcon
} from '@/icons';
import { CONTACT_LINKS, SOCIAL_LINKS } from '@/constants/footer';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactsPage() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Информация для связи
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        НАШИ <span className="font-extrabold text-primary-600">КОНТАКТЫ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы.
                    </p>
                </div>

                {/* Основной блок с контактами и картой */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12 min-h-[400px]">
                    {/* Контактная информация */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex-1 h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                    <MapIcon className="h-5 w-5 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Адрес</h4>
                                    <p className="text-gray-600">
                                        Россия, {CONTACT_LINKS[0].name}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                    <PhoneIcon className="h-5 w-5 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Телефоны</h4>
                                    <p className="text-gray-600">
                                        <a href={CONTACT_LINKS[1].href} className="hover:text-primary-600 transition-colors">
                                            {CONTACT_LINKS[1].name}
                                        </a><br />
                                        <a href={CONTACT_LINKS[2].href} className="hover:text-primary-600 transition-colors">
                                            {CONTACT_LINKS[2].name}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                    <EmailIcon className="h-5 w-5 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                                    <p className="text-gray-600">
                                        <a href={CONTACT_LINKS[3].href} className="hover:text-primary-600 transition-colors">
                                            {CONTACT_LINKS[3].name}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-4">
                                    <CheckIcon className="h-5 w-5 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Лицензия</h4>
                                    <p className="text-gray-600">
                                        №Л035-01220-38/01768415 от 24 января 2025 года.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Мы в социальных сетях</h4>
                            <div className="flex space-x-4">
                                <a href={SOCIAL_LINKS[0].href} target="_blank" rel="noopener noreferrer"
                                    className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                                    <span className="sr-only">{SOCIAL_LINKS[0].name}</span>
                                    <TelegramIcon className="h-6 w-6" />
                                </a>
                                <a href={SOCIAL_LINKS[1].href} target="_blank" rel="noopener noreferrer"
                                    className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                                    <span className="sr-only">{SOCIAL_LINKS[1].name}</span>
                                    <WhatsAppIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </div>


                        {/* Часы работы */}
                        <div className="pt-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Режим работы</h3>
                            <div className="grid gap-6">
                                <ul className='text-sm'>
                                    <li className="flex justify-between max-xl:mb-2 flex-col md:flex-row lg:flex-col xl:flex-row">
                                        <span className="text-gray-600 md:mr-5">Понедельник - Четверг:</span>
                                        <span className="font-medium text-gray-800">8:00 - 17:00 (обед 12:00 - 13:00)</span>
                                    </li>
                                    <li className="flex justify-between max-xl:mb-2 flex-col md:flex-row lg:flex-col xl:flex-row">
                                        <span className="text-gray-600 mr-5">Пятница:</span>
                                        <span className="font-medium text-gray-800">8:00 - 16:00 (обед 12:00 - 13:00)</span>
                                    </li>
                                    <li className="flex md:justify-between flex-col md:flex-row lg:flex-col xl:flex-row">
                                        <span className="text-gray-600 mr-5">Суббота и воскресенье:</span>
                                        <span className="font-medium text-gray-800">Выходной</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex-1 h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Схема проезда</h3>
                        <div className="relative rounded-lg overflow-hidden min-h-[400px] xl:h-[604px] lg:h-[704px]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full border-0"
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1&amp;source=constructor&amp;scroll=false&amp;ll=104.298033%2C52.283838&amp;z=16&amp;text=Иркутск%2C%20ул.%20Сергеева%203%2F1%2C%20офис.%20325&amp;pt=104.298033%2C52.283838%2Corg&amp;mode=search&amp;oid=141180422773"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Форма обратной связи */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Напишите нам</h3>
                    <ContactForm />
                </div>


            </div>
        </section>
    );
}
