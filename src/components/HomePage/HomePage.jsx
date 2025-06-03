import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import Access from "../Access/Access";
import heroImage from "../../assets/hero.jpg";
import { useLanguage } from "../../context/LanguageContext";

function HomePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Here to help you achieve your American Dream.",
      description:
        "Expert Document Preparer and Notary specializing in Immigration Services preparation and notarization tailored to the complexities of immigration paper work.",
    },
    es: {
      title: "Aquí para ayudarte a lograr tu Sueño Americano.",
      description:
        "Preparador de Documentos Experto y Notario especializado en la preparación y notarización de Servicios de Inmigración adaptados a las complejidades del papeleo de inmigración.",
    },
  };

  return (
    <>
      <Access />
      <Navbar />
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-text-container">
          <p className="hero-title">{content[language].title}</p>
          <p className="hero-description">{content[language].description}</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
