import React from "react";
import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import Providers from "./common/components/Providers/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
