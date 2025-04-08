import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage/HomePage.jsx";
import About from "./components/AboutUs/AboutUs.jsx";
import "./index.css";
import Qualifications from "./components/Qualifications/Qualifications.jsx";
import Services from "./components/Services/Services.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    <About />
    <Qualifications />
    <Services />
    <Testimonials />
    <ContactUs />
  </React.StrictMode>
);
