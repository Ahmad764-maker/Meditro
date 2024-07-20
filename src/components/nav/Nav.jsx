// import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
export default function Navs() {
  const [currentActive, setCurrentActive] = useState("home");
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/imgs/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => {
                setCurrentActive("home");
              }}
              href="#home"
              className={currentActive === "home" ? "active" : null}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentActive("about");
              }}
              href="#about"
              className={currentActive === "about" ? "active" : null}
            >
              About-Us
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentActive("test");
              }}
              href="#testimonal"
              className={currentActive === "test" ? "active" : null}
            >
              Testimonal
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentActive("contact");
              }}
              href="#contact"
              className={currentActive === "contact" ? "active" : null}
            >
              Contact-Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
