import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

const LabDashboard = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Completed Tests',
        data: [150, 180, 220, 215, 120, 140, 260],
        borderColor: '#1976D2',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointBorderColor: '#1976D2',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: 'Pending Tests',
        data: [85, 90, 110, 105, 55, 70, 100],
        borderColor: '#B0BEC5',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointBorderColor: '#B0BEC5',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        ticks: {
          stepSize: 50,
        },
      },
    },
  };

  return (
    <>
    <div className="container py-4">
      <div className="row g-3">
        {/* Top Stats */}
        {[
          {
            label: "Pending Tests",
            count: 247,
            icon: "fa-flask",
            color: "text-primary",
            bg: "bg-primary-subtle",
          },
          {
            label: "Completed Today",
            count: 183,
            icon: "fa-vial",
            color: "text-success",
            bg: "bg-success-subtle",
          },
          {
            label: "Urgent Cases",
            count: 12,
            icon: "fa-clock",
            color: "text-danger",
            bg: "bg-danger-subtle",
          },
          {
            label: "Low Stock Items",
            count: 8,
            icon: "fa-solid fa-calendar",
            color: "text-warning",
            bg: "bg-warning-subtle",
          },
        ].map((item, index) => (
          <div className="col-md-3 col-6" key={index}>
            <div className="border d-flex gap-3 align-items-center rounded p-3 bg-white shadow-sm">
              <div
                className={`d-flex justify-content-center align-items-center ${item.bg}`}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              >
                <i className={`fa ${item.icon} ${item.color} fs-4`}></i>
              </div>

              <div>
                <h6 className="mb-1">{item.label}</h6>
                <h4 className="fw-bold text-start">{item.count}</h4>
              </div>
            </div>
          </div>
        ))}

        {/* Process Flow */}
        <div className="col-md-6 ">
          <div className="border rounded p-3 bg-white">
            <h6 className="fw-bold mb-3">Laboratory Process Flow</h6>
            <div className="d-flex flex-wrap justify-content-between">
              {[
                {
                  title: "Sample Collection",
                  content: "Patient registration Sample collection Labeling",
                  icon: "fa-file-lines",
                  color: "text-primary",
                  bg: "bg-primary-subtle",
                },
                {
                  title: "Processing",
                  content: "Sample Preparation Centrifugation Aliquoting",
                  icon: "fa-vial",
                  color: "text-success",
                  bg: "bg-success-subtle",
                },
                {
                  title: "Testing",
                  content: "Analysis Quality control Validation",
                  icon: "fa-microscope",
                  color: "text-danger",
                  bg: "bg-danger-subtle",
                },
                {
                  title: "Results",
                  content: "Report generation Review Distribution",
                  icon: "fa-file-lines",
                  color: "text-warning",
                  bg: "bg-warning-subtle",
                },
              ].map((step, i) => (
                <div key={i} className="text-center" style={{ width: "23%" }}>
                  <div className="border p-3 mb-2 rounded bg-light">
                    {/* Icon */}
                    <div
                      className={`mx-auto mb-2  d-flex justify-content-center align-items-center ${step.bg}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className={`fa ${step.icon} fs-4  ${step.color} `}></i>
                    </div>

                    {/* Heading */}
                    <div className="fw-bold">
                      {i + 1}. {step.title}
                    </div>

                    {/* Content */}
                    <div
                      className="text-muted mt-1"
                      style={{ fontSize: "13px" }}
                    >
                      {step.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="col-md-6">
        <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bold">Test Statistics</h5>
          <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '100%' }}>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
        </div>

        {/* Critical Alerts */}
        <div className="col-md-4">
          <div className="border rounded p-3 bg-white">
            <h6 className="fw-bold mb-3">Critical Alerts</h6>
            <div className="mb-2 p-2 bg-danger-subtle  rounded text-danger">
            <i class="fa-solid fa-circle-exclamation me-2"></i>
              Critical Value - Patient #12458 Glucose Level: 250 mg/dL
            </div>
            <div className="p-2   bg-warning-subtle rounded text-warning">
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
              Reagent Stock Alert - CBC Reagent running low
            </div>
          </div>
        </div>

        {/* Equipment Status */}
        <div className="col-md-4">
  <div className="border rounded p-3 bg-white">
    <h6 className="fw-bold mb-3">Equipment Status</h6>

    <ul className="list-unstyled mb-0">
      {[
        { name: "Hematology Analyzer", status: "Operational", icon: "fa-microscope" },
        { name: "Chemistry Analyzer", status: "Operational", icon: "fa-vials" },
        { name: "Immunology Analyzer", status: "Maintenance", icon: "fa-flask" },
      ].map((eq, i) => (
        <li key={i} className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2">
            <i className={`fa ${eq.icon} text-secondary`}></i>
            <span>{eq.name}</span>
          </div>

          <span
            className={`badge ${
              eq.status === "Maintenance"
                ? "bg-warning-subtle text-warning"
                : "bg-success-subtle text-success"
            }`}
          >
            {eq.status}
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>


        {/* Quick Actions */}
        <div className="col-md-4">
          <div className="border rounded p-3 bg-white">
            <h6 className="fw-bold mb-3">Quick Actions</h6>
            <div className="d-grid gap-2">
              <button className="btn fw-bold"style={{backgroundColor:"#f3ff47"}}>New Test Request</button>
              <button className="btn btn-outline-dark fw-bold">Print Reports</button>
              <button className="btn btn-outline-dark fw-bold">Search Patient</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LabDashboard
