import { ProductTypes } from '@/entities/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from './types'


const initialState: IInitialState = {
    products: []
}


export const catalogSlice = createSlice({
    name: 'catalog-slice',
    initialState,
    reducers: {
        productsReduce: (state, action: PayloadAction<{ products: ProductTypes.IProductCard[] }>) => {
            state.products = action.payload.products
        },
    },
})

export const {
    productsReduce

} = catalogSlice.actions


export default catalogSlice.reducer