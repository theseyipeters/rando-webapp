import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WebAppAPI from "../utils/WebAppAPI";

export const getTemplates = createAsyncThunk(
	"templates/getTemplates",
	async () => {
		const response = await WebAppAPI().get(`/templates`);
		return response.data;
	}
);

export const getTemplateById = createAsyncThunk(
	"templates/getTemplateById",
	async (templateId) => {
		const response = await WebAppAPI().get(`/templates/${templateId}`);
		return response.data;
	}
);

const templatesSlice = createSlice({
	name: "templates",
	initialState: {
		templates: [],
		status: "idle",
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTemplates.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getTemplates.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.templates = action.payload;
			})
			.addCase(getTemplates.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getTemplateById.fulfilled, (state, action) => {
				const index = state.templates.findIndex(
					(template) => template.id === action.payload.id
				);
				if (index !== -1) {
					// Update existing template
					state.templates[index] = action.payload;
				} else {
					// Add new template
					state.templates.push(action.payload);
				}
			});
	},
});

export default templatesSlice.reducer;
