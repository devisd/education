import React from 'react';
import Link from 'next/link';
import { CircleArrowIcon } from '../../icons';
import { DecorativeCircles } from '../ui/DecorativeCircles';
import { NewsCard } from '../ui';
import { NEWS_ITEMS } from '@/constants/news';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <DecorativeCircles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">НОВОСТИ <span className="font-extrabold">И АКЦИИ</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Актуальная информация о наших предложениях и изменениях в законодательстве
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Все новости и акции
            <CircleArrowIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
