import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
     <div className="overflow-hidden max-w-full">
     <RouterProvider router={router} />
     </div>
    </HelmetProvider>
  </React.StrictMode>
);
