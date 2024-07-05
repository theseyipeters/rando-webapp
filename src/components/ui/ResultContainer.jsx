import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

export default function ResultContainer({ label, value }) {
	const [code, setCode] = useState(value); // Assuming value is a JSON object

	return (
		<div className="w-full h-fit">
			<label className="text-2xl">{label}</label>

			<div className="bg-[#282C34]">
				<CodeMirror
					value={code}
					theme={"light"}
					extensions={[json()]}
					readOnly={true}
					options={{
						theme: "dark",
						lineNumbers: true,
						indentWithTabs: true,
						tabSize: 2,
						autofocus: true,
						readOnly: true,
						foldGutter: true,
						gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
					}}
					onBeforeChange={(editor, data, value) => {
						setCode(value);
					}}
					spellCheck={true}
					className="mt-[13px] border border-[#5d5d5d] text-black-3 w-full bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-base font-light"
				/>
			</div>
		</div>
	);
}
