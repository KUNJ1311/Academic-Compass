import React from "react";
import Table from "react-bootstrap/Table";
const Attendance = () => {
	return (
		<div className="container-fluid  height-max">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th width="12%">Course Code</th>
						<th width="40%">Subject</th>
						<th width="23%">Lecture</th>
						<th width="20%">Lab</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>12</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>15</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Larry the Bird</td>
						<td>@twitter</td>
						<td>20</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Attendance;
