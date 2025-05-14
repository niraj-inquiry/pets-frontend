import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Registering the necessary components from Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const DocterManagement = () => {


  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate(`/doctorprofile`);
  };
  const [doctors, setDoctors] = useState([
    {
      image: "https://i.ibb.co/vnKtHLp/doctor.jpg",
      name: "Dr. John Smith",
      department: "Cardiology",
      experience: "15 Years",
      status: "Available",
    },
    {
      image: "https://i.ibb.co/vnKtHLp/doctor.jpg",
      name: "Dr. Sarah Johnson",
      department: "Internal Medicine",
      experience: "8 Years",
      status: "On Leave",
    },
    {
      image: "https://i.ibb.co/vnKtHLp/doctor.jpg",
      name: "Dr. Michael Chen",
      department: "Neurology",
      experience: "12 Years",
      status: "Available",
    },
    {
      image: "https://i.ibb.co/vnKtHLp/doctor.jpg",
      name: "Dr. Emily Brown",
      department: "General Practice",
      experience: "5 Years",
      status: "Available",
    },
  ]);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Vaccines",
        data: [120, 150, 170, 190, 210, 230, 250],
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
      {
        label: "Medicines",
        data: [100, 130, 160, 180, 220, 240, 280],
        borderColor: "green",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        fill: true,
      },
      {
        label: "Supplies",
        data: [80, 110, 140, 160, 190, 210, 230],
        borderColor: "orange",
        backgroundColor: "rgba(255, 193, 7, 0.2)",
        fill: true,
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Department Distribution",
      },
    },
  };

  return (
    <>
      <div className="container p-3">
        <h4 className="mb-3 mt-3">Doctor Management </h4>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card p-3 d-flex flex-row align-items-center text-center shadow-sm ">
              <div className="mr-3 me-3">
                {" "}
                {/* Added margin-right to give space between icon and text */}
                <i
                  className="fa-solid fa-user"
                  style={{
                    fontSize: "30px",
                    color: "blue",
                    backgroundColor: "#dbeafe",
                    padding: "15px",
                    borderRadius: "50%", // Perfect Round
                    display: "inline-block", // Maintain Circle
                  }}
                ></i>
              </div>
              <div className="mr-3 ">
                {" "}
                {/* Added margin-right to give space between icon and text */}
                <h6 className="mt-2">Total Doctors</h6>
                <p>24</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card p-3 d-flex flex-row align-items-center text-center shadow-sm">
              <div className="mr-3 me-3">
                <i
                  class="fa-solid fa-calendar"
                  style={{
                    fontSize: "30px",
                    color: "#16a34a",
                    backgroundColor: "#dcfce7",
                    padding: "15px",
                    borderRadius: "50%", // Perfect Round
                    display: "inline-block",
                  }}
                ></i>
              </div>
              <div className="mr-3 me-3">
                <h6 className="mt-2">Available Today</h6>
                <p>18</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card p-3 d-flex flex-row align-items-center text-center shadow-sm">
              <div className="mr-3 me-3">
                {" "}
                {/* Added margin-right to give space between icon and text */}
                <i
                  class="fa-solid fa-clock"
                  style={{
                    fontSize: "30px",
                    color: "#ca8a04",
                    backgroundColor: "#fef9c3",
                    padding: "15px",
                    borderRadius: "50%", // Perfect Round
                    display: "inline-block",
                  }}
                />
              </div>
              <div className="">
                <h6 className="mt-2">On Leave</h6>
                <p>6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Schedule Section */}
        <div className="row mb-4">
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="card p-3">
              <h5>Doctor Schedule</h5>
              <div className="d-flex justify-content-between bg-light p-3">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <img
                      src="https://i.ibb.co/KjMFXtJ1/pet-image.jpg"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div>
                    <h6>Max (Golden Retriever)</h6>
                    <p>Vaccination - 10:30 AM</p>
                  </div>
                </div>
                <button
                  className="btn  "
                  style={{
                    backgroundColor: "#f3ff47",
                    color: "black",
                    fontWeight: "bold",
                    height: "max-content",
                  }}
                >
                  View
                </button>
              </div>
              <div className="d-flex justify-content-between bg-light mt-2 p-3">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <img
                      src="https://i.ibb.co/KjMFXtJ1/pet-image.jpg"
                      alt="Pet"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Luna (Persian Cat)</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                      Check-up - 11:45 AM
                    </p>
                  </div>
                </div>

                <button
                  className="btn "
                  style={{
                    backgroundColor: "#f3ff47",
                    color: "black ",
                    fontWeight: "bold",
                    height: "max-content",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>

          {/* Department Distribution Section */}
          <div className="col-md-6     mb-4">
            <div className="card p-3">
              <h5>Department Distribution</h5>
              <Line data={data} options={options} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-sm-12 mb-4">
            <div className="card p-3 ">
              <div
                className="d-flex justify-content-between mb-4"
                style={{ alignItems: "baseline" }}
              >
                <h5>Doctors List</h5>

                <Link to="/newdoctor">
                <button
                  className="btn "
                  style={{
                    backgroundColor: "#f3ff47",
                    color: "black ",
                    fontWeight: "bold",
                  }}
                >
                  <i class="fa-solid fa-plus me-2"></i>
                  New Doctor
                </button>
                </Link>
              </div>
              <div className="card p-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Experience</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="img-fluid me-2"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                          <span
                            onClick={handleDoctorClick}
                            style={{
                              cursor: "pointer",
                              color: "blue",
                              
                            }}
                          >
                            {doctor.name}
                          </span>
                        </td>
                        <td>{doctor.department}</td>
                        <td>{doctor.experience}</td>
                        <td>
                          <span
                            className={`badge p-2 rounded-pill`}
                            style={{
                              backgroundColor:
                                doctor.status === "Available"
                                  ? "#dcfce7"
                                  : "#fef9c3", // Background color for Available or Warning
                              color:
                                doctor.status === "Available"
                                  ? "#28a745"
                                  : "#8b5516", // Text color for Available (success) or Warning
                            }}
                          >
                            {doctor.status === "Available"
                              ? "Available"
                              : "On Leave"}
                          </span>
                        </td>
                        <td>
                          <button className="btn text-info">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card p-3">
              <h5>Inventory Status</h5>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Vaccines</h6>
                  <div
                    className="progress"
                    style={{ flex: 1, margin: "0 10px" }}
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="mb-0">75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Antibiotics</h6>
                  <div
                    className="progress"
                    style={{ flex: 1, margin: "0 10px" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <p className="mb-0">50%</p>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Bandages</h6>
                  <div
                    className="progress"
                    style={{ flex: 1, margin: "0 10px" }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <p className="mb-0">25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocterManagement;
