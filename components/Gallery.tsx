import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Head from 'next/head'

function Gallery(props) {

  const images = props.images

  return (
    <React.Fragment>
      <Head>
        <title>Gallery {props.year}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{props.title}</h1>
      <br></br>
      <Carousel variant = "dark">
        {
          images.map( (image) => <Carousel.Item><img src = {image.original} key = "image" alt = "image" style = {{width: "50%", maxWidth: "1000px"}} /></Carousel.Item>)
        }
      </Carousel>
    </React.Fragment>
  );
}


export default Gallery;