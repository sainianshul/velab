import AdminLayout from "@/layouts/admin/AdminLayout";
//import dashboardRoutes from "@/domains/dashboard/routes";
import NotFound from "@/shared/pages/NotFound";
import shopRoutes from "@/domains/shop/routes";

export const adminRoutes = {
    path: "/admin",
    element: <AdminLayout />,
    handle: {
        breadcrumb: () => "Admin",
    },
    children: [
        ...shopRoutes,
        {
            path: "*",
            element: <NotFound />
        }
    ]
};