import ReactApexChart from "react-apexcharts";
import DashboardCard from "../../../../components/card/DashboardCard";
import useReactApexChart from "../../../../data/useReactApexChart";


const TotalStats = () => {
  let { transactionLineChartSeries, transactionLineChartOptions } =
    useReactApexChart();
    return (
         <div>
            <div className="card mt-28">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg">Purchase</h6>
                        <div className="">
                            <select className="form-select form-select-sm w-auto bg-base border text-secondary-light" defaultValue="Yearly">
                                <option value="Yearly">Yearly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Today">Today</option>
                            </select>
                        </div>
                    </div>
                    <ul className="d-flex flex-wrap align-items-center justify-content-between gap-3 -mb-5">
                        <li className="d-flex align-items-center gap-2">
                            <span className="w-16-px h-16-px radius-2 bg-primary-600" />
                            <span className="text-secondary-light text-lg fw-normal">
                                Total Gain: {" "}
                                <span className="text-primary-light fw-bold text-lg">
                                    $50,000
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div id="transactionLineChart" />
                    <ReactApexChart options={transactionLineChartOptions} series={transactionLineChartSeries} type="line"
                        height={290} />
                </div>
            </div>
        </div>
    );
};

export default TotalStats;
