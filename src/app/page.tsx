import { Footer, Header } from '@/components/common';
import { Features, Hero, HomeCarousel, Partners, News } from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная страница - Образовательный терминал в Иркутске',
  description:
    'Образовательный терминал в Иркутске - обучение в области охраны труда, пожарной безопасности, промышленной безопасности, электробезопасности и по другим направлениям.',
};

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <HomeCarousel />
        <Hero />
        <Features />
        <News />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
