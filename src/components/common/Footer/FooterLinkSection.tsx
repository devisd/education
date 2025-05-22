import React, { memo } from 'react';
import Link from 'next/link';
import { LinkItem } from '@/types';

export interface FooterLinkSectionProps {
  title: string;
  links: LinkItem[];
}

// Функция для определения внешней ссылки
const isExternal = (href: string) =>
  href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

const FooterLinkSection = memo(({ title, links }: FooterLinkSectionProps) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-gray-900 pb-2 border-b border-primary-500">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {isExternal(link.href) ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
            >
              {link.name}
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
));

export default FooterLinkSection;

