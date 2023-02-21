import AdminHome from "./components/AdminHome";
import SuperAdminHome from "./components/SuperAdminHome";
import ExamCellHome from "./components/ExamCellHome";
import AdminLogin from "./components/AdminLogin";
import ExamCellLogin from "./components/ExamCellLogin";
import SuperAdminLogin from "./components/SuperAdminLogin";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const isLoggedIn = window.localStorage.getItem("token");
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<AdminLogin />} />
					<Route exact path="/admin-home" element={isLoggedIn === "true" ? <AdminHome /> : <AdminLogin />} />
					<Route exact path="/exam-cell-home" element={isLoggedIn === "true" ? <ExamCellHome /> : <ExamCellLogin />} />
					<Route exact path="/super-admin-home" element={isLoggedIn === "true" ? <SuperAdminHome /> : <SuperAdminLogin />} />
					<Route exact path="/admin-login" element={<AdminLogin />} />
					<Route exact path="/exam-cell-login" element={<ExamCellLogin />} />
					<Route exact path="/super-admin-login" element={<SuperAdminLogin />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
