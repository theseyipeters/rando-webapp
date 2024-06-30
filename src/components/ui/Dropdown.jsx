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
			<label className="text-2xl">{label}</label>
			<div className="w-full h-fit border-b border-[#5d5d5d] mt-[13px] flex flex-row justify-between items-center pr-8">
				<input
					type="text"
					value={selectedOption}
					onClick={toggleDropdown}
					readOnly
					placeholder="Select an option"
					className="border-none w-full h-[92px] bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-3xl cursor-pointer"
				/>
				<button
					onClick={toggleDropdown}
					className={`hover:scale-[1.4] transition-scale duration-500 ease-out ${
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
							className="cursor-pointer py-2 px-6 text-2xl hover:bg-gray-200 h-[100px] flex items-center">
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
