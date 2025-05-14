import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./components/Admin/Dashbord/Dashboard";
import PatientManagement from "./components/Admin/PatientManagement/PatientManagement";
import Appointment from "./components/Admin/Appointment/Appointment";
import DocterManagement from "./components/Admin/DocterManagement/DocterManagement";
import PatientDetails from "./components/Admin/PatientManagement/PatientDetails";
import InventoryManagementDashboard from "./components/Admin/InventoryManagement/InventoryManagementDashboard";
import LaboratoryManagement from "./components/Admin/LaboratoryManagement/LaboratoryManagement";
import ReportingAnalytics from "./components/Admin/ReportingAnalytics/ReportingAnalytics";
import DiagnosisManagement from "./components/Admin/DiagnosisManagement/DiagnosisManagement";

import StaffDirectory from "./components/Admin/Communication/StaffDirectory";
import DoctorProfile from "./components/Admin/DocterManagement/DoctorProfile";
import NewDoctor from "./components/Admin/DocterManagement/NewDoctor";
import CommunicationCalender from "./components/Admin/Communication/CommunicationCalender";
import DischargeSummary from "./components/Admin/Discharge/DischargeSummary";
import BillingPayment from "./components/Admin/BillingPayment/BillingPayment";

const App = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	const location = useLocation();

	const hideLayout =
		location.pathname === "/" || location.pathname === "/signup";

	return (
		<>
			<div className="Main-App">
				{!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
				<div className={`Main-App-container ${hideLayout ? "no-sidebar" : ""}`}>
					{!hideLayout && (
						<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
					)}
					<div className="Main-App-Content">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							{/* Dashbord */}
							<Route path="/dashboard" element={<Dashboard />} />
							{/* Dashbord */}
							{/* appointment */}
							<Route path="/appointment" element={<Appointment />} />
							{/* appointment */}
							{/* Patient Management  */}
							<Route
								path="/patientmanagement"
								element={<PatientManagement />}
							/>
							{/* Patient Management  */}
							{/* Patient Management  */}
							<Route path="/doctormanagement" element={<DocterManagement />} />
							<Route path="/patient/:id" element={<PatientDetails />} />
							<Route path="/doctorprofile" element={<DoctorProfile />} />
							<Route path="/newdoctor" element={<NewDoctor />} />"
							{/* Patient Management  */}
							{/* inventorymanagement  */}
							<Route
								path="/inventorymanagement"
								element={<InventoryManagementDashboard />}
							/>
							{/* inventorymanagement end  */}
							{/* laboratorymanagement   */}
							<Route
								path="/laboratorymanagement"
								element={<LaboratoryManagement />}
							/>
							{/* laboratorymanagement  end  */}
							{/* TeleCommmunication  start  */}
							<Route path="/telecommunication" element={<StaffDirectory />} />
							<Route
								path="/CommuniCalender"
								element={<CommunicationCalender />}
							/>
							{/* TeleCommmunication  end  */}
							{/*Discharge Summary Start */}
							<Route path="/dischargesummary" element={<DischargeSummary />} />
							{/*Discharge Summary End */}

							{/* Dashbord */}
							<Route path="/dashboard" element={<Dashboard />} />
							{/* Dashbord */}

							{/* appointment */}
							<Route path="/appointment" element={<Appointment />} />
							{/* appointment */}

							{/* Patient Management  */}
							<Route path="/patientmanagement" element={<PatientManagement />} />
							{/* Patient Management  */}

							{/* Patient Management  */}
							<Route path="/doctermanagement" element={<DocterManagement />} />
							<Route path="/patient/:id" element={<PatientDetails />} />
							{/* Patient Management  */}

							{/* inventorymanagement  */}
							<Route path="/inventorymanagement" element={<InventoryManagementDashboard />} />

							{/* inventorymanagement end  */}

							{/* laboratorymanagement   */}
							<Route path="/laboratorymanagement" element={<LaboratoryManagement />} />
							{/* laboratorymanagement  end  */}

							{/* reportinganalytics  */}
							<Route path="/reportinganalytics" element={<ReportingAnalytics />} />
							{/* reportinganalytics  end  */}

							{/* diagnosismanagement   */}
							<Route path="/diagnosismanagement" element={<DiagnosisManagement />} />
							{/* diagnosismanagement  end  */}

							{/*Billing&Payment */}
							<Route path="/billingpayment" element={<BillingPayment />} />
							{/*Billing&Payment */}
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};
function AppWrapper() {
	return (
		<Router>
			<App />
		</Router>
	);
}

export default AppWrapper;
