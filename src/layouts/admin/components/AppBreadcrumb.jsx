import { useMatches, useNavigate } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";

const AppBreadcrumb = () => {
    const matches = useMatches() || [];
    const navigate = useNavigate();

    const items = matches
        .filter(
            (match) =>
                match.pathname !== "/admin" &&
                match?.handle?.breadcrumb
        )
        .map((match, index, arr) => {
            const isLast = index === arr.length - 1;
            const label = match.handle.breadcrumb(match.params);

            return {
                label,
                template: () =>
                    isLast ? (
                        <span className="font-medium">{label}</span>
                    ) : (
                        <span
                            className="cursor-pointer text-color"
                            onClick={() => navigate(match.pathname)}
                        >
                            {label}
                        </span>
                    ),
            };
        });

    const home = {
        icon: "pi pi-home",
        command: () => navigate("/admin"),
    };

    return <BreadCrumb model={items} home={home} />;
};

export default AppBreadcrumb;