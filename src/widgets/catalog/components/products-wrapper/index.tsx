import { IProductCard } from "@/entities/product/types"
import { useCatalogSelector } from "../../store/hooks"
import { InfinityItems } from "./infinity-items"
import { PaginationItems } from "./pagination-items"

export const ProductsWrapper = ({ products }: { products: IProductCard[] }) => {


    const { viewType } = useCatalogSelector(stare => stare.catalog)


    return (
        <>
            {viewType === "infinity" && <InfinityItems products={products} />}
            {viewType === "pagination" && <PaginationItems products={products} />}
        </>
    )
}