import React from "react";
import { Container } from "react-bootstrap";


const About = ({title, job, image, body, url}) => {
    return (
        <Container>
            
            <div className="card text-center">
                <img src={image} alt="" className="card-img-top"/>
                
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <h6>{job}</h6>
                    <p className="card-text text-secondary">
                        {body}
                    </p>
                    <a href={url} className="btn btn-outline-danger">View</a>
                </div>
            </div>
        </Container>
    );
};

export default About;