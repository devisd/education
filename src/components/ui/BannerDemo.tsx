import React from 'react';
import Image from 'next/image';
import { Alert } from './Alert';

// Демонстрация простых праздничных баннеров
const HolidayBannerDemo = () => {
    const holidays = [
        {
            message: 'С Международным женским днем! 🌷',
            type: 'success' as const,
        },
        {
            message: 'С наступающим Новым годом! 🎄',
            type: 'info' as const,
        },
        {
            message: 'С Днем защитника Отечества!',
            type: 'warning' as const,
        },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Простые баннеры</h2>
            {holidays.map((holiday, index) => (
                <div key={index} className="max-w-4xl">
                    <Alert
                        message={holiday.message}
                        type={holiday.type}
                        onClose={() => { }}
                    />
                </div>
            ))}
        </div>
    );
};

// Демонстрация праздничных баннеров с изображениями
const FestiveBannerDemo = () => {
    const festivals = [
        {
            title: 'С 8 марта!',
            message: 'Поздравляем всех женщин с праздником весны, красоты и нежности!',
            image: '/images/festivals/womens-day.svg',
            bgColor: 'bg-gradient-to-r from-pink-100 to-purple-100',
            textColor: 'text-purple-800',
        },
        {
            title: 'С Новым годом!',
            message: 'Поздравляем с наступающим Новым годом! Пусть 2024 принесет удачу и успех!',
            image: '/images/festivals/new-year.svg',
            bgColor: 'bg-gradient-to-r from-blue-100 to-teal-100',
            textColor: 'text-blue-800',
        },
        {
            title: '23 февраля',
            message: 'Поздравляем с Днем защитника Отечества!',
            bgColor: 'bg-gradient-to-r from-green-100 to-blue-100',
            textColor: 'text-blue-800',
        },
    ];

    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-xl font-bold">Праздничные баннеры</h2>
            {festivals.map((festival, index) => (
                <div key={index} className={`max-w-4xl rounded-lg shadow-md overflow-hidden ${festival.bgColor}`}>
                    <div className="relative p-4 sm:p-6 flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                            <h3 className={`text-lg sm:text-xl font-bold ${festival.textColor}`}>
                                {festival.title}
                            </h3>
                            <p className={`mt-1 text-sm sm:text-base ${festival.textColor}`}>
                                {festival.message}
                            </p>
                        </div>

                        {festival.image && (
                            <div className="flex-shrink-0 ml-4 relative w-16 h-16 sm:w-24 sm:h-24">
                                <Image
                                    src={festival.image}
                                    alt={festival.title}
                                    width={96}
                                    height={96}
                                    className="object-contain"
                                />
                            </div>
                        )}

                        <button
                            className="ml-4 flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors"
                            aria-label="Close"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Общий компонент для демонстрации баннеров
export const BannerDemo: React.FC = () => {
    return (
        <div className="p-4 space-y-8">
            <h1 className="text-2xl font-bold">Демонстрация праздничных баннеров</h1>
            <HolidayBannerDemo />
            <FestiveBannerDemo />
        </div>
    );
}; 