import React from 'react'

const AddNewPatient = () => {
  return (
    <>
    <div className="container py-5">
  <div className="pet-form-container">
    <h2 className="pet-form-title">Pet Registration Form</h2>
    <p className="pet-form-subtitle">Please fill in your pet's information</p>
    <div className="pet-upload-photo">
      <label htmlFor="pet-photo">
        <i className="bi bi-camera-fill fs-3" />
      </label>
      <input type="file" id="pet-photo" />
    </div>
    <p className="text-center">Upload pet photo</p>
    <form>
      <div className="mb-3">
        <label htmlFor="pet-name" className="form-label">
          Pet Name
        </label>
        <input
          type="text"
          className="form-control"
          id="pet-name"
          placeholder="Enter pet name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="owner-name" className="form-label">
          Owner Name
        </label>
        <input
          type="text"
          className="form-control"
          id="owner-name"
          placeholder="Enter owner name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone-number" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phone-number"
          placeholder="Enter phone number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email-id" className="form-label">
          Email ID
        </label>
        <input
          type="email"
          className="form-control"
          id="email-id"
          placeholder="Enter email address"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="appointment-id" className="form-label">
          Appointment ID
        </label>
        <input
          type="text"
          className="form-control"
          id="appointment-id"
          placeholder="Enter appointment ID"
        />
      </div>
      <button type="submit" className="btn pet-register-btn">
        Register
      </button>
    </form>
  </div>
</div>
    </>
  )
}

export default AddNewPatient