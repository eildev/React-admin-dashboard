
import { columns, mockProducts } from "../../data/data";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";

const Customer = () => {
  return (
    <>
      <Breadcrumb section="Customar" title="Manage Purchase" />
      {/* <h5>Manage Purchase</h5> */}
      <form action="" className="mb-20">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Customar Customize list</h5>
            </div>
            <div className="card-body">
              <div className="row gy-3">
              <div className="col-md-4">
                  <label className="form-label">Did not purchase</label>
                  <select className="form-select">
                    <option disabled selected>Did not purchase</option>
                    <option value="UK">UK</option>
                    <option value="BD">BD</option>
                    <option value="EU">EU</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="#0"
                    className="form-control"
                  />
                </div>

                <div className="col-md-3">
                  <button type="submit" className="btn btn-primary-600">
                    Filter
                  </button>
                  <button type="submit" className="btn btn-primary-600 ms-10">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <DynamicTable columns={columns} data={mockProducts} tableName={'View Customer List'} />
    </>
  );
};

export default Customer;