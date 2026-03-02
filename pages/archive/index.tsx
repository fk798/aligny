import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Archive() {
  return (
    <>
      <Head>
        <title>Archive — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Past Events</span>
          <h1>Archive</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-aaany" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Reflections on COVID-19</h3>
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/kmu5KfDaK6c" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Reflections on COVID-19"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
