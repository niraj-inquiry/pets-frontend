import React from 'react'

const DiagnosisHistoricTab = () => {
  return (
    <>
    <div className="container">
         {/* Filter Section */}
         <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <label className="fw-semibold mb-2">Date Range</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="fw-semibold mb-2">Appointment Type</label>
                  <select className="form-select">
                    <option selected="">All Appointment Types</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="fw-semibold mb-2">Search Diagnosis</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by diagnosis name..."
                  />
                </div>
              </div>
              {/* Diagnosis Card 1 */}
              <div className="card p-4 mb-3">
                <div className="head d-flex justify-content-between">
                  <div>
                    <h5 className="fw-semibold">Acute Glaucoma</h5>
                    <small>Regular Checkup - Oct 15, 2023</small>
                  </div>
                  <button
                    className="btn fw-semibold"
                    style={{
                      backgroundColor: "#f3ff47",
                      height: "fit-content",
                    }}>
                    <i className="fa-solid fa-clone me-1" /> Copy to Current
                  </button>
                </div>
                <div className="row g-3 mt-2">
                  <div className="col-md-4">
                    <label className="fw-semibold mb-2">Affected Eye</label>
                    <select className="form-select">
                      <option selected="">Right Eye</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="fw-semibold mb-2">Severity</label>
                    <select className="form-select">
                      <option selected="">Moderate</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="fw-semibold mb-2">IOP Readings</label>
                    <div className="d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={28}
                      />
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={16}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="fw-semibold mb-2">Notes</label>
                    <textarea
                      className="form-control"
                      rows={2}
                      defaultValue={
                        "Patient presented with elevated intraocular pressure in right eye. Recommend immediate treatment and follow-up within 48 hours."
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Diagnosis Card 2 */}
              <div className="card p-4 mb-3">
                <div className="head d-flex justify-content-between">
                  <div>
                    <h5 className="fw-semibold">Conjunctivitis</h5>
                    <small>Emergency Visit - Sep 30, 2023</small>
                  </div>
                  <button
                    className="btn fw-semibold"
                    style={{
                      backgroundColor: "#f3ff47",
                      height: "fit-content",
                    }}>
                    <i className="fa-solid fa-clone me-1" /> Copy to Current
                  </button>
                </div>
                <div className="row g-3 mt-2">
                  <div className="col-md-4">
                    <label className="fw-semibold mb-2">Affected Eye</label>
                    <select className="form-select">
                      <option selected="">Both Eyes</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="fw-semibold mb-2">Severity</label>
                    <select className="form-select">
                      <option selected="">Moderate</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="fw-semibold mb-2">Discharge Type</label>
                    <select className="form-select">
                      <option selected="">Mucoid</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="fw-semibold mb-2">Notes</label>
                    <textarea
                      className="form-control"
                      rows={2}
                      defaultValue={
                        "Bacterial conjunctivitis with moderate inflammation in both eyes. Prescribed antibiotic eye drops. Follow-up in 5 days."
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Previous Diagnosis List */}
              <div className="card p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="fw-bold mb-0">Acute Glaucoma</h6>
                    <small>Regular Checkup - Oct 15, 2023</small>
                    <br />
                  </div>
                  <button className="btn btn-link text-decoration-none p-0">
                    <i className="fa-solid fa-clone me-1" />
                    Copy to Current
                  </button>
                </div>
                <small className="mt-2">
                  Notes: Patient presented with elevated intraocular pressure
                </small>
              </div>
              <div className="card p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="fw-bold mb-0">Conjunctivitis</h6>
                    <small>Emergency Visit - Sep 30, 2023</small>
                    <br />
                  </div>
                  <button className="btn btn-link text-decoration-none p-0">
                    <i className="fa-solid fa-clone me-1" />
                    Copy to Current
                  </button>
                </div>
                <small className="mt-2">
                  Notes: Bacterial conjunctivitis with moderate inflammation
                </small>
              </div>
              <div className="card p-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="fw-bold mb-0">Diabetic Retinopathy</h6>
                    <small>Follow-up - Sep 15, 2023</small>
                    <br />
                  </div>
                  <button className="btn btn-link text-decoration-none p-0">
                    <i className="fa-solid fa-clone me-1" />
                    Copy to Current
                  </button>
                </div>
                <small className="mt-2">
                  Notes: Early signs of diabetic retinopathy detected
                </small>
              </div>
    </div>
    </>
  )
}

export default DiagnosisHistoricTab