import React, { useState } from "react";

export default function Generate() {
const [schema, setSchema] = useState("");
const [mockData, setMockData] = useState("");

    const generateMockData = () => {
    	try {
    		const jsonData = JSON.parse(schema.trim());
    		axios
    			.post("http://localhost:5000/generate", jsonData)
    			.then((response) => {
    				setMockData(JSON.stringify(response.data, null, 2));
    			})
    			.catch((error) => {
    				console.error("Error fetching data: ", error);
    			});
    	} catch (error) {
    		console.error("Invalid JSON schema format: ", error);
    	}
    };

    return (
    	<div className="bg-black-1">
    		<h2>JSON Generator</h2>
    		<textarea
    			value={schema}
    			onChange={(e) => setSchema(e.target.value)}
    			placeholder="Enter JSON Schema"
    			style={{
    				width: "100%",
    				height: "200px",
    				marginBottom: "10px",
    			}}
    		/>
    		<br />
    		<button
    			onClick={generateMockData}
    			style={{
    				padding: "10px 20px",
    				backgroundColor: "#007bff",
    				color: "white",
    				border: "none",
    				cursor: "pointer",
    			}}>
    			Generate Mock Data
    		</button>
    		<br />
    		<br />
    		<h3>Generated Mock Data:</h3>
    		<pre>{mockData}</pre>
    	</div>
    );

}

    {/* <textarea
    			value={value}
    			onChange={onChange}
    			onFocus={() => setPlaceholderText("")}
    			onBlur={() => setPlaceholderText(placeholder)}
    			type="text"
    			placeholder={placeholderText}
    			className={`mt-[13px] border border-[#5d5d5d] w-full min-h-[490px] bg-transparent placeholder:text-[#5D5D5D]/30 focus:outline-none text-base p-5`}
    		/> */}
