import React from 'react'

const TestLabForm = () => {
  return (
 <>
     <div className="container py-4">
      <h5 className="fw-bold mb-4">New Test</h5>

      <form>
        {/* Patient Information */}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Patient ID</label>
            <input type="text" className="form-control" placeholder="Enter Patient ID" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter Full Name" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Date of Birth</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Gender</label>
            <select className="form-select">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Test Details */}
        <h6 className="fw-bold mt-4 mb-3">Test Details</h6>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Test Type</label>
            <select className="form-select">
              <option>Select Test Type</option>
              <option>Blood Test</option>
              <option>CBC</option>
              <option>Urine Analysis</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Test Priority</label>
            <select className="form-select">
              <option>Normal</option>
              <option>Urgent</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Scheduled Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Scheduled Time</label>
            <input type="time" className="form-control" />
          </div>
        </div>

        {/* Additional Information */}
        <h6 className="fw-bold mt-4 mb-3">Additional Information</h6>

        <div className="mb-3">
          <label className="form-label fw-semibold">Clinical Notes</label>
          <textarea className="form-control" rows="3" placeholder="Enter Notes"></textarea>
        </div>

        {/* Referring Doctor */}
        <h6 className="fw-bold mt-4 mb-3">Referring Doctor</h6>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Doctor Name</label>
            <input type="text" className="form-control" placeholder="Enter Doctor Name" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Department</label>
            <input type="text" className="form-control" placeholder="Enter Department" />
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="d-flex justify-content-end gap-2 mt-4">
          <button type="button" className="btn btn-outline-dark">
            Cancel
          </button>
          <button type="submit" className="btn btn-warning">
            Register Test
          </button>
        </div> */}
      </form>
    </div>
 </>
  )
}

export default TestLabForm
