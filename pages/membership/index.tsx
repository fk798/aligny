import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function Membership() {
  return (
    <Container>
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navigation />
        <div style={{textAlign: "center", paddingTop: "50px"}}>
          <h1>Become a Member!</h1>
        </div>
            <p>The Aligarh Alumni Association of New York is geared towards achieving the goals of Sir Syed Ahmad Khan such as education and economic development of under-privileged communities, emphasis on modern scientific knowledge and work towards unity and harmony among different communities. In order to achieve those goals AAANY welcomes everyone to join our organization!</p>
            <p>To become a member, please fill out the form below and email us at <a href = "mailto:aaanyteam@gmail.com">aaanyteam@gmail.com</a>.</p>
            <div style = {{textAlign: "center"}}>
            <object data = "https://aaany-assets.s3.amazonaws.com/2024/Membershi+Form+2024.pdf" width="800" height = "1000"></object>
            </div>
      </main>

      <Footer />
    </Container>
  )
}
