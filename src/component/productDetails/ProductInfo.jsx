import React from 'react'
import { FiStar } from 'react-icons/fi'
import AddToCartButton from './ AddToCartButton'
import BuyNowButton from './BuyNowButton'
import { CalendarDays,Clock3 } from 'lucide-react'





const ProductInfo = ({product,feature}) => {
   
  console.log(product.name);
  
  
  return (
  <div>
    {feature ? (
      <div className="text-white">

        <h1 className="text-4xl font-bold">
          {feature.title}
        </h1>

     
        <div className="flex items-center gap-2 mt-9">
          <FiStar className="text-yellow-400 fill-yellow-400" />
          <FiStar className="text-yellow-400 fill-yellow-400" />
          <FiStar className="text-yellow-400 fill-yellow-400" />
          <FiStar className="text-yellow-400 fill-yellow-400" />
          <FiStar className="text-yellow-400 fill-yellow-400" />
          <span className="text-gray-400">(4.9)</span>
        </div>

        <h2 className="text-3xl font-bold mt-3">
          ₹{feature.price}
        </h2>

        <p className="text-gray-400 mt-6 leading-7">
          {product.description}
        </p>

          <div className="flex items-center gap-3 pt-10 text-[#D3AF37]">
            <CalendarDays size={20} />
            <span className="uppercase font-bold tracking-wider">
              Coming Soon
            </span>
          </div>
        
          <div className="mt-5 flex items-center gap-3 text-gray-300">
            <Clock3 size={18} className="text-[#D3AF37]" />
            <span className="text-base">
              Expected Release:
              <span className="ml-2 font-semibold text-[#D3AF37]">
                2027
              </span>
            </span>
          </div>
        

      </div>
    ) : (
      <div className="text-white">

        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <h1 className="mt-4 text-2xl">Brand : {product.brand}</h1>
        <h1 className="mt-2 text-2xl">Category : {product.category}</h1>
        <h1 className="mt-2 text-2xl">Stock : {product.stock}</h1>

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

        <AddToCartButton product={product} />
        <BuyNowButton product={product} />

      </div>
    )}
  </div>
);
}


export default ProductInfo
