import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { useLanguage } from "../../context/LanguageContext";

const VideoCard = ({ title, videoId, isActive }) => {
  const videoUrl = `https://www.youtube.com/shorts/${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`video-card ${isActive ? "active" : ""}`}
    >
      <div>
        <img
          src={thumbnailUrl}
          alt={title}
          className="video-thumbnail"
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
          }}
        />
        <h3 className="video-title">{title}</h3>
      </div>
    </a>
  );
};

function Testimonials() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Client Success Stories",
      description:
        "Discover how we've helped our clients achieve their immigration goals. These real stories showcase our commitment to making dreams come true.",
    },
    es: {
      title: "Historias de Éxito de Clientes",
      description:
        "Descubra cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos de inmigración. Estas historias reales muestran nuestro compromiso de hacer realidad los sueños.",
    },
  };

  const videos = {
    en: [
      {
        id: "Fnd17aQl2W0",
        title: "Bryan’s Asylum Victory: A New Chapter Begins",
        description:
          "Join us as Bryan shares his inspiring journey—from uncertainty to triumph—after receiving his work permit and asylum approval through our dedicated immigration services.",
      },
      {
        id: "TU5xnYqDlag",
        title:
          "Yonat’s Milestone: Work Permit Approved and a Brighter Future Ahead",
        description:
          "Yonat celebrates a major step forward—receiving her work permit approval and opening the door to new opportunities, made possible through our trusted immigration services.",
      },
      {
        id: "J5axNb26k8I",
        title:
          "From Application to Approval: Agustin's Journey to a Work Permit & Social Security",
        description:
          "Agustin talks about the moment they received their work permit and Social Security card, and how our team helped make it happen. Another step toward a brighter future!",
      },
    ],
    es: [
      {
        id: "Fnd17aQl2W0",
        title: "La Victoria de Bryan: Un Nuevo Comienzo con su Asilo Aprobado",
        description:
          "Acompáñanos mientras Bryan comparte su inspiradora historia—de la incertidumbre al triunfo—tras obtener su permiso de trabajo y el asilo aprobado gracias a nuestros servicios de inmigración.",
      },
      {
        id: "TU5xnYqDlag",
        title:
          "Un Logro para Yonat: Permiso de Trabajo Aprobado y un Futuro Prometedor",
        description:
          "Yonat celebra un gran avance tras recibir la aprobación de su permiso de trabajo, abriendo la puerta a nuevas oportunidades gracias a nuestros confiables servicios de inmigración.",
      },
      {
        id: "J5axNb26k8I",
        title:
          "De la solicitud a la aprobación: El camino de Agustín hacia un permiso de trabajo y la seguridad social",
        description:
          "Agustín habla sobre el momento en que recibió su permiso de trabajo y su tarjeta de Seguro Social, y cómo nuestro equipo lo ayudó a lograrlo. ¡Otro paso hacia un futuro mejor!",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === videos[language].length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos[language].length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [isTransitioning, language]);

  const getVisibleVideos = () => {
    const result = [];
    for (let i = 0; i < videos[language].length; i++) {
      const index = (currentIndex + i) % videos[language].length;
      result.push(videos[language][index]);
    }
    return result;
  };

  return (
    <div className="testimonials-container">
      <h1 id="testimonials" className="title">
        {content[language].title}
      </h1>
      <p className="testimonials-description">
        {content[language].description}
      </p>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="carousel">
          {getVisibleVideos().map((video, index) => (
            <VideoCard
              key={`${video.id}-${index}`}
              videoId={video.id}
              title={video.title}
              isActive={index === 1}
            />
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <p className="current-video-description">
        {getVisibleVideos()[1].description}
      </p>
    </div>
  );
}

export default Testimonials;
