import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	
  return (
    <div className="container py-4">
      {/* Header */}
      <h3 className="mb-4">Dashboard</h3>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 dashboard-stats-card">
            <div className="card-body border">
              <div className="d-flex align-items-center">
                <div className="dashboard-stats-icon bg-warning-subtle">
                  <i className="bi bi-calendar-check" />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Total Appointments</h6>
                  <h3 className="mb-0">248</h3>
                  <small className="text-success">+12% from last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 dashboard-stats-card">
            <div className="card-body border">
              <div className="d-flex align-items-center">
                <div className="dashboard-stats-icon bg-success-subtle">
                  <i className="bi bi-check-circle" />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Completed</h6>
                  <h3 className="mb-0">186</h3>
                  <small className="text-success">+8% from last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 dashboard-stats-card">
            <div className="card-body border">
              <div className="d-flex align-items-center">
                <div className="dashboard-stats-icon bg-warning-subtle">
                  <i className="bi bi-clock" />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Upcoming</h6>
                  <h3 className="mb-0">42</h3>
                  <small className="text-warning">Next 7 days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 dashboard-stats-card">
            <div className="card-body border">
              <div className="d-flex align-items-center">
                <div className="dashboard-stats-icon bg-danger-subtle">
                  <i className="bi bi-x-circle" />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Cancelled</h6>
                  <h3 className="mb-0">20</h3>
                  <small className="text-danger">-5% from last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="row g-4">
        {/* Schedule Section */}
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4">
                <h5 className="card-title mb-3 mb-sm-0">Today's Schedule</h5>
                <Link to="/appointment">
                  <button
                    className="btn btn-sm fw-bold"
                    style={{ backgroundColor: "#f3ff47" }}>
                    + New Appointment
                  </button>
                </Link>
              </div>
              {/* Appointments List */}
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">Patient</th>
                      <th scope="col">Appointment Type</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:00 AM</td>
                      <td>John Smith</td>
                      <td>General Checkup</td>
                      <td>
                        <span className="badge bg-success">Confirmed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>10:30 AM</td>
                      <td>Emma Johnson</td>
                      <td>Dental Cleaning</td>
                      <td>
                        <span className="badge bg-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>02:00 PM</td>
                      <td>Michael Brown</td>
                      <td>Consultation</td>
                      <td>
                        <span className="badge bg-warning">In Progress</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Resource Allocation */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Resource Allocation</h5>
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dashboard-resource-card p-3 border rounded">
                    <h6>Room 101</h6>
                    <p className="text-muted mb-2">General Checkup</p>
                    <span className="badge bg-success">Available</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dashboard-resource-card p-3 border rounded">
                    <h6>Room 102</h6>
                    <p className="text-muted mb-2">Surgery</p>
                    <span className="badge bg-danger">Occupied</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="dashboard-resource-card p-3 border rounded">
                    <h6>Room 103</h6>
                    <p className="text-muted mb-2">Dental</p>
                    <span className="badge bg-warning">Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="col-12 col-lg-4">
          {/* Staff Availability */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Staff Availability</h5>
              <div className="dashboard-staff-list">
                <div className="dashboard-staff-item d-flex justify-content-between align-items-center mb-3 p-2 border-bottom">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://i.ibb.co/N2s9Sh2D/male-doctor.webp"
                      className="rounded-circle border border-dark"
                      alt="Dr. Emily White"
                      width="40"
                      height="40"
                    />
                    <div className="staff-info ms-3">
                      <h6 className="mb-0">Dr. Emily White</h6>
                      <span className="text-muted small">
                        General Practitioner
                      </span>
                    </div>
                  </div>
                  <span className="badge bg-success">Available</span>
                </div>
                <div className="dashboard-staff-item d-flex justify-content-between align-items-center mb-3 p-2 border-bottom">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://i.ibb.co/N2s9Sh2D/male-doctor.webp"
                      className="rounded-circle border border-dark"
                      alt="Dr. James Miller"
                      width="40"
                      height="40"
                    />
                    <div className="staff-info ms-3">
                      <h6 className="mb-0">Dr. James Miller</h6>
                      <span className="text-muted small">Dentist</span>
                    </div>
                  </div>
                  <span className="badge bg-danger">Busy</span>
                </div>
                <div className="dashboard-staff-item d-flex justify-content-between align-items-center mb-3 p-2 border-bottom">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://i.ibb.co/N2s9Sh2D/male-doctor.webp"
                      className="rounded-circle border border-dark"
                      alt="Nurse Sarah"
                      width="40"
                      height="40"
                    />
                    <div className="staff-info ms-3">
                      <h6 className="mb-0">Nurse Sarah</h6>
                      <span className="text-muted small">Head Nurse</span>
                    </div>
                  </div>
                  <span className="badge bg-warning">Break</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Quick Actions</h5>
              <div className="row g-2">
                <div className="col-6">
                  <button className="btn btn-light w-100 dashboard-quick-action d-flex flex-column align-items-center justify-content-center p-3">
                    <i className="bi bi-calendar mb-2 fs-4"></i>
                    Schedule
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-light w-100 dashboard-quick-action d-flex flex-column align-items-center justify-content-center p-3">
                    <i className="bi bi-arrow-repeat mb-2 fs-4"></i>
                    Reschedule
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-light w-100 dashboard-quick-action d-flex flex-column align-items-center justify-content-center p-3">
                    <i className="bi bi-bell mb-2 fs-4"></i>
                    Notify
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-light w-100 dashboard-quick-action d-flex flex-column align-items-center justify-content-center p-3">
                    <i className="bi bi-file-text mb-2 fs-4"></i>
                    Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;