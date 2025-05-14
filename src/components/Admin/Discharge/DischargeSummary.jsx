import React from 'react'

function DischargeSummary() {
  return (
    <>
    <div className="container">
  <h4 className="mb-4">Discharge Summary</h4>
  {/* Pet Information */}
  <div className="card mb-4 p-3">
    <h5 className="section-title">Pet Information</h5>
    <div className="row g-3">
      <div className="col-md-4">
        <strong>Pet Name:</strong>{" "}
        <input type="text" className="summary-field" defaultValue="Max" />{" "}
      </div>
      <div className="col-md-4">
        <strong>Species/Breed:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue="Golden Retriever"
        />
      </div>
      <div className="col-md-4">
        <strong>Age:</strong>{" "}
        <input type="text" className="summary-field" defaultValue="3 years" />{" "}
      </div>
      <div className="col-md-4">
        <strong>Gender:</strong>{" "}
        <input type="text" className="summary-field" defaultValue="Male" />{" "}
      </div>
      <div className="col-md-4">
        <strong>Owner:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue="John Smith"
        />{" "}
      </div>
      <div className="col-md-4">
        <strong>Patient ID:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue="#PAW2024156"
        />{" "}
      </div>
    </div>
  </div>
  {/* Treatment Summary */}
  <div className="card mb-4 p-3">
    <h5 className="section-title">Treatment Summary</h5>
    <div className="row g-3">
      <div className="col-md-6">
        <strong>Admission Date:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue="June 12, 2024"
        />{" "}
      </div>
      <div className="col-md-6">
        <strong>Discharge Date:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue="June 15, 2024"
        />{" "}
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="mt-2">
          <strong>Primary Diagnosis:</strong>{" "}
          <input
            type="text"
            className="summary-field"
            defaultValue="Acute Gastroenteritis with mild dehydration"
          />{" "}
        </p>
      </div>
    </div>
    <p>
      <strong>Treatment Provided:</strong>
    </p>
    <ul>
      <li>IV Fluid Therapy</li>
      <li>Antibiotic Treatment</li>
      <li>Gastrointestinal Support Medication</li>
      <li>Dietary Management</li>
    </ul>
  </div>
  {/* Medication Details */}
  <div className="card mb-4 p-3">
    <h5 className="section-title">Medication Details</h5>
    <div className="table table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Metronidazole</td>
            <td>250mg</td>
            <td>Twice daily</td>
            <td>5 days</td>
          </tr>
          <tr>
            <td>Probiotics</td>
            <td>1 sachet</td>
            <td>Once daily</td>
            <td>7 days</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  {/* Care Instructions */}
  <div className="card mb-4 p-3">
    <h5 className="section-title">Care Instructions</h5>
    <ul>
      <li className="summary-list">
        <i className="fa-solid fa-circle-check" /> Feed small, frequent meals of
        prescribed gastrointestinal diet
      </li>
      <li className="summary-list">
        <i className="fa-solid fa-circle-check" /> Ensure fresh water is always
        available
      </li>
      <li className="summary-list">
        <i className="fa-solid fa-circle-check" /> Limit exercise for the next
        48 hours
      </li>
      <li className="summary-list">
        <i className="fa-solid fa-circle-check" /> Monitor for signs of vomiting
        or diarrhea
      </li>
    </ul>
  </div>
  {/* Follow-up Details */}
  <div className="card mb-4 p-3">
    <h5 className="section-title">Follow-up Details</h5>
    <div className="row g-3">
      <div className="col-md-6">
        <strong>Next Appointment:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue="June 22, 2024 at 10:00 AM"
        />{" "}
      </div>
      <div className="col-md-6">
        <strong>Emergency Contact:</strong>{" "}
        <input
          type="text"
          className="summary-field"
          defaultValue=" +1 (555) 123-4567"
        />{" "}
      </div>
    </div>
  </div>
  {/* Veterinarian Information */}
  <div className="card mb-4 p-3">
    <h5 className="section-title">Veterinarian Information</h5>
    <p>
      <strong>Treating Veterinarian:</strong> <br />{" "}
      <input
        type="text"
        className="summary-field w-auto"
        defaultValue="Dr. Sarah Johnson"
      />{" "}
    </p>
    <div className="d-flex justify-content-between align-items-center">
      <p>
        <strong>License No:</strong> <br />{" "}
        <input
          type="text"
          className="summary-field w-auto"
          defaultValue="VET2024-6756"
        />{" "}
      </p>
      <span className="text-end border-top ">
        Digital Signature &amp; Stamp
      </span>
    </div>
  </div>
  <button className="btn btn-dark w-100">Print</button>
</div>
    </>
  )
}

export default DischargeSummary
