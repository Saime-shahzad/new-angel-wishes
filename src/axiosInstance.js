// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.API_BASE_URL, // Change this to your API base URL
  // baseURL:" https://checkyourproject.website/angle-wishes/public/api/v1/auth" 
  baseURL: process.env.REACT_APP_API_BASE_URL,// Change this to your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
