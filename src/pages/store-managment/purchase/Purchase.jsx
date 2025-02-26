import { useState } from "react";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { Modal, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const VariantModal = ({ show, onClose, variants, onSelect }) => {
  const [selectedVariants, setSelectedVariants] = useState([]);

  const handleCheckboxChange = (variant) => {
    setSelectedVariants((prev) =>
      prev.includes(variant)
        ? prev.filter((v) => v !== variant)
        : [...prev, variant]
    );
  };

  const handleAddToCart = () => {
    onSelect(selectedVariants);
    setSelectedVariants([]);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <h3 className="modal-title">Select Variants</h3>
      </Modal.Header>
      <Modal.Body>
        {variants.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {variants.map((variant, index) => (
              <div
                key={index}
                onClick={() => handleCheckboxChange(variant)}
                className={` border rounded shadow-sm bg-white d-flex flex-column align-items-center text-center position-relative ${
                  selectedVariants.includes(variant) ? "border-primary" : ""
                }`}
                style={{
                  cursor: "pointer",
                  width: "140px",
                  transition: "all 0.2s ease-in-out",
                  borderWidth: "2px",
                }}
              >
                {/* Styled Checkbox */}
                <input
                  type="checkbox"
                  className="form-check-input position-absolute top-0 end-0 m-2"
                  checked={selectedVariants.includes(variant)}
                  readOnly
                />

                {/* Product Image */}
                <img
                  src={variant.image}
                  alt={variant.color}
                  className="rounded mb-2"
                  style={{
                    
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                {/* Variant Details */}
                <p className="mb-1 fw-bold text-dark">{variant.color}</p>
                <p className="mb-1 text-secondary">{variant.size}</p>
                <p className="text-success fw-bold">${variant.rate}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-center">No variants available</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" disabled={selectedVariants.length === 0} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};



const Purchase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [variants, setVariants] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const products = [
    { id: 1, name: "Product A", variants: [{ color: "Red", size: "M", rate: 50, image: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10" }, { color: "Red", size: "L", rate: 60 }] },
    { id: 2, name: "Product B", variants: [{ color: "Blue", size: "L", rate: 70 }] },
  ];

  const handleProductSelect = (event) => {
    const productId = event.target.value;
    const product = products.find((p) => p.id == productId);
    setSelectedProduct(product);
    setVariants(product?.variants || []);
    setShowModal(true);
  };

  const handleVariantSelect = (selectedVariants) => {
    const updatedCart = [...cart];
    selectedVariants.forEach((variant) => {
      const existingItem = updatedCart.find((item) => item.color === variant.color && item.size === variant.size);
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.total = existingItem.qty * existingItem.rate;
      } else {
        updatedCart.push({ ...variant, qty: 1, total: variant.rate });
      }
    });
    setCart(updatedCart);
    setShowModal(false);
  };

  const handleQtyChange = (index, qty) => {
    let updatedCart = [...cart];
    updatedCart[index].qty = qty;
    updatedCart[index].total = qty * updatedCart[index].rate;
    setCart(updatedCart);
  };

  const handleDelete = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Breadcrumb section="Purchase Products" title="Product Purchase" />
      <form className="mb-20">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Purchase Products</h5>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-md-4">
                  <label className="form-label">Supplier</label>
                  <div className="d-flex gap-3">
                    <select className="form-select" defaultValue="none">
                      <option>Select Supplier</option>
                      <option value="UK">UK</option>
                      <option value="BD">BD</option>
                      <option value="EU">EU</option>
                    </select>
                    <a href="#" className="btn btn-primary-600">Add</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Purchase Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Products</label>
                  <select className="form-select" onChange={handleProductSelect}>
                    <option disabled selected>Select Product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Invoice File/Picture upload</label>
                  <input type="file" className="form-control purchase_img" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Invoice Number</label>
                  <input type="text" className="form-control" placeholder="Enter Invoice Number" />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </form>
      <div className="card mt-20">
            <div className="card-header">
              <h5 className="card-title mb-0">Purchase Table</h5>
            </div>
            <div className="card-body">
              <table className="table bordered-table mt-4">
                <thead>
                  <tr>
                    <th>#SL</th>
                    <th>Product Color</th>
                    <th>Size</th>
                    <th>Rate</th>
                    <th>Qty</th>
                    <th>Sub Total</th>
                    <th><MdDelete className="variation_delete"/></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.color}</td>
                      <td>{item.size}</td>
                      <td>${item.rate}</td>
                      <td className="qty">
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) => handleQtyChange(index, Number(e.target.value))}
                          className="form-control"
                        />
                      </td>
                      <td>${item.total}</td>
                      <td>
                        <button onClick={() => handleDelete(index)}><MdDelete className="variation_delete"/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

      <VariantModal show={showModal} onClose={() => setShowModal(false)} variants={variants} onSelect={handleVariantSelect} />
    </>
  );
};

export default Purchase;
