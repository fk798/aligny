import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <h1>Archive</h1>
        </div>
        <div style = {{textAlign: "center"}}>
          <h3>Reflections on COVID-19</h3>
          <iframe width="600" height="400" src="https://www.youtube.com/embed/kmu5KfDaK6c" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
