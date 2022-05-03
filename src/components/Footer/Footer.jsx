import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-component">
      <div className="footer-top"></div>
      <div className="footer-copyright">
        &copy; NIKOU ONE &middot; 2022 | by{" "}
        <a href="www.layesall.com" className="footer-author">
          Layesall
        </a>
      </div>
    </footer>
  );
}
