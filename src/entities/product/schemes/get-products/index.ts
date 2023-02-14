

import { gql } from "@apollo/client";
import { IProductCard } from "../../types";

export interface IResProductsCard {
    products: {
        edges:
        IProductCard[]
    }
}

export const GET_SHOPIFY_PRODUCTS = gql`
    query ProductsShopify($first: Int,  $images: Int, $truncateAt: Int,$language: LanguageCode)  @inContext(language: $language){
        products(first: $first) {
            edges {
                node {
                    id
                    title
                    handle
                    description(truncateAt: $truncateAt)
                    images(first: $images) {
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
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                }
            }
        }
    }
`

