import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		email: "",
		username: "",
		role: "",
		created_at: "",
		updated_at: "",
		id: "",
		isNew: true,
	},

	token: "",
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateUser: (state, action) => {
			state.user = { ...action.payload };
		},
		updateOrganization: (state, action) => {
			state.organization = { ...action.payload };
		},
		updateToken: (state, action) => {
			state.token = action.payload;
		},
		authenticate: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			Object.assign(state, initialState);
			state.isAuthenticated = false;
		},
		restoreState: (state, action) => {
			return action.payload;
		},
	},
});

export const {
	updateUser,
	updateOrganization,
	updateToken,
	authenticate,
	logout,
	restoreState,
} = authSlice.actions;

export default authSlice.reducer;
