'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TelegramIcon, WhatsAppIcon, ChevronDownIcon, MenuIcon } from '@/icons';
import { EDUCATIONAL_SERVICES, ORGANIZATION_INFO, MAIN_MENU } from '../../constants/header';
import { MenuItem } from '@/types';
import { Dropdown, DropdownItem, DropdownSubmenu } from '../ui';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Состояния для мобильных подменю
    const [eduMenuOpen, setEduMenuOpen] = useState(false);
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
    const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
    const router = useRouter();

    const scrollToContactForm = () => {
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const goToConsultation = () => {
        router.push('/consultation');
        setMobileMenuOpen(false);
    };

    // Функция для рендеринга вложенного меню на десктопе
    const renderDesktopSubmenu = (item: MenuItem, isSubMenu = false) => {
        if (!item.children) return null;

        if (isSubMenu) {
            return (
                <DropdownSubmenu
                    trigger={item.title}
                >
                    {item.children.map((child, idx) => (
                        <DropdownItem
                            key={`submenu-item-${child.title}-${idx}`}
                            href={child.href || '#'}
                        >
                            {child.title}
                        </DropdownItem>
                    ))}
                </DropdownSubmenu>
            );
        }

        return (
            <Dropdown
                id={`menu-${item.title.toLowerCase()}`}
                className="group"
                trigger={
                    <div className="text-white hover:text-gray-100 flex items-center cursor-pointer">
                        {item.title}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </div>
                }
            >
                {item.children.map((child, idx) => {
                    if (child.children) {
                        return <React.Fragment key={`menu-child-${child.title}-${idx}`}>{renderDesktopSubmenu(child, true)}</React.Fragment>;
                    }
                    return (
                        <DropdownItem
                            key={`menu-item-${child.title}-${idx}`}
                            href={child.href || '#'}
                        >
                            {child.title}
                        </DropdownItem>
                    );
                })}
            </Dropdown>
        );
    };

    // Функция для рендеринга пунктов мобильного меню
    const renderMobileMenuItem = (item: MenuItem) => {
        if (item.children) {
            const isOpen = item === EDUCATIONAL_SERVICES ? eduMenuOpen : item === ORGANIZATION_INFO ? aboutMenuOpen : false;
            const setOpen = item === EDUCATIONAL_SERVICES ? setEduMenuOpen : item === ORGANIZATION_INFO ? setAboutMenuOpen : () => { };

            return (
                <div className="border-b pb-2">
                    <button
                        className="flex justify-between w-full py-2 text-gray-700 items-center"
                        onClick={() => setOpen(!isOpen)}
                    >
                        {item.title}
                        <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                            {item.children.map((child, idx) => {
                                if (!child.children) {
                                    return (
                                        <Link href={child.href || '#'} key={`mobile-link-${child.title}-${idx}`} className="block py-1 text-gray-600">
                                            {child.title}
                                        </Link>
                                    );
                                }
                                return (
                                    <div key={`mobile-submenu-${child.title}-${idx}`} className="py-2 text-gray-700">
                                        <button
                                            className="flex justify-between w-full py-2 text-gray-700 text-left items-center"
                                            onClick={() => setCoursesMenuOpen(!coursesMenuOpen)}
                                        >
                                            {child.title}
                                            <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${coursesMenuOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {coursesMenuOpen && (
                                            <div className="pl-3 mt-1 space-y-1 mb-1">
                                                {child.children?.map((subChild, subIdx) => (
                                                    <Link
                                                        href={subChild.href || '#'}
                                                        key={`mobile-sublink-${subChild.title}-${subIdx}`}
                                                        className="block py-1 text-gray-600 text-sm"
                                                    >
                                                        {subChild.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className="border-b pb-2">
                <Link href={item.href || '#'} className="block py-2 text-gray-700">
                    {item.title}
                </Link>
            </div>
        );
    };

    return (
        <header className="bg-white shadow-md relative overflow-hidden z-[1000]">
            {/* Декоративные круги */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-primary-200 opacity-5 blur-xl"></div>
            <div className="absolute bottom-5 -left-20 w-48 h-48 rounded-full border-4 border-primary-200 opacity-5 blur-xl"></div>
            <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border-2 border-primary-300 opacity-5 blur-lg"></div>

            {/* Верхняя часть шапки с контактной информацией */}
            <div className="bg-gray-100 py-2 hidden lg:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <Link href="/" className="flex items-center mr-4">
                                <div className="h-12 w-28 relative">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Образовательный терминал"
                                        fill
                                        sizes="(max-width: 768px) 80px, 112px"
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </div>
                            </Link>
                            <div>
                                <span>ИРКУТСК, УЛ. СЕРГЕЕВА 3/1, ОФ. 325</span>
                            </div>
                            <div>
                                <a href="tel:+73952434312" className="hover:text-primary-600">+7 (3952) 43-43-12</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="https://t.me/termedu38" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700">
                                <span className="sr-only">Telegram</span>
                                <TelegramIcon className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/79149148185" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-900">
                                <span className="sr-only">WhatsApp</span>
                                <WhatsAppIcon className="h-5 w-5" />
                            </a>
                            <button
                                className="text-primary-800 bg-primary-100 hover:bg-primary-200 px-4 py-2 rounded-md text-sm font-medium"
                                onClick={scrollToContactForm}
                            >
                                ОСТАВИТЬ ЗАЯВКУ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основная часть шапки с меню */}
            <div className="bg-[#d76944] relative z-30">
                <div className="container mx-auto max-md:max-w-full px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Логотип для мобильных устройств */}
                        <div className="flex lg:hidden items-center bg-white rounded-md max-md:w-24 px-2">
                            <Link href="/" className="flex items-center">
                                <div className="h-8 w-20 relative ">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Образовательный терминал"
                                        fill
                                        sizes="(max-width: 768px) 80px, 112px"
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop menu */}
                        <nav className="hidden lg:flex items-center space-x-6 relative">
                            {MAIN_MENU.map((item, idx) => {
                                if (item.children) {
                                    return <React.Fragment key={`main-menu-${item.title}-${idx}`}>{renderDesktopSubmenu(item)}</React.Fragment>;
                                }
                                return (
                                    <Link key={`main-link-${item.title}-${idx}`} href={item.href || '#'} className="text-white hover:text-gray-100">
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Кнопка консультации в правой части (только для десктопов) */}
                        <button
                            className="hidden lg:block bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium shadow-sm"
                            onClick={goToConsultation}
                        >
                            КОНСУЛЬТАЦИЯ
                        </button>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center justify-end space-x-4 ml-auto">
                            <button
                                className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium shadow-sm"
                                onClick={goToConsultation}
                            >
                                КОНСУЛЬТАЦИЯ
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="bg-primary-600 text-white p-2 rounded-md"
                            >
                                <MenuIcon className="h-6 w-6" isOpen={mobileMenuOpen} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden fixed inset-0 pb-1 bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-opacity z-50 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div
                    className={`fixed right-0 top-0 bottom-0 w-full mob:w-[360px] bg-white shadow-xl transform transition-transform overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Mobile menu content */}
                    <div className="flex justify-between items-center border-b-2 border-gray-500 p-4">
                        <h3 className="text-lg font-semibold text-gray-800">Меню</h3>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Закрыть меню"
                        >
                            <MenuIcon isOpen={true} className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-180px)]">
                        {MAIN_MENU.map((item, idx) => (
                            <React.Fragment key={`mobile-menu-${item.title}-${idx}`}>
                                {renderMobileMenuItem(item)}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="mt-auto border-t-2 border-gray-500 text-center p-4">
                        <div className="text-sm text-gray-600">
                            <div className="mb-2">
                                <span>ИРКУТСК, УЛ. СЕРГЕЕВА 3/1, ОФ. 325</span>
                            </div>
                            <div>
                                <a href="tel:+73952434312" className="hover:text-primary-600">+7 (3952) 43-43-12</a>,&nbsp;
                                <a href="tel:+79149148185" className="hover:text-primary-600">+7 (914) 91-48-185</a>
                            </div>
                        </div>

                        <div className="flex space-x-4 items-center justify-center mt-3">
                            <a href="https://t.me/termedu38" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700">
                                <span className="sr-only">Telegram</span>
                                <TelegramIcon className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/79149148185" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-900">
                                <span className="sr-only">WhatsApp</span>
                                <WhatsAppIcon className="h-5 w-5" />
                            </a>
                            <button
                                className="text-primary-800 bg-primary-100 hover:bg-primary-200 px-3 py-3 rounded-md text-sm font-medium"
                                onClick={scrollToContactForm}
                            >
                                ОСТАВИТЬ ЗАЯВКУ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.displayName = 'Header';
