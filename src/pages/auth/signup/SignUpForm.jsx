import React, { useState } from "react";
import RandoLogo from "../../../svgs/RandoLogo";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CountryDropdown from "../../../components/ui/CountryDropdown";
import InputField2 from "../../../components/ui/InputField2";
import Dropdown2 from "../../../components/ui/Dropdown2";
import { validateEmail, validatePasswords } from "../../../utils/validation";
import ArrowRightMd from "../../../svgs/ArrowRightMd";
import WebAppService from "../../../services/WebAppService";
import Dropdown2Dark from "../../../components/ui/Dropdown2Dark";

export const SignUpForm = () => {
	const [step, setStep] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		role: "",
		password: "",
		confirm_password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		username: "",
		role: "",
		password: "",
		confirm_password: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const roleOptions = [""];

	const handleNextStep = () => {
		let valid = true;
		if (step === 1) valid = validateEmail(formData.email, setErrors);
		if (valid && step < 5) setStep(step + 1);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Perform validation as user types
		if (name === "confirm_password") {
			const errorMessage = validatePasswords(
				formData.password,
				value,
				setErrors
			);
			if (errorMessage === "") {
				setSuccessMessage("Passwords match!");
			} else {
				setSuccessMessage("");
			}
		} else {
			setErrors({ ...errors, [name]: "" }); // Clear any previous errors for the field
			setSuccessMessage(""); // Clear success message for other fields
		}
	};

	const handleRoleChange = (role) => {
		setFormData({ ...formData, role });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			validatePasswords(formData.password, formData.confirm_password, setErrors)
		) {
			// console.log(formData);
			setIsSubmitting(true);

			try {
				await WebAppService.signUp(formData);

				// Reset form fields after successful submission
				setFormData({
					email: "",
					username: "",
					role: "",
					password: "",
					confirm_password: "",
				});
				setStep(1);

				setTimeout(() => {
					navigate("/auth/login");
				}, 3000);
			} catch (error) {
				if (error.response.status === 409) {
					const signUpErrorMessage =
						error.response.data.error || "Something went wrong. Please retry.";
				} else {
					console.error(error);
				}
			}

			setIsSubmitting(false);
		}
	};

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
						<p className="text-2xl font-light">Create your Rando account</p>
					</div>
					<div>
						<form
							className="w-full"
							onSubmit={handleSubmit}>
							{step === 1 && (
								<>
									<InputField2
										placeholder="Input email address"
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										onClick={handleNextStep}
									/>
									{errors.email && (
										<p className="text-red-500 mt-4">{errors.email}</p>
									)}
								</>
							)}
							{step === 2 && (
								<InputField2
									placeholder="Input username"
									type="text"
									name="username"
									value={formData.username}
									onChange={handleChange}
									onClick={handleNextStep}
								/>
							)}
							{step === 3 && (
								<div>
									<Dropdown2Dark
										placeholder="Select role"
										options={[
											"Frontend Engineer",
											"Backend Engineer",
											"Full-stack Engineer",
											"Mobile Developer",
											"DevOps Engineer",
											"API Developers",
											"Data Analyst",
											"Data Scientist",
											"Project Manager",
										]}
										selectedOption={formData.role}
										setSelectedOption={handleRoleChange}
									/>
									<button
										type="button"
										className="mt-4 ml-auto flex w-[60px]"
										onClick={handleNextStep}>
										<ArrowRightMd />
									</button>
								</div>
							)}
							{step === 4 && (
								<>
									<InputField2
										placeholder="Input password"
										type="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										onClick={handleNextStep}
									/>
									{errors.password && (
										<p className="text-red-500 mt-4">{errors.password}</p>
									)}
								</>
							)}
							{step === 5 && (
								<>
									<InputField2
										placeholder="Verify password"
										type="password"
										name="confirm_password"
										value={formData.confirm_password}
										onChange={handleChange}
									/>
									{errors.confirm_password && (
										<p className="text-red-500 mt-4">
											{errors.confirm_password}
										</p>
									)}
									{successMessage && (
										<p className="text-green-500 mt-4">{successMessage}</p>
									)}
								</>
							)}
						</form>
					</div>

					<div className="flex flex-col gap-2 mt-[44px]">
						<p className="text-2xl font-light">
							Already have an account?
							<Link
								to={"/auth/login"}
								className="text-teal-1">
								{" "}
								Sign in here
							</Link>
						</p>
					</div>
				</div>

				<div className="text-white-1 flex flex-row gap-3 absolute bottom-[10%] font-light font-matter">
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
