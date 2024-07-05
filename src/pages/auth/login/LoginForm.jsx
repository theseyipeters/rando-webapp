import React from "react";
import RandoLogo from "../../../svgs/RandoLogo";
import { Link } from "react-router-dom";
import CountryDropdown from "../../../components/ui/CountryDropdown";
import InputField2 from "../../../components/ui/InputField2";

export const LoginForm = () => {
	return (
		<div className="w-full px-[40px] md:px-[50px] lg:px-[90px] xl:px-[120px]">
			<div className="w-full flex flex-col items-center justify-center">
				<Link
					className="flex lg:hidden w-[150px] absolute top-[10%] left-[40px] md:left-[50px] lg:left-[90px] xl:left-[120px]"
					to={"/"}>
					<RandoLogo />
				</Link>

				<div className="text-white-2 absolute top-[10%] right-[40px] md:right-[50px] lg:right-[90px] xl:right-[120px]">
					<CountryDropdown />
				</div>

				<div className="w-full h-full text-white-1 flex flex-col gap-10">
					<div className="flex flex-col gap-2">
						<h3 className="text-4xl font-medium">Welcome</h3>
						<p className="text-2xl font-light">Sign in to your Rando account</p>
					</div>
					<div>
						<form className="w-full">
							<InputField2 />
						</form>
						{/* <form className="w-full">
						<InputField2 />
					</form> */}
					</div>

					<div className="flex flex-col gap-2 mt-[44px]">
						<p className="text-2xl font-light">
							Don’t have an account?
							<Link
								to={"/auth/signup"}
								className="text-teal-1">
								{" "}
								Create one
							</Link>
						</p>
					</div>
				</div>

				<div className="text-white-1 flex flex-row gap-3 absolute bottom-[10%] font-light">
					<Link className="font-light text-sm hover:text-teal-1 underline-offset-2 hover:underline">
						Terms of use
					</Link>
					<Link className="font-light text-sm hover:text-teal-1 underline-offset-2 hover:underline">
						Privacy policy
					</Link>
					<Link className="font-light text-sm hover:text-teal-1 underline-offset-2 hover:underline">
						Data agreement
					</Link>
				</div>
			</div>
		</div>
	);
};
