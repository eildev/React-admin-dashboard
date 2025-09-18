import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";


const BankTransactionDetails = () => {
    const transactions = [
        {
            bankName: "UCB",
            date: "June 16 2023 at 16:42",
            amount: "20,000.00 Tk", // Replace with the actual path to the bank logo
        },
        {
            bankName: "City Bank Ltd.",
            date: "June 12 2023 at 10:16",
            amount: "56,000.00 Tk", // Replace with the actual path to the bank logo
        },
        {
            bankName: "EBL Bank",
            date: "June 08 2023 at 23:55",
            amount: "69,000.00 Tk", // Replace with the actual path to the bank logo
        },
        {
            bankName: "Islami Bank Ltd.",
            date: "June 02 2023 at 09:15",
            amount: "35,000.00 Tk", // Replace with the actual path to the bank logo
        },
    ];


    return (
        <div className="col-xxl-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Top Performer</h6>
                      
                    </div>
                    <div className="mt-32">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Dianne Russell</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Agent ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">60/80</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user2.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Wade Warren</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Agent ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">50/70</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user3.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Albert Flores</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Agent ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">55/75</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user4.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Bessie Cooper</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Agent ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">60/80</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user5.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Arlene McCoy</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Agent ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">55/75</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Arlene McCoy</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Agent ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">50/70</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankTransactionDetails;
