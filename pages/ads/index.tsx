import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Ads() {
  return (
    <>
      <Head>
        <title>Advertise — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Partner With Us</span>
          <h1>Advertise</h1>
          <p>Place your ad in our annual magazine.</p>
        </div>
      </div>

      <div className="content-section" style={{ maxWidth: '900px' }}>
        <p>
          If you would like to advertise in our annual magazine, please refer to the rate card below. 
          Contact us at{' '}
          <a href="mailto:aaany1017@gmail.com" style={{ fontWeight: 600 }}>aaany1017@gmail.com</a>{' '}
          for more information.
        </p>

        <object 
          data="https://aaany-assets.s3.amazonaws.com/2024/Tariff2024(3).pdf" 
          type="application/pdf"
          className="pdf-embed"
        >
          <p>
            Unable to display PDF.{' '}
            <a href="https://aaany-assets.s3.amazonaws.com/2024/Tariff2024(3).pdf" target="_blank" rel="noopener noreferrer">
              Download rate card
            </a>.
          </p>
        </object>
      </div>

      <Footer />
    </>
  );
}
