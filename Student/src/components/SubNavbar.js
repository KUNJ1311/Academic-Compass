import React from "react";
import Attendance from "./Attendance";
import TestFirst from "./TestFirst";
import TestSecond from "./TestSecond";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function SubNavbar() {
	return (
		<>
			<div className="content">
				<div className="subnav-sticky">
					<Tabs defaultActiveKey="attendance" id="uncontrolled-tab-example" className="bg-subnav mb-3">
						<Tab eventKey="attendance" title="Attendance">
							<Attendance />
						</Tab>
						<Tab eventKey="test-first" title="First Test">
							<TestFirst />
						</Tab>
						<Tab eventKey="test-second" title="Second Test">
							<TestSecond />
						</Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
}

export default SubNavbar;
