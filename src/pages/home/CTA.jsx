import React from "react";
import ArrowRightLg from "../../svgs/ArrowRightLg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const CTA = () => {
	const textVariations = [
		"Frontend Engineer?",
		"Backend Engineer?",
		"Full-stack Engineer?",
		"Mobile Developer?",
		"DevOps Engineer?",
		"API Developer?",
		"Data Analyst?",
		"Data Scientist?",
		"Project Manager?",
	];
	const [roles] = useTypewriter({
		words: textVariations,

		loop: {},
		typeSpeed: 100,
		deleteSpeed: 30,
		delaySpeed: 2000,
	});
	return (
		<section className="py-[100px] h-fit bg-transparent text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] flex flex-col items-start justify-center">
			<div className="flex flex-col items-start gap-4">
				<p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
					Are you a
				</p>
				<p className="mt-2 text-[40px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[110px] 2xl:text-[135px] leading-[20px] md:leading-[80px] lg:leading-[130px] flex-shrink-0 h-[70px] md:h-[140px] lg:h-[140px]">
					{roles}
				</p>
			</div>
			<div className="cta-container cta-button cursor-pointer hover:scale-[1.04] lg:hover:scale-[1.12] flex flex-row items-center justify-between mt-[0px] lg:mt-[100px] gap-4 border-4 border-black-1 p-8 w-full">
				<div className="flex flex-col items-start">
					<p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
						Start using
					</p>
					<p className="mt-4 lg:mt-8 text-[40px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[115px] 2xl:text-[135px] leading-[20px] md:leading-[80px] lg:leading-[130px] flex-shrink-0">
						Rando
					</p>
				</div>
				<div className="arrow-animation w-[60px] md:w-[100px] lg:w-[150px]">
					<ArrowRightLg />
				</div>
			</div>
		</section>
	);
};

export default CTA;
