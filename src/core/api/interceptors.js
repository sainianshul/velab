// core/api/interceptors.js

import axiosInstance from "./axiosInstance";

export const setupInterceptors = (store) => {

    // Request Interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            axiosInstance.interceptors.request.use(
                (config) => {

                    if (config.skipAuth) {
                        return config;
                    }

                    const token = localStorage.getItem("token");

                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }

                    return config;
                }
            );

            const token = localStorage.getItem("token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response Interceptor
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {

            if (error.response?.status === 401) {
                // Logout user or refresh token
                console.log("Unauthorized - redirecting...");
                window.location.href = "/login";
            }

            return Promise.reject(error);
        }
    );
};