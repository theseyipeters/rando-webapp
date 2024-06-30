import React from "react";

export default function ResultContainer({ label, value }) {
	return (
		<div className={`w-full`}>
			<label className="text-2xl">{label}</label>
			<textarea
				value={value}
				// onChange={onChange}
				readOnly
				// onFocus={() => setPlaceholderText("")}
				// onBlur={() => setPlaceholderText(placeholder)}
				type="text"
				// placeholder={placeholderText}
				className={`mt-[13px] border border-[#5d5d5d] w-full min-h-[490px] bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-base p-5`}
			/>
		</div>
	);
}
