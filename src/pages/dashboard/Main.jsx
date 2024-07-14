import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserActivities } from "../../store/userActivitiesSlice";
import { getMockDataGenerated } from "../../store/mockDataSlice";
import { getTemplates } from "../../store/templatesSlice";
import { Link } from "react-router-dom";
import Stars from "../../svgs/Stars";
import StatCard from "./components/StatCard";
import LogItem from "./components/LogItem";
import ghostGif from "../../assets/ghost.gif";

const Main = () => {
	const { user } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const activities = useSelector((state) => state.userActivities.activities);
	const mockData = useSelector((state) => state.mockData.data.mock_data);
	const templates = useSelector((state) => state.templates.templates.data);
	const activitiesStatus = useSelector((state) => state.userActivities.status);
	const mockDataStatus = useSelector((state) => state.mockData.status);
	const templatesStatus = useSelector((state) => state.templates.status);
	const activitiesError = useSelector((state) => state.userActivities.error);
	const mockDataError = useSelector((state) => state.mockData.error);
	const templatesError = useSelector((state) => state.templates.error);

	useEffect(() => {
		if (activitiesStatus === "idle") {
			dispatch(getUserActivities());
		}
		if (mockDataStatus === "idle") {
			dispatch(getMockDataGenerated());
		}
		if (templatesStatus === "idle") {
			dispatch(getTemplates());
		}
	}, [activitiesStatus, mockDataStatus, templatesStatus, dispatch]);

	const { data } = activities;

	return (
		<div className="mt-[120px] mb-[20px] flex flex-col gap-8 border w-full mx-[20px] bg-white rounded-lg p-5 md:p-10 overflow-hidden font-matter">
			<div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
				<h1 className="text-2xl font-semibold">Welcome {user.username},</h1>

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
							target="_blank"
							className="flex flex-row gap-2 w-full items-center justify-center text-white-1 bg-black-2 font-light px-6 py-3 rounded-full">
							<Stars /> Generate
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
				<StatCard
					title="User Activities"
					data={data}
				/>
				<StatCard
					title="Mock Data Generated"
					data={mockData}
				/>
				<StatCard
					title="Templates Created"
					data={templates}
				/>
			</div>

			<div className="flex flex-col gap-4 overflow-auto h-full">
				<div className="w-full flex flex-row items-center justify-between">
					<h1 className="text-lg font-medium">Recent activity</h1>

					<Link
						to="/activity-log"
						className="text-teal-1 underline underline-offset-4 font-light">
						View all
					</Link>
				</div>

				<div className="h-full overflow-auto">
					{data?.length === 0 ? (
						<div className="border border-black/30 rounded-2xl flex flex-col gap-3 min-h-[400px] lg:min-h-full max-h-full overflow-scroll items-center justify-center">
							<div className="flex flex-col gap-0 items-center justify-center w-full">
								<div className="w-[180px] opacity-80">
									<img
										className="w-fit"
										src={ghostGif}
										alt="ghostGif"
									/>
								</div>
								<div className="-mt-3 w-fit flex flex-col items-center gap-2">
									<h1>No activities yet</h1>

									<div className="w-fit min-w-48">
										<Link
											to={"/generate"}
											target="_blank"
											className="flex flex-row gap-2 w-full items-center justify-center text-white-1 bg-black-2 font-light px-6 py-3 rounded-full">
											<Stars /> Generate
										</Link>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="flex flex-col gap-3 h-full overflow-scroll">
							{data?.map((activity, index) => (
								<div
									key={index}
									className="cursor-pointer hover:text-black/40 transition-all duration-300 ease-in-out">
									<LogItem activity={activity} />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Main;
