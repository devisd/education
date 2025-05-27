import { Carousel } from '@/components/ui/Carousel';
import { FestiveBanner } from '@/components/ui/FestiveBanner';
import { getSlides } from '@/api/services';

export const HomeCarousel = async () => {
    const res = await getSlides();
    const sliderImages = (res.data || [])
        .map(el => ({
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
        .sort((a, b) => a.id - b.id);

    return (
        <section className="py-4">
            <div>
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                <Carousel slides={sliderImages} autoPlayInterval={5000} />
            </div>
        </section>
    );
} 