import React from 'react';
import { Carousel } from '@/components/ui/Carousel';
import { FestiveBanner } from '@/components/ui/FestiveBanner';

export const HomeCarousel = () => {
    const slides = [
        {
            id: 1,
            image: {
                mobile: '/images/carousel/mobile/slide1.png',
                tablet: '/images/carousel/tablet/slide1.png',
                desktop: '/images/carousel/desktop/slide1.png',
            },
            title: '',
            description: '',
        },
        {
            id: 2,
            image: {
                mobile: '/images/carousel/mobile/slide2.png',
                tablet: '/images/carousel/tablet/slide2.png',
                desktop: '/images/carousel/desktop/slide2.png',
            },
            title: '',
            description: '',
        },
        {
            id: 3,
            image: {
                mobile: '/images/carousel/mobile/slide3.png',
                tablet: '/images/carousel/tablet/slide3.png',
                desktop: '/images/carousel/desktop/slide3.png',
            },
            title: '',
            description: '',
        },
        {
            id: 4,
            image: {
                mobile: '/images/carousel/mobile/slide4.png',
                tablet: '/images/carousel/tablet/slide4.png',
                desktop: '/images/carousel/desktop/slide4.png',
            },
            title: '',
            description: '',
        },
        {
            id: 5,
            image: {
                mobile: '/images/carousel/mobile/slide5.png',
                tablet: '/images/carousel/tablet/slide5.png',
                desktop: '/images/carousel/desktop/slide5.png',
            },
            title: '',
            description: '',
        },
    ];

    return (
        <section className="py-4">
            <div>
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                <Carousel slides={slides} autoPlayInterval={5000} />
            </div>
        </section>
    );
}; 