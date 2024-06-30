/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
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
