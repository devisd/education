'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TelegramIcon, WhatsAppIcon, ChevronDownIcon, MenuIcon, MapIcon, PhoneIcon, EmailIcon } from '@/icons';
import { EDUCATIONAL_SERVICES, ORGANIZATION_INFO, MAIN_MENU } from '../../constants/header';
import { CONTACT_LINKS } from '../../constants/footer';
import type { MenuItem } from '@/types';
import { Dropdown, DropdownItem, DropdownSubmenu, VisuallyImpairedModeToggle } from '../ui';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Состояния для мобильных подменю
    const [eduMenuOpen, setEduMenuOpen] = useState(false);
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
    const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
    // Состояние для открытого десктопного дропдауна
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Добавляем обработчик скролла для закрытия всех дропдаунов
    useEffect(() => {
        const handleScroll = () => {
            // Закрываем все раскрытые меню на мобильных
            setEduMenuOpen(false);
            setAboutMenuOpen(false);
            setCoursesMenuOpen(false);

            // Закрываем десктопные дропдауны через диспетчер событий
            document.dispatchEvent(new CustomEvent('dropdown:close', { detail: { except: '' } }));
        };

        // Привязываем обработчик к событию скролла
        window.addEventListener('scroll', handleScroll);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                            onClick={() => setOpenDropdown(null)}
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
                    <div className="text-white hover:text-gray-100 flex items-center cursor-pointer text-sm xl:text-base">
                        {item.title}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </div>
                }
                isOpen={openDropdown === item.title}
                onOpen={() => setOpenDropdown(item.title)}
                onClose={() => setOpenDropdown(null)}
            >
                {item.children.map((child, idx) => {
                    if (child.children) {
                        return <React.Fragment key={`menu-child-${child.title}-${idx}`}>{renderDesktopSubmenu(child, true)}</React.Fragment>;
                    }
                    return (
                        <DropdownItem
                            key={`menu-item-${child.title}-${idx}`}
                            href={child.href || '#'}
                            onClick={() => setOpenDropdown(null)}
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
                                        <Link
                                            href={child.href || '#'}
                                            key={`mobile-link-${child.title}-${idx}`}
                                            className="block py-1 text-gray-600"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setEduMenuOpen(false);
                                                setAboutMenuOpen(false);
                                                setCoursesMenuOpen(false);
                                            }}
                                        >
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
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setEduMenuOpen(false);
                                                            setAboutMenuOpen(false);
                                                            setCoursesMenuOpen(false);
                                                        }}
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
                <Link
                    href={item.href || '#'}
                    className="block py-2 text-gray-700"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setEduMenuOpen(false);
                        setAboutMenuOpen(false);
                        setCoursesMenuOpen(false);
                    }}
                >
                    {item.title}
                </Link>
            </div>
        );
    };

    return (
        <header className="bg-white shadow-md relative overflow-hidden z-[1000]">
            {/* Верхняя часть шапки с контактной информацией */}
            <div className="bg-gray-100 py-2 hidden lg:block">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center font-bold gap-4 xl:gap-10 text-sm text-gray-600">
                            <Link href="/" className="flex items-center">
                                <div className="h-24 w-56 relative">
                                    <Image
                                        src="/images/logo_mobile.png"
                                        alt="Образовательный терминал"
                                        fill
                                        sizes="(min-width: 1280px) 224px, (min-width: 1024px) 180px, 80px"
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* Адрес */}
                            <div className='text-primary-600 whitespace-nowrap'>
                                <a href={CONTACT_LINKS[0].href} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-900">
                                    <MapIcon className="h-5 w-5 mr-2 text-primary-600 flex-shrink-0 lg:h-6 lg:w-6" />
                                    <span className="text-sm lg:text-xs xl:text-lg">{CONTACT_LINKS[0].name}</span>
                                </a>
                            </div>

                            {/* Телефоны */}
                            <div className="flex items-center text-primary-600">
                                <PhoneIcon className="h-5 w-5 mr-2 text-primary-600 flex-shrink-0 lg:h-6 lg:w-6" />
                                <div className='flex flex-col'>
                                    <a href={CONTACT_LINKS[1].href} className="flex items-center hover:text-primary-900 text-sm lg:text-xs xl:text-lg whitespace-nowrap">
                                        {CONTACT_LINKS[1].name}
                                    </a>
                                    <a href={CONTACT_LINKS[2].href} className="flex items-center hover:text-primary-900 text-sm lg:text-xs xl:text-lg whitespace-nowrap">
                                        {CONTACT_LINKS[2].name}
                                    </a>
                                </div>
                            </div>

                            {/* Почта */}
                            <div className='text-primary-600 hover:text-primary-900 whitespace-nowrap'>
                                <a href={CONTACT_LINKS[3].href} className="flex items-center">
                                    <EmailIcon className="h-5 w-5 mr-2 text-primary-600 flex-shrink-0 lg:h-6 lg:w-6" />
                                    <span className="text-sm lg:text-xs xl:text-lg">{CONTACT_LINKS[3].name}</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col wide:flex-row items-center gap-2 space-y-1.5">
                            <div className="flex items-center justify-center space-x-4 w-full">
                                <a href="https://t.me/termedu38" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-900">
                                    <span className="sr-only">Telegram</span>
                                    <TelegramIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                                </a>
                                <a href="https://wa.me/79149148185" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-900">
                                    <span className="sr-only">WhatsApp</span>
                                    <WhatsAppIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                                </a>
                            </div>
                            <div className="hidden lg:block xl:hidden">
                                <VisuallyImpairedModeToggle fontSize="small" compact={false} verticalLayout={false} />
                            </div>
                            <div className="hidden xl:flex xl:items-center">
                                <div className="h-6 w-px bg-gray-300 mx-2"></div>
                                <VisuallyImpairedModeToggle fontSize="small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основная часть шапки с меню */}
            <div className="lg:bg-[#d76944] bg-transparent relative z-30">
                <div className="container mx-auto max-md:max-w-full px-4 lg:px-2 xl:px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Логотип для мобильных устройств */}
                        <div className="flex lg:hidden items-center">
                            <Link href="/" className="flex items-center">
                                <div className="h-10 w-28 sm:h-12 sm:w-32 md:h-14 md:w-36 relative">
                                    <Image
                                        src="/images/logo_mobile.png"
                                        alt="Образовательный терминал"
                                        fill
                                        sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px"
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop menu */}
                        <nav className="hidden lg:flex items-center justify-between w-full relative">
                            {MAIN_MENU.map((item, idx) => {
                                if (item.children) {
                                    return <React.Fragment key={`main-menu-${item.title}-${idx}`}>{renderDesktopSubmenu(item)}</React.Fragment>;
                                }
                                return (
                                    <Link key={`main-link-${item.title}-${idx}`} href={item.href || '#'} className="text-white hover:text-gray-100 text-sm xl:text-base whitespace-nowrap">
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center justify-end space-x-4 ml-auto">
                            <VisuallyImpairedModeToggle compact={true} fontSize="small" />
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
                        <div className="text-sm text-gray-600 space-y-2">
                            {/* Адрес */}
                            <div>
                                <a href={CONTACT_LINKS[0].href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    <MapIcon className="h-5 w-5 mr-2 text-primary-600" />
                                    {CONTACT_LINKS[0].name}
                                </a>
                            </div>
                            {/* Телефоны */}
                            <div>
                                <a href={CONTACT_LINKS[1].href} className="flex items-center justify-center">
                                    <PhoneIcon className="h-5 w-5 mr-2 text-primary-600" />
                                    {CONTACT_LINKS[1].name}
                                </a>
                            </div>
                            <div>
                                <a href={CONTACT_LINKS[2].href} className="flex items-center justify-center">
                                    <PhoneIcon className="h-5 w-5 mr-2 text-primary-600" />
                                    {CONTACT_LINKS[2].name}
                                </a>
                            </div>
                            {/* Email */}
                            <div>
                                <a href={CONTACT_LINKS[3].href} className="flex items-center justify-center">
                                    <EmailIcon className="h-5 w-5 mr-2 text-primary-600" />
                                    {CONTACT_LINKS[3].name}
                                </a>
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.displayName = 'Header';
