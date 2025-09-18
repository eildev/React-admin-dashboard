import { CiCirclePlus } from "react-icons/ci";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Bank = () => {

    const [showModal, setShowModal] = useState(false);



    return (
        <>
            <Breadcrumb section="Bank" title="Category" />
            <div className="d-flex justify-content-end align-items-end">
                <CiCirclePlus onClick={() => setShowModal(true)} className="addModal" />
            </div>
            <DynamicTable columns={columns} data={mockProducts} tableName={'Bank Table'} />
            <Modal size="md" show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <h3 className="modal-title">Add Bank</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Account Name <span className="star">*</span></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">
                            Branch Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Manager Name/Owner Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">
                            Account Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Opening Balance <span className="star">*</span></label>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Bank;