import React from "react";
import { Container } from "react-bootstrap";
import "./card-style.css";

const Card = props => {
    return (
        
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="banner-login" className='card-img-top'/>
            </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.text}
            </p>
            <a href="#" className="btn btn-outline-success">Lihat</a>
        </div>
        </div>
    );

}

export default Card
