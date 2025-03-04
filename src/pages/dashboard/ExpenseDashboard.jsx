import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import MoneyFlowChart from "./ExpenseDashboardComponents/MoneyFlowChart";
import OverallReport from "./ExpenseDashboardComponents/OverallReport";
import PaymentStatus from "./ExpenseDashboardComponents/PaymentStatus";


const ExpenseDashboard = () => {
    return (
        <>
            <Breadcrumb section="Dashboard" title="Expense Dashboard" />
            <h5>Expense Dashboard</h5>
            <MoneyFlowChart></MoneyFlowChart>
            <PaymentStatus></PaymentStatus>
            <OverallReport></OverallReport>
        </>
    );
};

export default ExpenseDashboard;
