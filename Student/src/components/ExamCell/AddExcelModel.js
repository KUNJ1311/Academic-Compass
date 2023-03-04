import React from "react";
import Button from "react-bootstrap/Button";
import { Modal, Row, Col, Form } from "react-bootstrap";

const AddExcelModel = (props) => {
	return (
		<div>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Add Marks</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="d-flex">
						<Col sm={3}>
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
						<Col sm={3}>
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
							<Form.Group controlId="formFile" className="mb-3">
								<Form.Label>Add Excel File</Form.Label>
								<Form.Control type="file" />
							</Form.Group>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={props.onHide}>
						Close
					</Button>
					<Button variant="success" onClick={props.onHide}>
						Add Data
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default AddExcelModel;
