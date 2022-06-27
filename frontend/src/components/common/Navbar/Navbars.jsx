import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './navbar.css'

const Navbars = () => {
  return (
    <Navbar className="background" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-white"><img src="https://res.cloudinary.com/drpf1nmjx/image/upload/v1656331413/Logo_iz0nkb.png" alt="" /></Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-white">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-white">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/CreateArticle">
              <Nav.Link className="text-white">Create article</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link className="btn btn-danger text-white">Login</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
