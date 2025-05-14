import React from "react";

const DiagnosisDoctorNotesTab = () => {
  return (
    <>
      <div className="container">
        <div className="ocular-exam-container card p-3 my-4">
          <div className="row g-4">
            <div className="col-lg-8">
              {/* Patient Info */}
              <div className="d-flex flex-wrap justify-content-between mb-3">
                <div>
                  <strong>Patient Name</strong>
                  <br />
                  Max
                </div>
                <div>
                  <strong>Owner Name</strong>
                  <br />
                  John Smith
                </div>
                <div>
                  <strong>Patient ID</strong>
                  <br />
                  #PET599511
                </div>
                <div>
                  <strong>Age/Gender</strong>
                  <br />
                  5/Male
                </div>
              </div>
              {/* Clinical Notes */}
              <div className="mb-3">
                <label className="form-label fw-bold">Clinical Notes</label>
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Enter your clinical notes here..."
                  defaultValue={""}
                />
              </div>
              {/* Diagnosis */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    Primary Diagnosis
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter diagnosis"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ICD-10 Code"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    Secondary Diagnosis
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter diagnosis"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ICD-10 Code"
                  />
                </div>
              </div>
              {/* Prescription */}
              <label className="form-label fw-bold">Prescription</label>
              <div className="row g-2 mb-2">
                <div className="col-md-3">
                  <select className="form-select">
                    <option>Select Medication from</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dosage"
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Frequency"
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Duration"
                  />
                </div>
                <div className="col-md-3">
                  <button className="btn btn-outline-dark w-100">
                    + Add Medication
                  </button>
                </div>
              </div>
              {/* Attachments */}
              <div className="mb-4">
                <label className="form-label fw-bold">Attachments</label>
                <div className="notes-upload-box">
                  <i className="fa-solid fa-cloud-arrow-up" />
                  <br />
                  Drag and drop files here or click to upload
                </div>
              </div>
              {/* Buttons */}
              <div className="d-flex gap-2">
                <button className="btn btn-outline-dark">
                  <i className="fa-solid fa-print me-1" />
                  Print
                </button>
                <button className="btn btn-outline-dark">
                  <i className="fa-solid fa-share-nodes me-1" />
                  Share
                </button>
                <button className="btn" style={{ backgroundColor: "#faff00" }}>
                  <i className="fa-solid fa-floppy-disk me-1" /> Save &amp;
                  Submit to Invoice
                </button>
              </div>
            </div>
            {/* Right Side Panel */}
            <div className="col-lg-4">
              <div className="card p-3 mb-4">
                <h6 className="fw-bold mb-3">Diagnostics</h6>
                <p className="mb-2">
                  <span className="info-title">Weight:</span>
                  <br /> <strong> 15.2 kg</strong>
                </p>
                <p className="mb-2">
                  <span className="info-title">STT (Schirmer tear test):</span>
                  <br />
                  <strong> 15 mm/min</strong>
                </p>
                <p className="mb-2">
                  <span className="info-title">Stain (Fluorescein):</span>
                  <br /> <strong>Negative</strong>
                </p>
                <p className="mb-2">
                  <span className="info-title">Tonometry (IOP):</span>
                  <br /> <strong> 18 mmHg</strong>
                </p>
              </div>
              <div className="card p-3">
                <h6 className="fw-bold mb-3">Previous Notes</h6>
                <p className="mb-1">
                  <strong>Jan 10, 2024</strong>
                  <br />
                  Follow-up consultation for hypertension
                </p>
                <p className="mb-1">
                  <strong>Dec 28, 2023</strong>
                  <br />
                  Annual physical examination
                </p>
                <p className="mb-1">
                  <strong>Dec 15, 2023</strong>
                  <br />
                  Acute bronchitis treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisDoctorNotesTab;
