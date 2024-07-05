import React, { useEffect, useState } from "react";
import JSONTextArea from "./ui/JSONTextArea";
import Stars from "../svgs/Stars";
import axios from "axios";
import GlobalButton from "./ui/GlobalButton";
import Download from "../svgs/Download";
import ResultContainer from "./ui/ResultContainer";
import Dropdown2 from "./ui/Dropdown2";
import { APP_USER_TEMPLATE } from "../templates/Templates";
import { BANK_USER_TEMPLATE } from "../templates/Templates";
import { PLACEHOLDER } from "../templates/Templates";
import { useProvider } from "../context/ProviderContext";

export const JSONForm = () => {
	const [selectedTemplate, setSelectedTemplate] = useState("");
	const [schema, setSchema] = useState("");
	const [mockData, setMockData] = useState("");
	const { provider, setProvider } = useProvider();
	const baseURL = import.meta.env.VITE_ACCESS_CODE_URL;

	const generateMockData = (e) => {
		e.preventDefault();
		console.log(schema);
		try {
			const jsonData = JSON.parse(schema.trim());

			setMockData("");
			axios
				// .post(`http://localhost:5000/generate?provider=${provider}`, jsonData)
				.post(`${baseURL}/generate?provider=${provider}`, jsonData)
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

	useEffect(() => {
		if (selectedTemplate === `App User Template`) {
			setSchema(APP_USER_TEMPLATE);
		} else if (selectedTemplate === "Bank User Template") {
			setSchema(BANK_USER_TEMPLATE);
		}
	}, [selectedTemplate]);

	return (
		<div className="w-full flex flex-row gap-6">
			<div className="w-full mt-[80px]">
				<JSONTextArea
					value={schema}
					onChange={(newValue) => setSchema(newValue)}
					label={`Enter input data:`}
					placeholder={PLACEHOLDER}
				/>
				<div className="w-full flex flex-row items-center justify-between  mt-[13px]">
					<div className={` ${mockData ? "w-full" : "w-[30%"}`}>
						<Dropdown2
							options={["App User Template", "Bank User Template"]}
							label={`Choose template`}
							selectedOption={selectedTemplate}
							setSelectedOption={setSelectedTemplate}
						/>
					</div>
					<div className="flex flex-row gap-3">
						<GlobalButton
							onClick={(e) => {
								e.preventDefault();
								setSchema("");
							}}
							className={`flex flex-row text-center items-center justify-center gap-2`}
							variant={`stroke`}
							state={`default`}
							size={`md`}>
							Clear
						</GlobalButton>
						<GlobalButton
							className="flex flex-row gap-2  w-full items-center justify-center"
							onClick={generateMockData}
							variant={`primary`}
							state={`default`}
							size={`md`}>
							<Stars /> Generate
						</GlobalButton>
					</div>
				</div>
			</div>

			{mockData && (
				<div className="w-full flex flex-col h-full mt-[80px]">
					<div className="">
						<ResultContainer
							label={`Results:`}
							value={mockData}
						/>
					</div>

					<div className="flex flex-row gap-2 ml-auto mt-[13px]">
						<GlobalButton
							className={`flex flex-row items-center gap-2`}
							variant={`teal`}
							state={`default`}
							size={`md`}>
							<Download />
							Save results
						</GlobalButton>
						<GlobalButton
							onClick={() => {
								setMockData();
							}}
							className={`flex flex-row text-center items-center justify-center gap-2`}
							variant={`stroke`}
							state={`default`}
							size={`md`}>
							Clear
						</GlobalButton>
					</div>
				</div>
			)}
		</div>
	);
};
