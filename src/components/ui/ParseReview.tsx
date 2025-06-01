'use client'

import Image from "next/image"
import { Stars } from "../Stars"
import type { IImageResponse } from "@/types"
import { UserIcon } from "@/icons"
import { useState } from "react"

export const ParseReview = ({ data }: { data: IImageResponse[] | null }) => {
    const [visibleCount, setVisibleCount] = useState(9);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 9);
    };

    const visibleReviews = data?.filter(el => el.Publish).slice(0, visibleCount) || [];
    const hasMore = (data?.filter(el => el.Publish).length || 0) > visibleCount;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {visibleReviews.map((el) => (
                    <div key={el.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                            {el.Image ? (
                                <Image
                                    src={`https://terminal-38.cloudpub.ru${el.Image.url}`}
                                    alt={el.Image.name || "review image"}
                                    width={96}
                                    height={96}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                            ) : <div className="w-12 h-12 border border-primary-600/50 rounded-full mr-4 flex items-center justify-center">
                                <UserIcon className="w-8 h-8 text-primary-600" />
                            </div>}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">{el.Name}</h4>
                                <p className="text-sm text-gray-500">{el.Date}</p>
                            </div>
                        </div>

                        <div className="flex mb-3">
                            <Stars rating={el.Rating} />
                        </div>

                        <p className="text-gray-600 mb-4 flex-grow">{el.Content}</p>

                        <div className="pt-4 mt-auto border-t border-gray-100">
                            <p className="text-sm font-medium text-primary-600">
                                {el.Service}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center my-10">
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg shadow hover:bg-primary-700 transition"
                    >
                        Показать еще
                    </button>
                </div>
            )}
        </>
    )
}
