import React from "react";
import Attendance from "./Attendance";
import TestFirst from "./TestFirst";
import TestSecond from "./TestSecond";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TestFinal from "./TestFinal";
import Form from "react-bootstrap/Form";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";

function SubNavbar() {
	const host = "http://localhost:5000";
	let [data, setData] = useState({ testfirst: [], testsecond: [], testfinal: [], attendance: [] });
	const [selectedSemester, setSelectedSemester] = useState("");
	const id = localStorage.getItem("key");
	useEffect(() => {
		const getData = async () => {
			if (!selectedSemester) return;
			//API Call
			const response = await fetch(`${host}/api/getalldata/${selectedSemester}/${id}`, {
				method: "GET",
			});

			const json = await response.json();
			setData(json);
		};
		getData();
		//eslint-disable-next-line
	}, [selectedSemester]);
	const handleSemesterChange = (event) => {
		setSelectedSemester(event.target.value);
	};

	return (
		<>
			<div className="content">
				<div className="subnav-sticky">
					<Tabs defaultActiveKey="attendance" id="uncontrolled-tab-example" className="bg-subnav" style={{ overflow: "hidden" }}>
						<Nav.Item className="ml-auto"></Nav.Item>
						<Tab eventKey="attendance" title="Attendance">
							{!data || !data.attendance ? (
								<div className="box-table height-max">
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
												<td colSpan={3} className="text-center pt-3 table-row-hover">
													<h5 style={{ color: "red" }}>Data Not Found!!!</h5>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							) : (
								<Attendance attendance={data.attendance} />
							)}
						</Tab>
						<Tab eventKey="test-first" title="First Test">
							{!data || !data.testfirst ? (
								<div className="box-table height-max">
									<Table bordered hover>
										<thead>
											<tr>
												<th width="20%">Course Code</th>
												<th width="60%">Subject</th>
												<th width="20%">Marks</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colSpan={3} className="text-center pt-3 table-row-hover">
													<h5 style={{ color: "red" }}>Data Not Found!!!</h5>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							) : (
								<TestFirst testfirst={data.testfirst} />
							)}
						</Tab>
						<Tab eventKey="test-second" title="Second Test">
							{!data || !data.testsecond ? (
								<div className="box-table height-max">
									<Table bordered hover>
										<thead>
											<tr>
												<th width="20%">Course Code</th>
												<th width="60%">Subject</th>
												<th width="20%">Marks</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colSpan={3} className="text-center pt-3 table-row-hover">
													<h5 style={{ color: "red" }}>Data Not Found!!!</h5>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							) : (
								<TestSecond testsecond={data.testsecond} />
							)}
						</Tab>
						<Tab eventKey="test-final" title="Final Test">
							{!data || !data.testfinal ? (
								<div className="box-table height-max">
									<Table bordered hover>
										<thead>
											<tr>
												<th width="20%">Course Code</th>
												<th width="60%">Subject</th>
												<th width="20%">Marks</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colSpan={3} className="text-center pt-3 table-row-hover">
													<h5 style={{ color: "red" }}>Data Not Found!!!</h5>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							) : (
								<TestFinal testfinal={data.testfinal} />
							)}
						</Tab>
					</Tabs>
				</div>
				<Form.Group className="drop-down">
					<Form.Select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
						<option disabled value="">
							Select Semester
						</option>
						<option value="semester-1">1st Semester</option>
						<option value="semester-2">2nd Semester</option>
						<option value="semester-3">3rd Semester</option>
						<option value="semester-4">4th Semester</option>
						<option value="semester-5">5th Semester</option>
						<option value="semester-6">6th Semester</option>
						<option value="semester-7">7th Semester</option>
						<option value="semester-8">8th Semester</option>
					</Form.Select>
				</Form.Group>
			</div>
		</>
	);
}

export default SubNavbar;
