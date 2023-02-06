import { ProductCart } from "@/entities/product/ui"
import { useCatalogSelector } from "@/widgets/catalog/store/hooks"
import React from "react"


export const ProductGrid: React.FC = () => {

    const { products } = useCatalogSelector(stare => stare.catalog)

    
    return (
        <>
            <div className="mt-[60px]">
                <ul className="grid grid-cols-4">
                    {products.map((product, idx) =>
                        <ProductCart key={idx} data={product} />
                    )}
                </ul>
            </div>
        </>
    )
}