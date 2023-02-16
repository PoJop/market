import { Components } from "@/shared"
import React from "react"

interface IArticleCartProps {
    data: any
}

export const ArticleCart: React.FC<IArticleCartProps> = ({ data }) => {


    return (
        <>
            <article className="flex flex-col cursor-pointer hover:shadow-xl theme-mode-content ">
                <div className="overflow-hidden flex-[0_0_300px]">
                    <Components.LazyImage
                        width={400}
                        height={400}
                        src={"/image-error-load.jpg"}
                        alt=""
                        className="object-cover w-full h-full image-hover"
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between">
                        <h5 className="text-[20px]">
                            title
                        </h5>
                        <div>
                            15.02.2023
                        </div>
                    </div>
                    <div
                        className="py-4"
                        // dangerouslySetInnerHTML={{ __html: "desc" }}
                    />
                </div>
            </article>
        </>
    )
}