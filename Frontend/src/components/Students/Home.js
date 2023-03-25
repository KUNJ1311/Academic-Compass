import React, { useContext } from "react";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { AlertContext } from "../context/AlertContext";
const Home = () => {
	const { showAlert } = useContext(AlertContext);
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		showAlert("Logged Out Successfully", "success");
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
			<div className="stu-main-div">
				<MainNavbar handleLogout={handleLogout} />
				<SubNavbar />
			</div>
		</>
	);
};

export default Home;
