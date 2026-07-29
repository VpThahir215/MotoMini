import React, { useState } from 'react'
import SearchBar from '../component/product/SearchBar'
import SortDropdown from '../component/product/SortDropdown'
import FilterSidebar from '../component/product/FilterSidebar'
import ProductCard from '../component/product/ProductCard'
import ProductGrid from '../component/product/ProductGrid'
import Pagination from '../component/product/Pagination'

function Shop() {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    
    <div>
      
       <section className="bg-black min-h-screen pt-28 pb-16">
         <SearchBar />

      <div className="max-w-7xl mx-auto px-6">

       

        

        {/* Sidebar + Products */}
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
        totalPages={5}
        onPageChange={setCurrentPage}
      />
      
      
    </div>
  )
}

export default Shop
