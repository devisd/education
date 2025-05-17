export default function PaidEduPage() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Основные
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ПЛАТНЫЕ <span className="font-extrabold text-primary-600">ОБРАЗОВАТЕЛЬНЫЕ УСЛУГИ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                </div>

                {/* Общая информация */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Порядок оказания платных образовательных услуг</h3>

                    <p className="text-gray-600 mb-8">
                        Платные образовательные услуги осуществляются на основании договора об оказании платных образовательных услуг,
                        заключаемого с обучающимся и (или) с физическим или юридическим лицом, обязующимся оплатить обучение лица,
                        зачисляемого на обучение, в соответствии с законодательством Российской Федерации.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <a href="#" className="flex flex-col p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Положение о платных образовательных услугах</h4>
                            </div>
                            <p className="text-gray-600 mb-4">Локальный нормативный акт, регламентирующий порядок оказания платных образовательных услуг</p>
                            <div className="mt-auto pt-3 text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                Скачать документ
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Образец договора</h4>
                            </div>
                            <p className="text-gray-600 mb-4">Типовая форма договора об оказании платных образовательных услуг</p>
                            <div className="mt-auto pt-3 text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                Скачать образец
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col p-5 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h4 className="text-lg font-semibold text-gray-800 ml-3">Приказ о стоимости обучения</h4>
                            </div>
                            <p className="text-gray-600 mb-4">Приказ об утверждении стоимости платных образовательных услуг на текущий учебный год</p>
                            <div className="mt-auto pt-3 text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                Скачать документ
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div> */}

                {/* Стоимость обучения */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Стоимость обучения</h3>

                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-5 mb-8">
                        <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-primary-700">
                                Стоимость обучения устанавливается ежегодно приказом ректора университета с учетом уровня инфляции,
                                предусмотренного основными характеристиками федерального бюджета на очередной финансовый год.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Стоимость обучения на 2023-2024 учебный год</h4>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Направление подготовки
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Уровень образования
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Форма обучения
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Стоимость за семестр
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Стоимость за год
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            09.03.01 Информатика и вычислительная техника
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Бакалавриат
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Очная
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            85 000 ₽
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            170 000 ₽
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            09.03.01 Информатика и вычислительная техника
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Бакалавриат
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Заочная
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            45 000 ₽
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            90 000 ₽
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            38.03.01 Экономика
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Бакалавриат
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Очная
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            75 000 ₽
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            150 000 ₽
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            38.03.01 Экономика
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Бакалавриат
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Очно-заочная
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            40 000 ₽
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            80 000 ₽
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            09.04.01 Информатика и вычислительная техника
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Магистратура
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Очная
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            95 000 ₽
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            190 000 ₽
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            38.04.01 Экономика
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Магистратура
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            Очная
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            85 000 ₽
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            170 000 ₽
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-600 mt-4 text-sm">
                            * Полная информация о стоимости обучения по всем направлениям подготовки содержится в приказе об утверждении стоимости обучения.
                        </p>
                    </div>
                </div> */}

                {/* Порядок оплаты и условия снижения стоимости */}
                {/* <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Порядок оплаты и условия снижения стоимости</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Порядок оплаты обучения</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                                    <p className="text-gray-700">Оплата за обучение производится в российских рублях по семестрам или за весь учебный год.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                                    <p className="text-gray-700">Срок оплаты за первый семестр — до начала учебного года, за последующие — не позднее 10 дней до начала семестра.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                                    <p className="text-gray-700">Оплата производится через банк по реквизитам, указанным на сайте и в договоре.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                                    <p className="text-gray-700">По согласованию с университетом возможна рассрочка оплаты в пределах одного семестра.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Снижение стоимости обучения</h4>
                            <p className="text-gray-700 mb-4">
                                В университете предусмотрены следующие основания для снижения стоимости обучения:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">По результатам вступительных испытаний</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">За отличную успеваемость</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">За достижения в научной деятельности</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">По социальным показаниям</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">Для сотрудников университета и их детей</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                                    Подробнее о скидках на обучение
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Контактная информация</h4>
                        <p className="text-gray-700 mb-4">
                            По всем вопросам, связанным с оказанием платных образовательных услуг, можно обратиться:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium text-gray-800">Финансово-экономическое управление</p>
                                <p className="text-gray-700">Телефон: +7 (495) 123-45-67</p>
                                <p className="text-gray-700">Email: finance@university.ru</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Приемная комиссия</p>
                                <p className="text-gray-700">Телефон: +7 (495) 123-45-68</p>
                                <p className="text-gray-700">Email: admission@university.ru</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
