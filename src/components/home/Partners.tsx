import React from 'react';
import { PartnerCard, SectionTitle } from '@/components/ui';
import { PARTNERS } from '@/constants/partners';

export const Partners = () => {
  return (
    <section className="py-16 relative overflow-hidden">


      <div className="container mx-auto px-4 relative ">
        <SectionTitle
          subtitle="Наши партнеры"
          title={<>С НАМИ <span className="font-extrabold text-primary-600">РАБОТАЮТ</span></>}
          description="Нам доверяют ведущие компании Иркутской области и России."
        />

        <div className="relative">
          {/* Декоративные элементы */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-primary-300 rounded-tl-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-4 border-r-4 border-primary-300 rounded-br-3xl"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 relative">
            {PARTNERS.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
