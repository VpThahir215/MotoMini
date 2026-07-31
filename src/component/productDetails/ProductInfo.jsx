import React from 'react'
import { FiStar } from 'react-icons/fi'
import QuantitySelector from './QuantitySelector'
import AddToCartButton from './ AddToCartButton'
import BuyNowButton from './BuyNowButton'
import { useSelector } from 'react-redux'


const ProductInfo = ({id}) => {
   const products = useSelector((state) => state.product.products);
   const product=products.find((item)=>item.id===Number(id));
  console.log(product);
  
  return (
    <div>
        <div className="text-white">

      <h1 className="text-4xl font-bold">
      
      </h1>

      <p className="text-[#D3AF37] mt-2">
        Brand: Kawasaki
      </p>

      <div className="flex items-center gap-2 mt-4">
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />

        <span className="text-gray-400">(4.9)</span>
      </div>

      <h2 className="text-3xl font-bold mt-6">
        $49.99
      </h2>

      <p className="text-gray-400 mt-6 leading-7">
        Premium die-cast Kawasaki Ninja ZX-10R miniature with
        realistic detailing, rubber tires, and collector-grade
        finish. Perfect for motorcycle enthusiasts and collectors.
      </p>
      <QuantitySelector/>
      <AddToCartButton/>
        <BuyNowButton/>
      
      </div>
    </div>
  )
}

export default ProductInfo
