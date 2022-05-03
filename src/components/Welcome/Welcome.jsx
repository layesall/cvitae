import React, { useState, useEffect } from "react";
import "./Welcome.css";

import Footer from "../Footer/Footer";

import cvdata from "../../config/config.json";

export default function Welcome() {
  const [cvitae, setCvitae] = useState([]);

  useEffect(() => {
    return () => {
      setCvitae(cvdata);
    };
  }, []);

  console.log(cvitae);

  return (
    <>
      <div id="about" className="welcome-component">
        <h1>Welcome</h1>
      </div>
      <Footer />
    </>
  );
}
