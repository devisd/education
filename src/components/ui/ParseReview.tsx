import Image from "next/image"
import { Stars } from "../Stars"
import { EmptyContent } from "./EmptyContent";
import type { IImageResponse } from "@/types"

export const ParseReview = ({ data }: { data: IImageResponse[] | null }) => {

    if (!data) return <EmptyContent />;

    return (
        <>
            {data.map((el) => (
                <div key={el.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                        {el.image ? (
                            <Image
                                src={`https://namely-magical-anhinga.cloudpub.ru${el.image.url}`}
                                alt={el.image.name || "review image"}
                                width={96}
                                height={96}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                        ) : <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 object-cover"></div>}
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
        </>
    )
}
