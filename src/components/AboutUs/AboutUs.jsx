import React from "react";
import "./About.css";
import aboutImage from "../../assets/american_flag.png";

function AboutUs() {
  return (
    <div>
      <div className="about-container">
        <div className="about-background" />
        <h1 id="about" className="about-header">
          About us
        </h1>
        <div className="about-bio">
          <p>
            Founded by Bettsy Echeverria, an Ecuadorian immigrant turned proud
            American citizen, Yo Soy embodies the journey of resilience and
            success in the United States.
            <br /> Bettsy's personal experience fuels our mission to assist
            others navigating the intricate path of immigration with compassion
            and expertise.
            <br />
          </p>
          <p>
            With a commitment to integrity and professionalism, we ensure that
            each document is meticulously prepared and notarized to meet legal
            requirements.
            <br /> Our personalized approach recognizes the unique circumstances
            of each client, providing tailored solutions to achieve your
            immigration goals.
          </p>
          <p>
            At Yo Soy, we understand the importance of accurate and efficient
            document preparation for your immigration needs. <br />
            Whether you're pursuing citizenship, applying for visas, or seeking
            residency, our dedicated team is here to guide you every step of the
            way.
          </p>
        </div>
      </div>

      <div className="section">
        {/* Add any additional sections or information here */}
        <p>Thank you for trusting us with your immigration journey!</p>
      </div>
    </div>
  );
}

export default AboutUs;
