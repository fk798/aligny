import React from "react";
import Publication from "../../../components/Publication"
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ssd() {
    const pdfs = [["Publication 2023", "https://aaany-assets.s3.amazonaws.com/images/2023/NY.ALIG.MAGAZINE_Final+10.09.23.pdf"]]
    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication pdfs = {pdfs} year = "2023"></Publication>
            </div>
            <Footer />
        </Container>
    )
}