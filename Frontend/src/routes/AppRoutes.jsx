import React from 'react'

import { Routes, Route } from 'react-router-dom'
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
import AdminRoute from './AdminRoute'
import PublicRoute from '../pages/PublicRoute'
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout";
import Products from "../pages/admin/ Products";
import Orders from "../pages/admin/ Orders";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import AddProduct from "../pages/admin/AddProduct";
import ProfileUser from "../pages/admin/ProfileUser";
import EditUser from "../pages/admin/EditUser";
import Trash from "../pages/Trash";
const AppRoutes = () => {

  return (
    <div>
      <Routes>

        {/* USER ROUTES */}
        <Route path='/' element={<UserLayout />}>

         <Route
  index
  element={

      <Home />
    
  }
/>

          <Route path="shop" element={<Shop />} />

          <Route
            path="productDetails/:id"
            element={<ProductDetails />}
          />

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


        {/* AUTH ROUTES */}
        {/* AUTH ROUTES */}
<Route element={<PublicRoute />}>
  <Route element={<AuthLayout />}>

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

  </Route>
</Route>


        {/* ADMIN ROUTES */}
       
<Route path="/admin" element={<AdminRoute />}>
  <Route element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="orders" element={<Orders />} />
    <Route path="products" element={<Products />} />
    <Route path="products/add" element={<AddProduct />} />
    <Route path="users" element={<Users />} />
    <Route path="settings" element={<Settings />} />
    <Route path="userProfile" element={<ProfileUser />} />
    <Route path="editUser" element={<EditUser />} />
    <Route path="trash" element={<Trash />} />
  </Route>
</Route>



        {/* 404 */}
        <Route
          path='*'
          element={<NotFound />}
        />

      </Routes>
    </div>
  )
}

export default AppRoutes