import React from 'react'

function AddReportForm() {
  return (
  <>
    <div className="container py-4">
      <div className="card p-4" style={{ maxWidth: "500px", margin: "auto" }}>
        <h5 className="fw-bold mb-4">Add New Pet Test Report</h5>

        <form>
          {/* Pet Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Pet Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pet Name"
            />
          </div>

          {/* Test Type & Date */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Test Type</label>
              <select className="form-select">
                <option>Blood Test</option>
                <option>Urine Analysis</option>
                <option>CBC</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Test Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>

          {/* Owner Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Owner Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Owner Name"
            />
          </div>

          {/* Attachments */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Attachments</label>
            <div
              className="border border-dashed p-3 text-center"
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-cloud-upload fs-2 text-muted"></i>
              <div className="text-muted small mt-2">
                Drag and drop files here or click to upload
              </div>
              <input
                type="file"
                className="form-control border-0 mt-2"
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* Test Results */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Test Results</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter Test Results"
            ></textarea>
          </div>

          {/* Buttons */}
          {/* <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-outline-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-dark">
              Submit Report
            </button>
          </div> */}
        </form>
      </div>
    </div>
  </>
  )
}

export default AddReportForm
