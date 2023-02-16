import React from "react"
import { IProductCard } from "@/entities/product/types"
import { ProductCart } from "@/entities/product/ui"
import { Grid } from "@/shared/ui-kit"
import { useScrollEnd } from "@/shared/hooks/use-scroll-end"
import { createRandomProductCard } from "@/entities/product"
import { useInfinity } from "@/widgets/catalog/hooks/use-infinity"


export const InfinityItems = ({ products }: { products: IProductCard[] }) => {

    const [infinity, setInfinity] = React.useState<boolean>(false)
    const [newProducts, setNewProducts] = React.useState<IProductCard[]>(products)
    const byRef = React.useRef<HTMLDivElement>(null)

    useScrollEnd(() => setInfinity(true), {
        trigger: 1500,
        pause: infinity
    })



    React.useEffect(() => {

        if (infinity) {
            setNewProducts([...newProducts, ...createRandomProductCard({ length: 20 })])
            setInfinity(false)
        }

    }, [infinity])

    const { groups } = React.useMemo(() => {

        const groups: IProductCard[][] = []
        let group: IProductCard[] = []

        for (let index = 1; index <= newProducts.length; index++) {
            const element = newProducts[index - 1];

            group.push(element)
            if (!Boolean(index % 20)) {
                groups.push(group)
                group = []
            }

        }
        return { groups }

    }, [newProducts])


    return (
        <>
            {groups.map((group, idx) => (
                <React.Fragment key={idx}>
                    <Grid>
                        {group.map((elem, idx) => (
                            <ProductCart key={elem.node.id} data={elem} idx={idx} />
                        ))}
                    </Grid>
                    {groups.length > idx + 1 && <div className="flex items-center w-full py-5 my-5 text-[26px] opacity-40">
                        {idx + 2} <span className="block w-full mx-3 border-b"></span>
                        <span className="text-[12px] flex gap-4"><div>{(idx + 2) * 20}</div> <div>items</div></span>
                    </div>}
                </React.Fragment>
            ))}
        </>
    )
}