// src/components/Toast.js
import React from "react";
import MenuIcon from "../../svgs/MenuIcon";

const Toast = ({ message, type, onClose }) => {
	const getToastStyle = () => {
		switch (type) {
			case "success":
				return "bg-green-500 text-white";
			case "error":
				return "bg-red-500 text-white";
			case "warning":
				return "bg-yellow-500 text-black";
			default:
				return "bg-blue-500 text-white";
		}
	};
	const getToastType = () => {
		switch (type) {
			case "success":
				return <MenuIcon />;
			case "error":
				return <MenuIcon />;
			case "warning":
				return <MenuIcon />;
			default:
				return <MenuIcon />;
		}
	};

	return (
		<div className={`toast  p-4 rounded-md mb-4 w-fit`}>
			<div className={`w-4 ${getToastStyle()}`}>{getToastType()}</div>
			<div className="flex flex-row items-center ml-3">
				<p>{message}</p>

				<button
					onClick={onClose}
					className="ml-4 text-white">
					Close
				</button>
			</div>
		</div>
	);
};

export default Toast;
