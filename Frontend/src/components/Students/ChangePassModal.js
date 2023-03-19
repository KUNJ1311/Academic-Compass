import React from "react";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
import pass from "./pass.svg";
import axios from "axios";
const ChangePassModal = (props) => {
	const changepassword = async (e) => {
		e.preventDefault();
		const id = localStorage.getItem("key");
		const newPass = e.target.elements.password.value;
		const repassword = e.target.elements.repassword.value;
		if (newPass === repassword) {
			try {
				await axios.put(`http://localhost:5000/api/changepass/${id}`, { newPass });
				props.showAlert("Password Changed Successfully", "success");
				props.onHide();
			} catch (error) {
				props.showAlert("Failed to change password", "danger");
			}
		} else {
			props.showAlert("Passwords do not match", "danger");
		}
	};

	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered>
			<Modal.Header style={{ backgroundColor: "#33336b", color: "white" }}>
				<Modal.Title id="contained-modal-title-vcenter">
					<img src={pass} alt="" width="40px" />
					<span style={{ position: "relative", top: "3px", left: "5px" }}>&nbsp;Change Password</span>
				</Modal.Title>
			</Modal.Header>
			<Form onSubmit={changepassword} method="PUT" encType="multipart/form-data">
				<Modal.Body>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>New Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="repassword">
						<Form.Label>Confirm New Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={props.onHide}>
						Close
					</Button>
					<Button type="submit" variant="success">
						Change Password
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default ChangePassModal;
