import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/IuLogo.png";
import noimg from "../img/noimg.webp";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import ChangePassModal from "./ChangePassModal";

function MainNavbar(props) {
	// const [alert, setAlert] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	useEffect(() => {
		getStudents();
		//eslint-disable-next-line
	}, []);

	const host = "http://localhost:5000";
	//Get Students
	const [studentsdata, setStudentsdata] = useState({ enrolment: "", dob: "", name: "", branch: "", course: "", path: "" });
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
		} catch (error) {
			console.error(error.message);
			setStudentsdata([]);
		}
	};
	const [visible, setVisible] = useState(false);
	const handleMenuclick = () => {
		setVisible(!visible);
	};
	return (
		<>
			<div className="nav-color nav-stu sticky-top">
				<Navbar variant="dark">
					<button onClick={handleMenuclick} className="mx-2 menu-btn" style={{ borderColor: "rgba(215, 215, 215, 0.775)" }}>
						{!visible ? (
							<svg className="mx-1 my-1" stroke="rgba(215, 215, 215, 0.775)" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M4 6l16 0"></path>
								<path d="M4 12l16 0"></path>
								<path d="M4 18l16 0"></path>
							</svg>
						) : (
							<svg className="mx-1 my-1" fill="rgba(215, 215, 215, 0.775)" strokeWidth="0" viewBox="0 0 15 15" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
									fill="rgba(215, 215, 215, 0.775)"
								></path>
							</svg>
						)}
					</button>
					<Navbar.Brand>
						<img alt="" src={logo} width="165" height="52" className="d-inline-block hidden-300 align-top mx-4 iu-logo" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end mx-4">
						<Navbar.Text>
							<Button className="btn-nav mx-2" variant="warning" onClick={() => setModalShow(true)}>
								Change Pass
							</Button>
							<ChangePassModal showAlert={props.showAlert} show={modalShow} onHide={() => setModalShow(false)} />
						</Navbar.Text>
						<Navbar.Text>
							<Button className="btn-nav" onClick={props.handleLogout} variant="danger mx-2">
								Logout
							</Button>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<ul id="sidebar" className={`list-group mb-3 list-unstyled ${visible ? "view-sidebar" : ""}`}>
				<div className="sidebar">
					<div className="scroller">
						<li className="stu-li">{studentsdata?.path ? <img className="stuphoto" src={`${host}/api/${studentsdata.path}`} alt="Not Found" /> : <img className="stuphoto" src={noimg} alt="Not Found" />}</li>
						<li className="fw-bold pb-0 py-3">
							Name:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.name}</p>
						</li>
						<li className="fw-bold pb-0 py-3">
							Enrolment No:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.enrolment}</p>
						</li>
						<li className="fw-bold pb-0 py-3">
							Branch:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.branch}</p>
						</li>
						<li className="fw-bold pb-0 py-3">
							Course:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.course}</p>
						</li>
					</div>
				</div>
			</ul>
		</>
	);
}

export default MainNavbar;
