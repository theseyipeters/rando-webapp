import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ProviderContext = createContext();

// Create the provider component
export const ProviderProvider = ({ children }) => {
	const initialProvider = localStorage.getItem("SELECTED_PROVIDER") || "NG";
	const [provider, setProvider] = useState(initialProvider);

	// Update local storage whenever the provider changes
	useEffect(() => {
		localStorage.setItem("SELECTED_PROVIDER", provider);
	}, [provider]);

	return (
		<ProviderContext.Provider value={{ provider, setProvider }}>
			{children}
		</ProviderContext.Provider>
	);
};

// Create a custom hook to use the ProviderContext
export const useProvider = () => {
	return useContext(ProviderContext);
};
