import { getInternationalCooperation } from "@/api/services";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ParseContent } from "@/components/ui/ParseContent";


export default async function InternationalCooperationPage() {
    const { data, error } = await getInternationalCooperation()

    if (error) return <ErrorMessage />

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        МЕЖДУНАРОДНОЕ <span className="font-extrabold text-primary-600">СОТРУДНИЧЕСТВО</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Основное содержимое из API */}
                <ParseContent data={data} />
            </div>
        </section>
    );
}
