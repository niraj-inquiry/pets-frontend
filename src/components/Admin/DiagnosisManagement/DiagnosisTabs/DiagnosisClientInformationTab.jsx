import React from "react";

const DiagnosisClientInformationTab = () => {
  return (
    <>
      <div className="container">
        <div className="card p-3">
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold">Client Information</h5>
              <p className="mb-0 text-muted">
                Manage patient details and medical history
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
          {/* Patient Info */}
          <div className="border rounded p-3 mb-4 bg-white">
            <div className="row g-3">
              <div className="col-md-3">
                <strong>Full Name</strong>
                <br />
                Max
              </div>
              <div className="col-md-3">
                <strong>Date of Birth</strong>
                <br />
                March 15, 2020
              </div>
              <div className="col-md-3">
                <strong>Patient ID</strong>
                <br />
                #PET5223011
              </div>
              <div className="col-md-3">
                <strong>Contact Number</strong>
                <br />
                +1 (555) 123-4567
              </div>
              <div className="col-md-3">
                <strong>Email Address</strong>
                <br />
                sarah.johnson@email.com
              </div>
              <div className="col-md-3">
                <strong>Insurance Provider</strong>
                <br />
                BlueCross BlueShield
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
          {/* Current Medications & Allergies */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="border rounded p-3 bg-light">
                <h6 className="fw-bold mb-3">Current Medications</h6>
                <div className="d-flex justify-content-between ">
                  <p className="mb-1">
                    <span className="fw-semibold">Lisinopril</span>
                    <br />
                    <small>10mg daily</small>
                  </p>
                  <span
                    className="badge text-bg-success"
                    style={{ height: "fit-content" }}>
                    Active
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p className="mb-1">
                    <span className="fw-semibold">Metformin</span>
                    <br />
                    <small>500mg twice daily</small>
                  </p>
                  <span
                    className="badge text-bg-success"
                    style={{ height: "fit-content" }}>
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3 bg-light">
                <h6 className="fw-bold mb-3">Allergies</h6>
                <p className="mb-5">
                  {" "}
                  <span className="badge-danger">⚠</span> Penicillin
                </p>
                <p className="mb-1">
                  {" "}
                  <span className="badge-danger">⚠</span> Sulfa Drugs
                </p>
              </div>
            </div>
          </div>
          {/* Recent Appointments */}
          <div className="border rounded p-3 mb-4 bg-white">
            <h6 className="fw-bold mb-3">Recent Appointments</h6>
            <div className="table table-responsive">
              <table className="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Provider</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan 15, 2024</td>
                    <td>Dr. Michael Smith</td>
                    <td>Follow-up</td>
                    <td>
                      <span className="badge text-bg-success">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Dec 30, 2023</td>
                    <td>Dr. Emily Chen</td>
                    <td>Consultation</td>
                    <td>
                      <span className="badge text-bg-success">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Status Info */}
          <div className="border rounded p-3 bg-white">
            <div className="row">
              <div className="col-md-6">
                <strong>Status Information</strong>
                <br />
                <small>Last updated: January 15, 2024</small>
              </div>
              <div className="col-md-6 text-end">
                <strong>Next Appointment:</strong> February 1, 2024
                <br />
                <strong>Payment Status:</strong>{" "}
                <span className="badge text-bg-success">Current</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisClientInformationTab;
