import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Home } from "./screens/Home/Home.jsx";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(<Home />);
