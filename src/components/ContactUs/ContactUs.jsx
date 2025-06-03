import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { useLanguage } from "../../context/LanguageContext";

function ContactUs() {
  const { language } = useLanguage();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Us",
      intro:
        "Have questions or need assistance? We're here to help you navigate your immigration journey.",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      weekdays: "Monday - Friday: 9am - 5pm",
      saturday: "Saturday: By appointment",
      formLabels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
      },
      buttons: {
        sending: "Sending...",
        send: "Send Message",
      },
      messages: {
        success: "Thank you for your message! We'll get back to you soon.",
        error: "Failed to send message. Please try again later.",
      },
    },
    es: {
      title: "Contáctenos",
      intro:
        "¿Tiene preguntas o necesita ayuda? Estamos aquí para ayudarle a navegar su proceso de inmigración.",
      phone: "Teléfono",
      email: "Correo",
      hours: "Horario",
      weekdays: "Lunes - Viernes: 9am - 5pm",
      saturday: "Sábado: Con cita previa",
      formLabels: {
        name: "Nombre",
        email: "Correo",
        phone: "Teléfono",
        message: "Mensaje",
      },
      buttons: {
        sending: "Enviando...",
        send: "Enviar Mensaje",
      },
      messages: {
        success: "¡Gracias por su mensaje! Nos pondremos en contacto pronto.",
        error: "Error al enviar el mensaje. Por favor intente nuevamente.",
      },
    },
  };

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const result = await emailjs.sendForm(
        "service_ieh7z7v",
        "template_equrpzn",
        form.current,
        "kSiIIxlf3yJdKsex2"
      );

      if (result.text === "OK") {
        setSubmitStatus({ isSubmitting: false, isSuccess: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        error: content[language].messages.error,
      });
    }
  };

  return (
    <div className="contact-container">
      <h1 id="contactus" className="contact-header">
        {content[language].title}
      </h1>
      <p className="contact-intro">{content[language].intro}</p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>{content[language].phone}</h3>
              <p>786-925-9101</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>{content[language].email}</h3>
              <p>yosoyimmigrationservices@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h3>{content[language].hours}</h3>
              <p>{content[language].weekdays}</p>
              <p>{content[language].saturday}</p>
            </div>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          {submitStatus.isSuccess && (
            <div className="success-message">
              {content[language].messages.success}
            </div>
          )}
          {submitStatus.error && (
            <div className="error-message">{submitStatus.error}</div>
          )}
          <div className="form-group">
            <label htmlFor="name">{content[language].formLabels.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={submitStatus.isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{content[language].formLabels.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={submitStatus.isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">{content[language].formLabels.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={submitStatus.isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              {content[language].formLabels.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={submitStatus.isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={submitStatus.isSubmitting}
          >
            {submitStatus.isSubmitting
              ? content[language].buttons.sending
              : content[language].buttons.send}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
