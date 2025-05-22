import { renderBlock } from "@/api/parse";
import { getTraining } from "@/api/services";
import { ParseContent } from "@/components/ui/ParseContent";

export default async function AdultsTrainingPage() {
    const { data } = await getTraining()


    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Услуги
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОБУЧЕНИЕ <span className="font-extrabold text-primary-600">ВЗРОСЛЫХ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="prose prose-lg max-w-none" >
                        {data?.map((el) => el.content?.map((block, idx) => renderBlock(block, idx)))}
                    </div>
                </div>
            </div>
        </section>
    );
}