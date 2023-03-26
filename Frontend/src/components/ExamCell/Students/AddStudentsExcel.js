import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Row, Col, Form } from "react-bootstrap";
import student from "../svg/student.svg";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { SubjectsContext } from "../../context/SubjectsContext";
import { AlertContext } from "../../context/AlertContext";
const AddStudentsExcel = (props) => {
	const { school, branch, course, year, handleYearChange, handleSchoolChange, setCourse, handleBranchChange, handleCourseChange, yearOptionsList, schoolOptionsList, branchOptionsList, courseOptionsList } = useContext(SubjectsContext);
	const { showAlert } = useContext(AlertContext);
	const [file, setFile] = useState("");
	const [loading, setLoading] = useState(false);
	const [dots, setDots] = useState("");

	const addExcel = async (e) => {
		const host = process.env.REACT_APP_HOST;
		setLoading(true);
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		formData.append("branch", branch);
		formData.append("course", course);
		formData.append("school", school);
		formData.append("year", year);
		try {
			const headers = {
				"auth-token": localStorage.getItem("token"),
			};
			await axios.post(`${host}/api/importexcel/students`, formData, { headers });
			showAlert("Data Added Successfully", "success");
			setLoading(false);
			props.onHide();
		} catch (error) {
			setLoading(false);
			showAlert("Only .CSV files are allowed", "danger");
		}
	};
	useEffect(() => {
		let interval;
		if (loading) {
			interval = setInterval(() => {
				setDots((prevDots) => {
					if (prevDots.length < 4) {
						return prevDots + ".";
					} else {
						return "";
					}
				});
			}, 500);
		} else {
			clearInterval(interval);
			setDots("");
		}

		return () => clearInterval(interval);
	}, [loading]);
	return (
		<div>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered>
				<Modal.Header style={{ backgroundColor: "#33336b", color: "white" }}>
					<Modal.Title id="contained-modal-title-vcenter">
						<img src={student} alt="" width="40px" />
						<span style={{ position: "relative", top: "3px", left: "5px" }}>&nbsp;Add Students</span>
					</Modal.Title>
				</Modal.Header>
				<Form onSubmit={addExcel} method="POST" encType="multipart/form-data">
					<Modal.Body>
						<Row className="d-flex mb-3">
							<Col sm={4}>
								<Form.Group>
									<Form.Label>&nbsp;Academic Year</Form.Label>
									<Form.Select id="year" value={year} onChange={handleYearChange} required>
										<option>Select Academic Year</option>
										{yearOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;School</Form.Label>
									<Form.Select id="school" value={school} onChange={handleSchoolChange} required>
										<option>Select School</option>
										{schoolOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Branch</Form.Label>
									<Form.Select id="branch" value={branch} onChange={handleBranchChange} required>
										<option>Select Branch</option>
										{branchOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
						<Row className="d-flex mb-3">
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;Course</Form.Label>
									<Form.Select
										id="course"
										value={course}
										onChange={(e) => {
											setCourse(e.target.value);
										}}
										required
									>
										<option>Select Course</option>
										{courseOptionsList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Excel File</Form.Label>
									<Form.Control
										type="file"
										name="file"
										id="file"
										onChange={(e) => {
											setFile(e.target.files[0]);
										}}
									/>
								</Form.Group>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						{loading ? (
							<>
								<Spinner animation="grow" variant="danger" />
								<span style={{ color: "red", boxSizing: "border-box", width: "100px", textAlign: "left" }}>
									Uploading<strong>.{dots}</strong>
								</span>
							</>
						) : (
							""
						)}
						<Button variant="danger" onClick={props.onHide}>
							Close
						</Button>
						<Button type="submit" variant="success">
							Add Data
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
};

export default AddStudentsExcel;
