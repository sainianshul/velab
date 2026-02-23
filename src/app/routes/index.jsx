import { useRoutes } from "react-router-dom";
import { adminRoutes } from "./admin.routes";
import { authRoutes } from "./auth.routes";
import { publicRoutes } from "./public.routes";
import NotFound from "../../shared/pages/NotFound";
export default function AppRouter() {
    return useRoutes([
        adminRoutes,
        authRoutes,
        publicRoutes,
        {
            path: "*",
            element: <NotFound />
        }
    ]);
}