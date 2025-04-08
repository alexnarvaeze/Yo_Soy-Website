import React from "react";
import "./Qualifications.css";
import diplomaImage1 from "/src/assets/bettsy_diploma1.png";
import diplomaImage2 from "/src/assets/bettsy_diploma2.png";
import diplomaImage3 from "/src/assets/bettsy_diploma3.png";

function Qualifications() {
  return (
    <div className="qual-container">
      <h1 id="qualifications" className="qual-header">
        Qualifications
      </h1>
      <p className="qual-intro">
        With years of experience and the credentials to back it, we are ready to assist you on your journey.
      </p>
      <div className="qual-grid">
        <div className="qual-section">
          <div className="qual-image-container">
            <a href={diplomaImage1} target="_blank" rel="noopener noreferrer">
              <img src={diplomaImage1} alt="Diploma 1" className="qual-image" />
            </a>
          </div>
          <div className="qual-image-container">
            <a href={diplomaImage2} target="_blank" rel="noopener noreferrer">
              <img src={diplomaImage2} alt="Diploma 2" className="qual-image" />
            </a>
          </div>
          <div className="qual-image-container">
            <a href={diplomaImage3} target="_blank" rel="noopener noreferrer">
              <img src={diplomaImage3} alt="Diploma 3" className="qual-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
