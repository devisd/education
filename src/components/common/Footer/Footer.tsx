import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CURRENT_YEAR, MENU_LINKS, EDU_LINKS, CONTACT_LINKS } from '@/constants/footer';

// Импорт подкомпонентов
import FooterLinkSection from './FooterLinkSection';
import FooterSocials from './FooterSocials';

export const Footer = memo(() => {
  return (
    <footer className="bg-[#f9fafb] text-gray-800 py-10 relative overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-primary-100 opacity-5 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-primary-100 opacity-5 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full border-2 border-primary-200 opacity-5 blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full border-2 border-primary-200 opacity-5 blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Компания и контакты */}
            <div>
              <div className="mb-6">
                <Link href="/" aria-label="На главную страницу">
                  <div className="inline-block">
                    <Image
                      src="/images/logo.png"
                      alt="Образовательный терминал"
                      width={180}
                      height={50}
                      sizes="180px"
                      className="h-12 w-auto"
                    />
                  </div>
                </Link>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed pr-5">
                  Учебный центр с широким спектром образовательных услуг и индивидуальным подходом к
                  каждому клиенту.
                </p>
              </div>
            </div>

            {/* Меню сайта */}
            <FooterLinkSection title="Меню сайта" links={MENU_LINKS} />

            {/* Контакты */}
            <div>
              <FooterLinkSection title="Контакты" links={CONTACT_LINKS} />
              <div className="mt-4">
                <FooterSocials />
              </div>
            </div>

            {/* Юридическая информация */}
            <FooterLinkSection title="Дистанционное обучение" links={EDU_LINKS} />
          </div>
        </div>

        <div className="py-6 border-t border-gray-300 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © {CURRENT_YEAR} Образовательный терминал | Все права защищены
            </div>
            <div className="text-gray-600">
              <p>ООО «ОБРАЗОВАТЕЛЬНЫЙ ТЕРМИНАЛ» | ИНН: 3812528052 | ОГРН: 1163850098621</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
