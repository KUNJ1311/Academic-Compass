import React from "react";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";

const Home = () => {
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		window.location.href = "./login";
	}
	return (
		<div>
			<MainNavbar handleLogout={handleLogout} />
			<SubNavbar />
		</div>
	);
};

export default Home;
