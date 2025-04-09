'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/icons';
import { DocumentCard, DocumentModal, DocumentTabs, ServiceCard } from '../ui';
import { APPRECIATION_LETTERS, LICENSE_IMAGES } from '@/constants/documents';
import { TRAINING_CATEGORIES } from '@/constants/trainingCategories';

export const Features = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'licenses' | 'letters'>('licenses');

  // Получаем активные изображения в зависимости от выбранной вкладки
  const activeImages = activeTab === 'licenses' ? LICENSE_IMAGES : APPRECIATION_LETTERS;

  // Находим активный документ для модального окна
  const activeDocument = activeImage
    ? [...LICENSE_IMAGES, ...APPRECIATION_LETTERS].find(img => img.id === activeImage) || null
    : null;

  return (
    <>
      {/* Секция с услугами */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container max-md:max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Профессиональное обучение</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">НАШИ <span className="font-extrabold text-primary-600">УСЛУГИ</span></h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Образовательный центр «Движение» предлагает широкий спектр образовательных программ для руководителей и специалистов предприятий всех форм собственности
            </p>
          </div>

          <div className="grid grid-cols-1 sm:p-5 w580:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {TRAINING_CATEGORIES.map((category, index) => (
              <ServiceCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                link={category.link}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/price"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              aria-label="Посмотреть все программы обучения"
            >
              <span>Все программы обучения</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Объединенный блок с лицензиями и благодарственными письмами */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden" id="documents">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-primary-300 opacity-5 blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-primary-300 opacity-5 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-primary-400 opacity-5 blur-xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border-6 border-primary-300 opacity-5 blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Официальные документы</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ДОКУМЕНТЫ И <span className="font-extrabold text-primary-600">ДОСТИЖЕНИЯ</span></h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>

          {/* Табы для переключения между лицензиями и благодарностями */}
          <DocumentTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Описание для активной вкладки с плавной анимацией */}
          <div className="text-center mb-12 transition-opacity duration-300">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {activeTab === 'licenses'
                ? 'Наш образовательный центр имеет государственную лицензию на право оказывать образовательные услуги. После окончания программы вы получаете диплом или удостоверение государственного образца.'
                : 'Отзывы и благодарности от наших клиентов и партнеров, которые высоко оценили качество нашей работы и профессионализм команды.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {activeImages.map((item) => (
              <DocumentCard
                key={item.id}
                id={item.id}
                src={item.src}
                alt={item.alt}
                onOpen={setActiveImage}
              />
            ))}
          </div>

          {/* Модальное окно для просмотра изображения */}
          <DocumentModal
            activeDocument={activeDocument}
            onClose={() => setActiveImage(null)}
          />
        </div>
      </section>
    </>
  );
};
