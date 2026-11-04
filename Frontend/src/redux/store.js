import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../redux/slice/productSlice'
import cartReducer from './slice/cartSlice'

export const store=configureStore({
    reducer:{
        product:productReducer,
           cart: cartReducer,
    }
})