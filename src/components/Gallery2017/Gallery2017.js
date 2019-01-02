import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
//import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "./Gallery2017.css";

class Gallery2017 extends Component {
   
  render() {
      const images = [
        { original: require('../images/2017/23396734070_commerceproduct_7182_0_0.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_10_10.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_11_11.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_12_12.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_13_13.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_1_1.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_2_2.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_3_3.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_4_4.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_5_5.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_6_6.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_7_7.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_8_8.jpg') },
        { original: require('../images/2017/23396734070_commerceproduct_7182_9_9.jpg') },
    ]

    return (
      <React.Fragment>
        <h1>Sir Syed Day Mushaira 2017</h1>
        <br></br>
        <ImageGallery items={images} />
      </React.Fragment>
    );
  }

}

export default Gallery2017;