import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App.jsx";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
// Wow