import React from "react"
import { IProductCard } from "@/entities/product/types"
import { ProductCart } from "@/entities/product/ui"
import { Grid, Pagination } from "@/shared/ui-kit"

export const PaginationItems = ({ products }: { products: IProductCard[] }) => {


    return (
        <>
            <div>
                <Grid>
                    {products.map((elem, idx) => (
                        <ProductCart key={elem.node.id} data={elem} idx={idx} />
                    ))}
                </Grid>
            </div>
            <div className="flex justify-center">
                <Pagination pages={10} currentPage={1} urlParamName={"page"} />
            </div>
        </>
    )
}