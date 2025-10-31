import axios from "axios";
const API_URL = "https://6903141ad0f10a340b22837e.mockapi.io/products";


//get all products
export const getProducts = async () =>{
    const response = await axios.get(API_URL);
    return response.data;
}

// Get product by ID or slug
export const getProductById = async (slug) => {
  const response = await axios.get(`${API_URL}/?slug=${slug}`);
  return response.data?.[0];
};

// Get related products (simple logic for now)
export const getRelatedProducts = async (category) => {
  const { data } = await axios.get(`${API_URL}?category=${category}`);
  return data;
};

// Get product by slug
// export const getProductBySlug = async (slug) => {
//   const { data } = await axios.get(`${API_URL}?slug=${slug}`);
//   return data?.[0]; // MockAPI returns an array
// };


// Get products by category (if supported)
export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}?category=${category}`);
  return response.data;
};