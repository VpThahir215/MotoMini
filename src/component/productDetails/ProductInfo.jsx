import React from 'react'
import { FiStar } from 'react-icons/fi'
import QuantitySelector from './QuantitySelector'
import AddToCartButton from './ AddToCartButton'
import BuyNowButton from './BuyNowButton'


const ProductInfo = ({product}) => {
   
  console.log(product.name);
  
  return (
    <div>
        <div className="text-white">

      <h1 className="text-4xl font-bold">
      {product.name}
      </h1>

     <h1 className='mt-4 text-2xl'> Brand : {product.brand}</h1>
        <h1 className='mt-2 text-2xl'> Category : {product.category}</h1>
           <h1 className='mt-2 text-2xl'> Stock : {product.stock}</h1>
      <div className="flex items-center gap-2 mt-9">
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />
        <FiStar className="text-yellow-400 fill-yellow-400" />

        <span className="text-gray-400">(4.9)</span>
      </div>

      <h2 className="text-3xl font-bold mt-3">
         ₹{product.price}
      </h2>

      <p className="text-gray-400 mt-6 leading-7">
       {product.description}
      </p>
      <QuantitySelector/>
      <AddToCartButton/>
        <BuyNowButton/>
      
      </div>
    </div>
  )
}

export default ProductInfo
