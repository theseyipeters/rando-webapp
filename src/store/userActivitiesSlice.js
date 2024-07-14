// src/features/userActivities/userActivitiesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WebAppAPI from "../utils/WebAppAPI";

export const getUserActivities = createAsyncThunk(
	"userActivities/getUserActivities",
	async () => {
		const response = await WebAppAPI().get("/user-activities");
		return response.data;
	}
);

export const getUserActivitiesById = createAsyncThunk(
	"userActivities/getUserActivitiesById",
	async (activityId) => {
		const response = await WebAppAPI().get(`/user-activities/${activityId}`);
		return response.data;
	}
);

const userActivitiesSlice = createSlice({
	name: "userActivities",
	initialState: {
		activities: [],
		status: "idle",
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserActivities.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getUserActivities.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.activities = action.payload;
			})
			.addCase(getUserActivities.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getUserActivitiesById.fulfilled, (state, action) => {
				const index = state.activities.findIndex(
					(activity) => activity.id === action.payload.id
				);
				if (index !== -1) {
					state.activities[index] = action.payload;
				} else {
					state.activities.push(action.payload);
				}
			});
	},
});

export default userActivitiesSlice.reducer;
