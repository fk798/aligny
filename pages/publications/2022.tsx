import React from "react";
import Publication from "../../components/Publication"
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function _2022() {
    const pdfs = [["Publication 2022", "https://aaany-assets.s3.amazonaws.com/images/publications/2023/SOUVENIR_pdfSTANDARDforEMAILING.pdf"]]
    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication pdfs = {pdfs} year = "2022"></Publication>
            </div>
            <Footer />
        </Container>
    )
}