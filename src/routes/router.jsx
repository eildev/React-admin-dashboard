import { createBrowserRouter } from "react-router-dom";

// Importing page components for different routes
import AddProduct from "../pages/store-managment/AddProduct";
import MainLayouts from "../layouts/MainLayouts";
import SaleDashboard from "../pages/dashboard/SaleDashboard";
import ExpenseDashboard from "../pages/dashboard/ExpenseDashboard";
import PayrollDashboard from "../pages/dashboard/PayrollDashboard";
import Category from "../pages/store-managment/Category";
import Subcategory from "../pages/store-managment/Subcategory";
import Brand from "../pages/store-managment/Brand";
import Unit from "../pages/store-managment/Unit";
import ProductSize from "../pages/store-managment/ProductSize";
import Supplier from "../pages/store-managment/Supplier";
import Customer from "../pages/store-managment/Customer";
import PrimaryLedger from "../pages/ledger/PrimaryLedger";
import ChildLedger from "../pages/ledger/ChildLedger";
import SubLedger from "../pages/ledger/SubLedger";
import Bank from "../pages/accounting/Bank";
import LoanManagement from "../pages/accounting/LoanManagement";
import Transaction from "../pages/accounting/Transaction";
import ConveyanceBill from "../pages/accounting/ConveyanceBill";
import ConveyanceReport from "../pages/accounting/ConveyanceReport";
import SalarySheet from "../pages/accounting/SalarySheet";
import MainDashboard from "../pages/dashboard/main-dashboard/MainDashboard";
import AssetDashboard from "../pages/dashboard/asset-dashboard/AssetDashboard";
import Purchase from "../pages/store-managment/purchase/Purchase";
import ManagePurchase from "../pages/store-managment/purchase/ManagePurchase";
import ExpensesManagement from "../pages/Expenses/ExpensesManagement";
import ProductManagement from "../pages/store-managment/ProductManagement";

// Creating the router configuration for the application
export const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <MainLayouts />, // Main layout for the site
    children: [
      {
        path: "/", // Main Dashboard
        element: <MainDashboard />,
      },
      {
        path: "/sale-dashboard", // Sale Dashboard
        element: <SaleDashboard />,
      },
      {
        path: "/asset-dashboard", // Asset Dashboard
        element: <AssetDashboard />,
      },
      {
        path: "/expense-dashboard", // Expense Dashboard
        element: <ExpenseDashboard />,
        // element: <ExpensesManagement />,
      },
      {
        path: "/payroll-dashboard", // Payroll Dashboard
        element: <PayrollDashboard />,
      },
      {
        path: "/add-product", // Add Product Page
        element: <AddProduct />,
      },
      {
        path: "/manage-product", // Manage Product Page
        element: <ProductManagement />,
      },
      {
        path: "/category", // Product Category Page
        element: <Category />,
      },
      {
        path: "/subcategory", // Product Subcategory Page
        element: <Subcategory />,
      },
      {
        path: "/brand", // Product Brand Page
        element: <Brand />,
      },
      {
        path: "/unit", // Product Unit Page
        element: <Unit />,
      },
      {
        path: "/size", // Product Size Page
        element: <ProductSize />,
      },
      {
        path: "/supplier", // Supplier Management Page
        element: <Supplier />,
      },
      {
        path: "/customer", // Customer Management Page
        element: <Customer />,
      },
      {
        path: "/primary-ledger", // Primary Ledger Page
        element: <PrimaryLedger />,
      },
      {
        path: "/ledger", // Child Ledger Page
        element: <ChildLedger />,
      },
      {
        path: "/sub-ledger", // Sub Ledger Page
        element: <SubLedger />,
      },
      {
        path: "/bank", // Bank Management Page
        element: <Bank />,
      },
      {
        path: "/loan-management", // Loan Management Page
        element: <LoanManagement />,
      },
      {
        path: "/transaction", // Transaction Page
        element: <Transaction />,
      },
      {
        path: "/conveyance-bill", // Conveyance Bill Page
        element: <ConveyanceBill />,
      },
      {
        path: "/conveyance-report", // Conveyance Report Page
        element: <ConveyanceReport />,
      },
      {
        path: "/salary-sheet", // Salary Sheet Page
        element: <SalarySheet />,
      },
      {
        path: "/product-purchase", // Salary Sheet Page
        element: <Purchase />,
      },
      {
        path: "/manage-purchase", // Salary Sheet Page
        element: <ManagePurchase />,
      },
      // {
      //   path: "/expenses",
      //   element: <ExpensesManagement></ExpensesManagement>,
      // },
      {
        path: "/today-report",
        element: <h1>/today-report</h1>,
      },
      {
        path: "/product-info-report",
        element: <h1>/product-info-report</h1>,
      },
      {
        path: "/customar-due-report",
        element: <h1>/customar-due-report</h1>,
      },
      {
        path: "/Supplier-due-report",
        element: <h1>/Supplier-due-report</h1>,
      },
      {
        path: "/top-products",
        element: <h1>/top-products</h1>,
      },
      {
        path: "/purchase-report",
        element: <h1>/purchase-report</h1>,
      },
      {
        path: "/customart-ledger",
        element: <h1>/customart-ledger</h1>,
      },
      {
        path: "/supplier-ledger",
        element: <h1>/supplier-ledger</h1>,
      },
      {
        path: "/account-transaction",
        element: <h1>/account-transaction</h1>,
      },
      {
        path: "/expense-report",
        element: <h1>/expense-report</h1>,
      },
      {
        path: "/employee-salary-report",
        element: <h1>/employee-salary-report</h1>,
      },
      {
        path: "/sms-report",
        element: <h1>/sms-report</h1>,
      },
      {
        path: "/monthly-report",
        element: <h1>/monthly-report</h1>,
      },
      {
        path: "/yearly-report",
        element: <h1>/yearly-report</h1>,
      },
    ],
  },
]);
