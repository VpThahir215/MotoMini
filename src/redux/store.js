import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../redux/slice/productSlice'

export const store=configureStore({
    reducer:{
        product:productReducer,
    }
})