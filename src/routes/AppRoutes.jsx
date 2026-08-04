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
    import UserProfile from '../pages/UserProfile'
    import WishList from '../pages/WishList'
    import OrderSuccess from '../pages/OrderSuccess '
    import ProtectedRoute from './ProtectedRoute'

    const AppRoutes = () => {
        const navigate = useNavigate()
        return (
            <div>
                <Routes>
                    <Route path='/' element={<UserLayout />}>
                         <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />


                        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />

        <Route
          path="orderSucces"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="wishlist"
          element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          }
        />

      

                    </Route>
                    <Route element={<AuthLayout />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />

                    </Route>
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </div>
        )
    }

    export default AppRoutes
