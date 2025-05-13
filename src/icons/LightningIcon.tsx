import React from 'react';

interface IconProps {
    className?: string;
}

export const LightningIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L4.8 12.4C4.3 13.1 4.1 13.4 4.2 13.7C4.3 14 4.5 14.1 5 14.1H12L11 22L19.2 11.6C19.7 10.9 19.9 10.6 19.8 10.3C19.7 10 19.5 9.9 19 9.9H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}; 