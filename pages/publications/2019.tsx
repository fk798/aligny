import React from "react";
import Publication from "../../components/Publication"
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from "@mui/material";


export default function _2019() {
    const pdfs = [["Cover", "https://aaany-assets.s3.amazonaws.com/images/publications/2019/Title+Sir+Syed+Ahmad+2019.pdf"], ["English", "https://aaany-assets.s3.amazonaws.com/images/publications/2019/Eng.pdf"], ["Urdu", "https://aaany-assets.s3.amazonaws.com/images/publications/2019/Urdu.pdf"]]
    return (
        <Container maxWidth = "xl">
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication pdfs = {pdfs} year = "2019"></Publication>
            </div>
            <Footer />
        </Container>
    )
}