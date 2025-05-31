import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/icons';
import { getNews, getAllNews } from '@/api/services';
import type { INewsResponse } from '@/types';
import { renderBlocksWithBorders } from '@/api/parse';
import { NewsCard } from '@/components/ui';

interface NewsDetailPageProps {
    params: { id: string };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
    const { id } = params;

    let newsItem: INewsResponse | null = null;
    let error = null;
    let randomNews: INewsResponse[] = [];
    try {
        const { data } = await getNews(id);
        newsItem = data || null;
        // Получаем все новости и фильтруем текущую
        const allNewsRes = await getAllNews();
        const allNews = allNewsRes.data || [];
        const filtered = allNews.filter((n) => n.id !== Number(id));
        // Перемешиваем и берем 4
        randomNews = filtered.sort(() => 0.5 - Math.random()).slice(0, 4);
    } catch (e) {
        error = e;
    }

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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-0 md:p-0 flex items-stretch">
                        <div className="w-4/6 md:w-2/3 flex flex-col gap-4 justify-start md:pb-2 p-6 md:pt-8 text-white">
                            <h1 className="text-2xl md:text-3xl font-bold">{newsItem.Title}</h1>
                            <p className="text-sm text-white/80 mb-2 mt-auto">{newsItem.Date}</p>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="prose prose-lg max-w-none">
                            <div className="mb-6 prose max-w-none">
                                {renderBlocksWithBorders(newsItem.Content || null)}
                            </div>
                        </div>
                    </div>
                </article>

                <div className="mt-16 text-center">
                    <Link
                        href="/about/news"
                        className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                    >
                        <ArrowRightIcon className="w-5 h-5 mr-2 transform rotate-180" />
                        <span>Вернуться к списку новостей</span>
                    </Link>
                </div>

                {randomNews.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Другие новости</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {randomNews.map((item) => (
                                <NewsCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
} 