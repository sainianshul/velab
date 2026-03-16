import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";

const TableSkeleton = ({ columns = [], rows = 5 }) => {
    const skeletonData = Array.from({ length: rows }, (_, i) => ({ id: i }));

    return (
        <DataTable value={skeletonData}>
            {columns.map((col, i) => (
                <Column
                    key={i}
                    header={col.header}
                    body={() => <Skeleton width="100%" height="1.5rem" />}
                />
            ))}
        </DataTable>
    );
};

export default TableSkeleton;