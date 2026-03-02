import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="nav-dropdown">
      <span className="nav-link-item">{label} ▾</span>
      <div className="nav-dropdown-menu">
        {children}
      </div>
    </li>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="nav-wrapper">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <img 
            src="https://aaany-assets.s3.amazonaws.com/images/logo1.png" 
            alt="AAANY Logo" 
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">Aligarh Alumni</span>
            <span className="nav-brand-sub">Association of New York</span>
          </div>
        </Link>

        <button 
          className="nav-mobile-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/team" onClick={() => setMenuOpen(false)}>Our Team</Link></li>
          
          <NavDropdown label="Gallery">
            <span className="nav-dropdown-label">2024</span>
            <Link href="/gallery/2024/picnic" onClick={() => setMenuOpen(false)}>AAANY Picnic</Link>
            <span className="nav-dropdown-label">2023</span>
            <Link href="/gallery/2023/ssd" onClick={() => setMenuOpen(false)}>Sir Syed Day</Link>
            <Link href="/gallery/2023/faaa" onClick={() => setMenuOpen(false)}>FAAA Convention</Link>
            <span className="nav-dropdown-label">Earlier</span>
            <Link href="/gallery/2022" onClick={() => setMenuOpen(false)}>2022</Link>
            <Link href="/gallery/2021" onClick={() => setMenuOpen(false)}>2021</Link>
            <Link href="/gallery/2019" onClick={() => setMenuOpen(false)}>2019</Link>
            <Link href="/gallery/2018" onClick={() => setMenuOpen(false)}>2018</Link>
            <Link href="/gallery/2017" onClick={() => setMenuOpen(false)}>2017</Link>
          </NavDropdown>

          <NavDropdown label="Publications">
            <Link href="/publications/2024" onClick={() => setMenuOpen(false)}>2024</Link>
            <span className="nav-dropdown-label">2023</span>
            <Link href="/publications/2023/ssd" onClick={() => setMenuOpen(false)}>Sir Syed Day</Link>
            <Link href="/publications/2023/faaa" onClick={() => setMenuOpen(false)}>FAAA Convention</Link>
            <span className="nav-dropdown-label">Earlier</span>
            <Link href="/publications/2022" onClick={() => setMenuOpen(false)}>2022</Link>
            <Link href="/publications/2021" onClick={() => setMenuOpen(false)}>2021</Link>
            <Link href="/publications/2019" onClick={() => setMenuOpen(false)}>2019</Link>
          </NavDropdown>

          <li><Link href="/ads" onClick={() => setMenuOpen(false)}>Ads</Link></li>
          <li><Link href="/bylaws" onClick={() => setMenuOpen(false)}>Bylaws</Link></li>
          <li><Link href="/archive" onClick={() => setMenuOpen(false)}>Archive</Link></li>
          <li><Link href="/donate" onClick={() => setMenuOpen(false)} className="nav-cta">Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
}
