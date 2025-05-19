import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import { useUserLoginMutation } from "../../store/services/authApi";
const Login = () => {
	const navigate = useNavigate()
	const [login] = useUserLoginMutation()
	const [activeTab, setActiveTab] = useState("login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// email, password
	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};
	useEffect(() => {
		const role = localStorage.getItem("role");
		const token = localStorage.getItem("token");
		if (role === "admin" && token !== undefined) {
			navigate("/admin");
		} else {
			navigate("/");
		}
	}, [])
	const handleLogin = async () => {
		try {
			const data = {
				email,
				password,
			}
			const res = await login(data)
			console.log({ res: res });

			if (res?.data?.status) {
				localStorage.setItem('token', res?.data?.token)
				localStorage.setItem('role', res?.data?.role)
				setEmail('')
				setPassword('')
				toast.success('Logged In Successfully')
				navigate('/admin')
			}
			if (res?.error?.data.status === false) {
				toast.warn(res?.error?.data?.message)
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message)
		}
	}
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


				<div className="form-field">
					<label htmlFor="email">Email</label>
					<div className="input-icon">
						<i className="fas fa-envelope"></i>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
				{/* <Link to="/dashboard"> */}
				<button onClick={() => handleLogin()} className="custom-btn login-btn">
					Login
				</button>
				{/* </Link> */}

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

			</div>
		</>
	);
};

export default Login;
