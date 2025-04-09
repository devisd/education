import React from 'react';

interface IconProps {
    className?: string;
}

export const ClockIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}; 