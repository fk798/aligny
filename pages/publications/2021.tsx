import React from "react";
import Publication from "../../components/Publication"
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from "@mui/material";


export default function _2021() {
    const pdfs = [["Publication 2021", "https://aaany-assets.s3.amazonaws.com/images/publications/2021/AAANY+Booklet.pdf"], ["Message from Vice-Chancellor of AMU, Professor Tariq Mansoor", "https://aaany-assets.s3.amazonaws.com/images/publications/2021/VC+AMU+Aligarh.pdf"], ["Message from Former Member of the House of Representatives of the State of New Mexico, Mr. Abbas Akhil", "https://aaany-assets.s3.amazonaws.com/images/publications/2021/Message+from+Mr.+Akhi+Abbas.pdf"]]
    return (
        <Container maxWidth = "xl">
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Publication pdfs = {pdfs} year = "2021"></Publication>
            </div>
            <Footer />
        </Container>
    )
}