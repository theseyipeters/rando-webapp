import React from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Main from "./Main";

export default function Dashboard() {
	return (
		<div className="h-fit lg:h-screen bg-gray-1 overflow-clip">
			<Header />

			<div className="flex flex-row h-full w-full">
				<Sidebar />
				<Main />
			</div>
		</div>
	);
}
