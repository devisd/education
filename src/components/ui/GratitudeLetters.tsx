'use client'

import React, { useState, useCallback } from 'react';
import { DocumentCard, DocumentModal } from '@/components/ui';
import type { ILetter } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface GratitudeLettersProps {
    lettersData: ILetter[] | null;
}

export const GratitudeLetters: React.FC<GratitudeLettersProps> = ({ lettersData }) => {
    // Преобразуем данные писем в формат DocumentCard
    const gratitudeDocs = (lettersData ?? []).map((el) => ({
        id: el.id,
        src: el.Image ? `https://terminal-38.cloudpub.ru${el.Image.url}` : '/images/no_image.png',
        alt: el.Title,
        isPdf: false,
        isPlaceholder: !el.Image,
    }));

    // useState и обработчики для модального окна
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const handleOpen = useCallback((id: number) => setActiveImage(id), []);
    const handleClose = useCallback(() => setActiveImage(null), []);
    const activeDocument = activeImage ? gratitudeDocs.find(doc => doc.id === activeImage) || null : null;

    // Определяем брейкпоинт
    const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'laptop' | 'desktop'>('desktop');
    React.useEffect(() => {
        const check = () => {
            if (window.matchMedia('(max-width: 767px)').matches) setBreakpoint('mobile');
            else if (window.matchMedia('(max-width: 1023px)').matches) setBreakpoint('tablet');
            else if (window.matchMedia('(max-width: 1279px)').matches) setBreakpoint('laptop');
            else setBreakpoint('desktop');
        };
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Количество видимых слайдов и лимит для кнопок
    let slidesPerView = 1;
    let navLimit = 1;
    if (breakpoint === 'mobile') { slidesPerView = 1; navLimit = 1; }
    else if (breakpoint === 'tablet') { slidesPerView = 2; navLimit = 2; }
    else if (breakpoint === 'laptop') { slidesPerView = 3; navLimit = 3; }
    else { slidesPerView = 4; navLimit = 4; }

    const showNav = gratitudeDocs.length > navLimit;

    return (
        <div className="p-6 md:p-8 mb-8">
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={slidesPerView}
                navigation={showNav}
                // className="!pb-8"
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 16 },
                    640: { slidesPerView: 1, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                    1280: { slidesPerView: 4, spaceBetween: 24 },
                }}
            >
                {gratitudeDocs.map(item => (
                    <SwiperSlide key={item.id}>
                        <DocumentCard
                            id={item.id}
                            src={item.src || ''}
                            alt={item.alt}
                            isPdf={item.isPdf}
                            onOpen={handleOpen}
                            isPlaceholder={item.isPlaceholder}
                        />
                    </SwiperSlide>
                ))}
                {/* Кастомные кнопки можно стилизовать через .swiper-button-next/prev */}
            </Swiper>
            <DocumentModal activeDocument={activeDocument} onClose={handleClose} />
        </div>
    );
}; 