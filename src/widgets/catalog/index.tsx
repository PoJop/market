import React from "react"
import store from "./store/store"
import { Container, SectionTitle } from "@/shared/ui-kit"
import { Provider } from "react-redux"
import { productsReduce } from "./store/slice/catalog-slice"
import { ApolloQueryResult } from "@apollo/client"
import { IResProductsCard } from "@/entities/product/schemes/get-products"
import { ErrorProductsAlert, NoProductsAlert, Sidebar, TopPanel } from "./ui"
import { IProductCard } from "@/entities/product/types"
import { ProductsWrapper } from "./components"


interface ICatalogProps {
    productsData: ApolloQueryResult<IResProductsCard> | null;
    isBot: boolean;
}



export const Catalog: React.FC<ICatalogProps> = ({ productsData, isBot }) => {

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
        <section className="py-[100px]">

            {Boolean(productsData)
                ? <>
                    <Provider store={store}>


                        <div className="mt-[40px]">

                            <Container className="relative flex h-full gap-8">

                                <div className="flex-[0_0_300px] hidden xl:block h-full  sticky top-[70px]">
                                    <Sidebar />
                                </div>

                                <div className="flex-[1_1_70%]">
                                    <TopPanel />

                                    {Boolean(productsData)
                                        ? <ProductsWrapper products={products} />
                                        : <NoProductsAlert />
                                    }
                                </div>

                            </Container>

                        </div>



                    </Provider>
                </>
                : <ErrorProductsAlert />
            }
        </section>
    )
}