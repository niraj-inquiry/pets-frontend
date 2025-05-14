import React from 'react'

function BillingPayment() {
  return (
    <>
    <div className="container">
  <h4 className="mb-4">
    <i className="fa-solid fa-paw me-1" /> Pet Bill Management
  </h4>
  {/* Payment Summary */}
  <div className="card mb-4 shadow-sm">
    <h5 className="p-3">Pet &amp; Revenue Summary</h5>
    <div className="card-body row">
      <div className="col">
        <h6>Amount Due</h6>
        <h5>$245.00</h5>
      </div>
      <div className="col">
        <h6>Due Date</h6>
        <h5>May 15, 2024</h5>
      </div>
      <div className="col">
        <h6>Account Number</h6>
        <h5>#1234-5678</h5>
      </div>
      <div className="col">
        <h6>Total Revenue</h6>
        <h5 className="amount text-success">$1,245.00</h5>
      </div>
    </div>
  </div>
  {/* Service Details */}
  <div className="card mb-4 shadow-sm">
    <div className="card-header fw-bold">Pet Service Details</div>
    <div className="card-body p-0">
      <table className="table mb-0">
        <thead>
          <tr>
            <th>Service</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pet Annual Check-up</td>
            <td>May 1, 2024</td>
            <td>$120.00</td>
          </tr>
          <tr>
            <td>Pet Vaccination</td>
            <td>May 1, 2024</td>
            <td>$85.00</td>
          </tr>
          <tr>
            <td>Pet Dental Cleaning</td>
            <td>May 1, 2024</td>
            <td>$40.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2}>Total Service Revenue:</th>
            <th>$1,245.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  {/* Payment Method */}
  <div className="card shadow-sm">
    <div className="card-header fw-bold">Payment Method</div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="payment"
              defaultChecked=""
            />
            <label className="form-check-label">
              <i className="fa-solid fa-credit-card text-secondary me-1" />
              <span className="fw-semibold">Credit/Debit Card</span>
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="radio" name="payment" />
            <label className="form-check-label">
              <i className="fa-brands fa-paypal text-secondary me-1" />
              <span className="fw-semibold">PayPal</span>
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="radio" name="payment" />
            <label className="form-check-label">
              <i className="fa-brands fa-alipay text-secondary me-1" />
              <span className="fw-semibold">AliPay</span>
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="radio" name="payment" />
            <label className="form-check-label">
              <i className="fa-brands fa-apple-pay text-secondary me-1" />
              <span className="fw-semibold">Apple Pay</span>
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="radio" name="payment" />
            <label className="form-check-label">
              <i className="fa-brands fa-google-pay text-secondary me-1" />
              <span className="fw-semibold">Google Pay</span>
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Card Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="**** **** **** ****"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Expiry Date</label>
            <input type="text" className="form-control" placeholder="MM/YY" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">CVV</label>
            <input type="text" className="form-control" placeholder="*" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Cardholder Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name on card"
          />
        </div>
        <button type='button' className="btn btn-dark w-100">Pay Now $245.00</button>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default BillingPayment
