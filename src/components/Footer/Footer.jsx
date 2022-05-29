import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaThLarge,
  FaEnvelope,
  FaFileExport,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaTools
} from "react-icons/fa";
import "./Footer.css";
import { AppConfig } from "../../config/AppConfig";

export default function Footer() {
  return (
    <footer className="footer-component">
      <div className="footer-top">
        <div className="ft-nav-group">
          <a href="#about" className="ft-nav-link" title="Layesall">
            <FaHome className="ft-nav-icon" />
            <span className="ft-nav-text">Layesall</span>
          </a>
          <a href="#realizations" className="ft-nav-link" title="Realisations">
            <FaThLarge className="ft-nav-icon" />
            <span className="ft-nav-text">Réalisations</span>
          </a>
          <a href="#skills" className="ft-nav-link" title="Contact">
            <FaTools className="ft-nav-icon" />
            <span className="ft-nav-text">Compétences</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="ft-copyright"> &copy; { AppConfig('app').app_copyright } </div>
        <div className="ft-social-group">
          <Link
            to="#"
            className="ft-social-link"
            title="Télécharger mon curriculum vitae"
          >
            <FaFileExport className="ft-social-icon" />
          </Link>
          <Link to="#" className="ft-social-link" title="LinkedIn">
            <FaLinkedin className="ft-social-icon" />
          </Link>
          <Link to="#" className="ft-social-link" title="Github">
            <FaGithub className="ft-social-icon" />
          </Link>
          <Link to="#" className="ft-social-link" title="Codepen">
            <FaCodepen className="ft-social-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
