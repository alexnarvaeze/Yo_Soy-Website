import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
      <h1 id="services" className="title">
        Services
      </h1>

      {/* Immigration Services Section */}
      <h2 className="title">Immigration Services</h2>
      <div className="card-container">
        {[
          {
            title: "Family Petitions",
            description: "Sponsor family members for immigration benefits.",
          },
          {
            title: "Citizenship",
            description: "Guidance through the naturalization process.",
          },
          {
            title: "Green Cards",
            description: "Permanent residency applications and renewals.",
          },
          {
            title: "Status Adjustment",
            description: "Adjust your immigration status within the U.S.",
          },
          {
            title: "Work Permits",
            description: "Apply for authorization to work legally in the U.S.",
          },
          {
            title: "Asylums",
            description: "Seek protection and residence as an asylum seeker.",
          },
          {
            title: "Parole In Place",
            description: "Immigration benefits for military families.",
          },
          {
            title: "TPS",
            description: "Temporary Protected Status for eligible countries.",
          },
          {
            title: "U Visa",
            description: "For victims of crimes seeking lawful status.",
          },
          {
            title: "Tourism Visa",
            description: "Assistance with B1/B2 tourist visa applications.",
          },
        ].map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Notary Services Section */}
      <h2 className="title">Notary Services</h2>
      <div className="card-container">
        {[
          {
            title: "Sworn Declarations",
            description: "Official statements verified by oath.",
          },
          {
            title: "Certifications",
            description: "Certify documents for official use.",
          },
          {
            title: "Translations",
            description: "Translate documents for immigration and legal use.",
          },
          {
            title: "Simple Divorces",
            description: "File and process uncontested divorces.",
          },
          {
            title: "Create LLC Companies",
            description: "Register and set up limited liability companies.",
          },
        ].map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
