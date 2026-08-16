import React, { useEffect, useState } from "react";
import { FiUpload, FiArrowLeft, FiSave } from "react-icons/fi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../services/productService";
import { useLocation } from "react-router-dom";
import { getOneProduct, editProduct } from "../../services/productService";
const Add = () => {
  const location = useLocation()
  const editId = location.state?.id;
  console.log(editId);
  async function editBtn() {
    const edit = await getOneProduct(editId)
    console.log(edit);

  }
  editBtn()


  useEffect(() => {
    if (!editId) return;
    async function fetchProduct() {
      const data = await getOneProduct(editId)
      console.log(data);
      setProduct(data)

    }
    fetchProduct()
  }, [editId])


  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();







    if (!product.name.trim()) {
      toast.error("Please Enter Product Name");
      return;
    }

    if (!product.brand) {
      toast.error("Please Add Brand");
      return;
    }

    if (!product.category) {
      toast.error("Please Add Catogory");
      return;
    }

    if (!product.price) {
      toast.error("Please Add Product Price");
      return;
    }

    if (!product.stock) {
      toast.error("Please Add Stock");
      return;
    }

    if (!product.image.trim()) {
      toast.error("Please Add Image URL.");
      return;
    }

    if (!product.description.trim()) {
      toast.error("Please Add Description");
      return;
    }
    try {


      if (editId) {

          await editProduct(editId, product)
          toast.success("Successfully Edited your product");
          navigate("/admin/products")
          return
        

      }




      const data = await addProduct(product)
      console.log(data);
      toast.success("Successfully Added the product to cart");
      navigate("/admin/products")

    }
    catch (error) {
      console.log(error);

    }






  };
  return (
   <div className="min-h-screen bg-black px-4 py-4 text-white md:px-6 md:py-6 lg:px-8 lg:py-8">

      {/* ================= HEADER ================= */}

   <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <button
            onClick={() => navigate("/admin/products")}
            className="mb-5 flex items-center gap-2 text-xs text-gray-600 transition hover:text-[#D3AF37]"
          >
            <FiArrowLeft size={14} />
            BACK TO PRODUCTS
          </button>

          <p className="text-[10px] tracking-[0.3em] text-gray-600">
            PRODUCT MANAGEMENT
          </p>

          <h1 className="mt-1 font-heading text-3xl tracking-widest text-[#D3AF37]">
            ADD PRODUCT
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Add a new miniature motorcycle to your collection.
          </p>

        </div>

      </div>


      {/* ================= FORM ================= */}

      <form onSubmit={handleSubmit}>

        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">


          {/* ================= LEFT - PRODUCT INFO ================= */}

         <div className="xl:col-span-2 rounded-lg border border-[#29230d] bg-[#080808]">

            <div className="border-b border-[#29230d] px-6 py-5">

              <h2 className="text-sm font-semibold text-white">
                Product Information
              </h2>

              <p className="mt-1 text-[10px] text-gray-600">
                Enter the basic information about the product.
              </p>

            </div>


            <div className="space-y-6 p-4 md:p-6">


              {/* Product Name */}

              <div>

                <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                  PRODUCT NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Example: Himalayan 450"
                  className="w-full border border-[#29230d] bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-800 focus:border-[#D3AF37]"
                />

              </div>


              {/* Brand + Category */}

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    BRAND
                  </label>

                  <select
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                    className="w-full border border-[#29230d] bg-black px-4 py-3 text-sm text-gray-400 outline-none focus:border-[#D3AF37]"
                  >

                    <option value="">Select Brand</option>
                    <option value="Royal Enfield">Royal Enfield</option>
                    <option value="Yamaha">Yamaha</option>
                    <option value="Honda">Honda</option>
                    <option value="Ducati">Ducati</option>
                    <option value="BMW">BMW</option>
                    <option value="Triumph">Triumph</option>
                    <option value="KTM">KTM</option>
                    <option value="BMW">Aprilla</option>
                    <option value="BMW">Suzuki</option>
                    <option value="BMW">Kawasaki</option>
                    <option value="BMW">MV Agusa</option>

                  </select>

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    CATEGORY
                  </label>

                  <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="w-full border border-[#29230d] bg-black px-4 py-3 text-sm text-gray-400 outline-none focus:border-[#D3AF37]"
                  >

                    <option value="">Select Category</option>
                    <option value="Sport Bikes">Sport Bikes</option>
                    <option value="Super Bikes">Super Bikes</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Naked">Naked</option>


                  </select>

                </div>

              </div>


              {/* Price + Stock */}

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    PRICE
                  </label>

                  <div className="flex border border-[#29230d] bg-black">

                    <span className="flex items-center border-r border-[#29230d] px-4 text-sm text-[#D3AF37]">
                      ₹
                    </span>

                    <input
                      type="number"
                      name="price"
                      value={product.price}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-800"
                    />

                  </div>

                </div>


                <div>

                  <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                    STOCK
                  </label>

                  <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    placeholder="0"
                    className="w-full border border-[#29230d] bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-800 focus:border-[#D3AF37]"
                  />

                </div>

              </div>


              {/* Image URL */}

              <div>

                <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                  PRODUCT IMAGE URL
                </label>

                <div className="flex border border-[#29230d] bg-black">

                  <span className="flex items-center border-r border-[#29230d] px-4 text-gray-600">
                    <FiUpload size={15} />
                  </span>

                  <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    placeholder="https://example.com/product-image.jpg"
                    className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-800"
                  />

                </div>

              </div>


              {/* Description */}

              <div>

                <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                  DESCRIPTION
                </label>

                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write a short description about the product..."
                  className="w-full resize-none border border-[#29230d] bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-800 focus:border-[#D3AF37]"
                />

              </div>

            </div>

          </div>


          {/* ================= RIGHT - PREVIEW ================= */}

          <div className="border border-[#29230d] bg-[#080808]">

            <div className="border-b border-[#29230d] px-6 py-5">

              <h2 className="text-sm font-semibold text-white">
                Product Preview
              </h2>

              <p className="mt-1 text-[10px] text-gray-600">
                Preview how the product will appear.
              </p>

            </div>


            <div className="p-6">

              {/* Image Preview */}

              <div className="flex aspect-square items-center justify-center overflow-hidden border border-[#29230d] bg-black">

                {product.image ? (

                  <img
                    src={product.image}
                    alt="Product preview"
                    className="h-full w-full object-cover"
                  />

                ) : (

                  <div className="text-center">

                    <FiUpload
                      size={30}
                      className="mx-auto text-gray-800"
                    />

                    <p className="mt-3 text-[10px] tracking-widest text-gray-700">
                      IMAGE PREVIEW
                    </p>

                  </div>

                )}

              </div>


              {/* Preview Information */}

              <div className="mt-6">

                <p className="text-[9px] uppercase tracking-widest text-gray-600">
                  {product.brand || "BRAND"}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-200">
                  {product.name || "Product Name"}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-600">
                  {product.description ||
                    "Product description will appear here."}
                </p>


                <div className="mt-5 flex items-center justify-between border-t border-[#29230d] pt-5">

                  <span className="text-lg font-semibold text-[#D3AF37]">
                    {product.price
                      ? `₹${product.price}`
                      : "₹0"}
                  </span>

                  <span className="text-[10px] text-gray-600">
                    Stock: {product.stock || 0}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= ACTIONS ================= */}

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-[#29230d] pt-6">

          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="border border-[#29230d] px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 transition hover:border-gray-600 hover:text-gray-300"
          >
            CANCEL
          </button>


          <button
            type="submit"
            className="flex items-center gap-2 bg-[#D3AF37] px-6 py-3 text-xs font-semibold tracking-wider text-black transition hover:bg-[#b99725]"
          >

            <FiSave size={15} />

            SAVE PRODUCT

          </button>

        </div>

      </form>

    </div>
  );

}

export default Add
