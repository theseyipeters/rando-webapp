import React from "react";

export default function StatCard() {
	return (
		<div className="w-full bg-black text-white h-[197px] rounded-2xl px-[27px] my-auto flex items-center shadow-custom">
			<div className="flex flex-col">
				<h1 className="text-6xl">400</h1>
				<p className="font-light">Total tasks</p>
			</div>
		</div>
	);
}
