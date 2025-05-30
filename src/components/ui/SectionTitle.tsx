import React from 'react';

type SectionTitleProps = {
    subtitle: string;
    title: React.ReactNode;
    description?: string;
};

function colorizeTitle(title: React.ReactNode) {
    if (typeof title !== 'string') return title;
    const words = title.trim().split(/\s+/);
    if (words.length === 1) {
        return <span className="text-gray-800">{words[0]}</span>;
    }
    if (words.length === 2) {
        return <>
            <span className="text-gray-800">{words[0]}</span>{' '}
            <span className="text-primary-600 font-extrabold">{words[1]}</span>
        </>;
    }
    return <>
        <span className="text-gray-800">{words[0]}</span>{' '}
        {words.slice(1).map((w, i) => (
            <span key={i} className="text-primary-600 font-extrabold">{w}{i < words.length - 2 ? ' ' : ''}</span>
        ))}
    </>;
}

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {colorizeTitle(title)}
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