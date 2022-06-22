import React, { useState, Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component{
  constructor()
    {
        super();
        this.state={
            email:'',
            password:'',
        }
    }
    login ()
    {
    
        console.warn(this.state)
        fetch("http://localhost:3005/Login?q="+ this.state.email).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp", resp)
                // if(resp.length > 0)
                // {
                //     console.warn(this.props.history.push('list'))
                // }
                // else
                // {
                //     alert("Email dan Password Tidak Terdaftar")
                // }
            })
        })
    
      }

render(){
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="login__form" >
            <h1 className="text-danger">
              <strong>Bhinneka Academy</strong>
            </h1>

            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan Email"
                name='email'
                onChange={(event)=>this.setState({email:event.target.value})}
              />
            </Form.Group>
            {/* End of email */}

            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name='password'
                placeholder="Masukkan Password"
                onChange={(event)=>this.setState({password:event.target.value})}
              />
            </Form.Group>
            {/* End of Password */}

            {/* Submit */}
            <div className="d-grid gap-2">
              <Button variant="danger" type="submit" size="md"
              onClick={()=>{this.login()}}
              >
                Masuk
              </Button>
            </div>
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
}
}


export default Login;