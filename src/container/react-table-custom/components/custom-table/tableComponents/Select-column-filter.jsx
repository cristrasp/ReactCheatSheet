import { useMemo } from "react";
import { Input } from "reactstrap";

export default function SelectColumnFilter({ column }) {
    const { filterValue, setFilter, preFilteredRows, id } = column;

    const options = useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <Input
            type="select"
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </Input>
    );
}
