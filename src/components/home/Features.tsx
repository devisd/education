'use client'

import Link from 'next/link';
import { ArrowRightIcon } from '@/icons';
import { ServiceCard } from '../ui';
import type { ITrainingResponse } from '@/types';

function extractTextFromContent(content: any[]): string {
  if (!Array.isArray(content)) return '';
  return content.map(block => {
    if (block.children) {
      return block.children.map((child: any) => child.text || '').join(' ');
    }
    return '';
  }).join(' ');
}

export const Features = ({ data }: { data: ITrainingResponse[] | null }) => {

  return (
    <>
      {/* Секция с услугами */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container max-md:max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
              Наши услуги
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ОБРАЗОВАТЕЛЬНЫЕ <span className="font-extrabold text-primary-600">ПРОГРАММЫ</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Образовательный терминал предлагает широкий спектр образовательных программ
              для руководителей и специалистов предприятий всех форм собственности
            </p>
          </div>

          <div className="grid grid-cols-1 sm:p-5 w580:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {data?.map((item, index) => {
              const description = extractTextFromContent(item.content?.slice(1, 2) || []);
              return (
                <ServiceCard
                  key={item.id || index}
                  icon={item.icon.url}
                  title={item.name}
                  description={description}
                  href={`/training/${item.documentId}`}
                />
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/main/price"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              aria-label="Посмотреть все программы обучения"
            >
              <span>Стоимость обучения</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
