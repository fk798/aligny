import React from "react";
import Publication from "../../components/Publication"
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function _2024() {
    const pdfs = [["Publication 2024", "https://aaany-assets.s3.us-east-1.amazonaws.com/2024/2024+Oct_MAGAZINE_SSDAY.pdf"]]
    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication pdfs = {pdfs} year = "2024"></Publication>
            </div>
            <Footer />
        </Container>
    )
}