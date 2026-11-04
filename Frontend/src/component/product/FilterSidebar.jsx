import React from "react";

const FilterSidebar = ({
  selectedBrand,
  setSelectedBrand,
  selectedCategory,
  setSelectedCategory,
}) => {
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
   <aside className="bg-[#161616] text-white rounded-2xl p-5 lg:p-6 h-fit border border-white/10 shadow-lg">
  <h2 className="text-2xl font-bold text-[#D3AF37] mb-6">Filters</h2>

  {/* Brand */}
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4 text-white">Brand</h3>

    <label
      className={`flex items-center gap-3 p-3 mb-2 rounded-xl cursor-pointer transition-all duration-200 ${
        selectedBrand === ""
          ? "bg-[#D3AF37]/20 border border-[#D3AF37]"
          : "hover:bg-white/5 border border-transparent"
      }`}
    >
      <input
        type="radio"
        name="brand"
        className="w-5 h-5 accent-[#D3AF37]"
        checked={selectedBrand === ""}
        onChange={() => setSelectedBrand("")}
      />
      <span className="text-sm lg:text-base">All Brands</span>
    </label>

    {brands.map((brand) => (
      <label
        key={brand}
        className={`flex items-center gap-3 p-3 mb-2 rounded-xl cursor-pointer transition-all duration-200 ${
          selectedBrand === brand
            ? "bg-[#D3AF37]/20 border border-[#D3AF37]"
            : "hover:bg-white/5 border border-transparent"
        }`}
      >
        <input
          type="radio"
          name="brand"
          className="w-5 h-5 accent-[#D3AF37]"
          checked={selectedBrand === brand}
          onChange={() => setSelectedBrand(brand)}
        />
        <span className="text-sm lg:text-base">{brand}</span>
      </label>
    ))}
  </div>

  {/* Category */}
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">Category</h3>

    <label
      className={`flex items-center gap-3 p-3 mb-2 rounded-xl cursor-pointer transition-all duration-200 ${
        selectedCategory === ""
          ? "bg-[#D3AF37]/20 border border-[#D3AF37]"
          : "hover:bg-white/5 border border-transparent"
      }`}
    >
      <input
        type="radio"
        name="category"
        className="w-5 h-5 accent-[#D3AF37]"
        checked={selectedCategory === ""}
        onChange={() => setSelectedCategory("")}
      />
      <span className="text-sm lg:text-base">All Categories</span>
    </label>

    {categories.map((cat) => (
      <label
        key={cat}
        className={`flex items-center gap-3 p-3 mb-2 rounded-xl cursor-pointer transition-all duration-200 ${
          selectedCategory === cat
            ? "bg-[#D3AF37]/20 border border-[#D3AF37]"
            : "hover:bg-white/5 border border-transparent"
        }`}
      >
        <input
          type="radio"
          name="category"
          className="w-5 h-5 accent-[#D3AF37]"
          checked={selectedCategory === cat}
          onChange={() => setSelectedCategory(cat)}
        />
        <span className="text-sm lg:text-base">{cat}</span>
      </label>
    ))}
  </div>
</aside>
  );
};

export default FilterSidebar;