import React from 'react';

interface IconProps {
    className?: string;
}

export const BookIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.5C12 6.67 11.33 6 10.5 6H4V18H10.5C11.33 18 12 18.67 12 19.5V7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.5C12 6.67 12.67 6 13.5 6H20V18H13.5C12.67 18 12 18.67 12 19.5V7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}; 