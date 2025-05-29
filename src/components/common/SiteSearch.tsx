import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown } from '../ui';
import { SearchIcon } from '@/icons';
import { MAIN_MENU } from '../../constants/header';
import { NEWS_ITEMS } from '../../constants/news';
import { TRAINING_CATEGORIES } from '../../constants/trainingCategories';
import { MENU_LINKS, EDU_LINKS } from '../../constants/footer';
import { VisuallyImpairedModeToggle } from '../ui';

// Тип для поиска
export type SearchLink = { title: string; href: string };

function flattenMenu(menu: any[]): SearchLink[] {
    let result: SearchLink[] = [];
    for (const item of menu) {
        if (item.href) result.push({ title: item.title, href: item.href });
        if (item.children) result = result.concat(flattenMenu(item.children));
    }
    return result;
}

const menuLinks: SearchLink[] = flattenMenu(MAIN_MENU);
const trainingLinks: SearchLink[] = TRAINING_CATEGORIES.map(c => ({ title: c.title, href: c.href }));
const newsLinks: SearchLink[] = NEWS_ITEMS.map(n => ({ title: n.title, href: n.link }));
const footerLinks: SearchLink[] = MENU_LINKS.map(l => ({ title: l.name, href: l.href }));
const eduLinks: SearchLink[] = EDU_LINKS.map(l => ({ title: l.name, href: l.href }));
const allLinks: SearchLink[] = [
    ...menuLinks,
    ...trainingLinks,
    ...newsLinks,
    ...footerLinks,
    ...eduLinks,
];

export const SiteSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchOpen, setSearchOpen] = useState(false); // для десктопа
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const searchResults = searchValue.length > 0
        ? allLinks.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        : [];

    // UI
    return <>
        {/* Десктоп */}
        <div className="hidden lg:block xl:hidden">
            <Dropdown
                id="search-desktop"
                trigger={
                    <button
                        className="p-0 ml-2 bg-transparent text-primary-600 hover:text-primary-900 focus:outline-none flex items-center justify-center"
                        aria-label="Поиск"
                        onClick={() => setSearchOpen(v => !v)}
                    >
                        <SearchIcon className="h-6 w-6" />
                    </button>
                }
                isOpen={searchOpen}
                onOpen={() => setSearchOpen(true)}
                onClose={() => setSearchOpen(false)}
            >
                <div className="p-3 w-72">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        autoFocus
                    />
                    {searchValue && (
                        <div className="mt-2 bg-white rounded shadow max-h-60 overflow-y-auto border">
                            {searchResults.length > 0 ? (
                                searchResults.map((item, idx) => (
                                    <Link
                                        key={`search-result-${item.title}-${idx}`}
                                        href={item.href || '#'}
                                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 text-sm"
                                        onClick={() => setSearchOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-400 text-sm">Ничего не найдено</div>
                            )}
                        </div>
                    )}
                </div>
            </Dropdown>
        </div>
        <div className="hidden xl:flex xl:items-center">
            <Dropdown
                id="search-desktop-xl"
                trigger={
                    <button
                        className="p-0 ml-2 bg-transparent text-primary-600 hover:text-primary-900 focus:outline-none flex items-center justify-center"
                        aria-label="Поиск"
                        onClick={() => setSearchOpen(v => !v)}
                    >
                        <SearchIcon className="h-6 w-6" />
                    </button>
                }
                isOpen={searchOpen}
                onOpen={() => setSearchOpen(true)}
                onClose={() => setSearchOpen(false)}
            >
                <div className="p-3 w-72">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        autoFocus
                    />
                    {searchValue && (
                        <div className="mt-2 bg-white rounded shadow max-h-60 overflow-y-auto border">
                            {searchResults.length > 0 ? (
                                searchResults.map((item, idx) => (
                                    <Link
                                        key={`search-result-xl-${item.title}-${idx}`}
                                        href={item.href || '#'}
                                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 text-sm"
                                        onClick={() => setSearchOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-400 text-sm">Ничего не найдено</div>
                            )}
                        </div>
                    )}
                </div>
            </Dropdown>
        </div>
        {/* Мобильные/планшеты */}
        <div className="flex lg:hidden items-center">
            <Dropdown
                id="search-mobile"
                trigger={
                    <button
                        className="bg-primary-600 text-white p-2 rounded-md"
                        aria-label="Поиск"
                        onClick={() => setMobileSearchOpen((v) => !v)}
                    >
                        <SearchIcon className="h-6 w-6" />
                    </button>
                }
                isOpen={mobileSearchOpen}
                onOpen={() => setMobileSearchOpen(true)}
                onClose={() => setMobileSearchOpen(false)}
            >
                <div className="p-3 w-72">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        autoFocus
                    />
                    {searchValue && (
                        <div className="mt-2 bg-white rounded shadow max-h-60 overflow-y-auto border">
                            {searchResults.length > 0 ? (
                                searchResults.map((item, idx) => (
                                    <Link
                                        key={`search-result-mobile-${item.title}-${idx}`}
                                        href={item.href || '#'}
                                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 text-sm"
                                        onClick={() => setMobileSearchOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-400 text-sm">Ничего не найдено</div>
                            )}
                        </div>
                    )}
                </div>
            </Dropdown>
        </div>
    </>;
}; 