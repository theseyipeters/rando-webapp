import React, { useState, useEffect, useRef } from "react";
import DropDownOpen from "../../../svgs/DropDownOpen";
import DropDown from "../../../svgs/DropDown";

const FaqItem = ({ question, answer, isOpen, onAccordionClick }) => {
	const [contentHeight, setContentHeight] = useState(0);

	const contentRef = useRef(null);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [isOpen]);

	return (
		<div className="overflow-hidden gradientBg border-t border-white-2/30 flex flex-col gap-y-[6px] md:gap-y-[10px] lg:gap-y-[12px] py-1 ">
			<div
				onClick={onAccordionClick}
				className={`flex ${
					isOpen ? "border-b-0.5 border-gray-5/50" : ""
				} items-center mt-3 justify-between gap-4  py-2 cursor-pointer`}>
				<h2
					className={` ${
						isOpen ? "text-white-3" : "text-white-1"
					} text-[14px] md:text-[16px] lg:text-[18px] font-medium`}>
					{question}
				</h2>
				<span> {isOpen ? <DropDownOpen /> : <DropDown />}</span>
			</div>
			<div
				ref={contentRef}
				style={{
					maxHeight: isOpen ? `${contentHeight}px` : "0px",
				}}
				className={`transition-max-height duration-500 ease-in-out overflow-hidden`}>
				<p className=" pb-4 text-gray-4 text-[14px] md:text-[16px] lg:text-[16px]">
					{answer}
				</p>
			</div>
		</div>
	);
};

export default FaqItem;
