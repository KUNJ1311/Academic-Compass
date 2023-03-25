import React, { useState, useContext } from "react";
import ExamCellSideBar from "../ExamCellSideBar";
import Button from "react-bootstrap/Button";
import MainNavbarExam from "../MainNavbarExam";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import add from "../svg/adds.svg";
import excel from "../svg/excel.svg";
import AddSubjectsExcel from "./AddSubjectsExcel";
import setting from "../svg/settings.svg";

import { SubjectsContext } from "../../context/SubjectsContext";

const ManageMarks = () => {
	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
	const { school, branch, course, handleSchoolChange, handleBranchChange, handleCourseChange, schoolOptionsList, branchOptionsList, courseOptionsList } = useContext(SubjectsContext);
	const sub = [
		{
			"Course Code": "CSE101",
			Subject: "Computer Network",
		},
	];

	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/exam-cell-login");
	}

	return (
		<>
			<MainNavbarExam handleLogout={handleLogout} />
			<div className="d-flex">
				<ExamCellSideBar />
				<div className="main-content px-2 mt-3">
					<div className="d-flex justify-content-center align-items-center">
						<div className="mr-auto">
							<img className="mx-2" src={add} alt="" />
							<Button className="btn-my" onClick={() => setModalShow(true)}>
								Add Subjects
							</Button>
							{/* <AddMarksModal show={modalShow} onHide={() => setModalShow(false)} /> */}
						</div>
						<span className="mx-auto">
							<h3 className="mb-0">
								<img className="mx-1" src={setting} alt="" />
								<strong className="mx-1" style={{ position: "relative", top: "2px" }}>
									Manage Subjects
								</strong>
							</h3>
						</span>
						<div className="ml-auto">
							<Button className="btn-my" onClick={() => setModalShow2(true)}>
								Add Excel File
							</Button>
							<img className="mx-2" src={excel} alt="" />
							<AddSubjectsExcel show={modalShow2} onHide={() => setModalShow2(false)} />
						</div>
					</div>
					<hr className="my-2" style={{ border: "1px solid black" }} />
					<div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "999" }}>
						<Row className="d-flex mb-3">
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;School</Form.Label>
									<Form.Select id="school" value={school} onChange={handleSchoolChange} required>
										<option>Select School</option>
										{schoolOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={2}>
								<Form.Group>
									<Form.Label>&nbsp;Branch</Form.Label>
									<Form.Select id="branch" value={branch} onChange={handleBranchChange} required>
										<option>Select Branch</option>
										{branchOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group>
									<Form.Label>&nbsp;Course</Form.Label>
									<Form.Select id="course" value={course} onChange={handleCourseChange} required>
										<option>Select Course</option>
										{courseOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Semester</Form.Label>
									<Form.Select id="semester" defaultValue="">
										<option disabled value="">
											Select Semester
										</option>
										<option value="sem1">1st Semester</option>
										<option value="sem2">2nd Semester</option>
										<option value="sem3">3rd Semester</option>
										<option value="sem4">4th Semester</option>
										<option value="sem5">5th Semester</option>
										<option value="sem6">6th Semester</option>
										<option value="sem7">7th Semester</option>
										<option value="sem8">8th Semester</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
					</div>
					<div className="main-content-table">
						<Table bordered hover className="table-my mb-2">
							<thead className="col-sticky" style={{ backgroundColor: "white" }}>
								<tr className="col-sticky" style={{ backgroundColor: "white" }}>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Course Code
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Subject
									</th>
								</tr>
							</thead>
							<tbody>
								{sub.map((data) => (
									<tr key={data["Course Code"]} className="table-row-hover">
										<td>{data["Course Code"]}</td>
										<td>{data.Subject}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageMarks;
