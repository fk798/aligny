import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Membership() {
  return (
    <>
      <Head>
        <title>Membership — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Join Us</span>
          <h1>Become a Member</h1>
          <p>Be part of the Aligarh family in New York.</p>
        </div>
      </div>

      <div className="content-section">
        <p>
          AAANY welcomes everyone who shares Sir Syed Ahmad Khan&apos;s goals of education, 
          economic development of under-privileged communities, emphasis on modern scientific 
          knowledge, and work towards unity and harmony among different communities.
        </p>
        <p>
          To become a member, please fill out the form below and email it to{' '}
          <a href="mailto:aaanyteam@gmail.com" style={{ fontWeight: 600 }}>aaanyteam@gmail.com</a>.
        </p>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <object 
            data="https://aaany-assets.s3.amazonaws.com/2024/Membershi+Form+2024.pdf" 
            className="pdf-embed"
            type="application/pdf"
          >
            <p>
              Your browser doesn&apos;t support embedded PDFs.{' '}
              <a href="https://aaany-assets.s3.amazonaws.com/2024/Membershi+Form+2024.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-green">
                Download Membership Form
              </a>
            </p>
          </object>
        </div>
      </div>

      <Footer />
    </>
  );
}
