import React from 'react'
import { Link } from 'react-router-dom'

function DoctorProfile() {
  return (
  <>
  <div className="container py-4 bg-white">
      <div className="doc-head-back d-flex justify-content-between">
      <h4 className="mb-4">
        <i className="fa-solid fa-user-doctor me-2"></i> Doctor Profile Details
      </h4>
      <Link to="/doctormanagement">
        <button className="btn btn-outline-dark">
          <i className="fa-solid fa-arrow-left me-2"></i>
          Back
        </button>
        </Link>
      </div>
      <div className="row g-4">
        {/* Left Profile */}
        <div className="col-lg-4">
          <div className="border rounded p-4 text-center">
            <div
              className="bg-light mx-auto mb-3 rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "150px", height: "150px" }}
            >
              <img src='https://i.ibb.co/HTX6gVGg/doctor.jpg' alt="Doctor" className="rounded-circle" style={{ width: "100%", height: "100%" }} />
            </div>
            <h5 className="fw-bold mb-1">Dr. Sarah Johnson</h5>
            <p className="text-muted">Veterinary Surgeon</p>

            <span className="badge bg-success mb-3">Available</span>

            <div className="d-flex justify-content-center gap-3">
              <i className="fa-solid fa-envelope"></i>
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="col-lg-8">
          <div className="row g-3">
            {/* Professional Info */}
            <div className="col-12">
              <div className="border rounded p-3">
                <h6 className="fw-bold mb-3">Professional Information</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="mb-1 text-muted">Specialization</p>
                    <p className="fw-bold">Small Animal Medicine</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-1 text-muted">Experience</p>
                    <p className="fw-bold">12 Years</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-1 text-muted">License Number</p>
                    <p className="fw-bold">VET2024-1234</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-1 text-muted">Current Hospital</p>
                    <p className="fw-bold">Central Pet Care Hospital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule & Availability */}
            <div className="col-12">
              <div className="border rounded p-3">
                <h6 className="fw-bold mb-3">Schedule & Availability</h6>
                <p className="mb-1 text-muted">Working Days</p>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                    <span className="badge bg-light text-dark">{day}</span>
                  ))}
                </div>
                <p className="mb-1 text-muted">Consultation Hours</p>
                <p className="fw-bold">9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Expertise & Services */}
            <div className="col-12">
              <div className="border rounded p-3">
                <h6 className="fw-bold mb-3">Expertise & Services</h6>
                <p className="mb-1 text-muted">Species Treated</p>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {["Dogs", "Cats", "Birds", "Rabbits"].map((item) => (
                    <span className="badge bg-light text-dark">{item}</span>
                  ))}
                </div>

                <p className="mb-1 text-muted">Consultation Fee</p>
                <p className="fw-bold">$75 per visit</p>

                <p className="mb-1 text-muted">About</p>
                <p className="mb-0">
                  Dr. Sarah Johnson is a highly experienced veterinary surgeon
                  with over 12 years of practice. She specializes in small
                  animal medicine and has performed numerous successful
                  surgeries. Her gentle approach and dedication to animal care
                  have earned her the trust of countless pet owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DoctorProfile
