import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/IuLogo.png";
import Button from "react-bootstrap/Button";

function MainNavbarAdmin(props) {
	return (
		<>
			<div className="nav-color sticky-top">
				<Navbar variant="dark">
					<Navbar.Brand>
						<img alt="" src={logo} width="165" height="52" className="d-inline-block hidden-300 align-top mx-4" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end mx-4">
						<Navbar.Text className="hidden-300 font-size mx-3">Admin</Navbar.Text>
						<Navbar.Text>
							<Button onClick={props.handleLogout} variant="danger mx-2">
								Logout
							</Button>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
}

export default MainNavbarAdmin;
