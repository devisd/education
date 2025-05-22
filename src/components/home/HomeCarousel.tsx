import { getSlides } from '@/api/services';
import { Carousel } from '@/components/ui/Carousel';
import { FestiveBanner } from '@/components/ui/FestiveBanner';

export const HomeCarousel = async () => {
    const { data } = await getSlides()

    const slides = data?.map(el => {
        return {
            id: el.id,
            image: {
                mobile: 'https://namely-magical-anhinga.cloudpub.ru' + el.small.url,
                tablet: 'https://namely-magical-anhinga.cloudpub.ru' + el.medium.url,
                desktop: 'https://namely-magical-anhinga.cloudpub.ru' + el.large.url,
            },
            link: el.link || '',
            title: '',
            description: '',
        }
    })

    return (
        <section className="py-4">
            <div>
                <div className="mb-4">
                    <FestiveBanner className="w-full" />
                </div>
                <Carousel slides={slides || []} autoPlayInterval={5000} />
            </div>
        </section>
    );
}; 