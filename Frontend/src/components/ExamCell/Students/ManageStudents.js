import React, { useState } from "react";
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
import Alert from "../../Alert";
import AddStudentsExcel from "./AddStudentsExcel";
import AddStudentsModal from "./AddStudentsModal";
const ManageStudents = () => {
	const [alert, setAlert] = useState(null);

	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
	const stu = [
		{
			"Enrolment No.": "210110101016",
			Name: "Kunj Faladu Sureshbhai",
			Branch: "B.Tech",
			Course: "CSE",
		},
		{
			"Enrolment No.": "210110101019",
			Name: "NO",
			Branch: "B.Tech",
			Course: "CSE",
		},
		{
			"Enrolment No.": "2101",
			Name: "Test",
			Branch: "B.Tech",
			Course: "CSE",
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
							<AddStudentsExcel showAlert={showAlert} show={modalShow2} onHide={() => setModalShow2(false)} />
						</div>
					</div>
					<hr className="my-2" style={{ border: "1px solid black" }} />
					<div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "999" }}>
						<Row className="d-flex mb-3">
							<Col sm={2}>
								<Form.Group>
									<Form.Label>&nbsp;Academic Year</Form.Label>
									<Form.Select id="branch" defaultValue="">
										<option disabled value="">
											Select Academic
										</option>
										<option value="1">2021-2022</option>
										<option value="2">2022-2023</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;School</Form.Label>
									<Form.Select id="course" defaultValue="">
										<option disabled value="">
											Select School
										</option>
										<option value="1">School of Engineering &#40;SOE&#41;</option>
										<option value="2">School of Science &#40;SOS&#41;</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={2}>
								<Form.Group>
									<Form.Label>&nbsp;Branch</Form.Label>
									<Form.Select defaultValue="">
										<option disabled value="">
											Select Branch
										</option>
										<option value="1">B.Tech</option>
										<option value="2">M.Tech</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;Course</Form.Label>
									<Form.Select defaultValue="">
										<option disabled value="">
											Select Course
										</option>
										<option value="1">Computer Science & Engineering &#40;CSE&#41;</option>
										<option value="2">Electronics & Communication Engineering &#40;ECE&#41;</option>
										<option value="3">Mechanical Engineering &#40;ME&#41;</option>
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
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Branch
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Course
									</th>
								</tr>
							</thead>
							<tbody>
								{stu.map((data) => (
									<tr key={data["Enrolment No."]} className="table-row-hover">
										<td>{data["Enrolment No."]}</td>
										<td>{data.Name}</td>
										<td>{data.Branch}</td>
										<td>{data.Course}</td>
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
