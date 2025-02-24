import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";

const ProductManagement = () => {
  return (
    <>
      <Breadcrumb section="Store Management" title="Product Management" />
      <h5>Manage Products</h5>
      <DynamicTable columns={columns} data={mockProducts} />
    </>
  );
};

export default ProductManagement;

// import React from 'react';
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { utils, writeFile } from 'xlsx';

// const ProductManagement = () => {
//     const data = [
//         {
//             slNo: 1,
//             name: 'Product 1',
//             image: 'https://via.placeholder.com/100',
//             productCode: 'P001',
//             category: 'Electronics',
//             subCategory: 'Mobile',
//             brand: 'Brand A',
//             color: 'Black',
//             costPrice: 100,
//             b2bPrice: 90,
//             b2cPrice: 110,
//             size: 'N/A',
//             unit: 'pcs',
//             action: 'Edit',
//         },
//         {
//             slNo: 2,
//             name: 'Product 2',
//             image: 'https://via.placeholder.com/100',
//             productCode: 'P002',
//             category: 'Electronics',
//             subCategory: 'Laptop',
//             brand: 'Brand B',
//             color: 'Silver',
//             costPrice: 500,
//             b2bPrice: 450,
//             b2cPrice: 550,
//             size: 'N/A',
//             unit: 'pcs',
//             action: 'Edit',
//         },
//     ];

//     const handleCopy = () => {
//         const table = document.getElementById('data-table');
//         const range = document.createRange();
//         range.selectNode(table);
//         window.getSelection().removeAllRanges();
//         window.getSelection().addRange(range);
//         document.execCommand('copy');
//         window.getSelection().removeAllRanges();
//         alert('Table data copied to clipboard!');
//     };

//     const handlePDFExport = () => {
//         const input = document.getElementById('data-table');
//         html2canvas(input).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF();
//             pdf.addImage(imgData, 'PNG', 0, 0);
//             pdf.save('table.pdf');
//         });
//     };

//     const handleExcelExport = () => {
//         const exportData = data.map(({ image, ...rest }) => rest); // Image বাদ দিয়ে এক্সপোর্ট
//         const worksheet = utils.json_to_sheet(exportData);
//         const workbook = utils.book_new();
//         utils.book_append_sheet(workbook, worksheet, "Products");
//         writeFile(workbook, "products.xlsx");
//     };

//     return (
//         <div className="card basic-data-table">
//             <div className="mb-3">
//                 <button className="btn btn-primary me-2" onClick={handleCopy}>Copy</button>
//                 <CSVLink data={data} filename="data.csv">
//                     <button className="btn btn-success me-2">Export as CSV</button>
//                 </CSVLink>
//                 <button className="btn btn-info me-2" onClick={handlePDFExport}>Export as PDF</button>
//                 <button className="btn btn-warning me-2" onClick={handleExcelExport}>Export as Excel</button>
//                 <button className="btn btn-secondary" onClick={() => window.print()}>Print</button>
//             </div>
//             <table id="data-table" className="table bordered-table">
//                 <thead className="table-dark">
//                     <tr>
//                         <th scope="col">SL NO</th>
//                         <th scope="col">NAME</th>
//                         <th scope="col">IMAGE</th>
//                         <th scope="col">PRODUCT CODE</th>
//                         <th scope="col">CATEGORY</th>
//                         <th scope="col">SUBCATEGORY</th>
//                         <th scope="col">BRAND</th>
//                         <th scope="col">COLOR</th>
//                         <th scope="col">COST PRICE</th>
//                         <th scope="col">B2B PRICE</th>
//                         <th scope="col">B2C PRICE</th>
//                         <th scope="col">SIZE</th>
//                         <th scope="col">UNIT</th>
//                         <th scope="col">ACTION</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row) => (
//                         <tr key={row.slNo}>
//                             <td>{row.slNo}</td>
//                             <td>{row.name}</td>
//                             <td>
//                                 <img src={row.image} alt={row.name} style={{ width: '100px' }} />
//                             </td>
//                             <td>{row.productCode}</td>
//                             <td>{row.category}</td>
//                             <td>{row.subCategory}</td>
//                             <td>{row.brand}</td>
//                             <td>{row.color}</td>
//                             <td>{row.costPrice}</td>
//                             <td>{row.b2bPrice}</td>
//                             <td>{row.b2cPrice}</td>
//                             <td>{row.size}</td>
//                             <td>{row.unit}</td>
//                             <td>{row.action}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ProductManagement;
