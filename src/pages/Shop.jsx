import React, { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../services/productService'
import SearchBar from '../component/product/SearchBar'
import SortDropdown from '../component/product/SortDropdown'
import FilterSidebar from '../component/product/FilterSidebar'
import ProductCard from '../component/product/ProductCard'
import ProductGrid from '../component/product/ProductGrid'
import Pagination from '../component/product/Pagination'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/slice/productSlice'
import { setError, setLoading } from '../redux/slice/productSlice'


function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));
        const data = await getProducts()
        dispatch(setProducts(data))
      }

      finally {
        dispatch(setLoading(false))
      }



    }
    fetchProducts()
  }, [dispatch])

  return (

    <div>

      <section className="bg-black min-h-screen pt-28 pb-16">
        <SearchBar />

        <div className="max-w-7xl mx-auto px-6">





          <div className="grid grid-cols-12 gap-6 mt-8">

            <div className="col-span-3 ">
              <FilterSidebar />
            </div>

            <div className="col-span-9">
              <ProductGrid />
            </div>

          </div>

        </div>

      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      />


    </div>
  )
}

export default Shop
