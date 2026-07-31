import React from 'react'

const FilterSidebar = ({ selectedBrand, setSelectedBrand,selectedCategory,setSelectedCategory}) => {
   const brands = [
    "Royal Enfield",
    "Yamaha",
    "Kawasaki",
    "Ducati",
    "Stark Future",
    "BMW Motorrad",
    "Honda",
    "KTM",
    "Aprilia",
    "Suzuki",
    "MV Agusta",
    "Triumph",
  ];
  const categories = [
  "Adventure",
  "Sport Bike",
  "Super Bike",
  "Naked Bike",
];
  return (
       <aside className="bg-[#161616] text-white rounded-xl p-6 min-h-[775px] ">

      <h2 className="font-bold text-lg mb-6 text-[#D3AF37] ">
        Filters
      </h2>

      <div className="mb-8 ">

        <h3 className="font-semibold mb-3 text-white">
          Brand
        </h3>
        <label className="flex items-center gap-2 mb-2">
  <input
    type="radio"
    name="brand"
    className="accent-[#D3AF37]"
    checked={selectedBrand === ""}
    onChange={() => setSelectedBrand("")}
  />
  All Brands
</label>
 {brands.map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-2 mb-2"
          >
            <input
              type="radio"
              name="brand"
              className="accent-[#D3AF37]"
              checked={selectedBrand === brand}
              onChange={() => setSelectedBrand(brand)}
            />

            {brand}
          </label>
        ))}
      </div>


      <div>

        <h3 className="font-semibold mb-3 text-white">
          Category
        </h3>
        

        <label className="flex items-center gap-2 mb-2">
  <input
    type="radio"
    name="category"
    className="accent-[#D3AF37]"
    checked={selectedCategory === ""}
    onChange={() => setSelectedCategory("")}
  />
  All Categories
</label>

{categories.map((cat) => (
  <label key={cat} className="flex items-center gap-2 mb-2">
    <input
      type="radio"
      name="category"
      className="accent-[#D3AF37]"
      checked={selectedCategory === cat}
      onChange={() => setSelectedCategory(cat)}
    />
    {cat}
  </label>
  ))}

      </div>

    </aside>
  )
}

export default FilterSidebar
