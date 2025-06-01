import React from 'react';

interface IconProps {
    className?: string;
}

export const CertificateIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* Документ */}
            <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Линии текста */}
            <line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" />
            <line x1="8" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" />
            {/* Печать */}
            <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="16" r="0.7" fill="currentColor" />
        </svg>
    );
}; 