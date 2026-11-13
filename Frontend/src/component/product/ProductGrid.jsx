
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductGrid = ({
  currentPage,
  setCurrentPage,
}) => {

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const productsPerPage = 6;

  // Pagination
  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Loading
  if (loading) {
    return (
      <h2 className="text-white text-center py-10">
        Loading products...
      </h2>
    );
  }

  // No products
  if (products.length === 0) {
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
            key={product._id}
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
