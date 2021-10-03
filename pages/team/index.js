import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from "../../components/Footer"
import { Grid } from '@mui/material'
import { Container } from '@mui/material'

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
                  <img src="https://s3.amazonaws.com/aaany-assets/images/team/usmani.jpg" height = "215"></img>
                  <p><b>President</b></p>
                  <p>Kauser Usmani</p>
              </Grid>
              <Grid item xs = {6}>
                  <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQ8bbQ4LHgAhXthOAKHR39CTkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblank%2F&psig=AOvVaw2na_Bn5FKR33fbLvxWzOvq&ust=1549908336506420" height = "215"></img>
                  <p><b>Vice-President</b></p>
                  <p>Shoaib Zahoori</p>
              </Grid>
              <Grid item xs = {6}>
                  <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQ8bbQ4LHgAhXthOAKHR39CTkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblank%2F&psig=AOvVaw2na_Bn5FKR33fbLvxWzOvq&ust=1549908336506420"></img>
                  <p><b>Secretary</b></p>
                  <p>Hina Kausar</p>
              </Grid>
              <Grid item xs = {6}>
                  <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQ8bbQ4LHgAhXthOAKHR39CTkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblank%2F&psig=AOvVaw2na_Bn5FKR33fbLvxWzOvq&ust=1549908336506420"></img>
                  <p><b>Treasurer</b></p>
                  <p>Bushra Karim</p>
              </Grid>
          </Grid>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
