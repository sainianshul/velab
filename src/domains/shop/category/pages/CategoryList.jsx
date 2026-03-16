import { useState } from "react";
import SmartTable from "@/core/ui/table/SmartTable";
import { useCategories } from "../hooks/useCategories";
import { useDeleteCategory } from "../hooks/useCategoryMutations";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
    const navigate = useNavigate();
    const deleteMutation = useDeleteCategory();
    const [search, setSearch] = useState("");

    const columns = [
        { field: "id", header: "Id", sortable: true },
        { field: "name", header: "Name", sortable: true },
        { field: "createdAt", header: "Created At", sortable: true },
    ];

    const actions = [
        {
            icon: "pi pi-pencil",
            severity: "info",
            tooltip: "Edit",
            onClick: (row) =>
                navigate(`/admin/shop/categories/${row.id}/edit`),
        },
        {
            icon: "pi pi-trash",
            severity: "danger",
            tooltip: "Delete",
            onClick: (row) => deleteMutation.mutate(row.id),
        },
    ];

    return (
        <SmartTable
            queryHook={(searchValue) =>
                useCategories({ search: searchValue })
            }
            columns={columns}
            actions={actions}
            searchable
            onSearch={setSearch}
            paginator
            rows={5}
        />
    );
};

export default CategoryList;