import React from "react";
import './hero.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="hero__title">
            <span className="hero__title--span">Bhinneka Academy</span>
            <br />
            <span className="hero__title--span">Belajar Budaya Indonesia</span>
          </div>
          <div className="hero__subtitle">
            <span className="hero__subtitle--span">
              Pendidikan mengajarkan manusia melintasi ruang dan waktu
            </span>
          </div>
          <div className="d-flex jsutify-content-start gap-4">
            <Button variant="danger" size="md" className="hero__button">
              <span>Browse Article</span>
            </Button>
            <Link className="" to="/CreateArticle">
              <Button variant="danger" size="md" className="hero__button" >
                <span>Create Article</span>
              </Button>
            </Link>
          </div>
        </Col>

        {/* Banner */}
        <Col md={6} className="hero"></Col>
      </Row>
    </Container>
  );
};

export default Hero;
