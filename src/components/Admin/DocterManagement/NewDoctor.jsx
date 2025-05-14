import React from 'react'

function NewDoctor() {
  return (
   <>
    <div className="container py-4 bg-white">
      <h4 className="fw-bold text-center mb-1">
        <i className="fa-solid fa-paw me-2"></i> New Doctors Information
      </h4>
      <p className="text-center mb-4">
        Enter details to create new veterinary doctor profiles
      </p>

      <form>
        {/* Personal Information */}
        <h5 className="fw-bold mb-3">Personal Information</h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Date of Birth</label>
            <input type="date" className="form-control" placeholder="" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Gender</label>
            <select className="form-select">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Contact Number</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold mb-1">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder=""
            />
          </div>

          {/* Profile Upload */}
          <div className="col-12">
            <label className="form-label fw-semibold mb-1">Profile Photo</label>
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-light rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa fa-user text-muted"></i>
              </div>
              <button className="btn btn-outline-dark btn-sm" type="button">
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <h5 className="fw-bold mt-5 mb-3">Professional Details</h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Medical License Number</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Specialization</label>
            <select className="form-select">
              <option>Select Specialization</option>
              <option>Small Animal Medicine</option>
              <option>Large Animal Medicine</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Years of Experience</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold mb-1">Current Veterinary Clinic/Hospital</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold mb-1">Veterinary Education & Qualifications</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder=""
            ></textarea>
          </div>
        </div>

         {/* Schedule Information */}
         <h5 className="fw-bold mb-3">Schedule Information</h5>

<div className="mb-2">Working Days</div>

<div className="row g-2 mb-3">
  {[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day, index) => (
    <div className="col-md-3 col-3" key={index}>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">{day}</label>
      </div>
    </div>
  ))}
</div>

<div className="row g-3 mb-4">
    <label className="col-md-12 fw-semibold mb-1">Consultation Hours</label>
  <div className="col-md-4">
    <input
      type="time"
      className="form-control"
      placeholder="Start Time"
    />
  </div>
  <div className="col-md-4">
    <input
      type="time"
      className="form-control"
      placeholder="End Time"
    />
  </div>
</div>

{/* Additional Information */}
<h5 className="fw-bold mb-3">Additional Information</h5>

<div className="row g-3 mb-3">
  <div className="col-md-8">
    <label className="form-label fw-semibold mb-1">Animals/Species Treated </label>
    <input
      type="text"
      className="form-control"
      placeholder="e.g., Dogs, Cats, Horses, Exotic Pets"
    />
  </div>
  <div className="col-md-4">
    <label className="form-label fw-semibold mb-1">Consultation Fees</label>
    <div className="input-group">
      <span className="input-group-text">$</span>
      <input
        type="number"
        className="form-control"
        placeholder="Consultation Fees"
      />
    </div>
  </div>
</div>

<div className="mb-4">
    <label className="form-label fw-semibold mb-1">Brief Bio/Description</label>
  <textarea
    className="form-control"
    placeholder=""
    rows="3"
  ></textarea>
</div>

{/* Document Upload */}
<h5 className="fw-bold mb-3">Document Upload</h5>

<div className="mb-4 border border-dashed p-4 text-center">
  <p className="mb-1 fw-semibold">Medical License</p>
  <input type="file" className="form-control" />
  <small className="text-muted">PDF, PNG, JPG up to 10MB</small>
</div>

<div className="mb-4 border border-dashed p-4 text-center">
  <p className="mb-1 fw-semibold">Certificates</p>
  <input type="file" multiple className="form-control" />
  <small className="text-muted">PDF, PNG, JPG up to 10MB</small>
</div>

{/* Terms & Conditions */}
<div className="form-check mb-4">
  <input className="form-check-input" type="checkbox" />
  <label className="form-check-label">
    I agree to the terms and conditions
  </label>
</div>

{/* Buttons */}
<div className="d-flex justify-content-end gap-2">
  <button type="button" className="btn btn-outline-dark">
    Cancel
  </button>
  <button type="submit" className="btn " style={{backgroundColor:"#f3ff47"}}>
    Submit Registration
  </button>
</div>
      </form>
    </div>
   </>
  )
}

export default NewDoctor
