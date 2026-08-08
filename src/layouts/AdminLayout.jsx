import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from '../component/Admin/AdminSidebar'
import AdminNavbar from '../component/Admin/AdminNavbar'
const AdminLayout = () => {
  return (
    <div>
           <div className="min-h-screen bg-black">
        <section  className="ml-52 ">
            <AdminNavbar/>
        </section>
        
      <section>
        <AdminSideBar/>
      </section>
      <section>
            <main className="ml-52 min-h-screen">
        <Outlet/>
        </main>
      </section>
      </div>
    </div>
  )
}

export default AdminLayout
