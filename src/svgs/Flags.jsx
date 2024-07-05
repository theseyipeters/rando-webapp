import React from "react";
import usaFlag from "../assets/USAFlag.svg";

export const NigeriaFlag = () => {
	return (
		<svg
			width="25"
			height="26"
			viewBox="0 0 25 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				y="0.5"
				width="25"
				height="25"
				rx="12.5"
				fill="white"
			/>
			<path
				d="M12.5 1.28125C6.02812 1.28125 0.78125 6.52812 0.78125 13C0.78125 19.4719 6.02812 24.7188 12.5 24.7188C18.9719 24.7188 24.2188 19.4719 24.2188 13C24.2188 6.52812 18.9719 1.28125 12.5 1.28125ZM8.65898 23.2395V2.76055C9.85508 2.31055 11.1488 2.0625 12.5 2.0625C13.8512 2.0625 15.1449 2.31055 16.341 2.76055V23.2395C15.1449 23.6895 13.8512 23.9375 12.5 23.9375C11.1488 23.9375 9.85508 23.6895 8.65898 23.2395Z"
				fill="#0FA958"
			/>
		</svg>
	);
};

export const USAFlag = () => {
	return (
		<img
			src={usaFlag}
			alt="USA"
		/>
	);
};
