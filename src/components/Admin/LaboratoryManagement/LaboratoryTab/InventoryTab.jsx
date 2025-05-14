import React, { useState } from 'react'

function InventoryTab() {
    const allItems = [
        { id: "#INV001", name: "Blood Collection Tubes", category: "Consumables", qty: "500 units", status: "In Stock" },
        { id: "#INV002", name: "Microscope XL-500", category: "Equipment", qty: "2 units", status: "In Stock" },
        { id: "#INV003", name: "HbA1c Reagent", category: "Reagents", qty: "50 units", status: "Low Stock" },
        { id: "#INV004", name: "Test Tubes 100ml", category: "Glassware", qty: "0 units", status: "Out of Stock" },
        { id: "#INV005", name: "Syringe Pack", category: "Consumables", qty: "10 units", status: "Low Stock" },
        { id: "#INV006", name: "Pipette", category: "Equipment", qty: "5 units", status: "In Stock" },
      ];
      const [showModal, setShowModal] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const recordsPerPage = 10;
      const totalPages = Math.ceil(allItems.length / recordsPerPage);
    
      const paginatedItems = allItems.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
      );
    
      const getStatusBadge = (status) => {
        if (status === "In Stock") return <span className="badge bg-success-subtle text-success">{status}</span>;
        if (status === "Low Stock") return <span className="badge bg-warning-subtle text-warning">{status}</span>;
        if (status === "Out of Stock") return <span className="badge bg-danger-subtle text-danger">{status}</span>;
      };
  return (
    <>
     <div className="container py-4">
      <div className="card p-3">
        {/* Top Filters & Button */}
        <div className="d-flex  justify-content-between mb-3 gap-2">
          <div className="d-flex gap-2 ">
            <input type="text" className="form-control" placeholder="Search inventory..." />
            <select className="form-select">
              <option>All Categories</option>
              <option>Consumables</option>
              <option>Equipment</option>
              <option>Reagents</option>
              <option>Glassware</option>
            </select>
            <select className="form-select">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 6 months</option>
            </select>
          </div>

          <button className="btn " style={{backgroundColor:"#f3ff47"}} onClick={() => setShowModal(true)}>Add New Item</button>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.qty}</td>
                  <td>{getStatusBadge(item.status)}</td>
                  <td>
                    <span className="text-primary me-3" style={{ cursor: "pointer" }}><i class="fa-solid fa-pen-to-square"></i></span>
                    <span className="text-danger" style={{ cursor: "pointer" }}><i class="fa-solid fa-trash"></i></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between mt-2 flex-wrap">
          <p>
            Showing {(currentPage - 1) * recordsPerPage + 1} to{" "}
            {Math.min(currentPage * recordsPerPage, allItems.length)} of {allItems.length} items
          </p>

          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
                <li className={`page-item ${currentPage === num ? "active" : ""}`} key={num}>
                  <button className="page-link" onClick={() => setCurrentPage(num)}>{num}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

        {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Add New Inventory Item</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Item Name</label>
                    <input type="text" className="form-control" placeholder="Enter Item Name" />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Category</label>
                      <select className="form-select">
                        <option>Reagents</option>
                        <option>Glassware</option>
                        <option>Equipment</option>
                        <option>Consumables</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Quantity</label>
                      <input type="text" className="form-control" placeholder="Enter Quantity" />
                    </div>
                  </div>

                  <div className="mb-3 mt-3">
                    <label className="form-label fw-semibold">Unit Price</label>
                    <input type="text" className="form-control" placeholder="Enter Unit Price" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Description</label>
                    <textarea className="form-control" rows="3" placeholder="Enter Description"></textarea>
                  </div>

                  <div className="d-flex justify-content-end gap-2">
                    <button type="button" className="btn btn-outline-dark" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="submit" className="btn " style={{backgroundColor:"#f3ff47"}}>Add Item</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default InventoryTab
