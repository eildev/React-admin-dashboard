import { Icon } from "@iconify/react/dist/iconify.js";
import useReactApexChart from "../../../data/useReactApexChart";
import ReactApexChart from "react-apexcharts";




const SalesChart = () => {


    let { enrollmentChartOptions, enrollmentChartSeries } = useReactApexChart();

    return (
        <div className='col-xxl-12'>
        <div className='card h-100'>
          <div className='card-header'>
            <div className='d-flex align-items-end flex-wrap gap-2 justify-content-end'>
              <select className='form-select form-select-sm w-auto bg-base border-0 text-secondary-light'>
                <option>This Month</option>
                <option>This Week</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
          <div className='card-body p-24'>

            <div id='enrollmentChart' className='apexcharts-tooltip-style-1'>
              <ReactApexChart
                options={enrollmentChartOptions}
                series={enrollmentChartSeries}
                type='area'
                height={260}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default SalesChart;