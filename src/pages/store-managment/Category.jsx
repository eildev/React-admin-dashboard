import { CiCirclePlus } from "react-icons/ci";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DynamicTable from "../../components/table/DynamicTable";
import { columns, mockProducts } from "../../data/data";
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";

const Category = () => {

    const [showModal, setShowModal] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    // const [variation, setVariation] = useState(false);
    const fileInputRef = useRef(null);


    const handleFileChange = (e) => {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            setImagePreview(src);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);


    return (
        <>
            <Breadcrumb section="Category" title="Category" />
            <div className="d-flex justify-content-end align-items-end">
                <CiCirclePlus onClick={() => setShowModal(true)} className="addModal" />
            </div>
            <DynamicTable columns={columns} data={mockProducts} tableName={'Category Table'} />
            <Modal size="md" show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <h3 className="modal-title">Add Category</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Category Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 ">
                            <label className="form-label">Category Image</label>
                            <span className="note">Note:  Image not required. If you add a category image please add a 400 X 400 size image.</span>
                            <div className="col-md-12">
                                <div className="card p-0">
                                    {/* <div className="card-header border-bottom bg-base py-16 px-24">
                                <h6 className="text-lg fw-semibold mb-0">Image Upload</h6>
                            </div> */}
                                    <div className="card-body img_div p-24">
                                        <div className="upload-image-wrapper align-items-center gap-3">
                                            {/* Image preview section */}
                                            {imagePreview ? (
                                                <div className="uploaded-img position-relative border upImg input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                                                    <button
                                                        type="button"
                                                        onClick={removeImage}
                                                        className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                                                        aria-label="Remove uploaded image"
                                                    >
                                                        <Icon
                                                            icon="radix-icons:cross-2"
                                                            className="text-xl text-danger-600"
                                                        ></Icon>
                                                    </button>
                                                    <img
                                                        id="uploaded-img__preview "
                                                        className="w-100 h-50 object-fit-contain"
                                                        src={imagePreview}
                                                        alt="Preview"
                                                    />
                                                </div>
                                            ) : (
                                                <label
                                                    className="upload-file upImg border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                                    htmlFor="upload-file"
                                                >
                                                    <Icon
                                                        icon="solar:camera-outline"
                                                        className="text-xl text-secondary-light"
                                                    ></Icon>
                                                    <span className="fw-semibold text-secondary-light">Upload</span>
                                                </label>
                                            )}

                                            {/* Always render the input, but hide it */}
                                            <input
                                                id="upload-file"
                                                type="file"
                                                onChange={handleFileChange}
                                                hidden
                                                ref={fileInputRef}
                                                accept="image/*" // Optional: restrict to image files
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Category;