import { getAllTraining } from '@/api/services';
import { ErrorMessage } from '@/components/ErrorMessage';
import Link from 'next/link';
import Image from 'next/image';
import { EmptyContent } from '@/components/ui/EmptyContent';

function extractTextFromContent(content) {
    if (!Array.isArray(content)) return '';
    return content.map(block => {
        if (block.children) {
            return block.children.map(child => child.text || '').join(' ');
        }
        return '';
    }).join(' ');
}

export default async function TrainingPage() {
    const { data, error } = await getAllTraining();

    if (error) return <ErrorMessage />;
    if (!data || data.length === 0) return <EmptyContent />;

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Все услуги
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ПРОГРАММЫ <span className="font-extrabold text-primary-600">ОБУЧЕНИЯ</span>
                    </h1>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Актуальные образовательные услуги и программы
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item) => {
                        const title = item.content?.[0]?.children?.[0]?.text || 'Услуга';
                        const description = extractTextFromContent(item.content?.slice(1, 2) || []);
                        const image = item.image?.url ? `https://terminal-38.cloudpub.ru${item.image.url}` : '/images/no_image.png';
                        return (
                            <Link
                                key={item.id}
                                href={`/training/${item.documentId}`}
                                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group block"
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover object-center"
                                        width={340}
                                        height={280}
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                                    <p className="text-gray-600 mb-4">{description}</p>
                                    <div className="text-primary-600 font-medium group-hover:text-primary-800 flex items-center">
                                        ПОДРОБНЕЕ
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
