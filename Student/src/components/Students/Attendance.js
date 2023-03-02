import React from "react";
import Table from "react-bootstrap/Table";
const Attendance = (props) => {
	const { attendance } = props;
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
					{attendance.map((item) => (
						<tr key={item.course_code} className="table-row-hover">
							<td>{item.course_code}</td>
							<td>{item.subject}</td>
							<td>{item.attendance}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Attendance;
