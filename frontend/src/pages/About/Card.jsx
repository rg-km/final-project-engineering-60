import React from "react";
import About from "./About";
import { Container, Row, Col } from "react-bootstrap";
import { profile1, profile2 } from "../../components/config/data";

const Card = () => {
  return (
    <Container fluid>
      <Row className="bg-light mb-5 py-4">
        <h1 className="text-center">About</h1>
      </Row>
      <Row className="justify-content-md-center mb-5">
        {profile1.map((content) => (
          <Col md={3} key={profile1.id}>
            <About
              title={content.title}
              image={content.image}
              body={content.body}
              job={content.job}
              url={content.url}
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center mb-5">
        {profile2.map((Card) => (
          <Col md={3} key={profile2.id}>
            <About
              title={Card.title}
              image={Card.image}
              body={Card.body}
              job={Card.job}
              url={Card.url}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
