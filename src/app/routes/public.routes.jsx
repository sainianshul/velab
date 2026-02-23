import PublicLayout from "@/layouts/public/PublicLayout";
import publicRoute from '@/domains/public/routes'
import NotFound from "@/shared/pages/NotFound";

export const publicRoutes = {
    path: "/",
    element: <PublicLayout />,
    children: [...publicRoute,
    {
        path: "*",
        element: <NotFound />
    }
    ]



};