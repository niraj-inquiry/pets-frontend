import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState("login");

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
		 navigate('/')
		}
	}, [])
	return (
		<>
			<div className="login-container">
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
					<div className="form-field">
						<label htmlFor="email">Email</label>
						<div className="input-icon">
							<i className="fas fa-envelope"></i>
							<input
								type="email"
								id="email"
								className="custom-input"
								placeholder="Enter your email"
							/>
						</div>
					</div>

					<div className="form-field">
						<label htmlFor="password">Password</label>
						<div className="input-icon">
							<i className="fas fa-lock"></i>
							<input
								type="password"
								id="password"
								className="custom-input"
								placeholder="Enter your password"
							/>
						</div>
					</div>

					<div className="remember-forgot">
						<div className="custom-checkbox">
							<input
								type="checkbox"
								id="remember"
								className="form-check-input"
							/>
							<label htmlFor="remember" className="form-check-label ms-2">
								Remember me
							</label>
						</div>
						<a href="#" className="forgot-link">
							Forgot password?
						</a>
					</div>
					<Link to="/dashboard">
						<button type="submit" className="custom-btn login-btn">
							Login
						</button>
					</Link>

					<div className="divider">Or continue with</div>

					<div className="social-logins">
						<button type="button" className="social-btn">
							<i className="fab fa-google"></i>
							Google
						</button>
						<button type="button" className="social-btn">
							<i className="fab fa-facebook-f"></i>
							Facebook
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
