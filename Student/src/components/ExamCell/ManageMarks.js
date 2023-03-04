import React, { useState } from "react";
import ExamCellSideBar from "./ExamCellSideBar";
import Button from "react-bootstrap/Button";
import MainNavbarExam from "./MainNavbarExam";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddMarksModal from "./AddMarksModal";
import add from "./svg/add.svg";
import excel from "./svg/excel.svg";
import AddExcelModel from "./AddExcelModel";

const ManageMarks = () => {
	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
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
				<div className="main-content px-2 my-3">
					<div className="mb-2 d-flex justify-content-center align-items-center">
						<div className="mr-auto">
							<img className="mx-2" src={add} alt="" />
							<Button variant="primary" onClick={() => setModalShow(true)}>
								Add Marks
							</Button>
							<AddMarksModal show={modalShow} onHide={() => setModalShow(false)} />
						</div>
						<span className="mx-auto">
							<h3>
								<strong>Manage Marks</strong>
							</h3>
						</span>
						<div className="ml-auto">
							<img className="mx-2" src={excel} alt="" />
							<Button variant="success" onClick={() => setModalShow2(true)}>
								Add Excel File
							</Button>
							<AddExcelModel show={modalShow2} onHide={() => setModalShow2(false)} />
						</div>
					</div>
					<div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "999" }}>
						<Row className="d-flex">
							<Col sm={2}>
								<Form.Group className="mb-3">
									<Form.Label>&nbsp;Select Test</Form.Label>
									<Form.Select>
										<option selected disabled value="">
											Select Test
										</option>
										<option value="maths">First Test</option>
										<option value="physics">Second Test</option>
										<option value="chemistry">Final Test</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>&nbsp;Select Branch</Form.Label>
									<Form.Select>
										<option selected disabled value="">
											Select Branch
										</option>
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
										<option selected disabled value="">
											Select Semester
										</option>
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
										<option selected disabled value="">
											Select Subject
										</option>
										<option value="maths">Mathematics</option>
										<option value="physics">Physics</option>
										<option value="chemistry">Chemistry</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
					</div>
					<div className="">
						<div className="main-content-table scroller">
							<Table bordered hover className="table-my ">
								<thead className="col-sticky" style={{ backgroundColor: "white" }}>
									<tr className="col-sticky">
										<th className="col-sticky">Enrolment No.</th>
										<th className="col-sticky">Name</th>
										<th className="col-sticky">Course Code</th>
										<th className="col-sticky">Subject</th>
										<th className="col-sticky">Marks</th>
									</tr>
								</thead>
								<tbody>
									<tr className="table-row-hover">
										<td>210110101016</td>
										<td>Kunj Faladu Sureshbhai</td>
										<td>CSE101</td>
										<td>Computer Network</td>
										<td>20</td>
									</tr>
									<tr className="table-row-hover">
										<td>210110101016</td>
										<td>Kunj Faladu Sureshbhai</td>
										<td>CSE101</td>
										<td>Computer Network</td>
										<td>20</td>
									</tr>
									<tr className="table-row-hover">
										<td>210110101016</td>
										<td>Kunj Faladu Sureshbhai</td>
										<td>CSE101</td>
										<td>Computer Network</td>
										<td>20</td>
									</tr>
									<tr className="table-row-hover">
										<td>210110101016</td>
										<td>Kunj Faladu Sureshbhai</td>
										<td>CSE101</td>
										<td>Computer Network</td>
										<td>20</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageMarks;
