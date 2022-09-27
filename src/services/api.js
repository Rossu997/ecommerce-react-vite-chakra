import axios from "axios";

// Working in this proyect whit Fake Store API:
// https://fakestoreapi.com/docs

export default {
  getProductsByCategory: async (name) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
    return data;
  },
  getAllProducts: async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  },
  getAllCategories: async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  },
};
