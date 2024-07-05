import React, { useState } from "react";
import RandoLogo from "../svgs/RandoLogo";
import { Link } from "react-router-dom";
import Down from "../svgs/Down";
import NigeriaFlag from "../svgs/NigeriaFlag";
import MenuIcon from "../svgs/MenuIcon";
import CloseIcon from "../svgs/CloseIcon";
import CountryDropdown from "./ui/CountryDropdown";
import GlobalButton from "./ui/GlobalButton";
import clsx from "clsx";
import Download from "../svgs/Download";

export default function Navbar1() {
	const [showMenu, setShowMenu] = useState(false);
	const navLinks = [
		{
			name: "API",
			link: "/",
			hasDropdown: false,
		},
		{
			name: "Docs",
			link: "https://docs.google.com/document/d/1v54kp1rAD03pH6aj_APWlYgIUHNWuGI4ABwukNWVpbY/edit?usp=sharing",
			target: "_blank",
			hasDropdown: false,
		},
		{
			name: "Pricing",
			link: "/",
			hasDropdown: false,
		},
	];

	const handleToggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};
	return (
		<>
			<nav className="lg:hidden fixed rounded-br-3xl rounded-bl-3xl top-0 z-40 w-full h-[100px] flex flex-row items-center justify-between bg-black-2 text-white-1 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
				{!showMenu && (
					<Link
						className="w-[100px] md:w-[150px] lg:w-[150px]"
						to={"/"}>
						<RandoLogo />
					</Link>
				)}

				{!showMenu && (
					<div onClick={handleToggleMenu}>
						<MenuIcon />
					</div>
				)}

				{showMenu && (
					<div
						style={{ opacity: 0.95, transition: "opacity 1s ease" }}
						className="fixed flex flex-col gap-6 md:items-center md:justify-center min-h-screen w-screen bg-white-1 text-black-1 top-0 left-0 shadow-md p-[30px] z-40 overflow-y-auto ">
						<div className="absolute top-5 left-10 mt-4 flex flex-row items-end gap-2">
							<CountryDropdown />
						</div>

						<ul className="mt-[184px] flex flex-col gap-10">
							{navLinks.map((link, index) => (
								<Link
									to={link.link}
									target={link.target}
									className="hover:underline underline-offset-4 transition-all duration-500 text-3xl">
									{link.name}
								</Link>
							))}
						</ul>

						<button className="w-full mt-[24px] bg-black-1 text-white-1 px-6 py-6 min-w-32 rounded-full text-2xl">
							Login
						</button>

						<div
							onClick={handleToggleMenu}
							className="lg:hidden absolute top-5 right-10 text-2xl mt-4 font-semibold cursor-pointer">
							<CloseIcon />
						</div>
					</div>
				)}
			</nav>

			<nav className="hidden fixed rounded-br-3xl z-40 rounded-bl-3xl top-0 w-full h-[100px] lg:flex flex-row items-center justify-between bg-black-2 text-white-1 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
				<Link
					className="w-[100px] md:w-[150px] lg:w-[150px]"
					to={"/"}>
					<RandoLogo />
				</Link>

				<div className="flex flex-row items-center justify-between gap-10 ">
					<CountryDropdown />

					<ul className="flex flex-row gap-10">
						{navLinks.map((link, index) => (
							<Link
								to={link.link}
								target={link.target}
								className="hover:underline underline-offset-4 transition-all duration-500">
								{link.name}
							</Link>
						))}
					</ul>

					<GlobalButton
						variant={`secondary`}
						state={`default`}
						size={`md`}>
						Login
					</GlobalButton>
				</div>
			</nav>
		</>
	);
}
