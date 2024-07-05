import React, { useState } from "react";
import RandoLogo from "../svgs/RandoLogo";
import { Link } from "react-router-dom";
import Down from "../svgs/Down";
import NigeriaFlag from "../svgs/NigeriaFlag";
import MenuIcon from "../svgs/MenuIcon";
import CloseIcon from "../svgs/CloseIcon";
import CountryDropdown from "./ui/CountryDropdown";
import GlobalButton from "./ui/GlobalButton";

export default function Navbar2() {
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
			<nav className="lg:hidden border border-black-2 fixed rounded-full top-3 left-1/2 -translate-x-1/2 z-40 w-[99%] h-[70px] md:h-[100px] flex flex-row items-center justify-between bg-white-2 text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[40px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
				{!showMenu && (
					<Link
						className="w-[100px] md:w-[150px]"
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
						className="fixed flex flex-col gap-6 md:items-center md:justify-center min-h-screen w-screen bg-white-1 text-black-1 -top-3 left-0 shadow-md p-[30px] z-40 overflow-y-auto ">
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

						<Link to={"/auth/login"}>
							<GlobalButton
								className={`w-full border`}
								variant={`primary`}
								state={`default`}
								size={`md`}>
								Login
							</GlobalButton>
						</Link>

						<div
							onClick={handleToggleMenu}
							className="lg:hidden absolute top-5 right-10 text-2xl mt-4 font-semibold cursor-pointer">
							<CloseIcon />
						</div>
					</div>
				)}
			</nav>

			<nav className="hidden border border-black-2 fixed  z-40 rounded-full top-3 left-1/2 -translate-x-1/2 w-[99%] h-[100px] lg:flex flex-row items-center mx-auto justify-between bg-white-1 text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
				<Link
					className="w-[100px] md:w-[150px] lg:w-[150px]"
					to={"/"}>
					<RandoLogo />
				</Link>

				<div className="flex flex-row items-center justify-between gap-10">
					<div className="flex flex-row items-end gap-2">
						<CountryDropdown />
					</div>

					<ul className="flex flex-row gap-5">
						{navLinks.map((link, index) => (
							<Link
								to={link.link}
								target={link.target}
								className="hover:underline underline-offset-4 transition-all duration-500">
								{link.name}
							</Link>
						))}
					</ul>

					<Link to={"/auth/login"}>
						<GlobalButton
							className={`w-full border`}
							variant={`primary`}
							state={`default`}
							size={`md`}>
							Login
						</GlobalButton>
					</Link>
				</div>
			</nav>
		</>
	);
}
