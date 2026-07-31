import React from 'react'

const ProductGallery = ({product}) => {
  return (
    <div>
       <div className="flex justify-center items-center bg-zinc-900 rounded-xl p-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-lg object-contain"
      />
    </div>
    </div>
  )
}

export default ProductGallery
