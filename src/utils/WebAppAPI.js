import axios from "axios";

const WebAppAPI = () => {
	const authToken = localStorage.getItem("authToken");
	let headers = {};

	if (authToken) {
		headers = {
			Authorization: `Bearer ${authToken}`,
		};
	}
	const baseURL = import.meta.env.VITE_ACCESS_CODE_URL;

	const axiosInstance = axios.create({
		baseURL: baseURL,
		timeout: 30000,
		headers,
	});

	return axiosInstance;
};

export default WebAppAPI;
