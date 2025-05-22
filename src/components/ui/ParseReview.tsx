import Image from "next/image"
import { Stars } from "../Stars"
import { EmptyContent } from "./EmptyContent";
import type { IImageResponse } from "@/types"

const getImageUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const base = process.env.NEXT_PUBLIC_API_URL;
    if (!base) {
        // fallback: относительный путь
        return url.startsWith('/') ? url : '/' + url;
    }
    return base.replace(/\/$/, '') + (url.startsWith('/') ? url : '/' + url);
};

export const ParseReview = ({ data }: { data: IImageResponse[] | null }) => {
    if (!data) return <EmptyContent />;
    return (
        <>
            {data.map((el) => (
                <div key={el.id} className="flex mb-8 p-6 bg-white rounded-xl shadow-md sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                        {el.image?.url && (
                            <Image
                                src={getImageUrl(el.image.url)}
                                alt={el.image.name || "review image"}
                                width={96}
                                height={96}
                                className="rounded-lg object-cover w-24 h-24"
                            />
                        )}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{el.Name}</h3>
                        <div className="text-gray-500 text-sm mb-2">{el.Date}</div>
                        <Stars rating={el.Rating} />
                        <div className="mt-2 text-gray-700">{el.Content}</div>
                    </div>
                </div>
            ))}
        </>
    )
}
