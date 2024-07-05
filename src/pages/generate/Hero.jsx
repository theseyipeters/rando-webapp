import React, { useState } from "react";
import Dropdown from "../../components/ui/Dropdown";
import JSONTextArea from "../../components/ui/JSONTextArea";
import Stars from "../../svgs/Stars";
import axios from "axios";
import GlobalButton from "../../components/ui/GlobalButton";
import Download from "../../svgs/Download";
import ResultContainer from "../../components/ui/ResultContainer";
import Dropdown2 from "../../components/ui/Dropdown2";
import { JSONForm } from "../../components/JSONForm";

const Hero = () => {
	const [selectedOption, setSelectedOption] = useState("");

	return (
		<div className="w-full px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] py-[220px]">
			<div className="w-full md:w-[80%] lg:w-[80%] xl:w-[60%] flex flex-col gap-[20px] text-black-2 text-sm md:text-base lg:text-base xl:text-lg">
				<h1 className="text-6xl flex leading-normal font-medium -tracking-[3.2px}">
					Generate Random JSON Mock Data Instantly with Rando. &#123;_&#125;
				</h1>
			</div>

			<div className="mt-[84px] flex flex-row gap-8 h-full">
				<form className={`w-full  flex flex-col`}>
					<Dropdown
						options={[`JSON`, `Table Format`]}
						label={`Choose input data format`}
						selectedOption={selectedOption}
						setSelectedOption={setSelectedOption}
					/>

					{selectedOption === "JSON" && <JSONForm />}
					{selectedOption === "Table Format" && (
						<div className="h-[300px] flex items-center justify-center">
							<p className="text-black-1 text-2xl font-medium">
								Data format unavailable
							</p>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Hero;
