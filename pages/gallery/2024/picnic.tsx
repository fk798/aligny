import React from "react";
import Gallery from "../../components/Gallery";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Picnic() {

    const images = [
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.21+AM.jpeg' },
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(1).jpeg' }, 
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(1).jpeg' }, 
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(1).jpeg' }, 
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(1).jpeg' }, 
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(1).jpeg' }, 
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM.jpeg' }, 
        { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.23+AM.jpeg' }, 
        ]

    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Gallery images = {images} title = "AMU Picnic 2024" year = "2024"></Gallery>
                <div style = {{textAlign: "center"}}><iframe src="https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Video+2024-07-19+at+10.53.22+AM.mp4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
            </div>
            <Footer />
        </Container>
    )
}