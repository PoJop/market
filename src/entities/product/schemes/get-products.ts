import { gql } from "@apollo/client";
import { IProductCard } from "../types";

export interface IResProductsCard {
    data: {
        products: {
            edges:
            IProductCard[]
        }
    }
}

export const GET_SHOPIFY_PRODUCTS = gql`

    query ProductsShopify($first: Int, $imagesFirst2: Int) {
        products(first: $first) {
            edges {
                node {
                    title
                    images(first: $imagesFirst2) {
                        edges {
                            node {
                                id
                                width
                                height
                                url
                                altText
                            }
                        }
                    }
                }
            }
        }
    }
`

