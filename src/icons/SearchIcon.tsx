import React from 'react';

export const SearchIcon = ({ className = 'h-5 w-5', ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={className}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
        />
    </svg>
);

SearchIcon.displayName = 'SearchIcon'; 