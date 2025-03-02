import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  FaCopy,
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaPlus,
  FaPrint,
} from "react-icons/fa";

const DynamicTable = ({ columns, data }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    columns,
    data,
    state: {
      globalFilter,
      sorting,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="card basic-data-table">
      <div className="card-header">
        <h5 className="card-title mb-0">Product Table</h5>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="form-control search-input"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />

          {/* Buttons Group */}
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-primary d-flex align-items-center gap-2">
              <FaCopy /> Copy
            </button>
            <button className="btn btn-outline-success d-flex align-items-center gap-2">
              <FaFileExcel /> Excel
            </button>
            <button className="btn btn-outline-info d-flex align-items-center gap-2">
              <FaFileCsv /> CSV
            </button>
            <button className="btn btn-outline-danger d-flex align-items-center gap-2">
              <FaFilePdf /> PDF
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <FaPrint /> Print
            </button>
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <FaPlus /> Add Product
            </button>
          </div>
        </div>

        <div className=" overflow-x-auto">
          <table className="table bordered-table mb-0">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.column.columnDef.header}{" "}
                      {header.column.getIsSorted() === "desc" ? "🔽" : "🔼"}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{cell.renderValue()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <button
            className="btn btn-primary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <i className="fas fa-chevron-left"></i> Previous
          </button>

          <span className="fw-bold">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          <button
            className="btn btn-primary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
