import { Input } from "reactstrap";

export const ColumnFilter = ({ column }: any) => {
    const { filterValue, setFilter } = column;

    return (
        <span>
            <Input placeholder="Search" type="text" value={filterValue || ''} onChange={(e) => { setFilter(e.target.value) }} />
        </span>
    )
}