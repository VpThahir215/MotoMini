


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../services/productService";
import { setProducts, setLoading } from "../redux/slice/productSlice";

import SearchBar from "../component/product/SearchBar";
import FilterSidebar from "../component/product/FilterSidebar";
import ProductGrid from "../component/product/ProductGrid";
import Pagination from "../component/product/Pagination";

function Shop() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));

      const data = await getProducts();

      dispatch(setProducts(data));
      dispatch(setLoading(false));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <section className="bg-black min-h-screen pt-28 pb-16">

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-12 gap-6 mt-8">

          <div className="col-span-3">
            <FilterSidebar
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="col-span-9">
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