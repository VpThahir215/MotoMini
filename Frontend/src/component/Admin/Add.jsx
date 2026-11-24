
import React, { useEffect, useState } from "react";
import {
    FiUpload,
    FiArrowLeft,
    FiSave
} from "react-icons/fi";

import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import {
    addProduct,
    getOneProduct,
    editProduct
} from "../../services/productService";

const Add = () => {

    // ================= ROUTER =================

    const navigate = useNavigate();
    const location = useLocation();

    const editId = location.state?.id;


    // ================= STATES =================

    const [product, setProduct] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        description: "",
    });

    // Stores the actual selected image file
    const [selectedImage, setSelectedImage] = useState(null);

    // Stores the image URL used for preview
    const [imagePreview, setImagePreview] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);


    // ================= FETCH PRODUCT FOR EDIT =================

    useEffect(() => {

        if (!editId) return;

        const fetchProduct = async () => {

            try {

                const data = await getOneProduct(editId);

                setProduct({
                    name: data.name || "",
                    brand: data.brand || "",
                    category: data.category || "",
                    price: data.price ?? "",
                    stock: data.stock ?? "",
                    description: data.description || "",
                });

                // Show existing Cloudinary image
                setImagePreview(data.image?.url || "");

            } catch (error) {

                console.error("Error fetching product:", error);

                toast.error(
                    error.response?.data?.message ||
                    "Failed to load product"
                );
            }
        };

        fetchProduct();

    }, [editId]);


    // ================= CLEANUP IMAGE PREVIEW =================

    useEffect(() => {

        if (!imagePreview.startsWith("blob:")) return;

        return () => {
            URL.revokeObjectURL(imagePreview);
        };

    }, [imagePreview]);


    // ================= HANDLE INPUT CHANGE =================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // ================= HANDLE IMAGE CHANGE =================

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        // Check image type
        if (!file.type.startsWith("image/")) {
            toast.error("Please select a valid image");
            e.target.value = "";
            return;
        }

        // Check image size (5 MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size must be less than 5 MB");
            e.target.value = "";
            return;
        }

        setSelectedImage(file);

        // Create temporary preview URL
        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    };


    // ================= HANDLE FORM SUBMIT =================

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Product name validation
        if (!product.name.trim()) {
            toast.error("Please enter product name");
            return;
        }

        // Brand validation
        if (!product.brand) {
            toast.error("Please select a brand");
            return;
        }

        // Category validation
        if (!product.category) {
            toast.error("Please select a category");
            return;
        }

        // Price validation
        if (product.price === "" || Number(product.price) <= 0) {
            toast.error("Please enter a valid product price");
            return;
        }

        // Stock validation
        if (product.stock === "" || Number(product.stock) < 0) {
            toast.error("Please enter a valid stock quantity");
            return;
        }

        // Image validation
        // Image is required only when creating a new product
        if (!editId && !selectedImage) {
            toast.error("Please select a product image");
            return;
        }

        // Description validation
        if (!product.description.trim()) {
            toast.error("Please enter product description");
            return;
        }

        try {

            setIsSubmitting(true);

            // Create FormData
            const formData = new FormData();

            formData.append("name", product.name);
            formData.append("brand", product.brand);
            formData.append("category", product.category);
            formData.append("price", product.price);
            formData.append("stock", product.stock);
            formData.append("description", product.description);

            // Append image only if a new image is selected
            if (selectedImage) {
                formData.append("image", selectedImage);
            }

            if (editId) {

                // Update existing product
                await editProduct(editId, formData);

                toast.success("Product updated successfully");

            } else {

                // Create new product
                await addProduct(formData);

                toast.success("Product added successfully");
            }

            navigate("/admin/products");

        } catch (error) {

            console.error("Product submission error:", error);

            toast.error(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );

        } finally {

            setIsSubmitting(false);
        }
    };


    // ================= UI =================

    return (

        <div className="min-h-screen bg-black px-4 py-4 text-white md:px-6 md:py-6 lg:px-8 lg:py-8">

            {/* ================= HEADER ================= */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                    <button
                        type="button"
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
                        {editId ? "EDIT PRODUCT" : "ADD PRODUCT"}
                    </h1>

                    <p className="mt-2 text-xs text-gray-600">
                        {editId
                            ? "Edit your miniature motorcycle collection."
                            : "Add a new miniature motorcycle to your collection."
                        }
                    </p>

                </div>

            </div>


            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit}>

                <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">


                    {/* ================= LEFT - PRODUCT INFO ================= */}

                    <div className="rounded-lg border border-[#29230d] bg-[#080808] xl:col-span-2">

                        <div className="border-b border-[#29230d] px-6 py-5">

                            <h2 className="text-sm font-semibold text-white">
                                Product Information
                            </h2>

                            <p className="mt-1 text-[10px] text-gray-600">
                                Enter the basic information about the product.
                            </p>

                        </div>


                        <div className="space-y-6 p-4 md:p-6">


                            {/* PRODUCT NAME */}

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


                            {/* BRAND + CATEGORY */}

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

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
                                        <option value="Aprilia">Aprilia</option>
                                        <option value="Suzuki">Suzuki</option>
                                        <option value="Kawasaki">Kawasaki</option>
                                        <option value="MV Agusta">MV Agusta</option>

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


                            {/* PRICE + STOCK */}

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

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
                                            min="0"
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
                                        min="0"
                                        value={product.stock}
                                        onChange={handleChange}
                                        placeholder="0"
                                        className="w-full border border-[#29230d] bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-800 focus:border-[#D3AF37]"
                                    />

                                </div>

                            </div>


                            {/* PRODUCT IMAGE */}

                            <div>

                                <label className="mb-2 block text-[10px] tracking-widest text-gray-600">
                                    PRODUCT IMAGE
                                </label>

                                <div className="flex border border-[#29230d] bg-black">

                                    <span className="flex items-center border-r border-[#29230d] px-4 text-gray-600">
                                        <FiUpload size={15} />
                                    </span>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full bg-transparent px-4 py-3 text-sm text-white file:mr-4 file:border-0 file:bg-[#D3AF37] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-black"
                                    />

                                </div>

                                <p className="mt-2 text-[10px] text-gray-600">
                                    Maximum image size: 5 MB
                                </p>

                            </div>


                            {/* DESCRIPTION */}

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


                            {/* IMAGE PREVIEW */}

                            <div className="flex aspect-square items-center justify-center overflow-hidden border border-[#29230d] bg-black">

                                {imagePreview ? (

                                    <img
                                        src={imagePreview}
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


                            {/* PREVIEW INFORMATION */}

                            <div className="mt-6">

                                <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                    {product.brand || "BRAND"}
                                </p>

                                <h3 className="mt-2 text-lg font-semibold text-gray-200">
                                    {product.name || "Product Name"}
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-gray-600">
                                    {product.description ||
                                        "Product description will appear here."
                                    }
                                </p>


                                <div className="mt-5 flex items-center justify-between border-t border-[#29230d] pt-5">

                                    <span className="text-lg font-semibold text-[#D3AF37]">
                                        {product.price
                                            ? `₹${product.price}`
                                            : "₹0"
                                        }
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
                        disabled={isSubmitting}
                        className="border border-[#29230d] px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 transition hover:border-gray-600 hover:text-gray-300 disabled:opacity-50"
                    >
                        CANCEL
                    </button>


                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-[#D3AF37] px-6 py-3 text-xs font-semibold tracking-wider text-black transition hover:bg-[#b99725] disabled:cursor-not-allowed disabled:opacity-50"
                    >

                        <FiSave size={15} />

                        {isSubmitting
                            ? "SAVING..."
                            : editId
                                ? "UPDATE PRODUCT"
                                : "SAVE PRODUCT"
                        }

                    </button>

                </div>

            </form>

        </div>
    );
};

export default Add;
