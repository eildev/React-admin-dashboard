import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

const Purchase = () => {
    return (
        <>
            <Breadcrumb section="Purchase Productst" title="Product Purchase" />
            {/* <h5>Product Purchase</h5> */}
            <form action="" className="mb-20">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Purchase Products</h5>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-md-3">
                  <label className="form-label">Supplier</label>
                  <select className="form-select" defaultValue="none">
                    <option>Select Supplier</option>
                    <option value="UK">UK</option>
                    <option value="BD">BD</option>
                    <option value="EU">EU</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Purchase Date</label>
                  <input
                    type="date"
                    name="#0"
                    className="form-control"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Products</label>
                  <select className="form-select" defaultValue="none">
                    <option>Select Product</option>
                    <option value="UK">UK</option>
                    <option value="BD">BD</option>
                    <option value="EU">EU</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Invoice File/Picture upload</label>

                  <input
                    type="file"
                    name="#0"
                    className="form-control variation_img"
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
        </>
    );
};

export default Purchase;