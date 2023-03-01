import React from "react";
import { useNavigate } from "react-router-dom";
import MainNavbarAdmin from "./MainNavbarAdmin";

const AdminHome = () => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/admin-login");
	}
	return (
		<div>
			<MainNavbarAdmin handleLogout={handleLogout} />
		</div>
	);
};

export default AdminHome;
