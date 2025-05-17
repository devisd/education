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
                mobile: '/images/carousel/mobile/slide1.png',
                tablet: '/images/carousel/tablet/slide1.png',
                desktop: '/images/carousel/desktop/slide1.png',
            },
            title: '',
            description: '',
        },
        {
            id: 3,
            image: {
                mobile: '/images/carousel/mobile/slide1.png',
                tablet: '/images/carousel/tablet/slide1.png',
                desktop: '/images/carousel/desktop/slide1.png',
            },
            title: '',
            description: '',
        },
        {
            id: 4,
            image: {
                mobile: '/images/carousel/mobile/slide1.png',
                tablet: '/images/carousel/tablet/slide1.png',
                desktop: '/images/carousel/desktop/slide1.png',
            },
            title: '',
            description: '',
        },
        {
            id: 5,
            image: {
                mobile: '/images/carousel/mobile/slide1.png',
                tablet: '/images/carousel/tablet/slide1.png',
                desktop: '/images/carousel/desktop/slide1.png',
            },
            title: '',
            description: '',
        },
    ];

    return (
        <section className="py-4">
            <div>
                {/* <div className="container mx-auto px-4 lg:px-2 xl:px-4 max-w-screen-xl"> */}
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                <Carousel slides={slides} autoPlayInterval={5000} />
            </div>
        </section>
    );
}; 