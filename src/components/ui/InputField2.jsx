import React from "react";
import ArrowRightMd from "../../svgs/ArrowRightMd";

export default function InputField2({
	placeholder,
	onClick,
	type,
	onChange,
	value,
	name,
}) {
	return (
		<div className="w-full">
			<div className="w-full h-fit border-b border-white-1 mt-[13px] flex flex-row justify-between items-center">
				<input
					type={type}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					name={name}
					className="border-none w-full h-[48px] font-matter py-5  bg-transparent  placeholder:text-white-1/30 focus:outline-none text-xl text-white-1"
				/>

				<button
					onClick={onClick}
					className="hover:scale-[1.4] transition-scale duration-500 ease-out text-white-1 w-[60px]">
					<ArrowRightMd />
				</button>
			</div>
		</div>
	);
}
