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
import { useSelector } from "react-redux";
import WebAppService from "../services/WebAppService";
import GlobalButtonWithIcon from "./ui/GlobalButtonWithIcon";

export const JSONForm = () => {
	const [selectedTemplate, setSelectedTemplate] = useState("");
	const [schema, setSchema] = useState("");
	const [mockData, setMockData] = useState("");
	const { provider, setProvider } = useProvider();
	const { isAuthenticated } = useSelector((state) => state.auth);
	const baseURL = import.meta.env.VITE_ACCESS_CODE_URL;

	const generateMockData = async (e) => {
		e.preventDefault();
		// console.log(schema);
		try {
			const jsonData = JSON.parse(schema.trim());

			setMockData("");
			const generateDataResponse = await WebAppService.generateJSON(
				jsonData,
				provider
			);
			// console.log(generateDataResponse);
			setMockData(JSON.stringify(generateDataResponse.data, null, 2));
		} catch (error) {
			console.error("Invalid JSON schema format: ", error);
		}
	};
	const generateMockDataWithAuth = async (e) => {
		e.preventDefault();
		// console.log(schema);
		try {
			const jsonData = JSON.parse(schema.trim());

			setMockData("");
			const generateDataResponse = await WebAppService.generateJSONData(
				jsonData,
				provider
			);
			// console.log(generateDataResponse);
			setMockData(JSON.stringify(generateDataResponse.data, null, 2));
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

	const templateOptions = [
		{
			name: "App User Template",
			isProtected: true,
		},
		{
			name: "Bank User Template",
			isProtected: false,
		},
	];

	return (
		<div className="w-full flex flex-col lg:flex-row gap-6">
			<div className="w-full">
				<JSONTextArea
					value={schema}
					onChange={(newValue) => setSchema(newValue)}
					label={`Enter input data:`}
					placeholder={PLACEHOLDER}
				/>
				<div className="w-full flex flex-col md:flex-row items-center justify-between gap-x-3 mt-[13px]">
					<div className={` ${mockData ? "w-full" : "w-full lg:w-[30%]"}`}>
						<Dropdown2
							isAuthenticated={isAuthenticated}
							options={templateOptions}
							label={`Choose template`}
							placeholder={`Choose template`}
							selectedOption={selectedTemplate}
							setSelectedOption={setSelectedTemplate}
						/>
					</div>
					<div className="w-full md:w-fit flex flex-col  md:flex-row items-center justify-between mt-8 md:mt-0 gap-3">
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
						<GlobalButtonWithIcon
							className="flex flex-row gap-2  w-full items-center justify-center"
							onClick={
								isAuthenticated ? generateMockDataWithAuth : generateMockData
							}
							variant={`primary`}
							state={`default`}
							size={`md`}
							icon={<Stars />}>
							Generate
						</GlobalButtonWithIcon>
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

					<div className="w-full md:w-fit flex flex-col  md:flex-row items-center justify-between mt-8 md:mt-0 gap-3">
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
						<GlobalButtonWithIcon
							className={`flex flex-row items-center gap-2`}
							variant={`teal`}
							state={`default`}
							size={`md`}
							icon={<Download />}>
							<span className="">Save results</span>
						</GlobalButtonWithIcon>
					</div>
				</div>
			)}
		</div>
	);
};
