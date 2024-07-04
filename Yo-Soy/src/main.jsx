import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav/Nav.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import About from "./components/AboutUs/AboutUs.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <HomePage />
    <About />
  </React.StrictMode>
);
