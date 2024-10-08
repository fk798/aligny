import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Ads() {
  return (
    <Container>
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <h1 className="title" style = {{textAlign: "center"}}>For Advertisers:</h1>
        <div style = {{textAlign: "center", paddingBottom: "50px"}}>
          <p>If you would like to advertise on our magazine, please refer to the list below for our prices. Please email us <a href = "mailto:aaany1017@gmail.com">aaany1017@gmail.com</a> for more information.</p>
          {/*<img src = "https://aaany-assets.s3.amazonaws.com/images/Tariff-AAANY-2022.png" width = "50%" style = {{border: "5px solid #000"}}></img>*/}
          <object data = "https://aaany-assets.s3.amazonaws.com/2024/Tariff2024(3).pdf" width="800" height = "1000"></object>

        </div>
      </main>

      <Footer />
    </Container>
  )
}
