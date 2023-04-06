import React, { useState, useContext, useEffect } from "react";
import { SubjectsContext } from "../../context/SubjectsContext";
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
import AddMarksExcel from "./AddMarksExcel";
import UpdateMarksModel from "./UpdateMarksModel";
import axios from "axios";

const ManageMarks = () => {
	const { school, branch, course, year, semester, courseCodeRef, subjects, selsubject, test, selcourse, handleSchoolChange, handleBranchChange, handleCourseChange, handleYearChange, handleSubjectChange, schoolOptionsList, yearOptionsList, branchOptionsList, courseOptionsList, handleSemesterChange, handleTestChange } = useContext(SubjectsContext);

	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState(null);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [stu, setStu] = useState([]);
	const [checkedRows, setCheckedRows] = useState({});
	const [isHeaderCheckboxChecked, setIsHeaderCheckboxChecked] = useState(false);

	useEffect(() => {
		const host = process.env.REACT_APP_HOST;
		const headers = {
			"auth-token": localStorage.getItem("token"),
		};
		setStu("");
		// Make API call when all dropdowns have values
		if (year && school && branch && course && subjects && selsubject && semester && test) {
			axios
				.post(
					`${host}/fetch/students/marks`,
					{
						year: year,
						school: school,
						branch: branch,
						course: course,
						subject: subjects[selsubject],
						sem: semester,
						test: test,
					},
					{ headers }
				)
				.then((response) => {
					setStu(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [year, school, branch, course, subjects, selsubject, semester, test]);

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

	const handleCheckboxChange = (e) => {
		const checked = e.target.checked;
		setIsHeaderCheckboxChecked(checked);
		const updatedCheckedRows = {};
		stu.forEach((student) => {
			updatedCheckedRows[student.enrolment] = checked;
		});
		setCheckedRows(updatedCheckedRows);
	};

	const handleRowCheckboxChange = (e, enrolment) => {
		const checked = e.target.checked;
		setCheckedRows((prevCheckedRows) => {
			const updatedCheckedRows = {
				...prevCheckedRows,
				[enrolment]: checked,
			};

			// Check if all rows are selected
			const allRowsSelected = stu.every((student) => updatedCheckedRows[student.enrolment]);

			// Update header checkbox state based on row checkbox state
			setIsHeaderCheckboxChecked(allRowsSelected);

			return updatedCheckedRows;
		});
	};

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
								Add Marks
							</Button>
							<AddMarksModal show={modalShow} onHide={() => setModalShow(false)} />
						</div>
						<span className="mx-auto">
							<h3 className="mb-0">
								<strong style={{ position: "relative", top: "2px", color: "rgb(60 60 179)" }}>Manage Marks</strong>
							</h3>
						</span>
						<div className="ml-auto">
							<Button className="btn-my" onClick={() => setModalShow2(true)}>
								Add Excel File
							</Button>
							<img className="mx-2" src={excel} alt="" />
							<AddMarksExcel show={modalShow2} onHide={() => setModalShow2(false)} />
						</div>
					</div>
					<hr className="my-2" style={{ border: "1px solid black" }} />
					<div style={{ backgroundColor: "white", position: "sticky", top: "0", zIndex: "999" }}>
						<Row className="d-flex mb-3">
							<Col>
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
							<Col sm={4}>
								<Form.Group>
									<Form.Label>&nbsp;Course</Form.Label>
									<Form.Select id="course" value={course} onChange={handleCourseChange} required>
										<option>Select Course</option>
										{courseOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
						<Row className="d-flex mb-3">
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Semester</Form.Label>
									<Form.Select id="semester" value={semester} onChange={handleSemesterChange} required>
										<option value="">Select Semester</option>
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
							<Col sm={5}>
								<Form.Group>
									<Form.Label>&nbsp;Subject</Form.Label>
									<Form.Select id="subject" value={selsubject} onChange={handleSubjectChange} required>
										<option value="">Select Subject</option>
										{Object.keys(subjects).map((subjectId) => (
											<option key={subjectId} value={subjectId}>
												{subjects[subjectId]}
											</option>
										))}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;Course Code</Form.Label>
									<Form.Control className="form-nonselect" plaintext readOnly id="course-code" value={selcourse ? selcourse : "Select Subject First"} ref={courseCodeRef} />
								</Form.Group>
							</Col>
							<Col sm={2}>
								<Form.Group>
									<Form.Label>&nbsp;Test</Form.Label>
									<Form.Select id="test" value={test} onChange={handleTestChange}>
										<option value="">Select Test</option>
										<option value="testfirst">First Test</option>
										<option value="testsecond">Second Test</option>
										<option value="testfinal">Final Test</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
					</div>
					<div className="main-content-table for-marks">
						<Table bordered hover className="table-my mb-2">
							<thead className="col-sticky" style={{ backgroundColor: "white" }}>
								<tr className="col-sticky" style={{ backgroundColor: "white" }}>
									<th className="col-sticky checkbox" style={{ backgroundColor: "white" }} width="30px">
										<Form.Check type="checkbox" id="headerCheckbox" checked={isHeaderCheckboxChecked} onChange={handleCheckboxChange} />
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Enrolment No.
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Name
									</th>
									<th className="col-sticky" style={{ backgroundColor: "white" }}>
										Marks
									</th>
								</tr>
							</thead>
							<tbody>
								{stu
									? stu.map((data) => (
											<tr key={data.enrolment} className="table-row-hover">
												<td className="checkbox">
													<Form.Check id="headerCheckbox" type="checkbox" checked={checkedRows[data.enrolment] || false} onChange={(e) => handleRowCheckboxChange(e, data.enrolment)} />
												</td>
												<td onClick={() => handleRowClick(data)}>{data.enrolment}</td>
												<td onClick={() => handleRowClick(data)}>{data.name}</td>
												<td onClick={() => handleRowClick(data)}>{data.marks}</td>
											</tr>
									  ))
									: null}
							</tbody>
						</Table>
						{selectedStudent && <UpdateMarksModel show={showUpdateModal} onHide={() => setShowUpdateModal(false)} student={selectedStudent} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageMarks;
