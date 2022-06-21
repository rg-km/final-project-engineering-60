import React from "react";
import '../styles/hero.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import HeroPict from '../images/banner-login.png';

const Hero = () => {
    return(
        <div className="hero p-8">
            <Container>
                <Row>
                    <Col>
                        <div className="hero__title">
                            <span className="hero__title--span">
                                Bhinneka Academy
                            </span>
                            <br />
                            <span className="hero__title--span">
                                Mencerdaskan Bangsa
                            </span>
                        </div>
                        <div className="hero__subtitle">
                            <span className="hero__subtitle--span">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span>
                        </div>
                        <div className="">
                            <Button variant="danger" size="md" className="hero__button">
                                <span>
                                    Browse Article
                                </span>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <img src={HeroPict} alt="Hero Picture"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Hero;