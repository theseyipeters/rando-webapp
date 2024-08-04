import React, { createContext, useContext, useState } from "react";
import Toast from "../components/ui/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
	const [toasts, setToasts] = useState([]);

	const addToast = (message, type = "success", duration = 3000) => {
		const id = Date.now();
		setToasts([...toasts, { id, message, type }]);

		// Auto-remove toast after the specified duration
		setTimeout(() => {
			removeToast(id);
		}, duration);
	};

	const removeToast = (id) => {
		setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}

			<div className="toast-container fixed top-[4%] right-0 m-4 z-[2000]">
				{toasts.map((toast) => (
					<Toast
						key={toast.id}
						message={toast.message}
						type={toast.type}
						onClose={() => removeToast(toast.id)}
					/>
				))}
			</div>
		</ToastContext.Provider>
	);
};

export const useToast = () => useContext(ToastContext);
