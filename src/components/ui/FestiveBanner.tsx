'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Интерфейс для настройки праздничных баннеров
interface Festival {
    id: string;
    startDate: Date;
    endDate: Date;
    title: string;
    message: string;
    image?: string;
    bgColor: string;
    textColor: string;
    // Флаг для баннеров, которые должны появляться ежедневно
    daily?: boolean;
}

// Настройки праздников
const festivals: Festival[] = [
    // Тестовый ежедневный баннер, который появляется каждый день
    {
        id: 'daily-test-banner',
        // Эти даты гарантируют, что баннер всегда активен
        startDate: new Date(2000, 0, 1), // 1 января 2000
        endDate: new Date(2100, 11, 31), // 31 декабря 2100
        title: 'Тестовый ежедневный баннер',
        message: 'Этот баннер будет отображаться каждый день, пока вы его не закроете',
        bgColor: 'bg-gradient-to-r from-yellow-50 to-amber-100',
        textColor: 'text-amber-800',
        daily: true,
    },
    {
        id: 'womens-day-2024',
        startDate: new Date(new Date().getFullYear(), 2, 7), // 7 марта
        endDate: new Date(new Date().getFullYear(), 2, 8, 23, 59, 59), // 8 марта конец дня
        title: 'С 8 марта!',
        message: 'Поздравляем всех женщин с праздником весны, красоты и нежности!',
        image: '/images/festivals/womens-day.svg', // Используем созданный SVG
        bgColor: 'bg-gradient-to-r from-pink-100 to-purple-100',
        textColor: 'text-purple-800',
    },
    {
        id: 'new-year-2024',
        startDate: new Date(new Date().getFullYear(), 11, 20), // 20 декабря
        endDate: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59), // 31 декабря конец дня
        title: 'С Новым годом!',
        message: 'Поздравляем с наступающим Новым годом! Пусть 2024 принесет удачу и успех!',
        image: '/images/festivals/new-year.svg', // Используем созданный SVG
        bgColor: 'bg-gradient-to-r from-blue-100 to-teal-100',
        textColor: 'text-teal-800',
    },
    // Добавьте больше праздников по необходимости
];

// Для тестирования: раскомментируйте это, чтобы принудительно активировать праздник независимо от даты
// const DEBUG_FESTIVAL_INDEX = 0; // Измените на 0 для 8 марта или 1 для Нового года

interface FestiveBannerProps {
    className?: string;
}

export const FestiveBanner: React.FC<FestiveBannerProps> = ({ className }) => {
    const [currentFestival, setCurrentFestival] = useState<Festival | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Проверяем, есть ли сегодня праздник
        const today = new Date();

        // Для отладки/тестирования:
        // if (typeof DEBUG_FESTIVAL_INDEX !== 'undefined') {
        //   setCurrentFestival(festivals[DEBUG_FESTIVAL_INDEX]);
        //   return;
        // }

        // Сначала пытаемся найти специальный праздник (не ежедневный)
        let activeFestival = festivals.find(
            (festival) => !festival.daily && today >= festival.startDate && today <= festival.endDate
        );

        // Если не найден специальный праздник, проверяем ежедневные баннеры
        if (!activeFestival) {
            const dailyFestival = festivals.find(
                (festival) => festival.daily && today >= festival.startDate && today <= festival.endDate
            );

            // Для ежедневных баннеров проверяем, закрывал ли пользователь его сегодня
            if (dailyFestival?.daily) {
                const lastClosedDate = localStorage.getItem(`banner-${dailyFestival.id}-lastClosed`);
                if (lastClosedDate) {
                    const lastClosed = new Date(lastClosedDate);
                    const isToday =
                        lastClosed.getDate() === today.getDate() &&
                        lastClosed.getMonth() === today.getMonth() &&
                        lastClosed.getFullYear() === today.getFullYear();

                    // Если он был закрыт сегодня, не показываем
                    if (!isToday) {
                        activeFestival = dailyFestival;
                    }
                } else {
                    // Если никогда не закрывался, показываем
                    activeFestival = dailyFestival;
                }
            }
        }

        // Устанавливаем текущий праздник, если найден
        setCurrentFestival(activeFestival || null);

        // Проверяем, закрывал ли пользователь этот праздничный баннер
        const dismissedFestivals = localStorage.getItem('dismissedFestivals');
        if (dismissedFestivals && activeFestival && !activeFestival.daily) {
            const parsedDismissed = JSON.parse(dismissedFestivals);
            if (parsedDismissed.includes(activeFestival.id)) {
                setIsVisible(false);
            }
        }
    }, []);

    const handleClose = () => {
        // Сохраняем состояние закрытия в localStorage
        if (currentFestival) {
            if (currentFestival.daily) {
                // Для ежедневных баннеров сохраняем текущую дату
                localStorage.setItem(
                    `banner-${currentFestival.id}-lastClosed`,
                    new Date().toISOString()
                );
            } else {
                // Для обычных баннеров добавляем в список закрытых
                const dismissedFestivals = localStorage.getItem('dismissedFestivals');

                let parsedDismissed: string[] = [];
                if (dismissedFestivals) {
                    parsedDismissed = JSON.parse(dismissedFestivals);
                }

                localStorage.setItem(
                    'dismissedFestivals',
                    JSON.stringify([...parsedDismissed, currentFestival.id])
                );
            }
        }

        setIsVisible(false);
    };

    if (!currentFestival || !isVisible) {
        return null;
    }

    return (
        <div className={`${className} rounded-lg shadow-md overflow-hidden ${currentFestival.bgColor}`}>
            <div className="relative p-4 sm:p-6 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <h3 className={`text-lg sm:text-xl font-bold ${currentFestival.textColor}`}>
                        {currentFestival.title}
                    </h3>
                    <p className={`mt-1 text-sm sm:text-base ${currentFestival.textColor}`}>
                        {currentFestival.message}
                    </p>
                </div>

                {currentFestival.image && (
                    <div className="flex-shrink-0 ml-4 relative w-16 h-16 sm:w-24 sm:h-24">
                        <Image
                            src={currentFestival.image}
                            alt={currentFestival.title}
                            width={96}
                            height={96}
                            className="object-contain"
                        />
                    </div>
                )}

                <button
                    onClick={handleClose}
                    className="ml-4 flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}; 