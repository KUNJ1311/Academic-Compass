import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/IuLogo.png";
import noimg from "../img/noimg.webp";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import ChangePassModal from "./ChangePassModal";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
function MainNavbar(props) {
	const [progress, setProgress] = useState(0);
	// const [alert, setAlert] = useState(null);
	const [modalShow, setModalShow] = useState(false);

	const host = process.env.REACT_APP_HOST;
	//Get Students
	const [studentsdata, setStudentsdata] = useState({ enrolment: "", dob: "", name: "", year: "", school: "", branch: "", course: "", path: "" });
	useEffect(() => {
		const getStudents = async () => {
			const id = localStorage.getItem("key");
			try {
				setProgress(Math.floor(Math.random() * 51) + 30);
				const response = await axios.get(`${host}/api/getstudentdata/${id}`);
				const data = response.data;
				setStudentsdata(data);
				setProgress(100);
			} catch (error) {
				console.error(error.message);
				setStudentsdata([]);
			}
		};
		getStudents();
		//eslint-disable-next-line
	}, []);
	const [visible, setVisible] = useState(false);
	const handleMenuclick = () => {
		setVisible(!visible);
	};
	return (
		<>
			<LoadingBar color="#fd2155" progress={progress} height={3} onLoaderFinished={() => setProgress(0)} />
			<div className="nav-color nav-stu sticky-top">
				<Navbar variant="dark">
					<button onClick={handleMenuclick} className="mx-2 menu-btn">
						<div style={{ width: "24px", height: "18px", position: "relative", transform: "rotate(0deg)" }}>
							<span style={{ display: "block", height: "2px", width: "100%", background: "white", transitionTimingFunction: "ease", transitionDuration: "0.5s", borderRadius: "0px", transformOrigin: "center center", position: "absolute", transform: !visible ? "translate3d(0px, 0px, 0px) rotate(0deg)" : "translate3d(0px, 9px, 0px) rotate(45deg)", marginTop: "-1px" }}></span>
							<span style={{ display: "block", height: "2px", width: "100%", background: "white", transitionTimingFunction: "ease-out", transitionDuration: "0.125s", borderRadius: "0px", transformOrigin: "center center", position: "absolute", opacity: !visible ? 1 : 0, top: "9px", marginTop: "-1px" }}></span>
							<span style={{ display: "block", height: "2px", width: "100%", background: "white", transitionTimingFunction: "ease", transitionDuration: "0.5s", borderRadius: "0px", transformOrigin: "center center", position: "absolute", transform: !visible ? "translate3d(0px, 18px, 0px) rotate(0deg)" : "translate3d(0px, 9px, 0px) rotate(-45deg)", marginTop: "-1px" }}></span>
						</div>
					</button>
					<Navbar.Brand>
						<img alt="" src={logo} width="165" height="52" className="d-inline-block hidden-300 align-top mx-4 iu-logo" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end mx-4">
						<Navbar.Text>
							<Button className="btn-nav mx-2" variant="warning" onClick={() => setModalShow(true)}>
								Change Password
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
							School:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.school}</p>
						</li>
						<li className="fw-bold pb-0 py-3">
							Branch:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.branch}</p>
						</li>
						<li className="fw-bold pb-0 py-3">
							Course:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.course}</p>
						</li>
						<li className="fw-bold pb-0 py-3">
							Academic Year:&nbsp;
							<p className="fw-normal my-0 mx-1">{studentsdata.year}</p>
						</li>
					</div>
				</div>
			</ul>
		</>
	);
}

export default MainNavbar;
