import React, { memo } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@/icons';
import { LinkItem } from '@/constants/footer';

export interface FooterLinkSectionProps {
    title: string;
    links: LinkItem[];
}

const FooterLinkSection = memo(({ title, links }: FooterLinkSectionProps) => (
    <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-300">{title}</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        href={link.href}
                        className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
                    >
                        <ChevronRightIcon className="h-3 w-3 mr-2 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
));

FooterLinkSection.displayName = 'FooterLinkSection';

export default FooterLinkSection; 