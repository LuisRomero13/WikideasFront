import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>
);
