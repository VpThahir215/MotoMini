import React from 'react'

import { Routes,Route,useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Order from '../pages/Order'
import ProductDetails from '../pages/ProductDetails'
import Register from '../pages/Register'
import Shop from '../pages/Shop'

const AppRoutes = () => {
    const navigate=useNavigate()
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/order' element={<Order />} />
                <Route path='/productDetails' element={<ProductDetails />} />
                <Route path='/register' element={<Register />} />
                <Route path='/shop' element={<Shop />} />


            </Routes>
        </div>
    )
}

export default AppRoutes
