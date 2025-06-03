import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const { language } = useLanguage();

  const content = {
    en: {
      services: "services",
      aboutUs: "about us",
      qualifications: "qualifications",
      contactUs: "contact us",
    },
    es: {
      services: "servicios",
      aboutUs: "sobre nosotros",
      qualifications: "calificaciones",
      contactUs: "contáctenos",
    },
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <img
          className="navbar-logo"
          src={logo}
          alt="Yo Soy Immigration Services"
        />
        <div className="navbar-links">
          <a href="#services">{content[language].services}</a>|
          <a href="#aboutus">{content[language].aboutUs}</a>|
          <a href="#qualifications">{content[language].qualifications}</a>|
          <a href="#contactus">{content[language].contactUs}</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
