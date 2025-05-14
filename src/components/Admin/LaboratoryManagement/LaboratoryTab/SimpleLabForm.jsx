import React from 'react'

const SimpleLabForm = () => {
  return (
    <>
         <div className="container py-4">
      <h5 className="fw-bold mb-4">New Sample</h5>

      <form>
        <div className="row g-3">
          {/* Sample ID */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Sample ID</label>
            <input type="text" className="form-control" value="SAM-2024-004" readOnly />
          </div>

          {/* Patient */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Patient</label>
            <select className="form-select">
              <option>Select patient</option>
              <option>John Smith</option>
              <option>Jane Doe</option>
            </select>
          </div>

          {/* Test Type */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Test Type</label>
            <select className="form-select">
              <option>Select test type</option>
              <option>Blood Test</option>
              <option>Urine Analysis</option>
              <option>CBC</option>
            </select>
          </div>

          {/* Collection Date */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Collection Date & Time</label>
            <input type="datetime-local" className="form-control" />
          </div>

          {/* Collection Method */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Collection Method</label>
            <select className="form-select">
              <option>Select method</option>
              <option>Manual</option>
              <option>Automated</option>
            </select>
          </div>

          {/* Collector Name */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Collector Name</label>
            <input type="text" className="form-control" placeholder="Enter collector name" />
          </div>

          {/* Priority */}
          <div className="col-12">
            <label className="form-label fw-semibold">Priority</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="priority" defaultChecked />
                <label className="form-check-label">Normal</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="priority" />
                <label className="form-check-label">Urgent</label>
              </div>
            </div>
          </div>

          {/* Storage Location */}
          <div className="col-12">
            <label className="form-label fw-semibold">Storage Location</label>
            <input type="text" className="form-control" placeholder="Enter location" />
          </div>

          {/* Notes */}
          <div className="col-12">
            <label className="form-label fw-semibold">Notes/Comments</label>
            <textarea className="form-control" rows="2" placeholder="Enter notes or comments"></textarea>
          </div>

          {/* Instructions */}
          <div className="col-12">
            <label className="form-label fw-semibold">Special Instructions</label>
            <textarea className="form-control" rows="2" placeholder="Enter special instructions"></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="submit" className="btn " style={{backgroundColor:"#f3ff47"}}>
            Save & Add Another
          </button>
          <button type="submit" className="btn btn-outline-dark">
            Save Sample
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default SimpleLabForm
