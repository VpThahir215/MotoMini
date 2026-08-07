


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../services/productService";
import { setProducts, setLoading } from "../redux/slice/productSlice";

import SearchBar from "../component/product/SearchBar";
import FilterSidebar from "../component/product/FilterSidebar";
import ProductGrid from "../component/product/ProductGrid";
import Pagination from "../component/product/Pagination";
import { useLocation } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");


  const [currentPage, setCurrentPage] = useState(1);
  const location=useLocation()
  // const catagory=location.state?.category || "";
  // console.log(catagory)
    const [selectedCategory, setSelectedCategory] = useState("");

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
    console.log("Category from Home:", location.state?.category);
  if (location.state?.category) {
    setSelectedCategory(location.state.category);
    console.log(location);
    
  }
}, [location]);

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