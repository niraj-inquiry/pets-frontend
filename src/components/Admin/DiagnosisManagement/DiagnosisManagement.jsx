import React from "react";
import DiagnosisTabs from "./DiagnosisTabs/DiagnosisTabs";
import DiagnosisHistoricTab from "./DiagnosisTabs/DiagnosisHistoricTab";
import DiagnosisMedicationsTab from "./DiagnosisTabs/DiagnosisMedicationsTab";
import DiagnosisDoctorNotesTab from "./DiagnosisTabs/DiagnosisDoctorNotesTab";
import DiagnosisClientInformationTab from "./DiagnosisTabs/DiagnosisClientInformationTab";
import DiagnosisReferralsTab from "./DiagnosisTabs/DiagnosisReferralsTab";

const DiagnosisManagement = () => {
  return (
    <>
      <div>
        <div className="container p-3">
          {/* Navigation */}
          <h4>Diagnosis Management</h4>
          <div className="row  my-4">
            <div className="col-md-8 d-flex align-items-center">
              <img
                src="https://i.ibb.co/99bhfMhJ/pexels-photo-356040.webp"
                alt="Max"
                className="pet-avatar1 border"
              />
              <div className="info ms-3">
                <h5 className="mb-1">Max</h5>
                <p className="text-muted mb-2">
                  ID: P-2024-001 • Male • Dog • 5 years • Last Visit: Jan 15,
                  2024
                </p>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-end justify-content-end">
              <button type="button" className="btn btn-outline-dark">
                <i className="fa-solid fa-phone-flip me-1" />{" "}
                <span className="fw-semibold">Contact</span>
              </button>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button
                className="btn fw-semibold"
                style={{ backgroundColor: "#f3ff47" }}>
                + New Visit
              </button>
            </div>
          </div>
          <div className="pet-details-nav mb-4">
            <div className="d-flex flex-wrap">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary active"
                    id="diagnosis-tab"
                    data-bs-toggle="pill"
                    href="#diagnosis ">
                    Diagnosis
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    id="historic-tab"
                    data-bs-toggle="pill"
                    href="#historic">
                    Historic Diagnosis
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    id="medications-tab"
                    data-bs-toggle="pill"
                    href="#medications">
                    Medications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    id="notes-tab"
                    data-bs-toggle="pill"
                    href="#notes">
                    Doctor's Notes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    id="information-tab"
                    data-bs-toggle="pill"
                    href="#information">
                    Client Information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    id="recommendations-tab"
                    data-bs-toggle="pill"
                    href="#recommendations">
                    Recheck Recommendations
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">

            {/* Diagnosis Tab Content */}
            <div className="tab-pane fade show active" id="diagnosis">
              <DiagnosisTabs />
            </div>

            {/* Historic Tab Content */}
            <div className="tab-pane fade" id="historic">
             <DiagnosisHistoricTab />
            </div>
            
            {/* Medications Tab Content */}
            <div className="tab-pane fade" id="medications">
              <DiagnosisMedicationsTab />
              
            </div>
            
            {/* Doctor Notes Tab Content */}
            <div className="tab-pane fade" id="notes">
              <DiagnosisDoctorNotesTab />
            </div>
            
            {/* Client Information Tab Content */}
            <div className="tab-pane fade" id="information">
              <DiagnosisClientInformationTab />
            </div>
            
            {/* Referrals Tab Content */}
            <div className="tab-pane fade" id="recommendations">
              <DiagnosisReferralsTab />
            </div>
            {/* Referrals Tab Content end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisManagement;
