import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMockDataGenerated } from "../../store/mockDataSlice";
import Stars from "../../svgs/Stars";
import MockDataItem from "./MockDataItem";
import ghostGif from "../../assets/ghost.gif";

const ITEMS_PER_PAGE = 10;

export default function Main() {
	const [currentPage, setCurrentPage] = useState(1);

	const dispatch = useDispatch();
	const mockData = useSelector((state) => state.mockData.data);
	const status = useSelector((state) => state.mockData.status);
	const error = useSelector((state) => state.mockData.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(getMockDataGenerated());
		}
	}, [status, dispatch]);

	// console.log(mockData);

	const { mock_data } = mockData;

	const totalPages = Math.ceil(mock_data?.length / ITEMS_PER_PAGE);

	const handleClick = (newPage) => {
		setCurrentPage(newPage);
	};

	const paginatedMockData = mock_data?.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);
	return (
		<div className="mt-[120px] mb-[20px] flex flex-col gap-8 border w-full mx-[20px] bg-white rounded-lg p-5 md:p-10 overflow-hidden font-matter">
			<div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
				<h1 className="text-2xl font-semibold">Mock Data</h1>

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

			<div className="flex flex-col gap-4 overflow-auto h-full">
				<div className="h-full overflow-auto">
					{paginatedMockData?.length === 0 ? (
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
									<h1>No mock data created yet</h1>

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
							{paginatedMockData?.map((mockData) => (
								<div
									key={mockData.id}
									className="cursor-pointer hover:text-black/40 transition-all duration-300 ease-in-out">
									<MockDataItem mockData={mockData} />
								</div>
							))}
							<div className="flex justify-center mt-auto">
								<button
									className={`${
										currentPage === 1 ? "opacity-25" : ""
									} px-4 py-2 mx-1 bg-gray-200 rounded`}
									disabled={currentPage === 1}
									onClick={() => handleClick(currentPage - 1)}>
									Previous
								</button>
								{Array.from({ length: totalPages }, (_, i) => (
									<button
										key={i}
										className={`px-4 py-2 mx-1 rounded ${
											currentPage === i + 1
												? "bg-teal-1 text-white-1"
												: "bg-gray-200"
										}`}
										onClick={() => handleClick(i + 1)}>
										{i + 1}
									</button>
								))}
								<button
									className={`${
										currentPage === totalPages ? "opacity-25" : ""
									} px-4 py-2 mx-1 bg-gray-200 rounded`}
									disabled={currentPage === totalPages}
									onClick={() => handleClick(currentPage + 1)}>
									Next
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}