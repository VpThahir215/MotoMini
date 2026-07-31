import {Link} from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#161616] rounded-xl overflow-hidden border border-gray-800 hover:border-[#D3AF37] transition">

  <Link to={`/productDetails/${product.id}`}>
    <img
      src={product.image}
      alt={product.name}
      className="h-52 w-full object-cover"
    />

    <div className="p-4">
      <h2 className="font-bold text-lg text-white">
        {product.name}
      </h2>

      <div className="text-[#D3AF37] text-2xl font-bold mt-3">
        ₹{product.price}
      </div>
    </div>
  </Link>

  <button className="mt-5 w-full border border-[#D3AF37] text-white py-2 rounded hover:bg-[#D3AF37] hover:text-black transition">
    ADD TO CART
  </button>

</div>
  );
};

export default ProductCard;