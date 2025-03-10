import React from "react";
import "./Qualifications.css";
import diplomaImage1 from "/src/assets/bettsy_diploma1.png";
import diplomaImage2 from "/src/assets/bettsy_diploma2.png"; // Second image
import diplomaImage3 from "/src/assets/bettsy_diploma3.png"; // Second image

function Qualifications() {
  return (
    <div className="qual-container">
      <h1 id="qualifications" className="qual-header">
        Qualifications
      </h1>
      <div className="qual-columns">
        <div className="qual-top">
          <div className="img1">
            <a href={diplomaImage1} target="_blank" rel="noopener noreferrer">
              <img src={diplomaImage1} alt="Diploma 1" className="qual-image" />
            </a>
          </div>
          <div className="img2">
            <a href={diplomaImage2} target="_blank" rel="noopener noreferrer">
              <img src={diplomaImage2} alt="Diploma 2" className="qual-image" />
            </a>
          </div>
        </div>
        <div className="qual-bottom">
          <div className="img3">
            <a href={diplomaImage3} target="_blank" rel="noopener noreferrer">
              <img src={diplomaImage3} alt="Diploma 3" className="qual-image" />
            </a>
          </div>
        </div>
      </div>
      <div className="section">
        <p>
          With years of experience and the credentials to back it, we are ready
          to assist you on your journey.
        </p>
      </div>
    </div>
  );
}

export default Qualifications;
