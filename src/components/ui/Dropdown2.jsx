import React, { useState } from "react";
import DownMd from "../../svgs/DownMd";

export default function Dropdown2({
	placeholder,
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
			{/* <label className="text-xl">{label}</label> */}
			<div className="w-full h-fit border-b border-[#5d5d5d] mt-[13px] flex flex-row justify-between items-center pr-4">
				<input
					type="text"
					value={selectedOption}
					onClick={toggleDropdown}
					readOnly
					placeholder={placeholder}
					className="font-matter border-none w-full h-[42px] bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-xl cursor-pointer"
				/>
				<button
					onClick={toggleDropdown}
					className={`w-[30px] hover:scale-[1.2] transition-scale duration-500 ease-out ${
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
							className="cursor-pointer py-2 px-6 text-xl hover:bg-gray-200 h-[70px] flex items-center font-light text-black-2">
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
