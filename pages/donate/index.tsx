import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Donate() {
  return (
    <>
      <Head>
        <title>Donate — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Support Our Mission</span>
          <h1>Donate</h1>
          <p>Your generous contributions help us carry Sir Syed&apos;s vision forward.</p>
        </div>
      </div>

      <div className="content-section">
        <p>
          AAANY is a 501(C)(3) non-profit. All donations are tax-deductible. 
          Your support helps us organize educational and cultural programs, 
          assist underprivileged students, and keep the Aligarh community connected in New York.
        </p>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Ways to Give</h3>

        <div className="info-card" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ fontSize: '1.15rem' }}>📞 By Phone</h3>
          <p>Call us at <a href="tel:+17184079068" style={{ fontWeight: 600 }}>(718) 407-9068</a></p>
        </div>

        <div className="info-card" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ fontSize: '1.15rem' }}>✉️ By Check</h3>
          <p>
            Make checks payable to <strong>Aligarh Alumni Association Inc.</strong>
          </p>
          <p>
            Mail to: <strong>Mr. Kauser Usmani</strong><br />
            6504 Ocean Ave, South Arverne, NY 11692
          </p>
        </div>

        <div className="info-card" style={{ margin: '1.5rem 0' }}>
          <h3 style={{ fontSize: '1.15rem' }}>🏦 Direct Bank Transfer</h3>
          <p>
            Send donations directly to our <strong>Chase Bank Account</strong>:
          </p>
          <p>
            <strong>Routing Number:</strong> 021000021<br />
            <strong>Account Number:</strong> 965314982
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
