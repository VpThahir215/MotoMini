import api from "./api";
export const getProducts = async (filters = {}) => {
    const response = await api.get("/products", {
        params: filters
    });

    return response.data.products;
};
export const getOneProduct= async (id)=>{
        const respons=await api.get(`/products/${id}`);
        return respons.data.product
}   
export const addProduct=async (product)=>{
  const respons=  await api.post('/products/admin',product);
    return respons.data
}


export const editProduct=async (id,product)=>{
  const response = await api.put(`/products/admin/${id}`,product)
    return response.data;
  
}
export const softDeleteProduct = async (id) => {
    const response = await api.delete(`/products/admin/${id}`);
    return response.data;
};
export const hardDeleteProduct = async (id) => {
    const response = await api.delete(
        `/products/admin/${id}/permanent`
    );
    return response.data;
};

// Restore
export const restoreProduct = async (id) => {
    const response = await api.patch(
        `/products/admin/${id}/restore`
    );
    return response.data;
};
export const getDeletedProductsAdmin = async () => {
    const response = await api.get("/products/admin/trash");
    return response.data.products;
};