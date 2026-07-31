import api from "./api";

export const getProducts= async ()=>{
    const respons=await api.get('/products');
    return respons.data
}
export const getOneProduct= async (id)=>{
        const respons=await api.get(`/products/${id}`);
        return respons.data
}   