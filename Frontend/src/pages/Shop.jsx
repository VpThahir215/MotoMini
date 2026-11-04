import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiFilter, FiX } from "react-icons/fi";

import { getProducts } from "../services/productService";
import { setProducts, setLoading } from "../redux/slice/productSlice";

import SearchBar from "../component/product/SearchBar";
import FilterSidebar from "../component/product/FilterSidebar";
import ProductGrid from "../component/product/ProductGrid";
import { useLocation } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      const data = await getProducts();
      dispatch(setProducts(data));
      dispatch(setLoading(false));
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location]);

  return (
    <section className="bg-black min-h-screen pt-24 pb-16">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-end mt-4 lg:hidden">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 bg-[#D3AF37] text-black px-4 py-2 rounded-lg font-semibold"
          >
            <FiFilter />
            Filters
          </button>
        </div>

        {filterOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 lg:hidden">
            <div className="w-72 h-full bg-[#161616] p-5 overflow-y-auto">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[#D3AF37] text-xl font-bold">Filters</h2>
                <button onClick={() => setFilterOpen(false)}>
                  <FiX className="text-white text-2xl" />
                </button>
              </div>

              <FilterSidebar
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="lg:col-span-9">
            <ProductGrid
              search={search}
              selectedBrand={selectedBrand}
              selectedCategory={selectedCategory}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;