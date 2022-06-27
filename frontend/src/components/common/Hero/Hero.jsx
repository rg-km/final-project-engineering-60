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
            Pendidikan budaya dan karakter bangsa pada dasarnya adalah pengembangan nilai-nilai yang berasal dari pandangan hidup atau ideologi bangsa Indonesia, agama, budaya, dan nilai-nilai yang terumuskan dalam tujuan pendidikan nasional
            </span>
          </div>
          <div className="d-flex jsutify-content-start gap-4">
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
