import { FaCreditCard } from "react-icons/fa";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useState } from "react";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";

const Transaction = () => {

    const [tabs, setTabs] = useState('transfer');
    console.log(tabs);

    return (
        <>
            <Breadcrumb section="Transaction" title="Transaction" />
            <div className="d-flex gap-2 mb-3">
                <button onClick={() => setTabs('transfer')} className={`btn ${tabs == "transfer" ? "btn-success" : "btn-primary"} d-flex align-items-center mt-10`}>
                    Balance Transfer
                </button>
                <button onClick={() => setTabs('Balance')} className={`btn ${tabs == "Balance" ? "btn-success" : "btn-primary"} d-flex align-items-center mt-10`}>
                    Balance History
                </button>
                <button onClick={() => setTabs('Investor')} className={`btn ${tabs == "Investor" ? "btn-success" : "btn-primary"} d-flex align-items-center mt-10`}>
                    Investor History
                </button>
            </div>
            <from className={`from ${tabs == 'transfer' ? "opacity-100" : "opacity-0 d-none"}`}>
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
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Account Type <span className="star">*</span></label>
                                    <select className="form-select">
                                        <option disabled selected>Select Account Type</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Transaction Type <span className="star">*</span></label>
                                    <select className="form-select">
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
                                    <select className="form-select">
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
            <div className={`${tabs == 'Balance' ? "opacity-100" : "opacity-0 d-none"}`}>
                <form action="" className="mb-20">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Balance</h5>
                            </div>
                            <div className="card-body">
                                <div className="row gy-3">
                                    <div className="col-md-3">
                                        <label className="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">End Date</label>
                                        <input
                                            type="date"
                                            name="#0"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Customar</label>
                                        <select className="form-select" defaultValue="none">
                                            <option disabled selected>Select Customar</option>
                                            <option value="UK">UK</option>
                                            <option value="BD">BD</option>
                                            <option value="EU">EU</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Supplier</label>

                                        <select className="form-select" defaultValue="none">
                                            <option disabled selected>Select Supplier</option>
                                            <option value="UK">UK</option>
                                            <option value="BD">BD</option>
                                            <option value="EU">EU</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="btn btn-primary-600">
                                            Filter
                                        </button>
                                        <button type="submit" className="btn btn-primary-600 ms-10">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <DynamicTable columns={columns} data={mockProducts} tableName={'Transaction History'} />
            </div>
            <div className={`${tabs == 'Investor' ? "opacity-100" : "opacity-0 d-none"}`}>
            <DynamicTable columns={columns} data={mockProducts} tableName={'Investor History'} />
            </div>
        </>
    );
};

export default Transaction;