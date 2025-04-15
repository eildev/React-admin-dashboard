import ReactApexChart from "react-apexcharts";
import useReactApexChart from "../../../data/useReactApexChart";


const OverallReport = () => {
  let { userOverviewDonutChartOptionsTwo, userOverviewDonutChartSeriesTwo } =
    useReactApexChart();
  return (
        <div className=''>
      <div className='card'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg'>Overall Report</h6>
            <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
        </div>
        <div className='card-body p-24 mt-40'>
          <div className='mt-13'>
            <div
              id='userOverviewDonutChart'
              className='mx-auto apexcharts-tooltip-z-none'
            >
              <ReactApexChart
                options={userOverviewDonutChartOptionsTwo}
                series={userOverviewDonutChartSeriesTwo}
                type='donut'
                height={270}
              />
            </div>
          </div>
          <div className='d-flex flex-wrap gap-20 justify-content-center mt-48'>
            <div className='d-flex align-items-center gap-8'>
              <span className='w-16-px h-16-px radius-2 bg-primary-600' />
              <span className='text-secondary-light'>Purchase</span>
            </div>
            <div className='d-flex align-items-center gap-8'>
              <span className='w-16-px h-16-px radius-2 bg-lilac-600' />
              <span className='text-secondary-light'>Sales</span>
            </div>
            <div className='d-flex align-items-center gap-8'>
              <span className='w-16-px h-16-px radius-2 bg-warning-600' />
              <span className='text-secondary-light'>Expense</span>
            </div>
            <div className='d-flex align-items-center gap-8'>
              <span className='w-16-px h-16-px radius-2 bg-success-600' />
              <span className='text-secondary-light'>Gross Profit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallReport;
