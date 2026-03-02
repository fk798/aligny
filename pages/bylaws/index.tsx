import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Bylaws() {
  return (
    <>
      <Head>
        <title>Constitution &amp; Bylaws — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Governance</span>
          <h1>Constitution &amp; Bylaws</h1>
        </div>
      </div>

      <div className="content-section" style={{ maxWidth: '900px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Constitution and Bylaws</h3>
        <object 
          data="https://aaany-assets.s3.us-east-1.amazonaws.com/files/bylaws-min.pdf" 
          type="application/pdf"
          className="pdf-embed"
        >
          <p>
            Unable to display PDF.{' '}
            <a href="https://aaany-assets.s3.us-east-1.amazonaws.com/files/bylaws-min.pdf" target="_blank" rel="noopener noreferrer">
              Download here
            </a>.
          </p>
        </object>

        <h3 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Amendments</h3>
        <object 
          data="https://aaany-assets.s3.us-east-1.amazonaws.com/files/Amendments_to_the_Constitution_and_ByLaws_of_AAA_NYTri-State+2011.pdf" 
          type="application/pdf"
          className="pdf-embed"
        >
          <p>
            Unable to display PDF.{' '}
            <a href="https://aaany-assets.s3.us-east-1.amazonaws.com/files/Amendments_to_the_Constitution_and_ByLaws_of_AAA_NYTri-State+2011.pdf" target="_blank" rel="noopener noreferrer">
              Download here
            </a>.
          </p>
        </object>
      </div>

      <Footer />
    </>
  );
}
