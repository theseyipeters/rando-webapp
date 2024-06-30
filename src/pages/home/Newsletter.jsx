import React from "react";
import ArrowRightMd from "../../svgs/ArrowRightMd";

export default function Newsletter() {
	return (
		<section className="py-[100px] w-full h-fit bg-black-2 text-white-1 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
			<label className="text-2xl">Subscribe to our Newsletter</label>
			<div className="w-full h-fit border-b border-[#5d5d5d] mt-[33px] flex flex-row justify-between items-center pr-8">
				<input
					type="text"
					placeholder="kylexy@example.com"
					className="border-none w-full h-[92px]  bg-transparent placeholder:text-[#5D5D5D] focus:outline-none text-3xl"
				/>
				<button className="hover:scale-[1.4] transition-scale duration-500 ease-out">
					<ArrowRightMd />
				</button>
			</div>
		</section>
	);
}
