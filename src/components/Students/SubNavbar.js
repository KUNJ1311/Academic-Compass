import React from "react";
import Attendance from "./Attendance";
import TestFirst from "./TestFirst";
import TestSecond from "./TestSecond";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TestFinal from "./TestFinal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";

function SubNavbar() {
	const host = "http://localhost:5000";
	let [data, setData] = useState({ testfirst: [], testsecond: [], testfinal: [], attendance: [] });
	const [selectedSemester, setSelectedSemester] = useState("semester-1");
	const id = localStorage.getItem("key");
	useEffect(() => {
		const getData = async () => {
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

	return (
		<>
			<div className="content ">
				<div className="subnav-sticky">
					<Tabs defaultActiveKey="attendance" id="uncontrolled-tab-example" className="bg-subnav mb-3">
						<Nav.Item className="ml-auto"></Nav.Item>
						<Tab eventKey="attendance" title="Attendance">
							{!data || !data.attendance ? (
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
					<DropdownButton id="dropdown-basic-button" className="drop-down d-flex" title="Semesters">
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-1");
							}}
							href="#/semester-1"
						>
							Semester-1
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-2");
							}}
							href="#/semester-2"
						>
							Semester-2
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-3");
							}}
							href="#/semester-3"
						>
							Semester-3
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-4");
							}}
							href="#/semester-4"
						>
							Semester-4
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-5");
							}}
							href="#/semester-5"
						>
							Semester-5
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-6");
							}}
							href="#/semester-6"
						>
							Semester-6
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-7");
							}}
							href="#/semester-7"
						>
							Semester-7
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setSelectedSemester("semester-8");
							}}
							href="#/semester-8"
						>
							Semester-8
						</Dropdown.Item>
					</DropdownButton>
				</div>
			</div>
		</>
	);
}

export default SubNavbar;
