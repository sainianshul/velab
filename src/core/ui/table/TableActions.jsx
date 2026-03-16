import { Button } from "primereact/button";

const TableActions = ({ actions = [], rowData }) => {
    return (
        <div className="flex gap-2">
            {actions.map((action, i) => (
                <Button
                    key={i}
                    icon={action.icon}
                    severity={action.severity || "secondary"}
                    tooltip={action.tooltip}
                    onClick={() => action.onClick(rowData)}
                    text
                />
            ))}
        </div>
    );
};

export default TableActions;