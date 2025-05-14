import React, { useState } from 'react'
import ImageScanAddNewReport from './ImageScanAddNewReport';

const ImagingScan = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
  
    const handleCloseModal = () => {
      setAddModalOpen(false);
    };
  
    const handelOpenModal = () =>{
      setAddModalOpen (true)
    }

  return (
    <>
    <div className="row">
          {/* Left Column */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="pet-details-profile mt-5">
                <img
                  src="https://i.ibb.co/wNKhkgFk/images.jpg"
                  alt="Max"
                  className="pet-details-avatar border"
                />
                <h5 className="mb-1">Max</h5>
                <p className="text-muted mb-2">Patient ID: #12345</p>
                <small className="text-muted d-block">
                  Golden Retriever / Male
                </small>
                <span className="badge text-bg-success mt-2 rounded-pill px-3">
                  Active Patient
                </span>
              </div>
              <hr />
              <div className="pet-info mx-3">
                <h6>Today's Visit Details</h6>
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <div>
                      <span className="text-muted">Appointment ID:</span> <br />
                      <span className="fw-semibold">#AP123456</span>
                    </div>
                    <div>
                      <span className="text-muted">Visit Date:</span> <br />
                      <span className="fw-semibold">Oct 21, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pet-details-info">
                <span className="mb-3 text-muted">Visit Type</span> <br />
                <span className="fw-semibold">Regular Checkup</span>
              </div>
              <div className="pet-details-info mb-4">
                <span className="mb-3 text-muted">Symptoms</span> <br />
                <span className="fw-semibold">
                  Eye irritation and mild discomfort in right eye
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card bg-white p-3">
              <div className="d-flex justify-content-between">
                <h5>Image &amp; Scan Reports</h5>
                <button
                  className="btn fw-semibold"
                  style={{ backgroundColor: "#f3ff47" }}
                  onClick={handelOpenModal}
                >
                  + Add New Report
                </button>
              </div>
              <hr />
              {/* Current Medications */}
              <div className="medication-card mt-4 card">
                <div className="d-flex justify-content-between">
                  <div className="medication-title">Retinal Scan</div>
                  <div className="medication-actions">
                    <i className="fa-solid fa-download text-success bg-light p-2 rounded" />
                    <i className="fa-solid fa-eye text-primary bg-light p-2 ms-2 rounded" />
                  </div>
                </div>
                <div className="medication-details">Oct 21, 2023</div>
              </div>
              <div className="medication-card mt-2 card">
                <div className="d-flex justify-content-between">
                  <div className="medication-title">OCT Scan</div>
                  <div className="medication-actions">
                    <i className="fa-solid fa-download text-success bg-light p-2 rounded" />
                    <i className="fa-solid fa-eye text-primary bg-light p-2 ms-2 rounded" />
                  </div>
                </div>
                <div className="medication-details">Oct 21, 2023</div>
              </div>
            </div>
          </div>
        </div>

        
        {addModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Add Medication</h4>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                <ImageScanAddNewReport />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}
    </>
  )
}

export default ImagingScan