import React from "react";
import Table from "react-bootstrap/Table";
const Attendance = () => {
	return (
		<div className="container-fluid height-max">
			<Table bordered hover>
				<thead>
					<tr>
						<th width="20%">Course Code</th>
						<th width="60%">Subject</th>
						<th width="20%">Attendance</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>12</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>15</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Larry the Bird</td>
						<td>20</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Attendance;
