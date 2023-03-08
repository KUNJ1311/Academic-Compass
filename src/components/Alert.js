import React from "react";

function Alert(props) {
	const capitalize = (word) => {
		if (word === "danger") {
			word = "error";
		}
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	return (
		<div style={{ height: "60px", position: "absolute", top: props.alert ? 0 : "-100px", width: "100%", zIndex: "9999", overflow: "hidden", transition: "0.5s ease-out" }}>
			{props.alert && (
				<div className={`alert alert-${props.alert.type} alert-dismissible sticky-onnav fade show`} role="alert">
					<strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
				</div>
			)}
		</div>
	);
}

export default Alert;
