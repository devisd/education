import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '../../icons';
import type { NewsItem, INewsResponse } from '@/types';

interface NewsCardProps {
    item: INewsResponse;
}

const mapNewsResponseToNewsItem = (item: INewsResponse): NewsItem => ({
    id: item.id,
    title: item.Title,
    date: item.Date,
    excerpt: item.Description,
    content: item.Content ? item.Content.map(c => typeof c === 'string' ? c : JSON.stringify(c)) : [],
    image: item.Image?.url || '',
    slug: item.id.toString(),
    link: `/about/news/${item.documentId}`,
});

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
    const mapped = mapNewsResponseToNewsItem(item);
    const { title, date, excerpt, link, image } = mapped;

    return (
        <Link
            href={link}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group block"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                    width={340}
                    height={280}
                />
                <div className="absolute bottom-0 right-0 bg-white rounded-tl-lg py-1 px-3">
                    <p className="text-xs font-medium text-gray-600">{date}</p>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <div className="text-primary-600 font-medium group-hover:text-primary-800 flex items-center">
                    ПОДРОБНЕЕ
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
            </div>
        </Link>
    );
}; 