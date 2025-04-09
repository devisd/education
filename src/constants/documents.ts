export type Document = {
    id: number;
    src: string;
    alt: string;
};

export const LICENSE_IMAGES: Document[] = [
    {
        id: 1,
        src: '/license/uvedomlenie-o-predostavlenii-liczenzii-ot-12.07.2024_page-0001.jpg',
        alt: 'Уведомление о предоставлении лицензии'
    },
    {
        id: 2,
        src: '/license/vypiska_organizaczii_9754_page-0001.jpg',
        alt: 'Выписка из реестра лицензий'
    },
    {
        id: 3,
        src: '/license/scan_20240614081237_page-0001.jpg',
        alt: 'Сертификат государственной аккредитации'
    }
];

export const APPRECIATION_LETTERS: Document[] = [
    {
        id: 101,
        src: '/letters/vosem-53-ot-13122024-dvizhenie-blagodarstvennoe-pismo-pdf.jpg',
        alt: 'Благодарственное письмо'
    },
    {
        id: 102,
        src: '/letters/krasnoe-sormovo-1.jpg',
        alt: 'Благодарность от Красное Сормово'
    },
    {
        id: 103,
        src: '/letters/scan-2.jpg',
        alt: 'Благодарственное письмо'
    }
]; 