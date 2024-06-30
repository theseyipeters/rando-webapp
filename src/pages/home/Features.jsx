import React from "react";
import FeatureCard from "./components/FeatureCard";
import UI from "../../svgs/UI";
import FilterIcon from "../../svgs/FilterIcon";
import JSONFile from "../../svgs/JSONFile";
import OpenSource from "../../svgs/OpenSource";

export default function Features() {
	return (
		<section className="text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
			<div>
				<p className="font-light">
					Create, customize, and download mock data for your projects with ease.
				</p>
				<h1 className="text-5xl font-medium tracking-[-1.2px]">
					Why use Rando?
				</h1>
			</div>
			<div className="mt-[44px] card-container grid grid-cols-2 w-full items-center gap-6 justify-between flex-wrap">
				<FeatureCard
					icon={<UI />}
					title={`User Friendly Interface`}
					desc={`Our platform is designed with simplicity in mind, ensuring that even
					users with minimal technical expertise can easily generate the data
					they need. The clean layout and straightforward process make it quick
					and efficient to create the perfect dataset for your needs.`}
				/>
				<FeatureCard
					icon={<FilterIcon />}
					title={`Highly Customizable`}
					desc={`Whether you need names, addresses, emails, or more specific data types, Rando allows you to fine-tune the parameters to generate exactly what you require. With the added ability to choose data providers, including options specific to Nigerian data, you can create datasets that are relevant and realistic for diverse applications.`}
				/>
				<FeatureCard
					icon={<JSONFile />}
					title={`Download in JSON Format`}
					desc={`Once you've customized and generated your data, you don't have to wait to get your hands on it. Simply click the download button, and your JSON file will be ready for immediate use. This feature ensures that you can seamlessly integrate your mock data into your projects without any delays.`}
				/>
				<FeatureCard
					icon={<OpenSource />}
					title={`Open Source`}
					desc={`Rando is committed to providing a robust and versatile tool that everyone can access without any cost. As an open-source project, we encourage developers from around the world to contribute, enhance, and innovate. This community-driven approach not only keeps the tool free but also ensures continuous improvement and the addition of new features.`}
				/>
			</div>
		</section>
	);
}
