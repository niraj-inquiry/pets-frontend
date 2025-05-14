import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../store/feature/commonSlice";

const Sidebar = () => {
	const isOpen = useSelector(state => state.common.isOpen)
	const dispatch = useDispatch()
	console.log({ isOpen });

	const [openMenuIndex, setOpenMenuIndex] = useState(null);

	const [activeMenuIndex, setActiveMenuIndex] = useState(null);
	const [activeSubmenuPath, setActiveSubmenuPath] = useState(null);
	const navigate = useNavigate();

	const toggleMenu = (index) => {
		setOpenMenuIndex(openMenuIndex === index ? null : index);
	};

	const handlesubmenuclick = (menuindex, path) => {
		setActiveMenuIndex(menuindex);
		setActiveSubmenuPath(path);
		setOpenMenuIndex(null); // Close the submenu
		navigate(path);
	};

	const toggleSidebar = () => {
		dispatch(setIsOpen(!isOpen))
	}

	return (
		<>
			<div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`} style={{ backgroundColor: "#fff" }} >
				{/* Sidebar toggle icon */}
				<div className="sidebar-toggle" onClick={toggleSidebar}></div>

				<ul className="menu">
					{/* dashbord */}
					<li
						className={`menu-item ${activeMenuIndex === 0 ? "active" : ""}`}
						onClick={() => handlesubmenuclick(0, "/dashboard")}>
						<div className="menu-link">
							<i className="nav-icon fas fa-home menu-icon" />
							{isOpen && <span className="menu-text ">Dashboard</span>}
						</div>
					</li>
					{/* dashbord end */}

					{/* Patient Management */}
					<li
						className={`menu-item ${openMenuIndex === 1 ? "open" : ""} ${activeMenuIndex === 1 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(1, "/patientmanagement")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-user menu-icon" />
							{isOpen && <span className="menu-text">Patient Management </span>}
							{/* <FaArrowRight  
            icon={openMenuIndex === 1 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{  background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/* Projects */}

					{/* Appointment */}
					<li
						className={`menu-item ${openMenuIndex === 2 ? "open" : ""} ${activeMenuIndex === 2 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(2, "/appointment")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-calendar-days menu-icon" />
							{isOpen && <span className="menu-text"> Appointment </span>}
							{/* <FaArrowRight
            icon={openMenuIndex === 2 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
            /> */}
						</div>
					</li>
					{/* Appointment */}

					{/*  doctermanagement */}
					<li
						className={`menu-item ${openMenuIndex === 3 ? "open" : ""} ${activeMenuIndex === 3 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(3, "/doctormanagement")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-user-doctor menu-icon" />
							{isOpen && (
								<span className="menu-text"> Doctor's Management </span>
							)}
							{/* <FaArrowRight
            icon={openMenuIndex === 3 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  doctermanagement */}

					{/*  diagnosismanagement */}
					<li
						className={`menu-item ${openMenuIndex === 4 ? "open" : ""} ${activeMenuIndex === 4 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(4, "/diagnosismanagement")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-snowflake menu-icon" />
							{isOpen && (
								<span className="menu-text">Diagnosis Management </span>
							)}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  diagnosismanagement */}

					{/*  laboratorymanagement */}
					<li
						className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${activeMenuIndex === 5 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(5, "/laboratorymanagement")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-microscope menu-icon" />
							{isOpen && (
								<span className="menu-text">Laboratory Management </span>
							)}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  laboratorymanagement */}

					{/*  inventorymanagement */}
					<li
						className={`menu-item ${openMenuIndex === 6 ? "open" : ""} ${activeMenuIndex === 6 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(6, "/inventorymanagement")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-house-medical menu-icon" />
							{isOpen && (
								<span className="menu-text">Inventory Management </span>
							)}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  inventorymanagement */}

					{/*  reportinganalytics */}
					<li
						className={`menu-item ${openMenuIndex === 7 ? "open" : ""} ${activeMenuIndex === 7 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(7, "/reportinganalytics")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-file-medical menu-icon" />
							{isOpen && (
								<span className="menu-text">Reporting Analytics </span>
							)}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  reportinganalytics */}

					{/*  Telicommunication */}
					<li
						className={`menu-item ${openMenuIndex === 8 ? "open" : ""} ${activeMenuIndex === 8 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(8, "/telecommunication")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-hospital menu-icon" />
							{isOpen && (
								<span className="menu-text">Communication </span>
							)}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  Telicommunication */}

					{/*  dischargesummary */}
					<li
						className={`menu-item ${openMenuIndex === 9 ? "open" : ""} ${activeMenuIndex === 9 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(9, "/dischargesummary")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-notes-medical menu-icon" />
							{isOpen && <span className="menu-text">Discharge Summary </span>}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  dischargesummary */}

					{/*  billingpayment */}
					<li
						className={`menu-item ${openMenuIndex === 10 ? "open" : ""} ${activeMenuIndex === 10 ? "active" : ""
							}`}
						onClick={() => handlesubmenuclick(10, "/billingpayment")}>
						<div className="menu-link menu-i">
							<i className="nav-icon fa-solid fa-file-lines menu-icon" />
							{isOpen && <span className="menu-text">Billing & payment </span>}
							{/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
						</div>
					</li>
					{/*  billingpayment */}
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
