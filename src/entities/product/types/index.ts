import { IResGraphqlBase } from "@/shared/types/graphql-types";
import { IImages, IPriceRange } from "@/shared/types/shopify-graphql-types";



export interface IProductBase {
    id: string;
    title: string;
    handle: string;
    description: string;
    images: IImages;
    priceRange: IPriceRange;
}
export interface IProductCard {
    node: IProductBase
}

