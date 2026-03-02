import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">About Us</span>
          <h1>Our Story &amp; Mission</h1>
        </div>
      </div>

      <div className="content-section">
        <p>
          The Aligarh Alumni Association New York (AAANY), founded in 1998, is a non-political, non-profit, 
          charitable, educational, cultural, and secular organization for alumni of Aligarh Muslim University 
          (AMU), Aligarh, India, and its well-wishers. 
        </p>
        <p>
          The Association organizes social, literary, and cultural programs and helps under-privileged students 
          financially as well as educationally in India. The aims and objectives of the Association are to develop 
          and strengthen a sense of community by organizing social events in the New York area and to promote 
          cultural awareness through cultural and literary activities.
        </p>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Annual Activities</h3>
        <ul>
          <li>
            <strong>Mushaira</strong> — Annual Urdu poetry recitation on the occasion of Sir Syed Day Dinner, 
            featuring local and international poets.
          </li>
          <li>
            <strong>Sir Syed Lifetime Achievement Awards</strong> — Recognizing persons whose contributions 
            embody the visions of Sir Syed Ahmad Khan.
          </li>
          <li>
            <strong>Annual Magazine</strong> — The New York Alig, our annual publication documenting the 
            work and contributions of AAANY and its community.
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
