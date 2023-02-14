import { gql } from "@apollo/client";
import { IProductBase } from "../../types";

export interface IResSingleProduct {
    product: IProductBase
}

export const GET_SHOPIFY_SINGLE_PRODUCT = gql`
    query ProductsShopify($handle: String  $images: Int, $truncateAt: Int,$language: LanguageCode)  @inContext(language: $language){
        product(handle: $handle) {
            id
            title
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
`