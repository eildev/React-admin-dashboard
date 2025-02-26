import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";

const ProductManagement = () => {
  return (
    <>
      <Breadcrumb section="Store Management" title="Product Management" />
      {/* <h5>Manage Products</h5> */}
      
      <DynamicTable columns={columns} data={mockProducts} tableName={'Product Table'} />
    </>
  );
};

export default ProductManagement;
