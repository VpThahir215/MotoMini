import api from "./api";

export const getProducts= async ()=>{
    const respons=await api.get('/products');
    return respons.data
}
export const getOneProduct= async (id)=>{
        const respons=await api.get(`/products/${id}`);
        return respons.data
}   
export const addProduct=async (product)=>{
  const respons=  await api.post('/products',product);
    return respons.data
}
export const deleteProduct=async (id)=>{
  await api.delete(`/products/${id}`)
}

export const editProduct=async (id,product)=>{
  await api.put(`/products/${id}`,product)
}