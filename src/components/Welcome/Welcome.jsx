import React, {useState, useEffect} from "react";
import "./Welcome.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import cvdata from "../../config/config.json"

export default function Welcome() {

  const [cvitae, setCvitae] = useState([]);

  useEffect(() => {
    return () => {
      setCvitae(cvdata);
    };
  }, []);
  
  console.log(cvitae);

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
