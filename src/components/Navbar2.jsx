import React, { useState } from "react";
import RandoLogo from "../svgs/RandoLogo";
import { Link } from "react-router-dom";
import Down from "../svgs/Down";
import NigeriaFlag from "../svgs/NigeriaFlag";
import MenuIcon from "../svgs/MenuIcon";
import CloseIcon from "../svgs/CloseIcon";

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
			link: "/",
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
			<nav className="lg:hidden border border-black-2 fixed rounded-full top-3 left-1/2 -translate-x-1/2 z-40 w-[99%] h-[100px] flex flex-row items-center justify-between bg-white-2 text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
				{!showMenu && <RandoLogo />}

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
							<div className="flex flex-row items-center">
								<small className="leading-3 text-xl">NG</small>
								<Down />
							</div>
							<NigeriaFlag />
						</div>

						<ul className="mt-[184px] flex flex-col gap-10">
							{navLinks.map((link, index) => (
								<Link className="hover:underline underline-offset-4 transition-all duration-500 text-3xl">
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

			<nav className="hidden border border-black-2 fixed  z-40 rounded-full top-3 left-1/2 -translate-x-1/2 w-[99%] h-[100px] lg:flex flex-row items-center mx-auto justify-between bg-white-1 text-black-2 text-sm md:text-base lg:text-base xl:text-lg px-[20px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
				<RandoLogo />

				<div className="flex flex-row items-center justify-between gap-10 w-[35%]">
					<div className="flex flex-row items-end gap-2">
						<div className="flex flex-row items-center">
							<small className="leading-3">NG</small>
							<Down />
						</div>
						<NigeriaFlag />
					</div>

					<ul className="flex flex-row gap-10">
						{navLinks.map((link, index) => (
							<Link className="hover:underline underline-offset-4 transition-all duration-500">
								{link.name}
							</Link>
						))}
					</ul>

					<button className="bg-black-1 text-white-1 px-6 py-3 min-w-32 rounded-full">
						Login
					</button>
				</div>
			</nav>
		</>
	);
}
