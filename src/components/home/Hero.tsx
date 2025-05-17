import React from 'react';
import { DecorativeBackground, AdvantageCard } from '@/components/ui';
import { TrainingRequestForm } from '@/components/forms';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-4 lg:py-10 overflow-hidden">
      <DecorativeBackground />

      {/* Контент */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:px-[30px] xl:px-[50px] wide:px-[100px]">
          {/* Левая часть с основной информацией */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col max-w-2xl xl:max-w-xl w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Образовательный терминал{' '}
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Учебный центр с широким спектром образовательных услуг и индивидуальным подходом к
              каждому клиенту.
            </p>

            <p className="block text-xl mb-5 md:text-2xl font-medium mt-2 text-primary-600">
              Образовательный терминал - всегда надёжно и профессионально!
            </p>

            <div className='flex justify-center mt-5'>
              <Link href="/about/licenses" className="flex items-center max-w-[360px] justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                aria-label="Посмотреть все лицензии и аккредитации">Лицензии и Аккредитации</Link>
            </div>
          </div>

          {/* Правая часть - компактная форма заявки */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col w-full">
            <TrainingRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};
