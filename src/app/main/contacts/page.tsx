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
import { useState, FormEvent } from 'react';
import { FormCheckbox } from '@/components/forms/FormCheckbox';

export default function ContactsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isConsent, setIsConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isConsent) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create an object with form data and destination email
            const submitData = {
                ...formData,
                toEmail: 'terminal.38@mail.ru'
            };

            // Here you would typically call an API endpoint to send the email
            // For example:
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData),
            });

            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setIsConsent(false);
            } else {
                setSubmitStatus({
                    success: false,
                    message: 'При отправке сообщения произошла ошибка. Пожалуйста, попробуйте позже.'
                });
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'При отправке сообщения произошла ошибка. Пожалуйста, попробуйте позже.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Контактная информация */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
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

                        <div className="mt-8 pt-8 border-t border-gray-200">
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
                    </div>

                    {/* Карта */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Схема проезда</h3>

                        <div className="relative h-96 rounded-lg overflow-hidden">
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

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Ваше имя <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Введите ваше имя"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Электронная почта <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Введите ваш email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Тема сообщения <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Введите тему сообщения"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Сообщение <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Введите ваше сообщение"
                                required
                            ></textarea>
                        </div>

                        <FormCheckbox
                            id="consent"
                            name="consent"
                            label={
                                <div>
                                    <p
                                        className="text-xs "
                                    >Даю согласие на обработку моих персональных данных, в соответствии с Федеральным
                                        законом РФ от 27.07.2006 №152-ФЗ {" "}
                                        <a
                                            href="/pdf/fz152.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='hover:text-primary-600 text-blue-150'
                                        >
                                            «О персональных данных».{" "}
                                        </a></p>
                                    <p className='text-xs'>
                                        Ознакомлен с {" "}
                                        <a
                                            href="/pdf/privacy.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" text-blue-150 hover:text-primary-600"
                                        >
                                            Политикой конфиденциальности обработки персональных данных
                                        </a>
                                        {" "} посетителей сайта в информационно-телекоммуникационной сети «Интернет».
                                        <span className="text-red-500">*</span>
                                    </p>
                                </div>
                            }
                            checked={isConsent}
                            onChange={(e) => setIsConsent(e.target.checked)}
                        />

                        {submitStatus && (
                            <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={!isConsent || isSubmitting}
                                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${!isConsent || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Часы работы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Режим работы</h3>

                    <div className="grid gap-6">
                        <ul >
                            <li className="flex justify-between">
                                <span className="text-gray-600">Понедельник - Пятница:</span>
                                <span className="font-medium text-gray-800">8:00 - 17:00 (обед 12:00 - 13:00)</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Суббота и воскресенье:</span>
                                <span className="font-medium text-gray-800">Выходной</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
