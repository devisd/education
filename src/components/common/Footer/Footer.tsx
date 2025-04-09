import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EmailIcon, ClockIcon } from '@/icons';
import { CURRENT_YEAR, MAIN_LINKS, SERVICE_LINKS, LEGAL_LINKS } from '@/constants/footer';

// Импорт подкомпонентов
import FooterMap from './FooterMap';
import FooterLinkSection from './FooterLinkSection';
import FooterSocials from './FooterSocials';

export const Footer = memo(() => {
    return (
        <footer className="bg-[#f9fafb] text-gray-800 py-10 relative overflow-hidden">
            {/* Декоративные круги */}
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-primary-100 opacity-5 blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-primary-100 opacity-5 blur-3xl"></div>
            <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full border-2 border-primary-200 opacity-5 blur-xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full border-2 border-primary-200 opacity-5 blur-xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <FooterMap />

                <div className="mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Компания и контакты */}
                        <div>
                            <div className="mb-6">
                                <Link href="/" aria-label="На главную страницу">
                                    <div className="inline-block">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Образовательный терминал"
                                            width={180}
                                            height={50}
                                            sizes="180px"
                                            className="h-12 w-auto"
                                        />
                                    </div>
                                </Link>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Центр дополнительного профессионального образования. Лицензия на осуществление образовательной деятельности № Л035-01220-38/00227206 от 19 октября 2021.
                                </p>
                            </div>

                            <FooterSocials />

                            <div className="mt-6">
                                <div className="text-gray-600 space-y-2">
                                    <div className="flex items-start">
                                        <EmailIcon className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                                        <a href="mailto:terminal.38@mail.ru" className="hover:text-primary-600 transition-colors" aria-label="Написать на email terminal.38@mail.ru">terminal.38@mail.ru</a>
                                    </div>
                                    <div className="flex items-start">
                                        <ClockIcon className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                                        <span>Пн-Пт: 9:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Меню сайта */}
                        <FooterLinkSection title="Меню сайта" links={MAIN_LINKS} />

                        {/* Услуги */}
                        <FooterLinkSection title="Услуги" links={SERVICE_LINKS} />

                        {/* Юридическая информация */}
                        <FooterLinkSection title="Документы" links={LEGAL_LINKS} />
                    </div>
                </div>

                <div className="py-6 border-t border-gray-300 text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-600 mb-4 md:mb-0">
                            © {CURRENT_YEAR} Образовательный терминал | Все права защищены
                        </div>
                        <div className="text-gray-600">
                            <p>ООО «ОБРАЗОВАТЕЛЬНЫЙ ТЕРМИНАЛ» | ИНН: 3812528052 | ОГРН: 1163850098621</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
