"use client";

import { Carousel } from '@/components/ui/Carousel';

export function ClientCarousel({ slides }: { slides: any[] }) {
    if (!slides || !slides.length) {
        return <div className="w-full h-[300px] bg-gray-400 animate-pulse rounded-lg" />;
    }
    return <Carousel slides={slides} autoPlayInterval={5000} />;
} 