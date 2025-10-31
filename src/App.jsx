import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	Navigate,
} from "react-router-dom";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Admin/Dashbord/Dashboard';
import Appointment from './components/Admin/Appointment/Appointment';
import PatientManagement from './components/Admin/PatientManagement/PatientManagement';
import DocterManagement from './components/Admin/DocterManagement/DocterManagement';
import PatientDetails from './components/Admin/PatientManagement/PatientDetails';
import DoctorProfile from './components/Admin/DocterManagement/DoctorProfile';
import NewDoctor from './components/Admin/DocterManagement/NewDoctor';
import InventoryManagementDashboard from './components/Admin/InventoryManagement/InventoryManagementDashboard';
import LaboratoryManagement from './components/Admin/LaboratoryManagement/LaboratoryManagement';
import StaffDirectory from './components/Admin/Communication/StaffDirectory';
import CommunicationCalender from './components/Admin/Communication/CommunicationCalender';
import DischargeSummary from './components/Admin/Discharge/DischargeSummary';
import ReportingAnalytics from './components/Admin/ReportingAnalytics/ReportingAnalytics';
import DiagnosisManagement from './components/Admin/DiagnosisManagement/DiagnosisManagement';
import BillingPayment from './components/Admin/BillingPayment/BillingPayment';
const App = () => {
	const ProtectedRoute = ({ element, allowedRoles }) => {
		console.log({ allowedRoles });

		// const role = localStorage.getItem("role");
		const role ='admin'

		if (!Array.isArray(allowedRoles)) {
			console.error("ProtectedRoute: allowedRoles is not an array", allowedRoles);
			return <Navigate to="/unauthorized" />;
		}

		return allowedRoles.includes(role) ? (
			element
		) : (
			<Navigate to="/" />
		);
	};


	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path='/admin/*' element={<ProtectedRoute element={<Layout />} allowedRoles={["admin"]} />}  >
					<Route index element={<Dashboard />} />
					<Route path="appointment" element={<Appointment />} />
					{/* appointment */}
					{/* Patient Management  */}
					<Route
						path="patientmanagement"
						element={<PatientManagement />}
					/>
					{/* Patient Management  */}
					{/* Patient Management  */}
					<Route path="doctormanagement" element={<DocterManagement />} />
					<Route path="patient/:id" element={<PatientDetails />} />
					<Route path="doctorprofile" element={<DoctorProfile />} />
					<Route path="newdoctor" element={<NewDoctor />} />"
					{/* Patient Management  */}
					{/* inventorymanagement  */}
					<Route
						path="inventorymanagement"
						element={<InventoryManagementDashboard />}
					/>
					{/* inventorymanagement end  */}
					{/* laboratorymanagement   */}
					<Route
						path="laboratorymanagement"
						element={<LaboratoryManagement />}
					/>
					{/* laboratorymanagement  end  */}
					{/* TeleCommmunication  start  */}
					<Route path="telecommunication" element={<StaffDirectory />} />
					<Route
						path="CommuniCalender"
						element={<CommunicationCalender />}
					/>
					{/* TeleCommmunication  end  */}
					{/*Discharge Summary Start */}
					<Route path="dischargesummary" element={<DischargeSummary />} />
					{/*Discharge Summary End */}

					{/* Dashbord */}
					{/* <Route path="dashboard" element={<Dashboard />} /> */}
					{/* Dashbord */}

					{/* appointment */}
					<Route path="appointment" element={<Appointment />} />
					{/* appointment */}

					{/* Patient Management  */}
					<Route path="patientmanagement" element={<PatientManagement />} />
					{/* Patient Management  */}

					{/* Patient Management  */}
					<Route path="doctermanagement" element={<DocterManagement />} />
					<Route path="patient/:id" element={<PatientDetails />} />
					{/* Patient Management  */}

					{/* inventorymanagement  */}
					<Route path="inventorymanagement" element={<InventoryManagementDashboard />} />

					{/* inventorymanagement end  */}

					{/* laboratorymanagement   */}
					<Route path="laboratorymanagement" element={<LaboratoryManagement />} />
					{/* laboratorymanagement  end  */}

					{/* reportinganalytics  */}
					<Route path="reportinganalytics" element={<ReportingAnalytics />} />
					{/* reportinganalytics  end  */}

					{/* diagnosismanagement   */}
					<Route path="diagnosismanagement" element={<DiagnosisManagement />} />
					{/* diagnosismanagement  end  */}

					{/*Billing&Payment */}
					<Route path="billingpayment" element={<BillingPayment />} />
					{/*Billing&Payment */}
				</Route>
			</Routes>
		</Router>
	)
}

export default App