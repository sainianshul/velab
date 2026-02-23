import AdminLayout from "@/layouts/admin/AdminLayout";
//import dashboardRoutes from "@/domains/dashboard/routes";
import NotFound from "@/shared/pages/NotFound";

export const adminRoutes = {
    path: "/admin",
    element: <AdminLayout />,
    children: [
        //  ...dashboardRoutes,
        {
            path: "*",
            element: <NotFound />
        }
    ],
};