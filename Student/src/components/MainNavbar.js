import React from "react";
import errorimg from "./img/error-photo.png";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/IuLogo.png";
import Button from "react-bootstrap/Button";

function MainNavbar(props) {
	return (
		<>
			<div className="nav-color sticky-top">
				<Navbar variant="dark">
					<Navbar.Brand>
						<img alt="" src={logo} width="165" height="52" className="d-inline-block hidden-300 align-top mx-4" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end mx-4">
						<Navbar.Text className="hidden-300 font-size mx-3">User:123456789</Navbar.Text>
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
					<li>Name:Kunj Faladu Sureshbhai</li>
					<li>EnRoll No:210110101016</li>
					<li>Branch:B.Tech-CSE</li>
					<li>Phone:8141583011</li>
				</div>
			</ul>
		</>
	);
}

export default MainNavbar;
