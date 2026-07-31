import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = useSelector((state) => state.product.products);
  const loading=useSelector((state) => state.product.loading  );

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

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;