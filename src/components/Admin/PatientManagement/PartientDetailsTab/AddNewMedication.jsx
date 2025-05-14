import React from 'react'

const AddNewMedication = () => {
  return (
    <>
    <div className="container py-5">
  <div className="card p-4 shadow-sm">
    <div className="row g-3 mb-3">
      <div className="col-md-6">
        <label className="form-label">Medication Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter medication name"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Dosage</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter dosage"
        />
      </div>
    </div>
    <div className="row g-3 mb-3">
      <div className="col-md-6">
        <label className="form-label">Frequency</label>
        <select className="form-select">
          <option>Once daily</option>
          <option>Twice daily</option>
          <option>Every 6 hours</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">Route</label>
        <select className="form-select">
          <option>Oral</option>
          <option>Injection</option>
          <option>Topical</option>
        </select>
      </div>
    </div>
    <h6 className="mt-3 mb-2 fw-bold">Billing Information</h6>
    <div className="row g-3 mb-3">
      <div className="col-md-6">
        <label className="form-label">Unit Price</label>
        <input type="number" className="form-control" placeholder={0.0} />
      </div>
      <div className="col-md-6">
        <label className="form-label">Quantity</label>
        <input type="number" className="form-control" defaultValue={1} />
      </div>
    </div>
    <h5>Total Amount: $0.00</h5>
    <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" defaultChecked="" />
      <label className="medication-form-check-label">
        Automatically add to patient invoice
      </label>
    </div>
    <label className="form-label">Special Instructions</label>
    <textarea
      className="form-control mb-4"
      rows={3}
      placeholder="Enter special instructions"
      defaultValue={""}
    />
    <h6 className="fw-bold mb-3">Label Printer Selection</h6>
    <div className="form-check mb-2">
      <input
        className="form-check-input"
        type="radio"
        name="printer"
        defaultChecked=""
      />
      <label className="medication-form-check-label">
        Dymo LabelWriter 450 (Connected)
        <small>Default label printer</small>
      </label>
    </div>
    <div className="form-check mb-2">
      <input className="form-check-input" type="radio" name="printer" />
      <label className="medication-form-check-label">
        Brother QL-820NWB
        <small>Network printer</small>
      </label>
    </div>
    <div className="form-check mb-2">
      <input className="form-check-input" type="radio" name="printer" />
      <label className="medication-form-check-label">
        Zebra ZD410
        <small>Pharmacy label printer</small>
      </label>
    </div>
    <div className="form-check mb-4">
      <input className="form-check-input" type="radio" name="printer" />
      <label className="medication-form-check-label">
        ROLLO Label Printer
        <small>Backup printer</small>
      </label>
    </div>
    <h6 className="fw-bold mb-3">Label Preview</h6>
    <div className="label-preview mb-4">
      <i className="fa-solid fa-tag" />
      <p>Label preview will appear here</p>
    </div>
    <div className="d-flex justify-content-end gap-2">
      <button className="btn btn-outline-dark">Cancel</button>
      <button
        className="btn fw-semibold"
        style={{ backgroundColor: "#fef102" }}
      >
        Save and Print Label
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default AddNewMedication