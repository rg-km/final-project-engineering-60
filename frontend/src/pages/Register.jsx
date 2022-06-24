import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import {uid} from "uid"

function Register(){
  const [register, setRegister] = useState([]);
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false});
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
  })

  console.log(formData);


  useEffect(()=>{
    axios.get("http://localhost:3005/Register").then((res) =>{
      console.log(res.data)
      setRegister(res?.data?? []);
    });
  }, []);
  
 
  function handleSubmit (e){
    e.preventDefault ();
    alert ("oke");

    let data = [...register]

    if (isUpdate.status){
      data.forEach((register) => {
        if (register.id === isUpdate.id){
            register.email = formData.email;
            register.password = formData.password;
        }
      });
    }

    else{
    let newData = { id: uid(), email: formData.email, password: formData.password };
    data.push(newData)

    axios.post("http://localhost:3005/Register", newData).then((res) =>{
      alert ("berhasil menyimpan data")
    });
  
    }

    setIsUpdate ({id: null, status: false})
    setRegister(data);
    setFormData({email:"", password:""});

  }

  function handleChange (e){
    let data = {...formData};
    data[e.target.name] = e.target.value;
    setFormData(data)
  }

  

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="register__form" onSubmit={handleSubmit}>
            <h1 className="text-danger">
              <strong>Buat Akun</strong>
            </h1>

            {/* Email */}
            <Form.Group className="form-control" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                placeholder="Masukkan Email"
                onChange={handleChange}
                value={register.email}
              />
            </Form.Group>
            {/* End of email */}

            {/* Password */}
            <Form.Group className="form-control" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Password"
                onChange={handleChange}
                value={register.password}
                name="password"
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


}

export default Register;

// biruni Dev