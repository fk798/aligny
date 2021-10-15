import React from "react";
import Publication from "../../components/Publication"
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from "@mui/material";


export default function _2019() {
    return (
        <Container maxWidth = "xl">
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication cover = "Title+Sir+Syed+Ahmad+2019.pdf" english = "Eng.pdf" urdu = "Urdu.pdf" title = "Sir Syed Day Mushaira 2019" year = "2019"></Publication>
            </div>
            <Footer />
        </Container>
    )
}