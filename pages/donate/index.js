import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Container } from '@mui/material'

export default function Donate() {
  return (
    <Container maxWidth = "xl">
      <Head>
        <title>Donate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation></Navigation>
        <h1 className="title" style = {{textAlign: "center"}}>
          Donate
        </h1>
        <h3>Please send your donations through any of the following methods:</h3>
        <ul className="browser-default">
          <li>
              Call us at <b>(718) 407-9068</b>
          </li>
          <li>
              Checks are payable to <b>Aligarh Alumni Association Inc.</b>. Please mail checks to <b>Mr. Kauser Usmani</b> - <b>6504 Ocean Ave, South Arverne, NY 11692</b>
          </li>
          <li>
              Donations can be sent to Aligarh Alumni Association's <b>Chase Bank Account</b> directly. <b>Routing Number: 021000021</b>; <b>Account Number: 965314982</b>
          </li>
        </ul>
      </main>

      <Footer />

    </Container>
  )
}
