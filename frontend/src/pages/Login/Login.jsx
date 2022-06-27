import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import { LinkContainer } from "react-router-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="login__form" onSubmit={handleLogin}>
            <h1 className="text-danger">
              <strong>Bhinneka Academy</strong>
            </h1>

            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {/* End of email */}

            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* End of Password */}

            {/* Submit */}
            <LinkContainer to="/">
            <div className="d-grid gap-2">
              <Button variant="danger" type="submit" size="md">
                Masuk
              </Button>
            </div>
            </LinkContainer>
            {/* End of Submit */}

            <div className="py-4">
              <p>
                Belum punya akun?{" "}
                <Link className="link__style" to="/register">
                  <strong>Daftar</strong>
                </Link>
              </p>
            </div>
          </Form>
        </Col>

        {/* Banner */}
        <Col md={6} className="login__bg--container"></Col>
      </Row>
    </Container>
  );
};

export default Login;
