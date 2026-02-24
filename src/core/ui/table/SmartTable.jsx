import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import TableSkeleton from "./TableSkeleton";
import TableActions from "./TableActions";

const SmartTable = ({
    queryHook,
    columns = [],
    actions = [],
    skeletonRows = 5,
    searchable = false,
    onSearch,
    ...props
}) => {
    const [search, setSearch] = useState("");

    const { data = [], isLoading, isError } = queryHook(search);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch?.(value);
    };

    if (isLoading) {
        return <TableSkeleton columns={columns} rows={skeletonRows} />;
    }

    if (isError) {
        return <div className="p-4 text-red-500">Something went wrong</div>;
    }

    return (
        <div>
            {searchable && (
                <div className="mb-3">
                    <InputText
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="w-full md:w-20rem"
                    />
                </div>
            )}

            <DataTable value={data} {...props}>
                {columns.map((col, i) => (
                    <Column
                        key={i}
                        field={col.field}
                        header={col.header}
                        body={col.body}
                        sortable={col.sortable}
                    />
                ))}

                {actions.length > 0 && (
                    <Column
                        header="Actions"
                        body={(row) => (
                            <TableActions actions={actions} rowData={row} />
                        )}
                    />
                )}
            </DataTable>
        </div>
    );
};

export default SmartTable;