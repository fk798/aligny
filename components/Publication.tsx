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
        {props.pdfs.map((elem) => {
          return (
            <React.Fragment>
              <h2>{elem[0]}</h2>
              <embed src = {elem[1]} width = "50%" height = "1000px"/>
            </React.Fragment>
          )})}
        <br></br>

    </React.Fragment>
  );
}


export default Gallery;