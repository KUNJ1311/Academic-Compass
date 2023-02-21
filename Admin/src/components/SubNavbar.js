import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function SubNavbar() {
	return (
		<>
			<div className="content">
				<div className="subnav-sticky">
					<Tabs defaultActiveKey="attendance" id="uncontrolled-tab-example" className="bg-subnav mb-3">
						<Tab Link eventKey="attendance" title="Attendance"></Tab>
						<Tab eventKey="test-first" title="First Test"></Tab>
						<Tab eventKey="test-second" title="Second Test"></Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
}

export default SubNavbar;
