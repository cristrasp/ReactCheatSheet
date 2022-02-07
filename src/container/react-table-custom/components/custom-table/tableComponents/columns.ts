import { Column } from "react-table";
import { ColumnFilter } from "./ColumnFilter";
import SelectColumnFilter from "./Select-column-filter";
export const COLUMNS: Column<IData>[] = [
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectColumnFilter
    }
];

export type IData = {
    name: string,
    status: string
}
