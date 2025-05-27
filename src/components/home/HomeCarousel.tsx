'use client'

import { useEffect, useState } from 'react';
import { Carousel } from '@/components/ui/Carousel';
import { FestiveBanner } from '@/components/ui/FestiveBanner';
import { getSlides } from '@/api/services';

type Slide = {
    id: number;
    image: { mobile: string; tablet: string; desktop: string };
    link: string;
    title: string;
    description: string;
};

export const HomeCarousel = () => {
    const [loading, setLoading] = useState(true);
    const [sliderImages, setSliderImages] = useState<Slide[]>([]);

    useEffect(() => {
        getSlides().then(res => {
            setSliderImages(
                (res.data || []).map(el => ({
                    id: el.id,
                    image: {
                        mobile: 'https://namely-magical-anhinga.cloudpub.ru' + el.small?.url,
                        tablet: 'https://namely-magical-anhinga.cloudpub.ru' + el.medium?.url,
                        desktop: 'https://namely-magical-anhinga.cloudpub.ru' + el.large?.url,
                    },
                    link: el.link || '',
                    title: '',
                    description: '',
                }))
            );
        }).finally(
            () => setLoading(false)
        );
    }, []);

    return (
        <section className="py-4">
            <div>
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                {loading ? (
                    <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-lg" />
                ) : (
                    <Carousel slides={sliderImages || []} autoPlayInterval={5000} />
                )}
            </div>
        </section>
    );
}; 