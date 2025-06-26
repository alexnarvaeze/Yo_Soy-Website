import React from "react";
import "./Disclaimer.css";
import { useLanguage } from "../../context/LanguageContext";

function Disclaimer() {
  const { language } = useLanguage();

  const messages = {
    en: "I am not an attorney licensed to practice law and I may not give legal advice or accept fees for legal advice. I am not accredited to represent you in immigration matters.",
    es: "No soy un abogado autorizado para ejercer la abogacía y no puedo dar asesoría legal ni aceptar honorarios por asesoría legal. No estoy acreditado para representarlo en asuntos de inmigración.",
  };

  return (
    <div className="disclaimer-container">
      <p>{messages[language]}</p>
    </div>
  );
}

export default Disclaimer;
