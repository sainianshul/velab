import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { adminRoutes } from "./admin.routes";
import { publicRoutes } from "./public.routes";

const router = createBrowserRouter([
    adminRoutes,
    publicRoutes,
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}