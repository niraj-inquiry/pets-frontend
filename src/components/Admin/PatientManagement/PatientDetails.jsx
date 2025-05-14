import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import History from './PartientDetailsTab/History';
import Medications from './PartientDetailsTab/Medications';
import ImagingScan from './PartientDetailsTab/ImagingScan';
import LabResults from './PartientDetailsTab/LabResults';
import Referrals from './PartientDetailsTab/Referrals';

const PatientDetails = () => {
//   const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get patient data from location state or fetch from API based on ID
  const patient = location.state?.patient;
  
  // If patient data is not available in location state, handle the case

  return (
    <>
    <div className="pet-details-container">
  <div className="container py-4">
    {/* Navigation */}
    <div className="pet-details-nav mb-4">
    <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Patient Details</h3>
          <button 
            className="btn btn-outline-dark"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left me-2"></i>
            Back to List
          </button>
        </div>
      <div className="d-flex flex-wrap">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link text-secondary active"
              id="overview-tab"
              data-bs-toggle="pill"
              href="#overview"
            >
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              id="history-tab"
              data-bs-toggle="pill"
              href="#history"
            >
              History
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              id="medications-tab"
              data-bs-toggle="pill"
              href="#medications"
            >
              Medications
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              id="lab-results-tab"
              data-bs-toggle="pill"
              href="#lab-results"
            >
              Ocular Exam Findings
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              id="imaging-scan-tab"
              data-bs-toggle="pill"
              href="#imaging-scan"
            >
              Imaging &amp; Scan
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              id="referrals-tab"
              data-bs-toggle="pill"
              href="#referrals"
            >
              Referrals
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="tab-content">
      {/* Overview Tab Content */}
      <div className="tab-pane fade show active" id="overview">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4">
            <div className="card">
              <div className="pet-details-profile mt-5">
                <img
                  src={patient.imageUrl}
                  alt={patient.name}
                  className="pet-details-avatar border"
                />
                <h5 className="mb-1">{patient.name}</h5>
                <p className="text-muted mb-2">Patient ID: #12345</p>
                <small className="text-muted d-block">
                  {patient.breed}
                </small>
                <span className="badge text-bg-success mt-2 rounded-pill px-3">
                  {patient.status}
                </span>
              </div>
              <hr />
              <div className="pet-info mx-3"> 
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <span className="fw-semibold text-muted">Age:</span>
                    <span className="fw-bold">4 years old , 30kg</span>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <span className="fw-semibold text-muted">Gender:</span>
                    <span className="fw-bold">Male</span>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <span className="fw-semibold text-muted">Pet Type:</span>
                    <span className="fw-bold">{patient.type}</span>
                  </div>
                </div>
              </div>
              <div className="pet-details-info mb-4">
                <h6 className="mb-3">Owner Information</h6>
                <p className="mb-2">{patient.owner}</p>
                <p className="mb-2 text-muted">{patient.phone}</p>
                <p className="mb-0 text-muted">{patient.email}</p>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-md-8">
            {/* Quick Actions */}
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="card-title mb-4">Quick Actions</h6>
                <div className="pet-details-action-grid">
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-blue"
                  >
                    <div className="pet-details-action-icon">
                      <i className="bi bi-calendar-plus-fill" />
                    </div>
                    <div>Schedule Appointment</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-green"
                  >
                    <div className="pet-details-action-icon">
                      <i className="bi bi-journal-plus" />
                    </div>
                    <div>Add Medical Note</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-purple"
                  >
                    <div className="pet-details-action-icon">
                      <i className="bi bi-file-medical" />
                    </div>
                    <div>Write Prescription</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-yellow"
                  >
                    <div className="pet-details-action-icon">
                      <i className="bi bi-file-earmark-text" />
                    </div>
                    <div>Request Lab Test</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-red"
                  >
                    <div className="pet-details-action-icon">
                      <i className="fa-solid fa-truck-medical" />
                    </div>
                    <div>Emergency Contact</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-history"
                  >
                    <div className="pet-details-action-icon">
                      <i className="fa-solid fa-clock-rotate-left" />
                    </div>
                    <div>View History</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-records"
                  >
                    <div className="pet-details-action-icon">
                      <i className="fa-solid fa-share-nodes" />
                    </div>
                    <div>Share Records</div>
                  </a>
                  <a
                    href=""
                    className="pet-details-action-card pet-details-action-cyan"
                  >
                    <div className="pet-details-action-icon">
                      <i className="fa-solid fa-print" />
                    </div>
                    <div>Print Report</div>
                  </a>
                </div>
              </div>
            </div>
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
            <div className="card p-3 my-4">
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
        </div>
      </div>
      {/* History Tab Content */}
      <div className="tab-pane fade" id="history">
        <History />
      </div>
      {/* Medications Tab Content */}
      <div className="tab-pane fade" id="medications">
        <Medications />
      </div>
      {/* Ocular Exam Findings Tab Content */}
      <div className="tab-pane fade" id="lab-results">
        <LabResults />
      </div>
      {/* Imaging & Scan Tab Content */}
      <div className="tab-pane fade" id="imaging-scan">
        <ImagingScan />
      </div>
      {/* Referrals Tab Content */}
      <div className="tab-pane fade" id="referrals">
        <Referrals />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default PatientDetails