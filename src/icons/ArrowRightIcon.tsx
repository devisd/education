import React from 'react';

interface IconProps {
    className?: string;
}

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    );
}; 