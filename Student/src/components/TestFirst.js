import React from "react";
import Table from "react-bootstrap/Table";
const TestFirst = () => {
	return (
		<div className="container-fluid height-max">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th width="150px">Course Code</th>
						<th>Subject</th>
						<th>Marks</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default TestFirst;
