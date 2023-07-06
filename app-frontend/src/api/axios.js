import axios from "axios";
import { readToken } from "../utils/localStorage";

const httpClient = axios.create({
  baseURL: "http://localhost:5000",
});

httpClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer: ${readToken()}`;
    return config;
  },
  (error) => {
    return new Promise.reject(error);
  }
);

export default httpClient;
