import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CURRENT_YEAR, MENU_LINKS, EDU_LINKS, CONTACT_LINKS } from '@/constants/footer';

// Импорт подкомпонентов
import FooterLinkSection from './FooterLinkSection';
import FooterSocials from './FooterSocials';

export const Footer = memo(() => {
  return (
    <footer className="bg-[#f0f0f0] text-gray-800 py-10 shadow-top relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Компания и контакты */}
            <div>
              <div className="mb-6">
                <Link href="/" aria-label="На главную страницу">
                  <div className="inline-block">
                    <Image
                      src="/images/logo_mobile.png"
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
                <p className="mt-4 text-gray-600 text-sm leading-relaxed pr-5 max-w-[280px]">
                  Лицензия №Л035-01220-38/01768415 от 24 января 2025 года.
                </p>
              </div>
            </div>

            {/* Меню сайта */}
            <FooterLinkSection title="Информация" links={MENU_LINKS} />

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

        <div className="py-6 border-t border-primary-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © {CURRENT_YEAR} Образовательный терминал | Все права защищены
            </div>
            <div className="text-gray-600">
              <p>ООО ОБРАЗОВАТЕЛЬНЫЙ ТЕРМИНАЛ | ИНН: 3812163702 | ОГРН: 1243800018582</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
