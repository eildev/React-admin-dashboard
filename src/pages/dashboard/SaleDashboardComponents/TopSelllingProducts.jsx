import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const TopSelllingProducts = () => {
    return (
        <div className="w-100 mt-20">
        <div className="card h-100">
            <div className="card-body p-24">
                <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                    <h6 className="mb-2 fw-bold text-lg mb-0">Top Sellling Products</h6>
           
                </div>
                <div className="table-responsive scroll-SM">
                    <table className="table bordered-table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col"> <div className="max-w-112 mx-auto">
                                        <span>Popularity</span>
                                    </div></th>
                                <th scope="col">
                                Sales
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Nike Air Shoes</td>

                                <td>
                                    <div className="max-w-112 mx-auto">
                                        <div className="w-100">
                                            <div
                                                className="progress progress-sm rounded-pill"
                                                role="progressbar"
                                                aria-label="Success example"
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-primary-600 rounded-pill"
                                                    style={{ width: "0%" }}
                                                />
                                            </div>
                                        </div>
                                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                                            Out of Stock
                                        </span>
                                    </div>
                                </td>
                                <td>$500.00</td>
                            </tr>
                            <tr>
                            <td>02</td>
                                <td>Nike Air Shoes</td>
                                <td>
                                    <div className="max-w-112 mx-auto">
                                        <div className="w-100">
                                            <div
                                                className="progress progress-sm rounded-pill"
                                                role="progressbar"
                                                aria-label="Success example"
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-danger-main rounded-pill"
                                                    style={{ width: "40%" }}
                                                />
                                            </div>
                                        </div>
                                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                                            18 Low Stock
                                        </span>
                                    </div>
                                </td>
                                <td>$300.00</td>
                            </tr>
                            <tr>
                            <td>03</td>
                                <td>Nike Air Shoes</td>

                                <td>
                                    <div className="max-w-112 mx-auto">
                                        <div className="w-100">
                                            <div
                                                className="progress progress-sm rounded-pill"
                                                role="progressbar"
                                                aria-label="Success example"
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-success-main rounded-pill"
                                                    style={{ width: "80%" }}
                                                />
                                            </div>
                                        </div>
                                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                                            80 High Stock
                                        </span>
                                    </div>
                                </td>
                                <td>$500.00</td>
                            </tr>
                            <tr>
                            <td>04</td>
                                <td>Nike Air Shoes</td>

                                <td>
                                    <div className="max-w-112 mx-auto">
                                        <div className="w-100">
                                            <div
                                                className="progress progress-sm rounded-pill"
                                                role="progressbar"
                                                aria-label="Success example"
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-success-main rounded-pill"
                                                    style={{ width: "50%" }}
                                                />
                                            </div>
                                        </div>
                                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                                            50 High Stock
                                        </span>
                                    </div>
                                </td>
                                <td>$300.00</td>
                            </tr>
                            <tr>
                            <td>05</td>
                                <td>Nike Air Shoes</td>

                                <td>
                                    <div className="max-w-112 mx-auto">
                                        <div className="w-100">
                                            <div
                                                className="progress progress-sm rounded-pill"
                                                role="progressbar"
                                                aria-label="Success example"
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-success-main rounded-pill"
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                        </div>
                                        <span className="mt-12 text-secondary-light text-sm fw-medium">
                                            70 High Stock
                                        </span>
                                    </div>
                                </td>
                                <td>$150.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TopSelllingProducts;