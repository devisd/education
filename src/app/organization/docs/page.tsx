import { getDocs } from "@/api/services";
import { ErrorMessage } from "@/components/ErrorMessage";
import { renderBlock } from "@/api/parse";

function isSectionTitle(text: string) {
    // Простая эвристика: все буквы заглавные и длина > 5
    return text === text.toUpperCase() && text.replace(/[^A-ZА-ЯЁ]/gi, '').length > 5;
}

function splitSections(blocks: any[]) {
    const sections: { title: string, content: any[] }[] = [];
    let current: { title: string, content: any[] } | null = null;

    blocks.forEach((block) => {
        const text = block?.children?.[0]?.text?.trim() || "";
        if (isSectionTitle(text)) {
            if (current) sections.push(current);
            current = { title: text, content: [] };
        } else if (current) {
            current.content.push(block);
        }
    });
    if (current) sections.push(current);
    return sections;
}

export default async function DocsPage() {
    const { data, error } = await getDocs();

    if (error) return <ErrorMessage />;

    const blocks = data?.content || [];
    const sections = splitSections(blocks);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        <span className="font-extrabold text-gray-800">ДОКУМЕНТЫ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Секции документов */}
                {sections.map((section, idx) => (
                    <div key={idx} >
                        <h3 className="text-xl font-semibold text-primary-600 mb-4">{section.title}</h3>
                        {section.content.length > 0 ? (
                            section.content.map((block, i) => (
                                <div key={i} className="mb-2">{renderBlock(block, i)}</div>
                            ))
                        ) : (
                            <div className="text-gray-500 italic">Нет описания</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}