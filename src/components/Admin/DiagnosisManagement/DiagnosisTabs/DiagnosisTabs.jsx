import React from "react";

const DiagnosisTabs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card p-4 mb-4">
              <h5 className="section-title">Add Diagnosis</h5>
              <div className="mb-3">
                <label className="form-label fw-bold">Right Eye</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search diagnoses for right eye..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Left Eye</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search diagnoses for left eye..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Bilateral (Both Eyes)
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search diagnoses for both eyes..."
                />
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn fw-semibold"
                  style={{ backgroundColor: "#f3ff47" }}>
                  + Add Custom
                </button>
                <button className="btn btn-outline-dark">
                  <i className="fa-solid fa-link" /> Link to Visit
                </button>
              </div>
            </div>
            <div className="card p-4">
              <h5 className="section-title">Current Diagnoses</h5>
              <div className="bg-light p-2 rounded border mt-3">
                <h6 className="fw-bold mb-2">Right Eye</h6>
                <span className="badge rounded-pill text-bg-secondary">
                  Conjunctivitis
                </span>
              </div>
              <div className="bg-light p-2 rounded border mt-3">
                <h6 className="fw-bold mb-2">Left Eye</h6>
                <span className="badge rounded-pill text-bg-secondary">
                  Keratitis
                </span>
              </div>
              <div className="bg-light p-2 rounded border mt-3">
                <h6 className="fw-bold mb-2">Bilateral</h6>
                <span className="badge rounded-pill text-bg-secondary">
                  Dry Eye Syndrome
                </span>
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h5 className="section-title">Diagnoses History</h5>
              <div className="bg-light p-2 rounded border mt-3 d-flex justify-content-between align-items-center">
                <div className="info-text px-2">
                  <h6 className="fw-bold mb-2">Right Eye: Corneal Ulcer</h6>
                  <small>Diagnosed on Jan 15, 2024</small>
                </div>
                <i className="fa-solid fa-chevron-right px-2" />
              </div>
              <div className="bg-light p-2 rounded border mt-3 d-flex justify-content-between align-items-center">
                <div className="info-text px-2">
                  <h6 className="fw-bold mb-2">Left Eye: Uveitis</h6>
                  <small>Diagnosed on Dec 10, 2023</small>
                </div>
                <i className="fa-solid fa-chevron-right px-2" />
              </div>
              <div className="bg-light p-2 rounded border mt-3 d-flex justify-content-between align-items-center">
                <div className="info-text px-2">
                  <h6 className="fw-bold mb-2">Bilateral: Glaucoma</h6>
                  <small>Diagnosed on Nov 5, 2023</small>
                </div>
                <i className="fa-solid fa-chevron-right px-2" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-4 mb-4">
              <h5 className="section-title">Related Information</h5>
              <div className="bg-light p-2 rounded border mt-2">
                <h6 className="fw-bold mb-2">Medications</h6>
                <ul className="list-unstyled mb-3">
                  <li>
                    <i className="fa-solid fa-pills text-danger me-2" />{" "}
                    Carprofen 75mg daily
                  </li>
                  <li>
                    <i className="fa-solid fa-pills text-danger me-2" />{" "}
                    Antihistamine 10mg as needed
                  </li>
                </ul>
              </div>
              <div className="bg-light p-2 rounded border mt-3">
                <h6 className="fw-bold mb-2">Recent Lab Results</h6>
                <ul className="list-unstyled">
                  <li>
                    <i
                      className="fa-solid fa-flask me-2"
                      style={{ color: "purple" }}
                    />{" "}
                    Weight: 25 kg
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-flask me-2"
                      style={{ color: "purple" }}
                    />{" "}
                    Temperature: 38.5°C
                  </li>
                </ul>
              </div>
            </div>
            <div className="card p-4">
              <h5 className="section-title">Actions</h5>
              <div className="d-grid gap-2 mt-2">
                <button
                  className="btn fw-semibold"
                  style={{ backgroundColor: "#f3ff47" }}>
                  {" "}
                  <i className="fa-solid fa-print me-2" /> Print Report
                </button>
                <button className="btn btn-outline-dark">
                  <i className="fa-solid fa-share-nodes me-2" />
                  Share with Patient
                </button>
                <button className="btn btn-outline-dark">
                  <i className="fa-solid fa-download me-2" />
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisTabs;
