import React, {Component} from "react";
import Card from "../card/cardUI";
import img1 from "../images/banner-login.png"
import img2 from "../images/banner-register.png"
import img3 from "../images/banner-login.png"

class Cards extends Component{
    
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="10 Bahasa Pemrograman" 
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Quis voluptate perspiciatis in corrupti blanditiis facilis 
                            repudiandae similique doloremque eum aliquam."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Apa itu React JS" 
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Quis voluptate perspiciatis in corrupti blanditiis facilis 
                            repudiandae similique doloremque eum aliquam."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Belajar JavaScript"
                         text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                         Quis voluptate perspiciatis in corrupti blanditiis facilis 
                         repudiandae similique doloremque eum aliquam."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards