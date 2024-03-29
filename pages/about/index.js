import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>About AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
        <h1 className="title" style = {{textAlign: "center"}}>
          About AAANY
        </h1>
        <p>The Aligarh Alumni Association New York (AAANY), founded in 1998, is a non-political, non- profit, charitable, educational, cultural and secular organization for alumni of the Aligarh Muslim University (AMU), Aligarh, India and its well-wishers. The Association organizes social, literary, and cultural programs and helps under privileged students financially as well as educationally in India. The aims and objectives of the Association to develop and strengthen a sense of community by organizing social events in the New York area and promote cultural awareness through cultural and literary activities.</p>

        <p>These are the activities done by AAANY each year:</p>
        <ul>
            <li>1. Mushaira (poetry recitation) - On the occasion of Sir Syed Day Dinner Mushaira is conducted where local and
            international poets are invited and recite poetry in Urdu.</li>
            <li>2. Awards - Sir Syed Life Time achievement awards are given to persons whose contributions for
            achieving the visions of Sir Syed Khan is recognized. </li>
            <li>3. Magazine - Annual Publication of Magazine which contains descriptions of the work and
            contributions of well wishers to AAANY </li>
        </ul>
      </main>

      <Footer />

    </Container>
  )
}
