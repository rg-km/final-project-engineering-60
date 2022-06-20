import React from 'react'
import About from "./About"
import {Container, Row, Col} from "react-bootstrap";

import faizal from "../../images/faizal.jpeg";
import hafizul from "../../images/hafizul.jpeg";
import alkautsar from "../../images/alkautsar.jpeg";
import nurul from "../../images/nurul.jpeg";
import lisma from "../../images/lisma.jpeg";
import wanita from "../../images/wanita.jpg";

const isi =[
    {
        id:1,
        title:"Faizal Aji Wibowo",
        job: "Frontend",
        body: "Mahasiswa Teknik Informatika dari Politeknik Harapan Bersama Kota Tegal",
        image:faizal,
        url: "https://instagram.com/faizalajiw"
    },
    {
        id:2,
        title:"Hafizul Akbar",
        job: "Frontend",
        body: "Mahasiswa MIPA Informatika dari Universitas Syiah Kuala Kota Banda Aceh",
        image:hafizul,
        url: "https://instagram.com/hfizulakbr"
    },
    {
        id:3,
        title:"Muh. Al-Kautsar Hasril",
        job: "Frontend",
        body: "Mahasiswa Teknik Elektro dari Universitas Hasanuddin Kota Makasar",
        image:alkautsar,
        url: "https://instagram.com/kamaboko_gonpachiro"
    }
]

const isi2 = [
    {
        id:1,
        title:"Nurul Aqmarina",
        job: "Frontend",
        body: "Mahasiswa Sistem Informasi dari Universitas Trunojoyo Madura",
        image:nurul,
        url: "https://instagram.com/aqmarrina"
    },
    {
        id:2,
        title:"Lisma Nurmala",
        job: "Backend",
        body: "Mahasiswa Sistem Informasi dari STMIK AMIK Bandung",
        image:lisma,
        url: "https://instagram.com/ehlisma"
    },
    {
        id:3,
        title:"Gloria Pabiola",
        job: "Backend",
        body: "Mahasiswa MIPA dari Universitas di Indonesia",
        image:wanita,
        url: "https://instagram.com"
    }
]

function Card() {
  return (
    <Container fluid>
        <Row className='bg-light mb-5 py-4'>
            <h1 className="text-center">About</h1>
        </Row>
        <Row className="justify-content-md-center mb-5">
            {
                isi.map(content => (
                    <Col md={3} key={isi.id}>
                        <About title={content.title} image={content.image} body={content.body} job={content.job}
                        url={content.url}/>
                    </Col>
                ))
            }
        </Row>
        <Row className="justify-content-md-center mb-5">
            {
                isi2.map(Card => (
                    <Col md={3} key={isi2.id}>
                        <About title={Card.title} image={Card.image} body={Card.body} job={Card.job} url={Card.url}/>
                    </Col>
                ))
            }
        </Row>
        <Row className='bg-dark py-2'>
            <div className="text-center text-white">
                &copy; 2022 Bhinneka Academy — Create by Kelompok 60
            </div>
        </Row>
    </Container>
  )
}

export default Card