import { React, useState, useContext, useEffect } from "react";
import logo from "../img/iuLogo2.jpeg";
import logo2 from "../img/iuback.jpeg";
import github from "../img/github.svg";
import gmail from "../img/mail.svg";
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../context/AlertContext";
const ExamCellLogin = () => {
	const { showAlert } = useContext(AlertContext);
	const host = process.env.REACT_APP_HOST;
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	let navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`${host}/api/auth/examcell/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: credentials.email, password: credentials.password }),
		});
		const json = await response.json();
		if (json.success) {
			localStorage.setItem("token", json.authtoken);
			showAlert("Logged in Successfully", "success");
			navigate("/managestudent");
		} else {
			showAlert("Invalid Details", "danger");
		}
	};
	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/managestudent");
		}
		//eslint-disable-next-line
	}, []);
	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className="full">
				<img className="iu-back " alt="" src={logo2} />
				<div className="login-page">
					<div className="wrapper">
						<img alt="" src={logo} width="350" height="180" className="d-inline-block hidden-300 align-top logo-2" />
						<h1 className="h1-login">Exam Cell Login</h1>
						<form action="#">
							<svg className="bi bi-person-fill icon icon-user" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
								<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
							</svg>
							<svg className="bi bi-key-fill icon icon-pass" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
								<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
							</svg>
							<input name="email" id="email" onChange={onChange} className="input-login" type="email" placeholder="Email ID" />

							<input name="password" id="password" onChange={onChange} className="input-login" type="password" placeholder="Password" />
							<button onClick={handleSubmit} className="login-button mb-3">
								Login
							</button>
						</form>
						<Link className="mx-1 link" to="/">
							<svg width="30px" height="30px" viewBox="0 1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 12L8 12" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Student
						</Link>
						<Link className="mx-1 link" to="/admin-login">
							<svg width="30px" height="30px" viewBox="0 1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 12L8 12" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Admin
						</Link>
						<Link className="mx-1 link" to="/super-admin-login">
							<svg width="30px" height="30px" viewBox="0 1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 12L8 12" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Super Admin
						</Link>
					</div>
				</div>
				<div className="credits">
					<p>Designed & Developed By Kunj Faladu</p>
					<div className="contact-icons">
						<span>Contact Me</span>
						<a href="mailto:kunjfaladu1311@gmail.com">
							<i>
								<img src={gmail} alt="" />
							</i>
						</a>
						<a href="https://github.com/KUNJ1311" target={"_blank"} rel="noreferrer">
							<i>
								<img src={github} alt="" />
							</i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExamCellLogin;
