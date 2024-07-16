import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const GlobalButtonWithIcon = ({
	children,
	className,
	onClick,
	to,
	variant,
	size,
	type,
	state,
	icon,
	...rest
}) => {
	const buttonClass = clsx(
		"rounded-full",
		"font-normal",
		"focus:outline-none",
		"font-matter",
		"transition",
		"w-full",
		"duration-300",
		"text-center",
		"ease-in-out",
		"text-center",
		"text-sm",
		"md:text-base",
		"lg:text-lg",
		"xl:text-xl",
		"flex",
		"flex-row",
		"items-center",
		"justify-center",
		"gap-3",
		// "hover:mt-[-2px]",
		{
			// Variant styles
			"bg-black-2 text-white-1": variant === "primary" && state === "default",
			"bg-white-1 text-black-2": variant === "secondary" && state === "default",
			"bg-teal-1 text-white-1": variant === "teal" && state === "default",
			"border-0.5 md:border-1 border-black-2 text-black-2":
				variant === "stroke" && state === "default",

			// Size styles
			"py-2 px-4 text-sm": size === "sm",
			"px-6 py-3 text-lg min-w-fit lg:min-w-48 h-[50px]": size === "md",
			"py-4 px-8": size === "lg",

			// State styles
			"cursor-pointer": state === "default" || state === "hover",
			"cursor-not-allowed bg-[#3B3B3B] text-white-1 border-1 border-black-1":
				state === "inactive",
		},
		className,
		rest.className
	);

	if (to) {
		return (
			<Link to={to}>
				<a
					href={to}
					className={buttonClass}
					onClick={state !== "default" ? (e) => e.preventDefault() : undefined}>
					{children}
				</a>
			</Link>
		);
	} else {
		return (
			<>
				<button
					type={type}
					className={buttonClass}
					onClick={onClick}
					disabled={state === "inactive"}
					{...rest}>
					<span>{icon}</span>
					{children}
				</button>
			</>
		);
	}
};

export default GlobalButtonWithIcon;
