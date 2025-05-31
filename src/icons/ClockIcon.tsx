import React from 'react';

interface IconProps {
    className?: string;
}

export const ClockIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}; 