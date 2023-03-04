import React, { useState } from "react";
import ExamCellSideBar from "./ExamCellSideBar";
import MainNavbarExam from "./MainNavbarExam";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
const ManageStudents = () => {
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/exam-cell-login");
	}
	// //  State variables for branch, semester, and subject
	// const [branch, setBranch] = useState("");
	// const [semester, setSemester] = useState("");
	// const [subject, setSubject] = useState("");

	// //  Handle change events for branch, semester, and subject
	// const handleBranchChange = (event) => {
	// 	setBranch(event.target.value);
	// };

	// const handleSemesterChange = (event) => {
	// 	setSemester(event.target.value);
	// };

	// const handleSubjectChange = (event) => {
	// 	setSubject(event.target.value);
	// };

	return (
		<>
			<MainNavbarExam handleLogout={handleLogout} />
			<div className="d-flex">
				<ExamCellSideBar />
				<div className="main-content mx-3 my-3">
					<Row className="d-flex">
						<Col sm={4}>
							<Form.Group className="mb-3">
								<Form.Label>&nbsp;Select Branch</Form.Label>
								<Form.Select>
									<option value="">Select Branch</option>
									<option value="CSE">Computer Science & Engineering</option>
									<option value="ECE">Electronics & Communication Engineering</option>
									<option value="ME">Mechanical Engineering</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col sm={2}>
							<Form.Group className="mb-3">
								<Form.Label>&nbsp;Select Semester</Form.Label>
								<Form.Select>
									<option value="">Select Semester</option>
									<option value="1">1st Semester</option>
									<option value="2">2nd Semester</option>
									<option value="3">3rd Semester</option>
									<option value="4">4th Semester</option>
									<option value="5">5th Semester</option>
									<option value="6">6th Semester</option>
									<option value="7">7th Semester</option>
									<option value="8">8th Semester</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className="mb-3">
								<Form.Label>&nbsp;Select Subject</Form.Label>
								<Form.Select>
									<option value="">Select Subject</option>
									<option value="maths">Mathematics</option>
									<option value="physics">Physics</option>
									<option value="chemistry">Chemistry</option>
								</Form.Select>
							</Form.Group>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default ManageStudents;
