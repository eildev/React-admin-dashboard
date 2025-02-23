import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CiSquarePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddProduct = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [variation, setVariation] = useState(false);
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



    const [variations, setVariations] = useState([{ id: Date.now() }]); // প্রাথমিকভাবে একটি variation দিয়ে শুরু

    const addVariation = () => {
      setVariations([...variations, { id: Date.now() }]); // নতুন variation যোগ করা
    };
  
    const deleteVariation = (id) => {
      setVariations(variations.filter(variation => variation.id !== id)); // নির্দিষ্ট variation মুছে ফেলা
    };

    return (
        <>
            <Breadcrumb section="New Product" />
            {/* <h5>Add Product</h5> */}
            <from className="from">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Add Product</h5>
                        </div>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label className="form-label">Product Name <span className="star">*</span></label>
                                    <input
                                        type="text"
                                        name="#0"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Category <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="none">
                                        <option >Select Category</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Subcategory <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="none">
                                        <option >Select Subcategory</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Brand <span className="star">*</span></label>

                                    <select className="form-select" defaultValue="US">
                                        <option value="US">US</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                    {/* <input
                                    type="text"
                                    name="#0"
                                    className="form-control"
                                    placeholder="+1 (555) 000-0000"
                                /> */}

                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Size <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="00.00">
                                        <option >Select Size</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Unit <span className="star">*</span></label>
                                    <select className="form-select" defaultValue="00.00">
                                        <option >Select Unit</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Model No</label>
                                    <input
                                        type="text"
                                        name="#0"
                                        className="form-control"
                                        placeholder="Enter Model No"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Cost Price <span className="star">*</span></label>
                                    <input
                                        type="number"
                                        name="#0"
                                        className="form-control"
                                        placeholder="00.00"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">B2C Price <span className="star">*</span></label>
                                    <input
                                        type="number"
                                        name="#0"
                                        className="form-control"
                                        placeholder="00.00"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">B2B Price <span className="star">*</span></label>
                                    <input
                                        type="number"
                                        name="#0"
                                        className="form-control"
                                        placeholder="00.00"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Origin</label>
                                    <select className="form-select" defaultValue="none">
                                        <option >Select Origin</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Description</label>
                                    <textarea rows={3} className="form-control" placeholder="Enter Description"></textarea>
                                </div>
                                {/* <div className="col-12">
                            <button type="submit" className="btn btn-primary-600">
                                Submit
                            </button>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* extra info */}
                <div className=" extra">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Extra Info</h5>
                        </div>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <label className="form-label">Color</label>
                                    <select className="form-select" defaultValue="none">
                                        <option >Select Color</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Quality</label>
                                    <select className="form-select" defaultValue="none">
                                        <option >Select Quality</option>
                                        <option value="UK">UK</option>
                                        <option value="BD">BD</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Current Stock</label>
                                    <input
                                        type="number"
                                        name="#0"
                                        className="form-control"
                                        placeholder="Enter Current Stock"
                                    />
                                </div>
                                <div className="col-12 ">
                                    <label className="form-label">Product Image</label>
                                    <span className="note">Note: Image not required. If you add a category image please add a 400 X 400 size image.</span>
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
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary-600 me-10">
                                        Submit
                                    </button>
                                    <button onClick={() => { setVariation(!variation)}}  className="btn btn-primary-400">
                                        Add Variation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </from>
            {/* variation table */}
            {
                variation &&
                <div className="col-lg-12 mt-20 custom-scrollbar">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Add New Variation</h5>
                  </div>
                  <h6 className="proName ms-20 mt-20">Product Name : Something</h6>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table bordered-table mb-0">
                        <thead>
                          <tr>
                            <th>
                            <CiSquarePlus className="variation_plus" onClick={addVariation} />
                            </th>
                            <th scope="col">Current Stock</th>
                            <th scope="col">Cost Price</th>
                            <th scope="col">B2B Price</th>
                            <th scope="col">B2C Price</th>
                            <th scope="col">Size</th>
                            <th scope="col">Color</th>
                            <th scope="col">Model No</th>
                            <th scope="col">Quality</th>
                            <th scope="col">Image</th>
                          </tr>
                        </thead>
                        <tbody>
                          {variations.map(variation => (
                            <tr key={variation.id}>
                              <td>
                                <RiDeleteBin6Line className="variation_delete" onClick={() => deleteVariation(variation.id)} /> {/* নির্দিষ্ট variation মুছে ফেলার জন্য */}
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name={`stock_${variation.id}`}
                                  className="form-control variation_inputs"
                                  placeholder="Stock"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name={`costPrice_${variation.id}`}
                                  className="form-control variation_inputs"
                                  placeholder="Price"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name={`b2bPrice_${variation.id}`}
                                  className="form-control variation_inputs"
                                  placeholder="B2B Price"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name={`b2cPrice_${variation.id}`}
                                  className="form-control variation_inputs"
                                  placeholder="B2C Price"
                                />
                              </td>
                              <td>
                                <select className="form-select variation_inputs" defaultValue="none">
                                  <option>Select Size</option>
                                  <option value="UK">UK</option>
                                  <option value="BD">BD</option>
                                  <option value="EU">EU</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-select variation_inputs" defaultValue="none">
                                  <option>Select Color</option>
                                  <option value="Red">Red</option>
                                  <option value="Blue">Blue</option>
                                  <option value="Green">Green</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name={`modelNo_${variation.id}`}
                                  className="form-control variation_inputs"
                                  placeholder="Model No"
                                />
                              </td>
                              <td>
                                <select className="form-select variation_inputs" defaultValue="none">
                                  <option>Select Quality</option>
                                  <option value="High">High</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Low">Low</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="file"
                                  className="form-control w-auto form-control-lg variation_img"
                                  id={`image_${variation.id}`}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* card end */}
              </div>

            }
        </>
    );
};

export default AddProduct;