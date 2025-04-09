import React from 'react';

type SectionTitleProps = {
    subtitle: string;
    title: React.ReactNode;
    description?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
    subtitle,
    title,
    description
}) => {
    return (
        <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {title}
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            {description && (
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}; 