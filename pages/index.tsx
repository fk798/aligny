import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>AAANY — Aligarh Alumni Association of New York</title>
        <meta name="description" content="The Aligarh Alumni Association of New York — a 501(C)(3) non-profit carrying forward Sir Syed Ahmad Khan's vision of education, community, and service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label animate-in">Est. 1998 · New York City</span>
          <h1 className="animate-in animate-delay-1">
            Aligarh Alumni<br />Association of <em>New York</em>
          </h1>
          <p className="hero-subtitle animate-in animate-delay-2">
            Carrying forward Sir Syed Ahmad Khan&apos;s enduring mission of 
            education, unity, and service — from Aligarh to the world.
          </p>
          <div className="hero-cta-group animate-in animate-delay-3">
            <Link href="/membership" className="btn btn-primary">Become a Member</Link>
            <Link href="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── Upcoming Event Banner ── */}
      <section className="section-sm" style={{ background: 'var(--color-bg)' }}>
        <div className="container-aaany">
          <div className="event-banner">
            <div className="event-banner-inner">
              <img 
                src="https://aaany-assets.s3.us-east-1.amazonaws.com/2025/IMG-20251106-WA0075.jpg" 
                alt="2025 Sir Syed Day Dinner and Grand International Mushaira"
                className="event-banner-image"
              />
              <div className="event-banner-content">
                <span className="section-label">Upcoming Event</span>
                <h2>2025 Sir Syed Day Dinner &amp; Grand International Mushaira</h2>
                <hr className="gold-line-left" />
                <p>
                  Join us for our annual celebration honoring the legacy of Sir Syed Ahmad Khan, 
                  featuring distinguished speakers, awards, and an evening of Urdu poetry 
                  with renowned poets from around the world.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <Link href="/membership" className="btn btn-green">Register Now</Link>
                  <Link href="/donate" className="btn" style={{ border: '2px solid var(--color-border)', color: 'var(--color-text)' }}>Support the Event</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About AAANY + Video ── */}
      <section className="about-section section">
        <div className="container-aaany">
          <div className="about-grid">
            <div className="about-video">
              <iframe 
                src="https://www.youtube.com/embed/I5QtnY4PpJg" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                title="AAANY Video"
              />
            </div>
            <div>
              <span className="section-label">Our Story</span>
              <h2>Sir Syed, AMU &amp; the Alumni Legacy</h2>
              <hr className="gold-line-left" />
              <p>
                Sir Syed Ahmad Khan — reformist, philosopher, and architect of modern Indian 
                education — founded the Muhammadan Anglo Oriental College in Aligarh in 1877, 
                modeled after Oxford and Cambridge. It became Aligarh Muslim University in 1920 
                and stands today as one of India&apos;s top-ranked institutions.
              </p>
              <p>
                AMU&apos;s alumni span the globe, united by Sir Syed&apos;s mission of peace, 
                education, and humility. AAANY, founded in 1998, brings that spirit to 
                New York — organizing cultural events, supporting students, and keeping the 
                Aligarh torch burning bright.
              </p>
              <Link href="/about" className="btn btn-green" style={{ marginTop: '0.5rem' }}>Read Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Pillars ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-aaany" style={{ textAlign: 'center' }}>
          <span className="section-label">What We Do</span>
          <h2>Our Mission</h2>
          <hr className="gold-line" />
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            AAANY is a non-political, non-profit, educational, cultural, and secular 
            organization serving AMU alumni and well-wishers in the New York area.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            <div className="card-aaany" style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎤</div>
              <h3>Mushaira</h3>
              <p>
                Annual Urdu poetry recitations on Sir Syed Day, featuring local and 
                international poets in a celebration of literary heritage.
              </p>
            </div>

            <div className="card-aaany" style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏆</div>
              <h3>Sir Syed Awards</h3>
              <p>
                Lifetime achievement awards recognizing outstanding individuals who 
                embody the vision and contributions of Sir Syed Ahmad Khan.
              </p>
            </div>

            <div className="card-aaany" style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📖</div>
              <h3>Annual Magazine</h3>
              <p>
                The New York Alig — our annual publication documenting the work, 
                stories, and contributions of the AAANY community.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 501(c)(3) Strip ── */}
      <section style={{ 
        background: 'var(--color-primary)', 
        color: '#fff', 
        padding: '2.5rem 0',
        textAlign: 'center' 
      }}>
        <div className="container-aaany">
          <p style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', 
            fontWeight: 500,
            color: '#fff',
            margin: 0,
            lineHeight: 1.5 
          }}>
            Aligarh Alumni Association of New York — A Non-Profit 501(C)(3) Educational 
            and Charitable Organization
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>
            Tax ID #13-4002794
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
