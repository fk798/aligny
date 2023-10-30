import React from "react";
import Publication from "../../../components/Publication"
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Container } from 'react-bootstrap';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function faaa() {
    const pdfs = [["FAAA Publication/Souvenir 2023", "https://aaany-assets.s3.amazonaws.com/images/publications/2023/SOUVENIR_pdfSTANDARDforEMAILING.pdf"]]
    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <React.Fragment>
                    <Head>
                        <title>FAAA 2023</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <h1>Federation of of Aligarh Alumni Associations XXII Annual Convention hosted in New York</h1>
                    <br />
                    {pdfs.map((elem) => {
                    return (
                        <React.Fragment>
                        <h2>{elem[0]}</h2>
                        <embed src = {elem[1]} width = "50%" height = "1000px"/>
                        <br />
                        <br />
                        </React.Fragment>
                    )})}
                </React.Fragment>
            </div>
            <Footer />
        </Container>
    )
}