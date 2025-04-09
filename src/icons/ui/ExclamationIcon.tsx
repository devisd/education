import React from 'react';

interface IconProps {
    className?: string;
}

export const ExclamationIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}; 