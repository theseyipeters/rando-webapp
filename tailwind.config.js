/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderWidth: {
				0.5: "0.5px",
				1: "1px",
				2: "2px",
			},
			boxShadow: {
				custom: "0px 0.4px 14px 0px rgba(0, 0, 0, 0.11)",
			},
			colors: {
				white: {
					1: "#FFFFFF",
					2: "#F4F4F4",
				},
				black: {
					1: "#000000",
					2: "#212121",
					3: "#242424",
				},
				teal: {
					1: "#20888F",
				},
				orange: {
					1: "#F46133",
				},
				blue: {
					1: "#35548F",
				},
			},
		},
	},
	plugins: [],
};
