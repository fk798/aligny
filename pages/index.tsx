import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth = "xl">
      <Head>
        <title>AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <h1 className="title" style = {{textAlign: "center"}}>
          Aligarh Alumni Association of New York (AAANY)
        </h1>
        <h3 style = {{textAlign: "center"}}>A Non-Profit 501(C)(3) Educational and Charitable Organization, Tax ID #13-4002794</h3>

        <p>Sir Syed Ahmad Khan was a reformist, thinker, philosopher, educationist of the nineteenth century British India and the architect of modern India. He was born in New Delhi on October 17, 1817.  He was well conversant in Urdu, Persian and Arabic. He started his career as a Civil servant in the court of Law, Agra in 1838. He graduated with a degree in law and judicial services from East India Company College.</p>

        <p>The aftermath of the Indian War of Independence of 1857 left Muslims economically weak and emotionally ripped. Sir Syed was saddened by the misery around him. He was quick to realize that education is the only key to success for Muslims.  He wanted them to get involved in public life and government services in India.</p>

        <p>He founded the Muhammadan Anglo Oriental (MAO) College in Aligarh in 1877 in line with Oxford and Cambridge universities, England. This was the first residential educational institution setup by the government in India.</p>

        <p>At the start the college was affiliated with the University of Calcutta. Later, it was affiliated with the University of Allahabad in 1885. The MAO College was eventually renamed as Aligarh Muslim University in 1920.</p>

        <p>Sir Syed died on March 27, 1898. He was buried in the premises of the University Mosque in the Sir Syed Hall of AMU.</p>

        <p>AMU is considered as one of the top ranked universities in India. Its alumni are spread across the world in different countries working under organizations and associations The Alumni remain connected to AMU and try to follow the dream of Sir Syed. Today. Sir Syed’s mission of peace, education and humility is visible globally. The Alumni remain the torch bearers!</p>

        <div style = {{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
          <h2>Upcoming Events</h2>
          <img src = "https://aaany-assets.s3.amazonaws.com/images/Invitation+to+SSD+Dinner+2022.png" width = "50%" style = {{border: "5px solid #000"}}></img>
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
