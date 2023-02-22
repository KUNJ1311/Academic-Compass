import React from "react";
import MainNavbar from "../MainNavbar";
import SubNavbar from "../SubNavbar";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/admin-login");
	}
	return (
		<div>
			<MainNavbar handleLogout={handleLogout} />
			<SubNavbar />
		</div>
	);
};

export default AdminHome;
