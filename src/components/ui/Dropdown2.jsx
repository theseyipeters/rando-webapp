import React, { useState } from "react";
import DownMd from "../../svgs/DownMd";

export default function Dropdown2({
	placeholder,
	label,
	options,
	selectedOption,
	setSelectedOption,
	isAuthenticated,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		if (!option.isProtected || isAuthenticated) {
			setSelectedOption(option.name);
			setIsOpen(false);
		}
	};

	return (
		<div className="w-full relative">
			<div className="w-full h-fit border-b border-[#5d5d5d] mt-[13px] flex flex-row justify-between items-center pr-4">
				<input
					type="text"
					value={selectedOption}
					onClick={toggleDropdown}
					readOnly
					placeholder={placeholder}
					className="font-matter border-none w-full h-[42px] bg-transparent font-light placeholder:text-[#5D5D5D]/30 focus:outline-none text-sm md:text-xl lg:text-xl cursor-pointer"
				/>
				<button
					onClick={toggleDropdown}
					className={`w-[20px] lg:w-[30px] hover:scale-[1.2] transition-scale duration-500 ease-out ${
						isOpen ? "rotate-180" : ""
					}`}>
					<DownMd />
				</button>
			</div>
			{isOpen && (
				<ul className="mt-2 border border-[#5d5d5d] bg-white-1 absolute z-10 w-full transition-all duration-500 ease-in-out">
					{options.map((option, index) => (
						<li
							key={index}
							onClick={() => handleOptionClick(option)}
							className={`${
								option.isProtected && !isAuthenticated
									? "cursor-not-allowed"
									: "cursor-pointer"
							} relative py-2 px-6 text-sm md:text-xl lg:text-xl hover:bg-gray-200 h-[60px] md:h-[70px] flex items-center font-light text-black-2`}>
							<span
								className={`text-sm md:text-xl lg:text-xl ${
									option.isProtected && !isAuthenticated ? "opacity-35" : ""
								}`}>
								{option.name}
							</span>
							{option.isProtected && !isAuthenticated && (
								<span className="absolute top-3 right-5 text-[10px] md:text-xs border-0.5 border-red-600 text-red-600 rounded-full py-[2px] md:py-1 px-3">
									Sign in required
								</span>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
