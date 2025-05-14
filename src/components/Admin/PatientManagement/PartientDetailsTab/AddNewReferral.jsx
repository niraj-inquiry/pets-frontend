import React from 'react'

const AddNewReferral = () => {
  return (
    <>
    <div className="container my-5">
  <div className="card shadow-sm p-4">
    <div className="card-header d-flex justify-content-between mb-4">
      <h4>Create New Referral</h4>
      <img
        src="https://i.ibb.co/wNKhkgFk/images.jpg"
        alt="Max"
        className=" border rounded-circle"
        width="40px"
      />
    </div>
    <form>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label referral-label  fw">Referral Type</label>
          <select className="form-select ">
            <option selected="">Select type</option>
            <option>General</option>
            <option>Specialist</option>
          </select>
          <label className="form-label referral-label fw mt-4">
            Referred To
          </label>
          <select className="form-select ">
            <option selected="">Select doctor</option>
            <option>Dr. John</option>
            <option>Dr. Smith</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label referral-label">
            Reason for Referral
          </label>
          <textarea
            className="form-control"
            rows={5}
            placeholder="Enter detailed reason for referral"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mt-2">
          <label className="form-label referral-label">Priority Level</label>
          <div className="d-flex gap-3 mt-2">
            <div className="form-check">
              <input
                className="form-check-input "
                type="radio"
                name="priority"
                defaultChecked=""
              />
              <label className="form-check-label">Normal</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input "
                type="radio"
                name="priority"
              />
              <label className="form-check-label">Urgent</label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label referral-label">Preferred Date</label>
          <input type="date" className="form-control " />
        </div>
      </div>
      <div className="my-4">
        <label className="form-label referral-label">Attach Documents</label>
        <div className="border referral-upload-area p-4 text-center">
          <p className="mb-0 text-muted">Drop files here or click to upload</p>
          <input type="file" className="form-control  mt-2" />
        </div>
      </div>
      <div className="d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-outline-dark border border-dark">
          Cancel
        </button>
        <button
          type="button"
          className="btn fw-semibold"
          style={{ backgroundColor: "#f3ff47" }}
        >
          Create Referral
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default AddNewReferral