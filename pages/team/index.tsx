import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl?: string;
}

function TeamMember({ name, title, imageUrl }: TeamMemberProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className="team-card">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="team-card-photo" />
      ) : (
        <div className="team-card-photo" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 600,
          color: 'var(--color-primary)', background: 'var(--color-bg-cream)',
        }}>
          {initials}
        </div>
      )}
      <h4>{name}</h4>
      <span className="role">{title}</span>
    </div>
  );
}

const teamMembers = [
  { name: 'Irfan Beg', title: 'President' },
  { name: 'Shah Shoib Faizan', title: 'Vice President' },
  { name: 'Ahmed Hussain Zubair', title: 'Secretary' },
  { name: 'Bushra Karim', title: 'Treasurer' },
  { name: 'Kamran Ahmad', title: 'Joint Treasurer' },
  { name: 'Shiraz Mujtaba', title: 'Joint Secretary' },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team — AAANY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Leadership</span>
          <h1>Our Team</h1>
          <p>The dedicated individuals leading AAANY forward.</p>
        </div>
      </div>

      <section className="section">
        <div className="container-aaany">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.name} 
                name={member.name} 
                title={member.title} 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
