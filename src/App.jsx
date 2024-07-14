import "./index.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Generate from "./pages/generate/Generate";
import Login from "./pages/auth/login/Login";
import { ProviderProvider } from "../src/context/ProviderContext";
import SignUp from "./pages/auth/signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import { ActivityLog } from "./pages/activity-log/ActivityLog";
import { MockData } from "./pages/mock-data/MockData";
import { Templates } from "./pages/templates/Templates";

function App() {
	return (
		<div>
			<ProviderProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/generate"
							element={<Generate />}
						/>
						<Route
							path="/auth/login"
							element={<Login />}
						/>
						<Route
							path="/auth/signup"
							element={<SignUp />}
						/>
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
						<Route
							path="/activity-log"
							element={<ActivityLog />}
						/>
						<Route
							path="/mock-data"
							element={<MockData />}
						/>
						<Route
							path="/templates"
							element={<Templates />}
						/>
					</Routes>
				</BrowserRouter>
			</ProviderProvider>
		</div>
	);
}

export default App;
