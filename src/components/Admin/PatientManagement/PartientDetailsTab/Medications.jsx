import React, { useState } from 'react'
import AddNewMedication from './AddNewMedication'

const Medications = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleCloseModal = () => {
    setAddModalOpen(false);
  };

  const handelOpenModal = () =>{
    setAddModalOpen (true)
  }
  return (
    <>
    <div className="medications-container card bg-white p-3 rounded">
          {/* Header with "Add Medication" Button */}
          <div className="d-flex justify-content-between">
            <h5>Current Medications</h5>
            <button
              className="btn fw-semibold"
              style={{ backgroundColor: "#f3ff47" }}
              onClick={handelOpenModal}
            >
              + Add Medication
            </button>
          </div>
          <hr />
          {/* Current Medications */}
          <div className="medication-card mt-4 card">
            <div className="d-flex justify-content-between">
              <div className="medication-title">Metformin</div>
              <div className="medication-actions">
                <i className="fa fa-print text-success bg-light p-2 rounded" />
                <i className="fa-solid fa-pen-to-square mx-2 text-primary bg-light p-2 rounded" />
                <i className="fa fa-trash text-danger bg-light p-2 rounded" />
              </div>
            </div>
            <div className="medication-details">500mg - Oral - Twice daily</div>
            <div className="medication-details">
              Prescribed by Dr. Sarah Wilson on Oct 15, 2023
            </div>
            <div className="medication-details">Notes: Take with meals</div>
            <div className="medication-details mt-2">
              <i className="fa-solid fa-file-lines me-2 medication-actions" />{" "}
              Invoice Status: Generated
            </div>
          </div>
          <div className="medication-card card">
            <div className="d-flex justify-content-between">
              <div className="medication-title">Lisinopril</div>
              <div className="medication-actions">
                <i className="fa fa-print text-success bg-light p-2 rounded" />
                <i className="fa-solid fa-pen-to-square mx-2 text-primary bg-light p-2 rounded" />
                <i className="fa fa-trash text-danger bg-light p-2 rounded" />
              </div>
            </div>
            <div className="medication-details">10mg - Oral - Once daily</div>
            <div className="medication-details">
              Prescribed by Dr. James Miller on Sep 28, 2023
            </div>
            <div className="medication-details">Notes: Take in the morning</div>
            <div className="medication-details mt-2">
              <i className="fa-solid fa-file-lines me-2 medication-actions" />{" "}
              Invoice Status: Pending
            </div>
          </div>
          {/* Medication History */}
          <div className="medication-history-table border">
            <h5>Medication History</h5>
            <div className="table table-responsive">
              <table className="table ocular-exam-table table-hover table-bordered my-4">
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Date Prescribed</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amoxicillin</td>
                    <td>500mg - 3x daily</td>
                    <td>Aug 15, 2023</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>
                      <i className="fa fa-print text-success bg-light p-2 rounded medication-actions" />
                      <i className="fa-solid fa-file-lines mx-2 text-danger bg-light p-2 rounded medication-actions" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ibuprofen</td>
                    <td>400mg - As needed</td>
                    <td>Jul 01, 2023</td>
                    <td>
                      <span className="badge bg-danger">Discontinued</span>
                    </td>
                    <td>
                      <i className="fa fa-print text-success bg-light p-2 rounded medication-actions" />
                      <i className="fa-solid fa-file-lines mx-2 text-danger bg-light p-2 rounded medication-actions" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

              {/* Add New medication Modal */}
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
                <AddNewMedication />
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

export default Medications