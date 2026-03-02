import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Aligarh Alumni Association of New York</h3>
          <p>
            A Non-Profit 501(C)(3) Educational and Charitable Organization 
            dedicated to carrying forward the vision of Sir Syed Ahmad Khan 
            — peace, education, and harmony.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
            Tax ID: #13-4002794
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/bylaws">Bylaws</Link>
          <Link href="/archive">Archive</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="/membership">Membership</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/ads">Advertisements</Link>
          <Link href="/publications/2024">Publications</Link>
          <Link href="/gallery/2024/picnic">Gallery</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:aaanyteam@gmail.com">aaanyteam@gmail.com</a>
          <a href="tel:+17184079068">(718) 407-9068</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Aligarh Alumni Association of New York. All rights reserved.</p>
        <p>Carrying forward the legacy of Sir Syed Ahmad Khan since 1998.</p>
      </div>
    </footer>
  );
}
