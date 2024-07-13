import React, { useState } from "react";
import RandoLogo2 from "../../svgs/RandoLogo2";
import Arrow from "../../svgs/Arrow";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const navItems = [
		{
			name: "Dashboard",
			link: "/dashboard",
			isClickable: true,
		},
		{
			name: "Activity Log",
			link: "/activity-log",
			isClickable: true,
		},
		{
			name: "Mock Servers",
			link: "/mock-servers",
			isClickable: false,
		},
		{
			name: "Mock Data",
			link: "/mock-data",
			isClickable: true,
		},
		{
			name: "Templates",
			link: "/templates",
			isClickable: true,
		},
		{
			name: "Saved",
			link: "/saved",
			isClickable: true,
		},
		{
			name: "Profile",
			link: "/profile",
			isClickable: false,
		},
		{
			name: "Settings",
			link: "/settings",
			isClickable: false,
		},
	];

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};
	return (
		<div
			className={`bg-white-1 h-auto relative border-r flex flex-col justify-between pb-[90px] transition-width duration-500 ease-in-out ${
				isCollapsed ? "w-0" : "w-[350px]"
			}`}>
			<button
				onClick={toggleSidebar}
				className={`bg-black-1 h-10 w-10 rounded-full hidden lg:flex items-center justify-center text-white transition-all duration-500 ease-in-out absolute  ${
					isCollapsed
						? "right-[-50px] top-[130px] rotate-180"
						: "right-[-10px] top-[130px]"
				}`}>
				<div className="w-2 flex items-center justify-center">
					<Arrow />
				</div>
			</button>
			<div
				className={`mt-[200px] w-full ${
					isCollapsed ? "opacity-0" : "opacity-1"
				} transition-opacity duration-300 ease-in-out`}>
				<ul className="flex flex-col w-full text-center">
					{navItems.map((item, index) => (
						<NavLink
							key={index}
							to={item.link}
							className={({ isActive }) =>
								`${
									isActive ? "active-link" : "hover:bg-gray-100"
								} w-full  h-[50px] py-3 flex items-center justify-center font-light flex-shrink whitespace-nowrap font-matter  ${
									item.isClickable
										? "text-black-2 "
										: "cursor-not-allowed hover:bg-transparent text-black-1/30"
								}`
							}
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

			<div
				className={`w-full font-matter font-light ${
					isCollapsed ? "hidden" : "block"
				}`}>
				<ul className="flex flex-col w-full text-center">
					<NavLink
						to="/trash"
						className={({ isActive }) =>
							`${
								isActive ? "active-link" : ""
							} hover:bg-transparent text-black-1/30 cursor-not-allowed w-full px-[45px] h-[50px] py-3`
						}
						onClick={(e) => {
							e.preventDefault();
						}}>
						Trash
					</NavLink>

					<button className="cursor-pointer px-[45px] h-[50px] py-3 font-light text-center text-red-700 hover:bg-red-700 hover:text-white-1">
						Logout
					</button>
				</ul>
			</div>
		</div>
	);
}
