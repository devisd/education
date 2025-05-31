import Image from "next/image"
import { Stars } from "../Stars"
import type { IImageResponse } from "@/types"
import { UserIcon } from "@/icons"

export const ParseReview = ({ data }: { data: IImageResponse[] | null }) => {

    return (
        <>
            {data?.map((el) => (
                el.Publish ? <div key={el.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                        {el.Image ? (
                            <Image
                                src={`https://terminal-38.cloudpub.ru${el.Image.url}`}
                                alt={el.Image.name || "review image"}
                                width={96}
                                height={96}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                        ) : <div className="w-12 h-12 bg-gray-300/50 rounded-full mr-4 flex items-center justify-center">
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
                </div> : null
            ))}
        </>
    )
}
