import { getPrice, getPriceList } from "@/api/services";
import { ErrorMessage } from "@/components/ErrorMessage";
import { CourseTab } from "@/components/ui";
import { PhoneIcon } from "@/icons";


export default async function PricePage() {
    const { data, error } = await getPrice()
    const { data: priceList } = await getPriceList()

    // if (error) return <ErrorMessage />

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Стоимость обучения
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ЦЕНЫ НА <span className="font-extrabold text-primary-600">ОБРАЗОВАТЕЛЬНЫЕ УСЛУГИ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Табы и контент для категорий курсов */}
                <CourseTab courses={data} />

                {/* Скидки */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <p className="text-gray-700 font-bold text-lg">Для наших клиентов всегда действует гибкая система скидок.
                    </p>
                    <p className="text-gray-700 font-bold text-lg">Более подробно о скидках и акциях можно узнать у наших менеджеров по телефонам:
                    </p>
                    <div className="flex max-sm:flex-col sm:items-center sm:gap-2 font-bold text-lg">
                        <PhoneIcon className="h-5 w-5 text-primary-600 max-sm:hidden" />
                        <a href="tel:+73952434312" className="text-primary-600 hover:text-primary-900 ">
                            +7 (3952) 43-43-12
                        </a>
                        <p className="max-sm:hidden">|</p>
                        <a href="tel:+79149148185" className="text-primary-600 hover:text-primary-900 ">
                            +7 (914) 91-48-185
                        </a>
                    </div>

                    <div className="flex justify-end mt-5">
                        <a href={`https://terminal-38.cloudpub.ru${priceList?.document.url}`} className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-lg font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Скачать прайс-лист
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
}
