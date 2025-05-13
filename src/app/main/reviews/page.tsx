'use client';

import React, { useState } from 'react';

export default function ReviewsPage() {
    // Состояние для фильтрации отзывов по категориям
    const [activeFilter, setActiveFilter] = useState('all');

    // Моковые данные отзывов
    const reviews = [
        {
            id: 1,
            name: 'Анна Иванова',
            date: '15.03.2023',
            rating: 5,
            text: 'Прошла курс повышения квалификации по направлению "Бухгалтерский учет". Очень довольна качеством обучения и преподавателями. Материал подан структурированно и понятно, много практических заданий. Отдельное спасибо преподавателю Ольге Петровне за индивидуальный подход и консультации.',
            course: 'Бухгалтерский учет и налогообложение',
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
            category: 'accounting'
        },
        {
            id: 2,
            name: 'Иван Петров',
            date: '02.04.2023',
            rating: 4,
            text: 'Проходил профессиональную переподготовку по программе "Web-разработка". Получил много полезных знаний и навыков, которые уже применяю в работе. Особенно понравились практические задания и работа над проектом. Единственное пожелание - больше внимания современным фреймворкам.',
            course: 'Web-разработка с нуля до профи',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            category: 'it'
        },
        {
            id: 3,
            name: 'Екатерина Смирнова',
            date: '10.05.2023',
            rating: 5,
            text: 'Отличный курс по маркетингу! Преподаватели - практики с большим опытом работы, делятся реальными кейсами и инсайтами. Очень понравился формат обучения и возможность задавать вопросы в любое время. Курс стоит своих денег, рекомендую!',
            course: 'Интернет-маркетинг: стратегия и инструменты',
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
            category: 'marketing'
        },
        {
            id: 4,
            name: 'Михаил Кузнецов',
            date: '22.06.2023',
            rating: 5,
            text: 'Прошел курс по управлению проектами. Получил не только теоретические знания, но и практические навыки по планированию и контролю проектов. Особенно полезными оказались шаблоны документов и техники решения проблем в проектах. Уже применяю полученные знания в работе.',
            course: 'Управление проектами по методологии PMI',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
            category: 'management'
        },
        {
            id: 5,
            name: 'Ольга Николаева',
            date: '07.07.2023',
            rating: 4,
            text: 'Обучалась на курсе по HR-менеджменту. Много полезной информации, интересные кейсы и задания. Понравилась подача материала и возможность общаться с коллегами из других компаний. Немного не хватало времени на выполнение некоторых заданий, но в целом очень довольна.',
            course: 'HR-менеджмент: построение эффективной системы',
            image: 'https://randomuser.me/api/portraits/women/5.jpg',
            category: 'hr'
        },
        {
            id: 6,
            name: 'Александр Козлов',
            date: '18.08.2023',
            rating: 5,
            text: 'Курс по программированию на Python превзошел все ожидания! Преподаватель объясняет материал просто и понятно, много практики и разбор реальных задач. За короткий срок смог освоить язык и написать свой первый проект. Большое спасибо за качественное обучение!',
            course: 'Python для начинающих и продвинутых',
            image: 'https://randomuser.me/api/portraits/men/6.jpg',
            category: 'it'
        },
        {
            id: 7,
            name: 'Наталья Морозова',
            date: '05.09.2023',
            rating: 5,
            text: 'Прошла курс по дизайну интерьера. Очень понравился подход к обучению - от теории к практике. Много полезных материалов, работа с профессиональными программами, отзывчивые преподаватели. По окончании курса смогла сразу начать работать над заказами. Рекомендую всем, кто хочет освоить эту профессию!',
            course: 'Дизайн интерьера: от идеи до реализации',
            image: 'https://randomuser.me/api/portraits/women/7.jpg',
            category: 'design'
        },
        {
            id: 8,
            name: 'Дмитрий Соколов',
            date: '12.10.2023',
            rating: 4,
            text: 'Проходил курс по финансовому анализу. Материал подается структурированно, много практических примеров. Преподаватели - специалисты с большим опытом работы в крупных компаниях. Немного сложновато давалась часть по оценке инвестиционных проектов, но в целом курс очень полезный.',
            course: 'Финансовый анализ для руководителей и специалистов',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            category: 'finance'
        }
    ];

    // Категории для фильтра
    const categories = [
        { id: 'all', name: 'Все отзывы' },
        { id: 'it', name: 'ИТ и программирование' },
        { id: 'accounting', name: 'Бухгалтерия и финансы' },
        { id: 'marketing', name: 'Маркетинг' },
        { id: 'management', name: 'Менеджмент' },
        { id: 'design', name: 'Дизайн' },
        { id: 'hr', name: 'HR' },
        { id: 'finance', name: 'Финансы' }
    ];

    // Фильтрация отзывов по категории
    const filteredReviews = activeFilter === 'all'
        ? reviews
        : reviews.filter(review => review.category === activeFilter);

    // Рендер звездочек рейтинга
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <svg
                key={index}
                className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-primary-300 opacity-5 blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-primary-300 opacity-5 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-primary-400 opacity-5 blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border-6 border-primary-300 opacity-5 blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Заголовок страницы */}
                <div className="text-center mb-10">
                    <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
                        Мнения наших выпускников
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ОТЗЫВЫ <span className="font-extrabold text-primary-600">ОБУЧАЮЩИХСЯ</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Отзывы наших выпускников о качестве обучения, преподавателях и учебных программах
                    </p>
                </div>

                {/* Фильтр по категориям */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Отзывы */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredReviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.date}</p>
                                </div>
                            </div>

                            <div className="flex mb-3">
                                {renderStars(review.rating)}
                            </div>

                            <p className="text-gray-600 mb-4 flex-grow">{review.text}</p>

                            <div className="pt-4 mt-auto border-t border-gray-100">
                                <p className="text-sm font-medium text-primary-600">
                                    Курс: {review.course}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Форма для отправки отзыва */}
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Оставить отзыв</h3>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Ваше имя
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Введите ваше имя"
                                />
                            </div>
                            <div>
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                                    Курс/программа
                                </label>
                                <input
                                    type="text"
                                    id="course"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Укажите название курса"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Оценка курса
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className="text-gray-300 hover:text-yellow-400"
                                    >
                                        <svg
                                            className="h-8 w-8"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                                Ваш отзыв
                            </label>
                            <textarea
                                id="review"
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Поделитесь своими впечатлениями о курсе"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                                Отправить отзыв
                            </button>
                        </div>
                    </form>
                </div>

                {/* Статистика */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">96%</div>
                        <div className="text-gray-700">довольных выпускников</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">4.8</div>
                        <div className="text-gray-700">средняя оценка курсов</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">2500+</div>
                        <div className="text-gray-700">выпускников</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">87%</div>
                        <div className="text-gray-700">трудоустроенных</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
