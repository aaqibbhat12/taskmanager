import axiosInstance from "../api/axiosInstance.js";

export const getTasks = () => axiosInstance.get("/");

export const createTask = (data) =>
  axiosInstance.post("/", data);

export const deleteTask = (id) =>
  axiosInstance.delete(`/${id}`);

export const toggleTask = (id) =>
  axiosInstance.patch(`/${id}`);