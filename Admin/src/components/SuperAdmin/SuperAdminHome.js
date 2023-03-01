import React from "react";
import { useNavigate } from "react-router-dom";
import MainNavbarSuperAdmin from "./MainNavbarSuperAdmin";

const SuperAdminHome = () => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/super-admin-login");
	}
	return (
		<div>
			<MainNavbarSuperAdmin handleLogout={handleLogout} />
		</div>
	);
};

export default SuperAdminHome;
