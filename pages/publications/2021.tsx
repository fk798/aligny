import React from "react";
import Publication from "../../components/Publication"
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function _2021() {
    const pdfs = [["Publication 2021", "https://aaany-assets.s3.amazonaws.com/images/publications/2021/Revised+Booklet.pdf"]]
    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication pdfs = {pdfs} year = "2021"></Publication>
            </div>
            <Footer />
        </Container>
    )
}