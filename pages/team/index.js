import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container>
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navigation />
        <div style={{textAlign: "center", paddingTop: "50px"}}>
          <Container fluid>
              <Row>
                <Col>
                  <Member link = "https://s3.amazonaws.com/aaany-assets/images/team/usmani.jpg" title = "President" name = "Kauser Usmani"/>
                </Col>
                <Col>
                  <Member link = "data:image/jpeg;base64,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" title = "Vice-President" name = "Shah Shoib Faizan"/> 
                </Col>
              </Row>
              <Row>
                <Col>
                  <Member link = "data:image/jpeg;base64,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" title = "Secretary" name = "Asiya Kabir"/>
                </Col>
                <Col>
                  <Member link = "data:image/jpeg;base64,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" title = "Treasurer" name = "Bushra Karim"/>
                </Col>
              </Row>
          </Container>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
