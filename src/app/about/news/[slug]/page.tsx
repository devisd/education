'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { NEWS_ITEMS } from '@/constants/news';
import { ArrowRightIcon } from '@/icons';
import { TeamIcon, ShieldIcon, ChecklistIcon, CurrencyCircleIcon } from '@/icons';
import ReactMarkdown from 'react-markdown';

const getIconByType = (iconType: string) => {
    switch (iconType) {
        case 'team':
            return <TeamIcon className="w-12 h-12 text-white" />;
        case 'shield':
            return <ShieldIcon className="w-12 h-12 text-white" />;
        case 'checklist':
            return <ChecklistIcon className="w-12 h-12 text-white" />;
        case 'currency':
            return <CurrencyCircleIcon className="w-12 h-12 text-white" />;
        default:
            return null;
    }
};

export default function NewsDetailPage() {
    const { slug } = useParams();
    const newsItem = NEWS_ITEMS.find(item => item.slug === slug);

    if (!newsItem) {
        return (
            <div className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Новость не найдена
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Извините, запрашиваемая новость не найдена. Пожалуйста, вернитесь к списку новостей.
                        </p>
                        <Link
                            href="/about/news"
                            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                        >
                            <ArrowRightIcon className="w-5 h-5 mr-2 transform rotate-180" />
                            <span>Вернуться к списку новостей</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-primary-300 opacity-5 blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-primary-300 opacity-5 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-primary-400 opacity-5 blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border-6 border-primary-300 opacity-5 blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className={`bg-gradient-to-r ${newsItem.gradient} p-6 md:p-8 text-white`}>
                        <header className="mb-4">
                            <div className="flex items-center">
                                <div className="mr-5">
                                    {getIconByType(newsItem.iconType)}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-white/80 mb-1">{newsItem.date}</p>
                                    <h1 className="text-2xl md:text-3xl font-bold">
                                        {newsItem.title}
                                    </h1>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="prose prose-lg max-w-none">
                            {newsItem.content.map((paragraph, index) => (
                                <div key={index} className="mb-6 prose max-w-none">
                                    <ReactMarkdown>
                                        {paragraph}
                                    </ReactMarkdown>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                <div className="mt-12">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Другие новости и акции</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {NEWS_ITEMS.filter(item => item.id !== newsItem.id)
                            .slice(0, 3)
                            .map(item => (
                                <Link
                                    key={item.id}
                                    href={item.link}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group block"
                                >
                                    <div className="h-24 relative">
                                        <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-4`}>
                                            <div className="flex flex-col items-center">
                                                {getIconByType(item.iconType)}
                                                <span className="text-xs font-medium text-white bg-white/20 rounded-full px-3 py-1 mt-2">
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                                        <div className="text-primary-600 font-medium group-hover:text-primary-800 flex items-center">
                                            Подробнее
                                            <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/about/news"
                        className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                    >
                        <ArrowRightIcon className="w-5 h-5 mr-2 transform rotate-180" />
                        <span>Вернуться к списку новостей</span>
                    </Link>
                </div>
            </div>
        </section>
    );
} 