import React from "react";
import HomePage from "./components/HomePage/HomePage.jsx";
import About from "./components/AboutUs/AboutUs.jsx";
import Qualifications from "./components/Qualifications/Qualifications.jsx";
import Services from "./components/Services/Services.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Disclaimer from "./components/Disclaimer/Disclaimer.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <HomePage />
        <About />
        <Qualifications />
        <Services />
        <Testimonials />
        <ContactUs />
        <Disclaimer />
      </div>
    </LanguageProvider>
  );
}

export default App;
