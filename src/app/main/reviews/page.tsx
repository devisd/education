import { renderBlock } from "@/api/parse";
import { getGratitudeLetters, getReviews } from "@/api/services";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ParseContent } from "@/components/ui/ParseContent";
import { ParseReview } from "@/components/ui/ParseReview";
import Image from "next/image";

export default async function ReviewsPage() {
    const { data, error } = await getReviews()
    const { data: lettersData } = await getGratitudeLetters()

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
                </div>

                <ParseReview data={data} />

                <div className="text-center mt-20 mb-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        БЛАГОДАРСТВЕННЫЕ <span className="font-extrabold text-primary-600">ПИСЬМА</span>
                    </h2>
                </div>


                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="prose prose-lg max-w-none" >
                        {lettersData?.map((el, idx) => (
                            <div key={idx}>{el.Title}
                                <Image src={`https://namely-magical-anhinga.cloudpub.ru${el.Image.url}`} alt={el.Title} width={200} height={200} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
