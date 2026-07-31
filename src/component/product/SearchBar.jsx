import React from 'react'
import {FiSearch,FiChevronDown} from 'react-icons/fi'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
        
         <section className="w-full bg-black text-white py-12 pt-0 pb-0 ">
      <div className="w-full px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold uppercase">
              Shop Miniatures
            </h1>
            <p className="mt-2 text-[#D3AF37] ">
              Discover premium die-cast motorcycles from iconic brands.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            Home <span className="mx-2">›</span>
            <span className="text-[#D3AF37] ">Shop</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
               value={search}
  onChange={(e) => setSearch(e.target.value)}
              placeholder="Search miniature motorcycles..."
              className="w-full rounded-lg border border-gray-800 bg-zinc-900 py-3 pl-12 pr-4 outline-none focus:border-[#D3AF37] "
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-400">Sort By:</span>

            <div className="relative">
              <select className="appearance-none rounded-lg border border-gray-800 bg-zinc-900 py-3 pl-4 pr-10 outline-none focus:border-[#D3AF37] ">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default SearchBar
