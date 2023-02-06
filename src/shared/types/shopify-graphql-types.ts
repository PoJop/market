export interface IImages {
    edges?: (EdgesEntity)[] | null;
}
interface EdgesEntity {
    node: Node;
}
interface Node {
    url: string;
    width: number;
    height: number;
    id: string;
    altText?: null;
}

export interface IPriceRange {
    maxVariantPrice: MaxVariantPriceOrMinVariantPrice;
    minVariantPrice: MaxVariantPriceOrMinVariantPrice;
}
interface MaxVariantPriceOrMinVariantPrice {
    amount: string;
    currencyCode: string;
}
