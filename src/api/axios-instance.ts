import axios from "axios";
import { API_BASE_URL } from "../constants";

const SLEEP_TIME = 600; // ms;

const sleep = () =>
  new Promise((res) => {
    setTimeout(res, SLEEP_TIME);
  });

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.response.use(async (response) => {
  await sleep();
  return response;
});

export { axiosInstance };
