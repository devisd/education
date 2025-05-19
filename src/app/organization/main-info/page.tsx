import React from 'react';

async function getObrazovanieData() {
    const res = await fetch('https://namely-magical-anhinga.cloudpub.ru/api/obrazovanie', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
}

function renderText(child) {
    let text = child.text || '';
    if (!text) return null;
    let el = text;
    if (child.code) el = <code>{el}</code>;
    if (child.bold) el = <strong>{el}</strong>;
    if (child.italic) el = <em>{el}</em>;
    if (child.underline) el = <u>{el}</u>;
    return el;
}

function renderChildren(children) {
    return children.map((child, idx) => {
        if (child.type === 'text') return <React.Fragment key={idx}>{renderText(child)}</React.Fragment>;
        if (child.type === 'link') {
            return (
                <a key={idx} href={child.url} className="text-primary-600 underline hover:text-primary-800" target="_blank" rel="noopener noreferrer">
                    {renderChildren(child.children || [])}
                </a>
            );
        }
        return null;
    });
}

function renderBlock(block, idx) {
    if (block.type === 'paragraph') {
        const text = (block.children || []).map(renderText).join('');
        if (!text.trim() && !(block.children || []).some(c => c.type === 'link')) return null;
        return <p key={idx} className="mb-6">{renderChildren(block.children || [])}</p>;
    }
    if (block.type === 'heading') {
        const level = block.level || 2;
        const children = renderChildren(block.children || []);
        switch (level) {
            case 2:
                return <h2 key={idx} className="font-bold text-gray-800 mb-4 mt-8 text-2xl md:text-3xl">{children}</h2>;
            case 3:
                return <h3 key={idx} className="font-bold text-gray-800 mb-4 mt-8 text-xl md:text-2xl">{children}</h3>;
            case 4:
            default:
                return <h4 key={idx} className="font-bold text-gray-800 mb-4 mt-8 text-lg md:text-xl">{children}</h4>;
        }
    }
    if (block.type === 'image' && block.image && block.image.url) {
        const src = block.image.url.startsWith('http') ? block.image.url : `https://namely-magical-anhinga.cloudpub.ru${block.image.url}`;
        return (
            <div key={idx} className="my-8 flex justify-center">
                <img
                    src={src}
                    alt={block.image.alternativeText || ''}
                    className="rounded-lg shadow-md max-w-full h-auto"
                    style={{ maxWidth: 600 }}
                />
            </div>
        );
    }
    return null;
}

export default async function MainInfoPage() {
    const data = await getObrazovanieData();
    const content = data.data.content;
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОСНОВНЫЕ <span className="font-extrabold text-primary-600">СВЕДЕНИЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основное содержимое из API */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="prose prose-lg max-w-none">
                        {content.map((block, idx) => renderBlock(block, idx))}
                    </div>
                </div>
            </div>
        </section>
    );
}
