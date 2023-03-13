import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Row, Col, Form } from "react-bootstrap";
import marks from "../svg/marks.svg";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
const AddMarksExcel = (props) => {
	const [file, setFile] = useState("");
	const [loading, setLoading] = useState(false);
	const [dots, setDots] = useState("");

	const addExcel = async (e) => {
		setLoading(true);
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		try {
			const headers = {
				"auth-token": localStorage.getItem("token"),
			};
			await axios.post(`http://localhost:5000/data/importexcel/${e.target.semester.value}/${e.target.test.value}`, formData, { headers });
			props.showAlert("Data Added Successfully", "success");
			setLoading(false);
			props.onHide();
		} catch (error) {
			setLoading(false);
			props.showAlert("Only .CSV files are allowed", "danger");
			console.log(error);
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
						<img src={marks} alt="" width="40px" />
						<span style={{ position: "relative", top: "3px", left: "5px" }}>&nbsp;Add Marks</span>
					</Modal.Title>
				</Modal.Header>
				<Form onSubmit={addExcel} method="POST" encType="multipart/form-data">
					<Modal.Body>
						<Row className="d-flex">
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Select Semester</Form.Label>
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
							<Col sm={3}>
								<Form.Group>
									<Form.Label>&nbsp;Select Test</Form.Label>
									<Form.Select id="test" defaultValue="">
										<option disabled value="">
											Select Test
										</option>
										<option value="testfirst">First Test</option>
										<option value="testsecond">Second Test</option>
										<option value="testfinal">Final Test</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Add Excel File</Form.Label>
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

export default AddMarksExcel;
