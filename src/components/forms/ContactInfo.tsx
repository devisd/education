import React from 'react';
import {
    MapIcon,
    PhoneIcon,
    EmailIcon,
    CheckIcon,
    TelegramIcon,
    WhatsAppIcon
} from '@/icons';

export const ContactInfo = () => {
    return (
        <div className="lg:w-1/2 bg-primary-700 text-white p-8 lg:p-12">
            <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">Образовательный терминал</h3>
                <p className="text-primary-100 mb-2">Центр дополнительного профессионального образования</p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="text-primary-200 mr-4 mt-1">
                        <MapIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-lg mb-1">Адрес</h4>
                        <p className="text-primary-100">Россия, Иркутск, 664043,<br />ул. Сергеева 3/1, офис 325</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="text-primary-200 mr-4 mt-1">
                        <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-lg mb-1">Телефоны</h4>
                        <p className="text-primary-100">
                            <a href="tel:+73952434312" className="hover:text-white transition-colors">+7 (3952) 43-43-12</a><br />
                            <a href="tel:+79149148185" className="hover:text-white transition-colors">+7 (914) 91-48-185</a>
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="text-primary-200 mr-4 mt-1">
                        <EmailIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-lg mb-1">Email</h4>
                        <p className="text-primary-100">
                            <a href="mailto:terminal.38@mail.ru" className="hover:text-white transition-colors">terminal.38@mail.ru</a>
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="text-primary-200 mr-4 mt-1">
                        <CheckIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-lg mb-1">Лицензия</h4>
                        <p className="text-primary-100">
                            № Л035-01220-38/00227206 от 19 октября 2021
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h4 className="font-medium text-lg mb-4">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                    <a href="https://t.me/termedu38" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-500 p-3 rounded-full transition-colors">
                        <span className="sr-only">Telegram</span>
                        <TelegramIcon className="h-5 w-5" />
                    </a>
                    <a href="https://wa.me/79149148185" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-500 p-3 rounded-full transition-colors">
                        <span className="sr-only">WhatsApp</span>
                        <WhatsAppIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}; 