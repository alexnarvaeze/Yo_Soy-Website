import React from "react";
import "./Services.css";
import { useLanguage } from "../../context/LanguageContext";

function Services() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Services",
      intro:
        "Expert Document Preparer and Notary specializing in Immigration Services preparation and notarization tailored to the complexities of immigration paperwork.",
      sections: {
        immigration: {
          title: "Immigration Services",
          services: [
            {
              name: "Family Petitions",
              desc: "Sponsor family members for immigration benefits",
            },
            {
              name: "Citizenship",
              desc: "Guidance through the naturalization process",
            },
            {
              name: "Green Cards",
              desc: "Permanent residency applications and renewals",
            },
            {
              name: "Status Adjustment",
              desc: "Adjust your immigration status within the U.S.",
            },
            {
              name: "Work Permits",
              desc: "Apply for authorization to work legally in the U.S.",
            },
            {
              name: "Asylums",
              desc: "Seek protection and residence as an asylum seeker",
            },
            {
              name: "Parole In Place",
              desc: "Immigration benefits for military families",
            },
            {
              name: "TPS",
              desc: "Temporary Protected Status for eligible countries",
            },
            {
              name: "U Visa",
              desc: "For victims of crimes seeking lawful status",
            },
            {
              name: "Tourism Visa",
              desc: "Assistance with B1/B2 tourist visa applications",
            },
          ],
        },
        notary: {
          title: "Notary Services",
          services: [
            {
              name: "Sworn Declarations",
              desc: "Official statements verified by oath",
            },
            {
              name: "Certifications",
              desc: "Certify documents for official use",
            },
            {
              name: "Translations",
              desc: "Translate documents for immigration and legal use",
            },
            {
              name: "Simple Divorces",
              desc: "File and process uncontested divorces",
            },
            {
              name: "Create LLC Companies",
              desc: "Register and set up limited liability companies",
            },
          ],
        },
      },
    },
    es: {
      title: "Servicios",
      intro:
        "Preparador de Documentos Experto y Notario especializado en la preparación y notarización de Servicios de Inmigración adaptados a las complejidades del papeleo de inmigración.",
      sections: {
        immigration: {
          title: "Servicios de Inmigración",
          services: [
            {
              name: "Peticiones Familiares",
              desc: "Patrocinar miembros de la familia para beneficios de inmigración",
            },
            {
              name: "Ciudadanía",
              desc: "Orientación a través del proceso de naturalización",
            },
            {
              name: "Tarjetas Verdes",
              desc: "Solicitudes y renovaciones de residencia permanente",
            },
            {
              name: "Ajuste de Estatus",
              desc: "Ajuste de su estatus migratorio dentro de los EE.UU.",
            },
            {
              name: "Permisos de Trabajo",
              desc: "Solicitar autorización para trabajar legalmente en los EE.UU.",
            },
            {
              name: "Asilos",
              desc: "Buscar protección y residencia como solicitante de asilo",
            },
            {
              name: "Parole In Place",
              desc: "Beneficios de inmigración para familias militares",
            },
            {
              name: "TPS",
              desc: "Estatus de Protección Temporal para países elegibles",
            },
            {
              name: "Visa U",
              desc: "Para víctimas de delitos que buscan estatus legal",
            },
            {
              name: "Visa de Turismo",
              desc: "Asistencia con solicitudes de visa de turista B1/B2",
            },
          ],
        },
        notary: {
          title: "Servicios Notariales",
          services: [
            {
              name: "Declaraciones Juradas",
              desc: "Declaraciones oficiales verificadas bajo juramento",
            },
            {
              name: "Certificaciones",
              desc: "Certificar documentos para uso oficial",
            },
            {
              name: "Traducciones",
              desc: "Traducir documentos para uso migratorio y legal",
            },
            {
              name: "Divorcios Sencillos",
              desc: "Presentar y procesar divorcios no disputados",
            },
            {
              name: "Crear Empresas LLC",
              desc: "Registrar y configurar sociedades de responsabilidad limitada",
            },
          ],
        },
      },
    },
  };

  return (
    <div className="services-container">
      <h1 id="services" className="services-header">
        {content[language].title}
      </h1>
      <p className="services-intro">{content[language].intro}</p>

      <div className="services-grid">
        {/* Immigration Services Section */}
        <div className="service-section">
          <h2 className="section-title">
            {content[language].sections.immigration.title}
          </h2>
          <div className="service-list">
            <ul>
              {content[language].sections.immigration.services.map(
                (service, index) => (
                  <li key={index}>
                    <span className="service-name">{service.name}</span>
                    <span className="service-desc">{service.desc}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Notary Services Section */}
        <div className="service-section">
          <h2 className="section-title">
            {content[language].sections.notary.title}
          </h2>
          <div className="service-list">
            <ul>
              {content[language].sections.notary.services.map(
                (service, index) => (
                  <li key={index}>
                    <span className="service-name">{service.name}</span>
                    <span className="service-desc">{service.desc}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
