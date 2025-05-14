import React from "react";

const DiagnosisReferralsTab = () => {
  return (
    <>
      <div className="container">
        <div className="card p-3">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold">Recheck Recommendations</h5>
              <p className="mb-0 text-muted">
                Manage and track patient recheck schedules and recommendations
              </p>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark">
                <i className="fa-solid fa-print me-1" />
                Print
              </button>
              <button className="btn btn-outline-dark mx-1">
                <i className="fa-solid fa-download me-1" />
                Download
              </button>
              <button className="btn btn-dark">
                <i className="fa-solid fa-pen-to-square me-1" />
                Edit
              </button>
            </div>
          </div>
          {/* Pet Info */}
          <div className="border rounded p-3 mb-4 bg-white">
            <div className="row g-3">
              <div className="col-md-3">
                <strong>Pet Name</strong>
                <br />
                Max Brown
              </div>
              <div className="col-md-3">
                <strong>Recheck Date</strong>
                <br />
                February 15, 2024
              </div>
              <div className="col-md-3">
                <strong>Species</strong>
                <br />
                Dog - Golden Retriever (Male, 3 years)
              </div>
              <div className="col-md-3">
                <strong>Owner Contact</strong>
                <br />
                +1 (555) 123-4567
              </div>
              <div className="col-md-3">
                <strong>Owner Email</strong>
                <br />
                sarah.johnson@email.com (Primary)
              </div>
              <div className="col-md-3">
                <strong>Pet Insurance</strong>
                <br />
                BlueCross BlueShield <span className="badge-green">Active</span>
              </div>
            </div>
          </div>
          {/* Tabs
                  <ul class="nav nav-tabs mb-4">
                      <li class="nav-item"><a class="nav-link tab-active" href="#">Medical History</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Appointments</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Documents</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Billing</a></li>
                  </ul> */}
          {/* Upcoming Rechecks */}
          <div className="border rounded p-3 mb-4 bg-light">
            <h6 className="fw-bold mb-3">Upcoming Rechecks</h6>
            <div className="card p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 fw-bold">Max Brown</p>
                  <p className="mb-1 text-muted">Dental Follow-up</p>
                </div>
                <span
                  className="badge text-bg-warning"
                  style={{ height: "fit-content" }}>
                  Due Tomorrow
                </span>
              </div>
            </div>
            <div className="card p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 fw-bold">Luna Smith</p>
                  <p className="mb-1 text-muted">Vaccination Booster</p>
                </div>
                <span
                  className="badge text-bg-danger"
                  style={{ height: "fit-content" }}>
                  Overdue
                </span>
              </div>
            </div>
            <div className="card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 fw-bold">Charlie Davis</p>
                  <p className="mb-1 text-muted">Post-Surgery Check</p>
                </div>
                <span
                  className="badge text-bg-success"
                  style={{ height: "fit-content" }}>
                  Next Week
                </span>
              </div>
            </div>
          </div>
          {/* Recheck Categories */}
          <div className="border rounded p-3 mb-4 bg-light">
            <h6 className="fw-bold mb-3">Recheck Categories</h6>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="border p-3 text-center rounded bg-white">
                  <i className="fa-solid fa-heart-pulse text-danger" /> Urgent
                  Follow-ups
                  <br />
                  <small>5 patients</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border p-3 text-center rounded bg-white">
                  <i className="fa-solid fa-syringe text-primary" /> Vaccination
                  Due
                  <br />
                  <small>12 patients</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border p-3 text-center rounded bg-white">
                  <i className="fa-solid fa-stethoscope text-success" /> Routine
                  Checkups
                  <br />
                  <small>8 patients</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border p-3 text-center rounded bg-white">
                  <i className="fa-solid fa-pills text-warning" /> Medication
                  Review
                  <br />
                  <small>3 patients</small>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Recheck Completions */}
          <div className="border rounded p-3 mb-4 bg-white">
            <h6 className="fw-bold mb-3">Recent Recheck Completions</h6>
            <div className="mb-2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/yFS70BvT/download.jpg"
                  alt="Max"
                  className="doctor-avatar1 border"
                />
                <p className="ms-2">
                  <strong>Dr. Sarah Wilson</strong>
                  <br />
                  Completed 3 rechecks today
                </p>
              </div>
              <small className="text-muted">2 hours ago</small>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/jvZZmXvk/download.jpg"
                  alt="Max"
                  className="doctor-avatar1 border"
                />
                <p className="ms-2">
                  <strong>Dr. Michael Smith</strong>
                  <br />
                  Completed 5 rechecks today
                </p>
              </div>
              <small className="text-muted">4 hours ago</small>
            </div>
          </div>
          {/* Status Information */}
          <div className="border rounded p-3 bg-white">
            <div className="row">
              <div className="col-md-6">
                <strong>Recheck Status Information</strong>
                <br />
                <small>Last updated: January 15, 2024</small>
              </div>
              <div className="col-md-6 text-end">
                <strong>Next Recheck Date:</strong> February 1, 2024
                <br />
                <strong>Priority:</strong>{" "}
                <span className="badge text-bg-warning">Medium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisReferralsTab;
