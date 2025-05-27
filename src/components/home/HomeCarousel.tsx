import { FestiveBanner } from '@/components/ui/FestiveBanner';
import { getSlides } from '@/api/services';
import { ClientCarousel } from './ClientCarousel';

export const HomeCarousel = async () => {
    const { data } = await getSlides();
    const sliderImages = (data || [])
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
            createdAt: el.createdAt,
        }))
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    return (
        <section className="py-4">
            <div>
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                <ClientCarousel slides={sliderImages} />
            </div>
        </section>
    );
} 