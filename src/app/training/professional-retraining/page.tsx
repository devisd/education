import { getAllTraining } from "@/api/services";
import { ServiceCard } from "@/components/ui";

export default async function ProfessionalRetrainingPage() {
    const TYPE_COURSE = 'Профессиональная переподготовка'

    const { data } = await getAllTraining()

    const filteredCourses = data?.filter(el => el.type === TYPE_COURSE)

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Услуги
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ПРОФЕССИОНАЛЬНАЯ <span className="font-extrabold text-primary-600">ПЕРЕПОДГОТОВКА</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-1 sm:p-5 w580:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredCourses?.map((category, index) => (
                        <ServiceCard
                            key={index}
                            icon={category.icon.url}
                            title={category.name}
                            description={''}
                            href={`/training/${category.documentId}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}