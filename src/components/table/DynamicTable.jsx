import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useRef, useState, useEffect } from "react";
import { FaCopy, FaFileCsv, FaFileExcel, FaFilePdf, FaPlus, FaPrint } from "react-icons/fa";
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import { toast } from "react-toastify";

const DynamicTable = ({ columns, data }) => {
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
    const input = document.querySelector('.bordered-table');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('table.pdf');
    });
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table.xlsx');
  };

  const copyToClipboard = () => {
    const table = document.querySelector('.bordered-table');
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    toast.success('Table copied to clipboard!');
  };

  return (
    <div className="card basic-data-table">
      <div className="card-header">
        <h5 className="card-title mb-0">Product Table</h5>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
          <input
            type="text"
            placeholder="Search..."
            className="form-control search-input"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-primary d-flex align-items-center gap-2" onClick={copyToClipboard}>
              <FaCopy /> Copy
            </button>
            <button className="btn btn-outline-success d-flex align-items-center gap-2" onClick={exportToExcel}>
              <FaFileExcel /> Excel
            </button>
            <CSVLink data={data} filename={"table.csv"} className="btn btn-outline-info d-flex align-items-center gap-2">
              <FaFileCsv /> CSV
            </CSVLink>
            <button className="btn btn-outline-danger d-flex align-items-center gap-2" onClick={exportToPDF}>
              <FaFilePdf /> PDF
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2" onClick={() => handlePrint()}>
              <FaPrint /> Print
            </button>
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <FaPlus /> Add Product
            </button>
          </div>
        </div>
        <div className="overflow-x-auto" ref={tableRef}> {/* Attach ref here */}
          <table className="table bordered-table mb-0">
            <thead>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr key={index}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
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
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <button
            className="btn btn-primary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <i className="fas fa-chevron-left"></i> Previous
          </button>
          <span className="fw-bold">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
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
