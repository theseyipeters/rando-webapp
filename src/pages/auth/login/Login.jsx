import React from "react";
import { LoginForm } from "./LoginForm";
import RandoLogo from "../../../svgs/RandoLogo";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="h-screen min-w-screen flex flex-row">
			<div className="w-1/2 flex flex-col items-center justify-center h-full bg-white-2 px-[40px] md:px-[50px] lg:px-[90px] xl:px-[120px]  relative">
				<div className="w-full flex items-center justify-center">
					<Link
						className="w-[150px] absolute top-[10%] left-[40px] md:left-[50px] lg:left-[90px] xl:left-[120px]"
						to={"/"}>
						<RandoLogo />
					</Link>

					<h1 className="text-[64px] leading-[75px] w-full font-medium tracking-tight">
						Generate Random JSON Mock Data Instantly with Rando. &#123;_&#125;
					</h1>
				</div>
			</div>
			<div className="w-1/2 relative h-full bg-black-2 flex flex-col items-center justify-center">
				<LoginForm />
			</div>
		</div>
	);
}
