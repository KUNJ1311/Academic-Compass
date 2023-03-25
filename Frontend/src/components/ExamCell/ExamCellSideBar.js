import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import student from "./svg/student.svg";
import marks from "./svg/marks.svg";
import attendance from "./svg/attendance.svg";
import book from "./svg/book.svg";
import { useLocation } from "react-router-dom";

const ExamCellSideBar = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const clickedIndexQueryParam = queryParams.get("clickedIndex");
	const [clickedIndex, setClickedIndex] = useState(clickedIndexQueryParam ? Number(clickedIndexQueryParam) : 0);
	const items = [
		{ group: "Manage Students", svg: student, link: "/managestudent" },
		{ group: "Manage Subjects", svg: book, link: "/managesubjects" },
		{ group: "Manage Marks", svg: marks, link: "/managemarks" },
		{ group: "Manage Attendance", svg: attendance, link: "/manageattendance" },
	];

	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleClick = (index) => {
		setClickedIndex(index);
		setHoveredIndex(index);
	};
	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};
	let navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/exam-cell-login");
		}
		//eslint-disable-next-line
	}, []);
	return (
		<div className="examcellsidebar">
			{items.map((item, index) => (
				<nav key={index} className="d-flex examcell-nav my-1">
					<div className="relative cursor-pointer">
						<Link className="link" to={`${item.link}?clickedIndex=${index}`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => handleClick(index)}>
							<header
								style={{
									backgroundColor: clickedIndex === index ? "#33336b" : hoveredIndex === index ? "#35373c" : "#2b2d31",
								}}
							>
								<div className="d-flex align-left">
									<img src={item.svg} alt="" />
									<div className="div mx-3">{item.group}</div>
									<svg
										className={`arrow `}
										style={{
											display: clickedIndex === index ? "flex" : hoveredIndex === index ? "flex" : "none",
										}}
										fill="#ebeced"
										width="25px"
										height="25px"
										viewBox="-12 0 32 32"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path>
									</svg>
								</div>
							</header>
						</Link>
					</div>
				</nav>
			))}
		</div>
	);
};

export default ExamCellSideBar;
