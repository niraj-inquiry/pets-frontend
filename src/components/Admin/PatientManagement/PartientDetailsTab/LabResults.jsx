import React from 'react'

const LabResults = () => {
  return (
    <>
    <div className="ocular-exam-container card p-3 my-4">
          {/* Header with "Add New Test" Button */}
          <div className="d-flex justify-content-between">
            <h5>Ocular Exam Findings</h5>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle fw-semibold"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#f3ff47" }}
              >
                + Add New Test
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="">
                    Visual Acuity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Refraction
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Tonometry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Pachymetry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Keratometry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Topography
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    OCT Macula
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    OCT Disc
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Visual Field Test
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Color Vision
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Contrast Sensitivity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Pupillary Examination
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          {/* Ocular Diagnostics Section */}
          <div className="ocular-exam-card border">
            <h5>Ocular Diagnostics</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="my-3">
                  <label htmlFor="test-name" className="fw-semibold">
                    Test Name
                  </label>
                  <p className="my-3">Schirmer Tear Test (mm/min)</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="my-3">
                  <label htmlFor="od-value" className="fw-semibold">
                    OD (Right Eye)
                  </label>
                  <input
                    type="text"
                    id="od-value"
                    className="mt-3 input-lab-test-size"
                    placeholder="Right eye value"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="my-3">
                  <label htmlFor="os-value" className="fw-semibold">
                    OS (Left Eye)
                  </label>
                  <input
                    type="text"
                    id="os-value"
                    className="mt-3 input-lab-test-size"
                    placeholder="Left eye value"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <p className="my-3">Intraocular Pressure (mmHg)</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <input
                    type="text"
                    id="od-value"
                    className="mt-3 input-lab-test-size"
                    placeholder="Right eye value"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <input
                    type="text"
                    id="os-value"
                    className="mt-3 input-lab-test-size"
                    placeholder="Left eye value"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Previous Test Results Table */}
          <div className="ocular-exam-card border">
            <h5>Previous Test Results</h5>
            <div className="table table-responsive">
              <table className="table ocular-exam-table table-hover table-bordered my-4">
                <thead>
                  <tr>
                    <th>Test Date</th>
                    <th>Test Type</th>
                    <th>Results</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Oct 15, 2023</td>
                    <td>Schirmer Tear Test</td>
                    <td>OD: 15mm/min, OS: 14mm/min</td>
                    <td>
                      <span className="badge bg-success">Normal</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Sep 20, 2023</td>
                    <td>Intraocular Pressure</td>
                    <td>OD: 18mmHg, OS: 19mmHg</td>
                    <td>
                      <span className="badge bg-success">Normal</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  )
}

export default LabResults