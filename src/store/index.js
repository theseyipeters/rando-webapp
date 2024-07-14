import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { restoreState } from "./authSlice";
import userActivitiesReducer from "./userActivitiesSlice";
import mockDataReducer from "./mockDataSlice";
import templatesReducer from "./templatesSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	userActivities: userActivitiesReducer,
	mockData: mockDataReducer,
	templates: templatesReducer,
	// Add other reducers here
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

// Load initial state from local storage if it exists
const savedState = localStorage.getItem("auth-state");
if (savedState) {
	store.dispatch(restoreState(JSON.parse(savedState)));
}

// Subscribe to store updates and sync with local storage
store.subscribe(() => {
	const state = store.getState();
	localStorage.setItem("auth-state", JSON.stringify(state.auth));
});

export default store;
