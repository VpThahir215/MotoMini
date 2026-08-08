import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from '../layouts/AdminLayout'
import Products from '../pages/admin/ Products'
import Orders from '../pages/admin/ Orders'
import Users from '../pages/admin/Users'
import Settings from '../pages/admin/Settings'

const AdminRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AdminLayout/>}> 
              <Route index element={<Dashboard/>}/>
              <Route path='/orders' element={<Orders/>}/>
               <Route path='/products' element={<Products/>}/>
               <Route path='/users' element={<Users/>}/>
               <Route path='/settings' element={<Settings/>}/>
               
              </Route>

            
        </Routes>
      
    </div>
  )
}

export default AdminRoute
