import React from "react";
import ArrowRightSm from "../../svgs/ArrowRightSm";
import { Link } from "react-router-dom";

const HowItWorks = () => {
	return (
		<section className="mt-[100px] py-[100px] bg-white-1 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
			<div className="text-center flex flex-col gap-4 items-center">
				<p className="font-light">
					Create, customize, and download mock data for your projects with ease.
				</p>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-1.2px]">
					How Rando works
				</h1>
			</div>

			<div className="mt-[44px] flex flex-col lg:flex-row gap-4 justify-between  h-fit lg:h-[520px] text-white-1">
				<div className="h-full w-full flex flex-col gap-4">
					<div className="h-[50%] border bg-black-1 rounded-xl p-5 flex flex-col gap-4">
						<h3 className="text-xl font-medium">Select Data Type</h3>
						<p className="font-light text-sm md:text-base lg:text-base">
							Our platform offers a wide range of data types to suit your needs.
							Whether you're looking for generic data or something more
							specific, like phone numbers, company names, or even product
							details, you can select the appropriate data type to generate
							relevant mock data.{" "}
						</p>
					</div>
					<div className="h-[50%] border bg-orange-1 rounded-xl p-5 flex flex-col gap-4">
						<h3 className="text-xl font-medium">Customize Data</h3>
						<p className="font-light text-sm md:text-base lg:text-base">
							With the ability to switch between different data providers,
							including options tailored to Nigerian data sources, you can
							generate datasets that are realistic and contextually accurate for
							your target demographic or application.
						</p>
					</div>
				</div>
				<div className="h-full border w-full bg-teal-1 rounded-xl p-5 flex flex-col gap-4">
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-medium">Generate Data</h3>
						<p className="font-light text-sm md:text-base lg:text-base">
							Click the 'Generate' button to create your mock data. After
							customizing your data parameters, simply click the 'Generate'
							button. Our system processes your specifications and quickly
							generates the mock data, ready for your use. The generation
							process is optimized for speed and efficiency, ensuring that even
							large datasets are created without delay. This immediate response
							helps you stay productive and focused on your project goals.
						</p>
					</div>
					<Link
						to={"/generate"}
						className="mt-auto flex flex-row gap-2 p-3 underline underline-offset-4">
						Start Generating <ArrowRightSm />
					</Link>
				</div>
				<div className="h-full border w-full bg-blue-1 rounded-xl p-5 flex flex-col gap-4">
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-medium">Download your JSON Data</h3>
						<p className="font-light text-sm md:text-base lg:text-base">
							Instantly download your data in JSON format for use in your
							projects. Once your data is generated, it's ready for download in
							a versatile JSON format. JSON is a lightweight data interchange
							format that's easy to read and write, making it perfect for web
							applications, APIs, and various other development projects. With
							one click, you can download your data and integrate it seamlessly
							into your workflow, saving time and reducing hassle.
						</p>
					</div>
					<Link
						to={"/generate"}
						className="mt-auto flex flex-row gap-2 p-3 underline underline-offset-4">
						Start Generating <ArrowRightSm />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
