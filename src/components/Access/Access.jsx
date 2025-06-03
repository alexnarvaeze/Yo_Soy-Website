import "./Access.css";
import { useLanguage } from "../../context/LanguageContext";

function Access() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="access-container">
      <div className="access-content">
        <a
          className={language === "en" ? "active" : ""}
          onClick={() => toggleLanguage("en")}
        >
          English
        </a>
        <a
          className={language === "es" ? "active" : ""}
          onClick={() => toggleLanguage("es")}
        >
          Español
        </a>
        <p>Cell: 786-925-9101</p>
      </div>
    </div>
  );
}

export default Access;
