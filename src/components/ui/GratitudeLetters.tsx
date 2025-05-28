'use client'

import React, { useState, useCallback } from 'react';
import { DocumentCard, DocumentModal } from '@/components/ui';
import type { ILetter } from '@/types';

interface GratitudeLettersProps {
    lettersData: ILetter[] | null;
}

export const GratitudeLetters: React.FC<GratitudeLettersProps> = ({ lettersData }) => {
    // Преобразуем данные писем в формат DocumentCard
    const gratitudeDocs = (lettersData ?? []).map((el) => ({
        id: el.id,
        src: `https://namely-magical-anhinga.cloudpub.ru${el.Image.url}`,
        alt: el.Title,
        isPdf: false,
    }));

    // useState и обработчики для модального окна
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const handleOpen = useCallback((id: number) => setActiveImage(id), []);
    const handleClose = useCallback(() => setActiveImage(null), []);
    const activeDocument = activeImage ? gratitudeDocs.find(doc => doc.id === activeImage) || null : null;

    return (
        <div className="p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-5 mx-auto">
                {gratitudeDocs.map(item => (
                    <DocumentCard
                        key={item.id}
                        id={item.id}
                        src={item.src}
                        alt={item.alt}
                        isPdf={item.isPdf}
                        onOpen={handleOpen}
                    />
                ))}
            </div>
            <DocumentModal activeDocument={activeDocument} onClose={handleClose} />
        </div>
    );
}; 