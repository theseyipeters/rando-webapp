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
	getUserActivities: async () => {
		try {
			const response = await WebAppAPI().get(`/user-activities`);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	getUserActivitiesById: async (activityId) => {
		try {
			const response = await WebAppAPI().get(`/user-activities/${activityId}`);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	getMockDataGenerated: async () => {
		try {
			const response = await WebAppAPI().get(`/mock-data`);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	getMockDataGenerated: async (mockDataId) => {
		try {
			const response = await WebAppAPI().get(`/mock-data/${mockDataId}`);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	getTemplates: async () => {
		try {
			const response = await WebAppAPI().get(`/templates`);

			return response.data;
		} catch (error) {
			throw error;
		}
	},

	getTemplateById: async (templateId) => {
		try {
			const response = await WebAppAPI().get(`/templates/${templateId}`);

			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default WebAppService;
