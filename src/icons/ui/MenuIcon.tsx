import React from 'react';

interface MenuIconProps {
    className?: string;
    isOpen?: boolean;
}

export const MenuIcon: React.FC<MenuIconProps> = ({
    className = 'h-6 w-6',
    isOpen = false
}) => {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            {isOpen ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            )}
        </svg>
    );
}; 