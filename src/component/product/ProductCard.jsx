import { Link, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import {
  addCartItem,
  getCartItem,
  updateCartItem,
} from "../../services/cartServices";
import {
  getWishlistItem,
  addWishlistItem,
} from "../../services/wishlistServices";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ===========================
  // Add To Cart
  // ===========================
  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        toast.error("Please login to add products to your cart.");
        navigate("/login");
        return;
      }

      // Redux (optional)
      // dispatch(addToCart(product));

      const existingItem = await getCartItem(product.id);

      if (existingItem) {
        await updateCartItem(existingItem.id, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        });
      } else {
        await addCartItem({
          productId: product.id,
          name: product.name,
          brand: product.brand,
          category: product.category,
          price: product.price,
          stock: product.stock,
          image: product.image,
          description: product.description,
          quantity: 1,
        });
      }

      toast.success("Product added to cart!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  // ===========================
  // Wishlist
  // ===========================
 const handleWishlist = async (e) => {
  console.log("called handleWishlist");
  
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    toast.error("Please login first.");
    navigate("/login");
    return;
  }

  const existingItem = await getWishlistItem(product.id);
console.log("add existingItem");

  if (existingItem) {
    toast("Already in wishlist ❤️");
    return;
  }
console.log( "befor add");

  await addWishlistItem({
    productId: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price,
    stock: product.stock,
    image: product.image,
    description: product.description,
  });
console.log("after add");

  toast.success("Added to Wishlist ❤️");
};

  return (
    <div className="relative bg-[#161616] rounded-xl overflow-hidden border border-gray-800 hover:border-[#D3AF37] transition duration-300">

      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-20 bg-black/70 p-2 rounded-full text-white hover:bg-[#D3AF37] hover:text-black transition"
      >
        <FiHeart size={20} />
      </button>

      {/* Product */}
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

          <p className="text-gray-400 mt-2">
            {product.brand}
          </p>

          <div className="text-[#D3AF37] text-2xl font-bold mt-3">
            ₹{product.price}
          </div>
        </div>
      </Link>

      {/* Add To Cart */}
      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full border border-[#D3AF37] text-white py-3 rounded-lg hover:bg-[#D3AF37] hover:text-black transition duration-300"
        >
          ADD TO CART
        </button>
      </div>

    </div>
  );
};

export default ProductCard;