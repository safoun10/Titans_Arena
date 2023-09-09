import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./Contexts/Provider/AuthProvider";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<div className="overflow-hidden max-w-full">
					<AuthProvider>
						<RouterProvider router={router} />
					</AuthProvider>
				</div>
			</HelmetProvider>
		</Provider>
	</React.StrictMode>
);
