import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { FaBarcode, FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";


const SaleDashboard = () => {
    const [barcode, setBarcode] = useState("");

    const handleInputChange = (e) => {
        setBarcode(e.target.value);
    };

    const handleScanClick = () => {
        alert(`Scanning Barcode: ${barcode}`);
    };

    return (
        <>
            <Breadcrumb section="Sale Dashboard" title="Sale Dashboard" />
            {/* <h5>Sale Dashboard</h5> */}
            <form action="">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Products</h5>
                        </div>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-md-3">
                                    <label className="form-label">Barcode</label>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-primary text-nowrap barBtn" type="button" onClick={handleScanClick}>
                                            <FaBarcode className="me-1 mb-1" />
                                        </button>
                                        <input
                                            type="text"
                                            id="barcodeInput"
                                            className="form-control bar-input"
                                            placeholder="Barcode"
                                            value={barcode}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Date</label>
                                    <input
                                        type="date"
                                        name="#0"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Product</label>
                                    <select className="form-select" defaultValue="none">
                                        <option>Select Product</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Customer</label>

                                    <select className="form-select" defaultValue="BD">
                                        <option value="US">US</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-1 add-button">
                                    <button type="submit" className="btn btn-primary-600">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


            <div className="col-lg-12 mt-20">
                <div className="card h-100">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Products</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table basic-table mb-0">
                                <thead>
                                    <tr>
                                        <th>S.L</th>
                                        <th>Invoice</th>
                                        <th>Name</th>
                                        <th>Issued Date</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <Link to="#" className="text-primary-600">
                                                #526534
                                            </Link>
                                        </td>
                                        <td>Kathryn Murphy</td>
                                        <td>25 Jan 2024</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>
                                            <Link to="#" className="text-primary-600">
                                                #696589
                                            </Link>
                                        </td>
                                        <td>Annette Black</td>
                                        <td>25 Jan 2024</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>
                                            <Link to="#" className="text-primary-600">
                                                #256584
                                            </Link>
                                        </td>
                                        <td>Ronald Richards</td>
                                        <td>10 Feb 2024</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>
                                            <Link to="#" className="text-primary-600">
                                                #526587
                                            </Link>
                                        </td>
                                        <td>Eleanor Pena</td>
                                        <td>10 Feb 2024</td>
                                        <td>$150.00</td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td>
                                            <Link to="#" className="text-primary-600">
                                                #105986
                                            </Link>
                                        </td>
                                        <td>Leslie Alexander</td>
                                        <td>15 Mar 2024</td>
                                        <td>$150.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
            <div className="col-lg-8 mt-20">
          <div className="card">
            {/* Card Header */}
            <div className="card-header">
              <h5 className="card-title mb-0">Invoice</h5>
            </div>

            {/* Card Body */}
            <div className="card-body">
              <div className="row g-3"> {/* 🔥 Added g-3 for proper gap between columns */}

                {/* Invoice Info - Product Total, Subtotal, Total Due */}
                <div className="col-lg-4 col-md-6 mb-10">
                  <span>Product Total :</span> <span>99999.00</span>
                </div>
                <div className="col-lg-4 col-md-6">
                  <span>Sub Total :</span> <span>99999.00</span>
                </div>
                <div className="col-lg-4 col-md-12">
                  <span>Total Due :</span> <span>99999.00</span>
                </div>

                {/* Discount Input */}
                <div className="col-lg-3 col-md-6">
                  <span>Discount</span>
                  <input type="number" className="form-control" />
                </div>

                {/* Pay Amount Input */}
                <div className="col-lg-3 col-md-6">
                  <span>Pay Amount</span>
                  <input type="number" className="form-control" />
                </div>

                {/* Transaction Method */}
                <div className="col-lg-3 col-md-6">
                  <span>Transaction Method <span className="text-danger">*</span></span>
                  <select className="form-select">
                    <option>Select Product</option>
                    <option value="UK">UK</option>
                    <option value="BD">BD</option>
                    <option value="EU">EU</option>
                  </select>
                </div>

                {/* Generate Invoice Button */}
                <div className="col-lg-3 col-md-6 invoice-btn">
                  <button className="btn btn-primary w-100">
                    <FaFileInvoiceDollar className="mb-1" /> Generate Invoice
                  </button>
                </div>

              </div> {/* End Row */}
            </div> {/* End Card Body */}
          </div> {/* End Card */}
        </div>
                <div className="col-lg-4 mt-20">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Customer Details</h5>
                        </div>
                        <div className="card-body">
                            <div>
                                <h5 className="customar-info"><span>Customer Name :</span> <span>Fardus Hassan Bappy</span></h5>
                                <h5 className="customar-info"><span>Customer Phone :</span><span>+880 1722092675</span></h5>
                                <h5 className="customar-info"><span>Previous Due :</span><span>50000.00</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleDashboard;
