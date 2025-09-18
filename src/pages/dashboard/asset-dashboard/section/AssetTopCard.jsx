import { Icon } from "@iconify/react/dist/iconify.js";
import { useGetAssetTopCardQuery } from "../../../../redux/features/api/assetDashboardApiSlice";



const AssetTopCard = () => {

    // const { data, isLoading, error } = useGetAssetTopCardQuery();
    // console.log(data || []);

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

    return (
        <div className="row ">

            <div className="col-xxl-4 col-sm-6 mb-20">
                <div className="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-3">
                    <div className="card-body p-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                            <div className="d-flex align-items-center">
                                <div className="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                                    <span className="mb-0 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                                        <Icon
                                            icon="flowbite:users-group-solid"
                                            className="icon"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span className="mb-2 fw-medium text-secondary-light text-md">
                                    Bank Balance
                                    </span>
                                    <h6 className="fw-semibold my-1">5000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xxl-4 col-sm-6 mb-20">
                <div className="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-2">
                    <div className="card-body p-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                            <div className="d-flex align-items-center">
                                <div className="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                                    <span className="mb-0 w-40-px h-40-px bg-purple flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                                        <Icon
                                            icon="solar:wallet-bold"
                                            className="text-white text-2xl mb-0"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span className="mb-2 fw-medium text-secondary-light text-md">
                                    Cash Balance
                                    </span>
                                    <h6 className="fw-semibold my-1">15,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-sm-6 mb-20">
                <div className="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-5">
                    <div className="card-body p-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                            <div className="d-flex align-items-center">
                                <div className="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                                    <span className="mb-0 w-40-px h-40-px bg-red flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                                        <Icon
                                            icon="fa6-solid:file-invoice-dollar"
                                            className="text-white text-2xl mb-0"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span className="mb-2 fw-medium text-secondary-light text-md">
                                    Fixed Asset
                                    </span>
                                    <h6 className="fw-semibold my-1">15,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-sm-6 mb-20">
                <div className="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-4">
                    <div className="card-body p-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                            <div className="d-flex align-items-center">
                                <div className="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                                    <span className="mb-0 w-40-px h-40-px bg-success-main flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                                        <Icon
                                            icon="streamline:bag-dollar-solid"
                                            className="icon"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span className="mb-2 fw-medium text-secondary-light text-md">
                                    Stock Value
                                    </span>
                                    <h6 className="fw-semibold my-1">15,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-sm-6 mb-20">
                <div className="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-2">
                    <div className="card-body p-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                            <div className="d-flex align-items-center">
                                <div className="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                                    <span className="mb-0 w-40-px h-40-px bg-purple flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                                        <Icon
                                            icon="solar:wallet-bold"
                                            className="text-white text-2xl mb-0"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span className="mb-2 fw-medium text-secondary-light text-md">
                                    Receivable Amount
                                    </span>
                                    <h6 className="fw-semibold my-1">15,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-sm-6 mb-20">
                <div className="card px-24 py-16 shadow-none radius-8 border h-100 bg-gradient-start-5">
                    <div className="card-body p-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                            <div className="d-flex align-items-center">
                                <div className="w-64-px h-64-px radius-16 bg-base-50 d-flex justify-content-center align-items-center me-20">
                                    <span className="mb-0 w-40-px h-40-px bg-red flex-shrink-0 text-white d-flex justify-content-center align-items-center radius-8 h6 mb-0">
                                        <Icon
                                            icon="fa6-solid:file-invoice-dollar"
                                            className="text-white text-2xl mb-0"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span className="mb-2 fw-medium text-secondary-light text-md">
                                    Opening Capital
                                    </span>
                                    <h6 className="fw-semibold my-1">15,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default AssetTopCard;
