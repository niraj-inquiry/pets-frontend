import React from 'react'

const History = () => {
  return (
    <>
    <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-3">
              {/* Recent Visits */}
              <h6 className="mb-3">Recent Visits</h6>
              <div className="pet-details-visit">
                <div className="d-flex align-items-start bg-light p-3 rounded">
                  <div className="pet-details-visit-icon bg-primary bg-opacity-10 text-primary">
                    <i className="fa-solid fa-stethoscope" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0">General Checkup</h6>
                      <span className="text-muted">Oct 15, 2023</span>
                    </div>
                    <p className="mb-2 text-muted">Dr. Sarah Wilson</p>
                    <span className="pet-details-badge pet-details-badge-success fw-semibold">
                      Completed
                    </span>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="text-muted fw-normal">
                          Appointment ID:
                        </h6>
                        <h6>#APP-2023-1015</h6>
                      </div>
                      <div className="col-md-6">
                        Visit Type:
                        <h6>Regular Checkup</h6>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h6 className="text-muted fw-normal">Notes:</h6>
                      <small>
                        Routine wellness check, blood pressure normal,
                        prescribed routine medications.
                      </small>
                    </div>
                    <div className="mt-2">
                      <a
                        href=""
                        className="btn btn-link btn-sm text-decoration-none p-0 me-3"
                      >
                        <i className="fa-solid fa-file-lines" /> View Details
                      </a>
                      <a
                        href=""
                        className="btn btn-link btn-sm text-decoration-none text-success p-0"
                        download="pdf"
                      >
                        <i className="fa-solid fa-download" /> Download Report
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start bg-light p-3 rounded mx-3 mb-3">
                <div className="pet-details-visit-icon bg-opacity-10 pet-details-action-purple">
                  <i className="fa-solid fa-vial" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">Blood Test</h6>
                    <span className="text-muted">Sep 28, 2023</span>
                  </div>
                  <p className="mb-2 text-muted">Dr. James Miller</p>
                  <span className="pet-details-badge pet-details-badge-success fw-semibold">
                    Results Available
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start bg-light p-3 rounded mx-3">
                <div className="pet-details-visit-icon bg-opacity-10 pet-details-action-yellow">
                  <i className="fa-solid fa-syringe" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">Vaccination</h6>
                    <span className="text-muted">Sep 10, 2023</span>
                  </div>
                  <p className="mb-2 text-muted">Dr. Nurse Sarah</p>
                  <span className="pet-details-badge pet-details-badge-success fw-semibold">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              {/* Medical History */}
              <h6 className="mb-3 fw-bold">Medical History</h6>
              <div>
                <h6 className="fw-semibold">Allergies</h6>
                <p>Penicillin, Pollen</p>
              </div>
              <hr />
              <div>
                <h6 className="w-semibold">Chronic Conditions</h6>
                <p>Hypertension, Type 2 Diabetes</p>
              </div>
              <hr />
              <div>
                <h6 className="fw-semibold">Previous Surgeries</h6>
                <p>Appendectomy (2015), Knee Surgery (2018)</p>
              </div>
              <hr />
              <div>
                <h6 className="fw-semibold">Current Medications</h6>
                <p>Metformin 500mg, Lisinopril 10mg</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default History