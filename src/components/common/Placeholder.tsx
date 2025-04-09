import Link from 'next/link';
import React from 'react';

interface PlaceholderProps {
    title: string;
    description?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
    title,
    description = 'Данная страница находится в разработке и будет доступна в ближайшее время.'
}) => {
    return (
        <div className="min-h-[50vh] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 text-center relative">
                {/* Декоративные круги */}
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-primary-100 opacity-5 blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-primary-100 opacity-5 blur-3xl"></div>

                <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">{title}</h1>
                <p className="text-gray-600 max-w-md mx-auto mb-8">{description}</p>
                <Link
                    href="/"
                    className="inline-block bg-[#d76944] text-white hover:bg-[#c05938] px-6 py-3 rounded-md font-medium transition-colors"
                >
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
}; 