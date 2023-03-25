import React, { createContext, useState, useContext } from "react";

export const AlertContext = createContext();

function Alert() {
	const alertContext = useContext(AlertContext);

	const capitalize = (word) => {
		if (word === "danger") {
			word = "error";
		}
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	return (
		<div style={{ height: "60px", position: "absolute", top: alertContext.alert ? 0 : "-100px", width: "100%", zIndex: "9999", overflow: "hidden", transition: "0.5s ease-out" }}>
			{alertContext.alert && (
				<div className={`alert alert-${alertContext.alert.type} alert-dismissible sticky-onnav fade show`} role="alert">
					<strong>{capitalize(alertContext.alert.type)}</strong>: {alertContext.alert.message}
				</div>
			)}
		</div>
	);
}

function AlertProvider(props) {
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	return <AlertContext.Provider value={{ alert, showAlert }}>{props.children}</AlertContext.Provider>;
}

export { AlertProvider, Alert };
