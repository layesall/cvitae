import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCode,
  FaTools,
  FaEnvelope,
  FaFileExport,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-component">
      <div className="footer-top">
        <div className="ft-nav-group">
          <Link to="/" className="ft-nav-link" title="Layesall">
            <FaUser className="ft-nav-icon" />
            <span className="ft-nav-text">Layesall</span>
          </Link>
          <Link to="#portfolio" className="ft-nav-link" title="Realisations">
            <FaCode className="ft-nav-icon" />
            <span className="ft-nav-text">Réalisations</span>
          </Link>
          <Link to="#skills" className="ft-nav-link" title="Competences">
            <FaTools className="ft-nav-icon" />
            <span className="ft-nav-text">Compétences</span>
          </Link>
          <Link to="#contact" className="ft-nav-link" title="Contact">
            <FaEnvelope className="ft-nav-icon" />
            <span className="ft-nav-text">Contact</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="ft-copyright"> &copy; Layesall &middot; 2022 </div>
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
