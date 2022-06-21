import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="register__form" onSubmit={handleRegister}>
            <h1 className="text-danger">
              <strong>Buat Akun</strong>
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
            <div className="d-grid gap-2">
              <Button variant="danger" type="submit" size="md">
                Daftar
              </Button>
            </div>
            {/* End of Submit */}

            <div className="py-4">
              <p>
                Sudah punya akun? {""}
                <Link className="link__style" to="/login">
                  <strong>Masuk</strong>
                </Link>
              </p>
            </div>
          </Form>
        </Col>

        {/* Banner */}
        <Col md={6} className="register__bg--container"></Col>
      </Row>
    </Container>
  );
};

export default Register;
