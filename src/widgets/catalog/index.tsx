import React from "react"
import store from "./store/store"
import { ProductGrid } from "@/features/product-grid"
import { Container } from "@/shared/ui-kit"
import { Provider } from "react-redux"
import { productsReduce } from "./store/slice/catalog-slice"
import { ProductTypes } from "@/entities/product"


interface ICatalogProps {
    products: ProductTypes.IProductCard[]
}



export const Catalog: React.FC<ICatalogProps> = ({ products }) => {

    React.useMemo(() => {
        store.dispatch(productsReduce({ products }))
    }, [products])



    return (
        <>
            <Provider store={store}>
                <Container>
                    <ProductGrid />
                </Container>
            </Provider>
        </>
    )
}