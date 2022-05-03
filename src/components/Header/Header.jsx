import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-component">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand
          href="/"
          title="Nikouone, starter-kit"
          className="nav-brand"
        >
          Nikouone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nikounav" className="nav-toggle" />
        <Navbar.Collapse id="nikounav">
          <Nav className="me-auto nav-link-group">
            <Nav.Link href="/" className="nav-link-item">
              <FaHome title="Home" className="nav-link-icon" />
            </Nav.Link>
            <Nav.Link href="#login" className="nav-link-item">
              <FaSignInAlt title="Login" className="nav-link-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
