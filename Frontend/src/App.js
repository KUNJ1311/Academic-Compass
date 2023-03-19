import Home from "./components/Students/Home";
import StudentLogin from "./components/Students/StudentLogin";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";
import AdminHome from "./components/Admin/AdminHome";
import SuperAdminHome from "./components/SuperAdmin/SuperAdminHome";
import AdminLogin from "./components/Admin/AdminLogin";
import ExamCellLogin from "./components/ExamCell/ExamCellLogin";
import SuperAdminLogin from "./components/SuperAdmin/SuperAdminLogin";
import ManageStudents from "./components/ExamCell/Students/ManageStudents";
import ManageAttendance from "./components/ExamCell/ManageAttendance";
import ManageMarks from "./components/ExamCell/Marks/ManageMarks";
import NotFound from "./components/NotFound/NotFound";
import "./components/ExamCell/ExamCell.css";
import "./components/Students/Students.css";

function App() {
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};
	const isLoggedIn = window.localStorage.getItem("token");

	return (
		<>
			<Router>
				<Alert alert={alert} style={{ transform: "translate(-87.3%,10%)" }} />
				<Routes>
					<Route exact path="/" element={<StudentLogin showAlert={showAlert} />} />
					<Route path="/student-home" element={<Home showAlert={showAlert} />} />
					<Route path="/admin-home" element={isLoggedIn === "true" ? <AdminHome /> : <AdminLogin />} />
					<Route path="/super-admin-home" element={isLoggedIn === "true" ? <SuperAdminHome /> : <SuperAdminLogin />} />
					<Route exact path="/admin-login" element={<AdminLogin />} />
					<Route exact path="/exam-cell-login" element={<ExamCellLogin showAlert={showAlert} />} />
					<Route exact path="/super-admin-login" element={<SuperAdminLogin />} />
					<Route path="/manageattendance" element={<ManageAttendance />} />
					<Route path="/managestudent" element={<ManageStudents />} />
					<Route path="/managemarks" element={<ManageMarks showAlert={showAlert} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
