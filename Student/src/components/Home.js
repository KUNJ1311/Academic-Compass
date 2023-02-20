import React from "react";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/login");
	}
	return (
		<div>
			<MainNavbar handleLogout={handleLogout} />
			<SubNavbar />
		</div>
	);
};

export default Home;
