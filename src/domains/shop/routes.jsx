import categoryRoutes from "./category/category.routes";
import { Outlet } from "react-router-dom";
import ShopDashboard from "./shop.dashboard"

const shopRoutes = [
    {
        path: "shop",
        element: <Outlet />,
        handle: {
            breadcrumb: () => "Shop",
        },
        children: [...categoryRoutes, {
            index: true,
            element: <ShopDashboard />,
        }]
    },
];

export default shopRoutes;