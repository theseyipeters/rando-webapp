import React from "react";
import Navbar1 from "../../components/Navbar1";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Newsletter from "./Newsletter";
import Footer from "../../components/Footer";

const Home = () => {
	return (
		<main className="w-full h-full  bg-white-2">
			<div className="w-full bg-black-2 h-[800px] rounded-bl-3xl rounded-br-3xl">
				<Navbar1 />
				<Hero />
			</div>
			<div className="flex flex-col pt-[100px]">
				<Features />
				<HowItWorks />
				<FAQ />
				<CTA />
				<Newsletter />
			</div>
			<Footer />
		</main>
	);
};

export default Home;
