import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ExpenseTable from "./ExpenseDashboardComponents/ExpenseTable";
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
            <ExpenseTable></ExpenseTable>
        </>
    );
};

export default ExpenseDashboard;
