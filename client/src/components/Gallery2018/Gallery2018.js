import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
//import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "./Gallery2018.css";

class Gallery2018 extends Component {
   
  render() {
      const images = [
        { original: require('../images/2018/01 Top Left.JPG') },
        { original: require('../images/2018/01 Top Right.JPG') },
        { original: require('../images/2018/02 Upper Headline.JPG') },
        { original: require('../images/2018/03 - 3 Col (1a) (2).JPG') },
        { original: require('../images/2018/03 - 3 Col (2).JPG') },
        { original: require('../images/2018/04 Singles (1).JPG') },
        { original: require('../images/2018/04 Singles (10).JPG') },
        { original: require('../images/2018/04 Singles (2).JPG') },
        { original: require('../images/2018/04 Singles (3).JPG') },
        { original: require('../images/2018/04 Singles (4).JPG') },
        { original: require('../images/2018/04 Singles (5).JPG') },
        { original: require('../images/2018/04 Singles (6).JPG') },
        { original: require('../images/2018/04 Singles (7).JPG') },
        { original: require('../images/2018/04 Singles (8).JPG') },
        { original: require('../images/2018/04 Singles (9).JPG') },
        { original: require('../images/2018/06 Singles (10).JPG') },
        { original: require('../images/2018/06 Singles (11).JPG') },
        { original: require('../images/2018/06 Singles (12).JPG') },
        { original: require('../images/2018/06 Singles (13).JPG') },
        { original: require('../images/2018/06 Singles (14).JPG') },
        { original: require('../images/2018/06 Singles (15).JPG') },
        { original: require('../images/2018/06 Singles (16).JPG') },
        { original: require('../images/2018/06 Singles (17).JPG') },
        { original: require('../images/2018/06 Singles (18).JPG') },
        { original: require('../images/2018/06 Singles (3).JPG') },
        { original: require('../images/2018/06 Singles (7).JPG') },
        { original: require('../images/2018/06 Singles (8).JPG') },
        { original: require('../images/2018/06 Singles (9).JPG') },
        { original: require('../images/2018/07 - Two COl .JPG') },
        { original: require('../images/2018/08 - 4 Col.jpg') },
        { original: require('../images/2018/09-.JPG') },
        { original: require('../images/2018/10 Singles (1).JPG') },
        { original: require('../images/2018/10 Singles (10).JPG') },
        { original: require('../images/2018/10 Singles (11).JPG') },
        { original: require('../images/2018/10 Singles (12).JPG') },
        { original: require('../images/2018/10 Singles (13).JPG') },
        { original: require('../images/2018/10 Singles (14).JPG') },
        { original: require('../images/2018/10 Singles (15).JPG') },
        { original: require('../images/2018/10 Singles (16).JPG') },
        { original: require('../images/2018/10 Singles (17).JPG') },
        { original: require('../images/2018/10 Singles (2).JPG') },
        { original: require('../images/2018/10 Singles (3).JPG') },
        { original: require('../images/2018/10 Singles (4).JPG') },
        { original: require('../images/2018/10 Singles (5).JPG') },
        { original: require('../images/2018/10 Singles (6).JPG') },
        { original: require('../images/2018/10 Singles (7).JPG') },
        { original: require('../images/2018/10 Singles (8).JPG') },
        { original: require('../images/2018/10 Singles (9).JPG') },
        { original: require('../images/2018/11- (1).JPG') },
        { original: require('../images/2018/11- (2).JPG') },
        { original: require('../images/2018/11- (3).JPG') },
        { original: require('../images/2018/11- (4).JPG') },
        { original: require('../images/2018/11- (5).JPG') },
        { original: require('../images/2018/12 Bottom (10).JPG') },
        { original: require('../images/2018/12 Bottom (11).JPG') },
        { original: require('../images/2018/12 Bottom (12).JPG') },
        { original: require('../images/2018/12 Bottom (13).JPG') },
        { original: require('../images/2018/12 Bottom (16).JPG') },
        { original: require('../images/2018/12 Bottom (17).JPG') },
        { original: require('../images/2018/12 Bottom (19).JPG') },
        { original: require('../images/2018/12 Bottom (20).JPG') },
        { original: require('../images/2018/12 Bottom (22).JPG') },
        { original: require('../images/2018/12 Bottom (27).JPG') },
        { original: require('../images/2018/12 Bottom (6).JPG') },
        { original: require('../images/2018/12 Bottom (7).JPG') },
        { original: require('../images/2018/12 Bottom (8).JPG') },
        { original: require('../images/2018/12 Bottom (9).JPG') }
        ]

    return (
      <React.Fragment>
        <h1>Sir Syed Day Mushaira 2018</h1>
        <br></br>
        <ImageGallery items={images} />
      </React.Fragment>
    );
  }

}

export default Gallery2018;