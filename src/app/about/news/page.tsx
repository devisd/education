import { getAllNews } from "@/api/services"
import { ErrorMessage } from "@/components/ErrorMessage"
import { NewsCard } from "@/components/ui"


export default async function NewsPage() {
    const { data, error } = await getAllNews()

    if (error) return <ErrorMessage />

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Будьте в курсе
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        НОВОСТИ <span className="font-extrabold text-primary-600">И АКЦИИ</span>
                    </h1>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Актуальная информация о наших предложениях и изменениях в законодательстве
                    </p>
                </div>

                {/* Основное содержимое из API */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data?.map((el) => (
                        <NewsCard key={el.id} item={el} />
                    ))}
                </div>
            </div>
        </section>
    )
}
