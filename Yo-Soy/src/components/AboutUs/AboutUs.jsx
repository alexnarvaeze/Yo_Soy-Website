import React from "react";
import "./About.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 id="about" className="about-header">
        About us
      </h1>
      <div className="about-columns">
        <div className="about-left">
          <p className="bio-1">
            Welcome to Yo Soy – Your Trusted Partner in Immigration
            Documentation and Notary Services!
          </p>
          <p className="bio-2">
            Founded by Bettsy Echeverria, an Ecuadorian immigrant turned proud
            American citizen, Yo Soy embodies the journey of resilience and
            success in the United States. Bettsy's personal experience fuels our
            mission to assist others navigating the intricate path of
            immigration with compassion and expertise.
          </p>
          <div className="image-placeholder">{/* Space for the image */}</div>
        </div>
        <div className="about-right">
          <p className="bio-3">
            At Yo Soy, we understand the importance of accurate and efficient
            document preparation for your immigration needs. Whether you're
            pursuing citizenship, applying for visas, or seeking residency, our
            dedicated team is here to guide you every step of the way.
          </p>
          <p className="bio-4">
            With a commitment to integrity and professionalism, we ensure that
            each document is meticulously prepared and notarized to meet legal
            requirements. Our personalized approach recognizes the unique
            circumstances of each client, providing tailored solutions to
            achieve your immigration goals.
          </p>
          <p className="bio-5">
            Trust Yo Soy to be your reliable partner on your journey to
            realizing your American dream. Contact us today and let us help you
            navigate the complexities of immigration with confidence and ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
