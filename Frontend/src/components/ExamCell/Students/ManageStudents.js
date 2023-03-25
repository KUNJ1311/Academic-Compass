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
import setting from "../svg/settings.svg";
import { SubjectsContext } from "../../context/SubjectsContext";
import AddStudentsExcel from "./AddStudentsExcel";
import AddStudentsModal from "./AddStudentsModal";

const ManageStudents = () => {
	const { school, branch, course, year, handleYearChange, handleSchoolChange, handleBranchChange, handleCourseChange, yearOptionsList, schoolOptionsList, branchOptionsList, courseOptionsList } = useContext(SubjectsContext);
	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
	const stu = [
		{
			"Enrolment No.": "210110101016",
			Name: "Kunj Faladu Sureshbhai",
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
								Add Students
							</Button>
							{/* <AddStudentsModal show={modalShow} onHide={() => setModalShow(false)} /> */}
						</div>
						<span className="mx-auto">
							<h3 className="mb-0">
								<img className="mx-1" src={setting} alt="" />
								<strong className="mx-1" style={{ position: "relative", top: "2px" }}>
									Manage Students
								</strong>
							</h3>
						</span>
						<div className="ml-auto">
							<Button className="btn-my" onClick={() => setModalShow2(true)}>
								Add Excel File
							</Button>
							<img className="mx-2" src={excel} alt="" />
							<AddStudentsExcel show={modalShow2} onHide={() => setModalShow2(false)} />
						</div>
					</div>
					<hr className="my-2" style={{ border: "1px solid black" }} />
					<div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "999" }}>
						<Row className="d-flex mb-3">
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Academic Year</Form.Label>
									<Form.Select id="year" value={year} onChange={handleYearChange} required>
										<option>Select Academic Year</option>
										{yearOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
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
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;Course</Form.Label>
									<Form.Select id="course" value={course} onChange={handleCourseChange} required>
										<option>Select Course</option>
										{courseOptionsList}
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
										Enrolment No.
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Name
									</th>
								</tr>
							</thead>
							<tbody>
								{stu.map((data) => (
									<tr key={data["Enrolment No."]} className="table-row-hover">
										<td>{data["Enrolment No."]}</td>
										<td>{data.Name}</td>
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

export default ManageStudents;
