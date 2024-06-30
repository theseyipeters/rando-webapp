import React from "react";
import Navbar2 from "../../components/Navbar2";
import Hero from "./Hero";

const Generate = () => {
	return (
		<main className="w-full h-full  bg-white-1">
			<div className="w-full bg-transparent h-[800px] rounded-bl-3xl rounded-br-3xl">
				<Navbar2 />
				<Hero />
			</div>
		</main>
	);
};

export default Generate;
