import React from "react";
import ExamCellSideBar from "./ExamCellSideBar";
import MainNavbarExam from "./MainNavbarExam";
import { useNavigate } from "react-router-dom";

const ManageAttendance = () => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/exam-cell-login");
	}
	return (
		<>
			<MainNavbarExam handleLogout={handleLogout} />
			<ExamCellSideBar />
		</>
	);
};

export default ManageAttendance;
