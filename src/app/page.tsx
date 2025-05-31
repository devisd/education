import { getAllTraining } from '@/api/services';
import { Footer, Header } from '@/components/common';
import { Features, Hero, HomeCarousel, Partners, News } from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная страница - Образовательный терминал в Иркутске',
  description:
    'Образовательный терминал в Иркутске - обучение в области охраны труда, пожарной безопасности, промышленной безопасности, электробезопасности и по другим направлениям.',
};

export default async function Home() {
  const { data } = await getAllTraining()

  return (
    <div>
      <Header data={data} />
      <main>
        <HomeCarousel />
        <Hero />
        <Features data={data} />
        <News />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
