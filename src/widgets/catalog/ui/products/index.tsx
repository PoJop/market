import { IProductCard } from "@/entities/product/types"
import { ProductCart } from "@/entities/product/ui"
import { Grid } from "@/shared/ui-kit"
import { useCatalogSelector } from "../../store/hooks"

export const Products = ({products}: {products: IProductCard[]}) => {


    // const { products } = useCatalogSelector(stare => stare.catalog)


    return (
        <>
            <Grid>
                {products.map((elem) => (
                    <ProductCart key={elem.node.id} data={elem} />
                ))}
            </Grid>
        </>
    )
}