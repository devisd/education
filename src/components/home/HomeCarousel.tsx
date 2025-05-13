import React from 'react';
import { Carousel } from '@/components/ui/Carousel';
import { FestiveBanner } from '@/components/ui/FestiveBanner';

export const HomeCarousel = () => {
    const slides = [
        {
            id: 1,
            image: '/images/carousel/slide1.webp',
            title: '',
            description: '',
        },
        {
            id: 2,
            image: '/images/carousel/slide2.webp',
            title: '',
            description: '',
        },
        {
            id: 3,
            image: '/images/carousel/slide1.webp',
            title: '',
            description: '',
        },
        {
            id: 4,
            image: '/images/carousel/slide2.webp',
            title: '',
            description: '',
        },
        {
            id: 5,
            image: '/images/carousel/slide1.webp',
            title: '',
            description: '',
        },
    ];

    return (
        <section className="py-4">
            <div className="container mx-auto px-4 lg:px-2 xl:px-4 max-w-screen-xl">
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                <Carousel slides={slides} autoPlayInterval={6000} />
            </div>
        </section>
    );
}; 