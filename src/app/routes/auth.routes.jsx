import AuthLayout from "@/layouts/auth/AuthLayout";
import authRoute from "@/domains/auth/routes";
import { Navigate } from "react-router-dom";
import NotFound from "@/shared/pages/NotFound";

export const authRoutes = {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        {
            index: true,
            element: <Navigate to="login" replace />
        },
        ...authRoute,
        {
            path: "*",
            element: <NotFound />
        }
    ]
};