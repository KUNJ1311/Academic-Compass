import React, { useState, useEffect, useContext } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { SubjectsContext } from "../../context/SubjectsContext";
import { AlertContext } from "../../context/AlertContext";
const AddSubjectsModal = (props) => {
	const { showAlert } = useContext(AlertContext);
	const { school, branch, course, handleSchoolChange, handleBranchChange, handleCourseChange, schoolOptionsList, branchOptionsList, courseOptionsList } = useContext(SubjectsContext);
	const [loading, setLoading] = useState(false);
	const [dots, setDots] = useState("");
	const [file, setFile] = useState("");

	// Handle form submission
	const handleSubmit = async (e) => {
		const host = process.env.REACT_APP_HOST;
		setLoading(true);
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		formData.append("branch", branch);
		formData.append("course", course);
		formData.append("school", school);
		formData.append("semester", e.target.semester.value);
		try {
			const headers = {
				"auth-token": localStorage.getItem("token"),
			};
			await axios.post(`${host}/api/importexcel/subjects`, formData, { headers });
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
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered>
			<Modal.Header style={{ backgroundColor: "#33336b", color: "white" }}>
				<Modal.Title id="contained-modal-title-vcenter">Add Subjects</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
				<Modal.Body>
					<Row className="d-flex mb-3">
						<Col sm={4}>
							<Form.Group>
								<Form.Label>&nbsp;School</Form.Label>
								<Form.Select id="school" value={school} onChange={handleSchoolChange} required>
									<option>Select School</option>
									{schoolOptionsList}
								</Form.Select>
							</Form.Group>
						</Col>
						<Col sm={4}>
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
					<Row>
						<Col sm={4}>
							<Form.Group>
								<Form.Label>&nbsp;Semester</Form.Label>
								<Form.Select id="semester" defaultValue="">
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
					<button className="btn btn-primary btn-md" type="submit">
						Add
					</button>
					<button className="btn btn-danger btn-md" onClick={props.onHide}>
						Close
					</button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default AddSubjectsModal;
