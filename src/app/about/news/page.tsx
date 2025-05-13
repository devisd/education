import React from 'react'
import { NEWS_ITEMS } from '@/constants/news'
import Link from 'next/link'
import { TeamIcon, ShieldIcon, ChecklistIcon, CurrencyCircleIcon } from '@/icons'

const getIconByType = (iconType: string) => {
    switch (iconType) {
        case 'team':
            return <TeamIcon className="w-8 h-8 text-white" />;
        case 'shield':
            return <ShieldIcon className="w-8 h-8 text-white" />;
        case 'checklist':
            return <ChecklistIcon className="w-8 h-8 text-white" />;
        case 'currency':
            return <CurrencyCircleIcon className="w-8 h-8 text-white" />;
        default:
            return null;
    }
};

export default function NewsPage() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-primary-300 opacity-5 blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-primary-300 opacity-5 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-primary-400 opacity-5 blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border-6 border-primary-300 opacity-5 blur-xl"></div>
            </div>

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

                <div className="space-y-8 mb-12">
                    {NEWS_ITEMS.map((item) => (
                        <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-1/4 lg:w-1/5 relative">
                                    <div className={`h-full w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-6 md:p-4`}>
                                        <div className="flex flex-col items-center">
                                            {getIconByType(item.iconType)}
                                            <span className="text-xs font-medium text-white bg-white/20 rounded-full px-3 py-1 mt-3">
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 md:w-3/4 lg:w-4/5">
                                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        {item.excerpt}
                                    </p>
                                    <Link
                                        href={`/about/news/${item.slug}`}
                                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                    >
                                        Подробнее
                                        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16">
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Подпишитесь на рассылку новостей</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Получайте актуальную информацию о новых курсах, акциях и изменениях в законодательстве прямо на вашу электронную почту
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Ваш e-mail"
                                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                required
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                            >
                                Подписаться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
