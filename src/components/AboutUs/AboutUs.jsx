import React from "react";
import "./About.css";
import aboutImage from "../../assets/american_flag.png";
import bettsyImage from "../../assets/Bettsy_Echeverria_YoSoy.jpg";
import { useLanguage } from "../../context/LanguageContext";

function AboutUs() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About us",
      paragraphs: [
        "Founded by Bettsy Echeverria, an Ecuadorian immigrant turned proud American citizen, Yo Soy Immigration Services embodies the journey of resilience and success in the United States. Bettsy's personal experience fuels our mission to assist others navigating the intricate path of immigration with compassion and expertise.",
        "With a commitment to integrity and professionalism, we ensure that each document is meticulously prepared and notarized to meet legal requirements. Our personalized approach recognizes the unique circumstances of each client, providing tailored solutions to achieve your immigration goals.",
        "At Yo Soy Immigration Services, we understand the importance of accurate and efficient document preparation for your immigration needs. Whether you're pursuing citizenship, applying for visas, or seeking residency, our dedicated team is here to guide you every step of the way.",
        "Thank you for trusting us with your immigration journey!",
      ],
    },
    es: {
      title: "Sobre nosotros",
      paragraphs: [
        "Fundado por Bettsy Echeverria, una inmigrante ecuatoriana convertida en orgullosa ciudadana estadounidense, Yo Soy Immigration Services encarna el viaje de resiliencia y éxito en los Estados Unidos. La experiencia personal de Bettsy impulsa nuestra misión de ayudar a otros a navegar el intrincado camino de la inmigración con compasión y experiencia.",
        "Con un compromiso con la integridad y el profesionalismo, nos aseguramos de que cada documento sea preparado y notarizado meticulosamente para cumplir con los requisitos legales. Nuestro enfoque personalizado reconoce las circunstancias únicas de cada cliente, proporcionando soluciones a medida para alcanzar sus objetivos de inmigración.",
        "En Yo Soy Immigration Services, entendemos la importancia de una preparación de documentos precisa y eficiente para sus necesidades de inmigración. Ya sea que esté buscando la ciudadanía, solicitando visas o buscando residencia, nuestro equipo dedicado está aquí para guiarlo en cada paso del camino.",
        "¡Gracias por confiar en nosotros con su viaje de inmigración!",
      ],
    },
  };

  return (
    <div>
      <div className="about-container">
        <div className="about-background" />
        <h1 id="aboutus" className="about-header">
          {content[language].title}
        </h1>
        <div className="about-content">
          <div className="about-bio">
            {content[language].paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-image-container">
            <img
              src={bettsyImage}
              alt="Bettsy Echeverria - Yo Soy Immigration Services"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
