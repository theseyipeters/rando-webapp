import React from "react";
import UI from "../../../svgs/UI";
import ArrowRightSm from "../../../svgs/ArrowRightSm";

export default function FeatureCard({ icon, title, desc }) {
	return (
		<div className="w-full border border-black-2/30 h-[400px] md:h-[500px] p-8 rounded-2xl bg-white-1">
			<div className="h-full flex flex-col items-start justify-between gap-3">
				<div className="w-[70px] md:w-[50px] lg:w-[90px]">{icon}</div>

				<h3 className="text-2xl lg:text-3xl font-medium">{title}</h3>

				<p className="min-h-[174px]">{desc}</p>

				<button className="flex flex-row gap-2 p-3 underline underline-offset-4">
					Learn More <ArrowRightSm />
				</button>
			</div>
		</div>
	);
}
