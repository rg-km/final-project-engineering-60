import React from "react";
import '../styles/hero.css';
import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="hero__title">
            <span className="hero__title--span">Bhinneka Academy</span>
            <br />
            <span className="hero__title--span">Mencerdaskan Bangsa</span>
          </div>
          <div className="hero__subtitle">
            <span className="hero__subtitle--span">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div className="">
            <Button variant="danger" size="md" className="hero__button">
              <span>Browse Article</span>
            </Button>
          </div>
        </Col>

        {/* Banner */}
        <Col md={6} className="register__bg--container"></Col>
      </Row>
    </Container>
  );
};

export default Hero;
