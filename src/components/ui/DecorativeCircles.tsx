import React from 'react';

interface DecorativeCirclesProps {
    className?: string;
    color?: string;
}

export const DecorativeCircles: React.FC<DecorativeCirclesProps> = ({
    className = '',
    color = 'primary'
}) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className={`absolute -right-20 -top-20 w-72 h-72 rounded-full border-16 border-${color}-100 opacity-5 blur-3xl`}></div>
            <div className={`absolute left-10 bottom-10 w-48 h-48 rounded-full border-8 border-${color}-200 opacity-5 blur-2xl`}></div>
            <div className={`absolute left-1/3 top-1/4 w-32 h-32 rounded-full border-4 border-${color}-300 opacity-5 blur-xl`}></div>
            <div className={`absolute right-1/4 bottom-1/3 w-24 h-24 rounded-full border-4 border-${color}-300 opacity-5 blur-lg`}></div>
        </div>
    );
}; 