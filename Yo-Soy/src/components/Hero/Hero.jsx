import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [count, setCount] = useState(0);
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <>
      <nav id="desktop-nav">
        <img
          class="logo"
          src="./src/assets/yo-soy-logo1.png"
          alt="yo soy logo"
        />
        <div class="nav-color">
          <ul class="nav-links">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#qualifications">Qualifications</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-menu"></nav>
    </>
  );
}

export default Hero;
