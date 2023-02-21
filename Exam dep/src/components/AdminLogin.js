import React from "react";
import logo from "./img/iuLogo2.jpeg";
import logo2 from "./img/iuback.jpg";
import { Link, useNavigate } from "react-router-dom";
const AdminLogin = () => {
	let navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		window.localStorage.setItem("token", "adhaskdas");
		navigate("/admin-home");
	};
	return (
		<>
			<img className="iu-back " alt="" src={logo2} />
			<div className="login-page">
				<div className="wrapper">
					<img alt="" src={logo} width="350" height="180" className="d-inline-block hidden-300 align-top logo-2" />
					<h1 className="h1-login">Admin Login Page</h1>
					<form action="#">
						<svg className="bi bi-person-fill icon icon-user" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
							<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
						</svg>
						<svg className="bi bi-key-fill icon icon-pass" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
							<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
						</svg>
						<input className="input-login" type="text" placeholder="Enrolment No." />

						<input className="input-login" type="password" placeholder="DDMMYYYY" />
					</form>
					<button onClick={handleSubmit} className="login-button mb-3">
						Login
					</button>
					<Link className="mx-3" to="/admin-login">
						Admin
					</Link>
					<Link className="mx-3" to="/exam-cell-login">
						Exam Cell
					</Link>
					<Link className="mx-3" to="/super-admin-login">
						Super Admin
					</Link>
				</div>
			</div>
		</>
	);
};

export default AdminLogin;
