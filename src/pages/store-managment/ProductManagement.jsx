import { useEffect } from 'react'
// import $ from 'jquery';

// import 'datatables.net-responsive-dt';

// import 'datatables.net-dt/js/dataTables.dataTables.js'; 

// import 'datatables.net';
// import 'datatables.net-dt';


// import $ from 'jquery';
// import 'datatables.net-dt/js/dataTables.dataTables.js';

// import 'datatables.net-dt/css/dataTables.dataTables.css';

// import { Icon } from '@iconify/react/dist/iconify.js';
// import { Link } from 'react-router-dom';

// const ProductManagement = () => {
//     useEffect(() => {
//         if (typeof $ !== 'undefined') {
//             console.log('jQuery is loaded');
//             const table = $('#dataTable').DataTable({
//                 pageLength: 10,
//             });
//             console.log(table);
//             return () => {
//                 table.destroy(true);
//             };
//         } else {
//             console.error('jQuery is not loaded');
//         }

//         // const table = $('#dataTable').DataTable({
//         //     pageLength: 10,
//         // });
//         // console.log('DataTable initialized');
//         // return () => {
//         //     table.destroy(true);
//         // };
//     }, []);
//     return (
//         <div className="card basic-data-table">
//             <div className="card-header">
//                 <h5 className="card-title mb-0">Default Data Tables</h5>
//             </div>
//             <div className="card-body">
//                 <table
//                     className="table bordered-table mb-0"
//                     id="dataTable"
//                     data-page-length={10}
//                 >
//                     <thead>
//                         <tr>
//                             <th scope="col">
//                                 <div className="form-check style-check d-flex align-items-center">
//                                     <input className="form-check-input" type="checkbox" />
//                                     <label className="form-check-label">S.L</label>
//                                 </div>
//                             </th>
//                             <th scope="col">Invoice</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Issued Date</th>
//                             <th scope="col" className='dt-orderable-asc dt-orderable-desc'>Amount</th>
//                             <th scope="col">Status</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <div className="form-check style-check d-flex align-items-center">
//                                     <input className="form-check-input" type="checkbox" />
//                                     <label className="form-check-label">01</label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <Link to="#" className="text-primary-600">
//                                     #526534
//                                 </Link>
//                             </td>
//                             <td>
//                                 <div className="d-flex align-items-center">
//                                     <img
//                                         src="assets/images/user-list/user-list1.png"
//                                         alt=""
//                                         className="flex-shrink-0 me-12 radius-8"
//                                     />
//                                     <h6 className="text-md mb-0 fw-medium flex-grow-1">
//                                         Kathryn Murphy
//                                     </h6>
//                                 </div>
//                             </td>
//                             <td>25 Jan 2024</td>
//                             <td>$200.00</td>
//                             <td>
//                                 {" "}
//                                 <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
//                                     Paid
//                                 </span>
//                             </td>
//                             <td>
//                                 <Link
//                                     to="#"
//                                     className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
//                                 >
//                                     <Icon icon="iconamoon:eye-light" />
//                                 </Link>
//                                 <Link
//                                     to="#"
//                                     className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
//                                 >
//                                     <Icon icon="lucide:edit" />
//                                 </Link>
//                                 <Link
//                                     to="#"
//                                     className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
//                                 >
//                                     <Icon icon="mingcute:delete-2-line" />
//                                 </Link>
//                             </td>
//                         </tr>
 
//                     </tbody>
//                 </table>
//             </div>
//         </div>

//     )
// }

// export default ProductManagement;



import React from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { utils, writeFile } from 'xlsx';


const ProductManagement = () => {
    const data = [
        {
            slNo: 1,
            name: 'Product 1',
            image: 'https://via.placeholder.com/100',
            productCode: 'P001',
            category: 'Electronics',
            subCategory: 'Mobile',
            brand: 'Brand A',
            color: 'Black',
            costPrice: 100,
            b2bPrice: 90,
            b2cPrice: 110,
            size: 'N/A',
            unit: 'pcs',
            action: 'Edit',
        },
        {
            slNo: 2,
            name: 'Product 2',
            image: 'https://via.placeholder.com/100',
            productCode: 'P002',
            category: 'Electronics',
            subCategory: 'Laptop',
            brand: 'Brand B',
            color: 'Silver',
            costPrice: 500,
            b2bPrice: 450,
            b2cPrice: 550,
            size: 'N/A',
            unit: 'pcs',
            action: 'Edit',
        },
    ];

    const handleCopy = () => {
        const table = document.getElementById('data-table');
        const range = document.createRange();
        range.selectNode(table);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Table data copied to clipboard!');
    };

    const handlePDFExport = () => {
        const input = document.getElementById('data-table');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('table.pdf');
        });
    };

    const handleExcelExport = () => {
        const exportData = data.map(({ image, ...rest }) => rest); // Image বাদ দিয়ে এক্সপোর্ট
        const worksheet = utils.json_to_sheet(exportData);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Products");
        writeFile(workbook, "products.xlsx");
    };

    return (
        <div className="card basic-data-table">
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={handleCopy}>Copy</button>
                <CSVLink data={data} filename="data.csv">
                    <button className="btn btn-success me-2">Export as CSV</button>
                </CSVLink>
                <button className="btn btn-info me-2" onClick={handlePDFExport}>Export as PDF</button>
                <button className="btn btn-warning me-2" onClick={handleExcelExport}>Export as Excel</button>
                <button className="btn btn-secondary" onClick={() => window.print()}>Print</button>
            </div>
            <table id="data-table" className="table bordered-table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">SL NO</th>
                        <th scope="col">NAME</th>
                        <th scope="col">IMAGE</th>
                        <th scope="col">PRODUCT CODE</th>
                        <th scope="col">CATEGORY</th>
                        <th scope="col">SUBCATEGORY</th>
                        <th scope="col">BRAND</th>
                        <th scope="col">COLOR</th>
                        <th scope="col">COST PRICE</th>
                        <th scope="col">B2B PRICE</th>
                        <th scope="col">B2C PRICE</th>
                        <th scope="col">SIZE</th>
                        <th scope="col">UNIT</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.slNo}>
                            <td>{row.slNo}</td>
                            <td>{row.name}</td>
                            <td>
                                <img src={row.image} alt={row.name} style={{ width: '100px' }} />
                            </td>
                            <td>{row.productCode}</td>
                            <td>{row.category}</td>
                            <td>{row.subCategory}</td>
                            <td>{row.brand}</td>
                            <td>{row.color}</td>
                            <td>{row.costPrice}</td>
                            <td>{row.b2bPrice}</td>
                            <td>{row.b2cPrice}</td>
                            <td>{row.size}</td>
                            <td>{row.unit}</td>
                            <td>{row.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagement;
