import React, { useState } from "react";
import LabDashboard from "./LaboratoryTab/LabDashboard";
import TestLab from "./LaboratoryTab/TestLab";
import ReportTab from "./LaboratoryTab/ReportTab";
import InventoryTab from "./LaboratoryTab/InventoryTab";
import SimpleLabForm from "./LaboratoryTab/SimpleLabForm";

const LaboratoryManagement = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  console.log(activeTab);
  const allSamples = [
    {
      id: "SAM-2024-001",
      patient: "John Smith",
      test: "Blood Test",
      date: "2024-01-15 09:30",
      status: "In Process",
    },
    {
      id: "SAM-2024-002",
      patient: "Jane Doe",
      test: "Urine Analysis",
      date: "2024-01-15 10:15",
      status: "Completed",
    },
    {
      id: "SAM-2024-003",
      patient: "Robert Johnson",
      test: "CBC",
      date: "2024-01-15 11:00",
      status: "Pending",
    },
    {
      id: "SAM-2024-004",
      patient: "Mark Lee",
      test: "Blood Test",
      date: "2024-01-16 09:00",
      status: "Completed",
    },
    {
      id: "SAM-2024-005",
      patient: "Emma Watson",
      test: "Urine Analysis",
      date: "2024-01-16 10:20",
      status: "In Process",
    },
    {
      id: "SAM-2024-006",
      patient: "Chris Brown",
      test: "CBC",
      date: "2024-01-16 11:40",
      status: "Pending",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(allSamples.length / recordsPerPage);

  const getStatusBadge = (status) => {
    if (status === "Completed")
      return (
        <span className="badge bg-success-subtle text-success">{status}</span>
      );
    if (status === "Pending")
      return (
        <span className="badge bg-primary-subtle text-primary">{status}</span>
      );
    if (status === "In Process")
      return (
        <span className="badge bg-warning-subtle text-warning">{status}</span>
      );
  };

  const paginatedData = allSamples.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const tabData = {
    Dashboard: <LabDashboard />,
    Samples: (
      <div className="container py-4">
        <div className="card p-3">
          <div className="d-flex flex-wrap gap-2 mb-3 justify-content-between">
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search samples..."
              />
              <select className="form-select">
                <option>All Status</option>
                <option>In Process</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark">
                <i className="fa fa-filter"></i> Filter
              </button>
              <button className="btn btn-outline-dark">
                <i className="fa fa-download"></i> Export
              </button>
              <button
                type="button"
                class="btn "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: "#f3ff47" }}
              >
                <i className="fa fa-plus"></i> New Sample
              </button>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <SimpleLabForm />
                {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead>
                <tr>
                  <th>Sample ID</th>
                  <th>Patient Name</th>
                  <th>Test Type</th>
                  <th>Collection Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {paginatedData.map((sample) => (
                  <tr key={sample.id}>
                    <td>{sample.id}</td>
                    <td>{sample.patient}</td>
                    <td>{sample.test}</td>
                    <td>{sample.date}</td>
                    <td>{getStatusBadge(sample.status)}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <i class="fa-solid fa-pen-to-square text-info"></i>

                        <i className="fa fa-eye text-primary"></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <p>
              Showing {(currentPage - 1) * recordsPerPage + 1} to{" "}
              {Math.min(currentPage * recordsPerPage, allSamples.length)} of{" "}
              {allSamples.length} results
            </p>

            <nav>
              <ul className="pagination pagination-sm mb-0">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((num) => (
                  <li
                    className={`page-item ${
                      currentPage === num ? "active" : ""
                    }`}
                    key={num}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(num)}
                    >
                      {num}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    ), // your sample table component
    Tests: <TestLab />,
    Reports: <ReportTab />,
    Inventory: <InventoryTab />,
  };

  return (
    <>
      <div className="container py-4">
        {/* Tabs */}
        <ul className="nav lab-tabs border-bottom mb-3">
          {Object.keys(tabData).map((tab) => (
            <li className="nav-item me-3" key={tab}>
              <button
                className={`nav-link-lab border-0 bg-transparent position-relative ${
                  activeTab === tab
                    ? "text-dark active"
                    : "text-muted"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Active Tab Content */}
        {tabData[activeTab]}
      </div>
    </>
  );
};

export default LaboratoryManagement;
