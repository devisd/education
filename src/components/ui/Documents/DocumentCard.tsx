'use client'

import React from 'react';
import Image from 'next/image';
import { ZoomIcon, EyeIcon, DocumentIcon } from '@/icons';

interface DocumentCardProps {
    id: number;
    src: string;
    alt: string;
    isPdf?: boolean;
    onOpen: (id: number) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ id, src, alt, isPdf = false, onOpen }) => {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            onClick={() => onOpen(id)}
            role="button"
            aria-label={`Просмотреть документ: ${alt}`}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onOpen(id);
                    e.preventDefault();
                }
            }}
        >
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800 text-center">{alt}</h3>
            </div>
            <div className="relative aspect-[1/1.414] w-full overflow-hidden">
                {isPdf ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <DocumentIcon className="h-24 w-24 text-primary-600" />
                    </div>
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={id <= 3} // Приоритет загрузки для первых элементов
                        quality={75} // Optimize quality to balance size and appearance
                        loading={id <= 3 ? "eager" : "lazy"} // Lazy load non-priority images
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QIlsoQAAAABJRU5ErkJggg=="
                    />
                )}
                <div className="absolute inset-0 bg-primary-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-md">
                        <ZoomIcon className="h-8 w-8 text-primary-600" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <button
                    className="w-full bg-white border-2 border-primary-600 text-primary-600 py-3 px-4 rounded-md hover:bg-primary-600 hover:text-white transition-colors text-sm flex items-center justify-center font-medium group-hover:bg-primary-600 group-hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                    aria-label={`Просмотреть документ: ${alt}`}
                >
                    <EyeIcon className="h-5 w-5 mr-2" />
                    Просмотреть документ
                </button>
            </div>
        </div>
    );
}; 