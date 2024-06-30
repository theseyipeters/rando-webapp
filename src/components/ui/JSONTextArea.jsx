import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function JSONTextArea({
	label,
	placeholder,
	className,
	onChange,
	value,
}) {
	const [placeholderText, setPlaceholderText] = useState(placeholder);
	const [editorValue, setEditorValue] = useState(value);

	// Sync local state with value prop
	useEffect(() => {
		setEditorValue(value);
	}, [value]);

	return (
		<div className={`w-full font-mono ${className}`}>
			<label className="text-2xl">{label}</label>

			<CodeMirror
				value={editorValue}
				theme={"light"}
				className={`mt-[13px] font-mono border border-[#5d5d5d] w-full min-h-[490px] bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-base p-5`}
				extensions={[javascript()]}
				onChange={(value, viewUpdate) => {
					setEditorValue(value);
					onChange(value);
				}}
				onFocus={() => setPlaceholderText("")}
				onBlur={() => setPlaceholderText(placeholderText)}
				placeholder={placeholderText}
			/>
		</div>
	);
}
