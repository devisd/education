import { getStructure } from "@/api/services";
import { ErrorMessage } from "@/components/ErrorMessage";
import { renderBlock } from "@/api/parse";
import { KEYWORDS, SECTION_TITLES } from "@/constants/pages";



function splitSections(blocks: any[], titles: string[]) {
    const sections: { title: string, content: any[] }[] = [];
    let intro: any[] = [];
    let currentSection: { title: string, content: any[] } | null = null;

    blocks.forEach((block) => {
        const text = block?.children?.[0]?.text?.trim().toUpperCase() || "";
        const foundTitle = titles.find(title => text === title);
        if (foundTitle) {
            if (currentSection) sections.push(currentSection);
            currentSection = { title: foundTitle, content: [] };
        } else if (currentSection) {
            currentSection.content.push(block);
        } else {
            intro.push(block);
        }
    });
    if (currentSection) sections.push(currentSection);
    return { intro, sections };
}

function splitByKeywords(blocks: any[], keywords: string[]) {
    const result: { keyword: string | null, content: any[] }[] = [];
    let current: { keyword: string | null, content: any[] } | null = null;
    blocks.forEach(block => {
        const text = block?.children?.[0]?.text?.trim().toUpperCase() || "";
        const found = keywords.find(k => text.startsWith(k));
        if (found) {
            if (current) result.push(current);
            current = { keyword: found, content: [block] };
        } else if (current) {
            current.content.push(block);
        } else {
            // Если нет ключевого слова — просто текст до первого ключевого слова
            result.push({ keyword: null, content: [block] });
        }
    });
    if (current) result.push(current);
    return result;
}

export default async function StructurePage() {
    const { data, error } = await getStructure();

    if (error) return <ErrorMessage />;

    const blocks = data?.content || [];
    const { intro, sections } = splitSections(blocks, SECTION_TITLES);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        СТРУКТУРА И ОРГАНЫ УПРАВЛЕНИЯ<span className="font-extrabold text-primary-600"> ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИЕЙ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Вводная часть */}
                {intro.length > 0 && (
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                        {intro.map((block: any, idx: number) => renderBlock(block, idx))}
                    </div>
                )}

                {/* Секции */}
                {sections.map((section, idx) => {
                    const subBlocks = splitByKeywords(section.content, KEYWORDS);
                    return (
                        <div key={idx} className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                            {subBlocks.map((sub, i) =>
                                sub.keyword ? (
                                    <div key={i} className="mb-4 p-4 border rounded-md bg-gray-50">
                                        <div className="font-bold text-primary-600 mb-2">{sub.keyword}</div>
                                        {sub.content.map((block, j) => renderBlock(block, j))}
                                    </div>
                                ) : (
                                    sub.content.map((block, j) => renderBlock(block, j))
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
