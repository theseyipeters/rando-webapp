import React from "react";
import ArrowRightMd from "../../svgs/ArrowRightMd";

export default function InputField3({
	placeholder,
	onClick,
	type,
	onChange,
	value,
	name,
}) {
	return (
		<div className="w-full">
			<div className="w-full h-fit border-b-0.5 border-white-1 mt-[13px] flex flex-row justify-between items-center">
				<input
					type={type}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					name={name}
					className="border-none w-full h-[48px] font-matter py-5 px-2 bg-transparent placeholder:font-light placeholder:text-lg placeholder:text-white-1/30 focus:outline-none text-xl text-white-1"
				/>
			</div>
		</div>
	);
}
