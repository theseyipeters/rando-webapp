import React, { useState } from "react";
import DownMd from "../../svgs/DownMd";

export default function Dropdown({
	label,
	options,
	selectedOption,
	setSelectedOption,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="w-full relative">
			<label className="text-lg md:text-xl lg:text-2xl">{label}</label>
			<div className="w-full h-fit border-b border-[#5d5d5d] mt-[13px] flex flex-row justify-between gap-2 items-center pr-2  md:pr-4 lg:pr-8">
				<input
					type="text"
					value={selectedOption}
					onClick={toggleDropdown}
					readOnly
					placeholder="Select an option"
					className="font-matter  w-full h-[60px] md:h-[92px] border-none bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-xl md:text-2xl lg:text-3xl cursor-pointer pl-2"
				/>

				<button
					onClick={toggleDropdown}
					className={`w-[30px] md:w-[50px] hover:scale-[1.4] transition-scale duration-500 ease-out ${
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
							className="cursor-pointer py-2 px-6 text-xl md:text-2xl hover:bg-gray-200 h-[70px] md:h-[100px] flex items-center">
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
