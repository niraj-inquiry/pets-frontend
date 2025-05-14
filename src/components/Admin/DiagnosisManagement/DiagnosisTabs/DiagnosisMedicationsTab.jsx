import React, { useState } from "react";
import DiagnosisMedicationForm from "./DiagnosisMedicationForm";

const DiagnosisMedicationsTab = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  
    const handleCloseModal = () => {
      setAddModalOpen(false);
    };
  
    const handelOpenModal = () =>{
      setAddModalOpen (true)
    }
  return (
    <>
      <div className="container">
        {/* Medications Section */}
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="card p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Current Medications</h5>
                <button
                  className="btn fw-semibold"
                  style={{ backgroundColor: "#f3ff47" }}
                  onClick={handelOpenModal}
                  >
                  + Add Medication
                </button>
              </div>
              <div className="row g-3">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="medication-card border">
                    <h6 className="fw-bold mb-1">Latanoprost</h6>
                    <p className="mb-1">1 drop in affected eye(s) at bedtime</p>
                    <small>Prescribed: Oct 21, 2023</small>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="medication-card border">
                    <h6 className="fw-bold mb-1">Artificial Tears</h6>
                    <p className="mb-1">1-2 drops as needed</p>
                    <small>Prescribed: Oct 21, 2023</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Notes Section */}
        <h5 className="fw-bold mb-3">Recent Notes</h5>
        <p>
          Max is maintaining a healthy weight and showing good energy levels.
          Vaccine boosters scheduled for next month. Continue current preventive
          medications.
        </p>
        <small className="text-muted">
          Dr. Sarah Wilson &nbsp; • &nbsp; Oct 21, 2023
        </small>
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
                  <DiagnosisMedicationForm />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}></div>
        </>
      )}
    </>
  );
};

export default DiagnosisMedicationsTab;
