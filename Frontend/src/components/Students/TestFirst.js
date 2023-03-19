import React from "react";
import Table from "react-bootstrap/Table";

const TestFirst = (props) => {
	const { testfirst } = props;
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
						{testfirst.map((item) => (
							<tr key={item.course_code} className="table-row-hover">
								<td>{item.course_code}</td>
								<td>{item.subject}</td>
								<td>{item.marks}</td>
							</tr>
						))}

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code12</td>
							<td>subject12</td>
							<td>marks12</td>
						</tr>
						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code12</td>
							<td>subject12</td>
							<td>marks12</td>
						</tr>
						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code12saddddddddddddd</td>
							<td>subject12asddddddddddddd</td>
							<td>marks12asssssssssssssssss</td>
						</tr>
						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code</td>
							<td>subject</td>
							<td>marks</td>
						</tr>

						<tr className="table-row-hover">
							<td>course_code12</td>
							<td>subject12</td>
							<td>marks12</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default TestFirst;
