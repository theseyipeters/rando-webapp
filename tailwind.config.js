/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "640px", // Small devices (640px and up)
				md: "768px", // Medium devices (768px and up)
				lg: "1024px", // Large devices (1024px and up)
				xl: "1280px", // Extra large devices (1280px and up)
				"2xl": "1536px", // 2x large devices (1536px and up)
			},
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
