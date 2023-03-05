import React from "react";
import Table from "react-bootstrap/Table";
const TestSecond = (props) => {
	const { testsecond } = props;
	return (
		<div className="container-fluid height-max">
			<Table bordered hover>
				<thead>
					<tr>
						<th width="20%">Course Code</th>
						<th width="60%">Subject</th>
						<th width="20%">Marks</th>
					</tr>
				</thead>
				<tbody>
					{testsecond.map((item) => (
						<tr key={item.course_code} className="table-row-hover">
							<td>{item.course_code}</td>
							<td>{item.subject}</td>
							<td>{item.marks}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TestSecond;
