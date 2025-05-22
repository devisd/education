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