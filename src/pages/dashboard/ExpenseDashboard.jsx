import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ExpenseCart from "./ExpenseDashboardComponents/ExpenseCart";
import ExpenseTable from "./ExpenseDashboardComponents/ExpenseTable";
import MoneyFlowChart from "./ExpenseDashboardComponents/MoneyFlowChart";
import OverallReport from "./ExpenseDashboardComponents/OverallReport";
import PaymentStatus from "./ExpenseDashboardComponents/PaymentStatus";


const ExpenseDashboard = () => {
    return (
        <>
            <Breadcrumb section="Dashboard" title="Expense Dashboard" />
            <h5>Expense Dashboard</h5>
            <ExpenseCart></ExpenseCart>
            <MoneyFlowChart></MoneyFlowChart>
            <div className="row justify-contect-center align-item-center mt-3 mb-3">


                <div className="col-lg-6">
                    <OverallReport></OverallReport>
                </div>
                <div className="col-lg-6">
                    <PaymentStatus></PaymentStatus>
                </div>
            </div>
            <ExpenseTable></ExpenseTable>
        </>
    );
};

export default ExpenseDashboard;
