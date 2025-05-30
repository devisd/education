import { renderBlock, renderBlocksWithBorders } from "@/api/parse"
import type { ICont, INewsResponse } from "@/types"
import { EmptyContent } from "./EmptyContent"

export const ParseContent = ({ data }: { data: ICont | null }) => {

    if (!data) return <EmptyContent />

    return (
        <>
            {data?.content?.length ?
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                    <div className="prose prose-lg max-w-none" >
                        {renderBlocksWithBorders(data?.content || [])}
                    </div>
                </div>
                :
                <EmptyContent />
            }
        </>
    )
}
