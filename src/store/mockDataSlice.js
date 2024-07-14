// src/features/mockData/mockDataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WebAppAPI from "../utils/WebAppAPI";

export const getMockDataGenerated = createAsyncThunk(
	"mockData/getMockDataGenerated",
	async () => {
		const response = await WebAppAPI().get("/mock-data");
		return response.data;
	}
);

export const getMockDataGeneratedById = createAsyncThunk(
	"mockData/getMockDataGeneratedById",
	async (mockDataId) => {
		const response = await WebAppAPI().get(`/mock-data/${mockDataId}`);
		return response.data;
	}
);

const mockDataSlice = createSlice({
	name: "mockData",
	initialState: {
		data: [],
		status: "idle",
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMockDataGenerated.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getMockDataGenerated.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(getMockDataGenerated.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getMockDataGeneratedById.fulfilled, (state, action) => {
				const index = state.data.findIndex(
					(data) => data.id === action.payload.id
				);
				if (index !== -1) {
					state.data[index] = action.payload;
				} else {
					state.data.push(action.payload);
				}
			});
	},
});

export default mockDataSlice.reducer;
