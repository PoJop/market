import React from "react"
import store from "./store/store"
import { Container } from "@/shared/ui-kit"
import { Provider } from "react-redux"
import { productsReduce } from "./store/slice/catalog-slice"
import { ApolloQueryResult } from "@apollo/client"
import { IResProductsCard } from "@/entities/product/schemes/get-products"
import { ErrorProductsAlert, NoProductsAlert, Products, Sidebar, TopPanel } from "./ui"
import { IProductCard } from "@/entities/product/types"


interface ICatalogProps {
    productsData: ApolloQueryResult<IResProductsCard> | null
}



export const Catalog: React.FC<ICatalogProps> = ({ productsData }) => {

    const { products } = React.useMemo(() => {
        let products: IProductCard[] = []
        if (productsData) {
            const { data: { products: { edges } } } = productsData
            products = edges
            // store.dispatch(productsReduce({ products: edges }))
        }
        return { products }
    }, [productsData])



    return (
        <>

            {Boolean(productsData)
                ? <>
                    <Provider store={store}>


                        <div className="mt-[40px]">

                            <Container className="flex gap-8">

                                <div className="flex-[0_0_300px] h-full">
                                    <Sidebar />
                                </div>

                                <div className="flex-[1_1_70%]">
                                    <TopPanel />

                                    {Boolean(productsData)
                                        ? <Products products={products} />
                                        : <NoProductsAlert />
                                    }
                                </div>

                            </Container>

                        </div>



                    </Provider>
                </>
                : <ErrorProductsAlert />
            }
        </>
    )
}