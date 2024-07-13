import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
	return (
		<div className="h-fit lg:h-screen bg-gray-1 overflow-clip">
			<Header />

			<div className="flex flex-row h-full w-full">
				<Sidebar />
				{children}
			</div>
		</div>
	);
}
