import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { getProducts } from './services/productService'
import { getOneProduct } from './services/productService'
import { useEffect } from 'react'

function App() {

  
   useEffect(()=>{
    const fetchOneProduct=async ()=>{
      const productOne=await getOneProduct(1)
      
    }
    fetchOneProduct()
  },[])
 

  return (
    <>
    <AppRoutes/>
    </>
  )
}

export default App
