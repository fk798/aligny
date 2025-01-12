import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Constitution() {
  return (
    <Container maxWidth = "xl">
      <Head>
        <title>Constitution and Bylaws of AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
        <h1 className="title" style = {{textAlign: "center"}}>
        Constitution and Bylaws of AAANY
        </h1>
        <div style = {{textAlign: "center"}}>
            <object data = "https://aaany-assets.s3.us-east-1.amazonaws.com/files/Amendments_to_the_Constitution_and_ByLaws_of_AAA_NYTri-State+2011.pdf" width="800" height = "1000"></object>
            </div>
      </main>

      <Footer />

    </Container>
  )
}
