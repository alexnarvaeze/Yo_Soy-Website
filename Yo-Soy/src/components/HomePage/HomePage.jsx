import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-left-container">
        <h1 className="american-dream-header">
          We help you achieve your American Dream!
        </h1>
        <p className="home-left-paragraph">
          Expert Document Preparer and Notary specializing in Immigration
          Services: Providing meticulous document preparation and notarization
          services tailored to the complexities of immigration paperwork.
          Ensuring accuracy, confidentiality, and efficiency in facilitating
          smooth immigration processes for clients.
        </p>
      </div>
      <div className="home-right-container"></div>
    </div>
  );
}

export default HomePage;
