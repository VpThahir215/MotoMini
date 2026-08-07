import React, { useState } from 'react'
import ProductGallery from '../component/productDetails/ProductGallery'
import ProductInfo from '../component/productDetails/ProductInfo'
import { useLocation, useParams } from 'react-router-dom'
import { getOneProduct } from '../services/productService'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductDetails() {
const {id} =useParams()
  console.log(id);
  const [product,setProduct]=useState(null)

  const [loading, setLoading] = useState(true);
  const locatoin=useLocation()
  const feature=locatoin.state?.product;
  
  



 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await getOneProduct(id);

        setProduct(data);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl">
          Loading product...
        </h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-red-500 text-2xl">
          Product not found.
        </h1>
      </div>
    );
  }
  
  return (
    <div>
      <section className="bg-black min-h-screen pt-60 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <ProductGallery product={product} feature={feature} />

          <ProductInfo product={product}   feature={feature} />

        </div>

      </div>

    </section>
    </div>
  )
}

export default ProductDetails
