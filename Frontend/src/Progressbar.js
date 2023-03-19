import React from "react";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
const Progressbar = ({ loading }) => {
	const [dots, setDots] = useState("");
	useEffect(() => {
		let interval;
		if (loading) {
			interval = setInterval(() => {
				setDots((prevDots) => {
					if (prevDots.length < 4) {
						return prevDots + ".";
					} else {
						return "";
					}
				});
			}, 500);
		} else {
			clearInterval(interval);
			setDots("");
		}

		return () => clearInterval(interval);
	}, [loading]);
	return (
		<div className="box-div">
			<ReactLoading type="spin" color="#442f86" height={105} width={105} />
			<span style={{ color: "#442f86", boxSizing: "border-box", width: "125px", textAlign: "left" }}>
				Loading<strong>.{dots}</strong>
			</span>
		</div>
	);
};

export default Progressbar;
