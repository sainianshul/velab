import apiClient from "@/core/api/apiClient";

export const getCategories = (params) =>
    apiClient.get("/category", { params }).then(res => res.data);

export const createCategory = (data) =>
    apiClient.post("/category", data).then(res => res.data);

export const updateCategory = (id, data) =>
    apiClient.put(`/category/${id}`, data).then(res => res.data);

export const deleteCategory = (id) =>
    apiClient.delete(`/category/${id}`).then(res => res.data);