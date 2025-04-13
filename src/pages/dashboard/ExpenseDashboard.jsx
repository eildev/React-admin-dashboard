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
            <div className="d-flex justify-content-center align-items-center  mt-20 mb-20" style={{ gap: "56px" }}>

                    <PaymentStatus></PaymentStatus>

                <div className="border">
                    <OverallReport></OverallReport>
                </div>
            </div>
            <ExpenseTable></ExpenseTable>
        </>
    );
};

export default ExpenseDashboard;
