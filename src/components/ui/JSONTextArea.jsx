import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript, javascriptLanguage } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
// import { autocompletion } from "@codemirror/autocomplete";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

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
		<div className={`w-full`}>
			<label className="text-lg md:text-xl lg:text-2xl">{label}</label>

			<aside className="bg-[#282C34] font-mono relative">
				<CodeMirror
					value={editorValue}
					theme={"light"}
					height={100}
					aria-autocomplete={"inline"}
					autoCorrect="true"
					className={`mt-[13px]  border border-[#5d5d5d] w-full bg-transparent placeholder:text-[#5D5D5D]/10 placeholder:font-mono focus:outline-none text-xs md:text-sm lg:text-base`}
					extensions={[json()]}
					onChange={(value, viewUpdate) => {
						setEditorValue(value);
						onChange(value);
					}}
					onFocus={() => setPlaceholderText("")}
					onBlur={() => setPlaceholderText(placeholderText)}
					placeholder={placeholderText}
					spellCheck={true}
					style={{ fontFamily: "monospace" }}
				/>

				<div className="bg-white-1 w-fit absolute right-1 top-1">
					<button>Copy</button>
				</div>
			</aside>
		</div>
	);
}
