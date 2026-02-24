import CategoryList from "./pages/CategoryList";
import CategoryCreate from "./pages/CategoryCreate";
import CategoryEdit from "./pages/CategoryEdit";

const categoryRoutes = [
    {
        path: "categories",
        element: <CategoryList />,
        handle: {
            breadcrumb: () => "Categories",
        },
    },
    {
        path: "categories/create",
        element: <CategoryCreate />,
        handle: {
            breadcrumb: () => "Create Category",
        },
    },
    {
        path: "categories/:id/edit",
        element: <CategoryEdit />,
        handle: {
            breadcrumb: (params) => `Edit Category`,
        },
    },
];

export default categoryRoutes;