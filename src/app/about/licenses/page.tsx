'use client';

import React, { useState } from 'react';
import { DocumentCard, DocumentModal } from '@/components/ui';
import { LICENSE_IMAGES } from '@/constants/documents';

export default function LicensesPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  // Находим активный документ для модального окна
  const activeDocument = activeImage
    ? LICENSE_IMAGES.find(img => img.id === activeImage) || null
    : null;

  return (
    <>
      <section
        className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
        id="documents"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
              Официальные документы
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ЛИЦЕНЗИИ И <span className="font-extrabold text-primary-600">АККРЕДИТАЦИИ</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>

          <div className="text-center mb-12 transition-opacity duration-300">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Наш учебный центр имеет государственную лицензию на право оказывать образовательные услуги. После окончания программы вы получаете документы государственного образца.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {LICENSE_IMAGES.map(item => (
              <DocumentCard
                key={item.id}
                id={item.id}
                src={item.src}
                alt={item.alt}
                isPdf={item.isPdf}
                onOpen={setActiveImage}
              />
            ))}
          </div>

          {/* Модальное окно для просмотра документа */}
          <DocumentModal activeDocument={activeDocument} onClose={() => setActiveImage(null)} />
        </div>
      </section>
    </>
  );
};

