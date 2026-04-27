import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://taskmanager-1-5eq9.onrender.com/api/v1/tasks", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;