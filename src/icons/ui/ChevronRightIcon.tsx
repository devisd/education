import React from 'react';

interface IconProps {
    className?: string;
}

export const ChevronRightIcon: React.FC<IconProps> = ({ className = 'h-4 w-4' }) => {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
    );
}; 