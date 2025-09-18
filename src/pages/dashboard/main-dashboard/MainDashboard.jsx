// Importing necessary components

import MainDashboardCards from "./section/MainDashboardCards";
import ProfitLoss from "./section/ProfitLoss";
import SalesAnalytics from "./section/SalesAnalytics";
import TotalCostInOut from "./section/TotalCostInOut";
import TotalStats from "./section/TotalStats";

// import { Breadcrumb } from "react-bootstrap";
// import TotalTopStats from "./section/TotalTopStats";
// import ProfitLoss from "./section/ProfitLoss";
// import SalesAnalytics from "./section/SalesAnalytics";
// import TotalCostInOut from "./section/TotalCostInOut";
// import PurchaseReport from "./section/PurchaseReport";
// import TotalStats from "./section/TotalStats";
// import Revenue from "./section/Revenue";

// MainDashboard functional component
// const MainDashboard = () => {
// return (
//     <>
{/* Breadcrumb component to display page navigation */ }
// <Breadcrumb section="Dashboard" title="Main Dashboard" />
{/* Grid layout for displaying the dashboard cards */ }

{/* <TotalTopStats />
            <section className="row gy-4 mt-1">
                <ProfitLoss />
                <SalesAnalytics />
                <TotalCostInOut />
                <PurchaseReport />
                <TotalStats />
                <Revenue />
            </section> */}
// </>


// );


// };



// Exporting the MainDashboard component for use in other parts of the application
// export default MainDashboard;




const MainDashboard = () => {
    return (
        <div>
            <MainDashboardCards></MainDashboardCards>
            <div className="row">
                <div className="col-12 col-md-7 mb-4">
                    <ProfitLoss />
                </div>
                <div className="col-12 col-md-5 mb-4">
                    <SalesAnalytics />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 mb-4">
                    <TotalCostInOut></TotalCostInOut>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <TotalStats></TotalStats>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;