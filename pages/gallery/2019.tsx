import React from "react";
import Gallery from "../../components/Gallery";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from "@mui/material";


export default function _2019() {

    const images = [
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2019/DYQK6403.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2019/PDFV8152.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2019/PDFV8535.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2019/PDNQ9062.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2019/RGMP9057.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2019/YJRF9607.JPG' },
        ]

    return (
        <Container maxWidth = "xl">
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Gallery images = {images} title = "Sir Syed Day Mushaira 2019" year = "2019"></Gallery>
            </div>
            <Footer />
        </Container>
    )
}