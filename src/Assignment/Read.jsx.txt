import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDelete, productRead } from '../Slice/productSlice';
import { Link } from 'react-router-dom';

function Read() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(productRead());
  }, [dispatch]);

  const handleView = (product) => {
    setSelectedProduct(product);
    document.body.classList.add('modal-open'); // prevent background scroll
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div>
      <div className="container">
        <h1>Shoe List</h1>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th width={"15%"} >#ID</th>
                <th width={"20%"}>Shoe Name</th>
                <th width={"15%"}>Company Name</th>
                <th width={"20%"}>Price</th>
                <th width={"10%"}>Rating</th>
                <th width={"16%"}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products && products.map((product) => (
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <td>{product.shoename}</td>
                  <td>{product.companyname}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td>
                    <button className="btn btn-info" onClick={() => handleView(product)}>View</button>
                    <Link to={`/edit/${product.id}`} className="btn btn-success mx-2">Edit</Link>
                    <button className="btn btn-danger" onClick={() => dispatch(productDelete(product.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Bootstrap-style modal with conditional rendering */}
      {selectedProduct && (
        <>
          {/* Modal Backdrop */}
          <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>

          {/* Modal Content */}
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 1050 }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content rounded shadow-lg border-0">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold text-primary">{selectedProduct.shoename}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <div className="row g-4">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                      <div className="card border-0 bg-light rounded shadow-sm" style={{ maxWidth: "100%", overflow: "hidden" }}>
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.shoename}
                          className="card-img-top img-fluid rounded"
                          style={{ objectFit: "contain", maxHeight: "320px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group list-group-flush fs-6">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Product ID:</span>
                          <span className="text-dark">{selectedProduct.id}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Company Name</span>
                          <span className="badge bg-info text-dark">{selectedProduct.companyname}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Price</span>
                          <span>${selectedProduct.price}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary"> Rating</span>
                          <span>{selectedProduct.rating}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Feedback</span>
                          <span>{selectedProduct.feedback}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Shoe Color</span>
                          <span className="fw-bold text-success fs-5">{selectedProduct.shoecolor}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-outline-secondary px-4 py-2" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Read;