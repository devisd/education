import React from 'react';
import { getMainInfo } from '@/api/services';
import { ErrorMessage } from '@/components/ErrorMessage';
import { renderBlock } from '@/api/parse';
import { PhoneIcon } from '@/icons';
import { RIGHT_KEYWORDS, LEFT_KEYWORDS } from '@/constants/pages'

function splitToSections(blocks: any[]): any[] {
    const sections: any[] = [];
    let currentSection: any = null;
    blocks?.forEach((block) => {
        const isHeading = block.type === 'heading' ||
            (block.type === 'paragraph' && block.children?.some((c: any) => c.bold));
        if (isHeading) {
            if (currentSection) sections.push(currentSection);
            currentSection = { heading: block, content: [] };
        } else if (currentSection) {
            currentSection.content.push(block);
        }
    });
    if (currentSection) sections.push(currentSection);
    return sections;
}

const getHeadingText = (section: any) =>
    section.heading?.children?.[0]?.text?.toLowerCase() || '';

function filterSections(sections: any[], keywords: string[]) {
    return sections.filter(section =>
        keywords.some(k => getHeadingText(section).includes(k))
    );
}

function getPhoneBlocks(sections: any[]) {
    // Ищем секцию "контактные телефоны"
    const phoneSection = sections.find(section =>
        getHeadingText(section).includes('контактные телефоны')
    );
    if (!phoneSection) return [];
    // Возвращаем все параграфы с телефонами
    return phoneSection.content.filter((block: any) => {
        const text = block?.children?.[0]?.text || '';
        return block.type === 'paragraph' && text.trim().startsWith('+7');
    });
}

function RenderBlock({ block, idx }: { block: any; idx: number }) {
    const text = block?.children?.[0]?.text || '';
    if (block.type === 'paragraph' && text.trim().startsWith('+7')) {
        return <div className="text-primary-600 font-bold">{renderBlock(block, idx)}</div>;
    }
    if (block.type === 'paragraph' && text.includes('@')) {
        return <div className="text-blue-600 underline">{renderBlock(block, idx)}</div>;
    }
    return renderBlock(block, idx);
}

function SectionColumn({ sections }: { sections: any[] }) {
    return (
        <>
            {sections.map((section, idx) => (
                <div key={idx} className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        {renderBlock(section.heading, 0)}
                    </h3>
                    <div className="text-gray-600 mb-6">
                        {section.content?.map((block: any, i: number) => (
                            <RenderBlock key={i} block={block} idx={i} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

// Новый компонент для рендера телефона как ссылки
function PhoneLink({ block, idx }: { block: any; idx: number }) {
    const text = block?.children?.[0]?.text?.trim() || '';
    // Оставляем только + и цифры для href
    const tel = text.replace(/[^+\d]/g, '');
    return (
        <a
            href={`tel:${tel}`}
            className="text-primary-600 flex gap-2 items-center font-bold text-lg no-underline [&>p]:mb-0"
        >
            <PhoneIcon />
            {renderBlock(block, idx)}
        </a>
    );
}

export default async function MainInfoPage() {
    const { data, error } = await getMainInfo();

    if (error) return <ErrorMessage />;

    const sections = splitToSections(data?.content || []);
    const leftSections = filterSections(sections, LEFT_KEYWORDS);
    const rightSections = filterSections(sections, RIGHT_KEYWORDS);
    const phoneBlocks = getPhoneBlocks(sections);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные сведения об образовательной организации
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОСНОВНЫЕ <span className="font-extrabold text-primary-600">СВЕДЕНИЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основное содержимое страницы */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <SectionColumn sections={leftSections} />
                        </div>
                        <div>
                            <SectionColumn sections={rightSections} />
                        </div>
                    </div>
                </div>

                {/* Контактные телефоны */}
                {phoneBlocks.length > 0 && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Контактные телефоны</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {phoneBlocks.map((block: any, idx: number) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition-colors">
                                    <PhoneLink block={block} idx={idx} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
