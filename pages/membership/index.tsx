import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Grid } from '@mui/material'
import { Container } from 'react-bootstrap'

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
            <p>The Aligarh Alumni Association of New York is geared towards achieving the goals of Sir Syed Ahmad Khan such as education and economic development of under-privileged communities, emphasis on modern scientific knowledge and work towards unity and harmony among different communities. In order to achieve those goals AAANY welcome persons as new member to be part of the organization.</p>

            <p>These are the two types of memberships:</p>
            <ul>
                <li><b>Lifetime Member</b>: Full access to all AAANY activities and publications for lifetime.</li>
                <li><b>Regular Member</b>: Full access to AAANY activities and publications for one year.</li>
            </ul>

            <p>To become a member, please fill out the form below and email us at <a href = "mailto:aaany1017@gmail.com">aaany1017@gmail.com</a>.</p>
            <div style = {{textAlign: "center"}}>
            <object data = "https://aaany-assets.s3.amazonaws.com/images/MembershipForm2022_v01.pdf" width="800" height = "1000"></object>
            </div>
      </main>

      <Footer />
    </Container>
  )
}
