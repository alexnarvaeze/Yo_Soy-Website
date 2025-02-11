import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="sections-container">
      {/* First Section */}
      <div className="section home-page-container">
        <div className="text-overlay">
          <div className="home-main-container">
            <h1 className="american-dream-header">
              Here to help you achieve your American Dream!
            </h1>
            <p className="home-main-paragraph">
              Expert Document Preparer and Notary specializing in Immigration
              Services: Providing meticulous document preparation and
              notarization services tailored to the complexities of immigration
              paperwork. Ensuring accuracy, confidentiality, and efficiency in
              facilitating smooth immigration processes for clients.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="section">
        <p>Thank you for trusting us with your immigration journey!</p>
      </div>
    </div>
  );
}

export default HomePage;
