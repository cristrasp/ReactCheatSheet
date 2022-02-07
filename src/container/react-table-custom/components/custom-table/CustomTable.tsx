import { COLUMNS } from "./tableComponents/columns";
import mock_data from '../../../../mock/mock_data.json';
import { useMemo } from "react";
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import './customTable.scss';
import { FcDown } from "react-icons/fc";
import { FcUp } from "react-icons/fc";
import { Button } from "reactstrap";

export default function CustomTable() {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => mock_data, [])

    const tableIstance = useTable({
        columns,
        data
    },
        useFilters,
        useSortBy,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow } = tableIstance;

    const { pageIndex } = state;

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="width-300">
                                    <div {...column.getSortByToggleProps()} className="sortStyle">
                                        {column.render("Header")}
                                        <div style={{ marginTop: "-2px" }}>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FcDown />
                                                ) : (
                                                    <FcUp />
                                                )
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <div>{column.canFilter ? column.render("Filter") : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td className="width-300" {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="btnFooter">
                <Button
                    color="primary"
                    className="btnStyle"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Previous Page
                </Button>
                <span>
                    Page {""}{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}{" "}
                    </strong>{" "}
                </span>
                <Button
                    className="btnStyle"
                    color="primary"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    Next Page
                </Button>
            </div>
        </div>
    )
}