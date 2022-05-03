import React from "react";
import "./Welcome.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Welcome() {
  return (
    <div className="welcome-component">
      <Header />

      <div className="welcome-box">
        <h2>Welcome in</h2>
        <h1>Nikouone</h1>
        <p>
          A simple starter kit with necessary dependencies for a React project .
        </p>
      </div>

      <Footer />
    </div>
  );
}
