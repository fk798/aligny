import React from 'react';
import Head from 'next/head';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

const videos = [
  { title: 'Tarana', id: '-3ZSbaY5gyI' },
  { title: 'Day 1', id: 'WK-3bqOtks0' },
  { title: 'Day 2', id: 'ijkcN36_Pl8' },
];

export default function FAAA() {
  return (
    <>
      <Head>
        <title>FAAA Convention 2023 — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Gallery</span>
          <h1>FAAA XXII Annual Convention 2023</h1>
          <p>Federation of Aligarh Alumni Associations — hosted in New York</p>
        </div>
      </div>

      <section className="section">
        <div className="container-aaany" style={{ textAlign: 'center' }}>
          {videos.map((video, i) => (
            <div key={i} style={{ marginBottom: '3rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>{video.title}</h3>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
