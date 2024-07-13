export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email, setErrors) => {
	if (!emailRegex.test(email)) {
		setErrors((prevErrors) => ({
			...prevErrors,
			email: "Invalid email address",
		}));
		return false;
	}
	setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
	return true;
};

export const validatePasswords = (password, verifyPassword, setErrors) => {
	if (password !== verifyPassword) {
		setErrors((prevErrors) => ({
			...prevErrors,
			verifyPassword: "Passwords do not match",
			successMessage: "",
		}));
		return false;
	}

	setErrors((prevErrors) => ({
		...prevErrors,
		verifyPassword: "",
		successMessage: "Passwords match!",
	}));

	return true;
};
