import React from "react";
import Table from "react-bootstrap/Table";
const TestFinal = (props) => {
	const { testfinal } = props;
	return (
		<div className="box-table">
			<div className="scroller-t">
				<Table bordered hover>
					<thead>
						<tr>
							<th width="20%">Course Code</th>
							<th width="60%">Subject</th>
							<th width="20%">Marks</th>
						</tr>
					</thead>
					<tbody>
						{testfinal.map((item) => (
							<tr key={item.course_code} className="table-row-hover">
								<td>{item.course_code}</td>
								<td>{item.subject}</td>
								<td>{item.marks}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default TestFinal;
