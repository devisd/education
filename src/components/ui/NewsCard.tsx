import React from 'react';
import Link from 'next/link';
import { TeamIcon, ShieldIcon, ChecklistIcon, CurrencyCircleIcon, ArrowRightIcon } from '../../icons';
import { NewsItem, IconType } from '../../constants/news';

const getIconByType = (iconType: IconType) => {
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

interface NewsCardProps {
    item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
    const { title, date, excerpt, link, iconType, gradient } = item;
    const icon = getIconByType(iconType);

    return (
        <Link
            href={link}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group block"
        >
            <div className="relative h-48 w-full">
                <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center p-5 group-hover:opacity-90 transition-opacity duration-300`}>
                    {icon}
                </div>
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