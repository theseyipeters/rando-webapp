import React, { useState } from "react";
import ArrowRightMd from "../../svgs/ArrowRightMd";

export default function PasswordInput({
	placeholder,
	onClick,
	onChange,
	value,
	name,
}) {
	const [showPassword, setShowPassword] = useState(false);

	const handleToggleShowPassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<div className="w-full">
			<div className="w-full h-fit border-b-0.5 border-white-1 mt-[13px] flex flex-row justify-between items-center">
				<input
					type={showPassword ? "text" : "password"}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					name={name}
					className="border-none w-full h-[48px] font-matter py-5 px-2  bg-transparent placeholder:font-light placeholder:text-white-1/30 focus:outline-none text-base md:text-base lg:text-lg text-white-1"
				/>

				<button
					onClick={handleToggleShowPassword}
					className="hover:scale-[1.1] transition-scale duration-500 ease-out text-white-1 w-[60px] font-light text-xs md:text-sm">
					{showPassword ? "HIDE" : "SHOW"}
				</button>
			</div>
		</div>
	);
}
