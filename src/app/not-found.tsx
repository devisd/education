import Link from 'next/link';
import { Header, Footer } from '@/components/common';
import { Metadata } from 'next';
import { getAllTraining } from '@/api/services';

export const metadata: Metadata = {
    title: 'Страница не найдена - Образовательный терминал в Иркутске',
    description: 'Запрашиваемая страница не найдена. Вернитесь на главную страницу или воспользуйтесь меню.',
}

export default async function NotFound() {
    const { data } = await getAllTraining()

    return (
        <div>
            <Header data={data} />
            <main className="min-h-[50vh] flex items-center justify-center py-16">
                <div className="container mx-auto px-4 text-center relative">
                    {/* Декоративные круги как в footer */}
                    <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-primary-100 opacity-5 blur-2xl"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-primary-100 opacity-5 blur-3xl"></div>

                    <h1 className="text-6xl md:text-8xl font-bold text-primary-500 mb-6">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Страница не найдена</h2>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                        Извините, запрашиваемая страница не существует или была перемещена.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-[#d76944] text-white hover:bg-[#c05938] px-6 py-3 rounded-md font-medium transition-colors"
                    >
                        Вернуться на главную
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
} 