import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/IuLogo.png";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import errorimg from "./img/error-photo.png";

function MainNavbar(props) {
	useEffect(() => {
		if (localStorage.getItem("key")) {
			getStudents();
		} else {
			navigate("/login");
		}
		//eslint-disable-next-line
	}, []);

	let navigate = useNavigate();
	const host = "http://localhost:5000";
	//Get Students
	const [studentsdata, setStudentsdata] = useState({ enrolment: "", dob: "", name: "", branch: "", course: "" });
	const getStudents = async () => {
		//API Call
		try {
			const id = localStorage.getItem("key");
			// API Call
			const response = await fetch(`${host}/api/getstudentdata/${id}`, {
				method: "GET",
			});
			const json = await response.json();
			setStudentsdata(json);
			// navigate("/home");
		} catch (error) {
			console.error(error.message);
			setStudentsdata([]);
		}
	};

	return (
		<>
			<div className="nav-color sticky-top">
				<Navbar variant="dark">
					<Navbar.Brand>
						<img alt="" src={logo} width="165" height="52" className="d-inline-block hidden-300 align-top mx-4" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end mx-4">
						<Navbar.Text className="hidden-300 font-size mx-3">User:{studentsdata.enrolment}</Navbar.Text>
						<Navbar.Text>
							<Button onClick={props.handleLogout} variant="danger mx-2">
								Logout
							</Button>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<ul id="sidebar" className="d-lg-block list-group mb-3 list-unstyled">
				<div className="sidebar">
					<li>
						<img className="stuphoto" src={errorimg} alt="no" />
					</li>
					<li>Name:{studentsdata.name}</li>
					<li>Enrolment No:{studentsdata.enrolment}</li>
					<li>Branch:{studentsdata.branch}</li>
					<li>Course:{studentsdata.course}</li>
				</div>
			</ul>
		</>
	);
}

export default MainNavbar;
