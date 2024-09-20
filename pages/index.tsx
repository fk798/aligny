import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic'
//const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false });

export default function Home() {
  return (
    <React.Fragment>
    <Container>
      <Head>
        <title>AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <div style = {{textAlign: "center", paddingTop: "25px", paddingBottom: "50px"}}>
          
          <h2>Come join us for our annual 2024 Sir Syed Day Dinner and Grand International Mushaira!</h2>
          <div style = {{textAlign: "center", width: "75%"}}><img src = "https://aaany-assets.s3.amazonaws.com/2024/flyer-2024.jpg"></img></div>
          <br />
          <h2>Thank you for attending the 2023 AAANY Sir Syed Day Dinner and Mushaira!</h2>
          <br />
          <h3>Speeches and Awards</h3>
          <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/LVC9nlde-cQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
          <br />
          <h3>Mushaira</h3>
          <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/TfoBoE1hPlE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
          <br />
          <h3>Flyer 2023</h3>
          <img src = "/flyerF2023NY-1.png" width = "50%" style = {{border: "5px solid #000"}}></img>
          <br />
        </div>

        <h2 style = {{textAlign: "center"}}>AAANY</h2>
          <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/I5QtnY4PpJg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
        <br></br>
        <p style = {{textAlign: "center"}}><b>Sir Syed, Aligarh Muslim University, and the Aligarh Alumni Association</b></p>
        <p>Sir Syed Ahmad Khan was a reformist, thinker, philosopher, educationist of the nineteenth century British India and the architect of modern India. He was born in New Delhi on October 17, 1817.  He was well conversant in Urdu, Persian and Arabic. He started his career as a Civil servant in the court of Law, Agra in 1838. He graduated with a degree in law and judicial services from East India Company College.</p>

        <p>The aftermath of the Indian War of Independence of 1857 left Muslims economically weak and emotionally ripped. Sir Syed was saddened by the misery around him. He was quick to realize that education is the only key to success for Muslims.  He wanted them to get involved in public life and government services in India.</p>

        <p>He founded the Muhammadan Anglo Oriental (MAO) College in Aligarh in 1877 in line with Oxford and Cambridge universities, England. This was the first residential educational institution setup by the government in India.</p>

        <p>At the start the college was affiliated with the University of Calcutta. Later, it was affiliated with the University of Allahabad in 1885. The MAO College was eventually renamed as Aligarh Muslim University in 1920.</p>

        <p>Sir Syed died on March 27, 1898. He was buried in the premises of the University Mosque in the Sir Syed Hall of AMU.</p>

        <p>AMU is considered as one of the top ranked universities in India. Its alumni are spread across the world in different countries working under organizations and associations The Alumni remain connected to AMU and try to follow the dream of Sir Syed. Today. Sir Syed’s mission of peace, education and humility is visible globally. The Alumni remain the torch bearers!</p>

        <h1 className="title" style = {{textAlign: "center"}}>
          Aligarh Alumni Association of New York (AAANY)
        </h1>
        <h3 style = {{textAlign: "center"}}>A Non-Profit 501(C)(3) Educational and Charitable Organization, Tax ID #13-4002794</h3>

      </main>

      <Footer />
    </Container>
    </React.Fragment>
  )
}
