import React from "react";
import ArrowRightMd from "../../svgs/ArrowRightMd";

export default function InputField2() {
	return (
		<div className="w-full">
			{/* <label className="text-2xl">Subscribe to our Newsletter</label> */}
			<div className="w-full h-fit border-b border-white-1 mt-[13px] flex flex-row justify-between items-center">
				<input
					type="text"
					placeholder="kylexy@example.com"
					className="border-none w-full h-[48px] font-matter py-5  bg-transparent placeholder:text-white-1/30 focus:outline-none text-xl text-white-1"
				/>

				<button className="hover:scale-[1.4] transition-scale duration-500 ease-out text-white-1">
					<ArrowRightMd />
				</button>
			</div>
		</div>
	);
}
