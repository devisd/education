'use client'

import React, { useEffect, useState } from 'react';
import { Alert } from './Alert';

// Интерфейс для настройки праздничных баннеров
interface Holiday {
    startDate: Date;
    endDate: Date;
    message: string;
    type: 'success' | 'info' | 'warning';
}

// Настройки праздников
const holidays: Holiday[] = [
    {
        // Международный женский день (8 марта)
        startDate: new Date(new Date().getFullYear(), 2, 7), // 7 марта (месяцы нумеруются с 0)
        endDate: new Date(new Date().getFullYear(), 2, 8, 23, 59, 59), // 8 марта конец дня
        message: 'С Международным женским днем! 🌷',
        type: 'success',
    },
    {
        // Новый год
        startDate: new Date(new Date().getFullYear(), 11, 25), // 25 декабря
        endDate: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59), // 31 декабря конец дня
        message: 'С наступающим Новым годом! 🎄',
        type: 'info',
    },
    // Добавьте больше праздников по необходимости
];

interface HolidayBannerProps {
    className?: string;
    onClose?: () => void;
}

export const HolidayBanner: React.FC<HolidayBannerProps> = ({ className, onClose }) => {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Проверяем, есть ли сегодня праздник
        const today = new Date();
        const activeHoliday = holidays.find(
            (holiday) => today >= holiday.startDate && today <= holiday.endDate
        );

        // Устанавливаем текущий праздник, если найден
        setCurrentHoliday(activeHoliday || null);

        // Проверяем, закрывал ли пользователь этот баннер ранее
        const dismissedHolidays = localStorage.getItem('dismissedHolidays');
        if (dismissedHolidays && activeHoliday) {
            const parsedDismissed = JSON.parse(dismissedHolidays);
            const holidayKey = `${activeHoliday.message}-${activeHoliday.startDate.toISOString()}`;
            if (parsedDismissed.includes(holidayKey)) {
                setIsVisible(false);
            }
        }
    }, []);

    const handleClose = () => {
        // Сохраняем состояние закрытия в localStorage
        if (currentHoliday) {
            const dismissedHolidays = localStorage.getItem('dismissedHolidays');
            const holidayKey = `${currentHoliday.message}-${currentHoliday.startDate.toISOString()}`;

            let parsedDismissed: string[] = [];
            if (dismissedHolidays) {
                parsedDismissed = JSON.parse(dismissedHolidays);
            }

            localStorage.setItem(
                'dismissedHolidays',
                JSON.stringify([...parsedDismissed, holidayKey])
            );
        }

        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!currentHoliday || !isVisible) {
        return null;
    }

    return (
        <div className={className}>
            <Alert
                message={currentHoliday.message}
                type={currentHoliday.type}
                onClose={handleClose}
            />
        </div>
    );
}; 