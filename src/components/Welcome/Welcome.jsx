import React from "react";
import "./Welcome.css";

import Footer from "../Footer/Footer";
import About from "../About/About";
import Realizations from "../Realizations/Realizations";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";

export default function Welcome() {
  return (
    <>
      <Loader />
      <About />
      <Realizations />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
