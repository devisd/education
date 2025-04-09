import React from 'react';

interface IconProps {
    className?: string;
}

export const TelegramIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.417,15.33l-0.397,5.584c0.568,0,0.814-0.244,1.109-0.537l2.663-2.545l5.518,4.041c1.012,0.564,1.725,0.267,1.998-0.931l3.622-16.972l0.001-0.001c0.321-1.496-0.541-2.081-1.527-1.714l-21.29,8.151c-1.453,0.564-1.431,1.374-0.247,1.741l5.443,1.693L18.558,5.75c0.461-0.304,0.882-0.136,0.537,0.19L9.417,15.33z"></path>
        </svg>
    );
}; 