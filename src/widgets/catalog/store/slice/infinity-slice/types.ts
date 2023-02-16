import { IProductCard } from "@/entities/product/types";

export interface IInitialState {
    products: IProductCard[]
    viewType: TViewType
}
export type TViewType = "infinity" | "pagination"