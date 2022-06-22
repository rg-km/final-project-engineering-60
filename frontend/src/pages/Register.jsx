import React, { useState, Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends Component{
  constructor(){
    super()
    this.state ={
      isRegister: false
    }
  }
  register(){
    console.warn("state", this.state)
    fetch('http://localhost:3005/Register' , {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp) => {
        console.log(resp.success.token);
        localStorage.setItem("register", JSON.stringify(resp.success.token))
      })
    })
  }

  render() {
    return (
      <div>
       
          

          <Container>
            <Row>
              <Col md={6}>
                <Form className="register__form" >
                  <h1 className="text-danger">
                    <strong>Buat Akun</strong>
                  </h1>
      
                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Masukkan Email"
                     onChange={(e) => { this.setState({email: e.target.value}) }}
                    />
                  </Form.Group>
                  {/* End of email */}
            
                  {/* Password */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan Password"
                      onChange={(e) => { this.setState({password: e.target.value}) }}
                    />
                  </Form.Group>
                  {/* End of Password */}
      
                  {/* Submit */}
                  <div className="d-grid gap-2">
                    <Button variant="danger" type="submit" size="md"
                    onClick={() => this.setState({isRegister: true})}
                    >
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
        :

        
            
      </div>
   
    );
      
  }
  
}

export default Register;