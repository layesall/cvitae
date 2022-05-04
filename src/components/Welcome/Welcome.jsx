import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Welcome.css";

import { AppConfig } from "../../config/AppConfig";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Realizations from "../Realizations/Realizations";

export default function Welcome() {
  return (
    <>
      <About />
      <Realizations />

      <Footer />
    </>
  );
}
