import React, { useState, useEffect } from "react";
import Down from "../../svgs/Down";
import { NigeriaFlag, USAFlag } from "../../svgs/Flags";

const CountryDropdown = () => {
	const [selectedCountry, setSelectedCountry] = useState("NG");

	// Fetch initial selectedCountry value from localStorage on component mount
	useEffect(() => {
		const storedCountry = localStorage.getItem("SELECTED_PROVIDER");
		if (storedCountry) {
			setSelectedCountry(storedCountry);
		}
	}, []);

	const handleChange = (event) => {
		const country = event.target.value;
		setSelectedCountry(country);
		localStorage.setItem("SELECTED_PROVIDER", country);
	};

	return (
		<div className="flex flex-row items-center gap-2 country-dropdown">
			<div className="flex flex-row items-center">
				<select
					className="leading-3 text-2xl lg:text-sm bg-transparent border-none cursor-pointer focus:outline-none"
					value={selectedCountry}
					onChange={handleChange}>
					<option
						className="leading-3"
						value="NG">
						NG
					</option>
					<option
						className="leading-3"
						value="US">
						US
					</option>
				</select>
			</div>
			{selectedCountry === "NG" && <NigeriaFlag />}
			{selectedCountry === "US" && <USAFlag />}
		</div>
	);
};

export default CountryDropdown;
