import React, { useState } from 'react'
import ProductGallery from '../component/productDetails/ProductGallery'
import ProductInfo from '../component/productDetails/ProductInfo'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../services/productService'

function ProductDetails() {
const {id} =useParams()
  console.log(id);
  const [product,setProduct]=useState(null)
  
  return (
    <div>
      <section className="bg-black min-h-screen pt-60 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <ProductGallery id={id}/>

          <ProductInfo id={id}/>

        </div>

      </div>

    </section>
    </div>
  )
}

export default ProductDetails
