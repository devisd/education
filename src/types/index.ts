export interface MenuItem {
    title: string;
    href?: string;
    children?: MenuItem[];
}

interface ISlide {
    id: number,
    documentId: string,
    name: string,
    alternativeText: string | null,
    caption: any,
    width: number,
    height: number,
    formats: any,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string | null,
    provider: string,
    provider_metadata: any,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}

export interface ISlideResponse {
    id: number,
    documentId: string,
    link: string | null,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    small: ISlide,
    medium: ISlide,
    large: ISlide
}

export interface INewsResponse {
    id: number,
    documentId: string,
    Content: any[],
    Title: string,
    Date: string,
    Description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}

interface IContent {
    type: string,
    children: any,
    image?: any,
    level?: number
}

export interface ICont {
    id: number,
    documentId: string
    content: IContent[],
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface ILetter {
    id: number,
    documentId: string,
    Title: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    Image: IImage
}


export interface IData {
    id: number,
    documentId: string
    Title?: string
    Description?: IContent[],
    createdAt: string
    updatedAt: string
    publishedAt: string
}

interface IImageThumb {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: string | null,
    width: number,
    height: number,
    size: number,
    sizeInBytes: number,
    url: string
}

interface IImageFormat {
    thumbnail: IImageThumb,
    small: IImageThumb,
    medium: IImageThumb,
    large: IImageThumb
}

interface IImage {
    id: number,
    documentId: string,
    name: string,
    alternativeText: string | null,
    caption: any,
    width: number,
    height: number,
    formats: IImageFormat[],
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string | null,
    provider: string,
    provider_metadata: any,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}

export interface IImageResponse {
    id: number
    documentId: string,
    Name: string,
    Date: string,
    Rating: number,
    Content: string,
    Service: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    Publish: boolean,
    Image: IImage
}

export interface ITrainingResponse {
    id: number
    documentId: string,
    content: IContent[],
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    image: IImage
}



export interface LinkItem {
    name: string;
    href: string;
}

export type IconType = 'team' | 'shield' | 'checklist' | 'currency';

export interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    content: string[];
    image: string;
    slug: string;
    link: string;
    iconType: IconType;
    gradient: string;
}

export type Partner = {
    id: number;
    name: string;
    logo: string;
    website: string;
};

export type TrainingCategory = {
    icon?: React.ComponentType<{ className?: string }>;
    title: string;
    description?: string;
    href: string;
};