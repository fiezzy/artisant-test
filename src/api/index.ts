import { axiosInstance } from "./axios-instance";
import { AppRoutes } from "../constants";

const getProducts = async () => {
  const { data } = await axiosInstance.get(AppRoutes.Products);
  return data;
};

const getProductById = async (productId: number) => {
  const { data } = await axiosInstance.get(
    `${AppRoutes.Products}/${productId}`
  );
  return data;
};

export const api = {
  getProducts,
  getProductById,
};
