'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@/icons';

interface ServiceCardProps {
  icon?: React.ComponentType<{ className?: string }> | string;
  title: string;
  description?: string;
  href: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
      aria-label={`Подробнее о программе "${title}"`}
    >
      <div className="mb-5 text-primary-600 p-3 bg-primary-50 inline-flex rounded-lg">
        {typeof icon === 'string' ? icon?.length ?
          <Image src={`https://terminal-38.cloudpub.ru${icon}`} alt={title} width={48} height={48} className="h-12 w-12 text-primary-600 " />
          :
          <div className="h-12 w-12 bg-primary-600" />
          : icon ? React.createElement(icon, { className: 'h-12 w-12 text-primary-600' }) : null
        }
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow leading-relaxed">{description}</p>
      <div className="text-primary-600 font-medium flex items-center mt-auto group">
        <span className="mr-2">Подробнее</span>
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
