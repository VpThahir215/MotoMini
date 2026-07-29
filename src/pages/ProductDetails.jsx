import React from 'react'
import ProductGallery from '../component/productDetails/ProductGallery'
import ProductInfo from '../component/productDetails/ProductInfo'

function ProductDetails() {
  return (
    <div>
      <section className="bg-black min-h-screen pt-60 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <ProductGallery />

          <ProductInfo />

        </div>

      </div>

    </section>
    </div>
  )
}

export default ProductDetails
