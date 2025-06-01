import { getGratitudeLetters, getReviews, getStatistics } from "@/api/services";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ParseReview } from "@/components/ui/ParseReview";
import { ReviewForm } from "@/components/forms/ReviewForm";
import { GratitudeLetters } from '@/components/ui';
import { StatisticsGrid } from "@/components/ui/StatisticsGrid";

export default async function ReviewsPage() {
    const { data, error } = await getReviews()
    const { data: lettersData } = await getGratitudeLetters()
    const { data: statistics } = await getStatistics()

    if (error) return <ErrorMessage />

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Отзывы
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОТЗЫВЫ <span className="font-extrabold text-primary-600">ОБУЧАЮЩИХСЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Отзывы наших выпускников о качестве обучения, преподавателях и учебных программах
                    </p>
                </div>

                {/* Отзывы */}
                <ParseReview data={data} />

                {/* Форма для отправки отзыва */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Оставить отзыв</h3>
                    <ReviewForm />
                </div>

                <div className="text-center mt-20 mb-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        БЛАГОДАРСТВЕННЫЕ <span className="font-extrabold text-primary-600">ПИСЬМА</span>
                    </h2>
                </div>

                <GratitudeLetters lettersData={lettersData} />

                {/* Статистика */}
                <StatisticsGrid statistics={statistics ?? undefined} />
            </div>
        </section >
    );
}
