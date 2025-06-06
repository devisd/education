import { getSlides } from '@/api/services';
import { ClientCarousel } from './ClientCarousel';

export const HomeCarousel = async () => {
    const { data } = await getSlides();
    const sliderImages = (data || [])
        .map(el => ({
            id: el.id,
            image: {
                mobile: `${process.env.NEXT_PUBLIC_BASE_URL}${el.small?.url}`,
                tablet: `${process.env.NEXT_PUBLIC_BASE_URL}${el.medium?.url}`,
                desktop: `${process.env.NEXT_PUBLIC_BASE_URL}${el.large?.url}`,
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