'use client'

import { useState, useEffect } from 'react';

interface CarouselProps {
    slides: {
        id: number;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        title: string;
        description: string;
    }[];
    autoPlayInterval?: number;
}

export const Carousel = ({ slides, autoPlayInterval = 5000 }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlayInterval]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full">
                        <div className="relative">
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={slide.image.desktop} />
                                <source media="(min-width: 768px)" srcSet={slide.image.tablet} />
                                <source media="(max-width: 767px)" srcSet={slide.image.mobile} />
                                <img
                                    src={slide.image.mobile}
                                    alt={slide.title}
                                    className="w-full h-full object-fit"
                                />
                            </picture>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h3 className="text-xl font-bold">{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                onClick={prevSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                onClick={nextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-primary-500' : 'bg-primary-400 bg-opacity-50'
                            }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}; 