import React from "react";
import { LoginForm } from "./LoginForm";
import RandoLogo from "../../../svgs/RandoLogo";
import { Link } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";

export default function Login() {
	const { addToast } = useToast();
	const handleSuccessClick = () => {
		addToast("This is a success message!", "success", 1000); // 3 seconds
	};

	const handleErrorClick = () => {
		addToast("This is an error message!", "error", 5000); // 5 seconds
	};

	const handleWarningClick = () => {
		addToast("This is a warning message!", "warning", 4000); // 4 seconds
	};
	return (
		<div className="h-screen min-h-screen min-w-screen flex flex-row">
			<div className="hidden w-1/2 lg:flex flex-col items-center justify-center h-full bg-white-2 px-[40px] md:px-[50px] lg:px-[90px] xl:px-[120px]  relative">
				<div className="w-full flex flex-col items-center justify-center">
					<Link
						className="w-[150px] absolute top-[10%] left-[40px] md:left-[50px] lg:left-[90px] xl:left-[120px]"
						to={"/"}>
						<RandoLogo />
					</Link>

					<h1 className="text-[64px] leading-[75px] w-full font-medium tracking-tight">
						Generate Random JSON Mock Data Instantly with Rando. &#123;_&#125;
					</h1>

					<div className="flex flex-row w-full item justify-between mt-10">
						<button onClick={handleSuccessClick}>Trigger Success Toast</button>
						<button onClick={handleErrorClick}>Trigger Error Toast</button>
						<button onClick={handleWarningClick}>Trigger Warning Toast</button>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/2 relative h-full bg-black-2 flex flex-col items-center justify-center">
				<LoginForm />
			</div>
		</div>
	);
}
