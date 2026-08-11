import React, { useEffect, useState } from "react";
import {
    FiSearch,
    FiFilter,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiEye,
} from "react-icons/fi";
import { getProducts } from "../../services/productService";
import { data, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../services/productService";
import toast from "react-hot-toast";

const ProductForm = () => {
    const [products,setProducts]=useState([])
    const [catagory,setCatagory]=useState("All Categories")
    const [search,setSearch]=useState("")
    const [debounced,setDebounced]=useState("")
  
    
    const navigate=useNavigate()
    console.log(catagory);
    const fillteredProduct =products.filter((product)=>{
        const matchesCategory=
        catagory==="All Categories" ||  product.category===catagory


        const matchesSearch=product.name.toLowerCase().includes(debounced.toLocaleLowerCase())
        return matchesCategory && matchesSearch
    })
    
    useEffect(() => {
        async function fetchProduct() {
            const data = await getProducts()
           
        console.log("deyyyyyyyyyy",data);
        
            
setProducts(data)

        }
fetchProduct()

    }, [])

    useEffect(()=>{
        const timer=setTimeout(() => {
            setDebounced(search)
        }, 1000);
        return ()=>{
            clearTimeout(timer)
        }
    },[search])

     console.log(search);
     console.log("debounced",debounced);

  async   function deleteHandle(id){
        console.log("IDDDDD",id);
         const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) {
  toast.error("Delete cancelled")
    
     return
    
  } 
  try{
     
 await   deleteProduct(id)
     toast.success("Deleting:", id);
     const data=await getProducts()
     setProducts(data)


  }catch(error){
    console.log(error);
    
  }
       
     }
     

    // const getStatusStyle = (status) => {
    //     switch (status) {
    //         case "Active":
    //             return "border-green-800 bg-green-950/30 text-green-500";

    //         case "Low Stock":
    //             return "border-yellow-800 bg-yellow-950/30 text-yellow-500";

    //         case "Out of Stock":
    //             return "border-red-800 bg-red-950/30 text-red-500";

    //         default:
    //             return "border-gray-800 text-gray-500";
    //     }
    // };
    return (
        <div className="min-h-screen bg-black px-8 py-8 text-white">

            {/* ================= HEADER ================= */}

            <div className="flex items-center justify-between">

                <div>
                    <p className="text-[10px] tracking-[0.3em] text-gray-600">
                        MANAGEMENT
                    </p>

                    <h1 className="mt-1 font-heading text-3xl tracking-widest text-[#D3AF37]">
                        PRODUCTS
                    </h1>

                    <p className="mt-2 text-xs text-gray-600">
                        Manage your miniature motorcycle collection
                    </p>
                </div>

                {/* Add Product */}

                <button 
                onClick={()=>navigate('/admin/products/add')}
                className="flex items-center gap-2 bg-[#D3AF37] px-5 py-3 text-xs font-semibold tracking-wider text-black transition hover:bg-[#b99725]">
                    <FiPlus size={16} />
                    ADD PRODUCT
                </button>

            </div>


            {/* ================= SUMMARY ================= */}

            <div className="mt-8 grid grid-cols-4 border border-[#29230d]">

                <div className="border-r border-[#29230d] p-5">
                    <p className="text-[9px] tracking-widest text-gray-600">
                        TOTAL PRODUCTS
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-[#D3AF37]">
                        {products.length}
                    </p>
                </div>

                {/* <div className="border-r border-[#29230d] p-5">
                    <p className="text-[9px] tracking-widest text-gray-600">
                        ACTIVE
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-green-500">
                        221
                    </p>
                </div>

                <div className="border-r border-[#29230d] p-5">
                    <p className="text-[9px] tracking-widest text-gray-600">
                        LOW STOCK
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-yellow-500">
                        18
                    </p>
                </div>

                <div className="p-5">
                    <p className="text-[9px] tracking-widest text-gray-600">
                        OUT OF STOCK
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-red-500">
                        9
                    </p>
                </div> */}

            </div>


            {/* ================= FILTER BAR ================= */}

            <div className="mt-6 flex items-center justify-between border border-[#29230d] bg-[#080808] px-5 py-4">

                {/* Search */}

                <div className="flex w-80 items-center gap-3 border border-[#29230d] px-4 py-2.5">

                    <FiSearch
                        size={16}
                        className="text-gray-600"
                    />

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
                    />

                </div>


                {/* Filters */}

                <div className="flex items-center gap-3">

                    {/* <select className="border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none">
                        <option>All Brands</option>
                      
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
                    </select> */}

                    <select 
                     value={catagory}
                     onChange={(e)=>setCatagory(e.target.value)}
                    className="border border-[#29230d] bg-black px-4 py-2.5 text-xs text-gray-500 outline-none">
                        <option>All Categories</option>
                        <option value="Sport Bike">Sport Bike</option>
                    <option value="Super Bike">Super Bike</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Naked Bike">Naked Bike</option>
                  

                    </select>

                  
                </div>

            </div>


            {/* ================= PRODUCT TABLE ================= */}

            <div className="mt-5 overflow-hidden border border-[#29230d]">

                <table className="w-full border-collapse">

                    <thead>

                        <tr className="border-b border-[#29230d] bg-[#080808] text-left">

                            <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                                PRODUCT
                            </th>

                            <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                                BRAND
                            </th>

                            <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                                CATEGORY
                            </th>

                            <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                                PRICE
                            </th>

                            

                            <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                                STATUS
                            </th>

                            <th className="px-5 py-4 text-[10px] tracking-widest text-gray-600">
                                ACTION
                            </th>

                        </tr>

                    </thead>


                    <tbody>
                        
                          {fillteredProduct.map((product) => (


                            <tr
                                key={product.id}
                                className="border-b border-[#1c1c1c] transition hover:bg-[#0d0d0d]"
                            >

                                {/* Product */}

                                <td className="px-5 py-4">

                                    <div className="flex items-center gap-4">

                                        <div className="h-14 w-14 overflow-hidden border border-[#29230d] bg-[#111]">

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover"
                                            />

                                        </div>

                                        <div>

                                            <p className="text-sm font-medium text-gray-200">
                                                {product.name}
                                            </p>

                                            <p className="mt-1 text-[10px] text-gray-700">
                                                {product.id}
                                            </p>

                                        </div>

                                    </div>

                                </td>


                                {/* Brand */}

                                <td className="px-5 py-4 text-xs text-gray-500">
                                    {product.brand}
                                </td>


                                {/* Category */}

                                <td className="px-5 py-4">

                                    <span className="border border-[#29230d] px-2.5 py-1 text-[9px] uppercase tracking-wider text-gray-500">
                                        {product.category}
                                    </span>

                                </td>


                                {/* Price */}

                                <td className="px-5 py-4 text-sm font-semibold text-[#D3AF37]">
                                    {product.price}
                                </td>



                               


                                {/* Status */}

                                <td className="px-5 py-4">

                                    <span
                                        className={"border-green-800 bg-green-950/30 text-green-500"}
                                    >
                                       In Stock
                                    </span>

                                </td>


                                {/* Actions */}

                                <td className="px-5 py-4">

                                    <div className="flex items-center gap-4">
{/* 
                                        <button className="text-gray-600 transition hover:text-[#D3AF37]">
                                            <FiEye size={16} />
                                        </button> */}

                                        <button 
                                        onClick={()=>navigate('/admin/products/add',{
                                            state:{
                                                id:product.id
                                            }
                                        })}
                                        className="text-gray-600 transition hover:text-[#D3AF37]">
                                            <FiEdit2 size={16} />
                                        </button>

                                        <button 
                                        onClick={()=>deleteHandle(product.id)}
                                        className="text-gray-600 transition hover:text-red-500">
                                            <FiTrash2 size={16} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}
                        


                    </tbody>

                </table>

            </div>


            {/* ================= PAGINATION ================= */}

            <div className="flex items-center justify-between border-x border-b border-[#29230d] bg-[#080808] px-5 py-4">

                <p className="text-[10px] text-gray-600">
                    Showing 1–5 of 248 products
                </p>

                <div className="flex items-center gap-2">

                    <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-600">
                        ←
                    </button>

                    <button className="border border-[#D3AF37] bg-[#1c1a12] px-3 py-2 text-xs text-[#D3AF37]">
                        1
                    </button>

                    <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-500">
                        2
                    </button>

                    <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-500">
                        3
                    </button>

                    <button className="border border-[#29230d] px-3 py-2 text-xs text-gray-600">
                        →
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductForm



                        // {products.map((product) => (

                        //     <tr
                        //         key={product.id}
                        //         className="border-b border-[#1c1c1c] transition hover:bg-[#0d0d0d]"
                        //     >

                        //         {/* Product */}

                        //         <td className="px-5 py-4">

                        //             <div className="flex items-center gap-4">

                        //                 <div className="h-14 w-14 overflow-hidden border border-[#29230d] bg-[#111]">

                        //                     <img
                        //                         src={product.image}
                        //                         alt={product.name}
                        //                         className="h-full w-full object-cover"
                        //                     />

                        //                 </div>

                        //                 <div>

                        //                     <p className="text-sm font-medium text-gray-200">
                        //                         {product.name}
                        //                     </p>

                        //                     <p className="mt-1 text-[10px] text-gray-700">
                        //                         {product.id}
                        //                     </p>

                        //                 </div>

                        //             </div>

                        //         </td>


                        //         {/* Brand */}

                        //         <td className="px-5 py-4 text-xs text-gray-500">
                        //             {product.brand}
                        //         </td>


                        //         {/* Category */}

                        //         <td className="px-5 py-4">

                        //             <span className="border border-[#29230d] px-2.5 py-1 text-[9px] uppercase tracking-wider text-gray-500">
                        //                 {product.category}
                        //             </span>

                        //         </td>


                        //         {/* Price */}

                        //         <td className="px-5 py-4 text-sm font-semibold text-[#D3AF37]">
                        //             {product.price}
                        //         </td>


                        //         {/* Stock */}

                        //         <td className="px-5 py-4">

                        //             <span
                        //                 className={
                        //                     product.stock === 0
                        //                         ? "text-red-500"
                        //                         : product.stock < 10
                        //                             ? "text-yellow-500"
                        //                             : "text-gray-400"
                        //                 }
                        //             >
                        //                 {product.stock}
                        //             </span>

                        //             <span className="ml-1 text-[10px] text-gray-700">
                        //                 units
                        //             </span>

                        //         </td>


                        //         {/* Status */}

                        //         <td className="px-5 py-4">

                        //             <span
                        //                 className={`inline-block border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider ${getStatusStyle(
                        //                     product.status
                        //                 )}`}
                        //             >
                        //                 {product.status}
                        //             </span>

                        //         </td>


                        //         {/* Actions */}

                        //         <td className="px-5 py-4">

                        //             <div className="flex items-center gap-4">

                        //                 <button className="text-gray-600 transition hover:text-[#D3AF37]">
                        //                     <FiEye size={16} />
                        //                 </button>

                        //                 <button className="text-gray-600 transition hover:text-[#D3AF37]">
                        //                     <FiEdit2 size={16} />
                        //                 </button>

                        //                 <button className="text-gray-600 transition hover:text-red-500">
                        //                     <FiTrash2 size={16} />
                        //                 </button>

                        //             </div>

                        //         </td>

                        //     </tr>

                        // ))}