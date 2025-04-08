import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
      <h1 id="services" className="services-header">
        Services
      </h1>
      <p className="services-intro">
        Expert Document Preparer and Notary specializing in Immigration Services preparation and notarization tailored to the complexities of immigration paperwork.
      </p>

      <div className="services-grid">
        {/* Immigration Services Section */}
        <div className="service-section">
          <h2 className="section-title">Immigration Services</h2>
          <div className="service-list">
            <ul>
              <li>
                <span className="service-name">Family Petitions</span>
                <span className="service-desc">Sponsor family members for immigration benefits</span>
              </li>
              <li>
                <span className="service-name">Citizenship</span>
                <span className="service-desc">Guidance through the naturalization process</span>
              </li>
              <li>
                <span className="service-name">Green Cards</span>
                <span className="service-desc">Permanent residency applications and renewals</span>
              </li>
              <li>
                <span className="service-name">Status Adjustment</span>
                <span className="service-desc">Adjust your immigration status within the U.S.</span>
              </li>
              <li>
                <span className="service-name">Work Permits</span>
                <span className="service-desc">Apply for authorization to work legally in the U.S.</span>
              </li>
              <li>
                <span className="service-name">Asylums</span>
                <span className="service-desc">Seek protection and residence as an asylum seeker</span>
              </li>
              <li>
                <span className="service-name">Parole In Place</span>
                <span className="service-desc">Immigration benefits for military families</span>
              </li>
              <li>
                <span className="service-name">TPS</span>
                <span className="service-desc">Temporary Protected Status for eligible countries</span>
              </li>
              <li>
                <span className="service-name">U Visa</span>
                <span className="service-desc">For victims of crimes seeking lawful status</span>
              </li>
              <li>
                <span className="service-name">Tourism Visa</span>
                <span className="service-desc">Assistance with B1/B2 tourist visa applications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Notary Services Section */}
        <div className="service-section">
          <h2 className="section-title">Notary Services</h2>
          <div className="service-list">
            <ul>
              <li>
                <span className="service-name">Sworn Declarations</span>
                <span className="service-desc">Official statements verified by oath</span>
              </li>
              <li>
                <span className="service-name">Certifications</span>
                <span className="service-desc">Certify documents for official use</span>
              </li>
              <li>
                <span className="service-name">Translations</span>
                <span className="service-desc">Translate documents for immigration and legal use</span>
              </li>
              <li>
                <span className="service-name">Simple Divorces</span>
                <span className="service-desc">File and process uncontested divorces</span>
              </li>
              <li>
                <span className="service-name">Create LLC Companies</span>
                <span className="service-desc">Register and set up limited liability companies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
