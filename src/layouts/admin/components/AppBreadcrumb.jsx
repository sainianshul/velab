import { BreadCrumb } from "primereact/breadcrumb";
import { useLocation, matchRoutes, useNavigate } from "react-router-dom";
import { adminRoutes } from "@/app/routes/admin.routes";

const AppBreadcrumb = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const matches = matchRoutes([adminRoutes], location);

    const items =
        matches
            ?.filter(match => match.route.meta?.breadcrumb)
            .map((match, index, array) => ({
                label: match.route.meta.breadcrumb,
                command:
                    index !== array.length - 1
                        ? () => navigate(match.pathname)
                        : undefined
            })) || [];

    // Remove Dashboard from list (we'll use home instead)
    const filteredItems = items.slice(1);

    const home = {
        icon: "pi pi-home",
        command: () => navigate("/")
    };

    return (
        <BreadCrumb
            model={filteredItems}
            home={home}
            separatorIcon="pi pi-angle-right"
            pt={{
                root: {
                    style: {
                        background: "transparent",
                        border: "none",
                        padding: 0
                    }
                }
            }}
        />
    );
};

export default AppBreadcrumb;