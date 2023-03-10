import React from "react";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = (props) => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		props.showAlert("Logged Out Successfully", "success");
		window.localStorage.clear();
		navigate("/");
	}
	useEffect(() => {
		if (localStorage.getItem("key")) {
		} else {
			navigate("/");
		}
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<MainNavbar handleLogout={handleLogout} />
			<SubNavbar />
		</>
	);
};

export default Home;
