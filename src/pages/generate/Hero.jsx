import React, { useState } from "react";
import Dropdown from "../../components/ui/Dropdown";
import JSONTextArea from "../../components/ui/JSONTextArea";
import Stars from "../../svgs/Stars";
import axios from "axios";
import ResultContainer from "../../components/ui/ResultContainer";

const Hero = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const [schema, setSchema] = useState("");
	const [mockData, setMockData] = useState("");
	const baseURL = import.meta.env.VITE_ACCESS_CODE_URL;

	const generateMockData = (e) => {
		e.preventDefault();
		console.log(schema);
		try {
			const jsonData = JSON.parse(schema.trim());
			axios
				.post(`${baseURL}/generate`, jsonData)
				.then((response) => {
					console.log(response);
					setMockData(JSON.stringify(response.data, null, 2));
				})
				.catch((error) => {
					console.error("Error fetching data: ", error);
				});
		} catch (error) {
			console.error("Invalid JSON schema format: ", error);
		}
	};

	return (
		<div className="w-full px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] py-[220px]">
			<div className="w-full md:w-[80%] lg:w-[80%] xl:w-[60%] flex flex-col gap-[20px] text-black-2 text-sm md:text-base lg:text-base xl:text-lg">
				<h1 className="text-6xl flex leading-normal font-medium -tracking-[3.2px}">
					Generate Random JSON Mock Data Instantly with Rando. &#123;_&#125;
				</h1>
			</div>
			<form className="mt-[44px] flex flex-col">
				<Dropdown
					options={[`JSON`, `Table Format`]}
					label={`Choose input data format`}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
				<div className="mt-[80px]">
					<JSONTextArea
						value={schema}
						onChange={(newValue) => setSchema(newValue)}
						label={`Enter input data:`}
						placeholder={`{
	"name": "name",
	"first_name": "first_name",
	"last_name": "last_name",
	"phone_number": "phone_number"
}`}
					/>
				</div>
				<div className="w-fit min-w-56 ml-auto mt-[13px]">
					<button
						onClick={generateMockData}
						className="flex flex-row gap-2 w-full items-center justify-center text-white-1 bg-black-2 px-6 py-4 text-xl rounded-full">
						<Stars /> Generate
					</button>
				</div>
			</form>
			{mockData && (
				<div className="mt-[44px] flex flex-col">
					<ResultContainer
						label={`Results`}
						value={mockData}
					/>
				</div>
			)}
		</div>
	);
};

export default Hero;
