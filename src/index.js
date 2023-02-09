import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxLfkx0RWFbb1l6d1FMY1pBNQtUQF1hS35UdERjXnpcdHJRTmRd"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
