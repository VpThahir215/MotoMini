import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
const products = [
  {
    id: 1,
    title: "Classic 350",
    price: "$49.99",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
  },
  {
    id: 2,
    title: "Himalayan 450",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500",
  },
  {
    id: 3,
    title: "Interceptor 650",
    price: "$69.99",
    image:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=500",
  },
  {
    id: 4,
    title: "Meteor 350",
    price: "$54.99",
    image:
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=500",
  },
  {
    id: 5,
    title: "Meteor 350",
    price: "$54.99",
    image:
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=500",
  },
    {
    id: 5,
    title: "Meteor 350",
    price: "$54.99",
    image:
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=500",
  },

];

  return (
    <div>
         <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    
    </div>
  )
}

export default ProductGrid
