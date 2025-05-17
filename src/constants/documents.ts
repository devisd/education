export type Document = {
    id: number;
    src: string;
    alt: string;
    isPdf?: boolean;
};

export const LICENSE_IMAGES: Document[] = [
    {
        id: 1,
        src: '/license/license.png',
        alt: 'Лицензия на осуществление образовательной деятельности',
    },
    {
        id: 2,
        src: '/license/reestr-1.png',
        alt: 'Выписка из реестра лицензий',
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