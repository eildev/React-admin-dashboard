import { CiCirclePlus } from "react-icons/ci";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Unit = () => {

    const [showModal, setShowModal] = useState(false);



    return (
        <>
            <Breadcrumb section="Brand" title="Category" />
            <div className="d-flex justify-content-end align-items-end">
                <CiCirclePlus onClick={() => setShowModal(true)} className="addModal" />
            </div>
            <DynamicTable columns={columns} data={mockProducts} tableName={'Brand Table'} />
            <Modal size="md" show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <h3 className="modal-title">Add Unit</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Unit Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">
                                Related To Unit</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Operator</label>
                            <select className="form-select">
                                <option disabled selected>Select Operatorm Sign</option>
                                <option value="UK">UK</option>
                                <option value="BD">BD</option>
                                <option value="EU">EU</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Related By Value</label>
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

export default Unit;