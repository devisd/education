import { getSlides } from '@/api/services';
import { ClientCarousel } from './ClientCarousel';

export const HomeCarousel = async () => {
    const { data } = await getSlides();
    const sliderImages = (data || [])
        .map(el => ({
            id: el.id,
            image: {
                mobile: 'https://terminal-38.cloudpub.ru' + el.small?.url,
                tablet: 'https://terminal-38.cloudpub.ru' + el.medium?.url,
                desktop: 'https://terminal-38.cloudpub.ru' + el.large?.url,
            },
            link: el.link || '',
            title: '',
            description: '',
            createdAt: el.createdAt,
        }))
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    return (
        <section className="py-4">
            <ClientCarousel slides={sliderImages} />
        </section>
    );
} 