import React from 'react';

export function renderText(child: any, format: string | undefined) {
    let text = child.text || '';
    if (!text) return null;
    let el = text;
    if (child.code) el = <code>{el} </code>;
    if (child.bold) el = <strong>{el} </strong>;
    if (child.italic) el = <em>{el} </em>;
    if (child.underline) el = <u>{el} </u>;
    return el;
}

export function renderChildren(children: any[], format?: string) {
    return children.map((child, idx) => {
        if (child.type === 'text') return <React.Fragment key={idx}>{renderText(child, format)}</React.Fragment>;
        if (child.type === 'link') {
            return (
                <a key={idx} href={child.url} className="text-primary-600 underline hover:text-primary-800" target="_blank" rel="noopener noreferrer" >
                    {renderChildren(child.children || [], format)}
                </a>
            );
        }
        if (child.type === 'list-item') {
            return <li key={idx}>{renderChildren(child.children || [], format)}</li>;
        }
        if (child.type === 'list' && format === 'unordered') {
            return <ul key={idx} className="list-disc pl-6 mb-4">{renderChildren(child.children || [], 'unordered')}</ul>;
        } else if (child.type === 'list' && format === 'ordered') {
            return <ol key={idx} className="list-decimal pl-6 mb-4">{renderChildren(child.children || [], 'ordered')}</ol>;
        }
        return null;
    });
}

export function renderBlocksWithBorders(blocks: any[]) {
    const result: React.ReactNode[] = [];
    let i = 0;
    let keyCounter = 0;
    while (i < blocks.length) {
        const block = blocks[i];
        if (block.type === 'heading' && block.level >= 3 && block.level <= 6) {
            const group = [block];
            i++;
            while (
                i < blocks.length &&
                !(blocks[i].type === 'heading' && blocks[i].level >= 2 && blocks[i].level <= 6)
            ) {
                group.push(blocks[i]);
                i++;
            }
            result.push(
                <div className="border border-gray-300 rounded-lg px-4 py-2 my-4" key={`border-group-${keyCounter++}`}>
                    {group.map((b, idx) => renderBlock(b, idx))}
                </div>
            );
        } else if (block.type === 'heading' && block.level === 2) {
            result.push(renderBlock(block, keyCounter++));
            i++;
            while (
                i < blocks.length &&
                !(blocks[i].type === 'heading' && blocks[i].level >= 2 && blocks[i].level <= 6)
            ) {
                result.push(renderBlock(blocks[i], keyCounter++));
                i++;
            }
        } else if (block.type === 'heading' && block.level === 1) {
            const h2Block = { ...block, level: 2 };
            result.push(renderBlock(h2Block, keyCounter++));
            i++;
        } else {
            result.push(renderBlock(block, keyCounter++));
            i++;
        }
    }
    return result;
}

export function renderBlock(block: any, idx: number) {
    if (block.type === 'paragraph') {
        const text = (block.children || []).map(renderText).join('');
        if (!text.trim() && !(block.children || []).some((c: any) => c.type === 'link')) return null;
        return <p key={idx} className="mb-2 text-sm" > {renderChildren(block.children || [])} </p>;
    }
    if (block.type === 'heading') {
        const level = block.level === 1 ? 2 : block.level || 2;
        const children = renderChildren(block.children || []);
        const headingProps = {
            2: { tag: 'h2', className: 'font-bold text-gray-800 mb-4 mt-4 text-2xl md:text-3xl' },
            3: { tag: 'h3', className: 'font-bold text-gray-800 mb-2 mt-2 text-lg md:text-xl' },
            4: { tag: 'h4', className: 'font-bold text-gray-800 mb-2 mt-2 text-lg md:text-xl' },
            5: { tag: 'h5', className: 'font-bold text-gray-800 mb-2 mt-2 text-base md:text-lg' },
            6: { tag: 'h6', className: 'font-bold text-gray-800 mb-2 mt-2 text-sm md:text-base' },
        };
        const { tag, className } = headingProps[level] || headingProps[4];
        const Tag = tag as keyof JSX.IntrinsicElements;
        return <Tag key={idx} className={className}>{children}</Tag>;
    }
    if (block.type === 'image' && block.image && block.image.url) {
        const src = block.image.url.startsWith('http') ? block.image.url : `https://terminal-38.cloudpub.ru${block.image.url}`;
        return (
            <div key={idx} className="my-8 flex justify-center" >
                <img
                    src={src}
                    alt={block.image.alternativeText || ''}
                    className="rounded-lg shadow-md max-w-full h-auto"
                    style={{ maxWidth: 600 }
                    }
                />
            </div>
        );
    }
    if (block.type === 'list') {
        if (block.format === 'unordered') {
            return <ul key={idx} className="list-disc pl-6 mb-4">{renderChildren(block.children || [], 'unordered')}</ul>;
        } else if (block.format === 'ordered') {
            return <ol key={idx} className="list-decimal pl-6 mb-4">{renderChildren(block.children || [], 'ordered')}</ol>;
        }
    }
    return null;
} 