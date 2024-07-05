import "./index.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Generate from "./pages/generate/Generate";
import Login from "./pages/auth/login/Login";
import { ProviderProvider } from "../src/context/ProviderContext";

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
					</Routes>
				</BrowserRouter>
			</ProviderProvider>
		</div>
	);
}

export default App;
