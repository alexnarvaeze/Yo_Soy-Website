import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    en: {
      services: "services",
      aboutUs: "about us",
      testimonials: "testimonials",
      qualifications: "qualifications",
      contactUs: "contact us",
    },
    es: {
      services: "servicios",
      aboutUs: "sobre nosotros",
      testimonials: "testimonios",
      qualifications: "calificaciones",
      contactUs: "contáctenos",
    },
  };

  return (
    <div className="navbar-container">
      <img
        className="navbar-logo"
        src={logo}
        alt="Yo Soy Immigration Services"
      />
      <div className="navbar-links">
        <a href="#services">{content[language].services}</a>|
        <a href="#aboutus">{content[language].aboutUs}</a>|
        <a href="#testimonials">{content[language].testimonials}</a>|
        <a href="#qualifications">{content[language].qualifications}</a>|
        <a href="#contactus">{content[language].contactUs}</a>
      </div>
      <div className="navbar-lang-switch">
        <button
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => toggleLanguage("en")}
        >
          EN
        </button>
        <button
          className={`lang-btn ${language === "es" ? "active" : ""}`}
          onClick={() => toggleLanguage("es")}
        >
          ES
        </button>
      </div>
    </div>
  );
}

export default Navbar;
