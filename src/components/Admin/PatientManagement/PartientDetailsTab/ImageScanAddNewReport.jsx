import React from 'react'

const ImageScanAddNewReport = () => {
  return (
    <>
    <div className="container my-5">
  <div className="card shadow-sm rounded p-4">
    <div className="card-header d-flex justify-content-between">
      <h4>Add New Report</h4>
      <img
        src="https://i.ibb.co/wNKhkgFk/images.jpg"
        alt="Max"
        className="border rounded-circle"
        width="40px"
      />
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="reportType" className="form-label">
            Report Type
          </label>
          <select id="reportType" className="form-select">
            <option selected="">Select Report Type</option>
            <option value={1}>Type 1</option>
            <option value={2}>Type 2</option>
            <option value={3}>Type 3</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="examDate" className="form-label">
            Date of Examination
          </label>
          <input type="date" id="examDate" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            rows={4}
            placeholder="Enter report description..."
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="upload" className="form-label">
            Upload Images/Documents
          </label>
          <div className="border p-3 text-center" id="upload">
            <i className="fas fa-cloud-upload-alt" /> Drag and drop files here
            or click to browse
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="doctorNotes" className="form-label">
            Doctor's Notes
          </label>
          <textarea
            id="doctorNotes"
            className="form-control"
            rows={4}
            placeholder="Enter additional notes..."
            defaultValue={""}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-light border border-dark">
            Cancel
          </button>
          <button
            type="button"
            className="btn rounded fw-semibold"
            style={{ backgroundColor: "#f3ff47" }}
          >
            Save Report
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default ImageScanAddNewReport