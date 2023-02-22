import AdminHome from "./components/Admin/AdminHome";
import SuperAdminHome from "./components/SuperAdmin/SuperAdminHome";
import ExamCellHome from "./components/ExamCell/ExamCellHome";
import AdminLogin from "./components/Admin/AdminLogin";
import ExamCellLogin from "./components/ExamCell/ExamCellLogin";
import SuperAdminLogin from "./components/SuperAdmin/SuperAdminLogin";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const isLoggedIn = window.localStorage.getItem("token");
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<AdminLogin />} />
					<Route path="/admin-home" element={isLoggedIn === "true" ? <AdminHome /> : <AdminLogin />} />
					<Route path="/exam-cell-home" element={isLoggedIn === "true" ? <ExamCellHome /> : <ExamCellLogin />} />
					<Route path="/super-admin-home" element={isLoggedIn === "true" ? <SuperAdminHome /> : <SuperAdminLogin />} />
					<Route exact path="/admin-login" element={<AdminLogin />} />
					<Route exact path="/exam-cell-login" element={<ExamCellLogin />} />
					<Route exact path="/super-admin-login" element={<SuperAdminLogin />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
