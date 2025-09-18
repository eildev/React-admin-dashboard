import { CiCirclePlus } from "react-icons/ci";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Supplier = () => {

  const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Breadcrumb section="Supplier" title="Supplier" />
               <div className="d-flex justify-content-end align-items-end">
                            <CiCirclePlus onClick={() => setShowModal(true)} className="addModal" />
                        </div>
            <DynamicTable columns={columns} data={mockProducts} tableName={'Supplier Table'} />
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <h3 className="modal-title">Add Supplier</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Supplier Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Supplier Due (সাপ্লায়ার আপানার থেকে পাবে)</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Opening Receivable (সাপ্লায়ার থেকে আপনি পাবেন)</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary">Save Supplier</Button>
        </Modal.Footer>
      </Modal>
        </>
    );
};

export default Supplier;