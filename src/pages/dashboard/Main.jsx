import React from "react";
import GlobalButton from "../../components/ui/GlobalButton";
import { Link } from "react-router-dom";
import Stars from "../../svgs/Stars";
import StatCard from "./components/StatCard";
import Logs from "../../data/Logs.json";
import LogItem from "./components/LogItem";

const Main = () => {
	return (
		<div className="mt-[120px] mb-[20px] flex flex-col gap-8 border w-full mx-[20px] bg-white rounded-lg p-5 md:p-10 overflow-hidden font-matter">
			<div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
				<h1 className="text-2xl font-semibold">Welcome [username],</h1>

				<div className="flex flex-row gap-3">
					<div className="w-fit min-w-36">
						<Link
							to={"/generate"}
							className="flex flex-row gap-2 w-full items-center justify-center text-white-1 bg-teal-1 font-light px-6 py-3 rounded-full">
							View saved data
						</Link>
					</div>
					<div className="w-fit min-w-36">
						<Link
							to={"/generate"}
							className="flex flex-row gap-2 w-full items-center justify-center text-white-1 bg-black-2 font-light px-6 py-3 rounded-full">
							<Stars /> Generate
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
				<StatCard />
				<StatCard />
				<StatCard />
			</div>

			<div className="flex flex-col gap-4 overflow-auto h-full">
				<div className="w-full flex flex-row items-center justify-between">
					<h1 className="text-lg font-medium">Recent activity</h1>

					<Link
						to="/"
						className="text-teal-1 underline underline-offset-4 font-light">
						View all
					</Link>
				</div>

				<div className="h-full overflow-auto">
					<div className="flex flex-col gap-3 h-full overflow-scroll">
						{Logs.map((log, index) => (
							<div
								key={log.id}
								className="cursor-pointer hover:text-black/40 transition-all duration-300 ease-in-out"
								onClick={() => handleOpenTaskModal(task.id)}>
								<LogItem log={log} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
