import { CATALOG_PAGE } from "@/app/consts/routers"
import { BagIcon, CheckmarkIcon } from "@/shared/assets/icons"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { IProductCard } from "../../types"

interface IProductCartProps {
    data: IProductCard
}

export const ProductCart: React.FC<IProductCartProps> = ({ data }) => {

    const [hover, setHover] = React.useState(false)

    const { push } = useRouter()

    const singleProductPageLink = `${CATALOG_PAGE}/${data.node.handle}`

    // const goToSingleProduct = () => push(singleProductPageLink)
    const addToCart = () => {
    }

    return (
        <>
            <article
                className={cn(
                    "overflow-hidden shadow-xl rounded-[6px] theme-mode-content  flex flex-col cursor-pointer ",
                    "hover:shadow-lg  transition-all"
                )}
                // onClick={goToSingleProduct}
                onMouseOut={() => setHover(false)}
                onMouseOver={() => setHover(true)}
            >
                <div className="overflow-hidden flex-[0_0_300px]">
                    {data.node.images.edges?.[0] &&
                        <Image
                            width={data.node.images.edges?.[0].node.width}
                            height={data.node.images.edges?.[0].node.width}
                            src={String(data.node.images.edges?.[0].node.url)}
                            alt={String(data.node.images.edges?.[0].node.altText)}
                            className={cn("h-full w-full object-cover transition-all", { "scale-[1.1]": hover })}
                        />
                    }
                </div>
                <div className="p-4 font-[400] flex flex-col  h-full flex-[1_1_100px]">
                    <div className="">
                        <Link href={singleProductPageLink}>
                            {data.node.title}
                        </Link>
                    </div>
                    <div
                        className="py-4 opacity-70 flex-[1_1_100%]"
                    >
                        {data.node.description}
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="mr-2">{data.node.priceRange.maxVariantPrice.amount}</span>
                            <span>{data.node.priceRange.maxVariantPrice.currencyCode}</span>
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                addToCart()
                            }}
                            className={cn(
                                "w-[20px] h-[20px]",
                                "hover:shadow-lg transition-all"
                            )}
                        >
                            <BagIcon className="icon-base" />
                            {/* <CheckmarkIcon className="icon-base" /> */}
                        </button>
                    </div>
                </div>
            </article>
        </>
    )
}