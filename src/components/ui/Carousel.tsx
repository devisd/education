'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';

interface CarouselProps {
    slides: {
        id: number;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        link: string,
        title: string;
        description: string;
    }[];
    autoPlayInterval?: number;
}


// Хук для определения breakpoint
const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

    useEffect(() => {
        const checkBreakpoint = () => {
            if (window.matchMedia('(max-width: 767px)').matches) {
                setBreakpoint('mobile');
            } else if (window.matchMedia('(max-width: 1023px)').matches) {
                setBreakpoint('tablet');
            } else {
                setBreakpoint('desktop');
            }
        };
        checkBreakpoint();
        window.addEventListener('resize', checkBreakpoint);
        return () => window.removeEventListener('resize', checkBreakpoint);
    }, []);

    return breakpoint;
};

export const Carousel = ({ slides, autoPlayInterval = 5000 }: CarouselProps) => {
    const breakpoint = useBreakpoint();
    const slideHeight = breakpoint === 'mobile' ? '300px' : breakpoint === 'tablet' ? '400px' : '390px';

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: autoPlayInterval, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
        >
            {slides.map((slide) => {
                const bgUrl = slide.image[breakpoint];
                return (
                    <SwiperSlide key={slide.id}>
                        <a href={slide.link} target='_blank'>
                            <div
                                className="w-full relative"
                                style={{
                                    backgroundImage: `url(${bgUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: slideHeight,
                                }}
                            >
                                {/* Если нужны подписи, раскомментируйте ниже */}
                                {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h3 className="text-xl font-bold">{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div> */}
                            </div>
                        </a>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}; 