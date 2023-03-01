import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ExamCellSideBar = () => {
	const [showFirst, setShowFirst] = useState(true);
	const [showSecond, setShowSecond] = useState(false);
	const [showThird, setShowThird] = useState(false);

	const handleClick = (icon) => {
		if (icon === "first") {
			setShowFirst(true);
			setShowSecond(false);
			setShowThird(false);
		} else if (icon === "second") {
			setShowFirst(false);
			setShowSecond(true);
			setShowThird(false);
		} else if (icon === "third") {
			setShowFirst(false);
			setShowSecond(false);
			setShowThird(true);
		}
	};

	return (
		<div className="examcellsidebar">
			<nav className="d-flex examcell-nav my-1">
				<div className="relative cursor-pointer">
					<Link className="link" to="/managestudent" onClick={() => handleClick("first")}>
						<header>
							<div className="d-flex align-left">
								<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7M11.9999 21.5L14.025 21.095C14.2015 21.0597 14.2898 21.042 14.3721 21.0097C14.4452 20.9811 14.5147 20.9439 14.579 20.899C14.6516 20.8484 14.7152 20.7848 14.8426 20.6574L21.5 14C22.0524 13.4477 22.0523 12.5523 21.5 12C20.9477 11.4477 20.0523 11.4477 19.5 12L12.8425 18.6575C12.7152 18.7848 12.6516 18.8484 12.601 18.921C12.5561 18.9853 12.5189 19.0548 12.4902 19.1278C12.458 19.2102 12.4403 19.2984 12.405 19.475L11.9999 21.5ZM13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
										stroke="#ebeced"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div className="div mx-3">Manage Students</div>
								<svg className={`arrow d-flex `} style={{ display: showFirst === "first" ? "" : "none" }} fill="#ebeced" width="25px" height="25px" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path>
								</svg>
							</div>
						</header>
					</Link>
				</div>
			</nav>
			<nav className="d-flex examcell-nav my-1">
				<div className="relative cursor-pointer">
					<Link className="link" to="/managemarks" onClick={() => handleClick("second")}>
						<header>
							<div className="d-flex align-left">
								<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="back" fillOpacity=".16" stroke="#ebeced" strokeWidth="1.5" strokeMiterlimit="10" />
									<path d="m8 13 3 3 5-7" stroke="#ebeced" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<div className="div mx-3">Manage Marks</div>
								<svg className="arrow d-flex" style={{ display: showSecond === "second" ? "" : "none" }} fill="#ebeced" width="25px" height="25px" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path>
								</svg>
							</div>
						</header>
					</Link>
				</div>
			</nav>
			<nav className="d-flex examcell-nav my-1">
				<div className="relative cursor-pointer">
					<Link className="link" to="/manageattendance" onClick={() => handleClick("third")}>
						<header>
							<div className="d-flex align-left">
								<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.56 18V13" stroke="#ebeced" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M12 15.5H7" stroke="#ebeced" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M8 2V5" stroke="#ebeced" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M16 2V5" stroke="#ebeced" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M15.81 3.41992C19.15 3.53992 20.84 4.76992 20.94 9.46992L21.07 15.6399C21.15 19.7599 20.2 21.8299 15.2 21.9399L9.20002 22.0599C4.20002 22.1599 3.16002 20.1199 3.08002 16.0099L2.94002 9.82992C2.84002 5.12992 4.49002 3.82992 7.81002 3.57992L15.81 3.41992Z" stroke="#ebeced" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<div className="div mx-3">Manage Attendance</div>
								<svg className={`arrow d-flex`} style={{ display: showThird === "third" ? "" : "none" }} fill="#ebeced" width="25px" height="25px" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path>
								</svg>
							</div>
						</header>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default ExamCellSideBar;
