// import { useSelector } from "react-redux";
// import ProductCard from "./ProductCard";

// const ProductGrid = ({setCurrentPage,setsearch,selectedBrand,selectedCategory}) => {
//   const products = useSelector((state) => state.product.products);
//   const productPerPage=6

//   const loading=useSelector((state) => state.product.loading  );
//   const filteredProducts = products.filter((product) => {
//   const matchesSearch = product.name
//     .toLowerCase()
//     .includes(search.toLowerCase());

// const indexOfLastProduct = currentPage * productsPerPage;
// const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

// const currentProducts = filteredProducts.slice(
//   indexOfFirstProduct,
//   indexOfLastProduct
// );

//   const matchesBrand =
//     selectedBrand === "" ||
//     product.brand === selectedBrand;

//      const matchesCategory =
//     selectedCategory === "" ||
//     product.category === selectedCategory;

//   return matchesSearch && matchesBrand && matchesCategory;

// });


//   if (loading) {
//   return (
//     <h2 className="text-white text-center py-10">
//       Loading products...
//     </h2>
//   );
// }

// if (products.length === 0) {
//   return (
//     <h2 className="text-white text-center py-10">
//       No products found.
//     </h2>
//   );
// }
// if (filteredProducts.length === 0) {
//   return (
//     <div className="flex items-center justify-center h-60">
//       <h2 className="text-2xl font-semibold text-gray-400">
//        No miniature motorcycles match your search.
//       </h2>
//     </div>
//   );
// }

//   return (
//     <div className="grid md:grid-cols-3 gap-6">
//      {filteredProducts.map((product) => (
//  currentProducts.map((product) => (
//   <ProductCard
//     key={product.id}
//     product={product}
//   />
// ))
// ))}
//     </div>
//   );
// };

// export default ProductGrid;

import { useEffect } from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductGrid = ({
  search,
  selectedBrand,
  selectedCategory,
  currentPage,
  setCurrentPage,
}) => {

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const productsPerPage = 6;

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand =
      selectedBrand === "" ||
      product.brand === selectedBrand;

    const matchesCategory =
      selectedCategory === "" ||
      product.category === selectedCategory;

    return (
      matchesSearch &&
      matchesBrand &&
      matchesCategory
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedBrand, selectedCategory, setCurrentPage]);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const indexOfLastProduct =
    currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return (
      <h2 className="text-white text-center py-10">
        Loading products...
      </h2>
    );
  }

  if (products.length === 0) {
    return (
      <h2 className="text-white text-center py-10">
        No products found.
      </h2>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-60">
        <h2 className="text-2xl text-gray-400">
          No miniature motorcycles match your search.
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProductGrid;