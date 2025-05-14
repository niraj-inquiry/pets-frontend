import React from 'react'

const DiagnosisMedicationForm = () => {
  return (
    <>
    <div className="container">
  <div className="card p-4">
    <h5 className="fw-bold mb-4">Add New Medication</h5>
    <form>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Medication Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter medication name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Dosage</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., 1 tablet"
          />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Frequency</label>
          <select className="form-select">
            <option selected="">Daily</option>
            <option>Twice Daily</option>
            <option>Weekly</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Duration</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., 2 weeks"
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold">Special Instructions</label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Enter any special instructions or notes"
          defaultValue={""}
        />
      </div>
      <div className="mb-4">
        <label className="form-label fw-semibold">Prescription Date</label>
        <input type="date" className="form-control" />
      </div>
      <div className="d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-outline-dark">
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-save fw-semibold"
          style={{ backgroundColor: "#faff00" }}
        >
          Save Medication
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default DiagnosisMedicationForm