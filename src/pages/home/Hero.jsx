import React from "react";
import Stars from "../../svgs/Stars";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<div className="w-full px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] pt-[220px]">
			<div className="w-full md:w-[80%] lg:w-[80%] xl:w-[60%] flex flex-col gap-[20px] text-white-1 text-sm md:text-base lg:text-base xl:text-lg">
				<h1 className="text-6xl  flex leading-normal font-medium tracking-[-1.28px}">
					Generate Random JSON Mock Data Instantly with Rando. &#123;_&#125;
				</h1>
				<p className="font-light">
					Create, customize, and download mock data for your projects with ease.
				</p>

				<div className="w-fit min-w-46">
					<Link
						to={"/generate"}
						className="flex flex-row gap-2 w-full items-center justify-center text-black-2 bg-white-1 px-6 py-3 rounded-full">
						<Stars /> Generate
					</Link>
				</div>
			</div>
		</div>
	);
}
