import { getFAQ } from '@/api/services';
import { FAQAccordionItem } from '@/components/common/FAQAccordionItem';
import { ErrorMessage } from '@/components/ErrorMessage';

export default async function FAQPage() {

    const { data, error } = await getFAQ()

    if (error) return <ErrorMessage />

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Часто задаваемые вопросы
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ВОПРОС - <span className="font-extrabold text-primary-600">ОТВЕТ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основное содержимое из API */}
                {data && <FAQAccordionItem items={data} />}

                {/* Не нашли ответ? */}
                <div className="bg-white rounded-lg mt-10 shadow-md p-6 md:p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Не нашли ответ на свой вопрос?</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Если вы не нашли ответ на интересующий вас вопрос, вы можете связаться с нами любым удобным способом.
                            Мы с радостью ответим на все ваши вопросы.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/main/contacts" className="inline-flex items-center px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Наши контакты
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
