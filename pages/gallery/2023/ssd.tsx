import React from "react";
import Gallery from "../../../components/Gallery";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SSD() {

    const images = [
        
        ]

    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <h1>AAANY Sir Syed Day Mushaira 2023 Videos</h1>
                <br />
                <h3>Speeches and Awards</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/LVC9nlde-cQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Mushaira</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/TfoBoE1hPlE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Mushaira (short)</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/XEEMxjhj3aM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Anubhav Sinha Speech</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/VELN2OKMPyg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Anubhav Sinha Interview</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/pJbSPjVFLQI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>AMU Tarana</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/Zzvj5uinxXk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Mushaira Interviews</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/7kSP8O6Ih1Q" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Urdu News</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/HdCD0UIpYXo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>AMU Tarana</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/fr9fX3lBKv4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <Gallery images = {images} title = "AAANY Sir Syed Day Mushaira 2023" year = "2023"></Gallery>
            </div>
            <Footer />
        </Container>
    )
}