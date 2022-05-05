import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "./Contact.css";

import { AppConfig } from "../../config/AppConfig";
import { FilterMail } from "./FilterMail";

export default function Contact() {
  const contact = AppConfig("contact");

  return (
    <div id="contact" className="contact-component">
      <Container>
        <Row>
          <Col>
            <h1 className="contact-title">
              <FaEnvelope /> {contact.title}
            </h1>
            <h4 className="contact-intro">{contact.descriptions}</h4>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="form-row">
          <Col md={6}> <div className="msg-alert">Alert</div> </Col>
        </Row>
        <Row className="form-row">
          <Col md={6}>
            <Form id="contact-form" method="post" onSubmit={FilterMail}>
              <Form.Group className="form-group">
                <Form.Control type="text" name="name" placeholder="Nom" className="form-input"/>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control type="text" name="email" id="email" placeholder="Email" className="form-input"/>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control type="text" name="subject" placeholder="Objet" className="form-input"/>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control as="textarea" rows={3} placeholder="Message" className="form-textarea" />
              </Form.Group>
              <Form.Group className="form-group">
                <Button
                  type="submit"
                  className="form-btn"
                >
                  Envoyer
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}