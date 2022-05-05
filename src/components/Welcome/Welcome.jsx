import React from "react";
import "./Welcome.css";

import Footer from "../Footer/Footer";
import About from "../About/About";
import Realizations from "../Realizations/Realizations";
import Skills from "../Skills/Skills";

export default function Welcome() {
  return (
    <>
      <About />
      <Realizations />
      <Skills />
      <Footer />
    </>
  );
}
