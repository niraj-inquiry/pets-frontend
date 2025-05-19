import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setIsOpen } from "../../store/feature/commonSlice";
import { useGetProfileQuery, useLogoutMutation } from "../../store/services/authApi";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
const Navbar = () => {
	const navigate = useNavigate()
	const isOpen = useSelector(state => state.common.isOpen)
	const [Logout] = useLogoutMutation()
	const { data: profile } = useGetProfileQuery()
	const dispatch = useDispatch()
	const toggleSidebar = () => {
		dispatch(setIsOpen(!isOpen))
	}
	const handleLogin = async () => {

		try {
			// alert('hello')
			const res = await Logout()
			console.log({ res: res?.data });

			if (res?.data?.status) {
				localStorage.removeItem('token')
				localStorage.removeItem('role')
				navigate('/')
			}
		} catch (error) {
			console.log({ error: error });
			toast.error(error.message)
		}
	}
	return (
		<>
			<nav className="navbar" style={{ backgroundColor: "#fff" }} >
				{/* title */}
				<h4 className="navbar-title animate-charcter " style={{ marginTop: "5px", marginLeft: "50px", fontFamily: " ui-monospace", fontSize: "30px", fontWeight: "600" }}><img src="https://media.istockphoto.com/id/1435010849/photo/labrador-retriever-dog-panting-and-ginger-cat-sitting-in-front-of-dark-yellow-background.jpg?s=612x612&w=0&k=20&c=obpeW_Aw7cIpQ8SfVHX9lMwLeLa00W1qmSFcOTVMEZ4=" className="rounded-circle" width="40px" height="40px" /> Pet Medical</h4>

				<button onClick={toggleSidebar} className="toggle-button me-auto" style={{ marginLeft: "60px", width: "auto", }}>
					☰
				</button>


				<div className="nav-notification-icon">
					<i class="fa-solid fa-bell"></i>
				</div>


				<div className="dropdown profile-elemen" style={{ marginRight: "40px" }}>
					<div className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
						style={{ cursor: "pointer" }}
						data-bs-toggle="dropdown" aria-expanded="false">

						<div className="profile-element">
							<div className="avatar-online">
								<img style={{ width: "40px", borderRadius: "50%" }}
									src="https://i.ibb.co/6Jc9g6jF/user-11.jpg"
									alt="profile" />
								<span className="text-dark ms-2">{profile?.data?.name || 'Dr. John Wilson'}</span>
							</div>
						</div>
					</div>
					<ul className="dropdown-menu dropdown-menu-end">
						<li>
							<Link className="dropdown-item" to="/adminprofile">
								My Profile
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="/">
								Update Profile
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" to="/changepassword">
								Change Password
							</Link>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<Button onClick={() => handleLogin()} >
								Logout
							</Button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar