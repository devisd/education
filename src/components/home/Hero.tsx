import React from 'react';
import Link from 'next/link';
import { DecorativeBackground, AdvantageCard } from '@/components/ui';
import { TrainingRequestForm } from '@/components/forms';
import { HERO_ADVANTAGES } from '@/constants/advantages';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-14 lg:py-20 overflow-hidden">
      <DecorativeBackground />

      {/* Контент */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Левая часть с основной информацией */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Образовательный терминал <span className="block text-xl md:text-2xl font-medium mt-2 text-primary-600">Центр дополнительного профессионального образования</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Проводим обучение в области охраны труда, пожарной безопасности,
              промышленной безопасности, электробезопасности и по другим направлениям.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {HERO_ADVANTAGES.map((advantage, index) => (
                <AdvantageCard key={index} advantage={advantage} />
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/training"
                className="bg-white border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 px-8 py-3 rounded-md font-medium text-center transition-colors duration-300"
              >
                Программы обучения
              </Link>
            </div>
          </div>

          {/* Правая часть - компактная форма заявки */}
          <div className="lg:col-span-5">
            <TrainingRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};
