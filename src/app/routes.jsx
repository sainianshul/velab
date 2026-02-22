import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
//import AuthLayout from "../layouts/AuthLayout";

//import productRoutes from "../domains/product/routes";
//import userRoutes from "../domains/user/routes";

export default function AppRouter() {
    const routes = useRoutes([
        {
            path: "/",
            element: <AdminLayout />,
            children: [
                //   ...productRoutes,
                //   ...userRoutes
            ]
        },
        // {
        //     path: "/login",
        //     element: <AuthLayout />
        // }
    ]);

    return routes;
}