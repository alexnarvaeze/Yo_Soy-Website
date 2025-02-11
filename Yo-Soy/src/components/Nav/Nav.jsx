import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [count, setCount] = useState(0);
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    const headerInfo = document.querySelector(".header-info");
    if (headerInfo) {
      headerInfo.classList.toggle("hide");
    }
  };

  return (
    <>
      <nav id="desktop-nav">
        <h1 className="business-title">Yo Soy Immigration</h1>
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
              <a class="contact-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <img
          class="logo"
          src="./src/assets/YoSoy_new_logo.png"
          alt="yo soy logo"
        />
        <div class="hamburger-menu">
          <div class="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a class="a-menu" href="#about" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a class="a-menu" href="#qualifications" onClick={toggleMenu}>
                Qualifications
              </a>
            </li>
            <li>
              <a class="a-menu" href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a class="a-menu" href="#testimonials" onClick={toggleMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a class="a-menu" href="#contact" onClick={toggleMenu}>
                Contact Us
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
