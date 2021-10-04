import axios from "axios";

const baseUrl = "http://localhost:3001/products";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
};

export const getSelectedProduct = async (productId) => {
  const response = await axios.get(`${baseUrl}/${productId}`);
  return response.data;
};
