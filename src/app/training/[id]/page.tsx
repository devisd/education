import { getTraining, getAllTraining } from '@/api/services';
import { ErrorMessage } from '@/components/ErrorMessage';
import { EmptyContent } from '@/components/ui/EmptyContent';
import { renderBlocksWithBorders } from '@/api/parse';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BookIcon, CertificateIcon, TeamIcon, ChecklistIcon, ClockIcon } from '@/icons';

function extractTitle(content) {
    if (!Array.isArray(content)) return 'Услуга';
    return content?.[0]?.children?.[0]?.text || 'Услуга';
}

function extractTextFromContent(content) {
    if (!Array.isArray(content)) return '';
    return content.map(block => {
        if (block.children) {
            return block.children.map(child => child.text || '').join(' ');
        }
        return '';
    }).join(' ');
}

export default async function TrainingDetailPage({ params }) {
    const { id } = params;
    const { data, error } = await getTraining(id);
    const item = Array.isArray(data) ? data[0] : data;

    // Получаем все услуги для блока "Другие услуги"
    const allTrainingsRes = await getAllTraining();
    const allTrainings = allTrainingsRes.data || [];
    // Фильтруем текущую, перемешиваем и берем 4
    const randomTrainings = allTrainings
        .filter(t => t.documentId !== id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    if (error) return <ErrorMessage />;
    if (!item) return <EmptyContent />;

    const title = extractTitle(item.content);
    const image = item.image?.url ? `https://terminal-38.cloudpub.ru${item.image.url}` : '/images/no_image.png';

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    subtitle="Программа обучения"
                    title={data?.name}
                />
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row lg:justify-end">
                        <div className="md:w-2/3 flex flex-col gap-2 pl-2 max-sm:mb-5 md:pl-4 pt-0 md:pt-10 order-2 md:order-none">
                            <p className='text-gray-800 text-xl max-sm:text-base flex items-center gap-2'>
                                <ClockIcon className="w-6 h-6 text-primary-600" />
                                Срок обучения: <span className='text-primary-600 font-bold'>{data?.term_of_study}ч.</span>
                            </p>
                            <p className='text-gray-800 text-xl max-sm:text-base flex items-center gap-2'>
                                <CertificateIcon className="w-6 h-6 text-primary-600" />
                                Выдаваемый документ: <span className='text-primary-600 font-bold'>{data?.document}</span>
                            </p>
                            <p className='text-gray-800 text-xl max-sm:text-base flex items-center gap-2'>
                                <BookIcon className="w-6 h-6 text-primary-600" />
                                Формат обучения: <span className='text-primary-600 font-bold'>{data?.form_of_study}</span>
                            </p>
                            <p className='text-gray-800 text-xl max-sm:text-base flex items-center gap-2'>
                                <TeamIcon className="w-6 h-6 text-primary-600" />
                                Категория студентов: <span className='text-primary-600 font-bold'>{data?.category_of_students}</span>
                            </p>
                            <a href={data?.study_plan_text} className='underline text-primary-600 hover:text-primary-800 text-base font-bold flex items-center gap-2'>
                                <ChecklistIcon className="w-6 h-6 text-primary-600" />
                                {data?.study_plan_link}
                            </a>
                        </div>
                        <div className="md:w-1/3 flex-shrink-0 flex items-center bg-white/10 order-1 md:order-none mb-6 md:mb-0">
                            <Image
                                src={image}
                                alt={title}
                                className="object-cover w-full h-full max-h-56 md:max-h-72 rounded-lg"
                                width={340}
                                height={220}
                            />
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className="prose prose-lg max-w-none">
                            {renderBlocksWithBorders(item.content || [])}
                        </div>
                    </div>
                </article>

                {/* Кнопка назад */}
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/#services"
                        className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                    >
                        <span>← Назад к списку программ</span>
                    </Link>
                </div>

                {/* Рандомные услуги */}
                {randomTrainings.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Другие программы</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {randomTrainings.map((t) => {
                                const tTitle = extractTitle(t.content);
                                const tDesc = extractTextFromContent(t.content?.slice(1, 2) || []);
                                const tImage = t.image?.url ? `https://terminal-38.cloudpub.ru${t.image.url}` : '/images/no_image.png';
                                return (
                                    <Link
                                        key={t.id}
                                        href={`/training/${t.documentId}`}
                                        className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group block"
                                    >
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={tImage}
                                                alt={tTitle}
                                                className="w-full h-full object-cover object-center"
                                                width={340}
                                                height={280}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{tTitle}</h3>
                                            <p className="text-gray-600 mb-4">{tDesc}</p>
                                            <div className="text-primary-600 font-medium group-hover:text-primary-800 flex items-center">
                                                ПОДРОБНЕЕ
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
