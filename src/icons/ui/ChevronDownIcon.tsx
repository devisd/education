import React from 'react';

interface IconProps {
    className?: string;
}

export const ChevronDownIcon: React.FC<IconProps> = ({
    className = 'ml-1 h-4 w-4'
}) => {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}; 