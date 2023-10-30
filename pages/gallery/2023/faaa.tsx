import React from "react";
import Gallery from "../../../components/Gallery";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FAAA() {

    const images = [
        
        ]

    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <h1>FAAA XXII Annual Convention 2023 Videos</h1>
                <br />
                <h3>Tarana</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/-3ZSbaY5gyI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Day 1</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/WK-3bqOtks0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Day 2</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/ijkcN36_Pl8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <Gallery images = {images} title = "FAAA XXII Annual Convention 2023" year = "2023"></Gallery>
            </div>
            <Footer />
        </Container>
    )
}