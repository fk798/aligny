import React from "react";
import Gallery from "../../components/Gallery";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function _2018() {

    const images = [
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/01 Top Left.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/01 Top Right.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/02 Upper Headline.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/03 - 3 Col (1a) (2).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/03 - 3 Col (2).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (1).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (10).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (2).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (3).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (4).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (5).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (6).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (7).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (8).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/04 Singles (9).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (10).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (11).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (12).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (13).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (14).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (15).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (16).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (17).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (18).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (3).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (7).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (8).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/06 Singles (9).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/07 - Two COl .JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/08 - 4 Col.jpg' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/09-.JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (1).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (10).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (11).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (12).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (13).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (14).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (15).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (16).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (17).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (2).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (3).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (4).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (5).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (6).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (7).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (8).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/10 Singles (9).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/11- (1).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/11- (2).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/11- (3).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/11- (4).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/11- (5).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (10).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (11).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (12).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (13).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (16).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (17).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (19).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (20).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (22).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (27).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (6).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (7).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (8).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/12 Bottom (9).JPG' },
        { original: 'https://s3.amazonaws.com/aaany-assets/images/2018/DNWK4528.JPG' },
        ]

    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Gallery images = {images} title = "Sir Syed Day Mushaira 2018" year = "2018"></Gallery>
            </div>
            <Footer />
        </Container>
    )
}