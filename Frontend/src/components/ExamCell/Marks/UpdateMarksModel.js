import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Row, Col, Form } from "react-bootstrap";
import marksimg from "../svg/marks.svg";

const UpdateMarksModel = (props) => {
	const [marks, setMarks] = useState(null);

	const handleMarksChange = (event) => {
		setMarks(event.target.value);
	};

	return (
		<div>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered>
				<Modal.Header style={{ backgroundColor: "#33336b", color: "white" }}>
					<Modal.Title id="contained-modal-title-vcenter">
						<img src={marksimg} alt="" width="40px" />
						<span style={{ position: "relative", top: "3px", left: "5px" }}>&nbsp;Update Marks</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<Form>
								<Form.Group as={Row} className="mb-3" controlId="enrolment">
									<Form.Label column sm="3">
										Enrolment No:
									</Form.Label>
									<Col>
										<Form.Control plaintext readOnly defaultValue={props.student["Enrolment No."]} />
									</Col>
								</Form.Group>
								<Form.Group as={Row} className="mb-3" controlId="stuname">
									<Form.Label column sm="3">
										Student Name:
									</Form.Label>
									<Col>
										<Form.Control plaintext readOnly defaultValue={props.student["Name"]} />
									</Col>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row className="d-flex">
						<Col sm={3}>
							<Form.Group className="mb-3">
								<Form.Label>Select Semester</Form.Label>
								<Form.Select defaultValue={props.semester}>
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
						<Col sm={3}>
							<Form.Group className="mb-3">
								<Form.Label>Select Test</Form.Label>
								<Form.Select defaultValue={props.test}>
									<option value="1">First Test</option>
									<option value="2">Second Test</option>
									<option value="3">Final Test</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className="mb-3">
								<Form.Label>Select Subject</Form.Label>
								<Form.Select defaultValue={props.subject}>
									<option value="1">Mathematics</option>
									<option value="2">Physics</option>
									<option value="3">Chemistry</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Row>
							<Col>
								<Form.Group as={Row} controlId="course">
									<Form.Label column>Course Code:</Form.Label>
									<Col>
										<Form.Control plaintext readOnly defaultValue="Data Not Found!" className="mx-2" />
									</Col>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group as={Row} controlId="mark">
									<Form.Label column sm="3" className="mx-3">
										Marks:
									</Form.Label>
									<Col>
										<Form.Control type="text" placeholder={props.student["Marks"]} onChange={handleMarksChange} />
									</Col>
								</Form.Group>
							</Col>
						</Row>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={props.onHide}>
						Close
					</Button>
					<Button variant="success" onClick={props.onHide}>
						Update Data
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default UpdateMarksModel;
