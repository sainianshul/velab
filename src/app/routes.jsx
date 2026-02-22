import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";

// Example Pages
import Dashboard from "../domains/dashboard/pages/Dashboard";
//import UserList from "../domains/user/pages/UserList";
//import CreateUser from "../domains/user/pages/CreateUser";

export const adminRoutes = [
    {
        path: "/",
        element: <AdminLayout />,
        meta: { breadcrumb: "Home" },
        children: [
            {
                index: true,
                element: <Dashboard />,
                meta: { breadcrumb: "Dashboard" }
            },
            // {
            //     path: "users",
            //     element: <UserList />,
            //     meta: { breadcrumb: "Users" }
            // },
            // {
            //     path: "users/create",
            //     element: <CreateUser />,
            //     meta: { breadcrumb: "Create User" }
            // }
        ]
    }
];

export default function AppRouter() {
    const routes = useRoutes(adminRoutes);
    return routes;
}