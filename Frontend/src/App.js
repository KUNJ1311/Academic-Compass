import Home from "./components/Students/Home";
import StudentLogin from "./components/Students/StudentLogin";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AdminHome from "./components/Admin/AdminHome";
import SuperAdminHome from "./components/SuperAdmin/SuperAdminHome";
import AdminLogin from "./components/Admin/AdminLogin";
import ExamCellLogin from "./components/ExamCell/ExamCellLogin";
import SuperAdminLogin from "./components/SuperAdmin/SuperAdminLogin";
import ManageStudents from "./components/ExamCell/Students/ManageStudents";
import ManageSubjects from "./components/ExamCell/Subjects/ManageSubjects";
import ManageAttendance from "./components/ExamCell/ManageAttendance";
import ManageMarks from "./components/ExamCell/Marks/ManageMarks";
import NotFound from "./components/NotFound/NotFound";
import "./components/ExamCell/ExamCell.css";
import "./components/Students/Students.css";
import { SubjectsProvider } from "./components/context/SubjectsContext";
import { Alert, AlertProvider } from "./components/context/AlertContext";
function App() {
	const isLoggedIn = window.localStorage.getItem("token");

	return (
		<>
			<AlertProvider>
				<SubjectsProvider>
					<Router>
						<Alert />
						<Routes>
							<Route exact path="/" element={<StudentLogin />} />
							<Route path="/student-home" element={<Home />} />
							<Route path="/admin-home" element={isLoggedIn === "true" ? <AdminHome /> : <AdminLogin />} />
							<Route path="/super-admin-home" element={isLoggedIn === "true" ? <SuperAdminHome /> : <SuperAdminLogin />} />
							<Route exact path="/admin-login" element={<AdminLogin />} />
							<Route exact path="/exam-cell-login" element={<ExamCellLogin />} />
							<Route exact path="/super-admin-login" element={<SuperAdminLogin />} />
							<Route path="/manageattendance" element={<ManageAttendance />} />
							<Route path="/managestudent" element={<ManageStudents />} />
							<Route path="/managesubjects" element={<ManageSubjects />} />
							<Route path="/managemarks" element={<ManageMarks />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Router>
				</SubjectsProvider>
			</AlertProvider>
		</>
	);
}
export default App;
