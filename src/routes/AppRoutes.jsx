import React from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Order from '../pages/Order'
import ProductDetails from '../pages/ProductDetails'
import Register from '../pages/Register'
import Shop from '../pages/Shop'
import UserLayout from '../layouts/UserLayout'
import AuthLayout from '../layouts/AuthLayout'

const AppRoutes = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/cart' element={<Cart />} />
                    
                  
                    <Route path='/order' element={<Order />} />
                    <Route path='/productDetails/:id' element={<ProductDetails />} />
                   
                    <Route path='/shop' element={<Shop />} />

                </Route>
                <Route element={<AuthLayout/>}>
                 <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />

                </Route>
                    <Route path='*' element={<NotFound />} />

            </Routes>
        </div>
    )
}

export default AppRoutes
