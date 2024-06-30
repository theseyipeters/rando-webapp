import React from "react";
import ArrowRightLg from "../../svgs/ArrowRightLg";

const CTA = () => {
	return (
		<section className=" py-[100px] h-fit bg-transparent text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px] flex flex-col items-start justify-center">
			<div className="flex flex-col items-start gap-4">
				<p className="text-5xl">Are you a</p>
				<p className="mt-2 text-[40px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[125px] 2xl:text-[155px] leading-[130px] flex-shrink-0">
					Software Developer?
				</p>
			</div>
			<div className="cta-container cta-button cursor-pointer hover:scale-[1.12] flex flex-row items-center justify-between mt-[100px] gap-4 border-4 border-black-1 p-8 w-full">
				<div className="flex flex-col items-start">
					<p className="text-5xl">Start using</p>
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
