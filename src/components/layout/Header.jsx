import React, { useState } from "react";
import RandoLogo2 from "../../svgs/RandoLogo2";
import MenuIcon from "../../svgs/MenuIcon";
import Dropdown from "../ui/Dropdown";
import ArrowDown from "../../svgs/ArrowDown";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../ui/SearchBox";
import { useSelector } from "react-redux";
import { pickFirstLetter } from "../../utils/helpers";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const { user } = useSelector((state) => state.auth);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const navItems = [
		{
			name: "API",
			link: "/",
			isClickable: true,
		},
		{
			name: "Docs",
			link: "/",
			isClickable: true,
		},
	];
	return (
		<div>
			{" "}
			<header className="bg-white-1 absolute top-0 z-20 w-full h-[100px] flex items-center justify-between border py-[20px] px-[20px] md:px-[50px]">
				<div className="flex flex-row items-center justify-between w-full ">
					<div className="flex flex-row">
						<div className="flex items-center">
							<Link
								to={"/"}
								className="w-[120px]">
								<RandoLogo2 />
							</Link>
						</div>

						<div className="hidden lg:flex ml-[130px]">
							<SearchBox placeholder={"Search for anything..."} />
						</div>
					</div>

					<div className="flex flex-row gap-[50px] items-center">
						<div className={`lg:block hidden w-full ml-[50px] text-black-1`}>
							<ul className="flex flex-row w-full gap-4">
								{navItems.map((item, index) => (
									<NavLink
										key={index}
										to={item.link}
										className={` w-fit h-[50px] py-3 font-normal hover:underline underline-offset-4 ${
											item.isClickable
												? ""
												: "cursor-not-allowed hover:bg-transparent text-black-1/30"
										}`}
										onClick={(e) => {
											if (!item.isClickable) {
												e.preventDefault();
											}
										}}>
										{item.name}
									</NavLink>
								))}
							</ul>
						</div>

						<div className="hidden lg:flex flex-row items-center gap-4">
							<div>
								<span className="uppercase w-[60px] h-[60px] rounded-full bg-black-1 text-white-1 flex items-center justify-center text-3xl">
									{user.username && pickFirstLetter(user.username)}
								</span>
							</div>

							<div className="flex flex-col">
								<h4 className="text-lg font-medium">@{user.username}</h4>
								<p className="text-sm tracking-[-0.24px] font-light capitalize">
									{user.role}
								</p>
							</div>

							<div className="w-[30px]">
								<ArrowDown />
							</div>
						</div>
					</div>

					<button
						className="block lg:hidden w-[400px]"
						onClick={toggleMenu}>
						<MenuIcon />
					</button>
				</div>

				{showMenu && (
					<div className="lg:hidden block absolute top-[100px] left-0 w-full bg-white-1 shadow-md py-4 px-6 transition-height duration-1000 ease-in-out">
						<div className="w-full flex flex-col items-start gap-4">
							<SearchBox placeholder={"Search for anything..."} />

							<div className={`mt-4 w-full text-black-1`}>
								<ul className="flex flex-col w-full gap-4">
									{navItems.map((item, index) => (
										<NavLink
											key={index}
											to={item.link}
											className={` w-full px-[45px] h-[50px] py-3 font-normal ${
												item.isClickable
													? ""
													: "cursor-not-allowed hover:bg-transparent text-black-1/30"
											}`}
											onClick={(e) => {
												if (!item.isClickable) {
													e.preventDefault();
												}
											}}>
											{item.name}
										</NavLink>
									))}
								</ul>
							</div>

							<div className="ml-auto mt-[50px] flex flex-row items-center gap-4">
								<span className="w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center text-3xl">
									J
								</span>

								<div className="flex flex-col">
									<h4 className="text-lg font-medium">@{user.username}</h4>
									<p className="text-sm tracking-[-0.24px] font-light capitalize">
										{user.role}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</header>
		</div>
	);
}
