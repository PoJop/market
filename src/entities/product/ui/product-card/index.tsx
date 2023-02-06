import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { IProductCard } from "../../types"

interface IProductCartProps {
    data: IProductCard
}

export const ProductCart: React.FC<IProductCartProps> = ({ data }) => {


    const router = useRouter()

    return (
        <>
            <article>
                <div>
                    <Image
                        width={data.node.images.edges?.[0].node.width}
                        height={ data.node.images.edges?.[0].node.width}
                        src={String(data.node.images.edges?.[0].node.url)}
                        alt={String(data.node.images.edges?.[0].node.altText)}
                        className="h-[300px] object-cover"
                    />
                </div>
                <div>
                    {data.node.title}
                </div>
            </article>
        </>
    )
}