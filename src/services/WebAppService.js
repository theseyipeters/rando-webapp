import WebAppAPI from "../utils/WebAppAPI";

const WebAppService = {
	signUp: async (payload) => {
		try {
			const response = await WebAppAPI().post("/auth/signup", payload);

			return response.data;
		} catch (error) {
			throw error;
		}
	},
	login: async (payload) => {
		try {
			const response = await WebAppAPI().post("/auth/login", payload);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	generateJSON: async (payload, provider) => {
		try {
			const response = await WebAppAPI().post(
				`/generate?provider=${provider}`,
				payload
			);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	generateJSONData: async (payload, provider) => {
		try {
			const response = await WebAppAPI().post(
				`/generate-data?provider=${provider}`,
				payload
			);

			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default WebAppService;
