import React from "react";
import EditIcon from "../../svgs/EditIcon";

const TemplateItem = ({ template }) => {
	return (
		<div className="w-full border border-black/10 rounded-lg px-4 py-[10px] flex flex-row items-center justify-between">
			<h4 className={`font-normal capitalize`}>
				{template.template_name}
				{/* <span className="hidden lg:inline-block ml-2 text-gray-400 font-light text-sm">
					[{mockData?.data_name}]
				</span> */}
			</h4>
			<div className="flex flex-row gap-4 items-center">
				<div className="flex flex-row gap-2 text-teal-1 hover:text-teal-1/50 transition-all duration-500 ease-in-out">
					<button className="w-[23px]">
						<EditIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TemplateItem;
