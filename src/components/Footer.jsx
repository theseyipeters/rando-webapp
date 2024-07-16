import React from "react";
import { Link } from "react-router-dom";
import RandoLogo from "../svgs/RandoLogo";
import RandoLogo2 from "../svgs/RandoLogo2";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-white-1 text-black-2 pt-[60px] text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
			<div className="w-full flex flex-col md:flex-row items-start md:items-start">
				<div className="w-full md:w-[40%] flex flex-col gap-5">
					<div className="hidden md:block w-[150px] lg:w-[200px]">
						<RandoLogo2 />
					</div>
					<div className="block md:hidden lg:hidden w-[150px] lg:w-[200px]">
						<RandoLogo2 />
					</div>
					<div className="font-light flex flex-col gap-3 mt-4">
						<p className="font-light leading-8 w-full md:w-4/5 lg:w-4/5">
							Rando is a powerful tool designed to help developers, testers, and
							data enthusiasts generate random JSON mock data quickly and
							efficiently. Enjoy a seamless experience with highly customizable
							data generation and instant downloads.
						</p>
						<p className="font-light mt-6">
							Rando Inc. © {currentYear}. All Rights Reserved.
						</p>
					</div>
				</div>
				<div className="w-full md:w-2/4 mt-10 md:mt-0 flex flex-col md:flex-row gap-10 md:gap-20">
					<div className="flex flex-col gap-4">
						<h4 className="text-black-1 font-medium">Rando</h4>
						<ul className="flex flex-col gap-4">
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link to="/gradients">Rando API for Developers</Link>
							</li>
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link to="/palettes">Documentation</Link>
							</li>
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link to="/generate/gradients">Pricing</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-4">
						<h4 className="text-black-1 font-medium">About the Creator</h4>
						<ul className="flex flex-col gap-4">
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link
									target="_blank"
									to="https://sagethedev.vercel.app">
									@sagethedev
								</Link>
							</li>
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link
									target="_blank"
									to="https://sagethedev.vercel.app/projects">
									Sagethedev’s projects
								</Link>
							</li>
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link
									target="_blank"
									to="https://sagethedev.vercel.app/about">
									About Sagethedev
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-4">
						<h4 className="text-black-1 font-medium">Connect</h4>
						<ul className="flex flex-col gap-4">
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link to="https://twitter.com">Twitter</Link>
							</li>
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link to="https://github.com">Github</Link>
							</li>
							<li className="font-light hover:text-green-1 transition-all duration-500">
								<Link to="https://instagram.com">Instagram</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<p className="border-t border-gray/50 mt-[50px] font-normal text-center py-[30px]">
				Built with <span className="text-red-500"> ♥ </span> by{" "}
				<span className="textGradient">SAGE</span>
			</p>
		</footer>
	);
}
