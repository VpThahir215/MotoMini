import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/NavBar/NavBar'
import Footer from '../component/NavBar/Footer'

const UserLayout = () => {
  return (
    <div>
        <section>
         <Navbar/>
            
        </section>
      <section>
        <Outlet/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default UserLayout
