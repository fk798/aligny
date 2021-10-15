import React, { Component } from "react";
import Head from 'next/head'

function Gallery(props) {

  return (
    <React.Fragment>
        <Head>
            <title>The New York Alig Sir Syed Day Magazine {props.year}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>The New York Alig Sir Syed Day Magazine {props.year}</h1>
        <h2>Cover</h2>
        <embed src = {"https://aaany-assets.s3.amazonaws.com/images/publications/" + props.year + "/" + props.cover} width = "50%" height = "1000px"/>

        <h2>English</h2>
        <embed src = {"https://aaany-assets.s3.amazonaws.com/images/publications/" + props.year + "/" + props.english} width = "50%" height = "1000px"/>

        <h2>Urdu</h2>
        <embed src = {"https://aaany-assets.s3.amazonaws.com/images/publications/" + props.year + "/" + props.urdu} width = "50%" height = "1000px"/>
        <br></br>

    </React.Fragment>
  );
}


export default Gallery;