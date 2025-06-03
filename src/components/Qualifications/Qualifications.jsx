import React from "react";
import "./Qualifications.css";
import diplomaImage1 from "/src/assets/bettsy_diploma1.png";
import diplomaImage2 from "/src/assets/bettsy_diploma2.png";
import diplomaImage3 from "/src/assets/bettsy_diploma3.png";
import { useLanguage } from "../../context/LanguageContext";

function Qualifications() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Qualifications",
      intro:
        "With years of experience and the credentials to back it, we are ready to assist you on your journey.",
      diplomas: {
        diploma1: "Diploma 1",
        diploma2: "Diploma 2",
        diploma3: "Diploma 3",
      },
    },
    es: {
      title: "Calificaciones",
      intro:
        "Con años de experiencia y las credenciales que lo respaldan, estamos listos para ayudarte en tu camino.",
      diplomas: {
        diploma1: "Diploma 1",
        diploma2: "Diploma 2",
        diploma3: "Diploma 3",
      },
    },
  };

  return (
    <div className="qual-container">
      <h1 id="qualifications" className="qual-header">
        {content[language].title}
      </h1>
      <p className="qual-intro">{content[language].intro}</p>
      <div className="qual-grid">
        <div className="qual-section">
          <div className="qual-image-container">
            <a href={diplomaImage1} target="_blank" rel="noopener noreferrer">
              <img
                src={diplomaImage1}
                alt={content[language].diplomas.diploma1}
                className="qual-image"
              />
            </a>
          </div>
          <div className="qual-image-container">
            <a href={diplomaImage2} target="_blank" rel="noopener noreferrer">
              <img
                src={diplomaImage2}
                alt={content[language].diplomas.diploma2}
                className="qual-image"
              />
            </a>
          </div>
          <div className="qual-image-container">
            <a href={diplomaImage3} target="_blank" rel="noopener noreferrer">
              <img
                src={diplomaImage3}
                alt={content[language].diplomas.diploma3}
                className="qual-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
