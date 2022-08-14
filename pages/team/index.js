import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'

function Member(props) {
  return (
    <React.Fragment>
      <img src={props.link} height = "215"></img>
      <p><b>{props.title}</b></p>
      <p>{props.name}</p>
    </React.Fragment>
  )
}

export default function Team() {
  return (
    <Container maxWidth = "xl">
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navigation />
        <div style={{textAlign: "center", paddingTop: "50px"}}>
          <Grid container spacing = {2}>
              <Grid item xs = {6}>
                <Member link = "https://s3.amazonaws.com/aaany-assets/images/team/usmani.jpg" title = "President" name = "Kauser Usmani"/>
              </Grid>
              <Grid item xs = {6}>
                <Member link = "https://s3.amazonaws.com/aaany-assets/images/team/usmani.jpg" title = "Vice-President" name = "Shoaib Zahoori"/> 
              </Grid>
              <Grid item xs = {6}>
                <Member link = "https://s3.amazonaws.com/aaany-assets/images/team/usmani.jpg" title = "Secretary" name = "Hina Kausar"/>
              </Grid>
              <Grid item xs = {6}>
                <Member link = "https://s3.amazonaws.com/aaany-assets/images/team/usmani.jpg" title = "Treasurer" name = "Bushra Karim"/>
              </Grid>
          </Grid>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
