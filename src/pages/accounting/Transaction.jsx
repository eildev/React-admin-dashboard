import { FaCreditCard } from "react-icons/fa";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Transaction = () => {
    return (
        <>
            <Breadcrumb section="Accounting" title="Transaction" />
            <from className="from">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Add Transaction</h5>
                        </div>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label className="form-label">Transaction Date <span className="star">*</span></label>
                                    <input
                                        type="date"
                                        name="#0"
                                        className="form-control"
                                    // placeholder="Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Account Type <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="none">
                                        <option disabled selected>Select Account Type</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Transaction Type <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="none">
                                        <option disabled selected>Select Type</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Account Name <span className="star">*</span></label>

                                    <select className="form-select">
                                        <option disabled selected>Select Account ID</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                    {/* <input
                                                type="text"
                                                name="#0"
                                                className="form-control"
                                                placeholder="+1 (555) 000-0000"
                                            /> */}

                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Amount <span className="star">*</span></label>
                                    <input
                                        type="number"
                                        name="#0"
                                        className="form-control"
                                        placeholder="Enter Amount"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Transaction Account  <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="00.00">
                                        <option disabled selected>Select Account</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Note</label>
                                    <textarea rows={3} className="form-control" placeholder="Enter Note (optional)"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary d-flex align-items-center mt-10">
                                <FaCreditCard className="me-1" />
                                Payment
                            </button>
                        </div>
                    </div>
                </div>
            </from>
        </>
    );
};

export default Transaction;