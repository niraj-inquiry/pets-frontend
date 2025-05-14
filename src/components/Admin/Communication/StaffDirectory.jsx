import React from "react";
import { Link } from "react-router-dom";

function StaffDirectory() {
  return (
    <>
    <div className="container">
    <div className="row">
        <h4 className="mb-3">Communication</h4>
        <div className="col-md-8">
          <div className="card p-3 bg-white">
            <h5 className="fw-bold">Staff Directory</h5>
            <div className="container my-2">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search staff or department..."
                  />
                </div>
                <div className="col-12 col-md-4 text-md-end">
                  <button className="btn btn-outline-secondary w-100 w-md-auto">
                    All Departments
                  </button>
                </div>
              </div>
            </div>

            <div className=" py-2 bg-light p-3 d-flex">
              <div>
                <img
                  src="https://i.ibb.co/N2s9Sh2D/male-doctor.webp"
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: "50px", height: "50px", marginTop: "10px" }}
                />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Dr. Sarah Wilson</h6>
                <p className="mb-1 text-muted">Chief of Surgery</p>
                <small>Ext. 2234 | s.wilson@vitonory.com</small>
              </div>
            </div>

            <div className="py-2 bg-light p-3 d-flex mt-2 ">
              <div>
                <img
                  src="https://i.ibb.co/N2s9Sh2D/male-doctor.webp"
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: "50px", height: "50px", marginTop: "10px" }}
                />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Dr. James Chen</h6>
                <p className="mb-1 text-muted">Emergency Department Head</p>
                <small>Ext. 1102 | j.chen@vitonory.com</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-end mt-2">
            <button
              className="rounded-2"
              style={{
                color: "#ef4444",
                backgroundColor: "#fee2e2",
                padding: "10px",
                border: "none",
              }}
            >
              <i class="fa-solid fa-phone-flip me-2"></i>Emergency :911
            </button>
          </div>
          <div className="card p-3 mt-2">
            <h5 className="fw-bold">Quick Actions</h5>
            <a href="https://app.zoom.us/wc" target="_blank">
            <button className="btn btn-outline-dark w-100 my-2 d-flex flex-column">
              <i class="fa-solid fa-video" style={{ fontSize: "30px" }}></i>
              Start Meeting
            </button>
            </a>
            <Link to="/CommuniCalender">
             
            <button className="btn  w-100 d-flex flex-column" style={{ background: "#f3ff47" }}>
              <i
                class="fa-solid fa-calendar-days"
                style={{ fontSize: "30px" }}
              ></i>
              Schedule
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-3">
                <h5 className="fw-bold">System Status</h5>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <span
                    className="badge d-flex gap-2 text-success p-4"
                    style={{ background: "#f0fdf4" }}
                  >
                    Network Status: <br />
                    All operational
                    <i class="fa-solid fa-circle-check"></i>
                  </span>
                  <span
                    className="badge  p-4 d-flex gap-2"
                    style={{ background: "#fefce8", color: "#b7873e" }}
                  >
                    Paging System:
                    <br /> Maintenance scheduled
                    <i class="fa-solid fa-circle-exclamation "></i>
                  </span>
                  <span
                    className="badge d-flex gap-2 text-success p-4 "
                    style={{ background: "#f0fdf4" }}
                  >
                    Phone Lines:
                    <br /> Fully operational
                    <i class="fa-solid fa-circle-check "></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card p-3">
                <h5 className="fw-bold">Department Access</h5>
                <ul className="list-unstyled mt-3">
                  <li
                    className="text-success p-2"
                    style={{ background: "#f0fdf4" }}
                  >
                    {" "}
                    <i class="fa-solid fa-circle-check me-2"></i>Emergency{" "}
                    <br />
                    Room
                  </li>
                  <li
                    className="text-success p-2 mt-2"
                    style={{ background: "#f0fdf4" }}
                  >
                    {" "}
                    <i class="fa-solid fa-circle-check me-2"></i>Surgery
                  </li>
                  <li
                    style={{
                      background: "#fefce8",
                      color: "#b7873e",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <i class="fa-solid fa-clock me-2"></i> ICU
                  </li>
                  <li
                    style={{
                      background: "#fef2f2",  
                      color: "#ef4444",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <i class="fa-solid fa-circle-xmark me-2"></i>Pharmacy
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="card p-3 ">
                <h5 className="fw-bold">Latest Announcements</h5>
                <div className="alert alert-warning mt-3">
                  Staff meeting <br />
                  scheduled for tomorrow <br />
                  at 9 AM
                  <p>21 hours ago</p>
                </div>
                <div className="alert alert-primary mt-2">
                  New COVID-19 <br /> protocols in effect
                  <p>1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-3">
                <h5 className="fw-bold">Emergency Protocols</h5>
                <div className="alert alert-danger mt-3">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  Code Red
                  <br /> Fire Emergency
                </div>
                <div className="alert alert-primary mt-2">
                  <i class="fa-solid fa-heart-pulse me-2"></i>
                  Code Blue
                  <br /> Medical Emergency  
                </div>
                <div
                  className="alert alert-purple mt-2"
                  style={{ background: "#E1D5F2", color: "#5A2A82" }}
                >
                  <i class="fa-solid fa-shield-halved me-2"></i>
                  Code Purple
                  <br /> Security Alert
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card p-3">
                <h5 className="fw-bold">Help Resources</h5>
                <ul className="list-unstyled mt-2">
                  <li>User Guides</li>
                  <li>FAQs</li>
                  <li>Contact IT Department</li>
                </ul>
                <h6 className="fw-bold mt-3">Technical Support</h6>
                <p>Support: 1-800-TECH-HELP</p>
                <p>Email: support@vitonory.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default StaffDirectory;
