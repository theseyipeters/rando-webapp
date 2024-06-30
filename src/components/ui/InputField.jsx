import React from "react";
import ArrowRightMd from "../../svgs/ArrowRightMd";

export default function InputField() {
	return (
		<div className="w-full">
			<label className="text-2xl">Subscribe to our Newsletter</label>
			<div className="w-full h-fit border-b border-[#5d5d5d] mt-[13px] flex flex-row justify-between items-center pr-8">
				<input
					type="text"
					placeholder="kylexy@example.com"
					className="border-none w-full h-[92px]  bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-3xl"
				/>
				<button className="hover:scale-[1.4] transition-scale duration-500 ease-out">
					<ArrowRightMd />
				</button>
			</div>
		</div>
	);
}
