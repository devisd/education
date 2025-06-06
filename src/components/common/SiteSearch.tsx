import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { SearchIcon } from '@/icons';
import { useRouter } from 'next/navigation';
import { useSearchData } from '../../utils/SearchDataContext';

// Тип для поиска
export type SearchLink = {
    title: string;
    href: string;
    category: string;
    description?: string;
};

export const SiteSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [searchResults, setSearchResults] = useState<SearchLink[]>([]);
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { allLinks, isLoading } = useSearchData();

    // Поиск
    React.useEffect(() => {
        if (!searchValue) {
            setSearchResults([]);
            return;
        }

        const searchTerm = searchValue.toLowerCase();
        const results = allLinks.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm);
            const descriptionMatch = item.description?.toLowerCase().includes(searchTerm);
            return titleMatch || descriptionMatch;
        });

        setSearchResults(results);
    }, [searchValue, allLinks]);

    // Закрытие при клике вне (десктоп)
    React.useEffect(() => {
        if (!searchOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (desktopRef.current && !desktopRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchOpen]);

    // Закрытие при клике вне (мобайл)
    React.useEffect(() => {
        if (!mobileSearchOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
                setMobileSearchOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileSearchOpen]);

    const renderSearchResults = () => {
        if (!searchValue) return null;

        if (isLoading) {
            return (
                <div className="px-4 py-2 text-gray-400 text-sm">
                    Загрузка...
                </div>
            );
        }

        if (searchResults.length === 0) {
            return (
                <div className="px-4 py-2 text-gray-400 text-sm">
                    Ничего не найдено. Попробуйте изменить запрос
                </div>
            );
        }

        // Группируем результаты по категориям
        const groupedResults = searchResults.reduce((acc, result) => {
            const category = result.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(result);
            return acc;
        }, {} as Record<string, SearchLink[]>);

        return (
            <div className="mt-2 bg-white rounded shadow max-h-96 overflow-y-auto border">
                {Object.entries(groupedResults).map(([category, results]) => (
                    <div key={category} className="border-b last:border-b-0">
                        <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700">
                            {category}
                        </div>
                        {results.map((result, idx) => (
                            <Link
                                key={`${category}-${result.title}-${idx}`}
                                href={result.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 text-sm"
                            >
                                <div className="font-medium">{result.title}</div>
                                {result.description && (
                                    <div className="text-gray-500 text-xs mt-1">
                                        {result.description}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const SearchInput = () => (
        <div className="relative">
            <input
                type="text"
                className="w-full px-3 py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Поиск по сайту..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                autoFocus
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
    );

    return <>
        {/* Десктоп */}
        <div className="hidden lg:block xl:hidden" ref={desktopRef}>
            <button
                className="p-0 ml-2 bg-transparent text-primary-600 hover:text-primary-900 focus:outline-none flex items-center justify-center"
                aria-label="Поиск"
                onClick={() => setSearchOpen(v => !v)}
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            {searchOpen && (
                <div className="fixed right-0 top-5 mt-2 p-3 w-96 bg-white rounded shadow border z-[1050]">
                    <SearchInput />
                    {renderSearchResults()}
                </div>
            )}
        </div>

        {/* Десктоп XL */}
        <div className="hidden xl:flex xl:items-center" ref={desktopRef}>
            <button
                className="p-0 ml-2 bg-transparent text-primary-600 hover:text-primary-900 focus:outline-none flex items-center justify-center"
                aria-label="Поиск"
                onClick={() => setSearchOpen(v => !v)}
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            {searchOpen && (
                <div className="fixed right-2 top-16 mt-2 p-3 w-96 bg-white rounded shadow border z-[1050]">
                    <SearchInput />
                    {renderSearchResults()}
                </div>
            )}
        </div>

        {/* Мобильные/планшеты */}
        <div className="flex lg:hidden items-center" ref={mobileRef}>
            <button
                className="bg-primary-600 text-white p-2 rounded-md"
                aria-label="Поиск"
                onClick={() => setMobileSearchOpen((v) => !v)}
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            {mobileSearchOpen && (
                <div className="fixed left-0 top-1 mt-2 p-3 w-[375px] bg-white rounded shadow border z-[1050]">
                    <SearchInput />
                    {renderSearchResults()}
                </div>
            )}
        </div>
    </>;
}; 