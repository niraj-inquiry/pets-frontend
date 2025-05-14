import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [activeTab, setActiveTab] = useState("signup");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="reg-form-container">
        <div className="tab-section">
        <Link to="/">
          <div
            className={`tab-item ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabChange("login")}>
            Login
          </div>
          </Link>
          <Link to="/signup">
          <div
            className={`tab-item ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabChange("signup")}>
            Register
          </div>
          </Link>
        </div>

        <form>
          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Full Name</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">👤</i>
              <input
                type="text"
                name="fullName"
                className="reg-text-input reg-input-with-icon"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Email</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">✉️</i>
              <input
                type="email"
                name="email"
                className="reg-text-input reg-input-with-icon"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Phone Number</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">📱</i>
              <input
                type="tel"
                name="phoneNumber"
                className="reg-text-input reg-input-with-icon"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Password</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">🔒</i>
              <input
                type="password"
                name="password"
                className="reg-text-input reg-input-with-icon"
                placeholder="Create password"
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Confirm Password</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">🔒</i>
              <input
                type="password"
                name="confirmPassword"
                className="reg-text-input reg-input-with-icon"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="reg-two-column-row">
            <div className="reg-column-half">
              <label className="reg-field-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="reg-text-input"
              />
            </div>
            <div className="reg-column-half">
              <label className="reg-field-label">Gender</label>
              <select className="reg-text-input" name="gender">
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="reg-terms-checkbox">
            <input type="checkbox" id="terms" name="agreeTerms" />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <button type="button" className="reg-submit-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
