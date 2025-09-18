import React from 'react';
import useReactApexChart from '../../../data/useReactApexChart';
import ReactApexChart from 'react-apexcharts';
import { Icon } from '@iconify/react/dist/iconify.js';

const SalesSummery = () => {

    let { paymentStatusChartSeriesThree, paymentStatusChartOptionsThree } = useReactApexChart();

    return (
        <div className="row h-100">
            <div className="col-3 card">
                <div className="p-10 h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                        <div>
                            <span className="mb-12 w-44-px h-44-px text-primary-600 bg-primary-light border border-primary-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12">
                                <Icon icon="fa-solid:box-open" className="icon" />
                            </span>
                            <span className="mb-1 fw-medium text-secondary-light text-md">
                                Total Products
                            </span>
                            <h6 className="fw-semibold text-primary-light mb-1">300</h6>
                        </div>
                    </div>
                    <p className="text-sm mb-0">
                        Increase by{" "}
                        <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                            +200
                        </span>{" "}
                        this week
                    </p>
                </div>
            </div>
            <div className="col-3 card">
                <div className=" p-10 h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                        <div>
                            <span className="mb-12 w-44-px h-44-px text-yellow bg-yellow-light border border-yellow-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12">
                                <Icon
                                    icon="flowbite:users-group-solid"
                                    className="icon"
                                />
                            </span>
                            <span className="mb-1 fw-medium text-secondary-light text-md">
                                Total Customer
                            </span>
                            <h6 className="fw-semibold text-primary-light mb-1">
                                50,000
                            </h6>
                        </div>
                    </div>
                    <p className="text-sm mb-0">
                        Increase by{" "}
                        <span className="bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm">
                            -5k
                        </span>{" "}
                        this week
                    </p>
                </div>
            </div>
            <div className="col-3 card">
                <div className=" p-10 h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                        <div>
                            <span className="mb-12 w-44-px h-44-px text-lilac bg-lilac-light border border-lilac-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12">
                                <Icon
                                    icon="majesticons:shopping-cart"
                                    className="icon"
                                />
                            </span>
                            <span className="mb-1 fw-medium text-secondary-light text-md">
                                Total Orders
                            </span>
                            <h6 className="fw-semibold text-primary-light mb-1">
                                1500
                            </h6>
                        </div>
                    </div>
                    <p className="text-sm mb-0">
                        Increase by{" "}
                        <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                            +1k
                        </span>{" "}
                        this week
                    </p>
                </div>
            </div>
            <div className="col-3 card">
                <div className=" p-10 h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                        <div>
                            <span className="mb-12 w-44-px h-44-px text-pink bg-pink-light border border-pink-light-white flex-shrink-0 d-flex justify-content-center align-items-center radius-8 h6 mb-12">
                                <Icon
                                    icon="ri:discount-percent-fill"
                                    className="icon"
                                />
                            </span>
                            <span className="mb-1 fw-medium text-secondary-light text-md">
                                Total Sales
                            </span>
                            <h6 className="fw-semibold text-primary-light mb-1">
                                $25,00,000.00
                            </h6>
                        </div>
                    </div>
                    <p className="text-sm mb-0">
                        Increase by{" "}
                        <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                            +$10k
                        </span>{" "}
                        this week
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SalesSummery;