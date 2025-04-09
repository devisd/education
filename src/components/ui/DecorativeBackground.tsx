import React from 'react';

export const DecorativeBackground: React.FC = () => {
    return (
        <>
            {/* Фоновый градиент */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-primary-50 opacity-70"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200 via-transparent to-transparent opacity-20"></div>
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary-100 to-transparent opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute left-1/4 top-1/4 w-48 h-48 bg-primary-200 opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute right-1/4 bottom-1/4 w-32 h-32 bg-gray-200 opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            {/* Добавляем декоративные круги */}
            <div className="absolute right-1/3 top-10 w-40 h-40 rounded-full border-8 border-primary-200 opacity-5 blur-2xl"></div>
            <div className="absolute left-1/3 bottom-20 w-60 h-60 rounded-full border-8 border-primary-200 opacity-5 blur-3xl"></div>
            <div className="absolute left-10 top-1/3 w-20 h-20 rounded-full border-4 border-primary-300 opacity-5 blur-xl"></div>
            <div className="absolute right-20 bottom-1/3 w-16 h-16 rounded-full border-4 border-primary-300 opacity-5 blur-lg"></div>
            <div className="absolute left-1/4 top-3/4 w-24 h-24 rounded-full border-6 border-primary-300 opacity-5 blur-xl"></div>
        </>
    );
}; 