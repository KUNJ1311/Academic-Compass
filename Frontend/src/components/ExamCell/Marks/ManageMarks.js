import React, { useState } from "react";
import ExamCellSideBar from "../ExamCellSideBar";
import Button from "react-bootstrap/Button";
import MainNavbarExam from "../MainNavbarExam";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddMarksModal from "./AddMarksModal";
import add from "../svg/adds.svg";
import excel from "../svg/excel.svg";
import AddExcelModel from "./AddMarksExcel";
import setting from "../svg/settings.svg";
import UpdateMarksModel from "./UpdateMarksModel";
import Alert from "../../Alert";

const ManageMarks = () => {
	const [alert, setAlert] = useState(null);

	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState(null);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [selectedSemester, setSelectedSemester] = useState("");
	const [selectedSubject, setSelectedSubject] = useState("");
	const [selectedTest, setSelectedTest] = useState("");
	const stu = [
		{
			"Enrolment No.": "210110101016",
			Name: "Kunj Faladu Sureshbhai",
			"Course Code": "CSE101",
			Subject: "Computer Network",
			Marks: "22",
		},
		{
			"Enrolment No.": "210110101019",
			Name: "Rishi",
			"Course Code": "CSE101",
			Subject: "Computer Network",
			Marks: "20",
		},
		{
			"Enrolment No.": "2101101010161",
			Name: "Kunj Faladu Sureshbhai",
			"Course Code": "CSE101",
			Subject: "Computer Network",
			Marks: "22",
		},
		{
			"Enrolment No.": "2101101010191",
			Name: "Rishi",
			"Course Code": "CSE101",
			Subject: "Computer Network",
			Marks: "20",
		},
	];
	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};
	let navigate = useNavigate();
	function handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		navigate("/exam-cell-login");
	}
	const handleRowClick = (data) => {
		setSelectedStudent(data);
		setShowUpdateModal(true);
	};

	return (
		<>
			<Alert alert={alert} />
			<MainNavbarExam handleLogout={handleLogout} />
			<div className="d-flex">
				<ExamCellSideBar />
				<div className="main-content px-2 mt-3">
					<div className="d-flex justify-content-center align-items-center">
						<div className="mr-auto">
							<img className="mx-2" src={add} alt="" />
							<Button className="btn-my" onClick={() => setModalShow(true)}>
								Add Marks
							</Button>
							<AddMarksModal show={modalShow} onHide={() => setModalShow(false)} />
						</div>
						<span className="mx-auto">
							<h3 className="mb-0">
								<img className="mx-1" src={setting} alt="" />
								<strong className="mx-1" style={{ position: "relative", top: "2px" }}>
									Manage Marks
								</strong>
							</h3>
						</span>
						<div className="ml-auto">
							<Button className="btn-my" onClick={() => setModalShow2(true)}>
								Add Excel File
							</Button>
							<img className="mx-2" src={excel} alt="" />
							<AddExcelModel showAlert={showAlert} show={modalShow2} onHide={() => setModalShow2(false)} />
						</div>
					</div>
					<hr className="my-2" style={{ border: "1px solid black" }} />
					<div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "999" }}>
						<Row className="d-flex mb-3">
							<Col sm={2}>
								<Form.Group>
									<Form.Label>&nbsp;Select Test</Form.Label>
									<Form.Select value={selectedTest} onChange={(e) => setSelectedTest(e.target.value)}>
										<option disabled value="">
											Select Test
										</option>
										<option value="1">First Test</option>
										<option value="2">Second Test</option>
										<option value="3">Final Test</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;Select Branch</Form.Label>
									<Form.Select defaultValue="">
										<option disabled value="">
											Select Branch
										</option>
										<option value="1">Computer Science & Engineering</option>
										<option value="2">Electronics & Communication Engineering</option>
										<option value="3">Mechanical Engineering</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={2}>
								<Form.Group>
									<Form.Label>&nbsp;Select Semester</Form.Label>
									<Form.Select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
										<option disabled value="">
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
								<Form.Group>
									<Form.Label>&nbsp;Select Subject</Form.Label>
									<Form.Select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
										<option disabled value="">
											Select Subject
										</option>
										<option value="1">Mathematics</option>
										<option value="2">Physics</option>
										<option value="3">Chemistry</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
					</div>
					<div className="main-content-table scroller">
						<Table bordered hover className="table-my mb-2">
							<thead className="col-sticky" style={{ backgroundColor: "white" }}>
								<tr className="col-sticky" style={{ backgroundColor: "white" }}>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Enrolment No.
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Name
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Course Code
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Subject
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Marks
									</th>
								</tr>
							</thead>
							<tbody>
								{stu.map((data) => (
									<tr key={data["Enrolment No."]} className="table-row-hover" onClick={() => handleRowClick(data)}>
										<td>{data["Enrolment No."]}</td>
										<td>{data.Name}</td>
										<td>{data["Course Code"]}</td>
										<td>{data.Subject}</td>
										<td>{data.Marks}</td>
									</tr>
								))}
							</tbody>
						</Table>
						{selectedStudent && <UpdateMarksModel show={showUpdateModal} onHide={() => setShowUpdateModal(false)} student={selectedStudent} semester={selectedSemester} subject={selectedSubject} test={selectedTest} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageMarks;
