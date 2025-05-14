import React, { useState } from 'react'
import AddNewReferral from './AddNewReferral';

const Referrals = () => {
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
          {/* Left Section */}
          <div className="col-md-4">
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
              <div className="pet-info mx-3 mb-5">
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
            </div>
          </div>
          {/* Medical Tests Section */}
          <div className="col-md-8">
            <div className="ocular-exam-card border">
              <h5 className="mb-3">Medical Tests</h5>
              <div className="row border">
                <div className="col-md-4">
                  <div className="my-3">
                    <label htmlFor="test-name" className="fw-semibold">
                      Test Name
                    </label>
                    <p className="my-3">Schirmer Tear Test (mm/min)</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="my-3">
                    <label htmlFor="od-value" className="fw-semibold">
                      OD (Right Eye)
                    </label>
                    <input
                      type="text"
                      id="od-value"
                      className="mt-3 input-lab-test-size"
                      placeholder="Right eye value"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="my-3">
                    <label htmlFor="os-value" className="fw-semibold">
                      OS (Left Eye)
                    </label>
                    <input
                      type="text"
                      id="os-value"
                      className="mt-3 input-lab-test-size"
                      placeholder="Left eye value"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-white p-3">
              <div className="d-flex justify-content-between">
                <h5>Referrals</h5>
                <button
                  className="btn fw-semibold"
                  style={{ backgroundColor: "#f3ff47" }}
                  onClick={handelOpenModal}
                >
                  + New Referrals
                </button>
              </div>
              <hr />
              {/* Ophthalmology Specialist Refferal */}
              <div className="medication-card mt-4 card">
                <div className="d-flex justify-content-between">
                  <div className="medication-title">
                    Ophthalmology Specialist Refferal
                  </div>
                  <div className="medication-actions">
                    <i className="fa-solid fa-download text-success bg-light p-2 rounded" />
                    <i className="fa-solid fa-eye mx-2 text-primary bg-light p-2 rounded" />
                  </div>
                </div>
                <div className="medication-details mb-2">
                  For detailed retinal examination and specialized treatment
                </div>
                <div className="medication-details">
                  Reffered to: Dr. James Wilson
                </div>
                <div className="medication-details">Date: Oct 21, 2023</div>
              </div>
              {/* Cornea Specialist Consultation */}
              <div className="medication-card card">
                <div className="d-flex justify-content-between">
                  <div className="medication-title">
                    Cornea Specialist Consultation
                  </div>
                  <div className="medication-actions">
                    <i className="fa-solid fa-download text-success bg-light p-2 rounded" />
                    <i className="fa-solid fa-eye mx-2 text-primary bg-light p-2 rounded" />
                  </div>
                </div>
                <div className="medication-details mb-2">
                  For advanced corneal treatment evalution
                </div>
                <div className="medication-details">
                  Reffered to: Dr. Sarah Chen
                </div>
                <div className="medication-details">Date: Oct 15, 2023</div>
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
                <AddNewReferral />
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

export default Referrals