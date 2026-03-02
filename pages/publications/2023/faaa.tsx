import React from 'react';
import Head from 'next/head';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function PublicationFAAA2023() {
  const pdfUrl = 'https://aaany-assets.s3.amazonaws.com/images/publications/2023/SOUVENIR_pdfSTANDARDforEMAILING.pdf';

  return (
    <>
      <Head>
        <title>FAAA 2023 Publication — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Publication</span>
          <h1>FAAA XXII Annual Convention</h1>
          <p>Federation of Aligarh Alumni Associations — hosted in New York, 2023</p>
        </div>
      </div>

      <section className="section">
        <div className="container-aaany" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>FAAA Publication / Souvenir 2023</h3>
          <div className="pdf-embed">
            <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
          </div>
          <p style={{ marginTop: '1rem' }}>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download PDF
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
