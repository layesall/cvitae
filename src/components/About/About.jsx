import React from "react";
import { FaFileExport, FaEnvelope } from "react-icons/fa";
import "./About.css";

import { AppConfig } from "../../config/AppConfig";
import curriculum from '../../assets/cv/layesall-cv.pdf';

export default function About() {
  return (
    <div id="about" className="about-component">
      <div className="about-image"></div>
      <div className="about-item">
        <h1 className="about-item-title">{AppConfig("app").app_name}</h1>
        <h2 className="about-item-subtitle">
          {AppConfig("app").app_shortname}
        </h2>
        <p className="about-item-text">{AppConfig("app").app_descriptions}</p>
        <div className="btn-curriculum-group">
        <a href={curriculum} title="Mon Curriculum Vitae" className="btn-curriculum">
          <FaFileExport className="cv-icon" />
          <span className="cv-text">Curriculum</span>
        </a>
        <a href="#contact" title="Me contacter" className="btn-curriculum">
          <FaEnvelope className="cv-icon" />
          <span className="cv-text">Contact</span>
        </a>
        </div>
      </div>
    </div>
  );
}
