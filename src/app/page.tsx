
import { Footer, Header } from '@/components/common';
import { ContactForm } from '@/components/forms';
import { Courses, Features, Hero, Testimonials } from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Главная страница - Образовательный терминал в Иркутске',
    description: 'Образовательный терминал в Иркутске - обучение в области охраны труда, пожарной безопасности, промышленной безопасности, электробезопасности и по другим направлениям.',
}

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
                <Courses />
                <Testimonials />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
} 