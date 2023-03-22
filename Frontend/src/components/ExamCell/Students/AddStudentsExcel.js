import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Row, Col, Form } from "react-bootstrap";
import student from "../svg/student.svg";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
const AddStudentsExcel = (props) => {
	const [file, setFile] = useState("");
	const [loading, setLoading] = useState(false);
	const [dots, setDots] = useState("");

	const addExcel = async (e) => {
		const host = process.env.REACT_APP_HOST;
		setLoading(true);
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		formData.append("branch", e.target.branch.options[e.target.branch.value].text);
		formData.append("course", e.target.course.options[e.target.course.value].text);
		formData.append("year", e.target.year.options[e.target.year.value].text);
		formData.append("school", e.target.school.options[e.target.school.value].text);
		try {
			const headers = {
				"auth-token": localStorage.getItem("token"),
			};
			await axios.post(`${host}/data-students/importexcel`, formData, { headers });
			props.showAlert("Data Added Successfully", "success");
			setLoading(false);
			props.onHide();
		} catch (error) {
			setLoading(false);
			props.showAlert("Only .CSV files are allowed", "danger");
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
									<Form.Select id="year" defaultValue="">
										<option disabled value="">
											Select Academic Year
										</option>
										<option value="1">2021-2022</option>
										<option value="2">2022-2023</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;School</Form.Label>
									<Form.Select id="school" defaultValue="">
										<option disabled value="">
											Select School
										</option>
										<option value="1">School of Engineering &#40;SOE&#41;</option>
										<option value="2">School of Science &#40;SOS&#41;</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Branch</Form.Label>
									<Form.Select id="branch" defaultValue="">
										<option disabled value="">
											Select Branch
										</option>
										<option value="1">B.Tech</option>
										<option value="2">M.Tech</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
						<Row className="d-flex mb-3">
							<Col>
								<Form.Group>
									<Form.Label>&nbsp;Course</Form.Label>
									<Form.Select id="course" defaultValue="">
										<option disabled value="">
											Select Course
										</option>
										<option value="1">Computer Science & Engineering &#40;CSE&#41;</option>
										<option value="2">Electronics & Communication Engineering &#40;ECE&#41;</option>
										<option value="3">Mechanical Engineering &#40;ME&#41;</option>
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
