import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useRef, useState, useEffect } from "react";
import {
  FaCopy,
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaPlus,
  FaPrint,
} from "react-icons/fa";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

const DynamicTable = ({ columns, data, tableName }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const tableRef = useRef(null);

  // Debug: Log the ref to ensure it's set
  useEffect(() => {
    console.log("Table Ref:", tableRef.current);
  }, [tableRef]);

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

  const exportToPDF = () => {
    const input = document.querySelector(".bordered-table");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("table.pdf");
    });
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "table.xlsx");
  };

  const copyToClipboard = () => {
    const table = document.querySelector(".bordered-table");
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    toast.success("Table copied to clipboard!");
  };

  const { pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();

  const maxVisiblePages = 5; // Maximum number of pages to show
  const getPageNumbers = () => {
    let pages = [];

    if (pageCount <= maxVisiblePages) {
      // If total pages are within limit, show all
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else {
      const left = Math.max(1, pageIndex - 1);
      const right = Math.min(pageCount, pageIndex + 3);

      if (left > 1) pages.push(1, "..."); // First page + dots
      for (let i = left; i <= right; i++) {
        pages.push(i);
      }
      if (right < pageCount) pages.push("...", pageCount); // Dots + last page
    }

    return pages;
  };

  return (
    <div className="card basic-data-table">
      <div className="card-header">
        <h5 className="card-title mb-0">{tableName}</h5>
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
          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-outline-primary d-flex align-items-center gap-2"
              onClick={copyToClipboard}
            >
              <FaCopy /> Copy
            </button>
            <button
              className="btn btn-outline-success d-flex align-items-center gap-2"
              onClick={exportToExcel}
            >
              <FaFileExcel /> Excel
            </button>
            <CSVLink
              data={data}
              filename={"table.csv"}
              className="btn btn-outline-info d-flex align-items-center gap-2"
            >
              <FaFileCsv /> CSV
            </CSVLink>
            <button
              className="btn btn-outline-danger d-flex align-items-center gap-2"
              onClick={exportToPDF}
            >
              <FaFilePdf /> PDF
            </button>
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              onClick={() => handlePrint()}
            >
              <FaPrint /> Print
            </button>
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <FaPlus /> Add Product
            </button>
          </div>
        </div>
        <div className="overflow-x-auto" ref={tableRef}>
          {" "}
          {/* Attach ref here */}
          <table className="table bordered-table mb-0">
            <thead>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr key={index}>
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
              {table.getRowModel().rows.map((row, i) => (
                <tr key={i}>
                  {row.getVisibleCells().map((cell, j) => (
                    <td key={j}>{cell.renderValue()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mt-3">
          {/* Previous Button */}
          <button
            className="btn btn-primary px-3 py-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <i className="fas fa-chevron-left"></i>{" "}
            <span className="">Prev</span>
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="fw-bold px-2">
                ...
              </span>
            ) : (
              <button
                key={index}
                className={`btn ${
                  page === pageIndex + 1 ? "btn-primary" : "btn-light"
                } px-3 py-1`}
                onClick={() => table.setPageIndex(page - 1)}
              >
                {page}
              </button>
            )
          )}

          {/* Next Button */}
          <button
            className="btn btn-primary px-3 py-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="">Next</span>{" "}
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
