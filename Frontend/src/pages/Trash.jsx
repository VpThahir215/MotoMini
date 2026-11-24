import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import {
  FiTrash2,
  FiRotateCcw,
  FiAlertTriangle,
  FiPackage,
} from "react-icons/fi";
import { getDeletedProductsAdmin,restoreProduct,hardDeleteProduct } from "../services/productService.js";


const Trash = () => {


  const [deletedProducts, setDeletedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeletedProducts = async () => {
      try {
        const data = await getDeletedProductsAdmin();

        console.log("Deleted products:", data);

        setDeletedProducts(data);
      } catch (error) {
        console.error(
          "Trash fetch error:",
          error.response?.data || error.message
        );

        toast.error("Failed to fetch deleted products");
      } finally {
        setLoading(false);
      }
    };

    fetchDeletedProducts();
  }, []);

  const handleRestore = async (id) => {
  try {
    await restoreProduct(id);

    setDeletedProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );

    toast.success("Product restored successfully");
  } catch (error) {
    console.error(error.response?.data || error.message);
    toast.error("Failed to restore product");
  }
};

const handlePermanentDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure? This product will be permanently deleted."
  );

  if (!confirmed) return;

  try {
    await hardDeleteProduct(id);

    setDeletedProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );

    toast.success("Product permanently deleted");
  } catch (error) {
    console.error(error.response?.data || error.message);
    toast.error("Failed to delete product");
  }
};

if (loading) {
  return (
    <div className="min-h-screen bg-black p-10 text-center text-[#D3AF37]">
      Loading deleted products...
    </div>
  );
}
  return (
    <div className="min-h-screen bg-black p-5 text-white sm:p-8">

      {/* Header */}
      <div className="mb-10">

        <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-gray-600">
          Management
        </p>

        <h1 className="font-heading text-3xl tracking-wider text-[#D3AF37]">
          TRASH
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your deleted miniature motorcycle collection
        </p>

      </div>

      {/* Stats */}
      <div className="mb-8">

        <div className="border-r border-[#29230d] px-5 py-4">

          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            Deleted Products
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#D3AF37]">
            {deletedProducts.length}
          </h2>

        </div>

      </div>

      {/* Warning */}
      <div className="mb-7 flex items-start gap-3 border border-[#5b4614]/50 bg-[#171307] p-4">

        <FiAlertTriangle
          className="mt-0.5 shrink-0 text-[#D3AF37]"
          size={18}
        />

        <div>

          <h3 className="text-sm font-medium text-[#D3AF37]">
            Deleted Products
          </h3>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            Products moved to Trash can be restored or permanently deleted.
            Permanently deleted products cannot be recovered.
          </p>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-[#29230d]">

        <table className="w-full min-w-[850px] text-left">

          <thead className="border-b border-[#29230d] bg-[#0a0a0a]">

            <tr className="text-[10px] uppercase tracking-widest text-gray-500">

              <th className="px-6 py-5">Product</th>

              <th className="px-6 py-5">Brand</th>

              <th className="px-6 py-5">Category</th>

              <th className="px-6 py-5">Price</th>

              <th className="px-6 py-5">Deleted Date</th>

              <th className="px-6 py-5 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {deletedProducts.length > 0 ? (

              deletedProducts.map((product) => (

                <tr
                  key={product._id}
                  className="border-b border-[#29230d] transition hover:bg-[#11100c]"
                >

                  {/* Product */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                       <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border border-[#29230d] bg-[#111]">

      {product.image ? (
        <img
           src={
        typeof product.image === "string"
            ? product.image
            : product.image?.url
    }
          alt={product.name}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      ) : (
        <FiPackage
          size={22}
          className="text-gray-600"
        />
      )}

    </div>
                      <div>

                        <p className="text-sm font-medium text-gray-200">
                          {product.name}
                        </p>

                        <p className="mt-1 text-[10px] text-gray-600">
                          {product._id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Brand */}
                  <td className="px-6 py-5 text-sm text-gray-400">
                    {product.brand}
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">

                    <span className="border border-[#29230d] px-3 py-1 text-[9px] uppercase tracking-wider text-gray-500">
                      {product.category}
                    </span>

                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 text-sm font-semibold text-[#D3AF37]">
                    ₹{product.price}
                  </td>

                  {/* Deleted Date */}
                  <td className="px-6 py-5 text-xs text-gray-500">
                    {product.deletedAt
  ? new Date(product.deletedAt).toLocaleDateString("en-IN")
  : "Unknown"}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex items-center justify-center gap-5">

                     <button
  title="Restore Product"
  onClick={() => handleRestore(product._id)}
  className="text-gray-500 transition hover:text-green-500"
>
  <FiRotateCcw size={18} />
</button>
<button
  title="Delete Permanently"
  onClick={() => handlePermanentDelete(product._id)}
  className="text-gray-500 transition hover:text-red-500"
>
  <FiTrash2 size={18} />
</button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="6" className="px-6 py-20 text-center">

                  <FiTrash2 className="mx-auto mb-4 text-4xl text-gray-700" />

                  <h3 className="text-sm font-medium text-gray-400">
                    Trash is Empty
                  </h3>

                  <p className="mt-2 text-xs text-gray-600">
                    Deleted products will appear here.
                  </p>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between text-xs text-gray-600">

        <p>
          Showing {deletedProducts.length} deleted products
        </p>

        <p className="tracking-wider">
          MOTOMINI ADMIN
        </p>

      </div>

    </div>
  );
};


export default Trash;
