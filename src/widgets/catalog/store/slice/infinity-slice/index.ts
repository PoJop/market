import { ProductTypes } from '@/entities/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState, TViewType } from './types'


const initialState: IInitialState = {
    products: [],
    viewType: "infinity"
}


export const catalogSlice = createSlice({
    name: 'catalog-slice',
    initialState,
    reducers: {
        productsReduce: (state, action: PayloadAction<{ products: ProductTypes.IProductCard[] }>) => {
            state.products = action.payload.products
        },
        changeViewTypeReduce: (state, action: PayloadAction<{ viewType: TViewType }>) => {
            state.viewType = action.payload.viewType
        },
    },
})

export const {
    productsReduce,
    changeViewTypeReduce

} = catalogSlice.actions


export default catalogSlice.reducer