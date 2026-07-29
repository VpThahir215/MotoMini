import React from 'react'

const FilterSidebar = () => {
  return (
       <aside className="bg-[#161616] text-white rounded-xl p-6 min-h-[775px] ">

      <h2 className="font-bold text-lg mb-6 text-[#D3AF37] ">
        Filters
      </h2>

      {/* Brand */}
      <div className="mb-8 ">

        <h3 className="font-semibold mb-3 text-white">
          Brand
        </h3>

        {[
          "Royal Enfield",
          "Yamaha",
          "Honda",
          "Ducati",
          "BMW",
        ].map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-2 mb-2"
          >
            <input type="checkbox"    className=" accent-[#D3AF37] "/>
            {brand}
          </label>
        ))}
      </div>

      {/* Category */}

      <div>

        <h3 className="font-semibold mb-3 text-white">
          Category
        </h3>

        {[
          "Adventure",
          "Sport",
          "Classic",
        ].map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 mb-2"
          >
            <input type="checkbox"  className=" accent-[#D3AF37] "/>
            {cat}
          </label>
        ))}
      </div>

    </aside>
  )
}

export default FilterSidebar
