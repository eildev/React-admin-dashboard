import { useState } from "react";

const ExpenseTable = () => {
    const tableData = [
        { category: "Gold", transactions: "2 Months", date: "27 / 10 /2024", amount: "$365" },
        { category: "Dollars", transactions: "3 Months", date: "27 / 10 /2024", amount: "$365" },
        { category: "Stock Market", transactions: "1 Months", date: "27 / 10 /2024", amount: "$365" },
        { category: "Dimond", transactions: "5 Months", date: "27 / 10 /2024", amount: "$365" },
        { category: "S&P 500", transactions: "4 Months", date: "27 / 10 /2024", amount: "$365" },
        { category: "Crypto", transactions: "6 Months", date: "27 / 10 /2024", amount: "$500" },
        { category: "NFTs", transactions: "7 Months", date: "27 / 10 /2024", amount: "$800" },
        { category: "Real Estate", transactions: "8 Months", date: "27 / 10 /2024", amount: "$1200" },
        { category: "Mutual Funds", transactions: "9 Months", date: "27 / 10 /2024", amount: "$650" },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="col-12">
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg">Last Month Activities</h6>
                        <div>
                            <select className="form-select form-select-sm w-auto bg-base border text-secondary-light" defaultValue="Yearly">
                                <option value="Yearly">Yearly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Today">Today</option>
                            </select>
                        </div>
                    </div>

                    <div className="table-responsive scroll-sm">
                        <table className="table sm-table bordered-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Categories Names</th>
                                    <th scope="col">Transactions</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.category}</td>
                                        <td>{item.transactions}</td>
                                        <td>{item.date}</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-center mt-3 gap-2 flex-wrap">
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`btn btn-sm ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-secondary'}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseTable;
