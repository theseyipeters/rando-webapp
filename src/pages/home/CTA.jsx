import React from "react";
import ArrowRightLg from "../../svgs/ArrowRightLg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const CTA = () => {
	const textVariations = ["Software Engineer?", "Data Analyst?"];
	const [roles] = useTypewriter({
		words: textVariations,

		loop: {},
		typeSpeed: 100,
		deleteSpeed: 30,
		delaySpeed: 2000,
	});
	return (
		<section className=" py-[100px] h-fit bg-transparent text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] flex flex-col items-start justify-center">
			<div className="flex flex-col items-start gap-4">
				<p className="text-2xl lg:text-4xl xl:text-5xl">Are you a</p>
				<p className="mt-2 text-[40px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[125px] 2xl:text-[155px] leading-[130px] flex-shrink-0 h-[140px]">
					{roles}
				</p>
			</div>
			<div className="cta-container cta-button cursor-pointer hover:scale-[1.12] flex flex-row items-center justify-between mt-[100px] gap-4 border-4 border-black-1 p-8 w-full">
				<div className="flex flex-col items-start">
					<p className="text-2xl lg:text-4xl xl:text-5xl">Start using</p>
					<p className="mt-8 text-[40px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[125px] 2xl:text-[155px] leading-[130px] flex-shrink-0">
						Rando
					</p>
				</div>
				<div className="arrow-animation">
					<ArrowRightLg />
				</div>
			</div>
		</section>
	);
};

export default CTA;
